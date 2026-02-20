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
  duration: "Feb 2 – Feb 14",
  title: "Cohort-Based Match Allocation & Admin Automation",
  businessImpact: [
    "Match Me: Cohort-based allotment system",
    "Admin panel for allocation control",
    "User purchase notification flow",
    "Admin automation improvements"
  ],
  devLearning: [
    "Improved Redis data structure management",
    "Better code quality standards",
    "Improved maintainability & modular structure"
  ]
}
]
