export interface IProduct {
  id?: string
  name: string
  slug: string
  price: number
  rating: number
  numReviews: number
  countInStock: number
  sizes: any[]
  brand: string
  description: string
  images: any[]
}