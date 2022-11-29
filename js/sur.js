function enviar() {
    let name = document.getElementById("name");
    let nameerror = document.getElementById("nameerror");
    let apellido = document.getElementById("apellido");
    let apellidoerror = document.getElementById("apellidoerror");
    let ciudad = document.getElementById("ciudad");
    let ciudaderror = document.getElementById("ciudaderror");
    let comentario = document.getElementById("comentario");
    let comentarioerror = document.getElementById("comentarioerror");

    let inputname = validarinput(name, nameerror);
    let inputapellido = validarinput(apellido, apellidoerror);
    let inputciudad = validarinput(ciudad, ciudaderror);
    let inputcomentario = validarinput(comentario, comentarioerror);

    console.log({ inputname: inputname, inputapellido: inputapellido, inputciudad: inputciudad, inputcomentario: inputcomentario })
    if (inputname && inputapellido && inputciudad && inputcomentario) {
        console.log("se envio el mensaje");
    }


}

function validarinput(inputelement, inputerror) {
    if (inputelement.value) {
        inputelement.classList.remove("campoinvalido")
        inputerror.classList.add("ocultarerror");
        return true;
    } else {
        inputelement.classList.add("campoinvalido");
        inputerror.classList.remove("ocultarerror");
        return false;
    }
}




let modal = document.getElementById('mimodal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');


function abreModal(parametroLugar) {
    document.getElementById('mimodal').style.display = 'block';

    console.log(parametroLugar);
    let contenidoTituloApi = "";
    let contenidoApi = "";
    switch (parametroLugar) {
        case "Bariloche":
            contenidoTituloApi = "<b> Bariloche </b>";
           
           contenidoApi="<p> La ciudad está ubicada dentro del parque nacional Nahuel Huapi, junto a la cordillera de los Andes. En el 2012 fue declarada capital nacional del turismo de aventura, y en el 2015 capital nacional del chocolate.Vení a disfrutar de Bariloche las cuatro estaciones del año. Encontrarás una naturaleza que premia a cada visitante con paisajes maravillosos, desde picos nevados y lengas cobrizas, hasta valles cubiertos de flores y aguas cristalinas.En Bariloche tenés variedad de actividades para disfrutar: excursiones tradicionales, paseos lacustres, nieve para todos los gustos, la mejor gastronomía, turismo joven, salidas románticas, actividades familiares, aventura, tranquilidad y una agenda cultural diversa. La ciudad te ofrece tantas opciones que vas a querer visitarnos una y otra vez.<br>Descubrí todo lo que pasa en Bariloche en nuestras comunidades: Twitter, Facebook, Instagram y Youtube. </br></p>"
            break;
        case "Ushuaia":
            contenidoTituloApi = "<b> Ushuaia </b>";
            
            contenidoApi += "<p> Caminando por la calle principal o aledañas podés encontrarte con casas que mantienen su fachada original y han sido declaradas como monumentos históricos; son muestras del patrimonio cultural de la ciudad. Algunas de ellas ofrecen diferentes servicios, transportándote a tiempos lejanos. Si preferís, podés conocer estos y otros puntos de interés en un city tour, junto a guías turísticos que acompañan el recorrido con su relato, ya sea en vehículos o a pie. La calle principal llamada San Martìn concentra la mayor cantidad de comercios de todo tipo: restaurantes, agencias, souvenirs y más. Ahí vas a encontrar la Galería a Cielo Abierto que consta de 4 cuadras con circulación vehicular sin la posibilidad de estacionamiento. Es un paseo de compras con todo tipo de oferta.Aproximadamente, a 15 cuadras del centro se encuentra el único shopping de la ciudad, al que se puede llegar en vehículo o a pie por un sendero peatonal que comienza en la calle Maipú y Yaganes.</p>" 
                
            break;

        case "Calafate":
            contenidoTituloApi = "<b> Calafate </b>";
           
            contenidoApi += "<p><br>en Glaciar Perito Moreno</br>Desde El Calafate al Glaciar Perito Moreno media una distancia de 80 km pavimentados. En los primeros 40 km se recorre la estepa patagónica, pasando posteriormente a la entrada del Parque Nacional,donde se observa la vegetación arbórea: ñires, guindos, lengas que conforman el bosque magallánico. Una vez en el Glaciar, se puede apreciar la majestuosidad que impacta a los ojos del viajante, desde diferentes balcones,existiendo también un área de accesibilidad. La excursión puede realizarse a través de: servicios regulares, agencias de viajes, existiendo alternativos de diferentesempresas, en auto particular o de alquiler.<br> Servicios en el lugar: restaurant, snackbar, sanitarios, estacionamiento, atención primaria de la salud,y servicios de fotografía.</br> </p>"
            break;

        default:
            break;

    }
    contenidoModal(contenidoTituloApi, contenidoApi);
    }
function cerrarModal() {
    document.getElementById('modal').style.display = 'none'
}
function contenidoModal(contenidoTituloApi, contenidoApi) {
    let tituloModal = document.getElementById("tituloModal");
    let contenidoModal = document.getElementById("contenidoModal");
    tituloModal.innerHTML = contenidoTituloApi;
    contenidoModal.innerHTML = contenidoApi;
}

let ciudades = document.getElementsByClassName("abrir");
for (var i=0; i < ciudades.length; i++) {
    ciudades[i].addEventListener("click", async function(){
         abreModal(this.id);});
}

cerrar.addEventListener('click', function () {
    modal.style.display = 'none';
});





