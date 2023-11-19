import prismaClient from '../../prisma';


interface IFinishOrder {
  order_id: string
}

class FinishOrderService {

  async execute({order_id}: IFinishOrder) {

    const order = await prismaClient.order.update({
      where: {
        id: order_id
      },
      data: {
        status: true
      }
    })

    return order
  }
}

export { FinishOrderService }