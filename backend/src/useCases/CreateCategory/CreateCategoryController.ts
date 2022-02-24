import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body

    const createCategoryUseCase = new CreateCategoryUseCase()

    try {
      const category = await createCategoryUseCase.exec(name)

      return response.json(category)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export { CreateCategoryController }
