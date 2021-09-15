import { Column, Entity, CreateDateColumn,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity ('occurrences')
class Occurences {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    tytle: string;
    
    @Column()
    description: string

    @Column()
    value: string

}

export default Occurences