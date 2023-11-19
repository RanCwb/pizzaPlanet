import  prsimaClient from "../../prisma";




class ListOrdersService {

  async execute() {
    
    const order = await prsimaClient.order.findMany({
        where: {
          draft: false,
          status: false
        },
        orderBy: {
          createdAt: 'desc'
        }
      })
      return order;


  }
}

export { ListOrdersService }