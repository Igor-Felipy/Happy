const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// create map
var map = L.map("mapid", options).setView([-23.541596, -46.6324879], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


// create and add marker
L.marker([-23.541596, -46.6324879], { icon }).addTo(map)

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget

  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)


  function removeActiveClass(button){
    button.classList.remove("active")
  }

  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  imageContainer.src = image.src

  button.classList.add('active')
}