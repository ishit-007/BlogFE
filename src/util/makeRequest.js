import axios from 'axios';
import { BACKEND_URL } from '../constants/apiEndpoints';
import { ERROR_ROUTE } from '../constants/routes';

const makeRequest = async (apiEndpoint, dynamicConfig = {}, navigate) => {
    try {
        const config = {
            baseURL: BACKEND_URL,
            url: apiEndpoint.url,
            method: apiEndpoint.method,
            ...dynamicConfig
        };
        const data = (await axios(config)).data;
        return data;
    }
    catch (error) {
        if (navigate) {
            const errorStatus = error.response?.status;
            if (errorStatus) {
                navigate(`${ERROR_ROUTE}/${errorStatus}`)
                console.log(error);
            }
            else {
                navigate(`${ERROR_ROUTE}`)
                console.log(error);
            }
        }
    }
}
export default makeRequest;