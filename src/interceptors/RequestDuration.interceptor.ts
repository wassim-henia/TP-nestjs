import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class RequestDurationInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext,
    next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log('Request started..');
    const start = Date.now();
    return next.handle().pipe(
    tap(()=> {
    const end = Date.now();
    console.log(`Request ended after ${-start+end} ms`);
    }
    ));
}}