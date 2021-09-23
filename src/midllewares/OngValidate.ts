import { NextFunction, Request, Response } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";


 const OngValidate = (requestSchema:OptionalObjectSchema <ObjectShape> ) =>
    async (next:NextFunction, request:Request, response:Response) => {
        const { name, email, whatsapp, city, uf } = request.body;
    
        try {
            await requestSchema.validate
            ({
                name, email, whatsapp, city, uf
            })
            
            return next()

        }
        catch {
            return response.send("Validation error")
            
            
        }

}


export default OngValidate