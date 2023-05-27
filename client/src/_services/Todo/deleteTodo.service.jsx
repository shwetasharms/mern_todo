import axios from "axios";
import { todoApi } from '../../_constants/api.constant'
export async function deleteTodo(dataId) {
    const response = await axios.delete(
        // todoApi.LIST,
        "http://localhost:4000/api/v1/todo/" + dataId
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