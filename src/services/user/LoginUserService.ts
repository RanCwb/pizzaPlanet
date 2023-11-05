import prismaClient from"../../prisma/index"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
interface AuthRequest {

  email: string
  password: string
  
}

class LoginUserService{
 async execute({email, password}: AuthRequest) {
  

    // verify if email exists
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(!user) {
      throw new Error("User or password incorrect")
    }
    
    // verify if password is correct
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("User or password incorrect")
    }


    // generate token JWT and return it to user
    const token = sign(
      {
        name: user.name,
        email: user.email
      },
     process.env.JWT_SECRET,
     {
       subject: user.id,
       expiresIn: '30d'
     }
    )
    return {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }

 }
}
export { LoginUserService }