import Sobre from '../components/Sobre'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import IMask from 'imask'
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const botaoRef = useRef<HTMLButtonElement>(null);
  // ** Formulário de contato com máscara para telefone */
  const telefoneRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Máscara de telefone
    if (telefoneRef.current) {
      IMask(telefoneRef.current, {
        mask: '(00) 00000-0000'
      });
    }

    // Fechar menu ao clicar fora
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        botaoRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !botaoRef.current.contains(event.target as Node)
      ) {
        setMenuAberto(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
    {/* LOGO */}
    <Link href="/" className="flex items-center space-x-2">
    <Image className="w-40" src="/logo.png" alt="Núcleo Psiquè do Recife" width="1080" height="1080" />
    </Link>

    {/* Botão hamburguer visível no mobile */}
    <button
      ref={botaoRef}
      className="text-[var(--npr-petrol)] md:hidden text-3xl"
      onClick={() => setMenuAberto(!menuAberto)}
    >
      ☰
    </button>

    {/* Menu de navegação */}
    <nav ref={menuRef} className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none px-4 py-4 md:py-0 md:px-0 flex-col md:flex-row md:flex items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-base font-semibold z-40 transition-all duration-300 ${
        menuAberto ? 'flex' : 'hidden md:flex'
      }`}
    >
      <Link href="#sobre" onClick={() => setMenuAberto(false)} className="text-gray-700 hover:text-[var(--npr-petrol)]">Sobre</Link>
      <Link href="#agendamento" onClick={() => setMenuAberto(false)} className="text-gray-700 hover:text-[var(--npr-petrol)]">Agendamento</Link>
      <Link href="#contato" onClick={() => setMenuAberto(false)} className="text-gray-700 hover:text-[var(--npr-petrol)]">Contato</Link>
      <Link href="/academy" onClick={() => setMenuAberto(false)} className="text-white bg-[var(--npr-petrol)] hover:bg-[var(--npr)] px-4 py-2 rounded-xl font-semibold transition">NPR Academy</Link>
    </nav>
  </div>
</header>

      <Head>
        <title>NPR - Núcleo Psiquè do Recife</title>
        <meta name="description" content="Cursos de Psicologia Online com qualidade e profundidade" />
      </Head>

  <section className="py-30 bg-white text-gray-900 flex items-start justify-center px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center">
    
    {/* Lado esquerdo – Texto */}
    <div className="space-y-6 text-center md:text-left px-4 md:pr-10">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Atendimento psicológico acolhedor e transformador
      </h1>
      <p className="text-lg text-gray-600">
        Psicoterapia para adultos e adolescentes com escuta ética, empática e fundamentada na psicanálise.
      </p>
      <a
        href="#agendamento"
        className="inline-block bg-[#136C70] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#265255] transition"
      >
        Agende uma sessão
      </a>
    </div>

    {/* Lado direito – Imagem Terapeuta*/}
    <div className="flex justify-center md:justify-end md:mr-[52px]">
      <img
        src="/terapeuta.jpg"
        alt="Terapeuta"
        className="w-85 h-auto rounded-xl shadow-lg object-cover"
      />
    </div>

  </div>
</section>

      <Sobre />

      <section className="py-20 px-4 text-center bg-white">
    <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça a NPR Academy</h2>
    <p className="text-lg text-gray-700 mb-6">
      Cursos online desenvolvidos especialmente para psicólogos(as), estudantes e terapeutas que desejam aprofundar sua prática clínica com sensibilidade e conhecimento atualizado.
    </p>
    <Link 
    href="/academy"
    className="inline-block bg-[var(--npr-petrol)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--npr)] transition"
    >
        Acessar Cursos
    </Link>
  </div>
</section>

      <section className="py-20 px-4 bg-[#f2f7f7] text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Onde e como atendemos?</h2>
    <p className="text-lg text-gray-700 mb-8">
      O Núcleo Psique do Recife oferece atendimentos presenciais e online, com foco na escuta qualificada, ética e sensível às subjetividades.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">📍 Atendimento Presencial</h3>
        <p className="text-gray-600">
          Rua Ernesto de Paula Santos, 1368 - Boa Viagem, Recife/PE <br />Segunda a Sexta, das 9h às 18h
        </p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2">💻 Atendimento Online</h3>
        <p className="text-gray-600">
          Realizamos atendimentos via videochamada, com sigilo e ética garantidos, em ambiente digital acolhedor.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
  <h3 className="text-lg font-semibold mb-2">🧠 Modalidades</h3>
  <p className="text-gray-600">
    Psicoterapia individual<br />
    Acompanhamento terapêutico<br />
    Supervisão clínica
  </p>
      </div>
    </div>
  </div>
</section>

<section id="agendamento" className="py-20 px-4 bg-white text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Agende sua sessão</h2>
    <p className="text-lg text-gray-700 mb-8">
      Estamos disponíveis para acolher sua demanda com sensibilidade e profissionalismo. Agende pelo WhatsApp ou envie seus dados abaixo.
    </p>

    {/* Botão de WhatsApp */}
    <Link href="https://wa.me/5581997303032" // <-- Substitua com o número real
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition mb-8"
    >
      <span className="inline-flex items-center gap-2">
      <FaWhatsapp className="text-1" />
      Agendar pelo WhatsApp
      </span>
    </ Link>

    {/* Formulário de contato */}
    <form
  action="https://formsubmit.co/seuemail@gmail.com"
  method="POST"
  className="bg-gray-50 shadow-md rounded-xl p-6 space-y-4 text-left mt-10">

  <div>
    <label className="block font-medium mb-1">Nome completo</label>
    <input
      type="text"
      className="w-full border border-gray-300 rounded px-4 py-2"
      placeholder="Seu nome"
      required
    />
  </div>

  <div>
  <label className="block font-medium mb-1">Telefone</label>
  <input
    type="text"
    name="telefone"
    ref={telefoneRef}
    className="w-full border border-gray-300 rounded px-4 py-2"
    placeholder="(00) 00000-0000"
    required
  />
</div>

  <div>
    <label className="block font-medium mb-1">Preferência de horário</label>
    <input
      type="text"
      className="w-full border border-gray-300 rounded px-4 py-2"
      placeholder="Manhã ou tarde"
    />
  </div>

  <div>
    <label className="block font-medium mb-1">Mensagem (opcional)</label>
    <textarea
      className="w-full border border-gray-300 rounded px-4 py-2"
      rows={4}
      placeholder="Conte um pouco sobre sua necessidade..."
    />
  </div>

  <button
    type="submit"
    className="bg-[var(--npr-petrol)] text-white px-6 py-3 rounded-xl hover:bg-[var(--npr)] transition font-semibold"
  >
    Enviar
  </button>
  </form>
  </div>
</section>
<footer id="contato" className="bg-[#18212b] text-white py-10 px-4 mt-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h3 className="text-lg font-semibold mb-2">Núcleo Psique do Recife</h3>
      <p className="text-sm text-gray-300">
        Rua Ernesto de Paula Santos, 1368<br />
        Boa Viagem – Recife/PE<br />
        Atendimento de segunda a sexta, das 9h às 18h
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2">Contato</h3>
      <p className="text-sm text-gray-300">
        WhatsApp: (81) 99730-3032<br />
        E-mail: contato@nucleopsique.com
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-2">Instagram</h3>
      <Link
        href="https://www.instagram.com/drromulopsicanalise/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700 transition"
      >
        @drromulopsicanalise
      </Link>
    </div>
  </div>

  <div className="mt-10 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Núcleo Psique do Recife. Todos os direitos reservados.
  </div>
</footer>
    </>
  )
}
