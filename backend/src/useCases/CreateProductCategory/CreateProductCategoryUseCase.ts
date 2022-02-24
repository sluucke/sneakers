import { IProductCategory } from '../../interfaces/ProductCategory'
import { client } from '../../prisma/client'

class CreateProductCategoryUseCase {
  async exec({ idProduct, idCategory }: IProductCategory) {
    const category = await client.productCategory.create({
      data: {
        id_category: idCategory,
        id_product: idProduct
      }
    })
    return category
  }
}

export { CreateProductCategoryUseCase }
