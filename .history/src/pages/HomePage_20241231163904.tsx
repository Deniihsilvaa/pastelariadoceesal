// src/pages/HomePage.tsx
import React from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { CategoryCard } from "../components/home/CategoryCard";
import pastel1 from "../assets/pastel1.jpeg";
import pastel2 from "../assets/pastel2.jpeg";
import pastel3 from "../assets/pastel3.jpeg";
import pasteldoce from "../assets/pasteldoce.jpg";

const categories = [
  { name: "Simples", image: pastel1 },
  { name: "2 sabores", image: pastel2 },
  { name: "Especiais", image: pastel3 },
  { name: "Doce", image: pasteldoce },
];

// Configuração do carrossel de destaques
const featuredPastels = [
  { name: "Especial de Carne", image: pastel1 },
  { name: "Pastel de Queijo", image: pastel2 },
  { name: "Pastel Doce", image: pasteldoce },
];

export function HomePage() {
  const itemTemplate = (item: any) => {
    return (
      <div className="p-4 text-center bg-white rounded-lg shadow-md">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-48 mb-4 rounded-lg"
        />
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <Button label="Peça agora" className="mt-4" />
      </div>
    );
  };

  return (
    <div className="px-4 pt-20 mx-auto max-w-7xl">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-red-500 rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-300 opacity-90"></div>
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white">
            Sabor em Cada Mordida
          </h1>
          <p className="mb-6 text-lg text-white">
            Peça agora e receba em minutos com entrega grátis
          </p>
          <div className="inline-flex items-center p-1 bg-white rounded-full shadow-lg">
            <input
              type="text"
              placeholder="Busque seu pastel favorito..."
              className="w-full px-6 py-3 text-sm bg-transparent border-none focus:outline-none"
            />
            <Button
              label="Buscar"
              icon="pi pi-search"
              className="px-6 py-3 bg-red-500 border-0 rounded-full hover:bg-red-600"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Categorias</h2>
          <Button label="Ver Todas" className="text-red-500 p-button-text" />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="transition-transform hover:scale-105"
            >
              <CategoryCard name={category.name} image={category.image} />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Restaurants (Carousel) */}
      <section className="py-12">
        <h2 className="mb-6 text-3xl font-bold">Destaques</h2>
        <Carousel
          value={featuredPastels}
          itemTemplate={itemTemplate}
          numVisible={3}
          numScroll={1}
          autoplayInterval={3000}
        />
      </section>
    </div>
  );
}
