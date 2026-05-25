'use client';

import { useState } from 'react';

export default function Page() {
  const [selected, setSelected] = useState<any>(null)
  /* =========================================
     CURSOS
  ========================================= */

  const cursos = [
    {
      titulo: '📄 Curso de Currículo',
      descricao: 'Aprenda currículo do básico ao avançado.',
      image: '/curriculo/curso de curriculo.jpg',

      aulas: [
        {
          titulo: 'Aula 1 • Introdução ao currículo',
          video: 'https://www.youtube.com/embed/MoE7Tr33BUY',
        },

        {
          titulo: 'Aula 2 • Estrutura correta',
          video: 'https://www.youtube.com/embed/XKzxxtBoF3g',
        },

        {
          titulo: 'Aula 3 • Currículo moderno',
          video: 'https://www.youtube.com/embed/pMszLwO8aFI',
        },

        {
          titulo: 'Aula 4 • Como chamar atenção',
          video: 'https://www.youtube.com/embed/OJzP2EHqUno',
        },

        {
          titulo: 'Aula 5 • Perfil profissional',
          video: 'https://www.youtube.com/embed/V5PD1ZZ2K0I',
        },

        {
          titulo: 'Aula 6 • LinkedIn perfeito',
          video: 'https://www.youtube.com/embed/mavj7wziVBU',
        },

        {
          titulo: 'Aula 7 • Currículo campeão',
          video: 'https://www.youtube.com/embed/dLHMcpI-owo',
        },

        {
          titulo: 'Aula 8 • Estratégias profissionais',
          video: 'https://www.youtube.com/embed/RSHcaLfGORk',
        },
      ],
    },

    {
      titulo: '🎙️ Curso de Oratória',
      descricao: 'Aprenda comunicação profissional.',
      image: '/curriculo/ oratoria.jpg',

      aulas: [
        {
          titulo: 'Aula 1 • Introdução à oratória',
          video: 'https://www.youtube.com/embed/cTQHrNOlAUo',
        },

        {
          titulo: 'Aula 2 • Comunicação inteligente',
          video: 'https://www.youtube.com/embed/zhgcAbY8Y6E',
        },

        {
          titulo: 'Aula 3 • Técnicas avançadas',
          video: 'https://www.youtube.com/embed/weMRTAV-RjU',
        },

        {
          titulo: 'Aula 4 • Domínio da fala',
          video: 'https://www.youtube.com/embed/uG3nEIm1xa4',
        },

        {
          titulo: 'Aula 5 • Comunicação profissional',
          video: 'https://www.youtube.com/embed/0-U5Jt-trVI',
        },

        {
          titulo: 'Aula 6 • Comunicação poderosa',
          video: 'https://www.youtube.com/embed/uTYxCfiZbMM',
        },
      ],
    },

    {
      titulo: '🧠 Curso de Comportamento',
      descricao: 'Desenvolva inteligência emocional.',
      image: '/cursos/comportamento.jpg',

      aulas: [
        {
          titulo: 'Aula 1 • Inteligência emocional',
          video: 'https://www.youtube.com/embed/EjwGmnEFX6s',
        },

        {
          titulo: 'Aula 2 • Comportamento profissional',
          video: 'https://www.youtube.com/embed/-qHi46tKyuQ',
        },

        {
          titulo: 'Aula 3 • Crescimento pessoal',
          video: 'https://www.youtube.com/embed/nLIWJovsclU',
        },

        {
          titulo: 'Aula 4 • Alta performance',
          video: 'https://www.youtube.com/embed/hnuOU3nHiSQ',
        },

        {
          titulo: 'Aula 5 • Mentalidade forte',
          video: 'https://www.youtube.com/embed/qdRsqFZiH4g',
        },

        {
          titulo: 'Aula 6 • Liderança moderna',
          video: 'https://www.youtube.com/embed/QLUCjSjs5Ic',
        },
      ],
    },
  ];

  /* =========================================
     MENTORIAS
  ========================================= */

  const mentorias = [
    {
      titulo: '⚡ Mentorias Profissionais',
      descricao: 'Mentorias completas de desenvolvimento.',
      image: '/mentorias/mentoria.jpg',

      aulas: [
        {
          titulo: 'Mentoria 1',
          video: 'https://www.youtube.com/embed/VLhkGpLIBD4',
        },

        {
          titulo: 'Mentoria 2',
          video: 'https://www.youtube.com/embed/RGMGhDMZkzA',
        },

        {
          titulo: 'Mentoria 3',
          video: 'https://www.youtube.com/embed/bg8yyVGD24g',
        },

        {
          titulo: 'Mentoria 4',
          video: 'https://www.youtube.com/embed/kokSkCIOZAY',
        },
      ],
    },
  ];

  /* =========================================
     VIDEO AULAS
  ========================================= */

  const videoAulas = [
    {
      titulo: '🎥 Video Aulas Premium',
      descricao: 'Aulas rápidas e didáticas.',
      image: '/videos/video.jpg',

      aulas: [
        {
          titulo: 'Vídeo Aula 1',
          video: 'https://www.youtube.com/embed/y279jGn4jdQ',
        },

        {
          titulo: 'Vídeo Aula 2',
          video: 'https://www.youtube.com/embed/qsdWf_sgcdc',
        },

        {
          titulo: 'Vídeo Aula 3',
          video: 'https://www.youtube.com/embed/zlaBxLi4d7E',
        },

        {
          titulo: 'Vídeo Aula 4',
          video: 'https://www.youtube.com/embed/CQgScs3DJww',
        },
      ],
    },
  ];

  /* =========================================
     EQUIPE
  ========================================= */

  const equipe = [
    {
      name: 'Júlia',
      role: 'Diretora',
      img: '/equipe/julia.jpg',
      msg: '“Visão transforma ideias em realidade.”',
    },

    {
      name: 'Mayza',
      role: 'Administradora de equipe',
      img: '/equipe/mayza.jpg',
      msg: '“Organização sustenta o sucesso.”',
    },

    {
      name: 'Gabriella',
      role: 'Programadora',
      img: '/equipe/gabriella.jpg',
      msg: '“A lógica constrói tudo até os sonhos.”',
    },

    {
      name: 'Elisa',
      role: 'Design de elementos',
      img: '/equipe/elisa.jpg',
      msg: '“Cada elemento conta uma história.”',
    },

    {
      name: 'Thomaz',
      role: 'Líder de representantes',
      img: '/equipe/thomaz.jpg',
      msg: '“Liderar é inspirar antes de comandar.”',
    },

    {
      name: 'Allayne',
      role: 'Coordenadora',
      img: '/equipe/allayne.jpg',
      msg: '“Equipes fortes nascem da conexão.”',
    },

    {
      name: 'David',
      role: 'Diretor',
      img: '/equipe/david.jpg',
      msg: '“Grandes resultados vêm de decisões firmes.”',
    },

    {
      name: 'Cecília',
      role: 'Design gráfico',
      img: '/equipe/cecilia.jpg',
      msg: '“Design é dar forma ao invisível.”',
    },

    {
      name: 'Mayra',
      role: 'Administradora',
      img: '/equipe/mayra.jpg',
      msg: '“Detalhes constroem grandes estruturas.”',
    },

    {
      name: 'Wysla',
      role: 'Representante geral',
      img: '/equipe/wysla.jpg',
      msg: '“Comunicação abre portas invisíveis.”',
    },

    {
      name: 'Dayra',
      role: 'Diretora de marketing',
      img: '/equipe/dayra.jpg',
      msg: '“Criatividade é o que faz você ser lembrado.”',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-6 py-28 text-center">
      <img
  src="/logo/logo.jpg"

  alt="Logo"
  className="w-40 mx-auto mb-6"
/>
        <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8">
          VynkWorking
        </h1>

        <p className="text-zinc-400 text-xl max-w-4xl mx-auto leading-relaxed">
          Plataforma profissional com cursos,
          mentorias, desenvolvimento pessoal,
          comunicação e crescimento profissional.
        </p>

      </section>

      <Section
        titulo="🎬 Cursos Premium"
        items={cursos}
        setSelected={setSelected}
      />

      <Section
        titulo="⚡ Mentorias"
        items={mentorias}
        setSelected={setSelected}
      />

      <Section
        titulo="🎥 Video Aulas"
        items={videoAulas}
        setSelected={setSelected}
      />

      {/* DICAS */}
      <section className="px-6 py-24 border-t border-white/10">

        <h2 className="text-5xl font-black text-cyan-400 mb-14 text-center">
          💡 Dicas Profissionais
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-3xl font-black text-cyan-300 mb-4">
              Currículo
            </h3>

            <p className="text-zinc-400">
              Utilize informações claras, objetivas
              e mantenha um visual profissional.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-3xl font-black text-cyan-300 mb-4">
              Comunicação
            </h3>

            <p className="text-zinc-400">
              Falar bem aumenta oportunidades
              profissionais e liderança.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-3xl font-black text-cyan-300 mb-4">
              Entrevistas
            </h3>

            <p className="text-zinc-400">
              Demonstre confiança, postura
              e clareza ao responder.
            </p>
          </div>

        </div>

      </section>

      {/* CURRÍCULO EXEMPLO */}
      <section className="px-6 py-24 border-t border-white/10">

        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[40px] p-12">

          <h2 className="text-5xl font-black text-cyan-400 mb-10">
            📄 Exemplo de Currículo
          </h2>

          <div className="space-y-5 text-zinc-300 text-lg">

            <p><strong>Nome:</strong> João Silva</p>

            <p><strong>Objetivo:</strong> Área administrativa.</p>

            <p><strong>Experiência:</strong> Atendimento ao cliente e suporte administrativo.</p>

            <p><strong>Cursos:</strong> Excel • Comunicação • Liderança.</p>

            <p><strong>Habilidades:</strong> Organização • Trabalho em equipe • Comunicação.</p>

          </div>

        </div>

      </section>

      {/* ARTIGOS */}
      <section className="px-6 py-24 border-t border-white/10">

        <h2 className="text-5xl font-black text-center text-cyan-400 mb-14">
          📰 Mini Artigos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-zinc-900 rounded-[35px] p-10">

            <h3 className="text-3xl font-black text-cyan-300 mb-6">
              A importância da comunicação
            </h3>

            <p className="text-zinc-400 leading-relaxed text-lg">
              Saber se comunicar melhora relacionamentos
              profissionais e aumenta oportunidades.
            </p>

          </div>

          <div className="bg-zinc-900 rounded-[35px] p-10">

            <h3 className="text-3xl font-black text-cyan-300 mb-6">
              Desenvolvimento profissional
            </h3>

            <p className="text-zinc-400 leading-relaxed text-lg">
              Pequenas melhorias diárias criam
              grandes resultados no futuro.
            </p>

          </div>
          <div className="bg-zinc-900 rounded-[35px] p-10">

<h3 className="text-3xl font-black text-cyan-300 mb-6">
  Como causar boa impressão
</h3>

<p className="text-zinc-400 leading-relaxed text-lg">
  A primeira impressão pode abrir oportunidades.
  Aparência, postura e comunicação influenciam muito
  no ambiente profissional.
</p>

</div>

<div className="bg-zinc-900 rounded-[35px] p-10">

<h3 className="text-3xl font-black text-cyan-300 mb-6">
  Trabalho em equipe
</h3>

<p className="text-zinc-400 leading-relaxed text-lg">
  Trabalhar em equipe demonstra respeito,
  inteligência emocional e profissionalismo.
</p>

</div>

<div className="bg-zinc-900 rounded-[35px] p-10">

<h3 className="text-3xl font-black text-cyan-300 mb-6">
  Liderança profissional
</h3>

<p className="text-zinc-400 leading-relaxed text-lg">
  Liderar é inspirar pessoas, organizar ideias
  e ajudar a equipe crescer junta.
</p>

</div>
        </div>

      </section>

      {/* EQUIPE */}
      <section className="px-6 py-28 border-t border-white/10">

        <h2 className="text-6xl font-black text-center text-cyan-400 mb-20">
          Nossa Equipe
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">

          {equipe.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-cyan-400/20 rounded-[35px] overflow-hidden"
            >

              <div className="bg-black flex items-center justify-center p-4">

                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-auto max-h-[760px] object-contain rounded-3xl"
                />

              </div>

              <div className="p-8 text-center">

                <h3 className="text-4xl font-black mb-3">
                  {p.name}
                </h3>

                <p className="text-cyan-300 font-semibold text-lg mb-5">
                  {p.role}
                </p>

                <p className="text-zinc-400 italic text-lg">
                  {p.msg}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

{/* IMAGEM PESSOAL */}
<section className="px-6 py-24 border-t border-white/10">

  <h2 className="text-5xl font-black text-center text-cyan-400 mb-14">
    👔 Imagem Pessoal Profissional
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    <div className="bg-zinc-900 rounded-[35px] p-10">

      <h3 className="text-3xl font-black text-pink-300 mb-6">
        💄 Aparência Feminina
      </h3>

      <ul className="space-y-4 text-zinc-300 text-lg">
        <li>• Maquiagem leve e profissional</li>
        <li>• Roupas discretas e alinhadas</li>
        <li>• Evite excesso de acessórios</li>
        <li>• Cabelo organizado</li>
        <li>• Utilize cores neutras</li>
      </ul>

    </div>

    <div className="bg-zinc-900 rounded-[35px] p-10">

      <h3 className="text-3xl font-black text-cyan-300 mb-6">
        👔 Aparência Masculina
      </h3>

      <ul className="space-y-4 text-zinc-300 text-lg">
        <li>• Camisa social ou roupa alinhada</li>
        <li>• Higiene pessoal impecável</li>
        <li>• Cabelo e barba organizados</li>
        <li>• Evite roupas chamativas</li>
        <li>• Demonstre postura e confiança</li>
      </ul>

    </div>

  </div>

</section>
      {/* MENSAGEM */}
      <section className="px-6 py-24 border-t border-white/10">

        <div className="max-w-6xl mx-auto bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-[40px] p-14 text-center">

          <h2 className="text-6xl font-black text-cyan-300 mb-10">
            💙 Mensagem da Equipe
          </h2>

          <p className="text-zinc-300 text-2xl leading-relaxed">
          Agradecemos por estar aqui conosco neste espaço de aprendizado e crescimento. Nosso objetivo é ajudar você a construir um currículo mais forte e valorizar sua trajetória.
Acreditamos no seu potencial e que, com dedicação e orientação, novas ser alcançadas.
          </p>

          <p className="text-cyan-300 text-3xl font-black mt-10">
            “Seu futuro começa agora.”
          </p>

        </div>

      </section>

      {/* CRÉDITOS */}
      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto bg-zinc-900 rounded-[40px] p-14">

          <h2 className="text-5xl font-black text-cyan-400 mb-10 text-center">
            ✨ Créditos & Agradecimentos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {equipe.map((membro, index) => (
              <div
                key={index}
                className="bg-black/30 rounded-3xl p-6"
              >

                <h3 className="text-2xl font-black text-cyan-300 mb-2">
                  {membro.name}
                </h3>

                <p className="text-zinc-400">
                  {membro.role}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-6 z-50 overflow-y-auto">

          <div className="bg-zinc-900 rounded-3xl max-w-6xl w-full p-8">

          <h2 className="text-5xl font-black text-cyan-300 mb-4">
          {selected?.titulo}
</h2>

<p className="text-zinc-400 text-lg mb-10">
  {selected?.descricao}
</p>

            <div className="space-y-10">

            {selected?.aulas?.map((aula: any, index: number) => (
  <div
    key={index}
    className="bg-black/40 rounded-3xl p-6"
  >

    <h3 className="text-3xl font-black mb-6 text-cyan-300">
      {aula.titulo}
    </h3>

                  <iframe
                    className="w-full aspect-video rounded-2xl"
                    src={aula.video}
                    title={aula.titulo}
                    allowFullScreen
                  />

                </div>
              ))}

            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-10 w-full bg-gradient-to-r from-cyan-400 to-purple-500 py-5 rounded-2xl font-black text-xl"
            >
              Fechar
            </button>

          </div>

        </div>
      )}

    </main>
  );
}

function Section({ titulo, items, setSelected }: { titulo: string; items: any[]; setSelected: (item: any) => void }) {
  return (
    <section className="px-6 mb-24">

      <h2 className="text-5xl font-black mb-14 text-cyan-400">
        {titulo}
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item)}
            className="bg-zinc-900 rounded-[35px] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all"
          >

            <img
              src={item.image}
              alt={item.titulo}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-black mb-4">
                {item.titulo}
              </h3>

              <p className="text-zinc-400 mb-6">
                {item.desc}
              </p>

              <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 py-4 rounded-2xl font-black">
                Abrir conteúdo
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}