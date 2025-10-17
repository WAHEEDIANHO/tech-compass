import {Column} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsEnum, IsOptional, IsString, IsUrl} from "class-validator";
import {StudentTrackEnum} from "../enums/student-track.enum";

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
    @IsOptional()
    resumeUrl: string;
    @ApiProperty()
    @IsString()
    skills: string;
    @ApiProperty({  })
    @IsOptional()
    linkedinProfile: string
    @ApiProperty()
    @IsOptional()
    @IsEnum(StudentTrackEnum, { message: `track must be one of the following values: ${Object.values(StudentTrackEnum).join(', ')}` })  
    track: string
}
