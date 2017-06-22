import R from 'ramda';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_VILLAGES:
      const village = new Array(action.config.villageCapacity)
        .fill(0)
        .map((v, i) => { return {id: i, isDead: false} });

      const villages = new Array(action.config.villagesCount)
        .fill(village);

      return {
        ...state,
        ...action.config,
        villages,
      };

    case types.SEND_VILLAGER:
      const volunteer = R.find(R.propEq('id', action.response.villager))(state.villages[action.response.village]);
      const victim = R.find(R.propEq('id', state.order.villager))(state.villages[state.order.village]);
      volunteer.isDead = (victim.id === volunteer.id);

      const villa = [
        state.villages.slice(0, action.response.village),
        volunteer,
        state.villages.slice(action.response.village + 1),
      ];

      return {
        ...state,
        villages: villa,
      };

    case types.MAKE_ORDER:
      return {
        ...state,
        order: action.order,
      };

    default:
      return state;
  }
};
