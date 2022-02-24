import { client } from "../../prisma/client";

class FetchProductsUseCase {
  async exec() {
    const products = client.product.findMany()

    return products
  }
}

export { FetchProductsUseCase }