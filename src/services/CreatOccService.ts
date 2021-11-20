import Occurences from "../models/Occurrences";
import OccRepository from "../repositories/OccRepository";


interface Request {
    ong_id: string,
    title: string,
    description: string,
    value: string
}

class CreateOccService  {
    public async execute( dataOcc: Request ):Promise<Occurences> {

        const occRepository = new OccRepository();

        const occurences = await occRepository.create(dataOcc);

        return occurences;

    }
}

export default CreateOccService;