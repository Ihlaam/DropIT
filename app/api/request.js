import client from "./client";

const endpoint = "/orders"

const getOrders = () => client.get(endpoint);

export const addRequest = (request) => {
  return client.post(endpoint, request);

}

const getDriver = (driverId) => client.get(`/driver/${driverId}`);

export default {
  addRequest,
  getOrders,
  getDriver,
};
