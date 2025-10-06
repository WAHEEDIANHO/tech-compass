import { IEntity } from './i-enity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
// import { AggregateRoot } from '@nestjs/cqrs';

@Entity()
export class DbEntity implements IEntity {

  // constructor() {
  //   super();
  //   // this.autoCommit = true;
  // }
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  createdAt?: Date;
  @UpdateDateColumn()
  updatedAt?: Date;


  toJSON() {
    delete this.createdAt;
    delete this.updatedAt;
    return this;
  }
}