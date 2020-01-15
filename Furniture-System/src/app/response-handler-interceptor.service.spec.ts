import { TestBed } from '@angular/core/testing';

import { ResponseHandlerInterceptorService } from './response-handler-interceptor.service';

describe('ResponseHandlerInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseHandlerInterceptorService = TestBed.get(ResponseHandlerInterceptorService);
    expect(service).toBeTruthy();
  });
});
