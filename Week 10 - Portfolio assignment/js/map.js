 /*
    James Green
    ICT 4510
    07/29/2023
    This script creates a Leaflet map using Mapbox tiles. On first load it sets the initial view to the specified coordinates
    with a zoom level of 15 and adds a marker at the same location.
    */

    mapboxgl.accessToken = 'pk.eyJ1IjoiamdyZWVuMTAiLCJhIjoiY2xrbjVxMXNhMW0wcjNka2VubDJjMnk5NyJ9.IBfQtv625oRRPFCogWzv3A';

    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.961753, 39.678121],
      zoom: 15,
      maxZoom: 20
    });

    var marker = new mapboxgl.Marker().setLngLat([-104.961753, 39.678121]).addTo(map);