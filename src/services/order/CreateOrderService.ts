import prsimaClient from "../../prisma";

interface ICreateOrder {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({table, name}: ICreateOrder) {

      const order = await prsimaClient.order.create({
        
        data: {
          table: table,
          name: name
        }

      })

      return order;


    } 
  }

export { CreateOrderService }


