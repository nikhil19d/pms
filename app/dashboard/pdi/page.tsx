'use client'
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";
import { FaAngleDown } from "react-icons/fa";
import Input from "@/components/ui/Input"
import { useState } from "react"
import { PriorityMini, Table } from "@/components/Records";
import Checks from "@/components/Checks"
import Tag from "@/components/ui/Tag";
import Card from "@/components/ui/Card"
import Image from "next/image"

export default function PDI() {
  const pri = ["status", "team id", "ready for pdi", "avg time", "completed"]
  const inHeading = ["chassis no.", "team", "duration", "status", "completed at"]
  const inspectionData = [
    {
      chassis: "CH-2452-22",
      teamId: "TEAM_01",
      duration: 67,
      status: "PASS",
      completed: "01/01/2026, 10:39 AM"
    }, {
      chassis: "CH-2452-22",
      teamId: "TEAM_01",
      duration: 67,
      status: "PASS",
      completed: "01/01/2026, 10:39 AM"
    }, {
      chassis: "CH-2452-22",
      teamId: "TEAM_01",
      duration: 67,
      status: "PASS",
      completed: "01/01/2026, 10:39 AM"
    },
  ]
  const priData = [
    {
      status: "ACTIVE",
      teamId: "TEAM-01",
      pdi: 4,
      avgTime: "N/A",
      completed: 4
    },
    {
      status: "ACTIVE",
      teamId: "TEAM-01",
      pdi: 4,
      avgTime: "N/A",
      completed: 4
    },
    {
      status: "ACTIVE",
      teamId: "TEAM-01",
      pdi: 4,
      avgTime: "N/A",
      completed: 4
    },
  ]
  const handleStep = () => {
    if (step < 4) setStep(step + 1)
  }
  type Display = "inspection" | "dashboard"
  const [display, setDisplay] = useState<Display>("inspection")
  const [step, setStep] = useState<number>(0)
  return (
    <div className="bg-primary-50 h-screen w-screen flex flex-col xl:overflow-auto xl:gap-2.5">
      <Navbar heading="PDI Management System" description="Pre-Delivery Inspection & Quality Control" className="text-primary-500">
        <button onClick={() => setDisplay("inspection")} type="button" className={`rounded-lg text-lg/5 font-medium text-white px-14 py-2.5 ${display === "inspection" ? "bg-primary-500" : "bg-secondary-150"}`}>Inspection Entry</button>
        <button onClick={() => setDisplay("dashboard")} type="button" className={`rounded-lg text-lg/5 font-medium text-white px-14 py-2.5 ${display === "dashboard" ? "bg-primary-500" : "bg-secondary-150"}`}>Dashboard</button>
      </Navbar>
      {
        display === "inspection" &&
        <div className="xl:my-5 xl:h-9/10 xl:w-3/5 xl:self-center xl:block h-screen w-screen flex flex-col items-center justify-center rounded bg-white gap-7">
          {
            step >= 1 &&
            <div className="hidden bg-primary-500 rounded-sm text-white xl:px-2.5 xl:py-1 xl:flex xl:justify-between xl:items-center">
              <p className="xl:text-xl/7 xl:font-medium">PDI In Progress</p>
              <div >
                <p className="xl:text-xl/7 xl:font-medium">Elapsed Time</p>
                <p className="xl:text-base/7 xl:font-normal">0:00</p>
              </div>
            </div>
          }
          <div className="bg-white rounded-sm xl:p-5 xl:gap-2.5 flex flex-col items-center xl:items-stretch">
            {step >= 1 && <button onClick={() => setStep(step - 1)} className="flex gap-1 items-center text-secondary-300 self-start"><FaAngleDown className="xl:w-10 xl:h-10 rotate-90" /><p className="xl:hidden text-sm/5 font-medium text-black">Back</p></button>}
            <div className="flex flex-col gap-2.5 p-5 rounded xl:flex-row xl:items-center xl:justify-between text-white">
              <div className="flex gap-1 xl:flex-col items-center">
                <div className={cn(`px-1.5 rounded-full text-sm/5 text-center bg-secondary-150 xl:text-3xl/8 xl:font-medium xl:px-4 xl:py-5 xl:rounded-full ${step >= 0 && "bg-primary-500"}`)}>1</div>
                <p className={cn(`text-secondary-300 text-xs/4 xl:text-base/7 ${step >= 0 && "text-black"}`)}>Chassis</p>
              </div>
              <hr className={cn(`hidden xl:block xl:border-b-2 xl:border-b-secondary-150 xl:w-1/10 ${step >= 0 && "xl:border-b-2 xl:border-b-primary-500"} `)} />
              <div className="flex gap-1 xl:flex-col items-center">
                <div className={cn(`px-1.5 rounded-full text-sm/5 text-center bg-secondary-150 xl:text-3xl/8 xl:font-medium xl:px-4 xl:py-5 xl:rounded-full ${step >= 1 && "bg-primary-500"}`)}>2</div>
                <p className={cn(`text-secondary-300 text-xs/4 xl:text-base/7 ${step >= 1 && "text-black"}`)}>Electrical</p>
              </div>
              <hr className={cn(`hidden xl:block xl:border-b-2 xl:border-b-secondary-150 xl:w-1/10 ${step >= 1 && "xl:border-b-2 xl:border-b-primary-500"} `)} />
              <div className="flex gap-1 xl:flex-col items-center">
                <div className={cn(`px-1.5 rounded-full text-sm/5 text-center  bg-secondary-150 xl:text-3xl/8 xl:font-medium xl:px-4 xl:py-5 xl:rounded-full ${step >= 2 && "bg-primary-500"}`)}>3</div>
                <p className={cn(`text-secondary-300 text-xs/4 xl:text-base/7 ${step >= 2 && "text-black"}`)}>Body Panel</p>
              </div>
              <hr className={cn(`hidden xl:block xl:border-b-2 xl:border-b-secondary-150 xl:w-1/10 ${step >= 2 && "xl:border-b-2 xl:border-b-primary-500"} `)} />
              <div className="flex gap-1 xl:flex-col items-center">
                <div className={cn(`px-1.5 rounded-full text-sm/5 text-center bg-secondary-150 xl:text-3xl/8 xl:font-medium xl:px-4 xl:py-5 xl:rounded-full ${step >= 3 && "bg-primary-500"}`)}>4</div>
                <p className={cn(`text-secondary-300 text-xs/4 xl:text-base/7 ${step >= 3 && "text-black"}`)}>Mechanical</p>
              </div>
              <hr className={cn(`hidden xl:block xl:border-b-2 xl:border-b-secondary-150 xl:w-1/10 ${step >= 3 && "xl:border-b-2 xl:border-b-primary-500"} `)} />
              <div className="flex gap-1 xl:flex-col items-center">
                <div className={cn(`px-1.5 rounded-full text-sm/5 text-center  bg-secondary-150 xl:text-3xl/8 xl:font-medium xl:px-4 xl:py-5 xl:rounded-full ${step >= 4 && "bg-primary-500"}`)}>5</div>
                <p className={cn(`text-secondary-300 text-xs/4 xl:text-base/7 ${step >= 4 && "text-black"}`)}>Review</p>
              </div>
            </div>
          </div>
          {
            step == 0 &&
            <div className="bg-white/70 xl:p-20 xl:w-full xl:rounded-sm">
              <div className="flex flex-col xl:gap-2.5 gap-7 px-10">
                <div className="flex flex-col gap-7 xl:gap-8">
                  <div>
                    <p className="xl:text-xl/7 xl:font-medium">Enter Chassis Number</p>
                    <p className="text-sm xl:text-base/6 text-secondary-300">This will Automatically start the PDI Timer</p>
                  </div>
                  <Input placeholder="Enter Chassis number" description="Chassis Number" />
                </div>
                <div className="xl:flex xl:justify-end xl:items-center">
                  <button onClick={() => handleStep()} className="bg-primary-500 py-2.5 px-20 xl:text-center rounded-lg xl:text-lg/5 xl:font-medium text-white">Start PDI Inspection</button>
                </div>
              </div>
            </div>
          }
          {
            step == 1 &&
            <Checks title="Electrical Check">
              <button onClick={() => handleStep()} className="bg-primary-500 py-2.5 px-20 text-center xl:rounded-lg rounded text-sm/5 xl:text-lg/5 font-medium text-white">NEXT</button>
            </Checks>
          }
          {
            step == 2 &&
            <Checks title="Body Panel Check">
              <button onClick={() => handleStep()} className="bg-primary-500 py-2.5 px-20 text-center xl:rounded-lg rounded text-sm/5 xl:text-lg/5 font-medium text-white">NEXT</button>
            </Checks>
          }
          {
            step == 3 &&
            <Checks title="Mechanical Check">
              <button onClick={() => handleStep()} className="bg-primary-500 py-2.5 px-20 text-center xl:rounded-lg rounded text-sm/5 xl:text-lg/5 font-medium text-white">NEXT</button>
            </Checks>
          }
          {
            step == 4 &&
            <div className="bg-white/70 xl:p-20 xl:w-full">
              <div className="xl:flex xl:flex-col xl:gap-2.5">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-center text-xl/7 font-semibold xl:font-medium">Review Inspection Resutl</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="xl:text-lg/5 text-sm/5 font-medium text-secondary-900">Chassis Number</p>
                      <p className="xl:text-base/6 text-lg/5 font-normal xl:text-secondary-950">CH-2398-88</p>
                    </div>
                    <hr className="border-b-2 border-b-primary-500" />
                    <div className="flex justify-between items-center">
                      <p className="xl:text-lg/5 text-sm/5 font-medium text-secondary-900">Electrical Check</p>
                      <div className="flex flex-col items-center">
                        <Tag variant="pass" title="PASS" />
                        <p className="xl:text-base/6 text-sm/5 font-normal text-secondary-950">GOOD</p>
                      </div>
                    </div>
                    <hr className="border-b-2 border-b-primary-500" />
                    <div className="flex justify-between items-center">
                      <p className="xl:text-lg/5 text-sm/5 font-medium text-secondary-900">Body Panel Check</p>
                      <div className="flex flex-col items-center">
                        <Tag variant="pass" title="PASS" />
                        <p className="xl:text-base/6 text-sm/5 font-normal text-secondary-950">GOOD</p>
                      </div>
                    </div>
                    <hr className="border-b-2 border-b-primary-500" />
                    <div className="flex justify-between items-center">
                      <p className="xl:text-lg/5 text-sm/5 font-medium text-secondary-900">Mechanical Check</p>
                      <div className="flex flex-col items-center">
                        <Tag variant="pass" title="PASS" />
                        <p className="xl:text-base/6 text-sm/5 font-normal text-secondary-950">GOOD</p>
                      </div>
                    </div>
                    <hr className="border-b-2 border-b-primary-500" />
                    <div className="flex justify-between">
                      <p className="xl:text-lg/5 text-sm/5 font-medium text-secondary-900">Inspection Duration</p>
                      <p className="xl:text-base/6 text-sm/5 font-normal xl:text-secondary-950 pr-2">00:30</p>
                    </div>
                  </div>
                  <div className="xl:flex xl:justify-end xl:items-center">
                    <button onClick={() => setStep(0)} className="bg-primary-500 py-2.5 px-20 xl:text-center rounded-lg xl:text-lg/5 text-sm/5 font-medium text-white">Submit Inspection</button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      }
      {
        display === "dashboard" &&
        <div className="h-fit w-screen bg-primary-50 flex flex-col gap-2.5 xl:gap-7">
          <div className="mx-2.5 xl:mx-0 flex flex-col gap-2.5 xl:flex-row xl:justify-evenly xl:gap-5">
            <Card number={6} size={35} description="Vehicle Ready For PDI" src="/pdi.png" alt="pdi" />
            <Card number={4} description="PDI Completed" src="/pass.png" alt="complete" />
            <Card number={1} size={30} description="PDI Passed" src="/check.png" alt="pass" />
            <Card number={1} size={30} description="PDI Failed" src="/fail.png" alt="fail" />
          </div>
          <div className="rounded-xl bg-white ring-2 ring-secondary drop-shadow-xl flex items-center justify-between p-2 xl:p-5 mx-2.5 mx:mx-5">
            <div className="flex flex-col xl:flex-row xl:gap-7">
              <Image src="/graph.png" alt="graph" height={20} width={20} className="xl:w-10" />
              <div className="flex flex-col gap-1">
                <p className="text-secondary-300 text-xs/4 font-normal xl:text-sm/5">Average PDI Time</p>
                <p className="text-lg/6 font-medium xl:text-xl/7">0m 35s</p>
              </div>
            </div>
            <div className="flex flex-col w-1/3 xl:w-1/5">
              <p className="text-xs/3 font-normal xl:text-sm/5">Total Inspection</p>
              <p className="text-sm/5 font-normal xl:text-base/7">Target: {`<`}15m Per Vehicle</p>
            </div>
          </div>
          <div className="bg-white rounded-lg py-2.5 mx-2.5 flex flex-col gap-2.5 xl:px-8">
            <div className="px-2.5 xl:px-10 xl:py-2.5">
              <h1 className="text-lg/6 font-medium xl:text-2xl/7">PDI Priority</h1>
              <p className="text-base/6 font-normal xl:text-base/6 text-secondary-300">Sorted by completion time (1st report appears at top)</p>
            </div>
            <div className="flex flex-col">
              <Table label="priority" priority={priData} heading={pri} />
              <PriorityMini label="priority" heading={pri} priority={priData} />
            </div>
          </div>
          <div className="bg-white rounded-lg py-2.5 mx-2.5 flex flex-col gap-2.5 xl:px-8">
            <div className="px-2.5 xl:px-10 xl:py-2.5">
              <h1 className="text-lg/6 font-medium xl:text-2xl/7">Recent Inspection</h1>
            </div>
            <div className="flex flex-col">
              <Table label="inspection" heading={inHeading} inspection={inspectionData} />
              <PriorityMini label="priority" heading={pri} priority={priData} />
            </div>
          </div>
        </div>
      }
    </div >
  )
}
