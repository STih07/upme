/* tslint:disable */
export interface OnboardCandidateDTO {
  createdAt?: string;
  decision?: 'APPROVED' | 'APPROVED_FOR_TRIAL' | 'REDIRECTED' | 'REFUSED';
  readyToDecision?: boolean;
  recruitmentId?: number;
  updatedAt?: string;
}
