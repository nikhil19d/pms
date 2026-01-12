'use client'
import { productSchema, ProductSchema } from "@/schemas/production.schema"
import { useRouter } from "next/navigation"
import { FaAngleDown } from "react-icons/fa"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Holder from "@/components/Holder"
import Card from "@/components/ui/Card"
import Input from "@/components/ui/Input"
import Navbar from "@/components/Navbar";
import { BarGraph, PieGraph, LineGraph } from "@/components/Graphs";
import DataPoint from "@/components/DataPoint";
import { Table, TableMini } from "@/components/Records";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
export default function Production() {
  const router = useRouter()
  const list = ["MODAL", "COLOR", "CHASSIS NO.", "CONTROLLER NO.", "MOTOR NO.", "QC STATUS", "TIME STAMP"]

  const [record, setRecord] = useState([
    { model: "M2", status: "pass", color: "White", chassis: "CH-3213-23", controller: "CT-3455-56", motor: "MT-6789-55", time: "2024-12-19" },
    { model: "M2", status: "pass", color: "White", chassis: "CH-3213-23", controller: "CT-3455-56", motor: "MT-6789-55", time: "2024-12-19" },
    { model: "M2", status: "pass", color: "White", chassis: "CH-3213-23", controller: "CT-3455-56", motor: "MT-6789-55", time: "2024-12-19" },
    { model: "M2", status: "pass", color: "White", chassis: "CH-3213-23", controller: "CT-3455-56", motor: "MT-6789-55", time: "2024-12-19" },
  ])

  const data = [
    { label: "M2", value: 17 },
    { label: "M2Pro", value: 12 },
    { label: "M3", value: 18 },
    { label: "M4", value: 20 },
    { label: "M5", value: 13 },
  ];

  const pie = [
    { label: 'pass', value: 500, fill: "#00d200" },
    { label: 'pending', value: 200, fill: "#ffa500" },
    { label: 'fail', value: 800, fill: "#ff0000" },
  ];

  const graph = [
    { label: "Dec 19", value: 12 },
    { label: "Dec 20", value: 7 },
    { label: "Dec 21", value: 10 },
    { label: "Dec 22", value: 10 },
    { label: "Dec 23", value: 8 },
    { label: "Dec 24", value: 14 },
    { label: "Dec 25", value: 11 },
  ]
  const model: string[] = ['m2', 'm3', 'm4', 'm5', 'm2 pro']
  const color: string[] = ['black', 'green', 'blue', 'gray', 'maroon', 'white']
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      model: "m2",
      color: "black",
      chassis: "",
      motor: "",
      controller: ""
    }
  })

  const onSubmit = (data: ProductSchema) => {
    setRecord(prev => [
      { ...data, status: "pass", time: "2026-23-12" }, ...prev])
    console.log(record)
  }

  return (
    <div className="h-fit w-screen bg-primary-50 flex flex-col gap-2.5 xl:gap-7 ">
      <Navbar src="/production.png" alt="production" heading="Production Dashboard" description="Manufacturing Control" className="text-primary-500">
        <button type="button" className="rounded-lg text-primary-500 font-medium px-6 py-2 ring ring-primary-500">John</button>
        <button type="button" className="rounded-lg text-primary-500 px-3 py-1 ring ring-primary-500">Team Name</button>
        <button onClick={() => router.push("/auth")} type="button" className="rounded-lg bg-primary-500 text-white px-4 py-2">Logout</button>
      </Navbar>

      <div className="mx-2.5 flex flex-col gap-2.5 xl:flex-row xl:self-center xl:gap-5">
        <Card number={6} description="Total Units" src="/unit.png" alt="unit" />
        <Card number={4} description="QC Pass" src="/pass.png" alt="pass" />
        <Card number={1} description="QC Pending" src="/pending.png" alt="pending" />
        <Card number={1} description="QC Rejected" src="/rejected.png" alt="rejected" />
        <Card number={4} description="QC Dispatch" src="/dispatch.png" alt="dispatch" />
      </div>

      <div className="flex flex-col gap-2.5 xl:grid xl:grid-cols-[3fr_2fr]">
        <Holder title="Manufacturing By Model" description="Unit produced per model">
          <BarGraph data={data} fill="#2ECC71" />
        </Holder>
        <Holder title="QC Status" description="Quality Distribution">
          <div className="flex justify-around items-center xl:flex-col xl:gap-20 xl:justify-center">
            <PieGraph data={pie} />
            <div className="text-base/6 font-normal flex flex-col gap-2.5 xl:flex-row xl:gap-12">
              <DataPoint title="Pass" className="bg-pass" />
              <DataPoint title="Pending" className="bg-pending" />
              <DataPoint title="Fail" className="bg-fail" />
            </div>
          </div>
        </Holder>
      </div>

      <Holder title="Production Timeline" description="Daily Manufacturing Units" className="p-8">
        <LineGraph data={graph} stroke="#2ecc71" />
      </Holder>

      <div className="bg-white rounded-xl flex flex-col gap-2.5 xl:py-5 xl:px-10">
        <div className="p-2.5">
          <h1 className="text-lg/6 font-medium xl:text-2xl/7">New Product Entry</h1>
          <p className="text-base/6 font-normal xl:text-base/6 text-secondary-300">Enter Vehicle Manufacturing Details</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 flex flex-col gap-2.5 xl:gap-6">
          <div className="flex flex-col gap-2.5 xl:flex-row">
            <div className="flex flex-col gap-2">
              <label className="text-sm/5 font-semibold xl:text-lg/5 xl:font-medium">Model Number</label>
              <div className="bg-secondary border border-secondary-300 flex justify-between p-2 gap-4 rounded-lg text-secondary-300 items-center">
                <Controller
                  name="model"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center gap-4">
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-60 flex justify-between text-secondary-300 items-center xl:w-140">
                          <SelectValue placeholder="Select Model Number" />
                        </SelectTrigger>
                        <SelectContent className="bg-secondary">
                          <SelectGroup>
                            {
                              model.map((value, index) => (<SelectItem key={index} value={value}>{value.toUpperCase()}</SelectItem>))
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                />
                <FaAngleDown size={20} className="" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm/5 font-semibold xl:text-lg/5 xl:font-medium">Color</label>
              <div className="bg-secondary border border-secondary-300 flex justify-between p-2 gap-4 rounded-lg text-secondary-300 items-center">
                <Controller
                  control={control}
                  name="color"
                  render={({ field }) => (
                    <div className="flex items-center gap-4">
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-60 flex justify-between text-secondary-300 items-center xl:w-140">
                          <SelectValue placeholder="Select Color" />
                        </SelectTrigger>
                        <SelectContent className="bg-secondary">
                          <SelectGroup>
                            {
                              color.map((value, index) => (<SelectItem key={index} value={value}>{value[0].toUpperCase() + value.slice(1)}</SelectItem>))
                            }
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                />
                <FaAngleDown size={20} className="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 xl:flex-row">
            <Input description="Chassis Number" placeholder="Enter Chassis Number" {...register('chassis')}></Input>
            <Input description="Controller Number" placeholder="Enter Controller Number" {...register('controller')}></Input>
          </div>
          <Input description="Moter Number" placeholder="Enter Moter Number" {...register('motor')}></Input>
          <button type='submit' className="text-sm/5 text-medium rounded-lg p-4 bg-primary-500 text-white mx-24 xl:self-start xl:px-36 xl:mx-0 xl:text-lg/5 xl:font-medium" >Save Entry</button>
        </form>
        <div className="flex flex-col gap-2.5 xl:mt-2.5 xl:py-8 xl:border-t xl:border-secondary-50">
          <div className="px-2">
            <h1 className="text-lg/6 font-medium xl:text-2xl/7">Recent Entries</h1>
            <p className="text-base/6 font-normal xl:text-base/6 text-secondary-300">Latest Production Record</p>
          </div>
          <div className="flex flex-col gap-2.5 mx-2.5">
            <Table label="record" heading={list} record={record} />

            <TableMini label="record" heading={list} record={record} />
          </div>
        </div>
      </div>
    </div >
  )
}
