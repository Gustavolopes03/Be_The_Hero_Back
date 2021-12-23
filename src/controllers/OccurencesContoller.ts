import { Request , Response } from "express";
import CreateOccService from "../services/CreatOccService";
import DeleteOccurencesService from "../services/DeleteOccService";
import FindOccurencesService from "../services/FindOccService";


export default class OccurencesController{

    public async create (request:Request,response:Response) {

        const { ongId } = request.ong;
        const { title, description, value } = request.body;

        const createOccService = new CreateOccService();
        const occurences = await createOccService.execute({ ong_id: ongId, title, description, value});

        return response.status(201).json({ occurences });
        
    };

    public async find (request: Request, response: Response){

        const { ongId } = request.ong;

        const findOccurencesService = new FindOccurencesService();

        const occurences = await findOccurencesService.execute(ongId);

        return response.status(200).json({ occurences });
    }

    public async delete (request: Request, response: Response){

        const { id } = request.params;

        const deleteOccurencesService = new DeleteOccurencesService();

        deleteOccurencesService.execute(id);

        return response.status(204).json({message:"Deletado com Sucesso!"});
    }

};