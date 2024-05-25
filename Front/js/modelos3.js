import * as THREE from 'three';
import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';
import {MTLLoader} from 'three/addons/loaders/MTLLoader.js';




//crea una escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
const textureLoader = new THREE.TextureLoader();
const textureBackground = textureLoader.load('./Imagenes/nivel3Fondo.jpg');


// Establecer la textura como fondo de la escena
scene.background = textureBackground;


camera.position.set(30, 25, 30);
camera.lookAt(0, 0, 0);

//crea un renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//VARIABLES PARA INVULNERABILIDAD
let isInvulnerableCinna = false; // Flag para indicar si Cinnamoroll es invulnerable
let isInvulnerablePurin = false; // Flag para indicar si Pompompurin es invulnerable
let invulnerabilityDuration = 5000; // Duración de la invulnerabilidad en milisegundos

// Define la velocidad de rotación de los hongos
let rotationSpeed = 0.05; // Ajusta la velocidad aquí

// Variables para controlar los límites
let atTop = false;
let atBottom = false;
let atLeft = false;
let atRight = false;

var direccion = false;
direccion =true;

let modelCinna;

// Variables para almacenar la posición y dirección de movimiento del objeto
let objectPosition = new THREE.Vector3(8, 5, 5);
let moveDirection = new THREE.Vector3();

const group = new THREE.Group();

const ambientLight = new THREE.AmbientLight(0xffffff, 12);
group.add(ambientLight);

scene.add(group);

const manager = new THREE.LoadingManager();
manager.onStart = function (url, itemsLoaded, itemsTotal){
	console.log( 'Started loading file: ' + url + '.\nLoaded' + itemsLoaded + ' of '+ itemsTotal + 'files.');
};

manager.onLoad = function (){
	console.log( 'Loading complete!');
}

manager.onProgress = function ( url , itemsLoaded, itemsTotal ){
	console.log( 'Loading file: ' + url + '.\nLoaded' + itemsLoaded + 'of' +itemsTotal + 'files.');
};

manager.onError = function (url){
	console.log( 'There was an error loading' + url);
};

//variables para powerup
let speed = 1;
var objBase = new THREE.Object3D();
var objTractor = new THREE.Object3D();
var objTronco = new THREE.Object3D();
var objBosque = new THREE.Object3D();
var objBosque2 = new THREE.Object3D();
var objCarreta = new THREE.Object3D();
var objAbandonedH = new THREE.Object3D();
var objCarreta = new THREE.Object3D();
var objCampamento = new THREE.Object3D();
var objRocas = new THREE.Object3D();
var objFuegoCamp = new THREE.Object3D();
var objAxe = new THREE.Object3D();
var objSkull = new THREE.Object3D();
var objFantasma = new THREE.Object3D();
var objCinna= new THREE.Object3D();
var objPurin= new THREE.Object3D();
var objGhost = new THREE.Object3D();
var objGhost2 = new THREE.Object3D();
var objNota1= new THREE.Object3D();
var objNota2= new THREE.Object3D();
var objNota3= new THREE.Object3D();

//ITEMS
var objItemHongos = new THREE.Object3D();

//kirby
var objKirby = new THREE.Object3D();
var objKirby2 = new THREE.Object3D();

const loaderBase = new OBJLoader(manager);
var mtlBase = new MTLLoader(manager);

const loaderArbol= new OBJLoader(manager);
var mtlArbol = new MTLLoader(manager);

const loaderTractor= new OBJLoader(manager);
var mtlTractor = new MTLLoader(manager);

const loaderTronco= new OBJLoader(manager);
var mtlTronco = new MTLLoader(manager);

const loaderBosque= new OBJLoader(manager);
var mtlBosque = new MTLLoader(manager);

const loaderBosque2 = new OBJLoader(manager);
var mtlBosque2 = new MTLLoader(manager);

const loaderAbandonen= new OBJLoader(manager);
var mtlAbandone = new MTLLoader(manager);

const loaderCarreta = new OBJLoader(manager);
var mtlCarreta = new MTLLoader(manager);

const loaderCampamento = new OBJLoader(manager);
var mtlCampamento = new MTLLoader(manager);

const loaderRoca = new OBJLoader(manager);
var mtlRoca = new MTLLoader(manager);

const loaderFuegoCamp = new OBJLoader(manager);
var mtlFuegoCamp = new MTLLoader(manager);

const loaderAxe = new OBJLoader(manager);
var mtlAxe = new MTLLoader(manager);

const loaderSkull = new OBJLoader(manager);
var mtlSkull = new MTLLoader(manager);

const loaderFantasma = new OBJLoader(manager);
var mtlFantasma = new MTLLoader(manager);

const loaderPurin= new OBJLoader(manager);
var mtlPurin = new MTLLoader(manager);

const loaderCinna= new OBJLoader(manager);
var mtlCinna = new MTLLoader(manager);

const loaderNota = new OBJLoader(manager);
var mtlNota = new MTLLoader(manager);

const loaderGhost = new OBJLoader(manager);
var mtlGhost = new MTLLoader(manager);

const loaderGhost2 = new OBJLoader(manager);
var mtlGhost2 = new MTLLoader(manager);

// ITEMS
const loaderItemHongo = new OBJLoader(manager);
var mtlItemHongo = new MTLLoader(manager);

//Kirby
const loaderKirby = new OBJLoader(manager);
var mtlKirby = new MTLLoader(manager);

const loaderKirby2 = new OBJLoader(manager);
var mtlKirby2 = new MTLLoader(manager);

/////////////CARGA DE MODELOS///////

mtlBase.load('./Modelos/bosque2.mtl', function (materials){
	materials.preload();
	loaderBase.setMaterials(materials);
	loaderBase.load('./Modelos/bosque2.obj',
	   function(object){
		object.name="Base";
		object.scale.copy(new THREE.Vector3(1.1,1.1,1.1));
		objBase = object;
		//object.rotation.y = Math.PI / 2;
		scene.add(object);
		//arryModel.push(object);
	   });

	console.log(materials);
});


mtlSkull.load('./Modelos/craneo.mtl', function (materials){
	materials.preload();
	loaderSkull.setMaterials(materials);
	loaderSkull.load('./Modelos/craneo.obj',
	   function(object){
		object.name = "Bosque";
		object.scale.copy(new THREE.Vector3(10,10,10));
		objSkull = object;
		object.position.set(12, 2, -4);
		//object.rotation.y = Math.PI / 2;
		scene.add(object);
	   });

	console.log(materials);
});


