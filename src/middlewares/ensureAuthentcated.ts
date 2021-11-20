import { Request,Response,NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { MetadataWithSuchNameAlreadyExistsError } from "typeorm";
import authConfig from "../config/auth";
import OngsRepository from "../repositories/OngsRepository";
import FindOngByIdService from "../services/FindOngByIdService";


interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default async function ensureAuthentcated ( request:Request,response:Response,next:NextFunction): Promise<void> {

    const authOng = request.headers.authorization;

    if (!authOng) {
        throw new Error("Token Invalid!")
    }

    const [, Token] = authOng.split(" ")

    try{
        const decoded = verify(Token, authConfig.jwt.secret);

        if(!decoded) {
            throw new Error("Token Invalid!")
        }

        const { sub } = decoded as ITokenPayload;

        const ongsRepository = new OngsRepository()
        const ong = await ongsRepository.findOneById(sub)

        if (!ong) {
            throw new Error("Token Invalid!")
        }

        request.ong = {
            ongId: ong.id
        }

         return next();
    }catch{
        throw new Error("Catastrofic Error")
    }

};