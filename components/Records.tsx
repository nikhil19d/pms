import Tag from "@/components/ui/Tag"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Team = {
  model: string,
  color: string,
  status: "DISPATCH",
  units: number
}
type Production = {
  model: string,
  chassis: string,
  status: "DISPATCH",
  color: string
}
type DispatchRecord = {
  client: string,
  pi: string,
  piDate: string,
  dispatch: string,
  units: number,
  status: string
}

type Records = {
  model: string,
  status: string,
  color: string,
  chassis: string,
  controller: string,
  motor: string,
  time: string
}

interface Dispatch {
  label: "team" | "production" | "dispatch" | "record" | "inspection" | "priority",
  heading: string[],
  team?: Team[],
  production?: Production[],
  dispatch?: DispatchRecord[],
  record?: Records[],
  inspection?: Inspection[],
  priority?: Prior[]
}

interface NewEntry {
  chassis: string,
  model: string,
  color: string
}

export function NewEntryTable({ chassis, model, color }: NewEntry) {
  return (
    <button onClick={(e) => e.preventDefault()} className="border border-black bg-primary-50 p-2 rounded-lg xl:w-3/4 xl:mt-2.5 group">
      <div className="flex items-center justify-around ">
        <div className="flex gap-2 items-center justify-self-center xl:justify-self-start">
          <span className="hidden w-2 h-2 rounded-full bg-primary-500 group-focus:block"></span>
          <p className="text-black text-normal text-sm/5 ">{chassis}</p>
        </div>
        <p className="text-black text-normal text-sm/5 justify-self-center ">{model}</p>
        <Tag variant="pass" title={color} />
        <button className="justify-center items-center hidden group-focus:flex xl:justify-self-end"><Image src="/fail.png" alt="fail" width={20} height={20} /></button>
      </div>
    </button>
  )
}


interface PriorityPDI {
  label: "priority" | "inspection",
  heading: string[],
  inspection?: Inspection[],
  priority?: Prior[]
}
interface Prior {
  teamId: string,
  avgTime: string,
  pdi: number,
  status: string,
  completed: number,

}
interface Inspection {
  status: string,
  chassis: string,
  duration: number,
  teamId: string,
  completed: string
}
export function PriorityMini({ label, heading, inspection, priority }: PriorityPDI) {
  return (
    <div className="flex flex-col gap-2.5 mx-2.5 xl:hidden">
      {label == "priority" && priority &&
        priority.map((val, index) => (
          <div key={index} className="bg-secondary p-2.5 rounded-lg flex flex-col gap-2.5">
            <div className="grid grid-cols-2">
              <div className="grid gap-2.5">
                {
                  heading.map((val, index) => {
                    if (index < heading.length - 1) return <p className="text-xs/4" key={index}>{val.toUpperCase()}</p>
                  })
                }
              </div>
              <div className="justify-self-end grid gap-2.5">
                <Tag variant="pending" title={val.status} className="justify-self-end" />
                <p className="justify-self-end text-xs/4">{val.teamId}</p>
                <p className="justify-self-end text-xs/4">{val.pdi}</p>
                <p className="justify-self-end text-xs/4">{val.avgTime}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <hr className="border-b-2 border-b-primary-500" />
              <div className="grid grid-cols-2">
                <p className="text-xs/4">{heading[heading.length - 1].toUpperCase()}</p>
                <Tag variant="pass" className="justify-self-end" title={val.completed} />
              </div>
            </div>
          </div>))
      }
      {
        label == "inspection" && inspection &&
        inspection.map((val, index) => (
          <div key={index} className="bg-secondary p-2.5 rounded-lg flex flex-col gap-2.5">
            <div className="grid grid-cols-2">
              <div className="grid gap-2.5">
                {
                  heading.map((val, index) => {
                    if (index < heading.length - 1) return <p className="text-xs/4" key={index}>{val.toUpperCase()}</p>
                  })
                }
              </div>
              <div className="justify-self-end grid gap-2.5">
                <Tag variant="pending" title={val.status} className="justify-self-end" />
                <p className="justify-self-end text-xs/4">{val.chassis}</p>
                <p className="justify-self-end text-xs/4">{val.teamId}</p>
                <p className="justify-self-end text-xs/4">{val.duration}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <hr className="border-b-2 border-b-primary-500" />
              <div className="grid grid-cols-2">
                <p className="text-xs/4">{heading[heading.length - 1].toUpperCase()}</p>
                <p className="justify-self-end text-xs/4">{val.completed}</p>
              </div>
            </div>
          </div>))
      }
    </div>
  )
}

