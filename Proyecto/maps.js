
function initMap() {
    // Coordenadas para centrar el mapa
    var myLatLng = {lat: -32.9207824, lng: -71.520513};

    // Crea un nuevo mapa en el elemento div con el id 'map'
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16// Zoom predeterminado
    });

    // Agrega un marcador en la ubicación especificada
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Mi ubicación'
    });
}
    