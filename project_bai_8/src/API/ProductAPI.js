import axiosClient from "../commons/AxiosClient";
const url = "/product"
const productAPI = {
    getAll: () => {
        return axiosClient.get(url);
    },
    getById: (id) => {
        return axiosClient.get(`${url}/${id}`);
    },
    delete: (id) => {
        return axiosClient.delete(`${url}/${id}`);
    },
    create: (params) => {
        return axiosClient.post(url)
    },
    update: (params) => {
        return axiosClient.put(url)
    },
}
export default productAPI;