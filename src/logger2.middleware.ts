import { Request, Response } from 'express';
export function logger(request: Request, response: Response, next: () => void) {
    const { ip, method, body } = request;
    const userAgent = request.get('user-agent') || '';


      console.log(
        `${method} ${JSON.stringify(body)}  ${ip}`
      );


    next();
  
}