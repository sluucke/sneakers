import { Request, Response } from 'express'
import { IProductCategory } from '../../interfaces/ProductCategory'
import { CreateProductCategoryUseCase } from './CreateProductCategoryUseCase'

class CreateProductCategoryController {
  async handle(request: Request, response: Response) {
    const { idCategory, idProduct }: IProductCategory = request.body

    const createProductCategoryUseCase = new CreateProductCategoryUseCase()

    try {
      const category = await createProductCategoryUseCase.exec({ idCategory, idProduct })

      return response.json(category)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export { CreateProductCategoryController }
