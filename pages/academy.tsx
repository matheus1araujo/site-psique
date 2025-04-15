import Head from 'next/head'

export default function Academy() {
  return (
    <>
      <Head>
        <title>NPR Academy</title>
        <meta name="description" content="Cursos de Psicologia Online com qualidade e profundidade" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bem-vindo à NPR Academy
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Aqui você encontra formações de psicologia desenvolvidas com profundidade, sensibilidade e compromisso com a prática clínica.
        </p>
        <p className="text-base text-gray-500">
          Em breve: lista de cursos, vídeos demonstrativos e área do aluno.
        </p>
      </main>
    </>
  )
}