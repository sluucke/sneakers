import { client } from '../../prisma/client'

class DeleteProductUseCase {
  async exec(id: string) {
    try {
      const productExists = await client.product.findUnique({
        where: {
          id: id.toString(),
        },
      })
      if (!productExists) {
        throw new Error("Product doesn't exists")
      }
      await client.product.delete({
        where: {
          id: id,
        },
      })
      return
    } catch (err) {
      throw new Error(err)
    }
  }
}

export { DeleteProductUseCase }
