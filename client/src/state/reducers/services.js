import update from 'immutability-helper';
import extendUpdate from '../../helpers/extendUpdate';
import ActionsTypes from '../../constants/ActionsTypes';

extendUpdate(update);

const services = {
  [ActionsTypes.SUBSCRIBE_SERVICE_SUCCESS]: (state, payload) => update(state, {
    app: {
      currentUser: {
        [payload.service]: { $auto: payload.values },
      },
    },
  }),
};

export default services;
