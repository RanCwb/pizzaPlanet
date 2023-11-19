import prsimaClient from "../../prisma";


interface ISendOrder {
  order_id: string
}


class SendOrderToTableService {

  async execute({ order_id}:ISendOrder) {
    
    const order = await prsimaClient.order.update({
      where: {
        id: order_id
      },
      data: {
       draft: false

      }
    })

      return order

  }

}
export { SendOrderToTableService }