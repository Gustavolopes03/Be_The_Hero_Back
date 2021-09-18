import { getRepository, Repository } from "typeorm";
import ICreateOngsDTO from "../dto/ICreateOngsDTO";
import Ong from "../models/Ong";
import IOngsRepository from "./interface/IOngsRepository";


class OngsRepository implements IOngsRepository {

    private ormRepository: Repository<Ong>

    constructor () {
        this.ormRepository = getRepository(Ong);
    }

     async create(dataOngs: ICreateOngsDTO): Promise<Ong> {

        const ong = this.ormRepository.create(dataOngs);

        await this.ormRepository.save(ong);

        return ong;

    }


    
}

export default OngsRepository