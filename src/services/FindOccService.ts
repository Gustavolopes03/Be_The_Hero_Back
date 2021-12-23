import OccRepository from "../repositories/OccRepository";

 class FindOccurencesService {
  public async execute(ong_id: string){
    const occRepository = new OccRepository();

    const occurencesData = await occRepository.findByOngId(ong_id);

    return occurencesData;
  }
 }

export default FindOccurencesService;