
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../app/store"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const useQuery = (url:string) => {
  const [data, setData] = useState<any>(null);      
  const [error, setError] = useState(null);       
  const [loading, setLoading] = useState(true);   

  const fetchData = useCallback(async () => {
    setLoading(true);   
    setError(null);   

    try {
      const response = await axios.get(url); 
      setData(response.data);                
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

