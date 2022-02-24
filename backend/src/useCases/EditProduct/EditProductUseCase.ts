import { IProduct } from '../../interfaces/Product'
import { client } from '../../prisma/client'

interface IEditProduct {
  id: string
  data: IProduct
}

class EditProductUseCase {
  async exec({ id, data }: IEditProduct) {
    const productExists = await client.product.findFirst({
      where: {
        id,
      },
    })
    if (!productExists) {
      throw new Error("Product doesn't exists")
    }

    const product = await client.product.update({
      where: {
        id,
      },
      data,
      
    })

    return product
  }
}

export { EditProductUseCase }
