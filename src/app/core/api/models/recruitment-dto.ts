/* tslint:disable */
import { ActivityDTO } from './activity-dto';
import { CandidateDTO } from './candidate-dto';
export interface RecruitmentDTO {
  activities?: Array<ActivityDTO>;
  candidates?: Array<CandidateDTO>;
  endDate: string;
  id?: number;
  startDate: string;
  status?: string;
  type: string;
}
