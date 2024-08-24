import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function BirdMap({ bird }) {
  return (
    <section className="profile-map">
      <h2>Spotted here: </h2>
      <MapContainer
        center={[bird.lat, bird.lng]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        aria-label={`Map showing ${bird.comName} sighting location`}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[bird.lat, bird.lng]}>
          <Popup>
            A marker at {bird.lat}, {bird.lng}
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  )
}
