'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/myTown/_MG_4698.jpg',
  '/images/myTown/_MG_4717.jpg',
  '/images/myTown/_MG_4730.jpg',
  '/images/myTown/_MG_5005.jpg',
  '/images/myTown/_MG_5030.jpg',
];

export default function MyTown() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className=" flex flex-col font-serif bg-stone-50 text-stone-800 ">
      <main className="flex-grow p-4 md:p-6 max-w-6xl mx-auto w-full h-screen">
        <Link
          href="/"
          className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors mb-6"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
          La Ciudad Despierta
        </h1>
        <div className="mb-8 relative w-full h-screen">
          <div className="aspect-w-16 aspect-h-9 ">
            <Image
              src={images[currentImage]}
              alt={`Imagen ${currentImage + 1} de La Ciudad Despierta`}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6 text-stone-800" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6 text-stone-800" />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="prose prose-stone max-w-none">
          <p className="text-xl mb-4">
            "La Ciudad Despierta" es un viaje visual a través de la vida
            nocturna urbana, capturando la esencia y la energía de la ciudad
            cuando el sol se pone y las luces se encienden.
          </p>
          <p className="mb-4">
            Este proyecto explora los contrastes y la vitalidad de la vida
            nocturna en la ciudad. Desde los bulliciosos bares y restaurantes
            hasta los tranquilos rincones iluminados por farolas, cada imagen
            cuenta una historia única sobre la experiencia urbana después del
            anochecer.
          </p>
          <p className="mb-4">
            A través de esta serie, buscamos revelar la belleza oculta en los
            momentos cotidianos de la noche: los trabajadores nocturnos, los
            noctámbulos, los artistas callejeros y todos aquellos que dan vida a
            la ciudad cuando la mayoría duerme.
          </p>
          <p>
            "La Ciudad Despierta" no solo documenta la actividad nocturna, sino
            que también reflexiona sobre temas más amplios como la soledad
            urbana, la comunidad, y cómo la ciudad se transforma y adquiere una
            nueva identidad bajo el manto de la noche.
          </p>
        </div>
      </main>
    </div>
  );
}
