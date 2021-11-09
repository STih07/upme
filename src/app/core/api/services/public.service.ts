/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IsActivePresentDTO } from '../models/is-active-present-dto';
@Injectable({
  providedIn: 'root',
})
class PublicService extends __BaseService {
  static readonly isActiveRecruitmentPresentUsingGETPath = '/api/public/recruitments/active/present';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get is active recruitment present
   * @return OK
   */
  isActiveRecruitmentPresentUsingGETResponse(): __Observable<__StrictHttpResponse<IsActivePresentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/public/recruitments/active/present`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IsActivePresentDTO>;
      })
    );
  }
  /**
   * Get is active recruitment present
   * @return OK
   */
  isActiveRecruitmentPresentUsingGET(): __Observable<IsActivePresentDTO> {
    return this.isActiveRecruitmentPresentUsingGETResponse().pipe(
      __map(_r => _r.body as IsActivePresentDTO)
    );
  }
}

module PublicService {
}

export { PublicService }
