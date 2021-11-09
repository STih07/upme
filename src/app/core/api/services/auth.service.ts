/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActivationCodeResponseDto } from '../models/activation-code-response-dto';
import { CreateActivationCodeRequest } from '../models/create-activation-code-request';
import { ValidateActivationCodeRequest } from '../models/validate-activation-code-request';
import { AuthDto } from '../models/auth-dto';
import { ClientLoginReqDto } from '../models/client-login-req-dto';
import { RefreshTokenDto } from '../models/refresh-token-dto';
import { UserRegistrationResponse } from '../models/user-registration-response';
import { UserRegistrationRequest } from '../models/user-registration-request';
import { GatewayChangePasswordRequestDto } from '../models/gateway-change-password-request-dto';
@Injectable({
  providedIn: 'root',
})
class AuthService extends __BaseService {
  static readonly createActivationCodeUsingPOSTPath = '/api/activation';
  static readonly validateActivationCodeUsingPOSTPath = '/api/activation/validate';
  static readonly loginUsingPOSTPath = '/api/auth/login';
  static readonly logoutUsingPOSTPath = '/api/auth/logout';
  static readonly refreshAccessTokenUsingPOSTPath = '/api/auth/refreshAccessToken';
  static readonly registerUsingPOSTPath = '/api/auth/register';
  static readonly changePasswordUsingPOSTPath = '/api/user/changePassword';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Create activation code
   * @param dto dto
   * @return OK
   */
  createActivationCodeUsingPOSTResponse(dto: CreateActivationCodeRequest): __Observable<__StrictHttpResponse<ActivationCodeResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/activation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivationCodeResponseDto>;
      })
    );
  }
  /**
   * Create activation code
   * @param dto dto
   * @return OK
   */
  createActivationCodeUsingPOST(dto: CreateActivationCodeRequest): __Observable<ActivationCodeResponseDto> {
    return this.createActivationCodeUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as ActivationCodeResponseDto)
    );
  }

  /**
   * Validate activation code
   * @param dto dto
   * @return OK
   */
  validateActivationCodeUsingPOSTResponse(dto: ValidateActivationCodeRequest): __Observable<__StrictHttpResponse<ActivationCodeResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/activation/validate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActivationCodeResponseDto>;
      })
    );
  }
  /**
   * Validate activation code
   * @param dto dto
   * @return OK
   */
  validateActivationCodeUsingPOST(dto: ValidateActivationCodeRequest): __Observable<ActivationCodeResponseDto> {
    return this.validateActivationCodeUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as ActivationCodeResponseDto)
    );
  }

  /**
   * Login user
   * @param clientLoginReqDto clientLoginReqDto
   * @return OK
   */
  loginUsingPOSTResponse(clientLoginReqDto: ClientLoginReqDto): __Observable<__StrictHttpResponse<AuthDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = clientLoginReqDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthDto>;
      })
    );
  }
  /**
   * Login user
   * @param clientLoginReqDto clientLoginReqDto
   * @return OK
   */
  loginUsingPOST(clientLoginReqDto: ClientLoginReqDto): __Observable<AuthDto> {
    return this.loginUsingPOSTResponse(clientLoginReqDto).pipe(
      __map(_r => _r.body as AuthDto)
    );
  }

  /**
   * Logout user
   * @param access_token access_token
   */
  logoutUsingPOSTResponse(accessToken: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (accessToken != null) __headers = __headers.set('access_token', accessToken.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/logout`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Logout user
   * @param access_token access_token
   */
  logoutUsingPOST(accessToken: string): __Observable<null> {
    return this.logoutUsingPOSTResponse(accessToken).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Refresh user access token
   * @param refreshTokenDto refreshTokenDto
   * @return OK
   */
  refreshAccessTokenUsingPOSTResponse(refreshTokenDto: RefreshTokenDto): __Observable<__StrictHttpResponse<AuthDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = refreshTokenDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/refreshAccessToken`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthDto>;
      })
    );
  }
  /**
   * Refresh user access token
   * @param refreshTokenDto refreshTokenDto
   * @return OK
   */
  refreshAccessTokenUsingPOST(refreshTokenDto: RefreshTokenDto): __Observable<AuthDto> {
    return this.refreshAccessTokenUsingPOSTResponse(refreshTokenDto).pipe(
      __map(_r => _r.body as AuthDto)
    );
  }

  /**
   * Register user
   * @param userRegistrationDto userRegistrationDto
   * @return OK
   */
  registerUsingPOSTResponse(userRegistrationDto: UserRegistrationRequest): __Observable<__StrictHttpResponse<UserRegistrationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userRegistrationDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserRegistrationResponse>;
      })
    );
  }
  /**
   * Register user
   * @param userRegistrationDto userRegistrationDto
   * @return OK
   */
  registerUsingPOST(userRegistrationDto: UserRegistrationRequest): __Observable<UserRegistrationResponse> {
    return this.registerUsingPOSTResponse(userRegistrationDto).pipe(
      __map(_r => _r.body as UserRegistrationResponse)
    );
  }

  /**
   * Change user password
   * @param params The `AuthService.ChangePasswordUsingPOSTParams` containing the following parameters:
   *
   * - `dto`: dto
   *
   * - `userUUID`:
   *
   * - `roles`:
   *
   * - `refreshToken`:
   *
   * - `ipAddress`:
   *
   * - `expiresIn`:
   *
   * - `accessToken`:
   */
  changePasswordUsingPOSTResponse(params: AuthService.ChangePasswordUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.dto;
    if (params.userUUID != null) __params = __params.set('userUUID', params.userUUID.toString());
    (params.roles || []).forEach(val => {if (val != null) __params = __params.append('roles', val.toString())});
    if (params.refreshToken != null) __params = __params.set('refreshToken', params.refreshToken.toString());
    if (params.ipAddress != null) __params = __params.set('ipAddress', params.ipAddress.toString());
    if (params.expiresIn != null) __params = __params.set('expiresIn', params.expiresIn.toString());
    if (params.accessToken != null) __params = __params.set('accessToken', params.accessToken.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/user/changePassword`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Change user password
   * @param params The `AuthService.ChangePasswordUsingPOSTParams` containing the following parameters:
   *
   * - `dto`: dto
   *
   * - `userUUID`:
   *
   * - `roles`:
   *
   * - `refreshToken`:
   *
   * - `ipAddress`:
   *
   * - `expiresIn`:
   *
   * - `accessToken`:
   */
  changePasswordUsingPOST(params: AuthService.ChangePasswordUsingPOSTParams): __Observable<null> {
    return this.changePasswordUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AuthService {

  /**
   * Parameters for changePasswordUsingPOST
   */
  export interface ChangePasswordUsingPOSTParams {

    /**
     * dto
     */
    dto: GatewayChangePasswordRequestDto;
    userUUID?: string;
    roles?: Array<'ADMIN' | 'ANONYMOUS' | 'CANDIDATE' | 'SUPER_ADMIN'>;
    refreshToken?: string;
    ipAddress?: string;
    expiresIn?: number;
    accessToken?: string;
  }
}

export { AuthService }
