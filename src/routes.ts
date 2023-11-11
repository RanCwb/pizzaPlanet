import {Router, Request, Response} from 'express';
import multer from 'multer';
import { CreateUserController } from './controllers/user/CreateUserController';
import { LoginUserController } from './controllers/user/LoginUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductsController } from './controllers/products/CreateProductsController';
import { FilterProductsController } from './controllers/products/FilterProductsController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import isAuth from './middlewares/isAuth';

import  uploadConfig  from './config/multer';

const router = Router();


  const upload = multer(uploadConfig.uploud(
    "./tmp"
  ))

//router user create
router.post('/users', (request: Request, response: Response) => {
  return new CreateUserController().handle(request, response)
})

router.post('/login', (request: Request, response: Response) => {
  return new LoginUserController().handle(request, response)
})

router.get('/me', isAuth, (request: Request, response: Response) => {

  return new DetailUserController().handle(request, response)
})

//category routes

router.post('/category', isAuth, (request: Request, response: Response) => {
  return new CreateCategoryController().handle(request, response)
})

router.get('/category/list', isAuth, (request: Request, response: Response) => {
  return new ListCategoryController().handle(request, response)
})

// products routes

router.get('/products', isAuth,  upload.single('file'), (request: Request, response: Response) => {

  return new CreateProductsController().handle(request, response)
  
})

router.get('/category/filter', isAuth, (request: Request, response: Response) => {
  return new FilterProductsController().handle(request, response)
})

// oerder routes

router.post('/order', isAuth, (request: Request, response: Response) => {
  return new CreateOrderController().handle(request, response)
})


export  { router }