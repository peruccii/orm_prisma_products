import { Router } from 'express';
import { CreateProductController } from './controllers/CreateProductController';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateProductCategoryController } from './controllers/CreateProductCategoryController';
import { CreateProductWithExistCategoryController } from './controllers/CreateProductWithExistCategoryController';
import { FindProductController } from './controllers/FindProductController';

const router = Router()

const CreateProduct = new CreateProductController()
const CreateCategory = new CreateCategoryController()
const CreateProductCategory = new CreateProductCategoryController()
const CreateProductWithExistCategory = new CreateProductWithExistCategoryController
const FindProduct = new FindProductController

router.post('/product', CreateProduct.handle)
router.post('/category', CreateCategory.handle)
router.post('/categoryProduct', CreateProductCategory.handle)
router.post('/productWithCategory', CreateProductWithExistCategory.handle)
router.get('/product/:id', FindProduct.handle)

export { router }