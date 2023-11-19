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
import { DeleterOrderController } from './controllers/order/DeleterOrderController';
import { AddItemsTableController } from './controllers/order/AddItemsTableController';
import { RemoveItemTableController } from './controllers/order/RemoveItemTableController';
import { SendOrderToTableController } from './controllers/order/SendOrderToTableController';
import { ListOrdersController } from './controllers/order/ListOrdersController';
import { DetailOrderController } from './controllers/order/DetailOrderController'; 
import { FinishOrderController } from './controllers/order/FinishOrderController';
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
router.delete('/delete/order', isAuth, (request: Request, response: Response) => {
  return new DeleterOrderController().handle(request, response)
})
router.post('/order/add/item', isAuth, (request: Request, response: Response) => {
  return new AddItemsTableController().handle(request, response)
})
router.delete('/order/remove/item', isAuth, (request: Request, response: Response) => {
  return new RemoveItemTableController().handle(request, response)
})
router.put('/order/send', isAuth, (request: Request, response: Response) => {
  return new SendOrderToTableController().handle(request, response)
})
router.get('/order/list', isAuth, (request: Request, response: Response) => {
  return new ListOrdersController().handle(request, response)
})
router.get('/order/detail', isAuth, (request: Request, response: Response) => {
  return new DetailOrderController().handle(request, response)
})
router.put('/order/finish', isAuth, (request: Request, response: Response) => {
  return new FinishOrderController().handle(request, response)
})
export  { router }