
        import axios from 'axios';

const API_URL = "https://api.coingecko.com/api/v3";

export const fetchCryptocurrencies = async () => {
    try {
        const response = await axios.get(`${API_URL}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 100,
                page: 1,
                sparkline: false,
                locale: 'en'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    };
}
    export const fetchDetails=async(coinId)=>{
        try {
            const response=await axios.get(`${API_URL}/coins/${coinId}`)
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    export const fetchGraph=async(coinDetailId)=>{
        try {
            const response=await axios.get(`${API_URL}/coins/${coinDetailId}/market_chart?`,{
                params: {
                    vs_currency: 'usd',
                    days:"7"
                } 
            })
         return response.data;
        } catch (error) {
            throw error;
        }
    }
