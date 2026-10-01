import React, { useState, useEffect } from 'react';
import {
  Clock,
  Lock,
  Sparkles,
  Check,
  Gift,
  Flame,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Zap
} from 'lucide-react';

const COLLECTION_HIGHLIGHTS = [
  {
    emoji: '🎅',
    title: 'Natal clássico',
    desc: 'Papai Noel, renas e presentes em composições com vermelho intenso, verde e detalhes dourados.',
  },
  {
    emoji: '🎀',
    title: 'Natal elegante com personagens',
    desc: 'Personagens natalinos acompanhados de laços, estrelas e enfeites para uma decoração mais sofisticada.',
  },
  {
    emoji: '⛄',
    title: 'Natal fofo',
    desc: 'Bonecos de neve e pinguins com expressões encantadoras, cores vibrantes e detalhes delicados.',
  },
  {
    emoji: '🍪',
    title: 'Natal confeitaria',
    desc: 'Personagens de gengibre, casinhas e doces natalinos para uma decoração alegre e cheia de personalidade.',
  },
  {
    emoji: '⭐',
    title: 'Natal cristão',
    desc: 'Maria, José, o menino Jesus e a estrela de Belém em composições que celebram o significado do Natal.',
  },
];

const MARQUEE_IMAGES = [
  'https://i.ibb.co/fzsPmLF1/a.webp',
  'https://i.ibb.co/jvGLhfMT/b.webp',
  'https://i.ibb.co/XZkp4Tf1/c.webp',
  'https://i.ibb.co/zV8LYyz4/d.webp',
  'https://i.ibb.co/NgZbFX2D/e.webp',
  'https://i.ibb.co/Xf9zjXhY/f.webp',
  'https://i.ibb.co/cSfRt5G9/g.webp',
  'https://i.ibb.co/qY18Pxvj/h.webp',
];

const FAQ_ITEMS = [
  {
    q: '1. Vou receber os topos físicos em casa?',
    a: 'Não. Este é um produto digital. Você recebe os arquivos digitais prontos e realiza a impressão e a montagem na sua casa ou gráfica de preferência.',
  },
  {
    q: '2. Preciso ter experiência com papelaria personalizada?',
    a: 'Conhecimentos básicos de impressão, recorte e montagem ajudam na produção. No Plano Completo, os guias inclusos oferecem orientações passo a passo para facilitar todas essas etapas.',
  },
  {
    q: '3. Preciso ter uma máquina de corte?',
    a: 'Não! Você pode utilizar os modelos em PDF para recortar facilmente com tesoura e estilete. Caso você possua máquina de corte (como Silhouette ou Cricut), os arquivos em PNG de alta resolução com fundo transparente facilitam a vetorização e corte automático.',
  },
  {
    q: '4. Em quais formatos recebo os arquivos?',
    a: 'Você recebe os modelos em arquivos PDF em alta resolução (300 DPI) prontos para folha A4 e arquivos PNG com fundo transparente, garantindo máxima nitidez e fidelidade de cores na impressão.',
  },
  {
    q: '5. Posso trocar frases, nomes e cores?',
    a: 'As artes são entregues completas e com a composição profissional apresentada, cuidadosamente harmonizada para valorizar o topo. Você pode adicionar nomes e idades complementares se desejar durante sua montagem.',
  },
  {
    q: '6. Posso acessar pelo celular?',
    a: 'Sim, você pode baixar e visualizar todos os arquivos no celular ou tablet. Para organizar a impressão e enviar para sua impressora ou programa de corte, recomendamos a utilização de um computador.',
  },
  {
    q: '7. Posso vender os topos que eu produzir?',
    a: 'Sim! Você tem total permissão para vender as peças físicas impressas e montadas para seus clientes e confeitarias. A revenda, o compartilhamento e a distribuição dos arquivos digitais não estão incluídos na licença.',
  },
  {
    q: '8. As peças ficam exatamente como nas imagens?',
    a: 'O resultado final depende da sua impressora, do tipo de papel e das configurações de impressão. Recomendamos papéis de gramatura 180g a 240g (fotográfico fosco ou offset). Detalhes com aparência dourada impressa são texturas de alta definição; brilho metálico espelhado real exige acabamento com papéis especiais (como lamicote ou foil).',
  },
  {
    q: '9. Quando recebo meu material?',
    a: 'O envio é imediato e 100% automático. Assim que o pagamento for aprovado pela plataforma, você recebe um e-mail com os links de acesso e download.',
  },
  {
    q: '10. Como funciona o acesso e a garantia?',
    a: 'O acesso é vitalício, ou seja, você pode baixar quando e quantas vezes quiser. Você conta com garantia incondicional de 7 dias: se por qualquer motivo você não ficar satisfeita, pode solicitar reembolso integral sem complicações.',
  },
];

const CAROUSEL_INSPIRATION_IMAGES = [
  'https://i.ibb.co/qMrt2MZ6/a.webp',
  'https://i.ibb.co/PsXB3KT5/b.webp',
  'https://i.ibb.co/9kncTbW8/c.webp',
  'https://i.ibb.co/rfvpGv5Q/d.webp',
  'https://i.ibb.co/cz8nKkb/e.webp',
  'https://i.ibb.co/bgX9nPcs/f.webp',
];

