export type Sprint = {
  month: string
  year: number
  sprint: number
  duration: string
  title: string
  businessImpact: string[]
  devLearning: string[]
}

export const sprints: Sprint[] = [
  {
    month: "February",
    year: 2026,
    sprint: 1,
    duration: "Feb 1 – Feb 15",
    title: "Matching Latency Reduced 38%",
    businessImpact: [
      "+4.2% conversion",
      "-38% latency",
      "21% lower Redis load"
    ],
    devLearning: [
      "Improved Redis ZSET modeling",
      "Handled race conditions better",
      "Learned impact measurement framework"
    ]
  }
]
