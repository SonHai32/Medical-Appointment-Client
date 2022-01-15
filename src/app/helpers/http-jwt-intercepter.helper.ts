import { AuthSelector } from './../state-management/selectors/auth.seletor';
import { Store } from '@ngrx/store';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, mergeMap, retryWhen, delay, scan } from 'rxjs/operators';
import AuthToken from '../models/auth-token.model';

@Injectable({
  providedIn: 'root',
})
export class HttpJwtIntercepter implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const customNextHandle = (request: HttpRequest<any>) => {
      return next.handle(request).pipe(
        retryWhen((err) =>
          err.pipe(
            delay(1000),
            scan((attempCount: number) => {
              if (attempCount > 3) {
                throw new Error('Error while fetching data');
              } else {
                const increaseAttemp = attempCount + 1;
                return increaseAttemp;
              }
            }, 0)
          )
        )
      );
    };

    req = req.clone({ setHeaders: { 'Content-Type': 'application/json' } });

    if (req.url.endsWith('refreshToken')) {
      req = req.clone({
        withCredentials: true,
      });
    } else if (req.url.endsWith('getUser')) {
      return this.store.select(AuthSelector.TokenSelector).pipe(
        mergeMap((token: AuthToken | null) => {
          req = req.clone({
            setHeaders: {
              authorization: `Bearer ${token?.accessToken}`,
            },
          });
          return customNextHandle(req);
        })
      );
    }
    //  else if (
    //   req.method === 'DELETE' ||
    //   req.method === 'PUT' ||
    //   req.method === 'POST' ||
    //   req.method === 'PATCH' ||
    //   (req.url.endsWith('users') && req.method === 'GET') ||
    //   (req.url.endsWith('product-groups') && req.method === 'GET')
    // ) {
    //   return this.store.select(AuthSelector.TokenSelector).pipe(
    //     mergeMap((token: AuthToken | null) => {
    //       req = req.clone({
    //         setHeaders: {
    //           Authorization: `Bearer ${token?.accessToken}`,
    //         },
    //       });
    //       return customNextHandle(req);
    //     })
    //   );
    // }
    return customNextHandle(req);
  }
}
