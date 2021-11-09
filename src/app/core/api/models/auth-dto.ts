/* tslint:disable */
export interface AuthDto {
  accessToken?: string;
  expiresIn?: number;
  ipAddress?: string;
  refreshToken?: string;
  roles?: Array<'ADMIN' | 'ANONYMOUS' | 'CANDIDATE' | 'SUPER_ADMIN'>;
  userUUID?: string;
}
