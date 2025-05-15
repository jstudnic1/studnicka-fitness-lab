
import React from "react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 mýtů o budování svalové hmoty",
    excerpt: "Mnoho lidí věří několika zažitým mýtům o posilování. Pojďme si je vyvrátit a ukázat, jak to funguje doopravdy.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "15. 4. 2023"
  },
  {
    id: 2,
    title: "Jak sestavit jídelníček pro hubnutí",
    excerpt: "Správné stravování je klíčem k úspěšnému hubnutí. Naučím vás, jak si sestavit vyvážený jídelníček pro zdravý úbytek váhy.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "28. 3. 2023"
  },
  {
    id: 3,
    title: "Nejefektivnější kardio pro spalování tuku",
    excerpt: "Ne všechny kardio aktivity jsou si rovné, když jde o spalování tuků. Zjistěte, které jsou ty nejúčinnější.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "10. 3. 2023"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="container">
      <h2 className="section-title reveal">Blog & Tipy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="card hover:scale-[1.02] reveal">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm text-gray-500 mb-2">{post.date}</div>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <a href="#" className="text-marek-cta font-medium hover:underline">
              Číst více
            </a>
          </article>
        ))}
      </div>
      <div className="text-center mt-10 reveal">
        <a href="#" className="btn bg-white text-marek-text border border-gray-200 hover:bg-gray-50">
          Zobrazit všechny články
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
