import axios from 'axios';
import config from '../config/config';

const findAll = async()=>{
    try {
        const result = await axios.get(`${config.domain}/product/`);
        return result.data;    
    } catch (error) {
        return error;
    }
}

const addProduct = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/product/`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}

const updateRow = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/product/${data.prod_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}


const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/product/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    findAll,
    addProduct,
    updateRow,
    deleteRow
}