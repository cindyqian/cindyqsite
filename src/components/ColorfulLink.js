
import React from 'react'; //import React library
import { useNavigate } from 'react-router-dom';


export function ColorfulLink(props) {
  // let classes = "font-medium text-yellow-500 hover:text-yellow-600";
  // if (props.textType === "creative") {
  //   classes = "font-medium text-rose-400 hover:text-rose-500";
  // }

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   if (props.textType == "technical") {
  //     navigate('/TechnicalPortfolio');
  //   }

  //   if (props.textType == "creative") {
  //     navigate('/CreativePortfolio');
  //   }
  // };

  return (
    <a href={props.link} target="_blank" style={{textDecoration: "none"}} className={`text-m geist-mono ${props.textColor}`}>{props.text}</a>
  );
}
// className={'font-medium text-' + color + '-500 hover:text-' + color + '-600'}
