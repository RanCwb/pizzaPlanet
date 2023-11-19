import { Response, Request } from "express";
import{ DeleterOrderService} from "../../services/order/DeleterOrderService";



class DeleterOrderController {
    async handle(request: Request, response: Response) {
      const order_id = request.query.order_id as string;

      const deleterOrderService = new DeleterOrderService();


      await deleterOrderService.execute(order_id);

      return response.json({
        message: "Order deleted!" + order_id
      });
  

    }

  }

  export { DeleterOrderController }