import { Request , Response } from "express";


export default class OccurencesController{

    public async creat (request:Request,response:Response) {

        const { ongId } = request.ong;
        const { tytle, description, value } = request.body;

        return response.status(201).json({ ongId })
        
    };

};