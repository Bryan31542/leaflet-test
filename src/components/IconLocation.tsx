import Icon from '../assets/icon.svg'
import L from 'leaflet'

export const IconLocation = L.icon({
  iconUrl: Icon,
  iconSize: [72, 72],
  className: 'leaflet-venue-icon'
})
