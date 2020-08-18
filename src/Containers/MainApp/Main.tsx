import React, { useEffect } from "react";
import Pokemon from "Containers/PokemonPage";

interface MainAppI {
  onLoad: () => void;
}

const MainApp: React.FC<MainAppI> = ({
  onLoad,
}) => {
  useEffect(()=>{
    onLoad();
  }, [onLoad])
  return (
    <Pokemon />
  )
}

export default MainApp