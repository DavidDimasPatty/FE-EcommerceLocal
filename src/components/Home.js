import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderLayer1 from "./HeaderLayer2/HeaderLayer1"
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getProducts");
        console.log(response.data)
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <HeaderLayer1 />
      <div>
        <div className="d-flex justify-content-center align-item-center fs-2 mt-4">
          <h1 className="text-dark">Welcome Customers!</h1>
        </div>
        <div className="row mt-4 gap-4 d-flex justify-content-center align-item-center">
          {data.data.map((product) => (
            <div className="col-md-3">
              <div className="card card-info">
                <div className="card card-header" align="center">
                  <b className="fs-4">{product.name}</b>
                </div>

                <div className="card card-body">

                </div>

                <div className="card card-footer">
                  {product.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;