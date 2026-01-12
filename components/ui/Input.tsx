import { forwardRef } from "react"

interface InputProps {
  description: string,
  children?: React.ReactNode,
  error?: string,
  placeholder: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ description, placeholder, children, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm/5 font-semibold xl:text-lg/5 xl:font-medium">{description}</label>
        <div className="bg-secondary border border-secondary-300 flex gap-4 p-2 rounded-lg text-secondary-300 items-center">
          {children}
          <input
            {...props}
            ref={ref}
            placeholder={placeholder}
            className="no-autofill focus:outline-none active:border-transparent placeholder:font-normal xl:w-full placeholder:text-secondary-300 placeholder:text-sm/5 placeholder:xl:text-base/6 placeholder:xl:font-normal" />
        </div>
        {
          error && (
            <p className="text-sm text-red-500">{error}</p>
          )
        }
      </div>
    )
  })
Input.displayName = "Input"
export default Input
