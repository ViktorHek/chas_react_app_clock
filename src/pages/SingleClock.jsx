import Clock from "./Clock";

function SingleClock() {
  return (
    <div className="page-container">
      <h1>SingleClock</h1>
      <Clock city={"Stockholm"} timeZone={1} small={true} />
    </div>
  );
}

export default SingleClock;
