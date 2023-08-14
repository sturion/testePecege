import { apiInstance } from "../axios";
import { PersonData } from "../../../interfaces/personData";

export async function getUsers(){
    const data = await apiInstance.get('/users')
    return data.data
}

export async function delUsers(id?:number){
        await apiInstance.delete('/users/'+id)
    
}

export async function createUser(data:PersonData) {
    console.log(data)
    const res = await apiInstance.post('/users',data)
    console.log(res)
}

export async function updateUser(data:PersonData) {
    try{
    await apiInstance.post('/users/' + data.id,data)
    return 200;
}catch{
    console.log("Erro na requisição")
    return 400
}
}
