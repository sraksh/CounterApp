var initial = {
  counters: {
    one: 0,
    two: 0,
    three: 0
  }
};

export default function(state = initial, action) {
  // console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counters: {
          ...state.counters,
          [action.key]: state.counters[action.key] + 1
        }
      };
      break;

    default:
      return state;
  }
}
