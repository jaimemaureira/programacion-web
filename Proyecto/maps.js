
//mapa casa mediterranea

    function initMap() {
        // Coordenadas para centrar el mapa
        var LatLng = {lat: -32.9207824, lng: -71.520513};

        // Crea un nuevo mapa en el elemento div con el id 'map'
        var map = new google.maps.Map(document.getElementById('map'), {
            center: LatLng,
            zoom: 16 // Zoom predeterminado para la imagen del mapa
        });

        // Agrega un marcador en la ubicación especificada
        var marker = new google.maps.Marker({
            position: LatLng, map: map,
            title: 'Mi ubicación'
        });
    }  

    //MAPA CASA DE 2 PISOS

    function initMap2() {
       // Coordenadas para centrar el mapa
       var LatLng = {lat: -32.8998673, lng: -71.5006447};

       // Crea un nuevo mapa en el elemento div con el id 'map'
       var map = new google.maps.Map(document.getElementById('map'), {
           center: LatLng,
           zoom: 16 // Zoom predeterminado para la imagen del mapa
       });

       // Agrega un marcador en la ubicación especificada
       var marker = new google.maps.Marker({
           position: LatLng, map: map,
           title: 'Mi ubicación'
       });
   }