import { NextFunction, Request, Response } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";


const OccValidate = ( requestSchemaOcc:OptionalObjectSchema <ObjectShape> ) =>
    async ( request:Request, response:Response, next:NextFunction ) => {

        const { title, description, value } = request.body;
    
        try {

            await requestSchemaOcc.validate
            ({
                title, description, value
            });
            
            return next();

        }
        catch {
            throw new Error();             
        }

}


export default OccValidate