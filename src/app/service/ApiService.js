import {useState} from 'react';
import axios from 'axios';

const ApiService = () => {
    const [loading, setLoading] = useState(false);
    const timeout = 30000;

    const makeRequest = async (method, url, data = null) => {
        setLoading(true);
        try {
            let response;
            switch (method) {
                case 'GET':
                    response = await axios.get(url, { timeout });
                    break;
                case 'POST':
                    response = await axios.post(url, data, { timeout });
                    break;
                case 'PUT':
                    response = await axios.put(url, data, { timeout });
                    break;
                case 'DELETE':
                    response = await axios.delete(url, { timeout });
                    break;
                default:
                    throw new Error('Invalid method');
            }
            return response.data;
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                alert('Request timed out. Please try again.');
            } else {
                alert(error.message);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const automaticTest = async () => {
        return await makeRequest('GET', '//automatic');
    };

    const sendMessage = async (requestData) => {
        const payload = { requestData };
        return await makeRequest('POST', '//sendMessage', payload.requestData);
    };


    return {
        loading,
        automaticTest,
        sendMessage,
    };
};

export default ApiService;