export const onIncrement = props => {
  console.log(props);
  return {
    type: "INCREMENT",
    key: props.counterKey
  };
};
