import prsimaClient from "../../prisma";

interface iOrderRequests {
 order_id: string
}


class DeleterOrderService {
  async execute(id: string) {
    const order = await prsimaClient.order.delete({
        where: {
          id
        }
      })
      return order;
    }
}
export { DeleterOrderService }