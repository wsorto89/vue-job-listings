export type Job = {
  id: number
  title: string
  type: 'Full-Time' | 'Part-Time' | 'Remote' | 'Internship'
  description: string
  location: string
  salary: string
  company: {
    name: string
    description: string
    contactEmail: string
    contactPhone: string
  }
}
