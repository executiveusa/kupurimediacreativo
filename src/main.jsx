import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const ES = {
  nav: ["Trabajo", "Estudio", "Método", "Contacto"],
  eyebrow: "Ciudad de México ↔ Seattle",
  heroA: "Primero decidimos",
  heroB: "qué debe cambiar.",
  heroC: "Después lo hacemos visible.",
  intro: "Kupuri Media es un estudio de estrategia creativa dirigido por Ivette Milo. Construimos marcas, productos y experiencias con una idea clara antes de abrir una herramienta.",
  work: "Trabajo seleccionado",
  workNote: "Mostramos lo que existe. Lo que sigue en proceso se nombra como proceso.",
  methodTitle: "No empezamos por el logo.",
  methodBody: "Empezamos por la decisión que el negocio necesita tomar. Después convertimos esa decisión en lenguaje, identidad, producto, campaña y experiencia.",
  methodSteps: ["Negocio", "Persona", "Decisión", "Sistema", "Expresión", "Lectura"],
  servicesTitle: "Lo que hacemos",
  services: [
    ["01", "Estrategia de marca", "Posicionamiento, arquitectura, narrativa y oferta."],
    ["02", "Identidad", "Sistemas visuales y verbales que sobreviven a una campaña."],
    ["03", "Experiencias digitales", "Sitios, productos y experiencias interactivas."],
    ["04", "Campañas y cultura", "Ideas, contenido y producción con contexto real."],
    ["05", "Sistemas creativos", "La infraestructura que permite crear mejor y con continuidad."]
  ],
  studioTitle: "Un estudio pequeño con una mesa grande.",
  studioBody: "La dirección creativa permanece humana. El estudio combina estrategia, diseño, producción y software según lo que cada proyecto necesite. Las herramientas cambian; el criterio no se delega.",
  founder: "Ivette Milo — Fundadora y estratega creativa",
  contactTitle: "¿Qué necesita cambiar?",
  contactBody: "Cuéntanos el problema antes de pedirnos una solución.",
  contactStatus: "Vista previa: el canal de contacto se conectará y probará antes del lanzamiento público.",
  lang: "EN"
};

const EN = {
  nav: ["Work", "Studio", "Method", "Contact"],
  eyebrow: "Mexico City ↔ Seattle",
  heroA: "First we decide",
  heroB: "what needs to change.",
  heroC: "Then we make it visible.",
  intro: "Kupuri Media is a creative strategy studio led by Ivette Milo. We build brands, products and experiences with a clear idea before opening a tool.",
  work: "Selected work",
  workNote: "We show what exists. Work in progress is named as work in progress.",
  methodTitle: "We do not start with the logo.",
  methodBody: "We start with the decision the business needs to make. Then we turn that decision into language, identity, product, campaign and experience.",
  methodSteps: ["Business", "People", "Decision", "System", "Expression", "Readout"],
  servicesTitle: "What we do",
  services: [
    ["01", "Brand strategy", "Positioning, architecture, narrative and offer."],
    ["02", "Identity", "Visual and verbal systems built to outlast a campaign."],
    ["03", "Digital experiences", "Websites, products and interactive experiences."],
    ["04", "Campaigns & culture", "Ideas, content and production grounded in context."],
    ["05", "Creative systems", "The infrastructure that helps teams create better, consistently."]
  ],
  studioTitle: "A small studio with a big table.",
  studioBody: "Creative direction stays human. The studio combines strategy, design, production and software according to what each project actually needs. Tools change; judgment is not delegated.",
  founder: "Ivette Milo — Founder & Creative Strategist",
  contactTitle: "What needs to change?",
  contactBody: "Tell us the problem before asking for a solution.",
  contactStatus: "Preview: the contact channel will be connected and tested before public launch.",
  lang: "ES"
};

const projects = [
  {name:"Kupuri OMA", type:"Producto Kupuri · Diseño / Producto", status:"En desarrollo", href:null, tone:"violet"},
  {name:"Recetario Vivo", type:"Producto de impacto · Experiencia digital", status:"Vista previa", href:"https://kupuri-recetario-vivo.vercel.app", tone:"orange"},
  {name:"DOS A", type:"Colaboración · Marca / Experiencia digital", status:"Caso en preparación", href:"https://dos2a.vercel.app", tone:"black"},
  {name:"Querencia", type:"Producto Kupuri · Viajes / Tecnología", status:"En desarrollo", href:null, tone:"blue"}
];

