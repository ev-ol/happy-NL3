// Create map
const map = L.map('mapid').setView([-5.8154577, -35.2343757], 13);

// Create and add tileLayer
L.tileLayer
(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'   
).addTo(map);

// Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

// Create and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon before drawing a new one
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
})

// Add photo field
function addPhotoField() {

    //Pegar o container de fotos (#images)
    const imagesContainer = document.querySelector('#images');

    //Pegar o container para duplicar (.new-upload)
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //Realizar o clone da última imagem adicionada
    const clonedFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //Verificar se o campo está vazio
    const inputChildren = clonedFieldContainer.children[0]

    if(inputChildren.value == "") {
        return;
    }

    //Limpar o campo antes de adicionar ao container
    inputChildren.value = ""

    // Adicionar o clone ao container de imagens
    imagesContainer.appendChild(clonedFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1) {
        
        //Limpar o valor do campo  
        span.parentNode.children[0].value = "";  
        return
    }

    //Deletar o campo
    span.parentNode.remove();
}

// Selecionar sim ou não
function toggleSelect(event) {
    
    // pegar o botão clicado
    document.querySelectorAll('.button-select button').forEach( button => button.classList.remove('active') );

    // colocar a classe .active no botão clicado
    const button = event.currentTarget;
    button.classList.add('active');

    // atualizar o meu input hidden com o valor selecionados
    const input = document.querySelector('[name="open-on-weekends"]');

    // verificar se é sim ou não
    input.value = button.dataset.value

}

function validateMapInput(event) {

    const inputLat = document.querySelector('input[name="lat"]').value
    const inputLng = document.querySelector('input[name="lng"]')

    if(inputLat === '' || inputLng === '') {
        alert('Selecione um ponto no mapa');
        event.preventDefault(); //Não envia o formulário
    }    
}