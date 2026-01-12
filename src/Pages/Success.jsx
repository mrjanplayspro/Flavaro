import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import "./Success.scss"

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center hei">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
