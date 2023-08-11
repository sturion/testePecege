import { apiInstance } from "../axios";

export async function getUsers(){
    const data = await apiInstance.get('/users')
    return data.data
}
