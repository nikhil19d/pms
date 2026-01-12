'use client'
import Tag from "@/components/ui/Tag"
import Navbar from "@/components/Navbar";
import Card from "@/components/ui/Card"
import Input from "@/components/ui/Input"
import { BarGraph, PieGraph } from "@/components/Graphs";
import { FaAngleDown } from "react-icons/fa"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import DataPoint from "@/components/DataPoint";
import Holder from "@/components/Holder";
import { Table, TableMini, NewEntryTable } from "@/components/Records";
import { useState } from "react";
export default function Page() {

  const dispatch = [
    { client: "XYZ Dealers", pi: "PI-2368-37", piDate: "2024-12-19", dispatch: "2024-12-22", units: 33, status: "DISPATCH" },
    { client: "ABC Motors", pi: "PI-2368-37", piDate: "2024-12-19", dispatch: "2024-12-22", units: 33, status: "DISPATCH" }
  ]
  const teamHeading = ['model', 'color', 'status', 'units']
  const productionHeading = ['model', 'chassis number', 'color', 'status']
  const dispatchHeading = ['client name', 'pi number', 'pi date', 'dispatch date', 'total units', 'status']
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
  const production: Production[] = [
    { model: "M4", color: "Green", status: "DISPATCH", chassis: " CH-3423-36" },
    { model: "M2 PRO", color: "Black", status: "DISPATCH", chassis: " CH-3423-36" },
    { model: "M3", color: "Blue", status: "DISPATCH", chassis: " CH-3423-36" },
    { model: "M2", color: "Red", status: "DISPATCH", chassis: " CH-3423-36" }
  ]

  const teamData: Team[] = [
    { model: "M4", color: "Green", status: "DISPATCH", units: 32 },
    { model: "M2 PRO", color: "Black", status: "DISPATCH", units: 23 },
    { model: "M3", color: "Blue", status: "DISPATCH", units: 38 },
    { model: "M2", color: "Red", status: "DISPATCH", units: 20 }
  ]

  const data = [
    { label: "M2", value: 17 },
    { label: "M2Pro", value: 12 },
    { label: "M3", value: 18 },
    { label: "M4", value: 20 },
    { label: "M5", value: 13 },
  ];
  const pie = [
    { label: 'pass', value: 500, fill: "#072713" },
    { label: 'pending', value: 200, fill: "#0E4F26" },
    { label: 'fail', value: 800, fill: "#147638" },
  ];
  const graph = [
    { label: "Dec 19", value: 12, fill: "#131313" },
    { label: "Dec 20", value: 7, fill: "#383838" },
    { label: "Dec 21", value: 10, fill: "#4B4B4B" },
    { label: "Dec 22", value: 10, fill: "#7C7C7C" },
  ]
  const [team, setTeam] = useState("teamA")
  const [newDispatch, setNewDispatch] = useState<NewDispatch>({
    entry: false,
    next: false,
    submit: false
  })
  interface NewDispatch {
    entry: boolean,
    next: boolean,
    submit: boolean
  }
  const handleDispatch = async (key: keyof NewDispatch) => {
    setNewDispatch(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
    if (key === "submit") {
      setTimeout(() => {
        setNewDispatch({
          entry: false,
          next: false,
          submit: false
        })
      }, 3000);
    }
  }

  return (
    <div className="">
      <Navbar src="/dispatch_outline.png" alt="dispatch" heading="Dispatch Dashboard" description="Logistic Management" className="text-blue">
        <button type="button" className="rounded-lg text-blue font-medium px-6 py-2 ring ring-blue">John</button>
        <button type="button" className="rounded-lg bg-blue text-white px-4 py-2">Logout</button>
      </Navbar>
      {
        newDispatch.submit &&
        <div className="bg-black flex justify-center items-center h-screen xl:h-screen xl:w-screen">
          <div className="bg-primary-50 rounded-lg mx-5 h-3/4 xl:h-1/2 xl:w-1/2 flex flex-col justify-center items-center gap-2.5">
            <Image src="/submit.png" alt="submit" width={60} height={60} />
            <div className="px-5">
              <h1 className="text-center text-xl/7 xl:text-4xl/12 font-semibold">Dispatch Complete !</h1>
              <p className="text-center text-base/6 xl:text-lg/7 font-normal">Your Dispatch Record Has Been Saved Successfully.</p>
            </div>
          </div>
        </div>
      }
      {
        newDispatch.entry && !newDispatch.submit &&
        <div className={`bg-white rounded-xl drop-shadow-xl py-4 mx-2.5 flex flex-col gap-2.5 xl:p-10 xl:m-5 xl:gap-7`}>
          <button><FaAngleDown size={30} className="rotate-90 text-secondary-300 xl:w-20 xl:h-20" /></button>
          {!newDispatch.next &&
            <div className="xl:gap-7 xl:flex xl:flex-col">
              <div className="px-2.5">
                <h1 className="text-lg/7 font-medium xl:text-2xl/7">New Dispatch Entry</h1>
                <p className="text-sm/5 font-normal xl:text-base/6 text-secondary-300">Enter client and PI details</p>
              </div>
              <form className=" flex flex-col gap-2.5 xl:gap-6">
                <div className="px-2.5 flex flex-col gap-2.5 xl:flex-row">
                  <Input description="Client Name" placeholder="Enter Client Name"></Input>
                  <Input description="PI Date" placeholder="DD/MM/YEAR"></Input>
                </div>
                <div className="px-2.5 flex flex-col gap-2.5 xl:flex-row">
                  <Input description="PI Number" placeholder="Enter PI Number"></Input>
                  <Input description="Dispatch Date (Auto)" placeholder="DD/MM/YEAR"></Input>
                </div>
                <hr className="border border-b-secondary-50 m-2.5 " />
                <div className="flex flex-col gap-2.5 xl:grid xl:grid-cols-[5fr_1fr]">
                  <div className="px-2.5 flex flex-col gap-2.5 xl:flex-col">
                    <Input description="Add Chassis Number" placeholder="Enter Chassis Number"></Input>
                    <NewEntryTable chassis="CH-2323-88" color="Black" model="M2 PRO" />
                  </div>
                  <div className="px-2.5 flex justify-between xl:flex-col xl:pt-5 xl:gap-2.5">
                    <button className="text-sm/5 text-medium rounded-lg p-4 px-8 bg-primary-500 text-white xl:self-start xl:px-36 xl:mx-0 xl:text-lg/5 xl:font-medium" >ADD</button>
                    <button onClick={() => handleDispatch("next")} className="text-sm/5 text-medium rounded-lg p-4 px-8 bg-primary-500 text-white  xl:self-start xl:px-36 xl:mx-0 xl:text-lg/5 xl:font-medium" >Next</button>
                  </div>
                </div>
              </form>
            </div>
          }
          {
            newDispatch.entry && newDispatch.next && !newDispatch.submit &&
            < div className="flex flex-col gap-2.5">
              <div className="px-2.5 ">
                <h1 className="text-lg/7 font-medium xl:text-2xl/7">Dispatch Summary</h1>
                <p className="text-sm/5 font-normal xl:text-base/6 text-secondary-300">Review before Submitting</p>
              </div>
              <div className="xl:flex xl:gap-32">
                <div className="xl:w-1/2 xl:h-2/5 xl:py-5 xl:gap-5 xl:grid xl:grid-cols-2 flex flex-col overflow-auto xl:rounded-lg xl:bg-secondary-50">
                  <div className="px-2.5 ">
                    <h1 className="text-sm/5 font-normal xl:text-base/6 xl:text-secondary-300">Client Name</h1>
                    <p className="text-base/6 font-medium xl:text-lg/7 xl:text-black text-secondary-300">SS Motor Ltd</p>
                  </div>
                  <hr className="border border-b-secondary-50 m-2.5 xl:hidden" />
                  <div className="px-2.5">
                    <h1 className="text-sm/5 font-normal xl:text-base/6  xl:text-secondary-300">PI Date</h1>
                    <p className="text-base/6 font-medium xl:text-lg/7 xl:text-black text-secondary-300">2024-12-15</p>
                  </div>
                  <hr className="border border-b-secondary-50 m-2.5 xl:hidden " />
                  <div className="px-2.5">
                    <h1 className="text-sm/5 font-normal xl:text-base/6  xl:text-secondary-300">PI Number</h1>
                    <p className="text-base/6 font-medium xl:text-lg/7 xl:text-black text-secondary-300">PI-3484-22</p>
                  </div>
                  <hr className="border border-b-secondary-50 m-2.5 xl:hidden" />
                  <div className="px-2.5">
                    <h1 className="text-sm/5 font-normal xl:text-base/6  xl:text-secondary-300">Dispatch Date</h1>
                    <p className="text-base/6 font-medium xl:text-lg/7 xl:text-black  text-secondary-300">2024-12-15</p>
                  </div>
                  <hr className="border border-b-secondary-50 m-2.5 xl:hidden" />
                  <div className="px-2.5">
                    <h1 className="text-sm/5 font-normal xl:text-base/6  xl:text-secondary-300">Total Vehicle</h1>
                    <p className="text-base/6 font-medium xl:text-lg/7 xl:text-black text-secondary-300">Unit : 1</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 px-3 items-center">
                  <h1 className="text-lg/7 font-medium xl:text-xl/7">Vehicle Summary</h1>
                  <div className="p-8 border border-secondary-300 rounded-lg flex flex-col gap-2.5">
                    <div className="grid grid-cols-3 text-xs/4 text-normal text-secondary-300">
                      <p className="items-center justify-self-start">MODEL</p>
                      <p className="items-center justify-self-center">COLOR</p>
                      <p className="items-center justify-self-end">UNIT</p>
                    </div>
                    <div className="grid grid-cols-3 text-xs/4 text-normal text-black">
                      <p className="items-center justify-self-start">M3</p>
                      <Tag className="items-center" variant="pass" title="Black" />
                      <p className="items-center justify-self-end">1</p>
                    </div>
                  </div>
                  <button onClick={() => handleDispatch("submit")} className="bg-primary-500 rounded-md text-white px-4 py-1 xl:text-lg/5 xl:font-normal">Submit Dispatch</button>
                </div>
              </div>
            </div>
          }
        </div>
      }
      {
        !newDispatch.entry &&
        <div className="h-fit w-screen flex flex-col gap-2.5 overflow-x-hidden">
          <div className="mx-2.5 flex flex-col gap-2.5 xl:grid xl:grid-cols-[1fr_4fr]">
            <Card number={4} description="QC Dispatch" src="/dispatch.png" alt="dispatch" />
            <div className="bg-blue/30 rounded-xl px-18 py-3 flex flex-col gap-2.5 xl:flex-row xl:justify-between">
              <div className="p-2.5 text-white">
                <h1 className="font-semibold text-xl/7 text-center xl:text-left">New Dispatch Entry</h1>
                <p className="font-normal text-sm/5 text-center xl:text-left">Create a new dispatch recode for client delivery</p>
              </div>
              <button onClick={() => handleDispatch("entry")} className="text-sm/5 text-medium rounded-lg bg-blue text-white py-3 px-6 xl:py-4 xl:self-start xl:px-28 xl:w-fit xl:mx-0 xl:text-lg/5 xl:font-medium" >Dispatch Items</button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 xl:grid xl:grid-cols-[3fr_2fr]">
            <Holder title="Dispatch Model wise" description="Unit Dispatch Per model">
              <BarGraph data={data} fill="#007eff" />
            </Holder>
            <Holder title="Dispatch to clients" description="Units Per client">
              <div className="flex justify-around items-center xl:flex-col xl:gap-20 xl:justify-center">
                <PieGraph data={pie} />
                <div className="text-base/6 font-normal flex flex-col gap-2.5 xl:flex-row xl:gap-12">
                  <DataPoint title="ABC Motors" className="bg-primary-900" />
                  <DataPoint title="SS Motors" className="bg-primary-800" />
                  <DataPoint title="XYZ Dealers" className="bg-primary-700" />
                </div>
              </div>
            </Holder>
          </div>

          <div className="bg-white rounded-xl mx-2.5 drop-shadow-xl py-1 px-2.5 flex flex-col xl:py-5 xl:px-10">
            <form className="px-5 py-2.5 flex flex-col gap-2.5 xl:gap-6 xl:flex xl:flex-row">
              <div className="flex flex-col gap-2.5 py-2 xl:flex-row">
                <div className="flex flex-col gap-2">
                  <label className="text-sm/5 font-semibold xl:text-lg/5 xl:font-medium">Filter By Date</label>
                  <div className="bg-secondary border border-secondary-300 flex justify-between p-2 gap-4 rounded-lg text-secondary-300 items-center">
                    <div className="flex items-center gap-4">
                      <Select>
                        <SelectTrigger className="w-60 flex justify-between text-secondary-300 items-center xl:w-24">
                          <SelectValue placeholder="All Time" />
                        </SelectTrigger>
                        <SelectContent className="bg-secondary">
                          <SelectGroup>
                            <SelectItem value="qc">All Time</SelectItem>
                            <SelectItem value="admin" className="flex justify-center">Today</SelectItem>
                            <SelectItem value="store">This Week</SelectItem>
                            <SelectItem value="production">This Month</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <FaAngleDown size={20} className="" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm/5 font-semibold xl:text-lg/5 xl:font-medium">Filter By Client</label>
                  <div className="bg-secondary border border-secondary-300 flex justify-between p-2 gap-4 rounded-lg text-secondary-300 items-center">
                    <div className="flex items-center gap-4">
                      <Select>
                        <SelectTrigger className="w-60 flex justify-between text-secondary-300 items-center xl:w-28">
                          <SelectValue placeholder="All Clients" />
                        </SelectTrigger>
                        <SelectContent className="bg-secondary">
                          <SelectGroup>
                            <SelectItem value="qc">All Clients</SelectItem>
                            <SelectItem value="admin" className="flex justify-center">ABC Motors Ltd</SelectItem>
                            <SelectItem value="store">XYZ Dealers</SelectItem>
                            <SelectItem value="production">SS Motors Ltd</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <FaAngleDown size={20} className="" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm/5 font-semibold xl:text-lg/5 xl:font-medium">Filter By Model</label>
                  <div className="bg-secondary border border-secondary-300 flex justify-between p-2 gap-4 rounded-lg text-secondary-300 items-center">
                    <div className="flex items-center gap-4">
                      <Select>
                        <SelectTrigger className="w-60 flex justify-between text-secondary-300 items-center xl:w-24">
                          <SelectValue placeholder="All Models" />
                        </SelectTrigger>
                        <SelectContent className="bg-secondary">
                          <SelectGroup>
                            <SelectItem value="qc">All Models</SelectItem>
                            <SelectItem value="admin" className="flex justify-center">M2</SelectItem>
                            <SelectItem value="store">M3</SelectItem>
                            <SelectItem value="production">M4</SelectItem>
                            <SelectItem value="qc">M5</SelectItem>
                            <SelectItem value="dispatch">M2 PRO</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <FaAngleDown size={20} className="" />
                  </div>
                </div>

                <Input description="Search" placeholder="Search Client name"></Input>
              </div>
              <button className="text-sm/5 text-medium rounded-lg p-4 bg-primary-500 text-white xl:self-center  xl:px-36 xl:mx-0 xl:text-lg/5 xl:font-medium" >Download File</button>

            </form>
          </div>

          <div className="mx-2.5">
            <div className=" xl:grid xl:grid-cols-[2fr_5fr] xl:items-center xl:justify-center xl:m-2.5 drop-shadow-xl rounded-lg">
              <div className="flex flex-col items-center gap-6 py-2 pb-10">
                <div className="px-2.5 xl:self-center xl:p-8">
                  <h1 className="text-lg/6 font-medium xl:text-2xl/7">Dispatch to clients</h1>
                  <p className="text-base/6 font-normal xl:text-base/6 text-secondary-300">Units per client</p>
                </div>
                <div className="flex justify-around items-center xl:flex-col xl:gap-20 xl:justify-center">
                  <PieGraph data={graph} />
                </div>
              </div>
              <div className="xl:flex-col xl:flex xl:gap-5 xl:p-6">
                <div className="grid grid-cols-4 gap-4 p-1 xl:p-2.5 xl:border xl:border-[#2ecc71] xl:bg-primary-50 xl:rounded-sm text-secondary-300">
                  <button onClick={() => setTeam("teamA")} className={`flex items-center gap-1 xl:justify-self-center hover:text-white hover:px-2.5 hover:py-1 hover:bg-primary-200 hover:rounded-sm ${team === "teamA" && "px-2.5 py-1 bg-primary-500 text-white rounded-sm"}`}><span>Team A</span><FaAngleDown className="xl:hidden" /></button>
                  <button onClick={() => setTeam("teamB")} className={`flex items-center gap-1 xl:justify-self-center hover:text-white hover:px-2.5 hover:py-1 hover:bg-primary-300 hover:rounded-sm ${team === "teamB" && "px-2.5 py-1 bg-primary-500 text-white rounded-sm"}`}><span>Team B</span><FaAngleDown className="xl:hidden" /></button>
                  <button onClick={() => setTeam("teamC")} className={`flex items-center gap-1 xl:justify-self-center hover:text-white hover:px-2.5 hover:py-1 hover:bg-primary-300 hover:rounded-sm ${team === "teamC" && "px-2.5 py-1 bg-primary-500 text-white rounded-sm"}`}><span>Team C</span><FaAngleDown className="xl:hidden" /></button>
                  <button onClick={() => setTeam("teamD")} className={`flex items-center gap-1 xl:justify-self-center hover:text-white hover:px-2.5 hover:py-1 hover:bg-primary-300 hover:rounded-sm ${team === "teamD" && "px-2.5 py-1 bg-primary-500 text-white rounded-sm"}`}><span>Team D</span><FaAngleDown className="xl:hidden" /></button>
                </div>
                <Table label="team" heading={teamHeading} team={teamData} />
              </div>
            </div>
          </div>

          <div className="mx-2.5 flex flex-col gap-2.5 xl:px-8">
            <div className="px-2.5">
              <Tag title="6 Units Available" className="rounded-lg" />
            </div>
            <div className="px-2.5 ">
              <h1 className="text-lg/6 font-medium xl:text-2xl/7">Production Records</h1>
              <p className="text-base/6 font-normal xl:text-base/6 text-secondary-300">Available units ready for dispatch</p>
            </div>
            <div>
              <Table label="production" heading={productionHeading} production={production} />
            </div>
          </div>

          <div className="mx-2.5 flex flex-col gap-2.5 xl:px-8">
            <div className="px-2.5 ">
              <h1 className="text-lg/6 font-medium xl:text-2xl/7">Dispatch Records</h1>
              <p className="text-base/6 font-normal xl:text-base/6 text-secondary-300">Complete dispatch history</p>
            </div>
            <div className="flex flex-col">
              <Table label="dispatch" heading={dispatchHeading} dispatch={dispatch} />
              <TableMini label="dispatch" heading={dispatchHeading} dispatch={dispatch} />
            </div>
          </div>
        </div>
      }
    </div >
  )
}
