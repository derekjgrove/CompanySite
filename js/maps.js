      function initMap() {
              var myLatLng = {lat: 40.371142, lng: -79.692584};

              var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 11,
                center: myLatLng
              });

              var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'DG\'s Greener Side\n\n230 Sunrise Dr.\nIrwin PA, 15642'
              });

              var circle = new google.maps.Circle({
                  strokeColor: '#1472FF',
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: '#0F6CAA',
                  fillOpacity: 0.35,
                  map: map,
                  center: {lat: 40.371142, lng: -79.692584},
                  radius: 8046.72
                });
            }
