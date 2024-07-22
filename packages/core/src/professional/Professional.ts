import { Scheduling } from '../scheduling'

export interface Professional {
  id: number
  name: string
  description: string
  imageUrl: string
  rating: number
  numberOfRatings: number
  schedulings?: Scheduling[]
}