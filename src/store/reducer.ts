import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  test: (state: any, action: any): any => {
    return { ...state };
  },
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
