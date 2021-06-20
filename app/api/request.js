import client from "./client";

const endpoint = "/orders"

const getOrders = () => client.get(endpoint);

export const addRequest = (request) => {
  return client.post(endpoint, request);

}

export default {
  addRequest,
  getOrders,
};
