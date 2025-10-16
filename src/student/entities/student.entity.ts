import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {DbEntity} from "../../utils/abstract/database/db-entity";
import {IEntity} from "../../utils/abstract/database/i-enity";
import {StudentTrackEnum} from "../enums/student-track.enum";

@Entity("tbl_students")
export class Student extends DbEntity implements IEntity {
    
    @Column({ type: 'varchar', nullable: false })
    name: string;
    @Column({ type: 'varchar', nullable: false, unique: true })
    email: string;
    @Column({ type: 'varchar', nullable: false })
    phone: string;
    @Column({ type: 'varchar', nullable: true })
    course: string;
    @Column({ type: 'varchar', nullable: true })
    level: string;
    @Column({ type: 'varchar', nullable: false })
    institution: string;
    @Column({ type: 'varchar', nullable: true })
    location: string;
    @Column({ type: 'varchar', nullable: true })
    resume_url: string;
    @Column({ type: 'varchar', nullable: true })
    skills: string;
    @Column({ type: 'varchar', nullable: true })
    linkedin: string
    @Column({ type: 'varchar', enum: StudentTrackEnum, nullable: true })
    track: StudentTrackEnum;
}
