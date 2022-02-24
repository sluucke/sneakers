import { ICategory } from '../../interfaces/Category'
import { client } from '../../prisma/client'

class CreateCategoryUseCase {
  async exec({ name }: ICategory) {
    const category = await client.category.create({
      data: {
        name,
      },
    })

    return category
  }
}

export { CreateCategoryUseCase }
