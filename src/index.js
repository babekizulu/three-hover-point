//libraries
import * as THREE from 'three';
//styling
import './scss/App.scss';
//dom elements
const infoDiv = document.querySelector('#info');
const sceneDiv = document.querySelector('#scene');
const pointRef = document.querySelector('#pointRef');
//instantiate a scene
const scene = new THREE.Scene();
const w = window.innerWidth;
const h = window.innerHeight;
const aspectRatio = w/h;
const fieldOfView = 75;
const nearClip = 0.1;
const farClip = 1000;
//instantiate a camera
const camera = new THREE.PerspectiveCamera(fieldOfView, 2, nearClip, farClip);
//instantiate a renderer
const renderer = new THREE.WebGLRenderer();
const canvas = renderer.domElement;
//set three display size
renderer.setSize(w, h)
sceneDiv.appendChild(canvas);
//create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
camera.position.z = 5;

//create blue material for the line
const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
//create points for line
const points = [];
points.push(new THREE.Vector3(-1, 1, 0));
points.push(new THREE.Vector3(0, 1, 0));
points.push(new THREE.Vector3(1, 1, 0));
const pointsGeometry = new THREE.BufferGeometry().setFromPoints(points);
//create a line by joining points
const line = new THREE.Line(pointsGeometry, lineMaterial);
scene.add(cube, line);

//show text on cube hover
let isRotating = true;
pointRef.addEventListener('mouseenter', () => {
    isRotating = false;
    infoDiv.innerText = 'Display Metadata';
});
pointRef.addEventListener('mouseleave', () => {
    isRotating = true;
    infoDiv.innerText = '';
});

//rendering loop
const animate = () => {
    if(isRotating) {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    } else {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
}

animate();