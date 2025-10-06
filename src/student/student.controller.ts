
import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Query} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {ValidationPipe} from "../utils/validation.pipe";
import {Student} from "./entities/student.entity";
import { Response } from 'express';
import {PaginationQueryDto} from "../utils/dto/pagination-query.dto";
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
 async create(@Body(new ValidationPipe()) createStudentDto: CreateStudentDto, @Res() res: Response) {
      const student = new Student();
      Object.assign(student, createStudentDto);
      
      await this.studentService.create(student);
      return res.status(HttpStatus.CREATED).json(res.formatResponse(HttpStatus.CREATED, "student created successfully", student));
  }

@Get()
async findAll(@Query() query: PaginationQueryDto<Student>, @Res() res: Response) {
  const resp = await this.studentService.findAll(query);
  return res.status(HttpStatus.OK).json(res.formatResponse(HttpStatus.OK, "Students fetched successfully", resp));
}

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
      const student = await this.studentService.findById(id);
        return res.status(HttpStatus.OK).json(res.formatResponse(HttpStatus.OK, "Student find successfully", student));
  }

  @Patch(':id')
 async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto, @Res() res: Response) {
      const student =  await this.studentService.findById(id);
      if(student == null ) return res.status(HttpStatus.NOT_FOUND).json(res.formatResponse(HttpStatus.NOT_FOUND, "Student not found", {}));
      Object.assign(student, updateStudentDto);
      await this.studentService.update(student);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
      await this.studentService.delete(id)
      return res.status(HttpStatus.OK).json(res.formatResponse(HttpStatus.OK, "Student deleted successfully", {}));
  }
}
