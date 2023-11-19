import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController {
  async handle(request: Request, response: Response) {


    const listOrdersService = new ListOrdersService();

    const order = await listOrdersService.execute();

    return response.json(order);



  }

}
export { ListOrdersController };