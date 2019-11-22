/**
 * Logs all actions and states after they are dispatched.
 * @param {*} store redux store
 */
export const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};
