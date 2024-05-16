import { LatLngExpression } from 'leaflet'
import { Marker } from 'react-leaflet'
import { IconLocation } from './IconLocation'

export interface Props {
  places: Place[]
}

export interface Place {
  id: number
  name: string
  geometry: number[]
}

export const Markers = ({ places }: Props) => {
  return places.map(place => (
    <Marker
      key={place.id}
      position={place.geometry as LatLngExpression}
      icon={IconLocation}
    />
  ))
}
