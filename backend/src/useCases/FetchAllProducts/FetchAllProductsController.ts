import { Request, Response } from 'express'
import { FetchProductsUseCase } from './FetchAllProductsUseCase'

class FetchProductsController {
  async handle(request: Request, response: Response) {
    const fetchProductsUseCase = new FetchProductsUseCase()

    try {
      const products = await fetchProductsUseCase.exec()

      return response.json(products)
    } catch (err) {
      throw Error(err)
    }
  }
}

export { FetchProductsController }
