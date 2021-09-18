import { Request, Response } from "express";
import CreateOngService from "../services/CreateOngsService";

export default class OngsController {

    public async create (request:Request,response:Response) {

        console.log("AQUIIIIIS")
        const { name, email, whatsapp, city, uf } = request.body;
        const createongService = new CreateOngService();
        const ong = createongService.execute({name,email,whatsapp,city,uf});

        response.status(201).json(ong);

    }

}