export function TableMini({ label, heading, dispatch, record }: Dispatch) {
  return (
    <div className="flex flex-col gap-2.5 xl:hidden">
      {label == "dispatch" && dispatch &&
        dispatch.map((val, index) => (
          <div key={index} className="bg-secondary p-2.5 rounded-lg flex flex-col gap-2.5">
            <div className="grid grid-cols-2">
              <div className="grid gap-2.5">
                {
                  heading.map((val, index) => {
                    if (index < heading.length - 1) return <p className="text-xs/4" key={index}>{val.toUpperCase()}</p>
                  })
                }
              </div>
              <div className="justify-self-end grid gap-2.5">
                <p className="justify-self-end text-xs/4">{val.client}</p>
                <p className="justify-self-end text-xs/4">{val.pi}</p>
                <p className="justify-self-end text-xs/4">{val.piDate}</p>
                <p className="justify-self-end text-xs/4">{val.dispatch}</p>
                <Tag variant="unit" title={val.units} className="justify-self-end" />
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <hr className="border border-b-secondary-300" />
              <div className="grid grid-cols-2">
                <p className="text-xs/4">{heading[heading.length - 1].toUpperCase()}</p>
                <Tag variant="pass" className="justify-self-end" title={val.status} />
              </div>
            </div>
          </div>))
      }
      {
        label == "record" && record &&
        record.map((val, index) => (
          <div key={index} className="bg-secondary p-2.5 rounded-lg flex flex-col gap-2.5">
            <div className="grid grid-cols-2">
              <div className="grid gap-2.5">
                {
                  heading.map((val, index) => {
                    if (index < heading.length - 1) return <p className="text-xs/4" key={index}>{val.toUpperCase()}</p>
                  })
                }
              </div>
              <div className="justify-self-end grid gap-2.5">
                <p className="justify-self-end text-xs/4">{val.model}</p>
                <Tag variant="pass" title={val.status} className="justify-self-end" />
                <p className="justify-self-end text-xs/4">{val.color}</p>
                <p className="justify-self-end text-xs/4">{val.chassis}</p>
                <p className="justify-self-end text-xs/4">{val.controller}</p>
                <p className="justify-self-end text-xs/4">{val.motor}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <hr className="border border-b-secondary-300" />
              <div className="grid grid-cols-2">
                <p className="text-xs/4">{heading[heading.length - 1].toUpperCase()}</p>
                <p className="justify-self-end text-xs/4">{val.time}</p>
              </div>
            </div>
          </div>))
      }
    </div>
  )
}


