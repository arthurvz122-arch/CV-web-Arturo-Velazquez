import React from 'react'
import avLogo from './img/logo_AV_transparente_blanco.png'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Blocks, BriefcaseBusiness, Code2, Database, Download, Github, GraduationCap, Layers3, Linkedin, Mail, MapPin, Menu, PanelsTopLeft, Phone, Server, Sparkles, Terminal, Wrench, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { SiAndroidstudio, SiAngular, SiClaude, SiDjango, SiFigma, SiFlask, SiGit, SiGithub, SiHtml5, SiJira, SiJavascript, SiKotlin, SiLaravel, SiMysql, SiPhp, SiPostgresql, SiPostman, SiPython, SiReact, SiTailwindcss, SiTalend, SiTypescript } from 'react-icons/si'
import { DiCss3, DiJava, DiMsqlServer } from 'react-icons/di'
import { FaFileExcel, FaFilePowerpoint, FaFileWord } from 'react-icons/fa'
import { RiOpenaiFill } from 'react-icons/ri'
import { VscVscode } from 'react-icons/vsc'

const projects = [
  { n: '01', title: 'Digitalización de trámites', client: 'DIF Almoloya de Juárez', date: 'ENE — AGO 2026', icon: Database, desc: 'Sistema de inicio a fin para digitalizar apoyos a adultos mayores: expediente, validación de documentos y generación de reportes PDF con vista previa.', tags: ['Python', 'Flask', 'Bases de datos'], tone: 'dark' },
  { n: '02', title: 'Foster', client: 'Tienda digital & API de tiquetera', date: 'SEP — DIC 2025', icon: Code2, desc: 'Catálogo y experiencia de compra para una marca de ropa, con pasarela de pagos y API de tickets de venta.', tags: ['React', 'PHP', 'SQL Server', 'Django REST'], tone: 'light' },
  { n: '03', title: 'Space Runner', client: 'Videojuego móvil', date: 'SEP — DIC 2025', icon: Sparkles, desc: 'Arcade para Android con controles por sensores, puntuación, vidas, ranking y una tienda para desbloquear contenido.', tags: ['Kotlin', 'Java', 'Android'], tone: 'light' },
]
const skills = [
  { title: 'Frontend', number: '01', icon: PanelsTopLeft, note: 'Interfaces claras, pensadas para las personas.', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Tailwind CSS', 'Figma'] },
  { title: 'Backend', number: '02', icon: Server, note: 'Lógica y funcionalidades de principio a fin.', items: ['Python', 'PHP', 'Java', 'Kotlin'] },
  { title: 'Bases de datos', number: '03', icon: Database, note: 'Datos organizados, conectados y útiles.', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Talend · ETL/ELT'] },
  { title: 'Frameworks', number: '04', icon: Blocks, note: 'Herramientas para construir con estructura.', items: ['Django', 'Flask', 'Laravel', 'Django REST Framework'] },
  { title: 'Herramientas', number: '05', icon: Wrench, note: 'Tecnología que acompaña cada etapa.', items: ['Claude', 'Codex', 'Power BI', 'Jira', 'VS Code', 'Git', 'GitHub', 'Postman', 'Android Studio', 'Excel', 'Word', 'PowerPoint'] },
]
const skillDetails = {
  Frontend: 'Desarrollo de interfaces web responsivas y experiencias de compra pensadas para que cada interaccion sea sencilla.',
  Backend: 'Construccion de funcionalidades, operaciones CRUD y servicios que conectan la interfaz con los datos del sistema.',
  'Bases de datos': 'Integracion de bases relacionales para almacenar, consultar y alimentar reportes y procesos de datos.',
  Frameworks: 'Experiencia creando aplicaciones web y APIs con herramientas de Python y PHP, ademas de interfaces en React.',
  Herramientas: 'Herramientas para programar, colaborar, probar y analizar datos. Claude y Codex apoyan mi flujo de desarrollo.',
}
function PowerBiMark({ style }) { return <svg style={style} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 12h5v9H3zm6-5h5v14H9zm6-4h5v18h-5z"/></svg> }
const technologyIcons = {
  HTML5: SiHtml5, CSS3: DiCss3, JavaScript: SiJavascript, TypeScript: SiTypescript, React: SiReact, Angular: SiAngular, 'Tailwind CSS': SiTailwindcss, Figma: SiFigma,
  Python: SiPython, PHP: SiPhp, Java: DiJava, Kotlin: SiKotlin,
  PostgreSQL: SiPostgresql, MySQL: SiMysql, 'SQL Server': DiMsqlServer,
  'Talend · ETL/ELT': SiTalend, Django: SiDjango, Flask: SiFlask,
  Laravel: SiLaravel, 'Django REST Framework': SiDjango, Claude: SiClaude,
  Codex: RiOpenaiFill, 'Power BI': PowerBiMark, Jira: SiJira,
  'VS Code': VscVscode, Git: SiGit, GitHub: SiGithub, Postman: SiPostman,
  'Android Studio': SiAndroidstudio, Excel: FaFileExcel, Word: FaFileWord, PowerPoint: FaFilePowerpoint,
}
const technologyColors = {
  HTML5: '#e34f26', CSS3: '#1572b6', JavaScript: '#f0db4f', TypeScript: '#3178c6', React: '#61dafb', Angular: '#dd0031', 'Tailwind CSS': '#38bdf8',
  Python: '#3776ab', PHP: '#777bb4', Java: '#ed8b00', Kotlin: '#a97bff',
  PostgreSQL: '#4169e1', MySQL: '#4479a1', 'SQL Server': '#cc2927',
  'Talend · ETL/ELT': '#ff6d70', Django: '#44b78b', Flask: '#f2f2ed',
  Laravel: '#ff2d20', 'Django REST Framework': '#44b78b', Claude: '#d97757',
  Codex: '#74aa9c', 'Power BI': '#f2c811', Jira: '#2684ff',
  'VS Code': '#007acc', Git: '#9b5de5', GitHub: '#f0f6fc', Figma: '#f24e1e', Postman: '#ff6c37',
  'Android Studio': '#3ddc84', Excel: '#217346', Word: '#2b579a', PowerPoint: '#d24726',
}
const projectTagIcons = { 'Bases de datos': Database, 'HTML / CSS': DiCss3, Scrum: Blocks, 'Django REST': SiDjango, Android: SiAndroidstudio }
const projectTagColors = { 'Bases de datos': '#61dafb', 'HTML / CSS': '#1572b6', Scrum: '#8b9aa8', 'Django REST': '#44b78b', Android: '#3ddc84' }
function TechTag({ name }) {
  const Icon = technologyIcons[name] || projectTagIcons[name] || Code2
  const color = technologyColors[name] || projectTagColors[name] || '#f1f1ec'
  return <span className="tag"><Icon size={13} aria-hidden="true" style={{ color }}/><span>{name}</span></span>
}
const tooltips = {
  Claude: 'Asistente de IA para explorar ideas y apoyar el desarrollo.',
  Codex: 'Agente de código para implementar, revisar y depurar software.',
  'Power BI': 'Análisis de datos y creación de paneles interactivos.',
  Jira: 'Seguimiento de tareas, incidencias y sprints.',
  'VS Code': 'Editor para escribir y depurar código.',
  Git: 'Control de versiones para registrar cambios.',
  GitHub: 'Repositorios y colaboración sobre el código.',
  Postman: 'Pruebas y documentación de APIs.',
  'Android Studio': 'Entorno para crear y depurar aplicaciones Android.',
  Excel: 'Hojas de cálculo para organizar y analizar información.',
  Word: 'Creación y edición de documentos.',
  PowerPoint: 'Creación de presentaciones visuales.',
}
const reveal = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.55, ease: 'easeOut' } }

function SectionLabel({ number, children }) { return <div className="section-label"><span>{number}</span><i />{children}</div> }
function ParticleField() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    let width = 0, height = 0, particles = [], frame = 0, lastFrame = 0
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = Math.min(82, Math.max(34, Math.floor(width * height / 18000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - .5) * 1.05, vy: (Math.random() - .5) * .9,
        radius: Math.random() * 1.45 + .7,
      }))
      paint(0, true)
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(paint)
    }
    const paint = (time, staticFrame = false) => {
      if (!staticFrame && time - lastFrame < 32) { frame = requestAnimationFrame(paint); return }
      lastFrame = time
      context.clearRect(0, 0, width, height)
      for (const particle of particles) {
        if (!staticFrame) {
          particle.x += particle.vx
          particle.y += particle.vy
          if (particle.x < 0 || particle.x > width) particle.vx *= -1
          if (particle.y < 0 || particle.y > height) particle.vy *= -1
        }
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = 'rgba(235, 236, 228, .76)'
        context.fill()
      }
      for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.hypot(dx, dy)
        if (distance < 140) {
          context.beginPath()
          context.moveTo(particles[i].x, particles[i].y)
          context.lineTo(particles[j].x, particles[j].y)
          context.strokeStyle = `rgba(218, 220, 212, ${(1 - distance / 140) * .16})`
          context.lineWidth = .65
          context.stroke()
        }
      }
      if (!staticFrame) frame = requestAnimationFrame(paint)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
