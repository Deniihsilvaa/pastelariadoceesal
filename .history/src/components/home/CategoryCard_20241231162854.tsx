interface CategoryCardProps {
    name: string;
    image: string;
  }
  
  export function CategoryCard({ name, image }: CategoryCardProps) {
    return (
      <div className="relative cursor-pointer group">
        <div className="overflow-hidden aspect-square rounded-2xl">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <img src={image} alt={name} className="object-cover w-full h-32 rounded-lg" />

        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent rounded-2xl">
          <h3 className="p-4 text-xl font-semibold text-white">{name}</h3>
        </div>
      </div>
    );
  }