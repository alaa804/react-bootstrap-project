import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

const ContactMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-71.060982);
  const [lat, setLat] = useState(42.35725);
  const [zoom, setZoom] = useState(18);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWxhYTAwMiIsImEiOiJja3B0amxjMjQwcmdyMnhwODUxbXNwdDUxIn0.Nne1p3mXYK4uuxCnLfS-fw";

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-71.060982, 42.35725],
      zoom: 18,
    });
  });
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li
                className="list-group-item"
                style={{ backgroundColor: "#f0f2f5" }}
              >
                <span className="fw-bold">Main Location:</span> 8000 Souk
                leghzal Nabeul
              </li>
              <li
                class="list-group-item"
                style={{ backgroundColor: "#f0f2f5" }}
              >
                <span class="fw-bold">Enrollment Phone:</span> (+216) 28-148-848
              </li>
              <li
                class="list-group-item"
                style={{ backgroundColor: "#f0f2f5" }}
              >
                <span class="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li
                class="list-group-item"
                style={{ backgroundColor: "#f0f2f5" }}
              >
                <span class="fw-bold">Enrollment Email:</span> (555)
                progweb332@gmail.com
              </li>
              <li
                class="list-group-item"
                style={{ backgroundColor: "#f0f2f5" }}
              >
                <span class="fw-bold">Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
          </div>
          <div className="col-md">
            <div ref={mapContainer} className="map-container" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
