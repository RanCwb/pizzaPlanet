import { Request, Response } from "express";
import { CreateProductsService } from "../../services/products/CreateProductsService"




class CreateProductsController {

  async handle(request: Request, response: Response) {

    const { name, price, description, category_id } = request.body;

    const createProductsService = new CreateProductsService();


    if (!request.file) {
  
      throw new Error("error upload file")

    } else {

        const {originalname, filename : banner} = request.file

        const product = await createProductsService.execute({
          name,
          price,
          description,
          category_id,
          banner

        });
      return response.json(product);

    }
  

  }

}


export { CreateProductsController }