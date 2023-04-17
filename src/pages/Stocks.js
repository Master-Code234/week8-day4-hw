import Data from "../Data";

export default function Stocks() {
  const data = Data.map((item, index) => {
    return (
      <div key={index}>
        <h1>
          {item.name}
          <br />
          {item.lastPrice}
        </h1>
      </div>
    );
  });
  return <div>{data}</div>;
}
