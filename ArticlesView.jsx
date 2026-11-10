import React, { useState, useEffect, useMemo, useRef } from 'react';

/**
 * ArticlesView - Componente de Artigos & Reflexões estilo "The School of Life"
 * para a aplicação Palavras Afirmativas.
 *
 * Características:
 * - Design editorial limpo, acolhedor e responsivo com Tailwind CSS.
 * - Barra de categorias com filtro dinâmico e busca textual.
 * - Cartões elegantes com tempo de leitura, badges e microinterações.
 * - Visualização imersiva de leitura com:
 *    • O que a ciência explica (pesquisas e dados neurobiológicos)
 *    • Na prática do dia a dia (passos simples e aplicáveis)
 *    • Palavra Afirmativa de meditação destacada com cópia e áudio
 * - Navegação suave entre artigos ("Próximo" / "Anterior").
 */

// Banco de Artigos Curados fundamentados em psicologia, neurociência e pedagogia inclusiva
const ARTICLES_DATA = [
  {
    id: 'neurociencia-palavras-afetuosas',
    category: 'Neurociência & Emoções',
    categoryTheme: 'emerald',
    title: 'O Efeito Neurobiológico das Palavras Afetuosas: Por que seu cérebro relaxa ao ouvir validação',
    readTime: '4 min de leitura',
    summary: 'Entenda como frases de carinho e aceitação incondicional desarmam a amígdala cerebral, diminuem o cortisol e ativam cascatas de ocitocina no sistema nervoso.',
    lead: 'Quando um dia pesado parece interminável, poucas coisas têm o poder de aliviar a musculatura tensa quanto uma palavra de validação sincera. A neurobiologia moderna explica por que o afeto não é mero capricho poético, mas um regulador fisiológico de sobrevivência.',
    science: [
      {
        highlight: 'Desarmando a Amígdala Cerebral',
        text: 'A amígdala é a sentinela do cérebro para ameaças. Quando recebemos críticas ou vivemos sob estresse constante, ela dispara sinais para o eixo HPA produzir cortisol e adrenalina. Palavras de aceitação comunicam ao cérebro primitivo que o ambiente é seguro, reduzindo a hiperatividade da amígdala em minutos.'
      },
      {
        highlight: 'A Ocitocina e a Sensação de Pertença',
        text: 'Pesquisas em ressonância magnética funcional demonstram que ouvir palavras carinhosas de pessoas de confiança estimula a liberação de ocitocina e opioides endógenos, os mesmos neurotransmissores responsáveis pelo alívio da dor física e pelo apego seguro.'
      },
      {
        highlight: 'Ressonância Neural Parassimpática',
        text: 'A voz suave e o vocabulário acolhedor acionam o nervo vago ventral (Teoria Polivagal de Porges), diminuindo a frequência cardíaca e induzindo o organismo ao estado de "descansar e digerir".'
      }
    ],
    practice: [
      {
        step: '1',
        title: 'Valide o sentimento antes de tentar consertar o problema',
        description: 'Em vez de dizer "não se preocupe com isso", experimente: "Eu entendo perfeitamente por que você está se sentindo sobrecarregado hoje. Faz todo o sentido."'
      },
      {
        step: '2',
        title: 'Elogie o esforço e a coragem, não a perfeição',
        description: 'Troque "você é tão inteligente" por "vi o quanto você se dedicou e perseverou nessa tarefa difícil, e tenho muito orgulho da sua postura".'
      },
      {
        step: '3',
        title: 'Use o poder da pausa e do olhar atento',
        description: 'Antes de pronunciar a palavra afirmativa, respire, olhe nos olhos (ou respeite a preferência de contato visual) e permita que o outro sinta a sua presença desarmada.'
      }
    ],
    affirmation: 'O meu valor não reside na perfeição inalcançável, mas na dignidade de cada passo sincero que dou. Eu me permito desacelerar, respirar com calma e receber o carinho que me cerca.',
    reference: 'Inspirado em Stephen Porges (Teoria Polivagal) e Carl Rogers (Aceitação Incondicional)'
  },
  {
    id: 'o-conceito-de-holding',
    category: 'Relações & Empatia',
    categoryTheme: 'rose',
    title: 'O "Holding" Emocional: Como criar um abrigo seguro para quem você ama',
    readTime: '5 min de leitura',
    summary: 'Inspirado na clássica teoria de Donald Winnicott, descubra como a presença acolhedora e não-invasiva permite que o outro atravesse crises sem desmoronar.',
    lead: 'O termo inglês "holding" refere-se originariamente ao ato físico da mãe de segurar o bebê no colo. Na vida adulta e nas relações afetivas, o holding transforma-se na capacidade psicológica de sustentar a tempestade emocional do outro sem tentar consertá-la às pressas.',
    science: [
      {
        highlight: 'A Teoria do Espaço Potencial de Winnicott',
        text: 'Donald Winnicott ensinou que o ser humano precisa de um ambiente suficientemente seguro para integrar suas partes frágeis. Quando alguém em crise encontra um interlocutor que não entra em pânico, o cérebro aprende que as emoções intensas não são fatais.'
      },
      {
        highlight: 'Co-Regulação e Neurônios-Espelho',
        text: 'O cérebro humano é um órgão social. Se você mantém sua respiração lenta e seu tônus relaxado ao lado de alguém ansioso, os neurônios-espelho da outra pessoa captam os sinais de estabilidade e iniciam uma regulação fisiológica mútua.'
      },
      {
        highlight: 'O Perigo da "Invalidação Bem-Intencionada"',
        text: 'Frases como "vai passar rápido" ou "tem gente em situação pior" ativam a sensação de solidão emocional profunda. O verdadeiro abrigo não minimiza a dor; ele simplesmente senta ao lado dela.'
      }
    ],
    practice: [
      {
        step: '1',
        title: 'Ofereça o silêncio compartilhado',
        description: 'Muitas vezes, a maior declaração de amor é sentar-se ao lado, em silêncio, sem forçar um diálogo quando as palavras ainda estão engasgadas.'
      },
      {
        step: '2',
        title: 'Sustente o ambiente físico',
        description: 'Reduza ruídos agressivos, ofereça um copo de água, um cobertor macio ou diminua as luzes. O conforto sensorial abre espaço para a regulação do corpo.'
      },
      {
        step: '3',
        title: 'Comunique disponibilidade incondicional',
        description: 'Diga: "Não precisa falar nada agora. Só quero que você saiba que estou aqui com você e não vou embora."'
      }
    ],
    affirmation: 'Eu não preciso carregar o peso do mundo nas minhas costas. Tenho o direito de repousar em um espaço seguro e saber que sou profundamente amado exatamente pelo que sou.',
    reference: 'Fundamentado em Donald Winnicott (O Ambiente e os Processos de Maturação)'
  },
  {
    id: 'microvitorias-sobrecarga',
    category: 'Autocuidado & Presença',
    categoryTheme: 'violet',
    title: 'A Força das Microvitórias: Superando a paralisia e o desânimo cotidiano',
    readTime: '4 min de leitura',
    summary: 'Aprenda a aplicar o princípio psicológico das microvitórias de Jordan Peterson para quebrar o ciclo de sobrecarga mental e resgatar o entusiasmo.',
    lead: 'Diante de pilhas de responsabilidades, exaustão mental ou ansiedade, a mente tende a entrar em paralisia executiva. A saída nunca está em exigir saltos gigantescos de si mesmo, mas em encontrar o menor passo viável que restaure a dignidade pessoal.',
    science: [
      {
        highlight: 'O Esgotamento do Córtex Pré-Frontal',
        text: 'Quando somos bombardeados por estímulos, o córtex pré-frontal — responsável pelo planejamento e controle inibitório — sofre depleção metabólica. Exigir grandes decisões de um cérebro fatigado gera sensação iminente de colapso.'
      },
      {
        highlight: 'O Circuito de Recompensa da Dopamina Basal',
        text: 'A dopamina não é apenas o neurotransmissor do prazer, mas o condutor da motivação e da busca. Ela é liberada quando atingimos uma meta previsível. Cumprir uma microtarefa de 3 minutos já é suficiente para religar o circuito dopaminérgico.'
      },
      {
        highlight: 'A Comparação como Veneno Psicológico',
        text: 'A regra fundamental de Peterson alerta: "Compare-se com quem você era ontem, não com quem outra pessoa é hoje". A comparação com terceiros distorce os dados e anula os avanços reais que você conquistou.'
      }
    ],
    practice: [
      {
        step: '1',
        title: 'Defina a tarefa "pequena demais para falhar"',
        description: 'Se arrumar o quarto parece impossível, arrume apenas um travesseiro. Se ler um livro é pesado, leia meio parágrafo. O segredo é quebrar a inércia.'
      },
      {
        step: '2',
        title: 'Reconheça o mérito conscientemente',
        description: 'Ao terminar o microgesto, faça uma pausa consciente e diga a si mesmo: "Fiz o que estava ao meu alcance agora, e isso teve valor."'
      },
      {
        step: '3',
        title: 'Proteja a sua régua pessoal',
        description: 'Ao final do dia, liste três pequenas coisas que deram certo, por mais singelas que pareçam (uma refeição em paz, um telefonema afetuoso, um banho revigorante).'
      }
    ],
    affirmation: 'Hoje eu honro o meu próprio ritmo. Cada pequeno avanço, mesmo invisível para o mundo lá fora, constrói a fortaleza da minha serenidade e do meu caráter.',
    reference: 'Inspirado em Jordan Peterson (12 Regras para a Vida) e na Neurociência da Vontade'
  },
  {
    id: 'neurodiversidade-autismo-comunicacao',
    category: 'Neurodiversidade & Inclusão',
    categoryTheme: 'amber',
    title: 'Comunicação Compassiva no Autismo: Palavras que respeitam o tempo da mente',
    readTime: '6 min de leitura',
    summary: 'Como criar pontes de diálogo claras, descomplicadas e cheias de afeto com pessoas no espectro autista ou com dificuldades sensoriais e de aprendizagem.',
    lead: 'No espectro autista e na neurodiversidade, o afeto mais profundo raramente mora em floreios poéticos ou frases de duplo sentido. Ele floresce na transparência cristalina, na previsibilidade amorosa e na paciência para respeitar o processamento sensorial único.',
    science: [
      {
        highlight: 'Filtro Sensorial e Processamento Cognitivo',
        text: 'Pessoas autistas frequentemente apresentam diferenças no gating sensorial talâmico, fazendo com que sons, luzes e conversas simultâneas sobrecarreguem o sistema nervoso. A linguagem direta e calma economiza energia cognitiva preciosa.'
      },
      {
        highlight: 'A Carga do "Masking" (Camuflagem Social)',
        text: 'Tentar se encaixar o tempo todo em normas neurotípicas exaustivas provoca esgotamento extremo (burnout autista). Um ambiente que aceita a pessoa sem exigir comportamentos sociais forçados previne crises e restaura a saúde mental.'
      },
      {
        highlight: 'A Teoria do Desenvolvimento Proximal de Vygotsky',
        text: 'Lev Vygotsky enfatizou que a aprendizagem e o amadurecimento ocorrem através da mediação afetiva. Quando o mediador ajusta o ritmo e respeita a zona individual de desenvolvimento, o potencial da pessoa desabrocha.'
      }
    ],
    practice: [
      {
        step: '1',
        title: 'Dê tempo para o processamento da resposta',
        description: 'Após fazer uma pergunta ou propor uma atividade, aguarde de 10 a 15 segundos em silêncio sereno. Evite repetir a frase várias vezes seguidas, pois isso reinicia a fila de processamento cerebral.'
      },
      {
        step: '2',
        title: 'Prefira instruções claras e com previsibilidade',
        description: 'Em vez de ordens abstratas como "comporte-se", seja específico e amável: "Vamos entrar na loja, olhar os livros e em 15 minutos voltaremos para casa".'
      },
      {
        step: '3',
        title: 'Valide os interesses especiais com entusiasmo genuíno',
        description: 'Os hiperfocos são âncoras de alegria e regulação emocional. Quando você escuta com curiosidade o tema favorito de uma pessoa autista, você constrói um vínculo inabalável.'
      }
    ],
    affirmation: 'A minha mente tem uma arquitetura singular, profunda e preciosa. Eu tenho o direito de viver no meu próprio tempo, protegido de ruídos desnecessários e cercado por quem me ama de verdade.',
    reference: 'Fundamentado em Lev Vygotsky, Uta Frith e Estudos Contemporâneos de Neurodiversidade'
  },
  {
    id: 'autocompaixao-contra-autocritica',
    category: 'Autocuidado & Presença',
    categoryTheme: 'violet',
    title: 'A Tirania da Autocrítica: Como calar o juiz interno com a autocompaixão gentil',
    readTime: '5 min de leitura',
    summary: 'Descubra por que ser severo consigo mesmo não aumenta a disciplina — apenas mina a resiliência — e como adotar a voz acolhedora de um mentor amoroso.',
    lead: 'Muitos de nós fomos ensinados a acreditar que a autocrítica implacável é o único combustível para o sucesso. No entanto, décadas de pesquisas em psicologia clínica provam exatamente o oposto: a culpa paralisante adoece, enquanto a compaixão capacita.',
    science: [
      {
        highlight: 'O Sistema de Ameaça vs. Sistema de Cuidado (Paul Gilbert)',
        text: 'A autocrítica severa ativa o sistema de ameaça do cérebro — o mesmo que nos prepara para lutar contra um predador. O corpo fica em estado de alerta tóxico. Já a autocompaixão aciona o sistema de afiliação e cuidado, liberando endorfinas restauradoras.'
      },
      {
        highlight: 'Os Três Pilares da Autocompaixão (Kristin Neff)',
        text: '1) Autobondade em vez de autojulgamento severo; 2) Humanidade compartilhada (saber que sofrer e errar faz parte de ser humano); 3) Mindfulness (observar os pensamentos sem se afogar neles).'
      },
      {
        highlight: 'Maior Resiliência Pós-Fracasso',
        text: 'Pessoas que praticam a autocompaixão assumem mais responsabilidade por seus erros e se recuperam de frustrações com muito mais agilidade, pois não temem que o erro destrua o seu valor intrínseco.'
      }
    ],
    practice: [
      {
        step: '1',
        title: 'O teste do melhor amigo',
        description: 'Quando cometer uma falha, pergunte-se imediatamente: "Eu diria essas palavras cruéis a um amigo querido ou a um filho meu?". Se a resposta for não, não diga a você mesmo.'
      },
      {
        step: '2',
        title: 'O gesto físico reconfortante',
        description: 'Colocar suavemente uma das mãos sobre o peito e fechar os olhos por 20 segundos estimula receptores táteis que sinalizam proteção imediata ao cérebro.'
      },
      {
        step: '3',
        title: 'Reenquadre a imperfeição como humanidade',
        description: 'Substitua o pensamento "eu sempre estrago tudo" por "hoje foi um dia desafiador, eu cometi um erro como qualquer ser humano, mas amanhã terei uma nova chance de consertar".'
      }
    ],
    affirmation: 'Eu sou digno de paciência, compaixão e gentileza. Perdoo os meus tropeços de hoje, acolho a minha humanidade e recomeço com um coração leve e em paz.',
    reference: 'Inspirado nas pesquisas da Dra. Kristin Neff e na Terapia Focada na Compaixão de Paul Gilbert'
  },
  {
    id: 'maternidade-suficientemente-boa',
    category: 'Acolhimento Maternal',
    categoryTheme: 'sky',
    title: 'Maternidade "Suficientemente Boa": O alívio de abandonar o mito da perfeição',
    readTime: '5 min de leitura',
    summary: 'A ideia libertadora de que os filhos não precisam de pais perfeitos, mas de figuras humanas, presentes e dispostas a reparar pequenas falhas com ternura.',
    lead: 'A pressão social contemporânea construiu uma armadilha perigosa: a ilusão de que uma boa mãe ou um bom pai nunca pode cansar, vacilar ou sentir frustração. Donald Winnicott veio resgatar a sanidade das famílias ao cunhar o conceito da figura "suficientemente boa".',
    science: [
      {
        highlight: 'A Necessidade da Falha Gradual e Amorosa',
        text: 'Winnicott demonstrou que a perfeição absoluta seria prejudicial ao desenvolvimento da criança, pois a impediria de desenvolver tolerância à frustração e independência. A falha pequena e bem administrada ensina que o mundo continua de pé mesmo após descompassos.'
      },
      {
        highlight: 'O Poder da Reparação Afetiva',
        text: 'O que define a segurança do vínculo não é a ausência de conflitos, mas a velocidade e a ternura com que o vínculo é restaurado. Pedir desculpas a um filho ensina mais sobre respeito do que qualquer sermão moralista.'
      },
      {
        highlight: 'A Presença Autêntica vs. A Presença Distraída',
        text: 'Estudos em psicologia do desenvolvimento comprovam que 15 minutos diários de conexão pura (olho no olho, sem telefone, sem correções) constroem mais apego seguro do que horas inteiras de convivência tensa e hipervigilante.'
      }
    ],
    practice: [
      {
        step: '1',
        title: 'Abaixe-se e repare a perda de paciência',
        description: 'Se você se exaltou, respire fundo, abaixe-se na altura da criança e diga com calma: "Mamãe/Papai estava exausto(a) e perdeu a paciência. Eu peço desculpas. A culpa não é sua e eu te amo muito".'
      },
      {
        step: '2',
        title: 'Crie uma ilha diária de conexão incondicional',
        description: 'Reserve 10 minutos antes de dormir para ler uma história ou apenas conversar sobre as coisas boas do dia, longe de telas e de cobranças escolares.'
      },
      {
        step: '3',
        title: 'Cuide da sua própria taça para poder transbordar',
        description: 'O descanso do cuidador não é luxo ou egoísmo; é pré-requisito biológico para que a ternura continue tendo espaço para existir.'
      }
    ],
    affirmation: 'Eu não preciso ser impecável para ser um refúgio seguro de amor. A minha presença sincera, a minha disposição em reparar erros e o meu carinho autêntico são mais do que suficientes.',
    reference: 'Fundamentado nos estudos clínicos de Donald Winnicott sobre a Relação Mãe-Bebê'
  },
  {
    id: 'neurociencia-do-perdao',
    category: 'Relações & Empatia',
    categoryTheme: 'rose',
    title: 'A Neurociência do Perdão: O que acontece no seu cérebro quando você decide soltar o ressentimento',
    readTime: '5 min de leitura',
    summary: 'Entenda como guardar mágoa mantém a amígdala e o cortisol sob ataque contínuo e por que perdoar é uma decisão neurobiológica para desocupar sua mente.',
    lead: 'Nós crescemos com uma ideia equivocada sobre o perdão, como se fosse um ato de fingir que nada doeu. A ciência revela o contrário: perdoar não transforma o passado, mas remove o veneno bioquímico que contamina o seu presente.',
    science: [
      {
        highlight: 'A Máquina da Ruminação e a Rede de Modo Padrão (DMN)',
        text: 'O cérebro primitivo não diferencia uma ofensa presente de uma lembrança vívida. Toda vez que você rumina, o eixo HPA inunda o organismo de cortisol e noradrenalina, mantendo o corpo sob estresse crônico autoinfligido.'
      },
      {
        highlight: 'O Sequestro da Amígdala vs. O Córtex Pré-Frontal',
        text: 'Estudos da Universidade de Stanford revelam que aprender a perdoar desativa o córtex cingulado anterior (área da dor física) e reduz o estresse cardiovascular em até 40%.'
      },
      {
        highlight: 'Queda de Marcadores Inflamatórios',
        text: 'Soltar ressentimentos crônicos reduz citocinas pró-inflamatórias (como a interleucina-6) e restabelece os níveis saudáveis de serotonina e ocitocina no córtex pré-frontal.'
      }
    ],
    practice: [
      {
        step: '1',
        title: 'Separe perdão de reconciliação',
        description: 'Perdão é um processo interno de libertação emocional; reconciliação exige duas pessoas e limites claros. Você pode perdoar e manter distância segura.'
      },
      {
        step: '2',
        title: 'Desmonte a fantasia da dívida impagável',
        description: 'Não espere que quem te feriu tenha a maturidade de pedir desculpas. Cancele você mesmo a cobrança para fechar a conta do desgaste mental.'
      },
      {
        step: '3',
        title: 'Nomeie a dor sem alimentar o tribunal mental',
        description: 'Aplique o "Name it to Tame it": respire fundo e reconheça a ferida passada sem engatar na discussão imaginária.'
      }
    ],
    affirmation: 'Eu retiro o meu coração do tribunal do passado. Perdoar não significa concordar com o erro alheio, mas reconhecer que a minha paz é valiosa demais para ficar nas mãos de quem me machucou. Hoje eu me devolvo a liberdade de viver leve.',
    reference: 'Inspirado no Stanford Forgiveness Project (Dr. Fred Luskin) e Brené Brown'
  }
];

