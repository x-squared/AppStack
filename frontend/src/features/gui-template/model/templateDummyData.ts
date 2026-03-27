export type TemplateRecipientRow = {
  id: number
  pid: string
  firstName: string
  lastName: string
  bloodType: string
  status: 'Active' | 'On Hold' | 'Transplanted'
}

export const templateRecipientRows: TemplateRecipientRow[] = [
  {
    id: 101,
    pid: 'P-240001',
    firstName: 'Lea',
    lastName: 'Meyer',
    bloodType: 'A+',
    status: 'Active',
  },
  {
    id: 102,
    pid: 'P-240002',
    firstName: 'Jonas',
    lastName: 'Keller',
    bloodType: '0-',
    status: 'On Hold',
  },
  {
    id: 103,
    pid: 'P-240003',
    firstName: 'Mina',
    lastName: 'Rossi',
    bloodType: 'B+',
    status: 'Transplanted',
  },
]
