import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { LoginUserController } from './controllers/user/LoginUserController';

const router = Router();


//router user create
router.post('/users', (request: Request, response: Response) => {
  return new CreateUserController().handle(request, response)
})

router.post('/login', (request: Request, response: Response) => {
  return new LoginUserController().handle(request, response)
})




export  { router }