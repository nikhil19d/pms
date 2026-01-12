'use client'

import { useForm, Controller } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { FiEye } from "react-icons/fi"
import { MdLockOutline } from "react-icons/md"
import { TbLogin2 } from "react-icons/tb"
import { HiOutlineUserAdd } from "react-icons/hi"
import { FaUserCircle } from "react-icons/fa"
import { LuBuilding2 } from "react-icons/lu"
import { FaAngleDown } from "react-icons/fa"
import Input from "@/components/ui/Input"
import { LoginSchema, loginSchema, RegisterSchema, registerSchema } from "@/schemas/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

export default function Auth() {
  type Action = "Sign In" | "Sign Up"
  const [action, setAction] = useState<Action>("Sign In")
  const router = useRouter()
  const isSignIn = action === "Sign In"
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<LoginSchema | RegisterSchema>({
    resolver: zodResolver(isSignIn ? loginSchema : registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      departments: "management"
    }
  })
  const onSubmit = async (data: LoginSchema) => {
    console.log("Form Data:", data)
    router.push(`/dashboard/${data.departments}`)
  }
  const departments: string[] = ['management', 'admin', 'store', 'production', 'qc', 'dispatch', 'sales']
  interface Visibility {
    password: boolean,
    confirmPassword: boolean
  }
  const [visible, setVisible] = useState<Visibility>({
    password: false,
    confirmPassword: false
  })
  const handleVisibility = (key: keyof Visibility) => {
    setVisible(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="h-screen w-screen bg-primary-50 grid place-items-center">
      <div className="max-h-fit w-9/10 xl:w-3/10 bg-white rounded-lg drop-shadow-xl ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-7 w-full flex flex-col items-center gap-11">
          <div className="flex p-2 justify-evenly rounded-xl bg-secondary xl:w-9/10">
            <button
              onClick={() => setAction("Sign In")}
              type="button"
              value="signIn"
              id="signIn"
              className={`flex gap-1.5 items-center px-8 xl:text-lg/5 text-sm/normal font-medium ${action == "Sign In" ?
                "p-2 bg-primary-500 rounded-lg text-white drop-shadow-xl" :
                "text-secondary-300 "}`}
            >
              <TbLogin2 />Sign In</button>
            <button
              onClick={() => setAction("Sign Up")}
              type="button" value="signUp" id="signUp"
              className={`flex gap-1.5 items-center px-8 xl:text-lg/5 text-sm/normal font-medium ${action == "Sign Up" ?
                "p-2 bg-primary-500 rounded-lg text-white drop-shadow-xl" :
                "text-secondary-300 "}`}

            ><HiOutlineUserAdd />Sign Up</button>
          </div>
          <div className="flex flex-col gap-3 xl:w-3/4">
            <Input
              placeholder="Enter your email"
              description="Email"
              {...register('email')}
              error={errors.email?.message}
            >
              <FaUserCircle size={20} />
            </Input>
            <div className="flex flex-col gap-2">
              <label className="text-sm/5 font-semibold xl:text-lg/5 xl:font-medium">Password</label>
              <div className="bg-secondary border border-secondary-300 flex justify-between p-2 rounded-lg text-secondary-300 items-center">
                <div className="flex items-center gap-4">
                  <MdLockOutline size={20} />
                  <input
                    type={visible.password ? "text" : "password"}
                    placeholder="Enter your Password"
                    {...register('password')}
                    className="focus:outline-none placeholder:font-normal placeholder:text-secondary-300 placeholder:text-sm/5 placeholder:xl:text-base/6 placeholder:xl:font-normal" />
                </div>
                <button
                  type="button"
                  onClick={() => handleVisibility("password")}
                ><FiEye size={20} /></button>
              </div>
              {
                action == "Sign In" && <div className="flex items-center gap-1">
                  <input type="checkbox" className="accent-secondary w-0 h-0" /><span className="rounded w-4 h-4 bg-secondary"></span><label className="ml-2 text-gray text-xs/tight">Remember me</label><a href="#" className="text-xs/tight text-yellow">(Forgot Password)</a>
                </div>
              }
            </div>
            {
              action == "Sign Up" && <div className="flex flex-col gap-2">
                <label className="text-sm/5 font-semibold xl:text-lg/5 xl:font-medium">Confirm Password</label>
                <div className="bg-secondary border-secondary-300 border flex justify-between p-2 rounded-lg text-secondary-300 items-center">
                  <div className="flex items-center justify-between gap-4">
                    <MdLockOutline size={20} />
                    <input
                      type={visible.confirmPassword ? "text" : "password"}
                      {...register('confirmPassword')}
                      placeholder="Enter your Password"
                      className="focus:outline-none placeholder:font-normal placeholder:text-secondary-300 placeholder:text-sm/5 placeholder:xl:text-base/6 placeholder:xl:font-normal" />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleVisibility("confirmPassword")}
                  ><FiEye size={20} /></button>
                </div>
              </div>
            }

            <div className="flex flex-col gap-2">
              <label className="text-sm/5 font-semibold xl:text-lg/5 xl:font-medium">Department</label>
              <div className="bg-secondary border border-secondary-300 flex justify-between p-2 gap-4 rounded-lg text-secondary-300 items-center">
                <Controller
                  name="departments"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center gap-4">
                      <Select onValueChange={field.onChange} value={field.value}>
                        <LuBuilding2 size={20} />
                        <SelectTrigger className="focus:outline-none w-60 flex justify-between text-secondary-300 items-center">
                          <SelectValue placeholder="Select your Department" />
                        </SelectTrigger>
                        <SelectContent className="bg-secondary relative left-10 ">
                          <SelectGroup>
                            {
                              departments.map((str, index) => (<SelectItem key={index} value={str}>{str[0].toUpperCase() + str.slice(1)}</SelectItem>))
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>)}
                />

                <FaAngleDown size={20} className="xl:absolute xl:right-15" />
              </div>
            </div>
            <button
              type="submit"
              className="focus:outline-none bg-primary-500 w-full p-2 rounded-lg text-sm/5 xl:p-4 xl:text-lg/5 xl:font-medium font-medium text-white flex justify-center items-center gap-3 ">
              {
                action == "Sign In" ?
                  <TbLogin2 size={20} /> :
                  <HiOutlineUserAdd size={20} />
              }
              {action}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
