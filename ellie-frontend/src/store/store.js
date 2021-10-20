import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messages/messagesReducer";
import authReducer from "./auth/authReducer";

// import { autoRehydrate, persistStore } from "redux-persist";

const store = configureStore({
  reducer: {
    messagesReducer: messagesReducer,
    authReducer: authReducer,
  },
  // enhancers: [autoRehydrate()]
});

// persistStore(store);

export default store;
