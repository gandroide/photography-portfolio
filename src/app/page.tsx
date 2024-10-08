import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-serif bg-stone-50 text-stone-800">
      <header className="p-2 md:p-4 border-b border-stone-200 sticky top-0 bg-stone-50 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-lg font-bold font-playfair text-stone-800 hover:text-stone-600 transition-colors mr-2">
            <span className="block md:hidden">Alejandro Ontiveros</span>
            <span className="hidden md:block">Alejandro José Ontiveros Pacheco</span>
            </Link>
            <nav className="space-x-6 text-lg flex justify-center items-center">
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
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-center">Photography</h1>
          <p className="text-xl text-justify text-stone-600  mx-auto">Photography is essentially about relationships.</p>
          <p className="text-xl text-justify text-stone-600  mx-auto">Between light, shadows, and colors, it’s the relationship between the photographer and the model, between the camera and the scene, and even the relationship between what we see and what we feel.</p>
        </section>

        <section className="mb-12">
          {/* <h2 className="text-3xl font-playfair font-bold mb-6 border-b border-stone-200 pb-2">Proyectos Destacados</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "La Ciudad Despierta", desc: "Un vistazo a la vida nocturna urbana", img: "/images/myTown/_MG_4698.jpg", link: "/projects/myTown"},
              { title: "Rostros del Cambio", desc: "Retratos de activistas locales", img: "/images/myTown/_MG_4717.jpg", link: "/projects/myTown" },
              { title: "Naturaleza Resiliente", desc: "Ecosistemas adaptándose al cambio climático", img: "/images/myTown/_MG_4730.jpg", link: "/projects/myTown" },
              { title: "Sabores de Casa", desc: "Tradiciones culinarias familiares", img: "/images/myTown/_MG_4753.jpg", link: "/projects/myTown" },
              { title: "Oficios Olvidados", desc: "Artesanos manteniendo vivas las tradiciones", img: "/images/myTown/_MG_5005.jpg", link: "/projects/myTown" },
              { title: "Ritmos de la Calle", desc: "Músicos callejeros y su impacto en la comunidad", img: "/images/myTown/_MG_5030.jpg", link: "/projects/myTown" },
            ].map((item, index) => (
                  <a key={index} href={item.link}>
              <div className="group">
                <div className="aspect-square relative overflow-hidden cursor-pointer">
                  <Image
                    priority
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-300 group-hover:scale-105"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <div className="mt-2 ">
                  <h3 className="font-playfair font-bold text-xl">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              </div>
                    </a>
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
          <a href="https://x.com/_alegandrox" target='_blank' className="text-stone-600 hover:text-stone-800 transition-colors">x</a>
          <a href="https://www.linkedin.com/in/alejandro-jos%C3%A9-ontiveros-pacheco-483210122/" target='_blank' className="text-stone-600 hover:text-stone-800 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}