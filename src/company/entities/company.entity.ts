import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import {DbEntity} from "../../utils/abstract/database/db-entity";
import {IEntity} from "../../utils/abstract/database/i-enity";
import {ApiProperty} from "@nestjs/swagger";
import {IsOptional, IsString} from "class-validator";
import {User} from "../../user/entities/user.entity";

@Entity('tbl_companies')
export class Company extends DbEntity implements IEntity 
{
    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', nullable: true })
    address: string;

    @Column({ type: 'varchar', nullable: false })
    contact: string;

    @Column({ type: 'varchar', nullable: true })
    availablePositions: string;

    @Column({ type: 'varchar', nullable: true })
    expectation: string;
    
}
