import { Request, Response } from 'express'
import { IProduct } from '../../interfaces/Product'
import { CreateProductUseCase } from './CreateProductUseCase'

class CreateProductController {
  async handle(request: Request, response: Response) {
    const {
      slug,
      sizes,
      rating,
      price,
      numReviews,
      name,
      images,
      description,
      countInStock,
      brand,
    }: IProduct = request.body

    const createProductUseCase = new CreateProductUseCase()
    try {

      const product = await createProductUseCase.exec({
        brand,
        countInStock,
        description,
        images,
        name,
        numReviews,
        price,
        rating,
        sizes,
        slug,
      })
      
      return response.json(product)
    } catch(err) {
      throw new Error(err)
    }
  }
}

export { CreateProductController }
