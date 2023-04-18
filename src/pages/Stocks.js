
import { useParams } from "react-router-dom";
import Data from "../Data";

export default function Stocks() {
  const params = useParams()

  const data = Data.find((item) =>item.symbol === params.symbol)
  console.log(data);
  return( <div>
  <h1>
    {data.name}
    <br />
    {data.lastPrice}
  </h1>
</div>
  )
}

