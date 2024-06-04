const Container = ({ children }) => {
  return (
    <div className="cardContainer">
      <div className="childrenContainer"> {children}</div>
    </div>
  );
};
export default Container;
