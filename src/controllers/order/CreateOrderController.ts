import { CreateOrderService } from "../../services/order/CreateOrderService";
import { Request,Response } from "express";




class CreateOrderController {

  async handle(request: Request, response: Response) {
    
    const {table, name} = request.body;


    const createOrderService = new CreateOrderService();


    const order = await createOrderService.execute({table, name});

    return response.json(order);

  }




}



export { CreateOrderController }  