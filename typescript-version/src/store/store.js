import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messges/messagesReducer";
// import { autoRehydrate, persistStore } from "redux-persist";

const store = configureStore({
  reducer: {
    messagesSaved: messagesReducer,
  },
  // enhancers: [autoRehydrate()]
});

// persistStore(store);

export default store;
