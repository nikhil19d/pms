interface Data {
  title: string,
  className: string
}

export default function DataPoint(props: Data) {
  return (
    <div className="flex gap-2.5 items-center">
      <div className={`h-5 w-5 xl:h-8 xl:w-8 rounded-full ${props.className}`}>
      </div>
      <p>{props.title}</p>
    </div>
  )
}
