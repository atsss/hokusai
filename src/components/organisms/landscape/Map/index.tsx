import React, { useState } from 'react';
import style from './style.module.sass'
import GoogleMapReact from 'google-map-react';
import { Landscapes } from '../../../../config/Data'
import PinImage from '../../../../images/pin.png';
import { Img } from '../../../../components/atoms/Img';
import { HorizontalScroll } from '../../../../components/atoms/HorizontalScroll';
import { ImgWithModal } from '../../../molecules/ImgWithModal'

const defaultCenter = { lat: 36.133426, lng: 139.554093 }
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
        <div style={{ paddingTop: '8px', paddingBottom: '8px' }}>
          <HorizontalScroll onChange={(index: number) => setIndex(index)}>
            {Landscapes.map((landscape, index) => (
              <ImgWithModal key={index} data={landscape}/>
            ))}
          </HorizontalScroll>
        </div>
      </div>
    );
}
