import Clock from "./Clock";

function Home() {
  return (
    <div className="page-container">
      <h1>home </h1>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Clock city={"London"} timeZone={0} small={false} />
        <Clock city={"Stockholm"} timeZone={1} small={false} />
      </div>
    </div>
  );
}

export default Home;
