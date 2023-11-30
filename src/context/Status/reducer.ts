import { STATUS, StatusEnum } from "@/hooks/useStatus";
import actions from "./actions";
import initialState from "./data";

type ACTIONTYPE =
  | {
      type: typeof actions.START_LOADING;
      payload: undefined
    }
  | {
      type: typeof actions.STOP_LOADING;
      payload: STATUS;
    }
  | {
      type: typeof actions.RESET_STATUS;
      payload: StatusEnum.Idle;
    }


function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case actions.START_LOADING:
      return {
        status: StatusEnum.Loading
      };
    case actions.STOP_LOADING:
      return {
        status: action.payload
      };
    case actions.RESET_STATUS:
      return {
        status: StatusEnum.Idle
      };
    default:
      throw new Error();
  }
}

export default reducer;