mtlTractor.load('./Modelos/tractor/tractor3.mtl', function (materials){
	materials.preload();
	loaderTractor.setMaterials(materials);
	loaderTractor.load('./Modelos/tractor/tractor3.obj',
	   function(object){
		object.name="Tractor";
		object.scale.copy(new THREE.Vector3(1,1,1));
		objTractor = object;
       // Asignar posición al objeto
       object.position.set(-2, 5, 15); // Reemplaza x, y, z con las coordenadas deseadas
		scene.add(object);
		//arryModel.push(object);
	   });

	console.log(materials);
});

mtlCarreta.load('./Modelos/CARRETA/carreta3.mtl', function (materials){
	materials.preload();
	loaderCarreta.setMaterials(materials);
	loaderCarreta.load('./Modelos/CARRETA/carreta3.obj',
	   function(object){
		object.name="Carreta";
		object.scale.copy(new THREE.Vector3(1,1,1));
		objCarreta = object;
       // Asignar posición al objeto
       object.position.set(13, 5, 8); // Reemplaza x, y, z con las coordenadas deseadas
		scene.add(object);
		//arryModel.push(object);
	   });

	console.log(materials);
});



/*mtlTronco.load('./Modelos/tronco2/texturas/trunk wood.mtl', function (materials){
	materials.preload();
	loaderTronco.setMaterials(materials);
	loaderTronco.load('./Modelos/tronco2/texturas/trunk wood.obj',
	   function(object){
		object.name = "Tronco";
		object.scale.copy(new THREE.Vector3(2.3,2.3,2.3));
		objTronco = object;
		object.position.set(16, 5, 13);
		object.rotation.y = Math.PI / 2;
		scene.add(object);
	   });

	console.log(materials);
});*/


mtlAxe.load('./Modelos/Axe/axe3.mtl', function (materials){
	materials.preload();
	loaderAxe.setMaterials(materials);
	loaderAxe.load('./Modelos/Axe/axe3.obj',
	   function(object){
		object.name = "Tronco";
		object.scale.copy(new THREE.Vector3(0.4,0.4,0.4));
		objAxe = object;
		object.position.set(16, 5, 4);
		object.rotation.y = Math.PI / 2;
		scene.add(object);
	   });

	console.log(materials);
});

mtlAbandone.load('./Modelos/abandonedhouse/casitaAbandonada.mtl', function (materials){
	materials.preload();
	loaderAbandonen.setMaterials(materials);
	loaderAbandonen.load('./Modelos/abandonedhouse/casitaAbandonada.obj',
	   function(object){
		object.name = "Casa";
		object.scale.copy(new THREE.Vector3(0.5,0.5,0.5));
		objAbandonedH = object;
		object.position.set(1, 5, 1);
		object.rotation.y = Math.PI / 2;
		scene.add(object);
	   });

	console.log(materials);
});

mtlCampamento.load('./Modelos/Campamento/tienda4.mtl', function (materials){
	materials.preload();
	loaderCampamento.setMaterials(materials);
	loaderCampamento.load('./Modelos/Campamento/tienda4.obj',
	   function(object){
		object.name = "Tienda";
		object.scale.copy(new THREE.Vector3(0.7, 0.7, 0.7));
		objCampamento = object;
		object.position.set(14, 5, 16);
		//object.rotation.y = Math.PI / 2;
		scene.add(object);
	   });

	console.log(materials);
});

mtlRoca.load('./Modelos/Campamento/rocass.mtl', function (materials){
	materials.preload();
	loaderRoca.setMaterials(materials);
	loaderRoca.load('./Modelos/Campamento/rocass.obj',
	   function(object){
		object.name = "Rocas";
		object.scale.copy(new THREE.Vector3(0.4, 0.4, 0.4));
		objRocas = object;
		object.position.set(15, 5, 16);
		//object.rotation.y = Math.PI / 2;
		scene.add(object);
	   });

	console.log(materials);
});


mtlFuegoCamp.load('./Modelos/Campamento/fogata.mtl', function (materials){
	materials.preload();
	loaderFuegoCamp.setMaterials(materials);
	loaderFuegoCamp.load('./Modelos/Campamento/fogata.obj',
	   function(object){
		object.name = "Fuego";
		object.scale.copy(new THREE.Vector3(0.4, 0.4, 0.4));
		objFuegoCamp = object;
		object.position.set(15, 5, 16);
		//object.rotation.y = Math.PI / 2;
		scene.add(object);
	   });

	console.log(materials);
});

mtlPurin.load('./Modelos/purin.mtl', function (materials){
	materials.preload();
	loaderPurin.setMaterials(materials);
	loaderPurin.load('./Modelos/purin.obj',
	   function(object){
		object.name="Pompompurin";
		object.scale.copy(new THREE.Vector3(4,4,4));
		objPurin = object;
		object.position.set(5, 5, -4);
		//object.rotation.y = Math.PI / 2;
		scene.add(object);
		//arryModel.push(object);
	   });

	console.log(materials);
});

mtlCinna.load('./Modelos/cinna.mtl', function (materials){
	materials.preload();
	loaderCinna.setMaterials(materials);
	loaderCinna.load('./Modelos/cinna.obj',
	   function(object){
		object.name="Cinnamoroll";
		object.scale.copy(new THREE.Vector3(2.4,2.4,2.4));
		objCinna = object;
        object.position.set(8, 5, 5);
		scene.add(object);
		//arryModel.push(object);
	   });

	console.log(materials);
});


const cube1Geometry = new THREE.BoxGeometry(1, 1, 1);
const cube1Material = new THREE.MeshPhongMaterial({ color: "aqua" });
const cube1 = new THREE.Mesh(cube1Geometry, cube1Material);
cube1.position.set(12, 5,14);
scene.add(cube1);

mtlNota.load('./Modelos/nota.mtl', function (materials){
	materials.preload();
	loaderNota.setMaterials(materials);
	loaderNota.load('./Modelos/nota.obj',
	function(object){
		object.name="Nota1";
		object.scale.copy(new THREE.Vector3(0.2,0.2,0.2));
		objNota1 = object;
        object.position.set(1, 5,5);
		scene.add(object);
		//arryModel.push(object);
	});

	console.log(materials);
});

mtlNota.load('./Modelos/nota.mtl', function (materials){
	materials.preload();
	loaderNota.setMaterials(materials);
	loaderNota.load('./Modelos/nota.obj',
	function(object){
		object.name="Nota2";
		object.scale.copy(new THREE.Vector3(0.2,0.2,0.2));
		objNota2 = object;
        object.position.set(0, 5,14);
		objNota2.visible = false;
		scene.add(object);
		//arryModel.push(object);
	});

	console.log(materials);
});

mtlNota.load('./Modelos/nota.mtl', function (materials){
	materials.preload();
	loaderNota.setMaterials(materials);
	loaderNota.load('./Modelos/nota.obj',
	function(object){
		object.name="Nota3";
		object.scale.copy(new THREE.Vector3(0.2,0.2,0.2));
		objNota3 = object;
        object.position.set(12, 5,14);
		objNota3.visible = false;
		scene.add(object);
		//arryModel.push(object);
	});

	console.log(materials);
});


