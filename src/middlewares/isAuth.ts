import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface TokenPayload {
  sub: string;
}

export default function isAuth(
  request: Request,
  response: Response,
  next: () => NextFunction
){
  //recieve token
  const authToken = request.headers.authorization;

  if(!authToken){
    return response.status(401).json({
      errorCode: "token.invalid"
    })
  }
  console.log(authToken);


  const [, token] = authToken.split(" ");
  console.log(token);

  try{
    // validation token
    const { sub } = verify(token,
       process.env.JWT_SECRET
      ) as TokenPayload;

      // add user id to request
      request.user_id = sub;

      return next();

  }catch(err){
    return response.status(401).json({
      errorCode: "token.expired"
    })
  }

}