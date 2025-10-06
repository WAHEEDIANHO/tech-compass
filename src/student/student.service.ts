import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {GeneralService} from "../utils/abstract/service/general.service";
import {Student} from "./entities/student.entity";
import {IGeneralService} from "../utils/abstract/service/i-general.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class StudentService extends GeneralService<Student> implements IGeneralService<Student>{
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>) {
        super(studentRepository);
    }
}
