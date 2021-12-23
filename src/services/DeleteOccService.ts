import OccRepository from "../repositories/OccRepository";

class DeleteOccurencesService{

  public async execute(id:string):Promise<void>{

  const occRepository = new OccRepository();

  const ong = await occRepository.deleteOccurencesById(id);

  }

}
export default DeleteOccurencesService;