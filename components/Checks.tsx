export default function PDICard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-white/70 xl:rounded xl:p-20 xl:w-full">
      <div className="flex flex-col gap-7 xl:gap-2.5">
        <div className="flex flex-col gap-7 xl:gap-8">
          <div>
            <p className="text-xl/7 font-semibold xl:font-medium">{title}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="xl:text-xl/5 text-sm/5 font-medium">Status</p>
            <div className="flex flex-col xl:flex-row xl:justify-around items-center gap-2.5 xl:px-10">
              <button className="border xl:border-secondary-150 xl:py-5 xl:px-16 xl:rounded-sm border-[#2ecc71] rounded w-fit px-18 py-4 text-sm/5 font-medium">Pass</button>
              <button className="border xl:border-secondary-150 xl:py-5 xl:px-16 xl:rounded-sm border-[#ff6d70] rounded w-fit px-18 py-4 text-sm/5 font-medium">Fail</button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="xl:text-xl/5 text-sm/5 font-medium">Remark</label>
            <input placeholder="Optional notes." type="text" name="remark" className="placeholder:text-secondary-300 rounded-lg text-sm/5 font-normal p-2.5 xl:text-base/7 xl:font-normal bg-secondary-50 border border-secondary-300" />
          </div>
        </div>
        <div className="flex justify-center xl:justify-end items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
