import React, {useEffect, useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import * as THREE from 'three';
import avatar from '../../public/avatar.webp';

const ShortDescription = () => {
  const t = useTranslations('ShortDescription');
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mousePosition = useRef({x: 0, y: 0});
  const targetMousePosition = useRef({x: 0, y: 0});
  let animationId = null;
  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(144, 150);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const texture = new THREE.TextureLoader().load(avatar.src);

    const uniforms = {
      uTexture: {value: texture},
      uMouse: {value: new THREE.Vector2(0.0, 0.0)},
      uPrevMouse: {value: new THREE.Vector2(0.0, 0.0)},
      uAberrationIntensity: {type: 'f', value: 0.0},
      uAspect: {value: 1.0}
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform vec2 uPrevMouse;
        uniform float uAberrationIntensity;
        uniform float uAspect;
        varying vec2 vUv;

        void main() {
          vec2 pixelatedUV = floor(vUv * 20.0) / 20.0;
          vec2 centerUV = pixelatedUV + vec2(1.0 / 20.0);
          vec2 direction = uMouse - centerUV;
          float distance = length(direction);
          float strength = smoothstep(0.3, 0.0, distance);

          vec2 offsetUV = vUv - direction * strength * 0.2;
          vec4 color = texture2D(uTexture, offsetUV);
          gl_FragColor = color;
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      targetMousePosition.current.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.current.y =
        1 - (event.clientY - rect.top) / rect.height;
    };

    const updateMousePosition = () => {
      mousePosition.current.x +=
        (targetMousePosition.current.x - mousePosition.current.x) * 0.1;
      mousePosition.current.y +=
        (targetMousePosition.current.y - mousePosition.current.y) * 0.1;

      if (uniforms.uMouse) {
        uniforms.uMouse.value.set(
          mousePosition.current.x,
          mousePosition.current.y
        );
      }
    };

    const animate = () => {
      if (isHovered) {
        uniforms.uAberrationIntensity.value = Math.min(
          uniforms.uAberrationIntensity.value + 0.05,
          1.0
        );
      } else {
        uniforms.uAberrationIntensity.value = Math.max(
          uniforms.uAberrationIntensity.value - 0.05,
          0.0
        );
      }

      updateMousePosition();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, [isHovered]);

  return (
    <section className="mb-8">
      <div className="flex flex-col items-center md:flex-row md:items-start md:gap-6">
        <div className="mb-4 md:mb-0">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full" />
            <div className="relative w-31 h-31 md:w-31 md:h-31 rounded-full overflow-hidden cursor-pointer">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          {t.rich('aboutMeDescription', {
            heading: (chunks) => (
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
                {chunks}
              </h1>
            ),
            description: (chunks) => (
              <p className="font-light text-black-400 dark:text-zinc-300 text-sm md:text-base mt-2">
                {chunks}
              </p>
            ),
            location: (chunks) => (
              <span className="mt-2 text-sm md:text-base font-light inline-flex items-center text-black-400 dark:text-zinc-200">
                {chunks}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ShortDescription;
