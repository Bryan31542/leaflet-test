import { useLocation } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Markers } from './Markers'
import { places } from '../assets/data.json'

export const MapView = () => {
  const location = useLocation()

  const myLocation = {
    current: { lat: location.state.lat, lng: location.state.lng },
    zoom: 13
  }

  return (
    <MapContainer center={myLocation.current} zoom={myLocation.zoom}>
      <TileLayer
        url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Markers places={places} />
    </MapContainer>
  )
}
