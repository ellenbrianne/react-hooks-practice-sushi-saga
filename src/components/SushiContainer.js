import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ fourSushi }) {

  const sushiDisplay = fourSushi.map(sushi => (
    <Sushi key={sushi.id} sushi={sushi} />
  ));

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
