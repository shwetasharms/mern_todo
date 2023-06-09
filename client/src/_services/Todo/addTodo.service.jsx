import axios from "axios";
import { todoApi } from '../../_constants/api.constant'
export async function addTodo(data) {
    const response = await axios.post(
        todoApi.CREATE, data
    ).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        // handle error
        console.log(error);
        console.log(error.response);
        return error.response;
    });

    return response;
}