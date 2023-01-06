import { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (store) => (next) => (action) => {
  console.log("Middleware has been triggered:", action);
  console.log("Store before action has been emitted", store.getState());
  return next(action);
};
