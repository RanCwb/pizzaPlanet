import prismaClient from"../../prisma/index"


  interface ICreateProducts {
    name: string;
    price: string;
    description: string;
    banner: string
    category_id: string
    
  }

class CreateProductsService {

 async execute({name, price, description, category_id, banner}: ICreateProducts) {

  const product = await prismaClient.product.create({
    data: {
      name : name,
      price: price,
      description: description,
      banner: banner,
      category_id: category_id
    }
  })
  
  return product

 }

}

export  {CreateProductsService}