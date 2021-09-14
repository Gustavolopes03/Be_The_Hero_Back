import { Column, Entity, CreateDateColumn,PrimaryGeneratedColumn } from "typeorm";


@Entity ('ongs')
class Ongs{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    whatsapp: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @CreateDateColumn()
    creat_at: Date

    @CreateDateColumn()
    updated_at: Date

}

export default Ongs