function FlipSkillCard({ title, number, Icon, note, items, i }) {
  const [flipped, setFlipped] = useState(false)
  const [activeTool, setActiveTool] = useState('')
  return <motion.div {...reveal} transition={{ ...reveal.transition, delay: i * 0.07 }} className="flip-card-wrap">
    <button className={`flip-card spotlight-card${flipped ? ' is-flipped' : ''}`} type="button" aria-pressed={flipped} aria-label={`${title}: ${flipped ? 'mostrar portada' : 'ver herramientas'}`} onClick={() => setFlipped(!flipped)}>
      <span className="flip-inner">
        <span className="flip-face flip-front"><span className="flip-card-top"><span>{number} / 05</span><ArrowUpRight size={16}/></span><span className="flip-card-icon"><Icon size={27} strokeWidth={1.3}/></span><span className="flip-card-title">{title}<i>.</i></span><span className="flip-card-note">{note}</span><span className="flip-action">CLIC PARA VER TECNOLOGÍAS <ArrowDownRight size={13}/></span></span>
        <span className="flip-face flip-back"><span className="flip-back-heading"><span className="flip-back-icon"><Icon size={18}/></span><span>{title}</span></span><span className="flip-back-copy">{skillDetails[title]}</span><span className={`flip-back-list${title === 'Frontend' || title === 'Herramientas' ? ' scrollable-tools' : ''}`} aria-label="Lista de tecnologías; desplázate para verlas todas">{items.map(item => { const Logo = technologyIcons[item] || Code2; return <span className="tech-chip" key={item} tabIndex={title === 'Herramientas' ? 0 : undefined} onMouseEnter={() => title === 'Herramientas' && setActiveTool(item)} onMouseLeave={() => title === 'Herramientas' && setActiveTool('')} onFocus={() => title === 'Herramientas' && setActiveTool(item)} onBlur={() => title === 'Herramientas' && setActiveTool('')}><Logo aria-hidden="true" style={{ color: technologyColors[item] || '#f2f2ed' }}/><span>{item}</span></span> })}</span>{title === 'Herramientas' && <span className="tool-detail" aria-live="polite">{activeTool ? tooltips[activeTool] : 'Pasa sobre una herramienta para ver qué hace.'}</span>}<span className="flip-action">CLIC PARA VOLVER <ArrowDownRight size={13}/></span></span>
      </span>
    </button>
  </motion.div>
}
function updateSpotlight(event) {
  if (!(event.target instanceof Element)) return
  const card = event.target.closest('.experience-card,.project-card,.about-note,.education-card,.education-mini,.language-card,.flip-card')
  if (!card) return
  const bounds = card.getBoundingClientRect()
  card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`)
  card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`)
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = [['Experiencia', '#experiencia'], ['Proyectos', '#proyectos'], ['Sobre mí', '#sobre-mi'], ['Contacto', '#contacto']]
  return <div className="page-shell" onPointerMove={updateSpotlight}><ParticleField />
    <header className="topbar"><a className="brand" href="#inicio" aria-label="Inicio"><img className="brand-mark" src={avLogo} alt="AV"/><span>ARTURO VELÁZQUEZ<small>DESARROLLADOR DE SOFTWARE JR.</small></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a className="nav-item" key={href} href={href} onClick={() => setMenuOpen(false)}><span>{label}</span></a>)}<a className="nav-contact" href="#contacto"><span>Hablemos</span><ArrowUpRight size={15}/></a></nav>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="inicio"><div className="hero-grid" />
        <div className="hero-copy"><div className="eyebrow"><span className="pulse-dot"/> DISPONIBLE PARA OPORTUNIDADES <span className="eyebrow-location">· CDMX</span></div>
          <motion.h1 initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.15, delay: .22, ease: [.22, .72, .18, 1] }}>Construyo<br/>software con<br/><span>propósito.</span></motion.h1>
          <p className="hero-intro">Soy Arturo, desarrollador de software enfocado en crear productos útiles, interfaces claras y soluciones que funcionan de principio a fin.</p>
          <div className="hero-actions"><a className="button button-dark" href="#proyectos"><span>Explorar proyectos</span><ArrowDownRight size={17}/></a></div>
        </div>
        <div className="hero-visual" aria-label="Ilustración abstracta en blanco y negro"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="orbit-core"><img className="hero-monogram" src={avLogo} alt="AV"/><small>DEV · 2026</small></div><div className="float-card code-card"><Terminal size={14}/><span>código con intención</span><i/></div><div className="float-card stack-card"><span>MI STACK</span><strong>Python<span>.</span> Django<span>.</span><br/>JavaScript<span>.</span> SQL<span>.</span></strong></div><span className="visual-index">19°17' N — 99°39' W</span><span className="visual-asterisk">✳</span></div>
        <div className="hero-side-note">PORTAFOLIO / 2026</div>
      </section>

      <section className="intro-strip"><span className="mono">EN POCAS PALABRAS</span><p>Del primer boceto al último <span>commit.</span></p><span className="strip-coordinate">TOLUCA, MX · 19.2826° N</span></section>

      <section className="section experience-section" id="experiencia"><motion.div {...reveal} className="section-heading experience-heading"><SectionLabel number="01">TRAYECTORIA</SectionLabel><h2>Experiencia que se traduce en <em>impacto.</em></h2><p className="heading-aside">Construir, probar y mejorar. Así entiendo el desarrollo de software.</p></motion.div>
        <motion.article {...reveal} className="experience-card spotlight-card"><div className="experience-top"><div className="experience-role"><div className="role-meta"><span>EXPERIENCIA PROFESIONAL</span><span>ABR — AGO 2026</span></div><h3>Desarrollador de Software <span>(Prácticas profesionales)</span></h3><p>CMX 360 <i/> Toluca, Estado de México</p></div></div>
          <div className="experience-body"><p>Desarrollé módulos de CRM en producción integrando frontend, backend y base de datos, en colaboración con un equipo ágil.</p><div className="achievement-grid"><div><b>01</b><span>Módulos de clientes, fichas técnicas, dashboard comercial y propuestas económicas.</span></div><div><b>02</b><span>Pruebas unitarias, de integración, funcionales y de usabilidad antes del despliegue.</span></div><div><b>03</b><span>Interfaces responsivas, operaciones CRUD y automatización de documentos PDF.</span></div><div><b>04</b><span>Historias de usuario completadas en sprints bajo metodología Scrum.</span></div></div><div className="tag-row">{['Python', 'Django', 'PostgreSQL', 'JavaScript', 'HTML / CSS', 'Scrum'].map(x => <TechTag key={x} name={x}/>)}</div></div>
        </motion.article>
      </section>

      <section className="section projects-section" id="proyectos"><motion.div {...reveal} className="section-heading project-heading"><SectionLabel number="02">TRABAJO SELECCIONADO</SectionLabel><h2>Ideas que se volvieron <em>producto.</em></h2><p className="heading-aside">Proyectos construidos para resolver problemas reales.</p></motion.div>
        <div className="project-list">{projects.map(({ n, title, client, date, icon: Icon, desc, tags, tone }) => <motion.article {...reveal} key={n} className={`project-card spotlight-card ${tone}`}><div className="project-card-top"><span className="project-number">({n})</span><Icon size={20} strokeWidth={1.5}/><span className="project-date">{date}</span></div><div className="project-card-content"><div><span className="project-client">{client}</span><h3>{title}</h3><p>{desc}</p><div className="tag-row">{tags.map(t => <TechTag key={t} name={t}/>)}</div></div></div></motion.article>)}</div>
      </section>

      <section className="section about-section" id="sobre-mi"><motion.div {...reveal} className="section-heading"><SectionLabel number="03">PERFIL</SectionLabel><h2 className="about-title">Curiosidad en el proceso.<br/><em>Calidad</em> en el resultado.</h2></motion.div>
        <div className="about-layout"><motion.div {...reveal} className="about-note spotlight-card"><div className="note-stamp"><img className="note-logo" src={avLogo} alt="AV"/></div><p>Ingeniero en Tecnologías de la Información. Me gusta aprender en equipo y entregar código probado. También exploro herramientas de IA como parte de mi proceso de desarrollo.</p><div className="note-signature">Arturo V.</div><span className="note-caption">HECHO CON CURIOSIDAD, DESDE TOLUCA.</span></motion.div>
          <div className="about-details"><motion.div {...reveal} className="education-card spotlight-card"><GraduationCap size={20}/><div><span className="card-kicker">FORMACIÓN</span><h3>Ingeniería en Tecnologías<br/>de la Información</h3><p>Universidad Politécnica del Valle de Toluca</p><span className="edu-date">2022 — 2026</span></div></motion.div><motion.div {...reveal} className="education-mini spotlight-card"><span className="card-kicker">TAMBIÉN</span><span>Técnico en Construcción</span><small>CETis No. 64 · 2018 — 2021</small></motion.div><motion.div {...reveal} className="language-card spotlight-card"><span className="card-kicker">IDIOMAS</span><div><span>Español</span><b>Nativo</b></div><div><span>Inglés</span><b>B1</b></div></motion.div></div>
        </div>
      </section>

      <section className="section skills-section"><motion.div {...reveal} className="section-heading"><SectionLabel number="04">MI STACK</SectionLabel><h2>Mi caja de <em>herramientas.</em></h2><p className="skills-hint">Toca una tarjeta para descubrir con qué trabajo.</p></motion.div><div className="flip-grid">{skills.map(({ title, number, icon: Icon, note, items }, i) => <FlipSkillCard key={title} {...{ title, number, Icon, note, items, i }} />)}</div><div className="soft-skills soft-skills-dark"><span className="card-kicker">CÓMO TRABAJO</span><div>{['Colaboración', 'Comunicación', 'Organización', 'Iniciativa', 'Aprendizaje continuo', 'Orientación a resultados'].map(s => <span key={s}>{s}</span>)}</div></div></section>

      <section className="contact-section" id="contacto"><div className="contact-orbit"/><motion.div {...reveal} className="contact-content"><SectionLabel number="05">SIGUIENTE PASO</SectionLabel><p className="contact-pretitle">¿Tienes un reto interesante?</p><h2>Hagamos que<br/><em>funcione.</em></h2><a className="contact-email" href="mailto:arthurvz122@gmail.com">arthurvz122@gmail.com <ArrowUpRight size={20}/></a><div className="contact-meta"><span><MapPin size={15}/> Toluca, México · Disponible en CDMX</span><a href="tel:+527203344405"><Phone size={15}/> +52 720 334 4405</a></div></motion.div><div className="contact-mark"><img src={avLogo} alt="AV"/><span>✳</span></div></section>
    </main>
    <footer className="footer"><a className="footer-brand" href="#inicio"><img src={avLogo} alt="AV"/><span>© 2026</span></a><span>DISEÑADO Y DESARROLLADO CON INTENCIÓN.</span><div className="socials"><a href="mailto:arthurvz122@gmail.com" aria-label="Correo"><Mail size={16}/></a><a href="tel:+527203344405" aria-label="Teléfono"><Phone size={16}/></a><a href="#inicio" aria-label="Volver al inicio"><ArrowUpRight size={16}/></a></div></footer>
  </div>
}
export default App
