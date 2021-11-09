/* tslint:disable */
import { ContactsDto } from './contacts-dto';
import { EducationDto } from './education-dto';
export interface UserInfoResponseDto {
  birthdate?: string;
  contacts?: ContactsDto;
  createdAt?: string;
  educations?: Array<EducationDto>;
  image?: string;
  updatedAt?: string;
  userUUID?: string;
}
