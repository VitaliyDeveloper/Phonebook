import axios from 'axios';

// axios.baseURL = 'https://yesno.wtf';

export const getStatus = async () => {
  const {
    data: { image, answer },
  } = await axios('https://yesno.wtf/api');
  return { image, answer };
};
