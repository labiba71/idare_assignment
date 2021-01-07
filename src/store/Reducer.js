import { SEND_PROJECT_DETAILS, SEND_XYZ_VALUE } from "./Type";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "rootReducer",
  storage,
};

const initialState = {
  project: {
    name: "",
    description: "",
    client: "",
    contractor: "",
    minMax: {
      minX: "",
      maxX: "",
      minY: "",
      maxY: "",
      minZ: "",
      maxZ: "",
    },
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_PROJECT_DETAILS:
      return {
        ...state,
        project: action.payload,
      };
    case SEND_XYZ_VALUE:
      return {
        ...state,
        minMax: action.payload,
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, rootReducer);
