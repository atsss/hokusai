import React, { useState } from 'react';
import style from './style.module.sass'
import GoogleMapReact from 'google-map-react';
import { Landscapes } from '../../../../config/Data'
import PinImage from '../../../../images/pin.png';
import { Img } from '../../../../components/atoms/Img';

const defaultCenter = { lat: 35.2659257, lng: 138.9574245 }
const Pin = (props: any) => <div className={style.pin}><Img src={PinImage}/></div>;

export const Map = (props: any) => {
    const [index, setIndex] = useState(0)
    const center = Landscapes[index]

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAOW1RNSrqQxStL842twRdvNkcyFIf_eEU" }}
          defaultCenter={defaultCenter}
          defaultZoom={7}
        >
          <Pin
            lat={center.lat}
            lng={center.lng}
          />
        </GoogleMapReact>
        <div style={{ height: '30px', width: '100%' }} onClick={() => setIndex(index+1)}/>
      </div>
    );
}
