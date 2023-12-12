// useDetail.hooks.ts
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IBooks } from '../books.types';

export default function useDetail() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState<IBooks | undefined>();
  
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/books/${id}`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
        setBookDetails(response.data.data);
      } catch (error) {
        console.log('error > ', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  return {
    bookDetails,
  };
}
