import * as Yup from 'yup'

const requestSchemaOcc = Yup.object({
    title:Yup.string().required(), 
    description:Yup.string().required(),
    value:Yup.string().required()   

});

export default requestSchemaOcc