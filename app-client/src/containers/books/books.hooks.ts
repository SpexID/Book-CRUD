import axios from 'axios';
import { useEffect, useState } from 'react';
import { IBooks } from './books.types';
import { IApiResponse, IMeta, IParams } from '../../services/types';

// Define the custom hook useAction
export default function useAction() {
  // Define necessary states
  const [params, setParams] = useState<IParams>({
    page: 1,
    size: 10,
  });
  const [meta, setMeta] = useState<IMeta>();
  const [loading, setLoading] = useState<boolean>(false);
  const [books, setBooks] = useState<IBooks[]>([]);

  // Define the fetchBooks function
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get<IApiResponse<IBooks[]>>(
        'http://localhost:8000/api/books',
        {
          params,
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      );
      setBooks(response.data.data);
      setMeta(response.data.meta);
    } catch (error) {
      console.log('error > ', error);
    } finally {
      setLoading(false);
    }
  };

  // Call fetchBooks when the component is mounted
  useEffect(() => {
    fetchBooks();
  }, [params]);

  // Return the necessary values
  return {
    books,
    params,
    setParams,
    loading,
    meta,
  };
}