//////////////////////////////////////////////////ITEMS////////////////////////////////////////////////////////////////////

// Hongo
mtlItemHongo.load('./Modelos/honguitos.mtl', function (materials){
	materials.preload();
	loaderItemHongo.setMaterials(materials);
	loaderItemHongo.load('./Modelos/honguitos.obj',
	function(object){
		object.name="Honguitos";
		object.scale.copy(new THREE.Vector3(1,1,1));
		objItemHongos = object;
		object.position.set(10, 5, 13);
		//object.rotation.y = Math.PI / 6;
		scene.add(object);
		//arryModel.push(object);

		// Añadir el sistema de partículas como hijo del objeto
		object.add(particleSystem);
	});

	console.log(materials);
});

mtlKirby.load('./Modelos/kirby.mtl', function (materials){
	materials.preload();
	loaderKirby.setMaterials(materials);
	loaderKirby.load('./Modelos/kirby.obj',
	   function(object){
		object.name="Kirby";
		object.scale.copy(new THREE.Vector3(1.5,1.5,1.5));
		objKirby = object;
        object.position.set(-3, 5, 8);
		object.rotation.y = Math.PI / 2;
		scene.add(object);
		//arryModel.push(object);
	   });

	console.log(materials);
});

mtlKirby2.load('./Modelos/kirby.mtl', function (materials){
	materials.preload();
	loaderKirby2.setMaterials(materials);
	loaderKirby2.load('./Modelos/kirby.obj',
	   function(object){
		object.name="Kirby2";
		object.scale.copy(new THREE.Vector3(1.5,1.5,1.5));
		objKirby2 = object;
        object.position.set(13, 5, 13);
		object.rotation.y = Math.PI / 2;
		scene.add(object);
		//arryModel.push(object);
	   });

	console.log(materials);
});


//////////////////////////////////////////////////////////PARTICULAS/////////////////////////////////////////////////////////

// Variables globales para el sistema de partículas
let particleSystem;
const particleCount = 50;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const velocity = new Float32Array(particleCount * 3);

// Inicializar posiciones y velocidades de las partículas
for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = 0;
    positions[i * 3 + 1] = 0;
    positions[i * 3 + 2] = 0;

    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.02 + 0.01;
    velocity[i * 3] = Math.cos(angle) * speed;
    velocity[i * 3 + 1] = Math.sin(angle) * speed;
    velocity[i * 3 + 2] = Math.random() * 0.02 - 0.01;
}

// Configurar geometría y material del sistema de partículas
particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({
    color: 0x800080,
    size: 0.2
});

// Crear el sistema de partículas
particleSystem = new THREE.Points(particles, particleMaterial);

// Almacenar las velocidades en el sistema de partículas
particleSystem.userData.velocity = velocity;


///////////////////////////////////////////////////////////SONIDOS////////////////////////////////////////////////////////

// Crear un listener de audio y añadirlo a la cámara
const listener = new THREE.AudioListener();
camera.add(listener);

// Crear una fuente de sonido colision
const collisionSound = new THREE.Audio(listener);
// Crear una fuente de sonido ambiental
const ambientSound = new THREE.Audio(listener);
// Crear una fuente de sonido notas
const NotasSound = new THREE.Audio(listener);
// Crear una fuente de sonido enemigos atacan jugador
const AtaqueSound = new THREE.Audio(listener);


// Cargar un archivo de sonido de colision
const audioLoader = new THREE.AudioLoader();
audioLoader.load('./audio/golpeColision.mp3', function(buffer) {
    collisionSound.setBuffer(buffer);
    collisionSound.setLoop(false);
    collisionSound.setVolume(0.8); // Ajusta el volumen según sea necesario
});

// Cargar un archivo de sonido de encontrar notas
audioLoader.load('./audio/EncontrarNotas.mp3', function(buffer) {
    NotasSound.setBuffer(buffer);
    NotasSound.setLoop(false);
    NotasSound.setVolume(0.8); // Ajusta el volumen según sea necesario
});

// Cargar un archivo de sonido de enemigos atacando
audioLoader.load('./audio/atacarJugador.mp3', function(buffer) {
    AtaqueSound.setBuffer(buffer);
    AtaqueSound.setLoop(false);
    AtaqueSound.setVolume(0.8); // Ajusta el volumen según sea necesario
});

// Cargar un archivo de sonido ambiental
audioLoader.load('./audio/musicafondo.mp3', function(buffer) {
    ambientSound.setBuffer(buffer);
    //ambientSound.setLoop(true); // Reproducir en bucle
    ambientSound.setVolume(0.8); // Ajusta el volumen según sea necesario
    ambientSound.play(); // Iniciar la reproducción del sonido ambiental
});



