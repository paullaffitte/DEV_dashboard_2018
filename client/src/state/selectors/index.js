import { createSelector } from 'reselect';

const isSetupSelector = state => state.app.isSetup;

export const getIsSetup = createSelector(
  isSetupSelector,
  (isSetup) => isSetup,
);
