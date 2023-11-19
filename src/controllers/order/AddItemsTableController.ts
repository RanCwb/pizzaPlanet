import { Request, Response } from "express";
import { AddItemsTableService } from "../../services/order/AddItemsTableService";


class AddItemsTableController {

  async handle(request: Request, response: Response) {


    const { order_id, product_id, amount } = request.body;


    const addItemsTableService = new AddItemsTableService();


    const order = await addItemsTableService.execute({
      order_id,
      product_id,
      amount
    });


    return response.json(order);

  }

}

export { AddItemsTableController }