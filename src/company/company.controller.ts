import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Query} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {Company} from "./entities/company.entity";
import { Response } from 'express';
import {PaginationQueryDto} from "../utils/dto/pagination-query.dto";
import {UpdateUserDto} from "../user/dto/update-user.dto";
import {ValidationPipe} from "../utils/validation.pipe";

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createCompanyDto: CreateCompanyDto, @Res() res: Response) {
    // return this.companyService.create(createCompanyDto);
      const company = new Company();
      Object.assign(company, createCompanyDto);
      // company.name = createCompanyDto.name;
      // company.address = createCompanyDto.address;
      // company.contact = createCompanyDto.contact;
      // company.availablePositions = createCompanyDto.availablePositions;
      // company.description = createCompanyDto.description;
      // company.expectation = createCompanyDto.expectation;
      
      await this.companyService.create(company);
      return res.status(HttpStatus.CREATED).json(res.formatResponse(HttpStatus.CREATED, "company created successfully", company));
  }

  @Get()
  async findAll(@Query() query: PaginationQueryDto<Company>, @Res() res: Response) {
    const resp = await this.companyService.findAll(query);
    return res.status(HttpStatus.OK).json(res.formatResponse(HttpStatus.OK, "Companies fetched successfully", resp));
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
          const company = await this.companyService.findById(id);
          return res.status(HttpStatus.OK).json(res.formatResponse(HttpStatus.OK, "Company find successfully", company));
  }

  
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto, @Res() res: Response) {
    const company = await this.companyService.findById(id);
    if(company == null ) return res.status(HttpStatus.NOT_FOUND).json(res.formatResponse(HttpStatus.NOT_FOUND, "User not found", {}));
    Object.assign(company, updateCompanyDto);
    await this.companyService.update(company);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.companyService.delete(id);
    return res.status(HttpStatus.OK).json(res.formatResponse(HttpStatus.OK, "Company deleted", {}));
  }
}
