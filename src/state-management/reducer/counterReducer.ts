interface Action {
  type: "INCREMENT" | "RESET" | "DECREMENT";
}

function counterReducer(state: number, action: Action): number {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "DECREMENT") return state - 1;
  if (action.type === "RESET") return (state = 0);
  return state;
}

export default counterReducer;
