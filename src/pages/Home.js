import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}