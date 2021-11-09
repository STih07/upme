/* tslint:disable */
export interface ActivationCodeResponseDto {
  code?: string;
  expiresAt?: string;
  id?: number;
  roles?: Array<'ADMIN' | 'ANONYMOUS' | 'CANDIDATE' | 'SUPER_ADMIN'>;
}
