//import * as THREE from "three";
import * as THREE from "../node_modules/three/src/Three.js";
//import {OrbitControls} from "../../node_modules/three/examples/jsm/controls/OrbitControls.js";

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const axisHelper = new THREE.AxesHelper(5);
scene.add(axisHelper);

camera.position.set(0, 2, 5);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

renderer.render(scene, camera);