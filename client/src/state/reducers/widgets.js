import update from 'immutability-helper';
import extendUpdate from '../../helpers/extendUpdate';
import ActionsTypes from '../../constants/ActionsTypes';
import initialState from '../initialState';

extendUpdate(update);

const widgets = {
	[ActionsTypes.ADD_WIDGET_SUCCESS]: (state, payload) => update(state, {
		app: {
			currentUser: {
        widgets: {
          $push: [payload.widget],
        },
		  },
	  },
	}),
	[ActionsTypes.REMOVE_WIDGET_SUCCESS]: (state, payload) => {
		const index = state.app.currentUser.widgets.findIndex(w => w.id == payload.id);

		return update(state, {
			app: {
				currentUser: {
	        widgets: {
	          $splice: [[index, 1]],
	        },
			  },
		  },
		});
	},
};

export default widgets;
