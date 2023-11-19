import prsimaClient from "../../prisma";


interface iOrderRequests {

  item_id: string
}

class RemoveItemTableService {


  async execute({item_id} :iOrderRequests  ) {


    const order = await prsimaClient.item.delete({
      
      where: {
        id: item_id
      }

    })
    return order;

  }

}

export { RemoveItemTableService }