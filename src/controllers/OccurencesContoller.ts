import { Request , Response } from "express";
import CreateOccService from "../services/CreatOccService";


export default class OccurencesController{

    public async create (request:Request,response:Response) {

        const { ongId } = request.ong;
        const { title, description, value } = request.body;

        const createOccService = new CreateOccService();
        const occurences = await createOccService.execute({ong_id: ongId, title, description, value});

        return response.status(201).json({ occurences });
        
    };

};