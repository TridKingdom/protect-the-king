import * as types from '../constants/actionTypes';

const initVillages = (config) => ({
  type: types.INIT_VILLAGES,
  config,
});

const makeOrder = (order) => ({
  type: types.MAKE_ORDER,
  order,
});

const sendVillager = (response) => ({
  type: types.SEND_VILLAGER,
  response,
});

export {
  initVillages,
  makeOrder,
  sendVillager,
};