import React from "react";
import Button from "../components/Button";

const Barman = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isMad, setIsMad] = React.useState("Zdenerwuj barmana");

  const clickHandler = () => {
    setIsClicked(!isClicked);
    {
      isClicked ? setIsMad("Zdenerwuj barmana") : setIsMad("Uspokoj barmana");
    }
  };
  return (
    <div>
      <div className='flex flex-col content-center justify-center items-center py-4'>
        {isClicked ? (
          <img
            src='/hubert_mad.png'
            alt='Hubert zly'
            className='size-1/4 transition-transform animation-pulse'
          ></img>
        ) : (
          <img
            src='/hubert_happy.png'
            alt='Hubert szczesliwy'
            className='size-1/4'
          ></img>
        )}
        <div className='p-2'>
          <Button text={isMad} onClick={clickHandler} type='button' />
        </div>
      </div>
    </div>
  );
};

export default Barman;
