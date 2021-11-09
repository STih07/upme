/* tslint:disable */
export interface UserRegistrationResponse {
  email?: string;
  firstName?: string;
  lastName?: string;
  roles?: Array<'ADMIN' | 'ANONYMOUS' | 'CANDIDATE' | 'SUPER_ADMIN'>;
  uuid?: string;
}
