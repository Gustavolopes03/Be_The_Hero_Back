import { getRepository, Repository } from "typeorm";
import Occurences from "../models/Occurrences";
import IOccRepository from "./interface/IOccRepository";
import ICreateOccDTO from "../dto/ICreateOccDTO";


class OccRepository implements IOccRepository {

    private ormRepository: Repository <Occurences>;

    constructor () {
        this.ormRepository = getRepository(Occurences);
    }

     async create(dataOcc: ICreateOccDTO): Promise<Occurences> {

        const occurences = this.ormRepository.create(dataOcc);

        const occurence = await this.ormRepository.save(occurences);

        console.log(occurences)

        return occurence;

    }

    async findByOngId(ong_id: string): Promise<Occurences[]> {

        const occurences = await this.ormRepository.find({
            where: {
                ong_id
            }
        });

        return occurences;
    }
    
    async deleteOccurencesById(id: string): Promise<void>{
        await this.ormRepository.delete(id);
    }

    
}

export default OccRepository;