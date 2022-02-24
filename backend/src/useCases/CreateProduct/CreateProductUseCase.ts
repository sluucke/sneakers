import { IProduct } from '../../interfaces/Product'
import { client } from '../../prisma/client'

class CreateProductUseCase {
  async exec({
    id,
    brand,
    price,
    numReviews,
    name,
    images,
    description,
    countInStock,
    rating,
    sizes,
    slug,
  }: IProduct) {
    const productAlreadyExists = await client.product.findFirst({
      where: {
        id,
      },
    })

    if (productAlreadyExists) {
      throw new Error('Product already exists')
    }

    const product = await client.product.create({
      data: {
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
      },
    })

    return product
  }
}

export { CreateProductUseCase }
