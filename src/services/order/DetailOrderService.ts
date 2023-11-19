import prismaClient from '../../prisma';


  interface DetailOrder {
    order_id: string
  }


class DetailOrderService {

  async execute({order_id}:DetailOrder) {

    const orders = await prismaClient.item.findFirst({
      where: {
        order_id: order_id
      },
      include: {
        product: true,
        order : true
       
      }
    })

    return orders;
  }

}

export { DetailOrderService }