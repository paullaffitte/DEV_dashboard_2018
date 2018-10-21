import ActionsTypes from '../../constants/ActionsTypes';

const services = {
  subscribeService: (service, values) => ({
    type: ActionsTypes.SUBSCRIBE_SERVICE,
    payload: { service, values },
  }),
  subscribeServiceSuccess: (service, values) => ({
    type: ActionsTypes.SUBSCRIBE_SERVICE_SUCCESS,
    payload: { service, values },
  }),
};

export default services;
