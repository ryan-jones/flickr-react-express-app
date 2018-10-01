export default (actionType: string, payload?: any) => {
  return { payload, type: actionType };
}