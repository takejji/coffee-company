import React from 'react';
import './App.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const Contact = () => {
  return (
    <div className="content">
      <div className="text-block">
        <p>Адрес: Невский проспект, 27, Санкт-Петербург <br/> Координаты: 59.934858, 30.328094
</p>
        <p>Также у нас есть группа ВКонтакте, где Вы можете побольше узнать о нашей кофейне, а также узнавать о наших акциях одним из первых!
https://vk.com/coffedon</p>
      </div>
      <div className="image-block">
      <YMaps>
  <Map defaultState={{ center: [59.934858, 30.328094], zoom: 17 }}>
    <Placemark defaultGeometry={[59.934858, 30.328094]} />
  </Map>
</YMaps>
      </div>
    </div>
  );
};

export default Contact;