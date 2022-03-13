
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, baseUrl } = req;
    console.log('Request  :' + " method :" + method + " url " + baseUrl   );
    next();
  }
}