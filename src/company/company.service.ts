import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {GeneralService} from "../utils/abstract/service/general.service";
import {Company} from "./entities/company.entity";
import {IGeneralService} from "../utils/abstract/service/i-general.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class CompanyService extends GeneralService<Company> implements IGeneralService<Company>{
    constructor(@InjectRepository(Company) private readonly companyRepository: Repository<Company>) 
    {
        super(companyRepository);
    }
}
