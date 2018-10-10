import ActionsTypes from '../../constants/ActionsTypes';

const widgets = {
  addWidget: (name, config) => ({
    type: ActionsTypes.ADD_WIDGET,
    payload: { name, config },
  }),
  addWidgetSuccess: (widget) => ({
    type: ActionsTypes.ADD_WIDGET_SUCCESS,
    payload: { widget },
  }),
  removeWidget: (id) => ({
    type: ActionsTypes.REMOVE_WIDGET,
    payload: { id },
  }),
  removeWidgetSuccess: (id) => ({
    type: ActionsTypes.REMOVE_WIDGET_SUCCESS,
    payload: { id },
  }),
};

export default widgets;
