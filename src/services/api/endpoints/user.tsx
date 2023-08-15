import { apiInstance } from "../axios";
import { PersonData } from "../../../interfaces/personData";

export async function getUsers(){
    const data = await apiInstance.get('/users')
    return data.data
}

export async function delUsers(id?:number){
    try{
        const res = await apiInstance.delete('/users/'+id);
        return res.status
    }catch{
        console.log("Erro ao deletar")
    }
}

export async function createUser(data:PersonData) {
    try{
        const res = await apiInstance.post('/users',data)
        return res.status;
    }
    catch{
        console.log("Erro na requisição")

    }
}

export async function updateUser(data:PersonData) {
    try{
    const res = await apiInstance.put(`/users/${data.id}`,data);
    return res.status;
}catch{
    console.log("Erro na requisição")
}
}