// Categorias disponíveis
const CATEGORIES = [
  'Todos',
  'Neurociência & Emoções',
  'Relações & Empatia',
  'Autocuidado & Presença',
  'Neurodiversidade & Inclusão',
  'Acolhimento Maternal'
];

// Mapeamento de estilos visuais suaves das categorias
const THEME_STYLES = {
  emerald: {
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    dot: 'bg-emerald-500',
    highlightBg: 'bg-emerald-50/70 border-emerald-100',
    accent: 'text-emerald-700'
  },
  rose: {
    badge: 'bg-rose-50 text-rose-800 border-rose-200/80',
    dot: 'bg-rose-500',
    highlightBg: 'bg-rose-50/70 border-rose-100',
    accent: 'text-rose-700'
  },
  violet: {
    badge: 'bg-violet-50 text-violet-800 border-violet-200/80',
    dot: 'bg-violet-500',
    highlightBg: 'bg-violet-50/70 border-violet-100',
    accent: 'text-violet-700'
  },
  amber: {
    badge: 'bg-amber-50 text-amber-800 border-amber-200/80',
    dot: 'bg-amber-500',
    highlightBg: 'bg-amber-50/70 border-amber-100',
    accent: 'text-amber-700'
  },
  sky: {
    badge: 'bg-sky-50 text-sky-800 border-sky-200/80',
    dot: 'bg-sky-500',
    highlightBg: 'bg-sky-50/70 border-sky-100',
    accent: 'text-sky-700'
  }
};

