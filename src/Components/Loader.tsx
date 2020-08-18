import React, { useEffect } from "react";

interface LoadAppI {
  onLoad: () => void;
}

const LoadComponent: React.FC<LoadAppI> = ({
  onLoad,
  children
}) => {
  useEffect(()=>{
    onLoad();
  }, [onLoad])
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default LoadComponent;