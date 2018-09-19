import { axiosInstance } from '../config';

const api = {
  getSetMembers: conceptUUID => axiosInstance.get(`/concept/${conceptUUID}?v=full`)
    .then((response) => {
      if (response.status !== 200) {
        throw response;
      } else {
        return response.data;
      }
    }),
};

export default api;