import {appReducer} from '../';
import {actionType} from '../../../types/reducer.type/rootReducer.type';

export const rootReducer = (state: any, action: actionType) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
