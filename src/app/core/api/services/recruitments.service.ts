/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RecruitmentDTO } from '../models/recruitment-dto';
@Injectable({
  providedIn: 'root',
})
class RecruitmentsService extends __BaseService {
  static readonly createRecruitmentUsingPOSTPath = '/api/recruitments';
  static readonly getAllRecruitmentsUsingGETPath = '/api/recruitments/all';
  static readonly finishRecruitmentUsingPOSTPath = '/api/recruitments/finish/{id}';
  static readonly startRecruitmentUsingPOSTPath = '/api/recruitments/start/{id}';
  static readonly getRecruitmentUsingGETPath = '/api/recruitments/{id}';
  static readonly updateRecruitmentUsingPUTPath = '/api/recruitments/{id}';
  static readonly deleteRecruitmentUsingDELETEPath = '/api/recruitments/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Create recruitment
   * @param dto dto
   * @return OK
   */
  createRecruitmentUsingPOSTResponse(dto: RecruitmentDTO): __Observable<__StrictHttpResponse<RecruitmentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/recruitments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruitmentDTO>;
      })
    );
  }
  /**
   * Create recruitment
   * @param dto dto
   * @return OK
   */
  createRecruitmentUsingPOST(dto: RecruitmentDTO): __Observable<RecruitmentDTO> {
    return this.createRecruitmentUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as RecruitmentDTO)
    );
  }

  /**
   * Get all recruitments
   * @return OK
   */
  getAllRecruitmentsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<RecruitmentDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/recruitments/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RecruitmentDTO>>;
      })
    );
  }
  /**
   * Get all recruitments
   * @return OK
   */
  getAllRecruitmentsUsingGET(): __Observable<Array<RecruitmentDTO>> {
    return this.getAllRecruitmentsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<RecruitmentDTO>)
    );
  }

  /**
   * Force finishing recruitment
   * @param id id
   * @return OK
   */
  finishRecruitmentUsingPOSTResponse(id: number): __Observable<__StrictHttpResponse<RecruitmentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/recruitments/finish/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruitmentDTO>;
      })
    );
  }
  /**
   * Force finishing recruitment
   * @param id id
   * @return OK
   */
  finishRecruitmentUsingPOST(id: number): __Observable<RecruitmentDTO> {
    return this.finishRecruitmentUsingPOSTResponse(id).pipe(
      __map(_r => _r.body as RecruitmentDTO)
    );
  }

  /**
   * Force starting recruitment
   * @param id id
   * @return OK
   */
  startRecruitmentUsingPOSTResponse(id: number): __Observable<__StrictHttpResponse<RecruitmentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/recruitments/start/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruitmentDTO>;
      })
    );
  }
  /**
   * Force starting recruitment
   * @param id id
   * @return OK
   */
  startRecruitmentUsingPOST(id: number): __Observable<RecruitmentDTO> {
    return this.startRecruitmentUsingPOSTResponse(id).pipe(
      __map(_r => _r.body as RecruitmentDTO)
    );
  }

  /**
   * Get target recruitment
   * @param id id
   * @return OK
   */
  getRecruitmentUsingGETResponse(id: number): __Observable<__StrictHttpResponse<RecruitmentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/recruitments/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruitmentDTO>;
      })
    );
  }
  /**
   * Get target recruitment
   * @param id id
   * @return OK
   */
  getRecruitmentUsingGET(id: number): __Observable<RecruitmentDTO> {
    return this.getRecruitmentUsingGETResponse(id).pipe(
      __map(_r => _r.body as RecruitmentDTO)
    );
  }

  /**
   * Update recruitment
   * @param params The `RecruitmentsService.UpdateRecruitmentUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `dto`: dto
   *
   * @return OK
   */
  updateRecruitmentUsingPUTResponse(params: RecruitmentsService.UpdateRecruitmentUsingPUTParams): __Observable<__StrictHttpResponse<RecruitmentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.dto;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/recruitments/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruitmentDTO>;
      })
    );
  }
  /**
   * Update recruitment
   * @param params The `RecruitmentsService.UpdateRecruitmentUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `dto`: dto
   *
   * @return OK
   */
  updateRecruitmentUsingPUT(params: RecruitmentsService.UpdateRecruitmentUsingPUTParams): __Observable<RecruitmentDTO> {
    return this.updateRecruitmentUsingPUTResponse(params).pipe(
      __map(_r => _r.body as RecruitmentDTO)
    );
  }

  /**
   * Delete recruitment
   * @param id id
   * @return OK
   */
  deleteRecruitmentUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<RecruitmentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/recruitments/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruitmentDTO>;
      })
    );
  }
  /**
   * Delete recruitment
   * @param id id
   * @return OK
   */
  deleteRecruitmentUsingDELETE(id: number): __Observable<RecruitmentDTO> {
    return this.deleteRecruitmentUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as RecruitmentDTO)
    );
  }
}

module RecruitmentsService {

  /**
   * Parameters for updateRecruitmentUsingPUT
   */
  export interface UpdateRecruitmentUsingPUTParams {

    /**
     * id
     */
    id: number;

    /**
     * dto
     */
    dto: RecruitmentDTO;
  }
}

export { RecruitmentsService }
