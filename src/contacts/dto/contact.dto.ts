import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  full_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  mobile: string;

  @IsNotEmpty()
  company_name: string;

  @IsNotEmpty()
  job_title: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  status: string;
}