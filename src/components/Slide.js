import React from "react";
import Title from "./Title";
import Image from "./Image";

const Slide = ({ name, img, powersIcon }) => {
  return (
    <div className="slide">
      <div className="slide-container">
        <Title cName="agent-name" title={name} />

        <div className="img-container">
          <Image cName="agent-img" src={img} alt="agent-img" />
        </div>

        <div className="powers-logo">
          {
            powersIcon.map((item , index) => {
              return index < 4 && <Image key={index} src={item.displayIcon} width="30px" alt='powers-logo'/>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Slide;

// <div className="powers-logo">
//   {item.abilities.map((ab) => {
//     return (
//       <Image width="25px" src={ab.displayIcon} alt="powers" />
//     );
//   })}
// </div>
