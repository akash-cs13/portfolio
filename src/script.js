import './style.css'
import * as THREE from 'three'

import gsap from "gsap"

//Fancy js
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const hackerAnimation = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index]
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iterations >= event.target.dataset.value.length) clearInterval(interval);
        iterations += 1 / 3;

    }, 30)
}

const hackerAnimation2 = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.innerText = event.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return event.dataset.value[index]
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iterations >= event.dataset.value.length) clearInterval(interval);
        iterations += 1 / 3;

    }, 30)
}

document.querySelector("#myname1").onmouseover = event => {
    hackerAnimation(event)
}

document.querySelector("#myname2").onmouseover = event => {
    hackerAnimation(event)
}
document.querySelector("#myname3").onmouseover = event => {
    hackerAnimation(event)
}
document.querySelector("#myname4").onmouseover = event => {
    hackerAnimation(event)
}

document.querySelector("#wave").onclick = () => {
    document.querySelector("#wave").classList.toggle("wave")
}



/**
 * Debug
 */


const parameters = {
    materialColor: '#1faec0'
}



/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()




const textureLoader = new THREE.TextureLoader()
const gradientTexture1 = textureLoader.load('textures/gradients/3.jpg')
gradientTexture1.magFilter = THREE.NearestFilter
/**
 * Test cube
 */
const material3 = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture1
})

const gradientTexture = textureLoader.load('textures/gradients/5.jpg')
gradientTexture.magFilter = THREE.NearestFilter
/**
 * Test cube
 */
const material5 = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})

const objectsDistance = 4


const mesh1 = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1, 0),
    material5
)
const mesh2 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material3
)
const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    material3
)

mesh1.position.y = - objectsDistance * 0
mesh2.position.y = - objectsDistance * 1
mesh3.position.y = - objectsDistance * 2

let scaleValue = 2;
if (window.innerWidth <= 768) {
    scaleValue = 0.5
}



mesh1.position.x = - scaleValue
mesh2.position.x = scaleValue
mesh3.position.x = - scaleValue


scene.add(mesh1, mesh2, mesh3)
const sectionMeshes = [mesh1, mesh2, mesh3]


const particlesCount = 200
const positions = new Float32Array(particlesCount * 3)

for (let i = 0; i < particlesCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    sizeAttenuation: textureLoader,
    size: 0.03
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)



const directionalLight = new THREE.DirectionalLight("#ffffff", 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera

const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


let scrollY = window.scrollY
let currentSection = 0


window.addEventListener("scroll", async () => {
    scrollY = window.scrollY

    const newSection = Math.round(scrollY / sizes.height)
    if (newSection != currentSection) {
        currentSection = newSection
        if (newSection == 0) {
            const event1 = await document.querySelector("#myname1")
            const event2 = await document.querySelector("#myname2")
            hackerAnimation2(event1)
            hackerAnimation2(event2)
        }
        if (newSection == 1) {
            const event3 = await document.querySelector("#myname3")
            hackerAnimation2(event3)

        }
        if (newSection == 2) {
            const event4 = await document.querySelector("#myname4")
            hackerAnimation2(event4)
        }


        // gsap.to(
        //     sectionMeshes[currentSection].rotation, {
        //     duration: 1.5,
        //     ease: 'power2.inOut',
        //     x: '+=6',
        //     y: '+=3',
        //     z: '+=1.5',
        // }
        // )
    }
})


const cursor = { x: 0, y: 0 }
window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

window.addEventListener("deviceorientation", (event) => {
    cursor.x = event.alpha / sizes.width - 0.5
    cursor.y = event.beta / sizes.width - 0.5

})



/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0
let changeSize = 2

const tick = () => {


    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    camera.position.y = - scrollY / sizes.height * objectsDistance

    const parallaxX = cursor.x
    const parallaxY = - cursor.y

    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 0.8 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 0.8 * deltaTime



    for (const mesh of sectionMeshes) {
        mesh.rotation.x += deltaTime * 0.1
        mesh.rotation.y += deltaTime * 0.12
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()