import { Request, Response } from "express";
import { SendOrderToTableService } from "../../services/order/SendOrderToTableService";

class SendOrderToTableController {
  async handle(request: Request, response: Response) {

    const { order_id} = request.body;

    const sendOrderToTableService = new SendOrderToTableService();


      const order = await sendOrderToTableService.execute({ 
        order_id
      })

      return response.json(order);


  } 
}

export { SendOrderToTableController }