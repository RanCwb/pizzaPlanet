import prismaClient from"../../prisma/index"

interface IFilterProducts {

  category_id: string
  
}

class FilterProductsService {
  
  async execute({ category_id}: IFilterProducts) {


    const findByCategory = await prismaClient.product.findMany({
      
      where: {
        category_id: category_id
      }
    })
    
      return findByCategory;
  }



}

export  {FilterProductsService}