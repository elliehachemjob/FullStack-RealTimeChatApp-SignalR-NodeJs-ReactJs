import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messges/messagesReducer";
// import { autoRehydrate, persistStore } from "redux-persist";

const store:any = configureStore({
  reducer: {
    messagesSaved: messagesReducer,
  },
  // enhancers: [autoRehydrate()]
});

// persistStore(store);

export default store;
