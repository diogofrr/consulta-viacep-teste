import { STATUS, StatusEnum } from "@/hooks/useStatus";

const initialState = {
  status: StatusEnum.Idle as STATUS,
  msg: ""
};

export default initialState;