function App(){
  const english = window.location.pathname.startsWith("/en");
  const c = english ? EN : ES;
  const root = useRef(null);

  useEffect(()=>{
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(()=>{
      gsap.from(".hero-line span",{yPercent:110,stagger:.08,duration:1.05,ease:"power4.out"});
      gsap.utils.toArray(".reveal").forEach((el)=>{
        gsap.from(el,{y:48,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%"}});
      });
      gsap.to(".hero-media video",{scale:1.06,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
    },root);
    return ()=>ctx.revert();
  },[]);

  return <div ref={root} className="site">
    <a className="skip" href="#main">{english?"Skip to content":"Saltar al contenido"}</a>
    <header className="header">
      <a className="wordmark" href={english?"/en":"/"} aria-label="Kupuri Media home">
        <img src="/assets/mark.png" alt="" />
        <span>KUPURI MEDIA</span>
      </a>
      <nav aria-label={english?"Primary":"Principal"}>
        {c.nav.map((item,i)=><a key={item} href={["#trabajo","#estudio","#metodo","#contacto"][i]}>{item}</a>)}
      </nav>
      <a className="lang" href={english?"/":"/en"}>{c.lang}</a>
    </header>

    <main id="main">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 aria-label={c.heroA+" "+c.heroB+" "+c.heroC}>
            <span className="hero-line"><span>{c.heroA}</span></span>
            <span className="hero-line"><span>{c.heroB}</span></span>
            <span className="hero-line serif"><span>{c.heroC}</span></span>
          </h1>
          <p className="intro">{c.intro}</p>
        </div>
        <div className="hero-media" aria-hidden="true">
          <video autoPlay muted loop playsInline poster="/media/hero-poster.jpg">
            <source src="/media/hero-loop-720.webm" type="video/webm" />
            <source src="/media/hero-loop-720.mp4" type="video/mp4" />
          </video>
          <span className="media-index">KM / 26</span>
        </div>
      </section>

      <section className="work" id="trabajo">
        <div className="section-head reveal">
          <p>01</p><h2>{c.work}</h2><p>{c.workNote}</p>
        </div>
        <div className="project-list">
          {projects.map((p,i)=>{
            const Tag=p.href?"a":"article";
            return <Tag className={"project reveal "+p.tone} key={p.name} {...(p.href?{href:p.href,target:"_blank",rel:"noreferrer"}:{})}>
              <div className="project-meta"><span>0{i+1}</span><span>{p.type}</span></div>
              <h3>{p.name}</h3>
              <div className="project-foot"><span>{p.status}</span><span aria-hidden="true">{p.href?"↗":"—"}</span></div>
            </Tag>
          })}
        </div>
      </section>

      <section className="method" id="metodo">
        <div className="method-copy reveal">
          <p className="section-number">02 / {english?"Method":"Método"}</p>
          <h2>{c.methodTitle}</h2>
          <p>{c.methodBody}</p>
        </div>
        <ol className="method-steps">
          {c.methodSteps.map((s,i)=><li className="reveal" key={s}><span>0{i+1}</span><strong>{s}</strong></li>)}
        </ol>
      </section>

      <section className="services">
        <div className="section-head reveal"><p>03</p><h2>{c.servicesTitle}</h2><p></p></div>
        <div className="service-list">
          {c.services.map(([n,t,d])=><div className="service reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="studio" id="estudio">
        <div className="studio-statement reveal">
          <p className="section-number">04 / Studio</p>
          <h2>{c.studioTitle}</h2>
          <p>{c.studioBody}</p>
        </div>
        <div className="founder reveal">
          <div className="founder-mark"><img src="/assets/mark.png" alt="" /></div>
          <p>{c.founder}</p>
        </div>
      </section>

      <section className="contact" id="contacto">
        <p className="section-number reveal">05 / Contacto</p>
        <h2 className="reveal">{c.contactTitle}</h2>
        <div className="contact-row reveal">
          <p>{c.contactBody}</p>
          <button type="button" disabled>{english?"Start a conversation":"Iniciar conversación"}</button>
        </div>
        <p className="preview-note reveal">{c.contactStatus}</p>
      </section>
    </main>

    <footer>
      <p>KUPURI MEDIA</p><p>CDMX ↔ SEA</p><p>© 2026</p>
    </footer>
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);
