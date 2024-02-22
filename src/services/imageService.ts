import axios from 'axios';
import { GetDropper } from '@/interfaces/interfaces';

export async function postData() {
    const url = 'https://id837kmy73.execute-api.ap-south-1.amazonaws.com/prod';
    const body = {
      user_id: 'abc'
    };
    const headers = {
      'x-api-key': '1tDVtd5cSY4vH840UaXRJ4whQRWFOLM25RAkXcEB'
    };
  
    try {
      const response = await axios.post<GetDropper>(url, body, { headers });
      return response.data;
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  }