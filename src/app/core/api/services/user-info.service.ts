/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserInfoResponseDto } from '../models/user-info-response-dto';
@Injectable({
  providedIn: 'root',
})
class UserInfoService extends __BaseService {
  static readonly getUsersInfoUsingGETPath = '/api/users';
  static readonly uploadUserImageUsingPOSTPath = '/api/users/{userUUID}/image/upload';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get user
   * @return OK
   */
  getUsersInfoUsingGETResponse(): __Observable<__StrictHttpResponse<Array<UserInfoResponseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserInfoResponseDto>>;
      })
    );
  }
  /**
   * Get user
   * @return OK
   */
  getUsersInfoUsingGET(): __Observable<Array<UserInfoResponseDto>> {
    return this.getUsersInfoUsingGETResponse().pipe(
      __map(_r => _r.body as Array<UserInfoResponseDto>)
    );
  }

  /**
   * Upload user image
   * @param params The `UserInfoService.UploadUserImageUsingPOSTParams` containing the following parameters:
   *
   * - `userUUID`: userUUID
   *
   * - `file`:
   *
   * @return OK
   */
  uploadUserImageUsingPOSTResponse(params: UserInfoService.UploadUserImageUsingPOSTParams): __Observable<__StrictHttpResponse<UserInfoResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users/${encodeURIComponent(String(params.userUUID))}/image/upload`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserInfoResponseDto>;
      })
    );
  }
  /**
   * Upload user image
   * @param params The `UserInfoService.UploadUserImageUsingPOSTParams` containing the following parameters:
   *
   * - `userUUID`: userUUID
   *
   * - `file`:
   *
   * @return OK
   */
  uploadUserImageUsingPOST(params: UserInfoService.UploadUserImageUsingPOSTParams): __Observable<UserInfoResponseDto> {
    return this.uploadUserImageUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as UserInfoResponseDto)
    );
  }
}

module UserInfoService {

  /**
   * Parameters for uploadUserImageUsingPOST
   */
  export interface UploadUserImageUsingPOSTParams {

    /**
     * userUUID
     */
    userUUID: string;
    file?: Blob;
  }
}

export { UserInfoService }
