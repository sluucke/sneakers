import { Request, Response } from 'express'
import { FindProductUseCase } from './FindProductUseCase'

class FindProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const findProductUseCase = new FindProductUseCase()

    try {
      const product = await findProductUseCase.exec(id)

      return response.json(product)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export { FindProductController }
