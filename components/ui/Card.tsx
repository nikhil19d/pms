import Image from "next/image"

interface Card {
  number: number,
  description: string,
  src: string,
  alt: string,
  size?: number
}

export default function Card(props: Card) {
  return (
    <div className="rounded-xl bg-white ring-2 ring-secondary drop-shadow-xl flex items-center justify-between xl:flex-col-reverse xl:p-5 xl:pr-28">
      <div className="px-2.5 py-1">
        <h1 className="text-xl/7 font-semibold xl:text-4xl/12 xl:font-semibold">{props.number}</h1>
        <p className="text-secondary-300 text-base/6 font-normal xl:text-lg/7">{props.description}</p>
      </div>
      <div className="p-3 self-start xl:p-0">
        <Image src={props.src} alt={props.alt} width={props.size || 50} height={props.size || 50} />
      </div>
    </div>

  )
}
