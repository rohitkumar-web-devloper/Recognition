import axios from 'axios'
import { Main_Base } from '../Constant/Variable';
import { useSelector} from 'react-redux';
export const createInstance = axios.create({
    baseURL: `${Main_Base}create/`,
    headers: { 'Content-Type': 'application/json' }
});
export const GetInstance = axios.create({
    baseURL: `${Main_Base}retrieve/`,
    headers: { 'Content-Type': 'application/json' }
});
export const updateInstance = axios.create({
    baseURL: `${Main_Base}update/`,
    headers: { 'Content-Type': 'application/json' }
});
export const deleteInstance = axios.create({
    baseURL: `${Main_Base}delete/`,
    headers: { 'Content-Type': 'application/json' }
});
export const AuthInstance = () => {
    const {token:{token}} = useSelector((state) => state.token);
    return {
        createInstance: axios.create({
            baseURL: `${Main_Base}`,
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }),
        GetInstance: axios.create({
            baseURL: `${Main_Base}`,
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }),
        updateInstance: axios.create({
            baseURL: `${Main_Base}x`,
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }),
        deleteInstance : axios.create({
            baseURL: `${Main_Base}`,
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        })
    }
}


// import axios from 'axios';

// const baseURL = `${import.meta.env.VITE_BASE_URL}api/`;

// const createAxiosInstance = (url, token) => {
//     return axios.create({
//         baseURL: `${baseURL}${url}`,
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//         }
//     });
// };

// const apiRequest = async (axiosInstance, method, data = null) => {
//     let response;
//     let error = null;
//     let isLoading = true;

//     try {
//         switch (method) {
//             case 'GET':
//                 response = await axiosInstance.get();
//                 break;
//             case 'POST':
//                 response = await axiosInstance.post('', data);
//                 break;
//             case 'PUT':
//                 response = await axiosInstance.put('', data);
//                 break;
//             case 'DELETE':
//                 response = await axiosInstance.delete();
//                 break;
//             default:
//                 throw new Error('Invalid HTTP method');
//         }
//     } catch (err) {
//         error = err;
//     } finally {
//         isLoading = false;
//     }

//     return { response, error, isLoading };
// };

// export const createInstance = (token) => createAxiosInstance('create/web/', token);
// export const getInstance = (token) => createAxiosInstance('retrieve/web/', token);
// export const updateInstance = (token) => createAxiosInstance('update/web/', token);
// export const deleteInstance = (token) => createAxiosInstance('delete/web/', token);

// export const authInstance = () => {
//     const token = localStorage.getItem('token');

//     return {
//         createInstance: createAxiosInstance('create/web/', token),
//         getInstance: createAxiosInstance('retrieve/web/', token),
//         updateInstance: createAxiosInstance('update/web/', token),
//         deleteInstance: createAxiosInstance('delete/web/', token)
//     };
// };

// export const performApiRequest = async (axiosInstance, method, data = null) => {
//     return await apiRequest(axiosInstance, method, data);
// };