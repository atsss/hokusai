import React, { Fragment, useRef, useCallback } from 'react';
import Webcam from "react-webcam";
import { Txt } from '../../atoms/Txt'
import { Header } from '../../organisms/Header'

export const Camera = () => {
  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      console.log('photo');;
    },
    [webcamRef]
  );

  return (
    <Fragment>
      <Header back='/style'>Camera</Header>
      <Txt size='xl' className='u-mt80'>Not Working🚀</Txt>
      <Webcam ref={webcamRef} width={300} height={300}/>

      <button onClick={capture}>Capture photo</button>
    </Fragment>
  );
}
