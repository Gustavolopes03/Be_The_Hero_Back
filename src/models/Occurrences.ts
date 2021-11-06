import { Column, Entity, CreateDateColumn,PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import Ong from "./Ong"


@Entity ('occurrences')
class Occurences {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Ong)
    @JoinColumn({ name:'ong_id' })
    ong: Ong;

    @Column()
    tytle: string;
    
    @Column()
    description: string

    @Column()
    value: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Occurences