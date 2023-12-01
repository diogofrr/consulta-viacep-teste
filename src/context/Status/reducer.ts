import { STATUS, StatusEnum } from "@/hooks/useStatus";
import actions from "./actions";
import initialState from "./data";

export interface StopLoadingPayload {
  status: STATUS;
  msg: string;
}

type ACTIONTYPE =
  | {
      type: typeof actions.START_LOADING;
      payload: string;
    }
  | {
      type: typeof actions.STOP_LOADING;
      payload: StopLoadingPayload;
    }
  | {
      type: typeof actions.RESET_STATUS;
    };

function reducer(
  state: typeof initialState,
  action: ACTIONTYPE
): typeof initialState {
  switch (action.type) {
    case actions.START_LOADING:
      if ("payload" in action)
        return {
          status: StatusEnum.Loading,
          msg: action.payload.toString(),
        };
    case actions.STOP_LOADING:
      if ("payload" in action) {
        const statusResult = action.payload as StopLoadingPayload;
        return {
          status: statusResult.status,
          msg: statusResult.msg,
        };
      }
    case actions.RESET_STATUS:
      return {
        status: StatusEnum.Idle,
        msg: "",
      };
    default:
      throw new Error();
  }
}

export default reducer;
