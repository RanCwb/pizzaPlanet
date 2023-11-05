import prismaClient from"../../prisma/index"

interface AuthRequest {
  name: string
}

class CreateCategoryService {

  async execute({name}: AuthRequest) {
    
    if (!name) {
      throw new Error("Name incorrect")
    }
    if (name.length < 3) {
      throw new Error("Name too short")
    }
    if (name === "") {
      throw new Error("Name is invalid")
      
    }
    const category = await prismaClient.category.create({
      data: {
        name : name
      },
      select: {
        id: true,
        name: true
      }
    })

    return category
  }

}

export { CreateCategoryService }