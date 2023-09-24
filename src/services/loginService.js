import { axiosInstance } from '../helpers/axios-config';


const login = async (email, password) => {
  const data = await { email, password };
  
  return axiosInstance.post('auth', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};



export { login };