function InspirationCarousel() {
  return (
    <section className="py-10 sm:py-14 bg-stone-900 text-white relative overflow-hidden border-y border-stone-800">
      <div className="max-w-5xl mx-auto px-4 text-center mb-6 sm:mb-8 flex justify-center">
        <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-2 border-amber-400 px-5 sm:px-8 py-3 sm:py-3.5 rounded-2xl shadow-xl shadow-black/40 ring-4 ring-amber-400/20">
          <Sparkles className="size-5 sm:size-6 text-amber-400 shrink-0 animate-pulse" />
          <h2 className="text-base sm:text-xl md:text-2xl font-black uppercase text-amber-300 tracking-wider drop-shadow-sm whitespace-nowrap">
            MODELOS EM DESTAQUE
          </h2>
          <Sparkles className="size-5 sm:size-6 text-amber-400 shrink-0 animate-pulse" />
        </div>
      </div>

      {/* Continuous Horizontal Marquee Carousel (recaindo para a direita) */}
      <div className="w-full overflow-hidden my-2 sm:my-4 py-2">
        <div
          className="flex gap-4 sm:gap-6 w-max items-center animate-scroll-x-reverse"
          style={{ animationDuration: '28s' }}
        >
          {[...CAROUSEL_INSPIRATION_IMAGES, ...CAROUSEL_INSPIRATION_IMAGES].map((src, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[78vw] max-w-[20rem] sm:w-[22rem] sm:max-w-none md:w-[26rem] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-stone-900 border-2 border-stone-700/80 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Modelo em Destaque ${(idx % CAROUSEL_INSPIRATION_IMAGES.length) + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [todayDate, setTodayDate] = useState('01/10/2026');

  useEffect(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    setTodayDate(`${day}/${month}/${year}`);
  }, []);

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('oferta');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans overflow-x-hidden w-full">
      {/* Top Countdown Notice Bar */}
      <div className="bg-red-800 text-white text-center py-2 px-3 sm:px-4 text-xs sm:text-sm md:text-base font-bold flex items-center justify-center gap-1.5 sm:gap-2 tracking-wide shadow-sm">
        <Clock className="size-3.5 sm:size-4 shrink-0 text-amber-300" />
        <span className="leading-tight">ÚLTIMA CHANCE — OFERTA TERMINA HOJE ({todayDate})</span>
      </div>

      {/* Security Badge */}
      <div className="flex justify-center mt-3 sm:mt-4 px-4">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full px-3.5 py-1 text-xs sm:text-sm font-bold shadow-xs">
          <Lock className="size-3.5 sm:size-4 text-emerald-700" />
          <span>COMPRA 100% SEGURA E PROTEGIDA</span>
        </span>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-5 sm:pt-7 pb-10 sm:pb-14 text-center">
        <div className="inline-block max-w-full">
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] sm:tracking-[0.35em] text-amber-700 mb-3.5 sm:mb-4.5 uppercase">
            —TOPOS DE BOLO NATALINOS  —
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-red-900 break-words">
            Transforme seus bolos de Natal com personagens encantadores e cores que chamam a atenção
          </h1>

          <div className="mt-3 sm:mt-4 mx-auto h-1 sm:h-1.5 w-20 sm:w-28 bg-gradient-to-r from-red-600 via-amber-400 to-emerald-600 rounded-full"></div>
        </div>

        <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl font-semibold text-stone-700 max-w-3xl mx-auto leading-relaxed px-2">
          Tenha em mãos <strong className="text-red-800 font-extrabold">+35 modelos de topos natalinos</strong>, organizados em cinco coleções, para dar um acabamento especial às suas encomendas.
        </p>

        {/* Hero Mockup Frame */}
        <div className="my-6 sm:my-8 relative mx-auto max-w-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-amber-200/80 bg-stone-900 aspect-square">
          <img
            src="https://i.ibb.co/H5Y531n/noel.webp"
            alt="+35 Topos de Bolo Natalinos"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-contain block"
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto px-2">
          Com topos de Papai Noel, renas, bonecos de neve, personagens de gengibre e cenas do nascimento de Jesus: uma coleção com <strong className="text-stone-900">cores vivas, ilustrações detalhadas e composições caprichadas</strong> para quem trabalha com papelaria personalizada.
        </p>

        <div className="mt-6 sm:mt-8">
          <a
            href="#oferta"
            onClick={scrollToOffer}
            className="w-full sm:w-auto inline-block bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:via-green-400 hover:to-emerald-500 text-white font-black uppercase rounded-full shadow-xl shadow-emerald-600/35 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse text-xs sm:text-base md:text-xl px-6 sm:px-10 md:px-14 py-3.5 sm:py-4 leading-tight break-words ring-2 ring-emerald-300/60"
          >
            QUERO MEUS TOPOS NATALINOS →
          </a>
        </div>

        {/* Bullet Points de Segurança */}
        <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm md:text-base font-bold text-stone-700">
          <div className="inline-flex items-center gap-1.5 sm:gap-2">
            <ShieldCheck className="size-4 sm:size-5 text-emerald-600 shrink-0" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2">
            <Zap className="size-4 sm:size-5 text-amber-500 shrink-0" />
            <span>Acesso Imediato</span>
          </div>
        </div>
      </section>

      {/* Section 2: Veja alguns dos modelos que você encontrará */}
      <section className="py-10 sm:py-14 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black mb-2 sm:mb-3 text-white">
            Veja alguns dos <span className="text-amber-400">modelos</span> que você encontrará
          </h2>
        </div>

        {/* Continuous Horizontal Marquee Carousel */}
        <div className="w-full overflow-hidden my-4 sm:my-8 py-2">
          <div
            className="flex gap-4 sm:gap-6 w-max items-center animate-scroll-x"
            style={{ animationDuration: '28s' }}
          >
            {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[78vw] max-w-[20rem] sm:w-[22rem] sm:max-w-none md:w-[26rem] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-stone-900 border-2 border-stone-700/80 flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Modelo de Topo Natalino ${(idx % MARQUEE_IMAGES.length) + 1}`}
                  loading="eager"
                  className="w-full h-full object-contain block"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Collections Cards Grid */}
        <div className="max-w-5xl mx-auto px-4 mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
          {COLLECTION_HIGHLIGHTS.map((col, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-stone-800 to-stone-900 border border-stone-700/80 hover:border-amber-400/60 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-start"
            >
              <div className="text-3xl sm:text-4xl mb-3">{col.emoji}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-300 mb-2">
                {col.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {col.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 px-4">
          <a
            href="#oferta"
            onClick={scrollToOffer}
            className="w-full sm:w-auto inline-block bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:via-green-400 hover:to-emerald-500 text-white font-black uppercase rounded-full shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-400/60 hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse text-xs sm:text-base md:text-lg px-6 sm:px-10 py-3.5 sm:py-4 leading-tight ring-2 ring-emerald-300/60"
          >
            QUERO ESSA COLEÇÃO →
          </a>
        </div>
      </section>

      {/* Section 3: O que torna esta coleção tão especial? */}
      <section className="py-10 sm:py-14 px-4 bg-red-900 text-white">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-center mb-8 sm:mb-10 uppercase tracking-tight text-amber-300">
          O que torna esta coleção tão especial?
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white text-stone-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-amber-100 flex gap-3.5 sm:gap-4 items-start">
            <div className="shrink-0 text-3xl leading-none">🎨</div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-1 text-red-900">Cores vivas</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Vermelhos intensos, verdes vibrantes e combinações pensadas para destacar a arte na decoração.
              </p>
            </div>
          </div>

          <div className="bg-white text-stone-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-amber-100 flex gap-3.5 sm:gap-4 items-start">
            <div className="shrink-0 text-3xl leading-none">🎅</div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-1 text-red-900">Personagens em destaque</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Ilustrações expressivas que dão personalidade a cada topo.
              </p>
            </div>
          </div>

          <div className="bg-white text-stone-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-amber-100 flex gap-3.5 sm:gap-4 items-start">
            <div className="shrink-0 text-3xl leading-none">✨</div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-1 text-red-900">Visual premium</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Composições cuidadosas, contornos definidos e detalhes que deixam a peça mais caprichada.
              </p>
            </div>
          </div>

          <div className="bg-white text-stone-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-amber-100 flex gap-3.5 sm:gap-4 items-start">
            <div className="shrink-0 text-3xl leading-none">📂</div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-1 text-red-900">Coleções organizadas</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Encontre os modelos por estilo e escolha a opção que combina com cada encomenda.
              </p>
            </div>
          </div>

          <div className="bg-white text-stone-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-amber-100 flex gap-3.5 sm:gap-4 items-start">
            <div className="shrink-0 text-3xl leading-none">✂️</div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-1 text-red-900">Possibilidades de montagem em camadas</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Crie relevo com as peças preparadas para esse tipo de montagem e dê mais presença ao topo.
              </p>
            </div>
          </div>

          <div className="bg-white text-stone-900 p-4 sm:p-6 rounded-2xl shadow-sm border border-amber-100 flex gap-3.5 sm:gap-4 items-start">
            <div className="shrink-0 text-3xl leading-none">⏱️</div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-1 text-red-900">Mais praticidade na criação</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Comece com uma composição pronta e concentre seu tempo na impressão, no recorte e no acabamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: O Natal já traz muitas tarefas... */}
      <section className="bg-white">
        <div className="bg-stone-900 text-white py-5 sm:py-6 px-4 text-center">
          <h2 className="text-sm sm:text-lg md:text-2xl font-black max-w-4xl mx-auto leading-snug text-amber-300">
            🎄 O Natal já traz muitas tarefas. Criar cada arte do zero não precisa ser mais uma delas.
          </h2>
        </div>

        <div className="px-4 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center text-white shadow-xl bg-gradient-to-br from-red-900 via-red-950 to-stone-900 border border-amber-400/30">
            <p className="text-base sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-stone-100 leading-relaxed">
              Entre atender clientes, organizar pedidos e produzir as peças, o tempo de criação faz diferença.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-amber-200/90 mb-6 sm:mb-8 leading-relaxed">
              Com uma coleção pronta, você tem um ponto de partida para montar seu catálogo natalino e apresentar opções aos clientes.
            </p>
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="w-full sm:w-auto inline-block bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:via-green-400 hover:to-emerald-500 text-white font-black uppercase rounded-full shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-400/60 hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse text-xs sm:text-base md:text-lg px-6 sm:px-10 py-3.5 sm:py-4 leading-tight ring-2 ring-emerald-300/60"
            >
              QUERO FACILITAR MINHAS ENCOMENDAS →
            </a>
          </div>
        </div>
      </section>

      {/* Carrossel de Modelos */}
      <InspirationCarousel />

      {/* Section 5: Ideal para você que deseja */}
      <section className="py-10 sm:py-14 px-4 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-10 uppercase text-red-900">
            Ideal para você que deseja:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-stone-200 flex gap-3.5 sm:gap-4 items-start">
              <div className="shrink-0 text-3xl leading-none">🎄</div>
              <div>
                <h3 className="font-bold uppercase text-red-900 mb-1 text-sm sm:text-base">
                  Preparar seu catálogo de Natal
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Tenha modelos de diferentes estilos para apresentar aos seus clientes.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-stone-200 flex gap-3.5 sm:gap-4 items-start">
              <div className="shrink-0 text-3xl leading-none">🎨</div>
              <div>
                <h3 className="font-bold uppercase text-red-900 mb-1 text-sm sm:text-base">
                  Oferecer peças com visual caprichado
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Trabalhe com personagens, cores e detalhes que se complementam.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-stone-200 flex gap-3.5 sm:gap-4 items-start">
              <div className="shrink-0 text-3xl leading-none">⏱️</div>
              <div>
                <h3 className="font-bold uppercase text-red-900 mb-1 text-sm sm:text-base">
                  Economizar tempo de criação
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Use as artes prontas como base para sua produção.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-stone-200 flex gap-3.5 sm:gap-4 items-start">
              <div className="shrink-0 text-3xl leading-none">✂️</div>
              <div>
                <h3 className="font-bold uppercase text-red-900 mb-1 text-sm sm:text-base">
                  Produzir papelaria personalizada
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Acrescente opções natalinas ao seu portfólio de topos de bolo.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-stone-200 flex gap-3.5 sm:gap-4 items-start">
              <div className="shrink-0 text-3xl leading-none">🎁</div>
              <div>
                <h3 className="font-bold uppercase text-red-900 mb-1 text-sm sm:text-base">
                  Atender diferentes preferências
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Ofereça desde personagens fofos até composições cristãs.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-stone-200 flex gap-3.5 sm:gap-4 items-start">
              <div className="shrink-0 text-3xl leading-none">📂</div>
              <div>
                <h3 className="font-bold uppercase text-red-900 mb-1 text-sm sm:text-base">
                  Manter suas artes organizadas
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Escolha os modelos em uma coleção separada por temas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Tudo o que você vai receber */}
      <section className="py-10 sm:py-14 px-4 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 uppercase text-red-900">
          Tudo o que você vai receber
        </h2>

        <div className="max-w-2xl mx-auto rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border-2 sm:border-4 border-amber-400 bg-stone-900 text-white shadow-xl">
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-600 text-white rounded-full px-3.5 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="size-3.5 sm:size-4" /> ACESSO IMEDIATO
            </span>
          </div>

          <img
            src="https://i.ibb.co/H5Y531n/noel.webp"
            alt="Topos de Bolo Natalinos"
            loading="lazy"
            decoding="async"
            className="w-full max-w-md mx-auto my-4 sm:my-5 rounded-xl sm:rounded-2xl shadow-md border border-stone-700 block"
          />

          <ul className="max-w-lg mx-auto space-y-2.5 sm:space-y-3 text-left text-white border-t border-stone-700 pt-4 sm:pt-5 text-xs sm:text-sm md:text-base">
            <li className="flex gap-2 sm:gap-2.5 items-start border-b border-stone-800 pb-2 font-medium">
              <Check className="size-4 sm:size-5 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>+35 modelos de topos de bolo natalinos</strong> exclusivos.</span>
            </li>
            <li className="flex gap-2 sm:gap-2.5 items-start border-b border-stone-800 pb-2 font-medium">
              <Check className="size-4 sm:size-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Cinco coleções completas com estilos visuais diferentes.</span>
            </li>
            <li className="flex gap-2 sm:gap-2.5 items-start border-b border-stone-800 pb-2 font-medium">
              <Check className="size-4 sm:size-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Personagens em destaque e cores vivas prontas para impressão.</span>
            </li>
            <li className="flex gap-2 sm:gap-2.5 items-start border-b border-stone-800 pb-2 font-medium">
              <Check className="size-4 sm:size-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Frases natalinas integradas às composições (Feliz Natal, Boas Festas, etc.).</span>
            </li>
            <li className="flex gap-2 sm:gap-2.5 items-start border-b border-stone-800 pb-2 font-medium">
              <Check className="size-4 sm:size-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Arquivos organizados por coleção e fáceis de encontrar.</span>
            </li>
            <li className="flex gap-2 sm:gap-2.5 items-start border-b border-stone-800 pb-2 font-medium">
              <Check className="size-4 sm:size-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Formatos incluídos: <strong>PDF em alta resolução (300 DPI)</strong> pronto para imprimir + <strong>PNG com fundo transparente</strong>.</span>
            </li>
            <li className="flex gap-2 sm:gap-2.5 items-start border-b border-stone-800 pb-2 font-medium">
              <Check className="size-4 sm:size-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Modelos com peças preparadas para <strong>montagem em camadas e relevo 3D</strong> com fita banana.</span>
            </li>
          </ul>

          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-stone-800 text-left">
            <p className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-amber-400 mb-2">
              Conheça as coleções incluídas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm font-semibold text-stone-200">
              <p>✅ Natal clássico</p>
              <p>✅ Natal elegante com personagens</p>
              <p>✅ Natal fofo</p>
              <p>✅ Natal confeitaria</p>
              <p>✅ Natal cristão</p>
            </div>
          </div>

          <p className="mt-5 text-[11px] sm:text-xs text-stone-400 italic">
            Produto digital. Impressão, materiais e montagem são realizados pelo comprador.
          </p>
        </div>
      </section>

      {/* Section 7: Bônus Exclusivos */}
      <section className="py-10 sm:py-14 px-4 bg-red-950 text-white text-center">
        <h2 className="text-xl sm:text-3xl md:text-5xl font-black mb-2 uppercase text-white">
          E Não Para Por Aí…
        </h2>
        <p className="text-sm sm:text-lg md:text-xl italic mt-2 sm:mt-3 mb-5 sm:mb-6 text-amber-300 font-medium px-2">
          5 bônus inclusos no Plano Completo
        </p>

        <div className="flex justify-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-600 text-white rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold shadow-md">
            <Flame className="size-3.5 sm:size-4 text-amber-300" />
            <span>5 BÔNUS ESPECIAIS</span>
          </span>
        </div>

        {/* Bonus Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          {/* Bonus 1 */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl text-stone-900 shadow-md flex flex-col justify-between border-2 border-amber-200">
            <div>
              <div className="flex justify-center mb-2.5 sm:mb-3">
                <span className="bg-amber-400 text-stone-950 px-3 py-0.5 font-black text-xs rounded-full">
                  🎁 BÔNUS #1
                </span>
              </div>
              <img
                src="https://i.ibb.co/qLqj8PcT/bonus-011-1.webp"
                alt="Bônus 1 - Guia de Impressão e Materiais"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl mb-3 shadow-xs block"
              />
              <div className="text-center text-amber-500 text-xs sm:text-sm mb-1.5">★★★★★</div>
              <h4 className="text-sm sm:text-base font-black mb-1.5 text-red-900 text-center">
                Guia de Impressão e Materiais
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mb-3 sm:mb-4 leading-relaxed text-center sm:text-left">
                Orientações sobre papel, configurações de impressão e materiais para preparar seus topos com cores vivas e alta durabilidade.
              </p>
            </div>
            <div className="border border-emerald-500 bg-emerald-50 text-emerald-900 rounded-lg py-1.5 text-center text-xs font-bold">
              Valor: <span className="line-through text-red-600 font-bold">R$29</span> <span className="text-emerald-700 font-black">GRÁTIS</span>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl text-stone-900 shadow-md flex flex-col justify-between border-2 border-amber-200">
            <div>
              <div className="flex justify-center mb-2.5 sm:mb-3">
                <span className="bg-amber-400 text-stone-950 px-3 py-0.5 font-black text-xs rounded-full">
                  🎁 BÔNUS #2
                </span>
              </div>
              <img
                src="https://i.ibb.co/Z6WYtggw/bonus-02-1.webp"
                alt="Bônus 2 - Guia de Montagem em Camadas"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl mb-3 shadow-xs block"
              />
              <div className="text-center text-amber-500 text-xs sm:text-sm mb-1.5">★★★★★</div>
              <h4 className="text-sm sm:text-base font-black mb-1.5 text-red-900 text-center">
                Guia de Montagem em Camadas
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mb-3 sm:mb-4 leading-relaxed text-center sm:text-left">
                Um passo a passo para posicionar as peças, utilizar espaçadores (fita banana) e montar o acabamento com relevo profissional.
              </p>
            </div>
            <div className="border border-emerald-500 bg-emerald-50 text-emerald-900 rounded-lg py-1.5 text-center text-xs font-bold">
              Valor: <span className="line-through text-red-600 font-bold">R$29</span> <span className="text-emerald-700 font-black">GRÁTIS</span>
            </div>
          </div>

          {/* Bonus 3 */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl text-stone-900 shadow-md flex flex-col justify-between border-2 border-amber-200">
            <div>
              <div className="flex justify-center mb-2.5 sm:mb-3">
                <span className="bg-amber-400 text-stone-950 px-3 py-0.5 font-black text-xs rounded-full">
                  🎁 BÔNUS #3
                </span>
              </div>
              <img
                src="https://i.ibb.co/s92SKmk4/bonus-03-1.webp"
                alt="Bônus 3 - Mini Toppers Natalinos"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl mb-3 shadow-xs block"
              />
              <div className="text-center text-amber-500 text-xs sm:text-sm mb-1.5">★★★★★</div>
              <h4 className="text-sm sm:text-base font-black mb-1.5 text-red-900 text-center">
                Mini Toppers Natalinos
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mb-3 sm:mb-4 leading-relaxed text-center sm:text-left">
                Modelos complementares para decorar cupcakes e doces em harmonia com a coleção, aumentando o valor das suas encomendas.
              </p>
            </div>
            <div className="border border-emerald-500 bg-emerald-50 text-emerald-900 rounded-lg py-1.5 text-center text-xs font-bold">
              Valor: <span className="line-through text-red-600 font-bold">R$35</span> <span className="text-emerald-700 font-black">GRÁTIS</span>
            </div>
          </div>

          {/* Bonus 4 */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl text-stone-900 shadow-md flex flex-col justify-between border-2 border-amber-200">
            <div>
              <div className="flex justify-center mb-2.5 sm:mb-3">
                <span className="bg-amber-400 text-stone-950 px-3 py-0.5 font-black text-xs rounded-full">
                  🎁 BÔNUS #4
                </span>
              </div>
              <img
                src="https://i.ibb.co/dsbgxc2z/bonus-04-1.webp"
                alt="Bônus 4 - Tags Natalinas de Agradecimento"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl mb-3 shadow-xs block"
              />
              <div className="text-center text-amber-500 text-xs sm:text-sm mb-1.5">★★★★★</div>
              <h4 className="text-sm sm:text-base font-black mb-1.5 text-red-900 text-center">
                Tags Natalinas de Agradecimento
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mb-3 sm:mb-4 leading-relaxed text-center sm:text-left">
                Tags para acompanhar as embalagens e dar um toque especial e memorável à entrega das encomendas dos seus clientes.
              </p>
            </div>
            <div className="border border-emerald-500 bg-emerald-50 text-emerald-900 rounded-lg py-1.5 text-center text-xs font-bold">
              Valor: <span className="line-through text-red-600 font-bold">R$25</span> <span className="text-emerald-700 font-black">GRÁTIS</span>
            </div>
          </div>

          {/* Bonus 5 */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl text-stone-900 shadow-md flex flex-col justify-between border-2 border-amber-200">
            <div>
              <div className="flex justify-center mb-2.5 sm:mb-3">
                <span className="bg-amber-400 text-stone-950 px-3 py-0.5 font-black text-xs rounded-full">
                  🎁 BÔNUS #5
                </span>
              </div>
              <img
                src="https://i.ibb.co/pvqV0wHn/t.png"
                alt="Bônus 5 - Coleção de Topos de Ano-Novo"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl mb-3 shadow-xs block"
              />
              <div className="text-center text-amber-500 text-xs sm:text-sm mb-1.5">★★★★★</div>
              <h4 className="text-sm sm:text-base font-black mb-1.5 text-red-900 text-center">
                Coleção de Topos de Ano-Novo
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mb-3 sm:mb-4 leading-relaxed text-center sm:text-left">
                Modelos festivos para decorar bolos de Réveillon com um acabamento especial. Amplie seu catálogo e continue oferecendo opções aos seus clientes depois do Natal.
              </p>
            </div>
            <div className="border border-emerald-500 bg-emerald-50 text-emerald-900 rounded-lg py-1.5 text-center text-xs font-bold">
              Valor: <span className="line-through text-red-600 font-bold">R$35</span> <span className="text-emerald-700 font-black">GRÁTIS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Escolha a opção ideal para você (#oferta) */}
      <section id="oferta" className="py-12 sm:py-16 px-4 bg-stone-900 text-white">
        <h2 className="text-lg sm:text-2xl font-black text-center text-amber-400 mb-2 flex items-center justify-center gap-2">
          <Clock className="size-5 sm:size-6 text-amber-400 shrink-0" />
          <span>ÚLTIMA CHANCE — OFERTA ESPECIAL DE NATAL</span>
        </h2>
        <p className="text-center text-xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-12 text-white">
          Escolha a opção ideal para você
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Plano Básico */}
          <div className="bg-white text-stone-900 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-lg border-2 border-stone-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-center mb-1 text-stone-900">PLANO BÁSICO</h3>
              <p className="font-bold text-center text-red-800 mb-2 text-sm sm:text-base">+35 Topos de Bolo Natalinos Premium</p>
              <p className="text-xs sm:text-sm text-stone-600 text-center mb-5 sm:mb-6 leading-relaxed">
                Para quem quer as artes principais para preparar sua produção de Natal.
              </p>

              <ul className="space-y-2.5 sm:space-y-3 mb-6 text-xs sm:text-sm">
                <li className="flex gap-2.5 items-start">
                  <Check className="size-4 sm:size-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>+35 modelos de topos natalinos prontos.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="size-4 sm:size-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cinco coleções temáticas de estilos diferentes.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="size-4 sm:size-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Arquivos em PDF pronto para imprimir e PNG em alta resolução.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="size-4 sm:size-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Entrega imediata no seu e-mail após a confirmação.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="size-4 sm:size-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acesso vitalício para baixar quando quiser.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-center my-4 sm:my-6 py-3 sm:py-4 bg-stone-50 rounded-2xl border border-stone-200">
                <p className="text-stone-400 text-xs sm:text-sm font-semibold">
                  DE <span className="line-through">R$37,90</span> POR APENAS:
                </p>
                <p className="text-3xl sm:text-5xl font-black text-stone-950 mt-1">R$ 19,90</p>
              </div>

              <a
                href="https://pay.kiwify.com.br/7UvVgDA"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-stone-800 hover:bg-stone-900 text-white font-extrabold py-3.5 sm:py-4 rounded-full transition-colors text-xs sm:text-base shadow-md uppercase tracking-wider"
              >
                QUERO O PLANO BÁSICO →
              </a>
            </div>
          </div>

          {/* Plano Completo (Destaque) */}
          <div className="bg-white text-stone-900 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl border-3 sm:border-4 border-amber-400 relative flex flex-col justify-between mt-4 md:mt-0">
            <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-stone-950 px-3 sm:px-4 py-1 rounded-full font-black text-[11px] sm:text-xs md:text-sm flex items-center gap-1 shadow-md uppercase tracking-wider whitespace-nowrap">
              <Sparkles className="size-3.5 sm:size-4" /> MAIS VENDIDO & RECOMENDADO
            </div>

            <div>
              <p className="text-center text-red-800 font-bold text-[11px] sm:text-xs mt-3 flex items-center justify-center gap-1">
                <Clock className="size-3.5" /> COLEÇÃO NATAL PREMIUM + MATERIAIS EXTRAS
              </p>

              <h3 className="text-xl sm:text-2xl font-black text-center my-1.5 sm:my-2 text-stone-950">PLANO COMPLETO</h3>
              <p className="text-center font-bold mb-1.5 sm:mb-2 text-emerald-800 text-xs sm:text-base">
                Coleção Natal Premium + 5 Bônus Exclusivos
              </p>
              <p className="text-xs sm:text-sm text-center mb-3 sm:mb-4 text-stone-600 leading-relaxed">
                Para quem quer os modelos principais e os complementos para impressão, montagem e apresentação das peças.
              </p>

              <img
                src="https://i.ibb.co/H5Y531n/noel.webp"
                alt="Plano Completo"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 shadow-md block border-2 sm:border-3 border-amber-400"
              />

              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm">
                <li className="flex gap-2 items-start font-semibold text-stone-900">
                  <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tudo o que está no Plano Básico (+35 modelos nas 5 coleções).</span>
                </li>
                <li className="flex gap-2 items-start text-stone-700">
                  <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Arquivos em PDF pronto para imprimir e PNG em alta resolução.</span>
                </li>
                <li className="flex gap-2 items-start text-stone-700">
                  <Check className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Peças preparadas para recorte e montagem em camadas 3D.</span>
                </li>
                <li className="flex gap-2 items-start text-emerald-900 font-semibold bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">
                  <Gift className="size-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Bônus #1: Guia de Impressão e Materiais.</span>
                </li>
                <li className="flex gap-2 items-start text-emerald-900 font-semibold bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">
                  <Gift className="size-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Bônus #2: Guia de Montagem em Camadas (Passo a Passo).</span>
                </li>
                <li className="flex gap-2 items-start text-emerald-900 font-semibold bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">
                  <Gift className="size-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Bônus #3: Mini Toppers Natalinos para doces e cupcakes.</span>
                </li>
                <li className="flex gap-2 items-start text-emerald-900 font-semibold bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">
                  <Gift className="size-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Bônus #4: Tags Natalinas de Agradecimento para embalagens.</span>
                </li>
                <li className="flex gap-2 items-start text-emerald-900 font-semibold bg-emerald-50 p-1.5 rounded-lg border border-emerald-200">
                  <Gift className="size-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Bônus #5: Coleção de Topos de Ano-Novo para Réveillon.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-center my-3 sm:my-4 py-3 sm:py-4 bg-amber-50/80 rounded-2xl border-2 border-amber-300">
                <p className="text-stone-500 text-xs sm:text-sm font-semibold">
                  DE <span className="line-through text-red-600 font-bold">R$67,90</span> POR APENAS:
                </p>
                <p className="text-3xl sm:text-5xl font-black text-emerald-600 mt-1">R$ 29,90</p>
              </div>

              <a
                href="https://pay.kiwify.com.br/18TUFST"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3.5 sm:py-4 rounded-full hover:scale-105 transition-transform animate-pulse shadow-md text-xs sm:text-base uppercase tracking-wider"
              >
                QUERO A COLEÇÃO COMPLETA →
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 sm:mt-10 px-2">
          <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-2 border-amber-400/60 rounded-2xl p-4 sm:p-5 text-center shadow-lg shadow-black/40 ring-2 ring-amber-400/20">
            <p className="text-stone-200 text-xs sm:text-sm md:text-base leading-relaxed">
              Uma coleção organizada permite apresentar diferentes estilos sem começar cada composição do zero. Escolha os modelos que combinam com seu público e prepare suas peças para a temporada.
            </p>
          </div>
        </div>
      </section>


      {/* Section 10: Compre com tranquilidade (Garantia) */}
      <section className="py-10 sm:py-14 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto border border-stone-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xs bg-stone-50/50">
          <img
            src="https://i.ibb.co/zWF3vnXc/garantia.png"
            alt="Garantia Incondicional de 7 dias"
            loading="lazy"
            decoding="async"
            className="w-32 sm:w-44 h-auto mx-auto mb-3 sm:mb-4 object-contain"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-3 text-stone-900 uppercase">
            GARANTIA INCONDICIONAL DE 7 DIAS
          </h2>
          <p className="text-stone-700 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base leading-relaxed">
            Você conta com <strong>garantia incondicional de 7 dias</strong>. Baixe os modelos, analise as ilustrações, os formatos e teste a impressão.
          </p>
          <p className="text-stone-700 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
            Se por qualquer motivo a coleção não atender às suas necessidades de produção, basta solicitar o reembolso e você recebe 100% do seu dinheiro de volta.
          </p>
          <p className="font-extrabold text-stone-900 text-xs sm:text-sm md:text-base mb-5 sm:mb-6">
            ✔ Sem burocracia ✔ Sem perguntas ✔ Todo o risco é nosso
          </p>

        </div>
      </section>

      {/* Section 11: Como funciona (Passo a Passo) */}
      <section className="py-10 sm:py-14 px-4 bg-red-950 text-white text-center">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3 uppercase text-amber-300">
          Como funciona
        </h2>
        <p className="text-stone-300 mb-8 sm:mb-10 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-medium px-2">
          Passo a passo simples para acelerar suas encomendas de Natal.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
          {/* Step 1 */}
          <div className="bg-stone-900 border border-stone-700 p-4 sm:p-6 rounded-2xl shadow-xs">
            <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-400 text-stone-950 text-base sm:text-lg font-black mb-3 sm:mb-4">
              1
            </div>
            <h3 className="font-black text-white text-sm sm:text-base mb-1">Escolha seu pacote</h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Selecione o Plano Básico ou o Plano Completo e finalize a compra segura.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-stone-900 border border-stone-700 p-4 sm:p-6 rounded-2xl shadow-xs">
            <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-400 text-stone-950 text-base sm:text-lg font-black mb-3 sm:mb-4">
              2
            </div>
            <h3 className="font-black text-white text-sm sm:text-base mb-1">Receba os arquivos</h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Após a confirmação do pagamento, você recebe os links de acesso imediatamente por e-mail.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-stone-900 border border-stone-700 p-4 sm:p-6 rounded-2xl shadow-xs">
            <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-400 text-stone-950 text-base sm:text-lg font-black mb-3 sm:mb-4">
              3
            </div>
            <h3 className="font-black text-white text-sm sm:text-base mb-1">Escolha e imprima</h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Selecione o modelo desejado e prepare a impressão conforme as orientações e formatos disponíveis.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-stone-900 border border-stone-700 p-4 sm:p-6 rounded-2xl shadow-xs">
            <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-400 text-stone-950 text-base sm:text-lg font-black mb-3 sm:mb-4">
              4
            </div>
            <h3 className="font-black text-white text-sm sm:text-base mb-1">Recorte e monte</h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Recorte as peças, faça a montagem e acrescente os suportes para finalizar seu topo.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 px-4">
          <a
            href="#oferta"
            onClick={scrollToOffer}
            className="w-full sm:w-auto inline-block bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:via-green-400 hover:to-emerald-500 text-white font-black uppercase rounded-full shadow-xl shadow-emerald-600/35 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse text-xs sm:text-base md:text-lg px-6 sm:px-12 py-3.5 sm:py-4 leading-tight ring-2 ring-emerald-300/60"
          >
            QUERO COMEÇAR MINHA PRODUÇÃO →
          </a>
        </div>
      </section>

      {/* Section 12: Perguntas Frequentes (FAQ) */}
      <section className="py-10 sm:py-14 px-4 bg-white">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-center mb-6 sm:mb-8 text-red-950 uppercase">
          Perguntas frequentes
        </h2>

        <div className="max-w-3xl mx-auto bg-stone-50 rounded-2xl p-4 sm:p-7 shadow-xs border border-stone-200 space-y-1.5 sm:space-y-2">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border-b border-stone-200/80 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left py-3.5 sm:py-4 flex justify-between items-center gap-3 sm:gap-4 font-bold text-stone-900 cursor-pointer text-xs sm:text-sm md:text-base hover:text-red-800 transition-colors"
                >
                  <span className="leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`size-4 sm:size-5 text-stone-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-red-700' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-3.5 sm:pb-4 text-xs sm:text-sm text-stone-700 leading-relaxed pr-2">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 bg-stone-950 text-center text-[11px] sm:text-xs text-stone-200 w-full border-t border-stone-800">
        <div className="max-w-3xl mx-auto leading-relaxed">
          <p className="mb-1.5 sm:mb-2 font-bold text-white">
            Copyright © 2026 | Topos de Bolo Natalinos Premium
          </p>
          <p className="mb-1.5 sm:mb-2 text-stone-200">
            Produto digital de artes para papelaria personalizada.
          </p>
          <p className="text-stone-200 mb-1.5 sm:mb-2">
            Este site não possui vínculo com Facebook, Instagram ou Google.
          </p>
          <p className="text-stone-200 mb-1.5 sm:mb-2 leading-relaxed">
            A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais (Art. 184 do Código Penal e Lei nº 9.610/98), sujeitando os infratores às sanções civis e criminais previstas na legislação aplicável.
          </p>
          <p className="text-stone-200">
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
