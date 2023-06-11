import axios from "axios";
import { todoApi } from '../../_constants/api.constant'
export async function getTodo() {
    const response = await axios.get(
        todoApi.LIST,
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