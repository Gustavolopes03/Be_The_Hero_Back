import { Column, Entity, CreateDateColumn,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

}

export default Ongs
