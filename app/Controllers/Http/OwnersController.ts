import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class OwnersController {

    public async index(ctx:HttpContextContract){
        //Get
        return 'GET pets'
    }

    public async store({request}:HttpContextContract){
        //Post :id
        return {
            title:'Post route',
            body: request.body()
        }
        //return 'update pets'
        
    }

    public async show({params}: HttpContextContract){
        //Get :id
        return 'get pets ' + params.id
    }

    public async update({params}: HttpContextContract){
        //Patch :id
        return 'update pets' + params
    }

    public async destroy({params}: HttpContextContract){
        //Delete :id
        return 'delete pets' + params

    }

}
