import { TestBed } from '@angular/core/testing';

import { ApiErrorInterceptor } from './api-error.interceptor';

describe('ApiErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiErrorInterceptor = TestBed.inject(ApiErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