export function Table({ label, heading, team, production, dispatch, record, inspection, priority }: Dispatch) {
  return (
    <div>
      <div className={`bg-secondary p-2.5 rounded-lg ${label == "dispatch" && "hidden xl:block"} ${label == "record" && "hidden xl:block"}`}>
        {/* <button className="xl:hidden text-secondary-300 flex gap-1 items-center p-1 bg-white rounded-sm"><span>Team A</span><FaAngleUp /></button> */}
        <div className="my-1">
          <div className={cn(`xl:grid xl:grid-cols-4 hidden xl:p-2.5 xl:text-sm/5 xl:font-normal ${label === "dispatch" && "xl:grid-cols-6"} ${label == "record" && "xl:grid-cols-7"} ${(label === "inspection" || label === "priority") && "xl:grid-cols-5"}`)}>
            {
              heading.map((val, index) => {
                if (index == 0) return <p key={index} className="text-secondary-300">{val.toUpperCase()}</p>
                else if (index == heading.length - 1) return <p key={index} className="justify-self-end text-secondary-300">{val.toUpperCase()}</p>
                return <p key={index} className="justify-self-center text-secondary-300">{val.toUpperCase()}</p>
              })
            }
          </div>
          {
            label == "team" && team &&
            team.map((val, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-1 xl:p-2.5">
                <p className="text-xs/4 font-normal self-center">{val.model}</p>
                <Tag variant="pass" title={val.color} />
                <Tag variant="pending" title={val.status} />
                <Tag variant="unit" className="justify-self-end" title={val.units} />
              </div>
            ))
          }
          {
            label == "production" && production &&
            production.map((val, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-1 xl:p-2.5">
                <div className="text-xs/4 font-normal flex gap-2 items-center self-center">
                  <span className="h-2 w-2 rounded-full bg-primary-600 xl:hidden"></span>
                  <p>{val.model}</p>
                </div>
                <p className="text-xs/4 font-normal self-center justify-self-center">{val.chassis}</p>
                <Tag variant="pass" title={val.color} />
                <Tag variant="pass" className="justify-self-end" title={val.status} />
              </div>
            ))
          }
          {
            label == "dispatch" && dispatch &&
            dispatch.map((val, index) => (
              <div key={index} className="xl:grid xl:grid-cols-6 xl:gap-4 xl:p-2.5 hidden">
                <p className="text-xs/4 font-normal self-center">{val.client}</p>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.pi}</p>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.piDate}</p>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.dispatch}</p>
                <Tag variant="unit" title={val.units} />
                <Tag variant="pending" className="justify-self-end" title={val.status} />
              </div>
            ))
          }
          {
            label == "record" && record &&
            record.map((val, index) => (
              <div key={index} className="xl:grid xl:grid-cols-7 xl:gap-4 xl:p-2.5 hidden">
                <div className="text-xs/4 font-normal flex gap-2 items-center self-center">
                  <span className="h-2 w-2 rounded-full bg-primary-600"></span>
                  <p>{val.model.toUpperCase()}</p>
                </div>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.color[0].toUpperCase() + val.color.slice(1)}</p>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.chassis.toUpperCase()}</p>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.controller.toUpperCase()}</p>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.model.toUpperCase()}</p>
                <Tag variant="pass" className="self-center" title={val.status.toUpperCase()} />
                <p className="text-xs/4 font-normal justify-self-end">{val.time}</p>
              </div>
            ))

          }
          {
            label === "priority" && priority &&
            priority.map((val, index) => (
              <div key={index} className="xl:grid xl:grid-cols-5 xl:gap-4 xl:p-2.5 hidden">
                <p className="text-xs/4 font-normal self-center">{val.teamId}</p>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.pdi}</p>
                <Tag variant="pass" className="self-center" title={val.completed} />
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.avgTime}s</p>
                <Tag variant="pass" className="justify-self-end self-center" title={val.status} />
              </div>
            ))
          }
          {
            label === "inspection" && inspection &&
            inspection.map((val, index) => (
              <div key={index} className="xl:grid xl:grid-cols-5 xl:gap-4 xl:p-2.5 hidden">
                <p className="text-xs/4 font-normal self-center">{val.chassis}</p>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.teamId}</p>
                <p className="text-xs/4 font-normal justify-self-center self-center">{val.duration}s</p>
                <Tag variant="pass" className="self-center" title={val.status} />
                <p className="text-xs/4 font-normal justify-self-end">{val.completed}</p>
              </div>
            ))
          }
          <hr className={`border-b-3 border-b-[#2ecc71] my-1 ${label !== "team" && "hidden"}`} />
          <div className={`grid grid-cols-2 my-1 xl:p-2.5  ${label !== "team" && "hidden"}`}>
            <p className="justify-self-start">Total Units:</p>
            <Tag variant="unit" className="justify-self-end" title={team && team.reduce((acc, val) => acc + val.units, 0) || ""} />
          </div>
        </div>
      </div>
    </div>
  )
}
