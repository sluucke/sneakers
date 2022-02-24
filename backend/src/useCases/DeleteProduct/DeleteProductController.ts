import { Request, Response } from 'express'
import { DeleteProductUseCase } from './DeleteProductUseCase'

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const id: any = request.body // { id: 'askdi124ih18dfa1ghj' }
    const deleteProductUseCase = new DeleteProductUseCase()

    deleteProductUseCase.exec(id.id)

    return response.json({ message: 'Deleted with success' })
  }
}

export { DeleteProductController }
