export const Condition = ({ show = true, children }) => {
  if (!show) {
    return null;
  }

  return children;
};

export default Condition;
