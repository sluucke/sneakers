import { client } from '../../prisma/client'

class FindProductUseCase {
  async exec(id: string) {
    const product = await client.product.findFirst({
      where: {
        id,
      },
    })

    return product
  }
}

export { FindProductUseCase }