export default function ArticlesView({ onSelectAffirmation, onBackToGenerator }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [fontSizeLevel, setFontSizeLevel] = useState('normal'); // 'normal' | 'large'

  // ==========================================================================
  // ESTADO & CONTROLADOR DO REPRODUTOR DE ÁUDIO DO ARTIGO (Web Speech API)
  // ==========================================================================
  const [speechStatus, setSpeechStatus] = useState('idle'); // 'idle' | 'playing' | 'paused'
  const [speechSpeed, setSpeechSpeed] = useState(0.88); // 0.85x (acolhedora), 1.0x (normal), 1.2x (dinâmica)
  const [speechProgress, setSpeechProgress] = useState(0); // 0 a 100%
  const currentChunkIndexRef = useRef(0);
  const speechChunksRef = useRef([]);
  const isPausedRef = useRef(false);

  // Prepara os trechos do artigo para leitura serena sem cortes de tempo (evita bug de 15s do Chrome)
  useEffect(() => {
    if (!activeArticle) {
      stopArticleSpeech();
      return;
    }

    const chunks = [];
    chunks.push(activeArticle.title);
    if (activeArticle.lead) {
      chunks.push(activeArticle.lead);
    }
    chunks.push("O que a ciência explica.");
    activeArticle.science.forEach((item) => {
      chunks.push(`${item.highlight}. ${item.text}`);
    });
    chunks.push("Na prática do dia a dia.");
    activeArticle.practice.forEach((item, idx) => {
      chunks.push(`Passo ${item.step || idx + 1}. ${item.title}. ${item.description}`);
    });
    chunks.push("Palavra afirmativa para meditação.");
    chunks.push(activeArticle.affirmation);

    speechChunksRef.current = chunks;
    currentChunkIndexRef.current = 0;
    setSpeechProgress(0);
    setSpeechStatus('idle');
    isPausedRef.current = false;

    return () => {
      stopArticleSpeech();
    };
  }, [activeArticle]);

  // Interrompe e limpa a síntese de voz
  const stopArticleSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    currentChunkIndexRef.current = 0;
    isPausedRef.current = false;
    setSpeechStatus('idle');
    setSpeechProgress(0);
  };

  // Fechar leitor imersivo com tecla Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeArticle) {
          handleCloseReader();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeArticle]);

  const handleCloseReader = () => {
    stopArticleSpeech();
    setActiveArticle(null);
  };

  // Reproduz sequencialmente os trechos do artigo
  const speakChunk = (index, speed = speechSpeed) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const chunks = speechChunksRef.current;
    if (!chunks || index >= chunks.length) {
      setSpeechStatus('idle');
      setSpeechProgress(100);
      currentChunkIndexRef.current = 0;
      return;
    }

    currentChunkIndexRef.current = index;
    const progressPercent = Math.round(((index + 1) / chunks.length) * 100);
    setSpeechProgress(progressPercent);
    setSpeechStatus('playing');

    const utterance = new SpeechSynthesisUtterance(chunks[index]);
    utterance.lang = 'pt-BR';
    utterance.rate = speed;
    utterance.pitch = 1.02;

    utterance.onend = () => {
      if (isPausedRef.current) return;
      speakChunk(index + 1, speed);
    };

    utterance.onerror = (e) => {
      if (e.error === 'interrupted' || e.error === 'canceled') return;
      console.warn('Speech synthesis notice:', e);
      setSpeechStatus('idle');
    };

    window.speechSynthesis.speak(utterance);
  };

  // Ação de Play / Retomar
  const handlePlayArticleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (speechStatus === 'paused') {
      isPausedRef.current = false;
      speakChunk(currentChunkIndexRef.current, speechSpeed);
    } else {
      stopArticleSpeech();
      isPausedRef.current = false;
      speakChunk(0, speechSpeed);
    }
  };

  // Ação de Pausar
  const handlePauseArticleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    isPausedRef.current = true;
    window.speechSynthesis.cancel();
    setSpeechStatus('paused');
  };

  // Ação de Parar
  const handleStopArticleSpeech = () => {
    stopArticleSpeech();
  };

  // Alteração de velocidade em tempo real
  const handleChangeSpeed = (newSpeed) => {
    setSpeechSpeed(newSpeed);
    if (speechStatus === 'playing') {
      window.speechSynthesis.cancel();
      speakChunk(currentChunkIndexRef.current, newSpeed);
    }
  };

  // Copiar afirmativa para área de transferência
  const handleCopyAffirmation = (text, id) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Filtragem dos artigos por categoria e busca
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchCategory =
        selectedCategory === 'Todos' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Navegação entre artigos no modo de leitura
  const currentArticleIndex = useMemo(() => {
    if (!activeArticle) return -1;
    return ARTICLES_DATA.findIndex((a) => a.id === activeArticle.id);
  }, [activeArticle]);

  const prevArticle =
    currentArticleIndex > 0 ? ARTICLES_DATA[currentArticleIndex - 1] : null;
  const nextArticle =
    currentArticleIndex >= 0 && currentArticleIndex < ARTICLES_DATA.length - 1
      ? ARTICLES_DATA[currentArticleIndex + 1]
      : null;

  return (
    <div className="w-full text-stone-800">
      {/* ====================================================================
          1. CABEÇALHO EDITORIAL (Estilo The School of Life / Revista)
          ==================================================================== */}
      <section className="mb-8 text-center max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-semibold uppercase tracking-wider mb-3">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          <span>Revista & Ensaios Afetivos</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 tracking-tight font-medium mb-3">
          Reflexões, Neurociência & Acolhimento
        </h2>

        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans font-normal">
          Ensaios curtos e profundos que unem a ciência do desenvolvimento humano à arte de acolher
          quem amamos, desacelerar a mente e viver com mais gentileza interior.
        </p>

        {/* Campo de Busca Rápida */}
        <div className="mt-6 max-w-md mx-auto relative">
          <svg
            className="w-4 h-4 text-stone-400 absolute left-3.5 top-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar por tema, palavra-chave ou autor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-white/90 border border-stone-200 rounded-full text-xs sm:text-sm text-stone-800 placeholder-stone-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-300 transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-2.5 text-stone-400 hover:text-stone-600 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </section>

      {/* ====================================================================
          2. BARRA DE CATEGORIAS (HORIZONTAL PILLS)
          ==================================================================== */}
      <section className="mb-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-4">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-white/80 text-stone-600 border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ====================================================================
          3. GRID DE ARTIGOS (CARTÕES MODERNOS)
          ==================================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.length === 0 ? (
          <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-dashed border-stone-200 p-8">
            <span className="text-3xl block mb-2">🌿</span>
            <h4 className="font-serif text-lg font-medium text-stone-800 mb-1">
              Nenhum artigo encontrado
            </h4>
            <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4">
              Não encontramos nenhum artigo correspondente à sua busca. Experimente mudar os termos
              ou selecionar outra categoria.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-stone-900 text-white rounded-full text-xs font-semibold hover:bg-stone-800 transition"
            >
              Ver todos os artigos
            </button>
          </div>
        ) : (
          filteredArticles.map((article) => {
            const theme = THEME_STYLES[article.categoryTheme] || THEME_STYLES.emerald;
            return (
              <article
                key={article.id}
                className="group bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Topo do Cartão: Categoria & Tempo */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${theme.badge}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`}></span>
                      <span>{article.category}</span>
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-stone-400 font-medium">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                      </svg>
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Título Instigante */}
                  <h3
                    onClick={() => setActiveArticle(article)}
                    className="font-serif text-lg sm:text-xl text-stone-900 font-semibold leading-snug group-hover:text-rose-700 transition cursor-pointer mb-2.5 line-clamp-2"
                  >
                    {article.title}
                  </h3>

                  {/* Resumo de Introdução */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3 font-sans">
                    {article.summary}
                  </p>
                </div>

                {/* Rodapé do Cartão com Botão Ler Artigo */}
                <div className="px-6 py-4 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <span className="text-[11px] text-stone-400 font-serif italic">
                    Ciência & Prática
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-800 group-hover:text-rose-700 transition"
                  >
                    <span>Ler Artigo</span>
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            );
          })
        )}
      </section>

      {/* ====================================================================
          4. MODAL DE LEITURA IMERSIVA (Artigo Completo)
          ==================================================================== */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6"
        >
          {/* Backdrop Clicável */}
          <div
            className="fixed inset-0"
            onClick={handleCloseReader}
            aria-hidden="true"
          ></div>

          {/* Container do Artigo */}
          <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 z-10 scrollbar-thin">
            {/* Barra de Ações Superior Fixa */}
            <header className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-100 flex items-center justify-between z-20">
              <button
                type="button"
                onClick={handleCloseReader}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 px-3 py-1.5 rounded-full transition"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Voltar aos Artigos</span>
              </button>

              <div className="flex items-center gap-2">
                {/* Ajuste de Fonte */}
                <button
                  type="button"
                  onClick={() =>
                    setFontSizeLevel((prev) => (prev === 'normal' ? 'large' : 'normal'))
                  }
                  title="Alterar tamanho da fonte para leitura confortável"
                  className={`text-xs px-2.5 py-1 rounded-full border transition font-mono ${
                    fontSizeLevel === 'large'
                      ? 'bg-rose-50 text-rose-800 border-rose-300 font-bold'
                      : 'bg-white text-stone-600 border-stone-200'
                  }`}
                >
                  {fontSizeLevel === 'large' ? 'A+' : 'A'}
                </button>

                {/* Botão Fechar */}
                <button
                  type="button"
                  onClick={handleCloseReader}
                  className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center text-sm font-bold transition"
                  title="Fechar (Esc)"
                >
                  ✕
                </button>
              </div>
            </header>

            {/* Conteúdo do Artigo */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Metadados & Título Principal */}
              <div className="space-y-4 border-b border-stone-100 pb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold border ${
                      THEME_STYLES[activeArticle.categoryTheme]?.badge ||
                      THEME_STYLES.emerald.badge
                    }`}
                  >
                    <span>{activeArticle.category}</span>
                  </span>

                  <span className="text-xs text-stone-400">•</span>
                  <span className="text-xs text-stone-500 font-medium">
                    {activeArticle.readTime}
                  </span>
                  <span className="text-xs text-stone-400">•</span>
                  <span className="text-xs text-stone-500 italic">
                    {activeArticle.reference}
                  </span>
                </div>

                <h1
                  className={`font-serif text-stone-900 font-semibold tracking-tight leading-tight ${
                    fontSizeLevel === 'large' ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-3xl'
                  }`}
                >
                  {activeArticle.title}
                </h1>

                <p
                  className={`text-stone-600 font-serif italic leading-relaxed border-l-2 border-rose-400 pl-4 py-1 ${
                    fontSizeLevel === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                  }`}
                >
                  {activeArticle.lead}
                </p>
              </div>

              {/* ====================================================================
                  REPRODUTOR DE ÁUDIO DO ARTIGO (Web Speech API)
                  ==================================================================== */}
              <section className="bg-gradient-to-r from-stone-50 via-rose-50/40 to-stone-50 border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Informações & Equalizador Sonoro */}
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
                        speechStatus === 'playing'
                          ? 'bg-rose-600 text-white shadow-md shadow-rose-200'
                          : speechStatus === 'paused'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-white text-stone-700 border border-stone-200 shadow-xs'
                      }`}
                    >
                      {speechStatus === 'playing' ? (
                        /* Barras Animadas de Equalizador */
                        <div className="flex items-end gap-1 h-4">
                          <span className="w-1 bg-white rounded-full h-3 animate-pulse"></span>
                          <span className="w-1 bg-white rounded-full h-4 animate-bounce"></span>
                          <span className="w-1 bg-white rounded-full h-2 animate-pulse"></span>
                          <span className="w-1 bg-white rounded-full h-3.5 animate-bounce"></span>
                        </div>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-sans">
                          Ouvir este artigo em voz alta
                        </h4>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border border-stone-200 text-stone-500">
                          Voz Nativa (PT-BR)
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 font-sans mt-0.5">
                        {speechStatus === 'playing' && `Lendo artigo... (${speechProgress}% concluído)`}
                        {speechStatus === 'paused' && 'Áudio pausado. Clique em Continuar quando desejar.'}
                        {speechStatus === 'idle' && 'Leitura pausada e natural do artigo completo'}
                      </p>
                    </div>
                  </div>

                  {/* Controles: Play/Pause, Stop e Velocidade */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Botão Play / Pause */}
                    {speechStatus === 'playing' ? (
                      <button
                        type="button"
                        onClick={handlePauseArticleSpeech}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs transition"
                        title="Pausar leitura"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                        <span>Pausar</span>
                      </button>
                    ) : speechStatus === 'paused' ? (
                      <button
                        type="button"
                        onClick={handlePlayArticleSpeech}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shadow-xs transition"
                        title="Continuar de onde parou"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        <span>Continuar</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handlePlayArticleSpeech}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shadow-xs transition"
                        title="Iniciar leitura do artigo"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        <span>Ouvir Artigo</span>
                      </button>
                    )}

                    {/* Botão Parar */}
                    {speechStatus !== 'idle' && (
                      <button
                        type="button"
                        onClick={handleStopArticleSpeech}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 text-xs font-semibold shadow-xs transition"
                        title="Parar e voltar ao início"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <rect x="5" y="5" width="14" height="14" rx="2" />
                        </svg>
                        <span>Parar</span>
                      </button>
                    )}

                    {/* Seletor de Velocidade */}
                    <div className="flex items-center bg-white border border-stone-200 rounded-xl p-0.5 shadow-xs">
                      {[
                        { speed: 0.85, label: '0.85x' },
                        { speed: 1.0, label: '1.0x' },
                        { speed: 1.2, label: '1.2x' }
                      ].map((item) => (
                        <button
                          key={item.speed}
                          type="button"
                          onClick={() => handleChangeSpeed(item.speed)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                            speechSpeed === item.speed
                              ? 'bg-stone-900 text-white shadow-xs'
                              : 'text-stone-500 hover:text-stone-900'
                          }`}
                          title={`Velocidade ${item.label}`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Linha de Progresso */}
                {speechStatus !== 'idle' && (
                  <div className="mt-3.5 pt-3 border-t border-stone-200/60">
                    <div className="w-full bg-stone-200/80 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-rose-500 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${speechProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-stone-400 mt-1 font-mono">
                      <span>Progresso da leitura</span>
                      <span>{speechProgress}%</span>
                    </div>
                  </div>
                )}
              </section>

              {/* SEÇÃO 1: O Que a Ciência Explica */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                    🧬
                  </div>
                  <div>
                    <h2 className="font-serif text-lg sm:text-xl font-semibold text-stone-900">
                      O que a ciência explica
                    </h2>
                    <p className="text-xs text-stone-500">
                      Fundamentos neurobiológicos e psicológicos documentados
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5 pt-1">
                  {activeArticle.science.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/80 space-y-1.5"
                    >
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        <span>{item.highlight}</span>
                      </h3>
                      <p
                        className={`text-stone-600 leading-relaxed font-sans ${
                          fontSizeLevel === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SEÇÃO 2: Na Prática do Dia a Dia */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold text-sm">
                    🌱
                  </div>
                  <div>
                    <h2 className="font-serif text-lg sm:text-xl font-semibold text-stone-900">
                      Na prática do dia a dia
                    </h2>
                    <p className="text-xs text-stone-500">
                      Pequenas atitudes com imenso impacto afetivo
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5 pt-1">
                  {activeArticle.practice.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-start gap-3.5"
                    >
                      <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xs sm:text-sm font-bold text-stone-900">
                          {item.title}
                        </h3>
                        <p
                          className={`text-stone-600 leading-relaxed font-sans ${
                            fontSizeLevel === 'large'
                              ? 'text-sm sm:text-base'
                              : 'text-xs sm:text-sm'
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SEÇÃO 3: Palavra Afirmativa para Meditação (Destaque Principal) */}
              <section className="pt-2">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-[#FFF5F6] to-purple-50 border-2 border-rose-200/90 p-6 sm:p-8 shadow-sm space-y-4">
                  {/* Badge de Meditação */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-rose-200 text-rose-800 text-xs font-bold shadow-xs">
                      <span>✨</span>
                      <span>Palavra Afirmativa para Meditação</span>
                    </span>

                    <span className="text-[11px] font-semibold text-rose-700/80">
                      Respire e Guarde no Coração
                    </span>
                  </div>

                  {/* Texto da Afirmativa */}
                  <blockquote
                    className={`font-serif italic text-stone-900 leading-relaxed text-center py-2 px-2 sm:px-6 ${
                      fontSizeLevel === 'large' ? 'text-lg sm:text-2xl' : 'text-base sm:text-xl'
                    }`}
                  >
                    "{activeArticle.affirmation}"
                  </blockquote>

                  {/* Ações da Afirmativa: Copiar, Ouvir, Aplicar */}
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-rose-200/60">
                    {/* Botão Ouvir */}
                    <button
                      type="button"
                      onClick={() => handleToggleSpeech(activeArticle.affirmation)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-xs ${
                        isSpeaking
                          ? 'bg-rose-600 text-white animate-pulse'
                          : 'bg-white text-stone-800 border border-rose-200 hover:bg-rose-100/60'
                      }`}
                    >
                      <span>{isSpeaking ? '⏹' : '🔊'}</span>
                      <span>{isSpeaking ? 'Pausar Áudio' : 'Ouvir Mensagem'}</span>
                    </button>

                    {/* Botão Copiar */}
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyAffirmation(activeArticle.affirmation, activeArticle.id)
                      }
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white text-stone-800 border border-rose-200 hover:bg-rose-100/60 transition shadow-xs"
                    >
                      <span>{copiedId === activeArticle.id ? '✓' : '📋'}</span>
                      <span>
                        {copiedId === activeArticle.id
                          ? 'Afirmativa Copiada!'
                          : 'Copiar Afirmativa'}
                      </span>
                    </button>

                    {/* Botão Usar no Gerador (se callback fornecido) */}
                    {onSelectAffirmation && (
                      <button
                        type="button"
                        onClick={() => {
                          onSelectAffirmation(activeArticle.affirmation, activeArticle.title);
                          handleCloseReader();
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 transition shadow-xs"
                      >
                        <span>🪄</span>
                        <span>Usar no Gerador de Cartões</span>
                      </button>
                    )}
                  </div>
                </div>
              </section>

              {/* Navegação Entre Artigos */}
              <footer className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                {prevArticle ? (
                  <button
                    type="button"
                    onClick={() => {
                      stopArticleSpeech();
                      setActiveArticle(prevArticle);
                    }}
                    className="w-full sm:w-auto text-left p-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition"
                  >
                    <span className="text-[10px] text-stone-400 font-bold block uppercase tracking-wider">
                      ← Artigo Anterior
                    </span>
                    <span className="font-serif text-xs font-semibold text-stone-800 line-clamp-1">
                      {prevArticle.title}
                    </span>
                  </button>
                ) : (
                  <div></div>
                )}

                {nextArticle ? (
                  <button
                    type="button"
                    onClick={() => {
                      stopArticleSpeech();
                      setActiveArticle(nextArticle);
                    }}
                    className="w-full sm:w-auto text-right p-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition"
                  >
                    <span className="text-[10px] text-stone-400 font-bold block uppercase tracking-wider">
                      Próximo Artigo →
                    </span>
                    <span className="font-serif text-xs font-semibold text-stone-800 line-clamp-1">
                      {nextArticle.title}
                    </span>
                  </button>
                ) : (
                  <div></div>
                )}
              </footer>
            </div>

            {/* ====================================================================
                PLAYER FLUTUANTE COMPACTO (Fixado no rodapé durante leitura ativa)
                ==================================================================== */}
            {speechStatus !== 'idle' && (
              <div className="sticky bottom-4 left-0 right-0 max-w-md mx-auto px-4 z-30 pb-2">
                <div className="bg-stone-900/95 backdrop-blur-md text-white rounded-full px-4 py-2.5 shadow-2xl border border-stone-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="relative flex h-2.5 w-2.5">
                      {speechStatus === 'playing' && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      )}
                      <span
                        className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                          speechStatus === 'playing' ? 'bg-rose-500' : 'bg-amber-400'
                        }`}
                      ></span>
                    </span>
                    <span className="text-xs font-semibold truncate max-w-[140px] sm:max-w-[190px]">
                      {activeArticle.title}
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono shrink-0">
                      {speechProgress}%
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {speechStatus === 'playing' ? (
                      <button
                        type="button"
                        onClick={handlePauseArticleSpeech}
                        className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
                        title="Pausar"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handlePlayArticleSpeech}
                        className="p-1.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white transition"
                        title="Continuar"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={handleStopArticleSpeech}
                      className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition"
                      title="Parar áudio"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <rect x="5" y="5" width="14" height="14" rx="2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
