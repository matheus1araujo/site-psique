import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Sobre() {
    return (
      <section id="sobre" className="py-20 px-4 scroll-mt-20 bg-[#f2f7f7]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Imagem do terapeuta */}
        <div className="flex justify-center md:justify-center">
          <Image
            src="/terapeuta.jpg"
            alt="Foto do terapeuta"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm object-cover"
          />
        </div>

        {/* Texto */}
        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre o Núcleo Psiquè do Recife</h2>
          <p className="text-lg leading-relaxed">
            O Núcleo Psique do Recife nasceu com a missão de oferecer psicoterapia e formação de excelência, fundamentadas na escuta ética, sensível e comprometida com a subjetividade de cada pessoa. Atuamos com seriedade no cuidado clínico e na capacitação profissional, promovendo acolhimento, transformação e desenvolvimento humano.
          </p>
          <p className="text-lg leading-relaxed">
            À frente da clínica está o <strong>Dr. Rômulo Oliveira</strong>, psicólogo e psicanalista com ampla trajetória acadêmica e clínica. Possui formação e especialização em Psicanálise Clínica, Neuropsicologia, Psicopedagogia e também é Psicanalista Didata. Com profundo compromisso com o saber e a escuta, conduz a instituição com ética, sensibilidade e uma visão transformadora da saúde mental.
          </p>
        </div>
      </div>
    </section>
    )
  }