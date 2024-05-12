function iniciarMap(){

    var coord = {lat:-32.9336482,lng:-71.5260104};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center: coord

    });
    

}