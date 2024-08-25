import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

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
