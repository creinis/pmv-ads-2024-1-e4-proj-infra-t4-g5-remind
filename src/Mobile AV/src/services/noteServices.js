import axios from 'axios';
import { VITE_ADMIN_TOKEN, VITE_API_URL } from '@env';
import * as SecureStore from 'expo-secure-store';

export const createNote = async (values) => {
  try {
    const res = await axios.post(`${VITE_API_URL}/notes/criar`, values, {
      headers: {
        Authorization: 'Bearer ' + (await SecureStore.getItemAsync('USER_TOKEN')),
      },
    });

    console.log('createNote res:', res.data);
    return res.data;
  } catch (error) {
    console.error(
      'createNote error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
};

export const getUserNotesAssigned = async () => {
  try {
    const res = await axios.get(`${VITE_API_URL}/notes/get/destinatario`, {
      headers: {
        Authorization: 'Bearer ' + (await SecureStore.getItemAsync('USER_TOKEN'))
      },
    });

    
    console.log('getUserNotesAssigned res:', res.data);
    return res.data;
  } catch (error) {
    console.error(
      'getUserNotesAssigned error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
}

export const getUserNotesCreated = async () => {
  try {
    const res = await axios.get(`${VITE_API_URL}/notes/get/criador`, {
      headers: {
        Authorization: 'Bearer ' + (await SecureStore.getItemAsync('USER_TOKEN'))
      },
    });
    console.log('getUserNotesCreated res:', res.data);
    return res.data;
  } catch (error) {
    console.error(
      'getUserNotesCreated error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
}

export const completeNote = async (noteId) => {
  try {
    const res = await axios.put(`${VITE_API_URL}/notes/update/${noteId}`, {

      situacao: 'concluido',
      dataconclusao: new Date(
        new Date().getTime() - new Date().getTimezoneOffset(),
      ),
    }, {
      headers: {
        Authorization: 'Bearer ' + (await SecureStore.getItemAsync('USER_TOKEN'))
      },
    });

    console.log('completeNote res:', res.data);
    return res.data;
  } catch (error) {
    console.error(
      'completeNote error:',
      error?.response.status,
      error?.response.data,
    );
    throw error;
  }
};