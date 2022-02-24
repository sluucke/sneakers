import { Request, Response, Router } from 'express'
import { CreateCategoryController } from './useCases/CreateCategory/CreateCategoryController'
import { CreateProductController } from './useCases/CreateProduct/CreateProductController'
import { CreateProductCategoryController } from './useCases/CreateProductCategory/CreateProductCategoryController'
import { DeleteProductController } from './useCases/DeleteProduct/DeleteProductController'
import { EditProductController } from './useCases/EditProduct/EditProductController'
import { FetchProductsController } from './useCases/FetchAllProducts/FetchAllProductsController'
import { FindProductController } from './useCases/FindProduct/FindProductController'

const router = Router()

// Products

const createProductController = new CreateProductController()
const editProductController = new EditProductController()
const fetchProductsController = new FetchProductsController()
const deleteProductController = new DeleteProductController()
const findProduct = new FindProductController()

router.post('/product', createProductController.handle)
router.post('/product/edit', editProductController.handle)
router.delete('/product', deleteProductController.handle)
router.get('/product/:id', findProduct.handle)
router.get('/products', fetchProductsController.handle)

// Categories

const createProductCategoryController = new CreateProductCategoryController()
const createCategory = new CreateCategoryController()

router.post('/category', createCategory.handle)
router.post('/categoryProduct', createProductCategoryController.handle)

export { router }
