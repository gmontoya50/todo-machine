import React from "react";

function withStorageListener(WrappedComponen) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);
    
    window.addEventListener("storage", (chnage) => {
      if (chnage.key === "TODOS_V1") {
        console.info("Hubo cambios em TODOS_V1");
        setStorageChange(true);
      }
    });

    const toggleShow = () =>{
        console.info('sincronize en HOC')
        props.sincronize();
        setStorageChange(false);
    }
    return (
      <WrappedComponen show={storageChange} toggleShow={toggleShow}/>
    );
  };
}

export { withStorageListener };
