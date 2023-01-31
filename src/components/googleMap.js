import React from "react"
import GoogleMapReact from "google-map-react"
import * as styles from "./googleMap.module.css"
import LocationPin from "./locationPin"

const GoogleMap = ({ location }) => {
  const mapLocation = { lat: location.lat, lng: location.lon }

  const API_KEY = process.env.GOOGLE_MAP_KEY
  console.log(API_KEY)
  return (
    <section className={styles.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={mapLocation}
        defaultZoom={16}
      >
        <LocationPin lat={mapLocation.lat} lng={mapLocation.lng}></LocationPin>
      </GoogleMapReact>
    </section>
  )
}

export default GoogleMap
