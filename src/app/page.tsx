import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-stone-50 text-stone-800">
      <header className="p-4 md:p-6 border-b border-stone-200 sticky top-0 bg-stone-50 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-3xl font-bold font-playfair text-stone-800 hover:text-stone-600 transition-colors mb-2">
              Alejandro José Ontiveros Pacheco
            </Link>
            <nav className="space-x-6 text-lg">
              <Link href="/about" className="hover:text-stone-600 transition-colors">
                About
              </Link>

              <Link href="/contact" className="hover:text-stone-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 md:p-6 max-w-6xl mx-auto w-full">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">Fotoperiodismo en Acción</h1>
          <p className="text-xl text-center text-stone-600 max-w-2xl mx-auto">Capturando historias que importan, un frame a la vez.</p>
        </section>

        <section className="mb-12">
          {/* <h2 className="text-3xl font-playfair font-bold mb-6 border-b border-stone-200 pb-2">Proyectos Destacados</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "La Ciudad Despierta", desc: "Un vistazo a la vida nocturna urbana", img: "/images/myTown/_MG_4698.jpg"},
              { title: "Rostros del Cambio", desc: "Retratos de activistas locales", img: "/images/myTown/_MG_4717.jpg" },
              { title: "Naturaleza Resiliente", desc: "Ecosistemas adaptándose al cambio climático", img: "/images/myTown/_MG_4730.jpg" },
              { title: "Sabores de Casa", desc: "Tradiciones culinarias familiares", img: "/images/myTown/_MG_4753.jpg" },
              { title: "Oficios Olvidados", desc: "Artesanos manteniendo vivas las tradiciones", img: "/images/myTown/_MG_5005.jpg" },
              { title: "Ritmos de la Calle", desc: "Músicos callejeros y su impacto en la comunidad", img: "/images/myTown/_MG_5030.jpg" },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <div className="mt-2">
                  <h3 className="font-playfair font-bold text-xl">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-playfair font-bold mb-6 border-b border-stone-200 pb-2">Últimas Publicaciones</h2>
          <div className="space-y-6">
            {[
              { title: "El poder de la imagen en el periodismo moderno", date: "15 de Mayo, 2023" },
              { title: "Ética en la fotografía documental: Dónde trazar la línea", date: "3 de Abril, 2023" },
              { title: "Técnicas de composición para contar historias visuales", date: "22 de Marzo, 2023" },
            ].map((post, index) => (
              <article key={index} className="border-l-4 border-stone-300 pl-4 hover:border-stone-600 transition-colors">
                <h3 className="font-playfair font-bold text-xl mb-1">{post.title}</h3>
                <p className="text-stone-600">{post.date}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="p-4 md:p-6 text-center text-sm border-t border-stone-200 bg-stone-100">
        <p className="font-lora mb-2">&copy; {new Date().getFullYear()} Alejandro José Ontiveros Pacheco. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/_aj.op/" target='_blank' className="text-stone-600 hover:text-stone-800 transition-colors">Instagram</a>
          <a href="https://x.com/_alegandrox" target='_blank' className="text-stone-600 hover:text-stone-800 transition-colors">X</a>
          <a href="https://www.linkedin.com/in/alejandro-jos%C3%A9-ontiveros-pacheco-483210122/" target='_blank' className="text-stone-600 hover:text-stone-800 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}