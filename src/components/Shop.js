import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";

import { depositMoney, withdrawMoney } from "../state/action";

// import { actionCreators } from "../state/action";
const Shop = () => {
  const myState = useSelector((state) => state.reducer1);
  const dispatch = useDispatch();

  //   const actions = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick={() => dispatch(withdrawMoney(100))}
      ></button>

      <p>Add this item to cart</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(depositMoney(100))}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
