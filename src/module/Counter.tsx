"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Counter.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const limit: number = 10;

  const increaseHandler = () => {
    if (count < limit) {
      setCount(count + 1);
    }

    if (count === limit) {
      toast.error(`Count cannot exceed ${limit}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const decreaseHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast.error(`Count cannot decrese bellow 0`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <ToastContainer />
          <p className="count-text">Count: {count}</p>
          <div className="button-container">
            <button
              //   className={`action-button ${count >= limit ? "disabled" : ""}`}
              onClick={increaseHandler}
              className="action-button"
              //   disabled={count >= limit}
            >
              Increase
            </button>
            <button
              //   className={`action-button ${count === 0 ? "disabled" : ""}`}
              className="action-button"
              onClick={decreaseHandler}
              //   disabled={count === 0}
            >
              Decrease
            </button>
            <button className="action-button" onClick={resetHandler}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
