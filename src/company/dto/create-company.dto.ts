import {ApiProperty} from "@nestjs/swagger";
import {IsOptional, IsString} from "class-validator";

export class CreateCompanyDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    contact: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    availablePositions: string;
    
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    expectation: string;
}

