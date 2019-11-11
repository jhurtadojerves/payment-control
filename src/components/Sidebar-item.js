import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Item = props => {
  const { link, item } = props;
  return (
    <a href={link} class="list-group-item list-group-item-action bg-light">
      {item}
    </a>
  );
};

export default Item;