///////////////////////////TRACTOR//////////////////////////
// Función para verificar la colisión entre dos objetos
function checkCollision(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

////////////////////////CARRETA//////////////////////////
// Función para verificar la colisión entre dos objetos
function checkCollision2(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

////////////////////////NOTA1//////////////////////////////
function checkCollision3(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

///////////////////////////BOSQUE2//////////////////////////
// Función para verificar la colisión entre dos objetos
function checkCollision4(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

// Colision calavera
function checkCollision5(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

// Colision hacha
function checkCollision6(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

// Colision casa de campaña
function checkCollision7(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

// Colision fogata
function checkCollision8(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}


///////////////////////////////GHOST//////////////////////////////
function checkCollision9(object1, object2) {
    // Reducir el tamaño del box de object2
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    // Aplicar un offset a bbox2 para reducir su tamaño
    //bbox2.expandByScalar(-1.8); // Este valor puede variar dependiendo de cuánto quieras reducir la colisión
    return bbox1.intersectsBox(bbox2);
}

////////////////////////NOTA2//////////////////////////////
function checkCollision10(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

////////////////////////NOTA3//////////////////////////////
function checkCollision11(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

// Kirby
function checkCollision19(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
	
    return bbox1.intersectsBox(bbox2);
}

function checkCollision20(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
	
    return bbox1.intersectsBox(bbox2);
}

// Colision tronco
function checkCollision12(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

// Colision casa grande
function checkCollision13(object1, object2) {
    const bbox1 = new THREE.Box3().setFromObject(object1);
    const bbox2 = new THREE.Box3().setFromObject(object2);
    return bbox1.intersectsBox(bbox2);
}

////////////////////////TRACTOR//////////////////////////////////////

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition = new THREE.Vector3();
previousCinnaPosition.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

const previousPompompurinPosition = new THREE.Vector3();
previousCinnaPosition.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

////////////////////////CARRETA//////////////////////////////////////

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition2 = new THREE.Vector3();
previousCinnaPosition2.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

const previousPompompurinPosition2 = new THREE.Vector3();
previousCinnaPosition2.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

/////////////////////NOTA1//////////////////////////////////

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition3 = new THREE.Vector3();
previousCinnaPosition3.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousPompompurinPosition3 = new THREE.Vector3();
previousPompompurinPosition3.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition4 = new THREE.Vector3();
previousCinnaPosition4.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousPompompurinPosition4 = new THREE.Vector3();
previousPompompurinPosition4.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition5 = new THREE.Vector3();
previousCinnaPosition5.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousPompompurinPosition5 = new THREE.Vector3();
previousPompompurinPosition5.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition6 = new THREE.Vector3();
previousCinnaPosition6.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousPompompurinPosition6 = new THREE.Vector3();
previousPompompurinPosition6.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition7 = new THREE.Vector3();
previousCinnaPosition7.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousPompompurinPosition7 = new THREE.Vector3();
previousPompompurinPosition7.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition8 = new THREE.Vector3();
previousCinnaPosition8.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousPompompurinPosition8 = new THREE.Vector3();
previousPompompurinPosition8.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

////////////////////////GHOST (EJEMPLO ENEMIGO) //////////////////////////////////////

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition9 = new THREE.Vector3();
previousCinnaPosition9.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

////////////////////////NOTA2//////////////////////////////////////

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition10 = new THREE.Vector3();
previousCinnaPosition10.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Pompompurin
const previousPompompurinPosition10 = new THREE.Vector3();
previousPompompurinPosition10.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

////////////////////////NOTA3//////////////////////////////////////

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition11 = new THREE.Vector3();
previousCinnaPosition11.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Pompompurin
const previousPompompurinPosition11 = new THREE.Vector3();
previousPompompurinPosition11.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

////////////////////////GHOST (enemigo POMPOMPURIN) //////////////////////////////////////

// Variable para almacenar la posición anterior de Cinnamoroll
const previousPompompurinPosition12 = new THREE.Vector3();
previousPompompurinPosition12.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Cinnamoroll
const previousCinnaPosition13 = new THREE.Vector3();
previousCinnaPosition13.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

// Variable para almacenar la posición anterior de Pompompurin
const previousPompompurinPosition13 = new THREE.Vector3();
previousPompompurinPosition13.copy(objPurin.position); // Copiar la posición actual de Cinnamoroll como posición inicial

//Kirby
const previousCinnaPosition20 = new THREE.Vector3();
previousCinnaPosition20.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

const previousPompompurinPosition20 = new THREE.Vector3();
previousPompompurinPosition20.copy(objCinna.position); // Copiar la posición actual de Cinnamoroll como posición inicial

//Tengo sueño
////////////////TRACTOR//////////////////

let colisionCinnamorollTractorActiva = true; // Variable para controlar si la colisión entre Cinnamoroll y la carreta está activa o no

// Función para verificar la colisión entre Cinnamoroll y TRACTOR
function checkCinnamorollTractorCollision() {
    if (colisionCinnamorollTractorActiva && checkCollision(objCinna, objTractor)) {
       

        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objCinna.position.copy(previousCinnaPosition);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }
        
    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition.copy(objCinna.position);

    }
}

/*function checkPurinTractorCollision() {
    if (colisionCinnamorollTractorActiva && checkCollision(objCinna, objTractor)) {
        // Mostrar el mensaje de colisión
        document.getElementById('mensajeColision').style.display = 'block'; 

        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objCinna.position.copy(previousCinnaPosition);

        // Establecer la variable de interacción con la Carreta a verdadero
        interaccionTractor = true;
        
    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition.copy(objCinna.position);

		interaccionTractor = false;

        // Borrar el mensaje de colisión solo si no hay interacción con la Carreta
        if (!interaccionTractor) {
            document.getElementById('mensajeColision').style.display = 'none'; // Ocultar el mensaje de colisión
        }
    }
}*/

////////////////CARRETA//////////////////

let colisionCinnamorollCarretaActiva = true; // Variable para controlar si la colisión entre Cinnamoroll y la carreta está activa o no


// Función para verificar la colisión entre Cinnamoroll y CARRETA
function checkCinnamorollCarretaCollision() {
    if (colisionCinnamorollCarretaActiva && checkCollision2(objCinna, objCarreta)) {
      
        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objCinna.position.copy(previousCinnaPosition2);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition2.copy(objCinna.position);
    }
}

let colisionCinnamorollCalaveraActiva = true;
// Función para verificar la colisión entre Cinnamoroll y Calavera
function checkCinnamorollCalaveraCollision() {
    if (colisionCinnamorollCalaveraActiva && checkCollision5(objCinna, objSkull)) {
      
        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objCinna.position.copy(previousCinnaPosition5);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition5.copy(objCinna.position);
    }
}

let colisionPurinCalaveraActiva = true;
// Función para verificar la colisión entre Cinnamoroll y Calavera
function checkPurinCalaveraCollision() {
    if (colisionPurinCalaveraActiva && checkCollision5(objPurin, objSkull)) {
      
        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objCinna.position.copy(previousPompompurinPosition5);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousPompompurinPosition5.copy(objPurin.position);
    }
}

let colisionCinnamorollHachaActiva = true;
// Función para verificar la colisión entre Cinnamoroll y Hacha
function checkCinnamorollHachaCollision() {
    if (colisionCinnamorollHachaActiva && checkCollision6(objCinna, objAxe)) {
      
        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objCinna.position.copy(previousCinnaPosition6);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition6.copy(objCinna.position);
    }
}

let colisionPurinHachaActiva = true;
// Función para verificar la colisión entre Cinnamoroll y Hacha
function checkPurinHachaCollision() {
    if (colisionPurinHachaActiva && checkCollision6(objPurin, objAxe)) {
      
        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objPurin.position.copy(previousPompompurinPosition6);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousPompompurinPosition6.copy(objPurin.position);
    }
}

let colisionCinnamorollCampañaActiva = true;
// Función para verificar la colisión entre Cinnamoroll y casa de campaña
function checkCinnamorollCampañaCollision() {
    if (colisionCinnamorollCampañaActiva && checkCollision7(objCinna, objCampamento)) {
      
        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objCinna.position.copy(previousCinnaPosition7);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition7.copy(objCinna.position);
    }
}

let colisionPurinCampañaActiva = true;
// Función para verificar la colisión entre Cinnamoroll y casa de campaña
function checkPurinCampañaCollision() {
    if (colisionPurinCampañaActiva && checkCollision7(objPurin, objCampamento)) {
      
        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objPurin.position.copy(previousPompompurinPosition7);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousPompompurinPosition7.copy(objPurin.position);
    }
}

let colisionCinnamorollFogataActiva = true;
// Función para verificar la colisión entre Cinnamoroll y casa de campaña
function checkCinnamorollFogataCollision() {
    if (colisionCinnamorollFogataActiva && checkCollision8(objCinna, objFuegoCamp)) {
      
        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objCinna.position.copy(previousCinnaPosition8);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition8.copy(objCinna.position);
    }
}

let colisionPurinFogataActiva = true;
// Función para verificar la colisión entre Cinnamoroll y casa de campaña
function checkPurinFogataCollision() {
    if (colisionPurinFogataActiva && checkCollision8(objPurin, objFuegoCamp)) {
      
        // Ajustar la posición de Cinnamoroll de regreso a la posición anterior
        objPurin.position.copy(previousPompompurinPosition8);

		if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousPompompurinPosition8.copy(objPurin.position);
    }
}

///////////////NOTA1////////////////////////

let colisionCinnamorollNota1Activa = true; // Variable para controlar si la colisión entre Cinnamoroll y la Nota1 está activa o no
let interaccionNota1 = false;

// Función para verificar la colisión entre Cinnamoroll y Nota1
function checkCinnamorollNota1Collision() {
	if (colisionCinnamorollNota1Activa && checkCollision3(objCinna, objNota1)) {
		document.getElementById('mensajeColision2').style.display = 'block'; 
        objCinna.position.copy(previousCinnaPosition3);
		interaccionNota1 = true;

		if (!NotasSound.isPlaying) {
            NotasSound.play();
        }
		
    } else {
        // Si no hay colisión, actualizar la posición anterior de Pompompurin
        previousCinnaPosition3.copy(objCinna.position);
		interaccionNota1 = false;
		document.getElementById('mensajeColision2').style.display = 'none'; // Ocultar el mensaje de colisión
    }

}


let colisionPurinllNota1Activa = true; // Variable para controlar si la colisión entre Purin y la Nota1 está activa o no
let interaccionNota1P = false;

// Función para verificar la colisión entre Purin y Nota1
function checkPurinNota1Collision() {
	if (colisionPurinllNota1Activa && checkCollision3(objPurin, objNota1)) {
		document.getElementById('mensajeColision').style.display = 'block'; 
        objPurin.position.copy(previousPompompurinPosition3);
		interaccionNota1P = true;

		if (!NotasSound.isPlaying) {
            NotasSound.play();
        }
		
    } else {
        // Si no hay colisión, actualizar la posición anterior de Pompompurin
        previousPompompurinPosition3.copy(objPurin.position);
		interaccionNota1P = false;
		document.getElementById('mensajeColision').style.display = 'none'; // Ocultar el mensaje de colisión
    }

}


///////////////NOTA2////////////////////////
let colisionCinnamorollNota2Activa = true; // Variable para controlar si la colisión entre Cinnamoroll y la Nota2 está activa o no
let interaccionNota2 = false;
// Función para verificar la colisión entre Cinnamoroll y Nota2
function checkCinnamorollNota2Collision() {
	if (colisionCinnamorollNota2Activa && checkCollision10(objCinna, objNota2)) {
		document.getElementById('mensajeColision3').style.display = 'block'; 
        objCinna.position.copy(previousCinnaPosition10);
		interaccionNota2 = true;
		objNota2.visible = true;

		if (!NotasSound.isPlaying) {
            NotasSound.play();
        }
		
    } else {
        // Si no hay colisión, actualizar la posición anterior de Pompompurin
        previousCinnaPosition10.copy(objCinna.position);
		interaccionNota2 = false;
		document.getElementById('mensajeColision3').style.display = 'none'; // Ocultar el mensaje de colisión
		objNota2.visible = false;
    }

}

let colisionPurinllNota2Activa = true; // Variable para controlar si la colisión entre Purin y la Nota2 está activa o no
let interaccionNota2P = false;

// Función para verificar la colisión entre Purin y Nota2
function checkPurinNota2Collision() {
	if (colisionPurinllNota2Activa && checkCollision10(objPurin, objNota2)) {
		document.getElementById('mensajeColision4').style.display = 'block'; 
        objPurin.position.copy(previousPompompurinPosition10);
		interaccionNota2P = true;
		objNota2.visible = true;

		if (!NotasSound.isPlaying) {
            NotasSound.play();
        }
		
    } else {
        // Si no hay colisión, actualizar la posición anterior de Pompompurin
        previousPompompurinPosition10.copy(objPurin.position);
		interaccionNota2P = false;
		document.getElementById('mensajeColision4').style.display = 'none'; // Ocultar el mensaje de colisión
		objNota2.visible = false;
    }

}

///////////////NOTA3////////////////////////
let colisionCinnamorollNota3Activa = true; // Variable para controlar si la colisión entre Cinnamoroll y la Nota3 está activa o no
let interaccionNota3 = false;
// Función para verificar la colisión entre Cinnamoroll y Nota3
function checkCinnamorollNota3Collision() {
	if (colisionCinnamorollNota3Activa && checkCollision11(objCinna, objNota3)) {
		document.getElementById('mensajeColision5').style.display = 'block'; 
        objCinna.position.copy(previousCinnaPosition11);
		interaccionNota3 = true;
		objNota3.visible = true;

		if (!NotasSound.isPlaying) {
            NotasSound.play();
        }
		
    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition11.copy(objCinna.position);
		interaccionNota3 = false;
		document.getElementById('mensajeColision5').style.display = 'none'; // Ocultar el mensaje de colisión
		objNota3.visible = false;
    }

}

let colisionPurinllNota3Activa = true; // Variable para controlar si la colisión entre Purin y la Nota2 está activa o no
let interaccionNota3P = false;

// Función para verificar la colisión entre Purin y Nota3
function checkPurinNota3Collision() {
	if (colisionPurinllNota3Activa && checkCollision11(objPurin, objNota3)) {
		document.getElementById('mensajeColision6').style.display = 'block'; 
        objPurin.position.copy(previousPompompurinPosition11);
		interaccionNota3P = true;
		objNota3.visible = true;
		
		if (!NotasSound.isPlaying) {
            NotasSound.play();
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Pompompurin
        previousPompompurinPosition11.copy(objPurin.position);
		interaccionNota3P = false;
		document.getElementById('mensajeColision6').style.display = 'none'; // Ocultar el mensaje de colisión
		objNota3.visible = true;
    }

}

function checkCinnamorollKirbyCollision() {
    if (checkCollision19(objCinna, objKirby)) {
        // Si hay colisión, retroceder Cinnamoroll a su posición anterior
        objCinna.position.copy(previousCinnaPosition20);

        if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

        // Activar la invulnerabilidad temporalmente
        if (!isInvulnerableCinna) {
            isInvulnerableCinna = true;
            objKirby.visible = false; // Desaparecer la estrella

            // Restaurar la invulnerabilidad después de 5 segundos
            setTimeout(() => {
                isInvulnerableCinna = false;
            }, invulnerabilityDuration);
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition20.copy(objCinna.position);
    }
}

function checkPurinKirbyCollision() {
    if (checkCollision20(objPurin, objKirby2)) {
        // Si hay colisión, retroceder Cinnamoroll a su posición anterior
        objPurin.position.copy(previousPompompurinPosition20);

        if (!collisionSound.isPlaying) {
            collisionSound.play();
        }

        // Activar la invulnerabilidad temporalmente
        if (!isInvulnerablePurin) {
            isInvulnerablePurin = true;
            objKirby2.visible = false; // Desaparecer la estrella

            // Restaurar la invulnerabilidad después de 5 segundos
            setTimeout(() => {
                isInvulnerablePurin = false;
            }, invulnerabilityDuration);
        }

    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousPompompurinPosition20.copy(objPurin.position);
    }
}


////////////////ENEMIGO (Honguito1)//////////////////
// Variable para contar las colisiones
let collisionCount = 0;
let collisionCountP = 0;
// Variable para verificar si está en espera de la próxima colisión
let waitingForCollision = false;
let waitingForCollisionP = false;

// Función para reiniciar
function reiniciar() {

    window.location.href = "Nivel3.html"; // Redirige a nivel1.html al reiniciar
}

// Función para salir
function salir() {
    // Código para salir aquí
    window.location.href = "MenuInicial.html"; 
}

// Obtener referencia a los botones
const btnContinuar = document.getElementById("Continuar");
const btnSalir = document.getElementById("salir3");

// Agregar event listener al botón Continuar
btnContinuar.addEventListener("click", function() {
    window.location.href = "MenuInicial.html"; // Redirige a Nivel2.html al hacer clic en Continuar
});

// Agregar event listener al botón Salir
btnSalir.addEventListener("click", function() {
    window.location.href = "MenuInicial.html"; // Redirige a MenuInicial.html al hacer clic en Salir
});


// Función para verificar la colisión entre Cinnamoroll y ENEMIGO
function checkCinnamorollEnemigoCollision() {
	
    if (!waitingForCollision && !isInvulnerableCinna && checkCollision9(objCinna, objGhost)) {

		// Si está esperando una colisión, no hacer nada
		waitingForCollision = true;

        // Si hay colisión, retroceder Cinnamoroll a su posición anterior
        objCinna.position.copy(previousCinnaPosition9);
	
		// Incrementar el contador de colisiones
		collisionCount++;

		// Reproducir el sonido de pérdida de vida
        if (!AtaqueSound.isPlaying) {
            AtaqueSound.play();
        }

		// Cambiar la imagen de vidas según el contador
		switch (collisionCount) {
			case 1:
				document.getElementById('vidasImage').src = './Imagenes/vidas/vidas4.png';
				break;
			case 2:
				document.getElementById('vidasImage').src = './Imagenes/vidas/vidas3.png';
				break;
			case 3:
				document.getElementById('vidasImage').src = './Imagenes/vidas/vidas2.png';
					break;
			case 4:
				document.getElementById('vidasImage').src = './Imagenes/vidas/vidas1.png';
					break;
					case 5:
						document.getElementById('gameOver').style.display = 'block'; // Mostrar el contenedor de gameOver
						// Llamada a las funciones cuando se hace clic en los botones
						document.getElementById("reiniciar").addEventListener("click", reiniciar);
						document.getElementById("salir2").addEventListener("click", salir);
						break;
				
			default:
				break;
		}

		// Activar la invulnerabilidad temporalmente
	isInvulnerableCinna = true;
	setTimeout(() => {
		isInvulnerableCinna = false;
	}, invulnerabilityDuration);

		// Después de 3 segundos, permitir otra colisión
		setTimeout(() => {
			waitingForCollision = false;
		}, 3000);


    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousCinnaPosition9.copy(objCinna.position);
    }
}

// Función para verificar la colisión entre Cinnamoroll y ENEMIGO
function checkPompompurinEnemigoCollision() {
	
    if (!waitingForCollisionP && !isInvulnerablePurin && checkCollision9(objPurin, objGhost2)) {

		// Si está esperando una colisión, no hacer nada
		waitingForCollisionP = true;

        // Si hay colisión, retroceder Cinnamoroll a su posición anterior
        objPurin.position.copy(previousPompompurinPosition12);

		// Incrementar el contador de colisiones
		collisionCountP++;

		// Reproducir el sonido de pérdida de vida
        if (!AtaqueSound.isPlaying) {
            AtaqueSound.play();
        }

		// Cambiar la imagen de vidas según el contador
		switch (collisionCountP) {
			case 1:
				document.getElementById('vidasImage2').src = './Imagenes/vidas/vidas4.png';
				break;
			case 2:
				document.getElementById('vidasImage2').src = './Imagenes/vidas/vidas3.png';
				break;
			case 3:
				document.getElementById('vidasImage2').src = './Imagenes/vidas/vidas2.png';
					break;
			case 4:
				document.getElementById('vidasImage2').src = './Imagenes/vidas/vidas1.png';
					break;
			case 5:
						document.getElementById('gameOver').style.display = 'block'; // Mostrar el contenedor de gameOver
						// Llamada a las funciones cuando se hace clic en los botones
						document.getElementById("reiniciar").addEventListener("click", reiniciar);
						document.getElementById("salir2").addEventListener("click", salir);
						break;
					
					
			// Puedes añadir más casos según necesites
			default:
				break;
		}

		// Activar la invulnerabilidad temporalmente
		isInvulnerablePurin = true;
		setTimeout(() => {
			isInvulnerablePurin = false;
		}, invulnerabilityDuration);

		// Después de 3 segundos, permitir otra colisión
		setTimeout(() => {
			waitingForCollisionP = false;
		}, 3000);


    } else {
        // Si no hay colisión, actualizar la posición anterior de Cinnamoroll
        previousPompompurinPosition12.copy(objPurin.position);
    }
}


///////////////////////////////ENEMIGO PERSIGUE A JUGADOR//////////////////////////////

// Función para calcular la dirección hacia Cinnamoroll
function calculateDirection(source, target) {
    let direction = new THREE.Vector3();
    direction.subVectors(target.position, source.position).normalize();
    return direction;
}
// Función para calcular la dirección hacia Pompompurin
function calculateDirectionP(source, target) {
    let direction = new THREE.Vector3();
    direction.subVectors(target.position, source.position).normalize();
    return direction;
}

// Función para mover el fantasma hacia Cinnamoroll
function moveGhostTowardsCinnamoroll(ghost, cinnamoroll, speed) {
    let direction = calculateDirection(ghost, cinnamoroll);
    ghost.position.add(direction.multiplyScalar(speed));
}

// Función para mover el fantasma hacia Pompompurin
function moveGhostTowardsPompompurin(ghost, pompompurin, speed) {
    let direction = calculateDirectionP(ghost, pompompurin);
    ghost.position.add(direction.multiplyScalar(speed));
}

//////////////////////////////////////MENU DE PAUSA/////////////////////////////////////
let juegoPausado = false; // Variable para rastrear si el juego está pausado o no
let gameOver = false; // Variable para rastrear si el juego está pausado o no


document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'p') {
        juegoPausado = !juegoPausado; // Alternar el estado del juego pausado
        const oscurecimiento = document.getElementById('oscurecimiento');
        oscurecimiento.style.display = juegoPausado ? 'block' : 'none'; // Mostrar u ocultar el oscurecimiento
        const menuPausa = document.getElementById('pausa');
        menuPausa.style.display = juegoPausado ? 'block' : 'none'; // Mostrar u ocultar el menú de pausa
    }
});

document.getElementById("reanudar").addEventListener("click", function() {
  	juegoPausado = false; // Reanudar el juego
  	const oscurecimiento = document.getElementById('oscurecimiento');
  	oscurecimiento.style.display = 'none'; // Ocultar el oscurecimiento
  	const menuPausa = document.getElementById('pausa');
  	menuPausa.style.display = 'none'; // Ocultar el menú de pausa
});

document.getElementById("salir").addEventListener("click", function() {
  	// Aquí puedes agregar la funcionalidad para salir del juego o lo que sea necesario
  	window.location.href = "MenuInicial.html";
});

////////////////////////////////////////////////////////////////////////////////

// Agregar la siguiente variable para controlar la dirección de la animación
let movingUp = true;
let moveSpeed = 0.05; // Velocidad para la nota




function animate() {

    if (juegoPausado) {
		requestAnimationFrame(animate);
        return; // Salir de la función sin realizar ninguna animación

	}

	if(gameOver){
		requestAnimationFrame(animate);
        return; // Salir de la función sin realizar ninguna animación
	}

	// Mueve el fantasma hacia Cinnamoroll con una velocidad de 0.3
    moveGhostTowardsCinnamoroll(objGhost, objCinna, 0.02);
	moveGhostTowardsPompompurin(objGhost2, objPurin, 0.02);

    requestAnimationFrame(animate);

	// Mover la nota hacia arriba o abajo según la dirección
    if (movingUp) {
        objNota1.position.y += moveSpeed;
		objNota2.position.y += moveSpeed;
		objNota3.position.y += moveSpeed;

        if (objNota1.position.y >= 6) { // Cambia el límite según tus necesidades
            movingUp = false;
        }
		if (objNota2.position.y >= 6) { // Cambia el límite según tus necesidades
            movingUp = false;
        }
		if (objNota3.position.y >= 6) { // Cambia el límite según tus necesidades
            movingUp = false;
        }
	
    } else {
        objNota1.position.y -= moveSpeed;
		objNota2.position.y -= moveSpeed;
		objNota3.position.y -= moveSpeed;
		
        if (objNota1.position.y <= 5) { // Cambia el límite según tus necesidades
            movingUp = true;
        }
		if (objNota2.position.y <= 5) { // Cambia el límite según tus necesidades
            movingUp = true;
        }
		if (objNota3.position.y <= 5) { // Cambia el límite según tus necesidades
            movingUp = true;
        }
		
    }

	// Verificar colisión entre Cinnamoroll y Nota1
	checkCinnamorollNota1Collision();
	checkPurinNota1Collision();

	// Verificar colisión entre Cinnamoroll y Nota2
	checkCinnamorollNota2Collision();
	checkPurinNota2Collision();

	// Verificar colisión entre Cinnamoroll y Nota2
	checkCinnamorollNota3Collision();
	checkPurinNota3Collision();

	// tractor
	checkCinnamorollTractorCollision();
	checkCinnamorollCarretaCollision();
	checkCinnamorollCalaveraCollision() 
	checkCinnamorollHachaCollision();
	checkCinnamorollCampañaCollision();
	checkCinnamorollFogataCollision();

	checkPurinFogataCollision();
	checkCinnamorollCalaveraCollision();
	checkCinnamorollCampañaCollision();
	checkCinnamorollHachaCollision();
	

	checkCinnamorollEnemigoCollision();
	checkPompompurinEnemigoCollision();

    checkCinnamorollKirbyCollision();
	checkPurinKirbyCollision() ;

	// Particulas
	// Actualizar partículas
    updateParticles();


    renderer.render(scene, camera);
}






///////////////////////////////////////FUNCIONES PARA EL SCORE////////////////////////////////////

let scoreCinna = 0;
let scorePurin = 0;

function increaseScore(points) {
	scoreCinna += points;
	window.miVariable = scoreCinna;
	updateScoreDisplay(); // Llama a la función para actualizar el puntaje en pantalla
}

function increaseScore2(points) {
	scorePurin += points;
	window.miVariable2 = scorePurin;
	updateScoreDisplay2(); // Llama a la función para actualizar el puntaje en pantalla
}


/////////////////////////////////////FUNCION MOVIMIENTO////////////////////////////////

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const moveAmount = 1; // Ajusta la velocidad aquí

	if (juegoPausado) {
		
        return; // Salir de la función sin realizar ninguna animación

	}

    switch (key) {

        // Controles para Cinna
        case 'arrowup':
            objCinna.position.z -= moveAmount;
            rotateModel(objCinna, Math.PI); // Rotar hacia atrás
            break;
        case 'arrowdown':
            objCinna.position.z += moveAmount;
            rotateModel(objCinna, 0); // Rotar hacia adelante
            break;
        case 'arrowleft':
            objCinna.position.x -= moveAmount;
            rotateModel(objCinna, -Math.PI / 2); // Rotar hacia la izquierda
            break;
        case 'arrowright':
            objCinna.position.x += moveAmount;
            rotateModel(objCinna, Math.PI / 2); // Rotar hacia la derecha
            break;

		case 'm':
            if(interaccionNota1){
	        objNota1.visible = false; //desaparece la nota1
			colisionCinnamorollNota1Activa = false;
			

			increaseScore(170); //100 PUNTOS POR NOTA
			}else if(interaccionNota2){
				objNota2.visible = false; // Desaparece la nota2
				
				colisionCinnamorollNota2Activa = false;
				increaseScore(170); // 100 PUNTOS POR NOTA
			}else if(interaccionNota3){
				objNota3.visible = false; // Desaparece la nota2
				
				colisionCinnamorollNota3Activa = false;
				increaseScore(170); // 100 PUNTOS POR NOTA

				window.Modo = localStorage.getItem('Modo');

				if (window.Modo == 1) {
					if(scoreCinna > scorePurin){

						alert('GANA JUGADOR 1');
	
					}
				}else{
					if(window.Modo == 0){

						let cooperativo = 0;

						cooperativo = scoreCinna + scorePurin

						alert('PUNTUACION TOTAL ENTRE LOS DOS JUADORES: ' + cooperativo);
					}
				}

				document.getElementById('youWin').style.display = 'block'; // Mostrar el contenedor de gameOver
				// Llamada a las funciones cuando se hace clic en los botones
				
			}
			break;

        // Controles para Purin
		case 'e':
			if (interaccionNota1P) {
				objNota1.visible = false; // Desaparece la nota1
				colisionPurinllNota1Activa = false;
				
				increaseScore2(170); // 100 PUNTOS POR NOTA
			} else if (interaccionNota2P) {
				objNota2.visible = false; // Desaparece la nota2
				colisionPurinllNota2Activa = false;
				
				increaseScore2(170); // 100 PUNTOS POR NOTA
			}else if(interaccionNota3P){
				objNota3.visible = false; // Desaparece la nota2
				colisionPurinllNota3Activa = false;
				
				increaseScore2(170); // 100 PUNTOS POR NOTA

				if (window.Modo == 1) {
					if(scoreCinna < scorePurin){

						alert('GANA JUGADOR 2');
	
					}
				}else{
					if(window.Modo == 0){

						let cooperativo = 0;

						cooperativo = scoreCinna + scorePurin

						alert('PUNTUACION TOTAL ENTRE LOS DOS JUADORES: ' + cooperativo);
					}
				}

				document.getElementById('youWin').style.display = 'block'; // Mostrar el contenedor de gameOver
				// Llamada a las funciones cuando se hace clic en los botones
				
			}

		break;
        case 'w':
            objPurin.position.z -= moveAmount;
            rotateModel(objPurin, Math.PI); // Rotar hacia atrás
            break;
        case 's':
            objPurin.position.z += moveAmount;
            rotateModel(objPurin, 0); // Rotar hacia adelante
            break;
        case 'a':
            objPurin.position.x -= moveAmount;
            rotateModel(objPurin, -Math.PI / 2); // Rotar hacia la izquierda
            break;
        case 'd':
            objPurin.position.x += moveAmount;
            rotateModel(objPurin, Math.PI / 2); // Rotar hacia la derecha
            break;
        default:
            break;
    }

});

window.miVariable = scoreCinna;
window.miVariable2 = scorePurin;


function rotateModel(model, angle) {
    model.rotation.y = angle;
}

animate();

// Función para actualizar el puntaje en pantalla
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = scoreCinna; // Actualiza el contenido del elemento con el puntaje actual
}

// Llama a la función para actualizar el puntaje en pantalla cuando se carga la página PLAYER 1
updateScoreDisplay();

// Función para actualizar el puntaje en pantalla
function updateScoreDisplay2() {
    const scoreDisplay = document.getElementById('score2');
    scoreDisplay.textContent = scorePurin; // Actualiza el contenido del elemento con el puntaje actual
}

// Llama a la función para actualizar el puntaje en pantalla cuando se carga la página PLAYER 2
updateScoreDisplay2();





/////////////////////////////////FUNCION DEL TIEMPO ///////////////////////////////
function createTimer() {


    const timerDiv = document.createElement('div');
    timerDiv.style.position = 'fixed';
    timerDiv.style.top = '20px';
    timerDiv.style.right = '20px'; // Movido a la esquina superior derecha
    timerDiv.style.color = 'white';
    timerDiv.style.fontFamily = 'Arial, sans-serif';
    timerDiv.style.fontSize = '36px'; // Tamaño de fuente mantenido
    timerDiv.innerHTML = '03:00';

    document.body.appendChild(timerDiv);

    let totalSeconds = 180;

    const timerInterval = setInterval(() => {

		if(!juegoPausado){

			const minutes = Math.floor(totalSeconds / 60);
			const seconds = totalSeconds % 60;
	
			const displayMinutes = String(minutes).padStart(2, '0');
			const displaySeconds = String(seconds).padStart(2, '0');
	
			timerDiv.innerHTML = `${displayMinutes}:${displaySeconds}`;
	
			if (minutes === 2 && seconds === 45) {
				mtlGhost.load('./Modelos/ghost.mtl', function (materials){
					materials.preload();
					loaderGhost.setMaterials(materials);
					loaderGhost.load('./Modelos/ghost.obj',
					function(object){
						object.name="ghost";
						object.scale.copy(new THREE.Vector3(1,1,1));
						objGhost = object;
						object.position.set(10, 1, 13);
						//object.rotation.y = Math.PI / 6;
						scene.add(object);
						//arryModel.push(object);
					});
				
					console.log(materials);
				});

				mtlGhost2.load('./Modelos/ghost.mtl', function (materials){
					materials.preload();
					loaderGhost2.setMaterials(materials);
					loaderGhost2.load('./Modelos/ghost.obj',
					function(object){
						object.name="ghost2";
						object.scale.copy(new THREE.Vector3(1,1,1));
						objGhost2 = object;
						object.position.set(10, 1, 13);
						//object.rotation.y = Math.PI / 6;
						scene.add(object);
						//arryModel.push(object);
					});
				
					console.log(materials);
				});
			}
	
			/*
			if (minutes === 2 && seconds === 45) {
				// Hacer que el objeto "Pozo" desaparezca
				if (objPozo) {
					objPozo.scale.set(0, 0, 0);
				}
			}
	
			if (minutes === 2 && seconds === 45) {
				// Hacer que el objeto "Pozo" vuelva a aparecer y se mueva ligeramente hacia enfrente
				if (objPozo) {
					objPozo.scale.set(0.8, 0.8, 0.8); // Restablecer la escala original
					objPozo.position.set(10, 5, 3);
		   
				}
			}
	
			*/
	
			totalSeconds--;
	
			if (totalSeconds < 0) {
				clearInterval(timerInterval);
				timerDiv.innerHTML = 'Tiempo agotado';
				document.getElementById('gameOver').style.display = 'block'; // Mostrar el contenedor de gameOver
			}

		}

      
    }, 1000);
}

createTimer(); // Llamar a la función para crear el contador de tiempo




// Función para actualizar las partículas
function updateParticles() {
    const positions = particleSystem.geometry.attributes.position.array;
    const velocity = particleSystem.userData.velocity;

    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocity[i];
        positions[i + 1] += velocity[i + 1];
        positions[i + 2] += velocity[i + 2];

        // Reiniciar partículas si se alejan demasiado del centro
        if (positions[i] > 1 || positions[i] < -1 || positions[i + 1] > 1 || positions[i + 1] < -1 || positions[i + 2] > 1 || positions[i + 2] < -1) {
            positions[i] = 0;
            positions[i + 1] = 0;
            positions[i + 2] = 0;
        }
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
}