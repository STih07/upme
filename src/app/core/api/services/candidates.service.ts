/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CandidateDTO } from '../models/candidate-dto';
import { CreateCandidateRequestDto } from '../models/create-candidate-request-dto';
@Injectable({
  providedIn: 'root',
})
class CandidatesService extends __BaseService {
  static readonly createCandidateUsingPOSTPath = '/api/candidates';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Create candidate
   * @param dto dto
   * @return OK
   */
  createCandidateUsingPOSTResponse(dto: CreateCandidateRequestDto): __Observable<__StrictHttpResponse<CandidateDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/candidates`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CandidateDTO>;
      })
    );
  }
  /**
   * Create candidate
   * @param dto dto
   * @return OK
   */
  createCandidateUsingPOST(dto: CreateCandidateRequestDto): __Observable<CandidateDTO> {
    return this.createCandidateUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as CandidateDTO)
    );
  }
}

module CandidatesService {
}

export { CandidatesService }
