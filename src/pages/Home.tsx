import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Location {
  lat: number
  lng: number
}

export default function HomePage() {
  const [location, setLocation] = useState<Location>({
    lat: 0,
    lng: 0
  })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }, [location])

  return (
    <div>
      <h1>Geolocation</h1>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
      <Link to={`/map`} state={location}>
        View Map
      </Link>
    </div>
  )
}
