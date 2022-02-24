import { Request, Response } from 'express'
import { IProduct } from '../../interfaces/Product'
import { EditProductUseCase } from './EditProductUseCase'

interface IEditProductRequest {
  id: string
  data: IProduct
}

class EditProductController {
  async handle(request: Request, response: Response) {
    let { id, data }: IEditProductRequest = request.body

    const editProductUseCase = new EditProductUseCase()
    try {
      const product = await editProductUseCase.exec({ id, data })
      return response.json(product)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export { EditProductController }
