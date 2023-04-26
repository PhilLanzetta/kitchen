import React from "react"
import GoogleMapReact from "google-map-react"
import * as styles from "./googleMap.module.css"
import LocationPin from "./locationPin"

const GoogleMap = ({ location }) => {
  const mapLocation = { lat: location.lat, lng: location.lon }

  return (
    <section className={styles.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP_KEY }}
        defaultCenter={mapLocation}
        defaultZoom={16}
      >
        <LocationPin lat={mapLocation.lat} lng={mapLocation.lng}></LocationPin>
      </GoogleMapReact>
    </section>
  )
}

export default GoogleMap
