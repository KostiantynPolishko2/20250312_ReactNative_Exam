import axios from 'axios'
import { useState, useEffect } from 'react';
import { MILISECONDS_PER_SECOND } from '../constants/Time';

type TreatDataItem = {
    route: string,
    method: string,
    data: any,
    jwt: string | null,
}

const useAxiosAdmin = (_baseURL: string) => {
    const [response, setResponse] = useState<any | undefined>(undefined);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const axiosInstance = axios.create({
        baseURL: _baseURL,
    });

    let controller = new AbortController();

    // to abort axios request when parent component is unmounted
    useEffect(()=>{
        return () => controller?.abort();
    }, []);

    const treatData = async(item:TreatDataItem):Promise<void> => {
        
        setLoading(true);

        if(item.jwt){
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${item.jwt}`;
        }

        controller.abort();
        controller = new AbortController();

        // set up a timeout to abort the request after 10 seconds
        const timeoutId = setTimeout(()=>{
            controller.abort();
        }, 5 * MILISECONDS_PER_SECOND); // 5 seconds
        
        try{
            
            const result = await axiosInstance({
                url: item.route,
                method: item.method,
                data: item.data,
                signal: controller.signal,
            });

            clearTimeout(timeoutId); // clear timeout if request completes
            setResponse(result.data);
            // console.log('result', result.data);
        } 
        catch(error){
            clearTimeout(timeoutId); // ensure timeout is cleared in case of an error

            setError(error as Error);
        } 
        finally {
            setLoading(false);
        }
    }

    return {response, error, loading, treatData}
}

export default useAxiosAdmin;