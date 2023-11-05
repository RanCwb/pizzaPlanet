import { Request, Response } from "express";
import { FilterProductsService } from "../../services/products/FilterProductsService";

class FilterProductsController {

  async handle(request: Request, response: Response) {

    const  category_id  = request.query.category_id as string;

    const filterProductsService = new FilterProductsService();

    const products = await filterProductsService.execute({
      
      category_id
    })

    return response.json(products);

  }


}

export { FilterProductsController }