/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function Map() {
  
    useEffect(() => {
      import('https://esm.sh/leaflet@1.8.0').then((module) => {
        const L = module.default

        const map = L.map('map', {
          center: [51.505, -0.09],
          zoom: 13
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
      })

      window.addEventListener('logEvent', (e) => {
        console.log('triggered logging event, count is ' + e.detail)
      })
    }, [])

  return <div id="map" style="min-height: 400px"></div>
}