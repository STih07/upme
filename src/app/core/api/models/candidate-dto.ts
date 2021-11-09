/* tslint:disable */
import { UserInfoResponseDto } from './user-info-response-dto';
import { UserRegistrationResponse } from './user-registration-response';
import { OnboardCandidateDTO } from './onboard-candidate-dto';
export interface CandidateDTO {
  additionalInfo?: UserInfoResponseDto;
  basicInfo?: UserRegistrationResponse;
  onboardingInfo?: OnboardCandidateDTO;
}
