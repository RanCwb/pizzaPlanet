
import prismaClient from"../../prisma/index"
import { hash } from "bcryptjs";

 interface Request {
   name: string;
   email: string;
   password: string;
 }


class CreateUserService{
  async execute({name, email, password}: Request) {
    
      if (!email) {
      throw new Error("Email incorrect");
      }
      const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
          email: email
        }
      })

      if (userAlreadyExists) {
        throw new Error("User already exists");
      }


      const passwordHash = await hash(password, 8);

      const user = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: passwordHash
        },
        select: {
          id: true,
          name: true,
          email: true
        }
      })

        return user;
    }
}

export { CreateUserService }