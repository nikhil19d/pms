interface Props {
  title: string,
  description: string,
  className?: string,
  children: React.ReactNode
}

export default function Holder(props: Props) {
  return (
    <div className={`bg-white rounded-xl drop-shadow-xl py-4 mx-2.5 flex flex-col gap-2.5 xl:gap-7 ${props.className}`}>
      <div className="px-2.5 xl:p-10 xl:px-20">
        <h1 className="text-lg/7 font-medium xl:text-2xl/7">{props.title}</h1>
        <p className="text-sm/5 font-normal xl:text-base/6 text-secondary-300">{props.description}</p>
      </div>
      {props.children}
      {/* <BarGraph data={data} fill="#2ECC71" /> */}
    </div>
  )
}
