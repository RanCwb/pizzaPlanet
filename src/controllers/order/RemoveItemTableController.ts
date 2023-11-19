import { Request, Response } from "express";
import { RemoveItemTableService } from "../../services/order/RemoveItemTableService";



class RemoveItemTableController {

  async handle(request: Request, response: Response) {

    const  item_id  = request.query.item_id as string;

    const removeItemTableService = new RemoveItemTableService()

    const order = await removeItemTableService.execute({ 
      item_id
    })

    return response.json(order)


  }

}

export { RemoveItemTableController }

