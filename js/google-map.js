<script>
  // Initialize the map
  var map = L.map('map').setView([0, 0], 2); // Center map at [0, 0] with zoom level 2

  // Set up the OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Get the user's current location
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;

          // Set map view to the user's location
          map.setView([lat, lng], 13);

          // Add a marker at the user's location
          var marker = L.marker([lat, lng]).addTo(map)
              .bindPopup('You are here!')
              .openPopup();
      }, function() {
          alert('Could not get your location');
      });
  } else {
      alert('Geolocation is not supported by your browser');
  }
</script>
