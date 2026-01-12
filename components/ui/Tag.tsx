import { cn } from "@/lib/utils"

type TagProps = {
  title: string | number,
  className?: string,
  variant?: "pass" | "fail" | "pending" | "unit"
}

const variants = {
  pass: "bg-pass/20",
  fail: "bg-fail",
  pending: "bg-pending/20",
  unit: "bg-blue-200/80"
}

export default function Tag({
  variant = "pass", title, className
}: TagProps) {
  return (
    <p className={cn(`inline-block text-xs/4 font-normal rounded text-center w-fit px-4 py-1 self-center justify-self-center ${className} ${variants[variant]}`)}>
      {title.toString().toUpperCase()}
    </p>
  )
}
