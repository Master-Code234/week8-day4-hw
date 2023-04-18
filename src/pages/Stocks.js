
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


// export default function Stocks(props) {

// const params = useParams()

// const symbol = params.symbol

// const stockData = props.data.find((item) => symbol === item.symbol)


// return (
//  <h1> {stockData} </h1>
// )
// }


  





// use .find to find the symbol and compare it to params
