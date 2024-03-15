import React from "react";

function Item(props) {
  return (
    <div>
      <li className="w-6 lg:w-7 hover:translate-y-[-2px] duration-150	">
        <a href="#">
          <img src={props.name} alt={props.name} />
        </a>
      </li>
    </div>
  );
}

export default Item;
