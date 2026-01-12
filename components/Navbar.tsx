import Image from "next/image"
import { FiMenu } from "react-icons/fi"

interface Nav {
  heading: string,
  description: string,
  src?: string,
  alt?: string,
  className: string,
  children: React.ReactNode
}

export default function Navbar(props: Nav) {
  return (
    <div className="sticky z-10 top-0 bg-white flex justify-between items-center drop-shadow-xl">
      <div className="xl:flex xl:gap-2.5 xl:px-8 xl:items-center xl:py-2.5">
        {
          props.src && props.alt &&
          <div className="hidden xl:block">
            <Image src={props.src} alt={props.alt} width={40} height={40} />
          </div>
        }
        <div className="px-2.5">
          <h1 className={`text-lg/6 xl:text-3xl/9 font-medium ${props.className}`}>{props.heading}</h1>
          <p className="text-xs/4 xl:text-sm/5 font-normal">{props.description}</p>
        </div>
      </div>
      <button type="button" className="p-3 text-secondary-300 xl:hidden">
        <FiMenu />
      </button>
      <div className="hidden xl:text-lg/5 xl:font-medium xl:flex xl:gap-2 xl:p-2.5">
        {props.children}
        {/* <button type="button" className="rounded-lg text-primary-500 font-medium px-6 py-2 ring ring-primary-500">John</button> */}
        {/* <button type="button" className="rounded-lg text-primary-500 px-3 py-1 ring ring-primary-500">Team Name</button> */}
        {/* <button type="button" className="rounded-lg bg-primary-500 text-white px-4 py-1">Logout</button> */}
      </div>
    </div>
  )
}
