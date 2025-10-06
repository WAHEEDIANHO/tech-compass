import {Column} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsOptional, IsString, IsUrl} from "class-validator";

export class CreateStudentDto {

    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    @IsString()
    phone: string;
    @ApiProperty({ required: false })
    @IsOptional()
    courseOfStudy: string;
    @ApiProperty({ required: false })
    @IsOptional()
    levelOfStudy: string;
    @ApiProperty()
    @IsString()
    institution: string;
    @ApiProperty()
    @IsUrl()
    @IsOptional()
    resumeUrl: string;
    @ApiProperty()
    @IsString()
    skills: string;
    @ApiProperty()
    @IsUrl()
    @IsOptional()
    linkedinProfile: string
}
