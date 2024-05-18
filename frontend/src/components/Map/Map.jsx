import React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Pin from './Pin/Pin'


const Map = ({items}) => {
  return (
    <MapContainer center={items.length  >= 1 ? [items[0].latitude, items[0].longitude] : [30.3753, 69.3451]} zoom={10} scrollWheelZoom={false} className='w-full h-full z-0'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=><Pin item={item} key={item.id} />)}
  </MapContainer>
  )
}

export default Map 