/* tslint:disable */
import { ContactsDto } from './contacts-dto';
import { EducationDto } from './education-dto';
export interface CreateCandidateRequestDto {
  birthdate: string;
  contacts: ContactsDto;
  education: EducationDto;
  email?: string;
  firstName?: string;
  lastName?: string;
  motivationLetter: string;
  password: string;
}
