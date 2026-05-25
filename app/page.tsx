'use client';

import { useState } from 'react';

type Aula = {
  titulo: string;
  video: string;
};

type Item = {
  titulo: string;
  descricao: string;
  image: string;
  aulas: Aula[];
};

type SectionProps = {
  titulo: string;
  items: Item[];
  setSelected: (item: Item) => void;
};

export default function Page() {
  const [selected, setSelected] = useState<Item | null>(null);

  /* =========================================
     CURSOS
  ========================================= */

  const cursos: Item[] = [
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
      ],
    },

    {
      titulo: '🎙️ Curso de Oratória',
      descricao: 'Aprenda comunicação profissional.',
      image: '/curriculo/oratoria.jpg',

      aulas: [
        {
          titulo: 'Aula 1 • Introdução à oratória',
          video: 'https://www.youtube.com/embed/cTQHrNOlAUo',
        },

        {
          titulo: 'Aula 2 • Comunicação inteligente',
          video: 'https://www.youtube.com/embed/zhgcAbY8Y6E',
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
      ],
    },
  ];

  /* =========================================
     MENTORIAS
  ========================================= */

  const mentorias: Item[] = [
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
      ],
    },
  ];

  /* =========================================
     VIDEO AULAS
  ========================================= */

  const videoAulas: Item[] = [
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
      ],
    },
  ];

  /* =========================================
     EQUIPE
  ========================================= */

  const equipe = [
    {
      name: 'Matheus',
      role: 'Vice líder de representantes',
      img: '/equipe/matheus.jpg',
      msg: '“Evolução é consistência diária.”',
    },

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
          className="w-40 mx-auto mb-6 rounded-3xl"
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

      </section>

      {/* ARTIGOS */}
      <section className="px-6 py-24 border-t border-white/10">

        <h2 className="text-5xl font-black text-center text-cyan-400 mb-14">
          📰 Mini Artigos
        </h2>

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
                  className="w-full h-[420px] object-cover rounded-3xl"
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

      {/* MENSAGEM */}
      <section className="px-6 py-24 border-t border-white/10">

        <div className="max-w-6xl mx-auto bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-[40px] p-14 text-center">

          <h2 className="text-6xl font-black text-cyan-300 mb-10">
            💙 Mensagem da Equipe
          </h2>

          <p className="text-zinc-300 text-2xl leading-relaxed">
            Agradecemos por estar aqui conosco neste espaço de aprendizado
            e crescimento.
          </p>

          <p className="text-zinc-300 text-2xl leading-relaxed mt-6">
            Acreditamos no seu potencial e que, com dedicação e orientação,
            novas conquistas podem ser alcançadas.
          </p>

          <p className="text-cyan-300 text-3xl font-black mt-10">
            “Seu futuro começa agora.”
          </p>

        </div>

      </section>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-6 z-50 overflow-y-auto">

          <div className="bg-zinc-900 rounded-3xl max-w-6xl w-full p-8">

            <h2 className="text-5xl font-black text-cyan-300 mb-4">
              {selected.titulo}
            </h2>

            <p className="text-zinc-400 text-lg mb-10">
              {selected.descricao}
            </p>

            <div className="space-y-10">

              {selected.aulas.map((aula, index) => (
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

function Section({
  titulo,
  items,
  setSelected,
}: SectionProps) {
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
            className="bg-zinc-900 rounded-[35px] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
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
                {item.descricao}
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