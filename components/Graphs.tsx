import { Line, LineChart, Pie, PieChart, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

interface BarGraphData {
  label: string,
  value: number
}

type BarGraphProps = {
  data: BarGraphData[],
  fill: string
}

type PieGraphProps = {
  data: { label: string, value: number, fill?: string }[]
}

type LineGraphProps = {
  data: BarGraphData[],
  stroke: string
}

export function BarGraph(props: BarGraphProps) {
  return (
    <div className="p-3 text-xs/4 font-normal text-secondary-300">
      <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={props.data}
      >
        <CartesianGrid
          horizontal={true}
          vertical={true}
          stroke="#f2f2f2" />
        <XAxis dataKey="label" />
        <YAxis width="auto" />
        <Bar dataKey="value" fill={props.fill} radius={[10, 10, 0, 0]} />
      </ BarChart>
    </div>
  )
}

export function PieGraph(props: PieGraphProps) {
  return (
    <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart >
          <Pie
            data={props.data}
            innerRadius="60%"
            outerRadius="105%"
            fill="#8884d8"
            dataKey="value"
          />
          <RechartsDevtools />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export function LineGraph(props: LineGraphProps) {
  return (
    <div className="w-full h-48 md:w-48 md:h-48 lg:w-2/3 lg:h-64 self-center">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          layout="horizontal"
          data={props.data}
        >
          <CartesianGrid stroke="#f2f2f2" />
          <XAxis dataKey="label" />
          <YAxis width="auto" />
          <Line dataKey="value" stroke={props.stroke} />
        </LineChart>
      </ResponsiveContainer>
    </div>


  )
}
