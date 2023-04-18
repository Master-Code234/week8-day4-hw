import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const data = Data.map((item, index)=>{
     return <Link key={index} to={`/stocks/${item.symbol}`}><h2>{item.name}</h2></Link>
})
  return (

    <div>{data}</div>
  )
}