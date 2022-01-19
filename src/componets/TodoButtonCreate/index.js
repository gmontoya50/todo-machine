import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import './TodoButtonCreate.css'

const TodoButtonCreate = (props) => {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
  }
  return (
    <div className="add-button float-end m-3">
      <BsFillPlusCircleFill color="aquamarine" size={40} onClick={onClickButton}/>
    </div>
  );
};

export { TodoButtonCreate };
