import update from 'immutability-helper';
import extendUpdate from '../../helpers/extendUpdate';
import ActionsTypes from '../../constants/ActionsTypes';
import initialState from '../initialState';

extendUpdate(update);

const users = {
	[ActionsTypes.LOGOUT]: state => update(state, {
		app: {
			currentUser: { $set: null },
		},
	}),
	[ActionsTypes.GET_CURRENT_USER_SUCCESS]: (state, payload) => update(state, {
		app: {
			currentUser: { $set: payload.user },
		},
	}),
};

export default users;
