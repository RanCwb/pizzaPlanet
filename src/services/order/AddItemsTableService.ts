import prsimaClient from "../../prisma";


interface iOrderRequests {
  order_id: string
  product_id: string
  amount: number
}

class AddItemsTableService {

  async execute({order_id, product_id, amount, }: iOrderRequests ) {


    const order = await prsimaClient.item.create({
      
      data: {
        order_id: order_id,
        product_id: product_id,
        amount
      }

    })
    return order;
  }


}


export { AddItemsTableService }