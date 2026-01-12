type ColorProps = {
  variant?: "white" | "black" | "blue" | "green" | "maroon" | "gray"
}

const variants = {
  white: "bg-white",
  black: "bg-stone-500/20",
  blue: "bg-blue-200/20",
  green: "bg-green-300/20",
  gray: "bg-gray-700/20",
  maroon: "bg-rose-950/20"
}

export default function Tag({
  variant = "white"
}: ColorProps) {
  return (
    <div className={`inline-block text-xs/4 font-normal rounded px-4 py-1 self-center ${variants[variant]}`}>
      {variant}
    </div>
  )
}
