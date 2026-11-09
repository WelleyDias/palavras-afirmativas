/**
 * ============================================================================
 * PALAVRAS AFIRMATIVAS - APLICAÇÃO COMPLETA & AUTÔNOMA (Zero Dependências)
 * 100% Client-Side • Funciona direto com duplo clique (file://) ou servidor HTTP
 * ============================================================================
 * Fundamentada em Psicologia do Desenvolvimento (Jordan Peterson),
 * Acolhimento Maternal (Winnicott), Aceitação Incondicional (Rogers),
 * Sentido da Vida (Viktor Frankl) e Pedagogia Inclusiva (Vygotsky).
 * 
 * Diretrizes: Paz, respeito, família, fé, inclusão e não-violência.
 */

(function () {
  'use strict';

  console.log('🌸 Palavras Afirmativas inicializando...');

  /* ==========================================================================
     1. BASE DE CONHECIMENTO & AFIRMAÇÕES CURADAS (100% Gratuito / Offline)
     ========================================================================== */
  const AFFIRMATIONS_DB = [
    // --- AUTISMO & NEURODIVERSIDADE ---
    {
      id: 'aut_01',
      category: 'Autismo / Neurodivergente',
      tone: 'Acolhedora / Afetuosa',
      theme: 'Autoestima',
      relationships: ['Filho(a)', 'Aluno(a)', 'Amigo(a)', 'Outro', 'Para Mim Mesmo'],
      reference: 'Inspirado no acolhimento maternal de Winnicott & Neurodiversidade',
      template: 'Seu cérebro e seu coração funcionam de um jeito único e precioso, {nome}. Quando o mundo ao redor parecer barulhento ou acelerado demais, lembre-se de que não há pressa. Você tem o direito de respirar no seu próprio ritmo, e cada pequeno passo que você dá é motivo de imenso orgulho para quem te ama.'
    },
    {
      id: 'aut_02',
      category: 'Autismo / Neurodivergente',
      tone: 'Aconselhadora',
      theme: 'Calma & Paciência',
      relationships: ['Filho(a)', 'Aluno(a)', 'Companheiro(a)', 'Amigo(a)'],
      reference: 'Inspirado na previsibilidade e segurança de Jordan Peterson',
      template: 'A sua atenção aos detalhes e a sua sinceridade são presentes raros, {nome}. Não se preocupe em caber nas expectativas de quem não compreende a sua sensibilidade. Concentre-se apenas naquilo que está ao seu alcance hoje, um degrau por vez. Há paz e ordem esperando por você no seu tempo.'
    },
    {
      id: 'aut_03',
      category: 'Autismo / Neurodivergente',
      tone: 'Motivadora',
      theme: 'Superação',
      relationships: ['Filho(a)', 'Aluno(a)', 'Companheiro(a)', 'Colega de Trabalho'],
      reference: 'Inspirado na regra das microvitórias (Jordan Peterson)',
      template: '{nome}, não compare o seu caminho com o de ninguém. A sua única régua é quem você era ontem. Cada barreira sensorial ou desafio que você enfrentou com paciência esta semana já faz de você um verdadeiro vencedor. Siga firme, porque a sua força silenciosa é inspiradora.'
    },
    {
      id: 'aut_04',
      category: 'Autismo / Neurodivergente',
      tone: 'Pedagógica / Educativa',
      theme: 'Foco & Concentração',
      relationships: ['Aluno(a)', 'Filho(a)', 'Colega de Trabalho'],
      reference: 'Fundamentado na Pedagogia Inclusiva & Vygotsky',
      template: 'Aprender não é uma corrida de velocidade, {nome}; é a construção paciente de um castelo. O seu jeito dedicado de observar o mundo e o seu carinho por {hobby_text} revelam a mente brilhante que você tem. Celebre o que você aprendeu hoje, por menor que pareça.'
    },
    {
      id: 'aut_05',
      category: 'Autismo / Neurodivergente',
      tone: 'Animadora',
      theme: 'Amor & Gratidão',
      relationships: ['Filho(a)', 'Amigo(a)', 'Companheiro(a)'],
      reference: 'Amor incondicional e afeto protetor',
      template: '{nome}, o seu sorriso e a sua pureza de sentimentos iluminam o dia de qualquer um. É uma bênção caminhar ao seu lado e ver o mundo através dos seus olhos tão atentos e verdadeiros. Você é profundamente amado e querido exatamente como é!'
    },

    // --- DIFICULDADE DE APRENDIZAGEM & PEDAGOGIA ---
    {
      id: 'apr_01',
      category: 'Dificuldade de Aprendizagem',
      tone: 'Acolhedora / Afetuosa',
      theme: 'Autoestima',
      relationships: ['Filho(a)', 'Aluno(a)', 'Para Mim Mesmo'],
      reference: 'Aceitação Incondicional de Carl Rogers',
      template: 'O seu valor como ser humano nunca será medido por uma nota ou pela velocidade em que você decora uma lição, {nome}. O que define a sua grandeza é o seu coração bom, o seu esforço sincero e a sua vontade de tentar de novo. Eu acredito em você com todo o meu coração.'
    },
    {
      id: 'apr_02',
      category: 'Dificuldade de Aprendizagem',
      tone: 'Pedagógica / Educativa',
      theme: 'Pequenas Vitórias',
      relationships: ['Aluno(a)', 'Filho(a)', 'Colega de Trabalho'],
      reference: 'Inspirado na Zona de Desenvolvimento Proximal (Vygotsky)',
      template: 'Errar faz parte de todo grande aprendizado, {nome}. Quando algo parecer difícil, não significa que você não é capaz, mas apenas que o seu cérebro está criando pontes novas e mais fortes. Respire fundo, celebre a sua curiosidade e dê o próximo passo com tranquilidade.'
    },
    {
      id: 'apr_03',
      category: 'Dificuldade de Aprendizagem',
      tone: 'Motivadora',
      theme: 'Superação',
      relationships: ['Filho(a)', 'Aluno(a)', 'Amigo(a)'],
      reference: 'Jordan Peterson - Tratar-se como alguém responsável por ajudar',
      template: 'Trate a sua jornada de estudos com a mesma paciência e bondade com que você trataria o seu melhor amigo, {nome}. Nenhuma montanha é escalada de um salto só, mas sim pedra por pedra. O seu esforço diário é a semente de um futuro brilhante e cheio de realizações.'
    },
    {
      id: 'apr_04',
      category: 'Dificuldade de Aprendizagem',
      tone: 'Aconselhadora',
      theme: 'Calma & Paciência',
      relationships: ['Filho(a)', 'Aluno(a)', 'Companheiro(a)'],
      reference: 'Sabedoria Clássica e Pedagogia do Afeto',
      template: '{nome}, cada semente brota no seu próprio tempo debaixo da terra boa. Não tenha vergonha de pedir ajuda ou de fazer perguntas quantas vezes forem necessárias. A humildade de quem quer aprender é a marca das pessoas mais nobres e sábias.'
    },

    // --- DIA DIFÍCIL / ANSIEDADE / ACOLHIMENTO MATERNAL ---
    {
      id: 'ans_01',
      category: 'Dia Difícil / Ansiedade',
      tone: 'Acolhedora / Afetuosa',
      theme: 'Calma & Paciência',
      relationships: ['Filho(a)', 'Companheiro(a)', 'Amigo(a)', 'Para Mim Mesmo'],
      reference: 'O colo acolhedor maternal (Holding de Winnicott)',
      template: 'Se o dia hoje foi pesado, {nome}, permita-se pousar a cabeça e descansar. Você não precisa carregar o mundo inteiro nas suas costas. Aqui você tem um porto seguro, amor de verdade e acolhimento. Amanhã é uma nova dádiva e a luz voltará a brilhar.'
    },
    {
      id: 'ans_02',
      category: 'Dia Difícil / Ansiedade',
      tone: 'Aconselhadora',
      theme: 'Resiliência',
      relationships: ['Companheiro(a)', 'Amigo(a)', 'Colega de Trabalho', 'Filho(a)'],
      reference: 'Viktor Frankl - Sentido e Força Interior',
      template: '{nome}, lembre-se de que os dias tempestuosos não têm o poder de apagar a sua dignidade e as suas virtudes. As tempestades vêm e vão, mas as raízes do bem que você plantou permanecem firmes. Mantenha a fé, cuide de si com carinho e descanse a sua mente.'
    },
    {
      id: 'ans_03',
      category: 'Dia Difícil / Ansiedade',
      tone: 'Poética',
      theme: 'Calma & Paciência',
      relationships: ['Companheiro(a)', 'Amigo(a)', 'Filho(a)'],
      reference: 'Literatura humanista e serenidade poética',
      template: 'Assim como as estrelas mais bonitas só se mostram na noite escura, {nome}, a sua serenidade se fortalece quando você escolhe respirar devagar em meio ao caos. Não se cobre tanto. Você já fez o seu melhor hoje, e isso é sagrado e suficiente.'
    },
    {
      id: 'ans_04',
      category: 'Dia Difícil / Ansiedade',
      tone: 'Motivadora',
      theme: 'Coragem',
      relationships: ['Filho(a)', 'Companheiro(a)', 'Amigo(a)', 'Colega de Trabalho'],
      reference: 'Jordan Peterson - Postura ereta e coragem tranquila',
      template: 'Erga a cabeça e olhe para a frente, {nome}. O medo sussurra dúvidas, mas a verdade é que você já superou cem por cento dos dias difíceis que viveu até agora. Há uma força honrada em você que nada pode tirar. Confie na sua capacidade de seguir em frente.'
    },

    // --- BAIXA AUTOESTIMA & AMOR PRÓPRIO ---
    {
      id: 'aut_est_01',
      category: 'Baixa Autoestima',
      tone: 'Acolhedora / Afetuosa',
      theme: 'Autoestima',
      relationships: ['Filho(a)', 'Companheiro(a)', 'Amigo(a)', 'Para Mim Mesmo'],
      reference: 'Amor incondicional e valor inalienável',
      template: '{nome}, se você pudesse se enxergar através dos olhos de quem te ama, nunca mais duvidaria da sua beleza e do seu valor. A sua bondade genuína e a sua presença fazem deste mundo um lugar mais quente e humano. Nunca deixe ninguém diminuir a sua luz.'
    },
    {
      id: 'aut_est_02',
      category: 'Baixa Autoestima',
      tone: 'Aconselhadora',
      theme: 'Pequenas Vitórias',
      relationships: ['Filho(a)', 'Companheiro(a)', 'Colega de Trabalho', 'Amigo(a)'],
      reference: 'Jordan Peterson - A regra da comparação interior',
      template: 'Pare de olhar para os lados, {nome}. O palco dos outros nunca mostra os bastidores e as dores de ninguém. O seu único compromisso de honra é ser um pouquinho melhor, mais paciente e mais justo consigo mesmo hoje do que foi ontem. Isso é verdadeira vitória.'
    },

    // --- PRECISA DE MOTIVAÇÃO & TRANSIÇÃO / DESAFIO NOVO ---
    {
      id: 'mot_01',
      category: 'Precisa de Motivação',
      tone: 'Motivadora',
      theme: 'Superação',
      relationships: ['Filho(a)', 'Companheiro(a)', 'Amigo(a)', 'Colega de Trabalho'],
      reference: 'Inspirado na força de propósito de Viktor Frankl',
      template: '{nome}, o seu potencial não depende da facilidade dos ventos, mas da firmeza com que você segura o leme. Grandes talentos são forjados na perseverança diária e na fé inabalável. Levante-se com ânimo renovado: hoje é dia de construir o seu legado com honra e dedicação!'
    },
    {
      id: 'mot_02',
      category: 'Transição / Desafio Novo',
      tone: 'Aconselhadora',
      theme: 'Coragem',
      relationships: ['Filho(a)', 'Companheiro(a)', 'Colega de Trabalho', 'Amigo(a)'],
      reference: 'Jordan Peterson - Entrar na arena com responsabilidade',
      template: 'O novo sempre traz incerteza, {nome}, mas é justamente ao cruzar portas desafiadoras que a nossa coragem se revela. Assuma o compromisso de dar o seu melhor, aceite os pequenos tropeços do começo como mestres e confie. Você está mais preparado do que imagina.'
    },
    {
      id: 'mot_03',
      category: 'Precisa de Motivação',
      tone: 'Animadora',
      theme: 'Superação',
      relationships: ['Filho(a)', 'Companheiro(a)', 'Amigo(a)', 'Aluno(a)'],
      reference: 'Entusiasmo construtivo e alegria pura',
      template: 'Vamos em frente com alegria no coração, {nome}! O dia reserva oportunidades maravilhosas para quem trabalha com afinco, honestidade e fé. Coloque o seu melhor sorriso no rosto, lembre-se do quanto você é capaz e faça o seu melhor acontecer!'
    },

    // --- FILHO(A) & ACOLHIMENTO MATERNAL ---
    {
      id: 'filho_01',
      category: 'Autismo / Neurodivergente',
      tone: 'Acolhedora / Afetuosa',
      theme: 'Amor & Gratidão',
      relationships: ['Filho(a)'],
      reference: 'Vínculo maternal profundo e aceitação amorosa',
      template: 'Meu filho(a) amado(a) {nome}, o maior privilégio da minha vida é ver você crescer e florescer. Não tenha pressa em corresponder ao ritmo dos outros; o seu ritmo é lindo, autêntico e cheio de encantos. Meu amor por você é infinito, protetor e eterno.'
    },
    {
      id: 'filho_02',
      category: 'Dificuldade de Aprendizagem',
      tone: 'Pedagógica / Educativa',
      theme: 'Pequenas Vitórias',
      relationships: ['Filho(a)'],
      reference: 'Incentivo parental paciente e afetuoso',
      template: '{nome}, quando você se esforça para aprender algo novo, meu coração transborda de orgulho. Pouco a pouco, tudo o que hoje parece difícil vai se tornando claro. Acredite no seu potencial, pergunte sem medo e lembre-se: eu estarei sempre aqui para segurar a sua mão.'
    }
  ];

  const GENERAL_QUICK_AFFIRMATIONS = [
    'A vida é construída na paciência dos pequenos passos diários. Respire com calma, cuide de quem você ama e lembre-se de que a sua força reside na serenidade e na retidão do seu coração.',
    'Cada manhã é uma página em branco abençoada. Não deixe que as preocupações de ontem roubem a paz de hoje. Seja fiel aos seus valores e siga em frente com firmeza e humildade.',
    'Trate a si mesmo com a mesma compaixão e dignidade com que você cuidaria de um filho amado. Você tem valor intrínseco, e cada esforço seu para fazer o bem tem um significado eterno.',
    'Quando o mundo parecer acelerado demais, diminua o passo e busque a ordem nas pequenas coisas. Há uma beleza sagrada no silêncio, na paciência e no dever cumprido com amor.',
    'Nunca menospreze o poder de um dia vivido com retidão e bondade. As grandes vitórias da vida são filhas das pequenas vitórias silenciosas que ninguém vê.'
  ];

  /* ==========================================================================
     2. GERENCIADOR DE ARMAZENAMENTO (LOCALSTORAGE)
     ========================================================================== */
  const Storage = {
    KEYS: {
      HISTORY: 'palavras_afirmativas_history',
      SETTINGS: 'palavras_afirmativas_settings',
      DAILY: 'palavras_afirmativas_daily'
    },
    getTodayKey() {
      const now = new Date();
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    },
    getDailyAfirmativa() {
      try {
        const raw = localStorage.getItem(this.KEYS.DAILY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        const today = this.getTodayKey();
        return parsed.date === today ? parsed.item : null;
      } catch (e) {
        return null;
      }
    },
    saveDailyAfirmativa(item) {
      try {
        const today = this.getTodayKey();
        localStorage.setItem(this.KEYS.DAILY, JSON.stringify({ date: today, item }));
      } catch (e) {
        console.error('Erro ao salvar afirmativa do dia', e);
      }
    },
    getHistory() {
      try {
        const d = localStorage.getItem(this.KEYS.HISTORY);
        return d ? JSON.parse(d) : [];
      } catch (e) {
        return [];
      }
    },
    saveToHistory(item) {
      if (!item || !item.text || typeof item.text !== 'string' || !item.text.trim()) {
        return this.getHistory();
      }
      try {
        const list = this.getHistory();
        
        // Garante ID único com fallback seguro
        const id = item.id ? String(item.id) : (
          (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function')
            ? crypto.randomUUID()
            : 'aff_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9)
        );

        // Garante data legível para exibição e timestamp numérico para ordenação
        const date = item.date || new Date().toLocaleDateString('pt-BR', {
          day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
        });
        const createdAt = item.createdAt || Date.now();

        const validItem = {
          ...item,
          id,
          date,
          createdAt,
          name: item.name ? String(item.name).trim() : 'Pessoa Querida',
          text: item.text.trim()
        };

        // Remove duplicatas por ID ou texto idêntico e mantém os 30 mais recentes
        const updated = [validItem, ...list.filter(h => String(h.id) !== id && h.text !== validItem.text)].slice(0, 30);
        localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(updated));
        return updated;
      } catch (e) {
        console.error('Erro ao salvar no histórico', e);
        return [];
      }
    },
    removeFromHistory(id) {
      try {
        const list = this.getHistory();
        const updated = list.filter(h => String(h.id) !== String(id));
        localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(updated));
        return updated;
      } catch (e) {
        console.error('Erro ao remover item do histórico', e);
        return [];
      }
    },
    getSettings() {
      try {
        const s = localStorage.getItem(this.KEYS.SETTINGS);
        return s ? JSON.parse(s) : { apiKey: '', speechRate: 0.92 };
      } catch (e) {
        return { apiKey: '', speechRate: 0.92 };
      }
    },
    saveSettings(settings) {
      try {
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
      } catch (e) {
        console.error(e);
      }
    }
  };

  /* ==========================================================================
     3. SÍNTESE DE VOZ (WEB SPEECH API)
     ========================================================================== */
  const Speech = {
    synth: typeof window !== 'undefined' ? window.speechSynthesis : null,
    isSpeaking: false,
    selectedVoice: null,

    init() {
      if (!this.synth) return;
      const loadVoices = () => {
        try {
          const voices = this.synth.getVoices();
          const ptVoices = voices.filter(v => v.lang && (v.lang === 'pt-BR' || v.lang.startsWith('pt')));
          const warmVoice = ptVoices.find(v =>
            v.name.includes('Luciana') ||
            v.name.includes('Francisca') ||
            v.name.includes('Maria') ||
            v.name.includes('Google português') ||
            v.name.toLowerCase().includes('female')
          );
          this.selectedVoice = warmVoice || ptVoices[0] || voices[0] || null;
        } catch (e) {
          console.warn('Erro ao carregar vozes', e);
        }
      };
      loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = loadVoices;
      }
    },

    speak(text, { onStart, onEnd, onError, rate = 0.92 } = {}) {
      if (!this.synth) {
        if (onError) onError('Síntese de voz não suportada');
        return;
      }
      this.stop();

      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = rate;
        utterance.pitch = 1.05;

        if (this.selectedVoice) {
          utterance.voice = this.selectedVoice;
        }

        utterance.onstart = () => {
          this.isSpeaking = true;
          if (onStart) onStart();
        };
        utterance.onend = () => {
          this.isSpeaking = false;
          if (onEnd) onEnd();
        };
        utterance.onerror = (err) => {
          this.isSpeaking = false;
          if (onError) onError(err);
        };

        this.synth.speak(utterance);
      } catch (err) {
        this.isSpeaking = false;
        if (onError) onError(err);
      }
    },

    stop() {
      if (this.synth && this.synth.speaking) {
        this.synth.cancel();
      }
      this.isSpeaking = false;
    },

    toggle(text, callbacks) {
      if (this.isSpeaking) {
        this.stop();
        if (callbacks && callbacks.onEnd) callbacks.onEnd();
      } else {
        this.speak(text, callbacks);
      }
    }
  };

  /* ==========================================================================
     4. GERADOR DE CARTÕES VISUAIS (HTML5 CANVAS HD)
     ========================================================================== */
  const CardGenerator = {
    palettes: {
      rose: {
        bgGrad: ['#FFF5F5', '#FFE3E8', '#FBD2DB'],
        border: '#F3B5C3',
        primaryText: '#4A2330',
        secondaryText: '#874D5E',
        accent: '#D96582',
        quote: 'rgba(217, 101, 130, 0.22)'
      },
      lavender: {
        bgGrad: ['#FAF7FD', '#EFE6FA', '#E1D3F5'],
        border: '#D0BAEC',
        primaryText: '#37234D',
        secondaryText: '#6F548C',
        accent: '#8B5CF6',
        quote: 'rgba(139, 92, 246, 0.2)'
      },
      amber: {
        bgGrad: ['#FFFBF2', '#FEF3D6', '#FDE4B0'],
        border: '#F8D38D',
        primaryText: '#462E12',
        secondaryText: '#825C2E',
        accent: '#D97706',
        quote: 'rgba(217, 119, 6, 0.2)'
      },
      sage: {
        bgGrad: ['#F4F9F5', '#E2EFE5', '#CDE4D2'],
        border: '#B3D6BB',
        primaryText: '#1B3B26',
        secondaryText: '#476E54',
        accent: '#059669',
        quote: 'rgba(5, 150, 105, 0.2)'
      }
    },

    drawCard(canvas, { text = '', name = '', relationship = '', paletteKey = 'rose' } = {}) {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = 1080;
      const height = 1080;
      canvas.width = width;
      canvas.height = height;

      const pal = this.palettes[paletteKey] || this.palettes.rose;

      // 1. Fundo Gradiente
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, pal.bgGrad[0]);
      grad.addColorStop(0.5, pal.bgGrad[1]);
      grad.addColorStop(1, pal.bgGrad[2]);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Moldura Decorativa Suave
      const margin = 50;
      ctx.strokeStyle = pal.border;
      ctx.lineWidth = 4;
      ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = 2;
      ctx.strokeRect(margin + 12, margin + 12, width - (margin + 12) * 2, height - (margin + 12) * 2);

      // 3. Cabeçalho
      ctx.textAlign = 'center';
      ctx.fillStyle = pal.accent;
      ctx.font = '700 28px sans-serif';
      ctx.fillText('• PALAVRAS AFIRMATIVAS •', width / 2, 140);

      ctx.fillStyle = pal.secondaryText;
      ctx.font = 'italic 22px Georgia, serif';
      ctx.fillText('Acolhimento, Fé e Motivação', width / 2, 180);

      // 4. Aspas Gigantes Decorativas
      ctx.fillStyle = pal.quote;
      ctx.font = 'bold 240px Georgia, serif';
      ctx.fillText('“', width / 2, 350);

      // 5. Quebra do Texto Principal
      ctx.fillStyle = pal.primaryText;
      const cleanText = text.replace(/^["“']|["”']$/g, '');
      const fontSize = cleanText.length > 200 ? 36 : cleanText.length > 130 ? 42 : 48;
      const lineHeight = fontSize * 1.55;
      ctx.font = `italic 500 ${fontSize}px Georgia, "Playfair Display", serif`;

      const maxWidth = width - 240;
      const words = cleanText.split(' ');
      let line = '';
      const lines = [];

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          lines.push(line.trim());
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line.trim());

      const totalH = lines.length * lineHeight;
      let startY = (height / 2) - (totalH / 2) + 20;

      lines.forEach(l => {
        ctx.fillText(l, width / 2, startY);
        startY += lineHeight;
      });

      // 6. Rodapé com Dedicatória
      const footerY = height - 150;
      ctx.strokeStyle = pal.border;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width / 2 - 120, footerY - 50);
      ctx.lineTo(width / 2 + 120, footerY - 50);
      ctx.stroke();

      if (name || relationship) {
        ctx.fillStyle = pal.primaryText;
        ctx.font = 'bold 30px sans-serif';
        const label = name ? `Para: ${name}` : `Para: ${relationship}`;
        ctx.fillText(label, width / 2, footerY);
      }

      ctx.fillStyle = pal.secondaryText;
      ctx.font = '500 20px sans-serif';
      ctx.fillText('Você é precioso(a) e tem um propósito único.', width / 2, footerY + 45);
    },

    download(canvas, filename = 'palavra-afirmativa.png') {
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    }
  };

  /* ==========================================================================
     5. MOTOR DE GERAÇÃO INTELIGENTE (Curadoria + Opcional Gemini)
     ========================================================================== */
  const Generator = {
    async generate({
      name = '',
      relationship = 'Filho(a)',
      ageGroup = 'Criança',
      gender = 'Não especificar',
      profession = '',
      hobby = '',
      specialConditions = [],
      tone = 'Acolhedora / Afetuosa',
      theme = 'Autoestima',
      apiKey = '',
      isDailyQuick = false
    }) {
      // 1. Tenta API Gemini caso configurada
      if (apiKey && apiKey.trim().length > 10) {
        try {
          const aiResult = await this.generateWithGemini({
            name, relationship, ageGroup, gender, profession, hobby,
            specialConditions, tone, theme, apiKey, isDailyQuick
          });
          if (aiResult && aiResult.text) return aiResult;
        } catch (e) {
          console.warn('API indisponível, usando motor curado offline:', e);
        }
      }

      // 2. Motor Curado Offline (Instantâneo & Zero Custo)
      return this.generateFromCuratedDatabase({
        name, relationship, ageGroup, profession, hobby,
        specialConditions, tone, theme, isDailyQuick
      });
    },

    generateFromCuratedDatabase({
      name = '',
      relationship = 'Filho(a)',
      ageGroup = 'Criança',
      profession = '',
      hobby = '',
      specialConditions = [],
      tone = 'Acolhedora / Afetuosa',
      theme = 'Autoestima',
      isDailyQuick = false
    }) {
      if (isDailyQuick) {
        const rand = GENERAL_QUICK_AFFIRMATIONS[Math.floor(Math.random() * GENERAL_QUICK_AFFIRMATIONS.length)];
        return {
          id: 'quick_' + Date.now(),
          text: rand,
          tone: 'Acolhedora / Diária',
          theme: 'Serenidade & Força',
          reference: 'Sabedoria Clássica e Afeto Diário'
        };
      }

      // Calcula pontuação de correspondência
      const scored = AFFIRMATIONS_DB.map(item => {
        let score = 0;
        if (specialConditions.includes(item.category)) score += 8;
        if (item.tone === tone) score += 5;
        if (item.relationships && item.relationships.includes(relationship)) score += 4;
        if (theme !== 'Aleatório' && item.theme === theme) score += 4;
        score += Math.random() * 2;
        return { item, score };
      });

      scored.sort((a, b) => b.score - a.score);
      const chosen = scored[0]?.item || AFFIRMATIONS_DB[0];

      // Formatação amigável das variáveis
      let displayName = name.trim();
      if (!displayName) {
        if (relationship === 'Filho(a)') {
          displayName = ageGroup === 'Criança' ? 'meu pequeno(a)' : 'meu querido(a) filho(a)';
        } else if (relationship === 'Companheiro(a)') {
          displayName = 'meu amor';
        } else if (relationship === 'Amigo(a)') {
          displayName = 'meu grande amigo(a)';
        } else if (relationship === 'Aluno(a)') {
          displayName = 'querido(a) aluno(a)';
        } else {
          displayName = 'pessoa querida';
        }
      }

      let hobbyText = hobby.trim() ? `sua paixão por ${hobby.trim()}` : 'suas curiosidades e talentos';
      if (profession.trim()) {
        hobbyText += ` e a sua dedicação aos estudos e ao trabalho`;
      }

      const text = chosen.template
        .replace(/\{nome\}/g, displayName)
        .replace(/\{hobby_text\}/g, hobbyText);

      return {
        id: chosen.id + '_' + Date.now(),
        text: text,
        tone: chosen.tone,
        theme: chosen.theme,
        reference: chosen.reference
      };
    },

    async generateWithGemini({
      name, relationship, ageGroup, gender, profession, hobby,
      specialConditions, tone, theme, apiKey, isDailyQuick
    }) {
      const targetName = name.trim() || (relationship === 'Filho(a)' ? 'meu filho(a)' : 'alguém especial');
      const systemPrompt = `Você é um mentor especialista em psicologia do desenvolvimento, acolhimento materno e pedagogia inclusiva, fundamentado nos princípios de Jordan Peterson (responsabilidade amorosa, regra das microvitórias), Donald Winnicott (colo acolhedor/holding), Carl Rogers (aceitação positiva incondicional) e Viktor Frankl.
DIRETRIZES ESTRITAS:
1. Respeite valores universais de família, paz, afeto e fé.
2. Jamais incentive violência ou agressividade.
3. Não promova o ateísmo ou discussões antirreligiosas.
4. Mantenha as mensagens centradas no amor familiar, amizade pura, companheirismo sadio e superação; não introduza temas de homossexualismo ou pautas divisivas.
5. Se envolver Autismo ou Dificuldades de Aprendizagem, use linguagem clara, direta, validando o ritmo único de evolução.
6. A mensagem deve ter entre 3 a 5 frases tocantes e edificantes em Português do Brasil.
7. Retorne APENAS o texto da mensagem.`;

      const userPrompt = `Crie uma palavra afirmativa para ${targetName} (${relationship}), faixa etária ${ageGroup}, tom ${tone}, tema ${theme}. ${profession ? 'Profissão: ' + profession : ''} ${hobby ? 'Hobby: ' + hobby : ''} ${specialConditions.length ? 'Desafios/Perfil: ' + specialConditions.join(', ') : ''}`;

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });

      if (!resp.ok) throw new Error('Falha na API Gemini: ' + resp.status);
      const data = await resp.json();
      const txt = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!txt) throw new Error('Resposta vazia');

      return {
        id: 'ai_' + Date.now(),
        text: txt.trim().replace(/^["“']|["”']$/g, ''),
        tone,
        theme,
        reference: 'Gerado com IA • Psicologia do Desenvolvimento'
      };
    }
  };

  /* ==========================================================================
     6. CONTROLADOR PRINCIPAL DA INTERFACE (APP)
     ========================================================================== */
  class PalavrasAfirmativasApp {
    constructor() {
      this.state = {
        name: '',
        relationship: 'Filho(a)',
        ageGroup: 'Criança',
        hobby: '',
        profession: '',
        specialConditions: ['Autismo / Neurodivergente', 'Dificuldade de Aprendizagem'],
        tone: 'Acolhedora / Afetuosa',
        theme: 'Autoestima',
        currentAffirmation: null,
        activePalette: 'rose',
        activeTab: 'text',
        loading: false,
        settings: Storage.getSettings()
      };
      this.dom = {};
    }

    start() {
      this.cacheDom();
      this.bindEvents();
      Speech.init();
      this.renderHistory();
      this.loadSettings();
      console.log('🌸 Palavras Afirmativas pronta para uso!');
    }

    cacheDom() {
      this.dom.inputName = document.getElementById('inputName');
      this.dom.selectRelationship = document.getElementById('selectRelationship');
      this.dom.selectAgeGroup = document.getElementById('selectAgeGroup');
      this.dom.inputHobby = document.getElementById('inputHobby');
      this.dom.inputProfession = document.getElementById('inputProfession');
      this.dom.conditionsGrid = document.getElementById('conditionsGrid');
      this.dom.tonesGrid = document.getElementById('tonesGrid');
      this.dom.themesPills = document.getElementById('themesPills');
      this.dom.btnGenerate = document.getElementById('btnGenerate');

      this.dom.btnQuickDaily = document.getElementById('btnQuickDaily');
      this.dom.btnEmptyQuick = document.getElementById('btnEmptyQuick');

      this.dom.emptyState = document.getElementById('emptyState');
      this.dom.generatedTextWrapper = document.getElementById('generatedTextWrapper');
      this.dom.quoteText = document.getElementById('quoteText');
      this.dom.metaTarget = document.getElementById('metaTarget');
      this.dom.metaTone = document.getElementById('metaTone');
      this.dom.metaReference = document.getElementById('metaReference');

      this.dom.viewTabs = document.getElementById('viewTabs');
      this.dom.viewTabBtns = document.querySelectorAll('.view-tab-btn');
      this.dom.cardPreviewArea = document.getElementById('cardPreviewArea');
      this.dom.cardCanvas = document.getElementById('cardCanvas');
      this.dom.btnOpenCardTab = document.getElementById('btnOpenCardTab');
      this.dom.btnDownloadCard = document.getElementById('btnDownloadCard');
      this.dom.paletteBtns = document.querySelectorAll('.palette-btn');

      this.dom.btnSpeechToggle = document.getElementById('btnSpeechToggle');
      this.dom.speechPlayIcon = document.getElementById('speechPlayIcon');
      this.dom.speechStopIcon = document.getElementById('speechStopIcon');
      this.dom.speechStatusTitle = document.getElementById('speechStatusTitle');

      this.dom.btnShareWhatsapp = document.getElementById('btnShareWhatsapp');
      this.dom.btnShareEmail = document.getElementById('btnShareEmail');
      this.dom.btnCopyText = document.getElementById('btnCopyText');
      this.dom.copyBtnLabel = document.getElementById('copyBtnLabel');

      this.dom.historyList = document.getElementById('historyList');
      this.dom.historyCountLabel = document.getElementById('historyCountLabel');

      this.dom.settingsModal = document.getElementById('settingsModal');
      this.dom.btnOpenSettings = document.getElementById('btnOpenSettings');
      this.dom.btnCloseSettings = document.getElementById('btnCloseSettings');
      this.dom.btnCancelSettings = document.getElementById('btnCancelSettings');
      this.dom.btnSaveSettings = document.getElementById('btnSaveSettings');
      this.dom.settingApiKey = document.getElementById('settingApiKey');
      this.dom.settingSpeechSpeed = document.getElementById('settingSpeechSpeed');
      this.dom.speechSpeedDisplay = document.getElementById('speechSpeedDisplay');

      // Elementos do Modal Pix
      this.dom.pixModal = document.getElementById('pixModal');
      this.dom.btnOpenPix = document.getElementById('btnOpenPix');
      this.dom.btnClosePix = document.getElementById('btnClosePix');
      this.dom.btnCopyPix = document.getElementById('btnCopyPix');
      this.dom.copyPixLabel = document.getElementById('copyPixLabel');
      this.dom.pixKeyCodeText = document.getElementById('pixKeyCodeText');
    }

    bindEvents() {
      // 1. Condições Especiais (Multi-select)
      if (this.dom.conditionsGrid) {
        this.dom.conditionsGrid.addEventListener('click', (e) => {
          const chip = e.target.closest('.condition-chip');
          if (!chip) return;
          e.preventDefault();
          const condition = chip.dataset.condition;
          if (this.state.specialConditions.includes(condition)) {
            this.state.specialConditions = this.state.specialConditions.filter(c => c !== condition);
            chip.classList.remove('active');
          } else {
            this.state.specialConditions.push(condition);
            chip.classList.add('active');
          }
        });
      }

      // 2. Tons / Estilos (Single-select)
      if (this.dom.tonesGrid) {
        this.dom.tonesGrid.addEventListener('click', (e) => {
          const card = e.target.closest('.tone-card');
          if (!card) return;
          e.preventDefault();
          this.dom.tonesGrid.querySelectorAll('.tone-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          this.state.tone = card.dataset.tone;
        });
      }

      // 3. Temas (Pílulas)
      if (this.dom.themesPills) {
        this.dom.themesPills.addEventListener('click', (e) => {
          const pill = e.target.closest('.theme-pill');
          if (!pill) return;
          e.preventDefault();
          this.dom.themesPills.querySelectorAll('.theme-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.state.theme = pill.dataset.theme;
        });
      }

      // 4. Botões de Geração
      this.dom.btnGenerate?.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleGenerate(false);
      });
      this.dom.btnQuickDaily?.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleGenerate(true);
      });
      this.dom.btnEmptyQuick?.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleGenerate(true);
      });

      // 5. Abas (Texto / Cartão)
      this.dom.viewTabBtns?.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.switchTab(btn.dataset.tab);
        });
      });
      this.dom.btnOpenCardTab?.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchTab('card');
      });

      // 6. Paletas de Cores do Cartão
      this.dom.paletteBtns?.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.dom.paletteBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.state.activePalette = btn.dataset.palette;
          this.renderCard();
        });
      });

      // 7. Download do Cartão PNG
      this.dom.btnDownloadCard?.addEventListener('click', (e) => {
        e.preventDefault();
        const targetName = (this.dom.inputName?.value.trim() || 'especial').toLowerCase().replace(/\s+/g, '-');
        CardGenerator.download(this.dom.cardCanvas, `palavra-afirmativa-${targetName}.png`);
      });

      // 8. Player de Áudio (Voz Alta)
      this.dom.btnSpeechToggle?.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleSpeechToggle();
      });

      // 9. Compartilhamentos
      this.dom.btnShareWhatsapp?.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleShareWhatsapp();
      });
      this.dom.btnShareEmail?.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleShareEmail();
      });
      this.dom.btnCopyText?.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleCopyText();
      });

      // 10. Modal de Configurações
      this.dom.btnOpenSettings?.addEventListener('click', () => this.openSettingsModal());
      this.dom.btnCloseSettings?.addEventListener('click', () => this.closeSettingsModal());
      this.dom.btnCancelSettings?.addEventListener('click', () => this.closeSettingsModal());
      this.dom.btnSaveSettings?.addEventListener('click', () => this.saveSettingsFromModal());
      this.dom.settingSpeechSpeed?.addEventListener('input', (e) => {
        if (this.dom.speechSpeedDisplay) {
          this.dom.speechSpeedDisplay.textContent = `${e.target.value}x`;
        }
      });

      // 11. Modal de Doação / Apoio Pix
      this.dom.btnOpenPix?.addEventListener('click', (e) => {
        e.preventDefault();
        this.openPixModal();
      });
      this.dom.btnClosePix?.addEventListener('click', (e) => {
        e.preventDefault();
        this.closePixModal();
      });
      this.dom.btnCopyPix?.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleCopyPix();
      });

      // 12. Fechamento de Modais clicando no fundo (backdrop overlay)
      this.dom.pixModal?.addEventListener('click', (e) => {
        if (e.target === this.dom.pixModal) {
          this.closePixModal();
        }
      });
      this.dom.settingsModal?.addEventListener('click', (e) => {
        if (e.target === this.dom.settingsModal) {
          this.closeSettingsModal();
        }
      });

      // 13. Fechamento de Modais via Tecla ESC (Acessibilidade)
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
          if (this.dom.pixModal?.classList.contains('active')) {
            this.closePixModal();
          }
          if (this.dom.settingsModal?.classList.contains('active')) {
            this.closeSettingsModal();
          }
        }
      });
    }

    async handleGenerate(isDailyQuick = false) {
      if (this.state.loading) return;

      // 1. Verifica se já existe uma afirmativa do dia salva em cache
      if (isDailyQuick) {
        const cachedDaily = Storage.getDailyAfirmativa();
        if (cachedDaily) {
          Speech.stop();
          this.updateSpeechUi(false);
          this.state.currentAffirmation = cachedDaily;
          this.displayAffirmation(cachedDaily);
          return;
        }
      }

      this.state.loading = true;

      const btn = this.dom.btnGenerate;
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `<span>✨ Tecendo palavras de carinho...</span>`;

      Speech.stop();
      this.updateSpeechUi(false);

      try {
        const result = await Generator.generate({
          name: isDailyQuick ? '' : (this.dom.inputName?.value.trim() || ''),
          relationship: isDailyQuick ? 'Alguém Querido' : (this.dom.selectRelationship?.value || 'Filho(a)'),
          ageGroup: this.dom.selectAgeGroup?.value || 'Criança',
          hobby: isDailyQuick ? '' : (this.dom.inputHobby?.value.trim() || ''),
          profession: isDailyQuick ? '' : (this.dom.inputProfession?.value.trim() || ''),
          specialConditions: isDailyQuick ? [] : this.state.specialConditions,
          tone: isDailyQuick ? 'Acolhedora / Afetuosa' : this.state.tone,
          theme: isDailyQuick ? 'Pequenas Vitórias' : this.state.theme,
          apiKey: this.state.settings.apiKey,
          isDailyQuick
        });

        // Se foi a afirmativa do dia, salva no cache diário
        if (isDailyQuick) {
          Storage.saveDailyAfirmativa(result);
        }

        this.state.currentAffirmation = result;
        this.displayAffirmation(result);

        const saved = {
          id: result.id,
          text: result.text,
          name: this.dom.inputName?.value.trim() || this.dom.selectRelationship?.value || 'Pessoa Querida',
          tone: result.tone,
          date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
        };
        Storage.saveToHistory(saved);
        this.renderHistory();

      } catch (err) {
        console.error('Erro na geração:', err);
        alert('Não foi possível gerar a afirmativa. Tente novamente.');
      } finally {
        this.state.loading = false;
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
    }

    displayAffirmation(affirmation) {
      if (this.dom.emptyState) this.dom.emptyState.style.display = 'none';
      if (this.dom.viewTabs) this.dom.viewTabs.style.display = 'flex';
      this.switchTab('text');

      if (this.dom.quoteText) this.dom.quoteText.textContent = `"${affirmation.text}"`;
      const targetName = this.dom.inputName?.value.trim() || this.dom.selectRelationship?.value || 'Pessoa Querida';
      if (this.dom.metaTarget) this.dom.metaTarget.textContent = targetName;
      if (this.dom.metaTone) this.dom.metaTone.textContent = affirmation.tone || this.state.tone;
      if (this.dom.metaReference) this.dom.metaReference.textContent = affirmation.reference || 'Psicologia & Afeto';

      this.renderCard();
    }

    renderCard() {
      if (!this.state.currentAffirmation || !this.dom.cardCanvas) return;
      CardGenerator.drawCard(this.dom.cardCanvas, {
        text: this.state.currentAffirmation.text,
        name: this.dom.inputName?.value.trim() || '',
        relationship: this.dom.selectRelationship?.value || '',
        paletteKey: this.state.activePalette
      });
    }

    switchTab(tabName) {
      this.state.activeTab = tabName;
      this.dom.viewTabBtns?.forEach(b => {
        b.classList.toggle('active', b.dataset.tab === tabName);
      });

      if (tabName === 'text') {
        if (this.dom.generatedTextWrapper) this.dom.generatedTextWrapper.style.display = 'flex';
        if (this.dom.cardPreviewArea) this.dom.cardPreviewArea.style.display = 'none';
      } else {
        if (this.dom.generatedTextWrapper) this.dom.generatedTextWrapper.style.display = 'none';
        if (this.dom.cardPreviewArea) this.dom.cardPreviewArea.style.display = 'flex';
        this.renderCard();
      }
    }

    handleSpeechToggle() {
      if (!this.state.currentAffirmation) return;
      const text = this.state.currentAffirmation.text;
      const rate = parseFloat(this.state.settings.speechRate || 0.92);

      Speech.toggle(text, {
        rate,
        onStart: () => this.updateSpeechUi(true),
        onEnd: () => this.updateSpeechUi(false),
        onError: () => this.updateSpeechUi(false)
      });
    }

    updateSpeechUi(speaking) {
      if (!this.dom.btnSpeechToggle) return;
      if (speaking) {
        this.dom.btnSpeechToggle.classList.add('speaking');
        if (this.dom.speechPlayIcon) this.dom.speechPlayIcon.style.display = 'none';
        if (this.dom.speechStopIcon) this.dom.speechStopIcon.style.display = 'block';
        if (this.dom.speechStatusTitle) this.dom.speechStatusTitle.textContent = 'Lendo com afeto...';
      } else {
        this.dom.btnSpeechToggle.classList.remove('speaking');
        if (this.dom.speechPlayIcon) this.dom.speechPlayIcon.style.display = 'block';
        if (this.dom.speechStopIcon) this.dom.speechStopIcon.style.display = 'none';
        if (this.dom.speechStatusTitle) this.dom.speechStatusTitle.textContent = 'Ouvir em Voz Alta';
      }
    }

    handleShareWhatsapp() {
      if (!this.state.currentAffirmation) return;
      const target = this.dom.inputName?.value.trim();
      const forStr = target ? ` para ${target}` : '';
      const text = encodeURIComponent(`🌸 *Palavra Afirmativa Especial${forStr}:*\n\n"${this.state.currentAffirmation.text}"\n\n✨ _Com carinho e votos de um dia abençoado!_`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    }

    handleShareEmail() {
      if (!this.state.currentAffirmation) return;
      const target = this.dom.inputName?.value.trim();
      const subject = encodeURIComponent(`Uma palavra afirmativa especial para você${target ? ', ' + target : ''}!`);
      const body = encodeURIComponent(`Olá,\n\nGostaria de compartilhar esta mensagem afirmativa com você:\n\n"${this.state.currentAffirmation.text}"\n\nCom todo o meu carinho!`);
      window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
    }

    handleCopyText() {
      if (!this.state.currentAffirmation) return;
      navigator.clipboard.writeText(this.state.currentAffirmation.text).then(() => {
        if (this.dom.copyBtnLabel) {
          this.dom.copyBtnLabel.textContent = 'Copiado com Amor! ✓';
          setTimeout(() => {
            if (this.dom.copyBtnLabel) this.dom.copyBtnLabel.textContent = 'Copiar Texto';
          }, 2400);
        }
      });
    }

    renderHistory() {
      const history = Storage.getHistory();
      if (this.dom.historyCountLabel) {
        this.dom.historyCountLabel.textContent = `${history.length} salva${history.length === 1 ? '' : 's'}`;
      }
      if (!this.dom.historyList) return;

      if (history.length === 0) {
        this.dom.historyList.innerHTML = `
          <p style="font-size: 0.78rem; color: var(--text-light); text-align: center; padding: 1rem 0; font-style: italic;">
            Suas mensagens geradas aparecerão aqui para você revisitar sempre que quiser.
          </p>
        `;
        return;
      }

      this.dom.historyList.innerHTML = history.map(item => `
        <div class="history-item" data-id="${item.id}">
          <div class="history-item-meta">
            <div style="display: flex; align-items: center; gap: 0.35rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              <strong>${item.name || 'Pessoa Querida'}</strong>
              <span style="opacity: 0.7;">• ${item.date || ''}</span>
            </div>
            <button type="button" class="btn-delete-history" data-delete-id="${item.id}" title="Remover esta mensagem do histórico">
              ✕
            </button>
          </div>
          <p class="history-item-snippet">"${item.text}"</p>
        </div>
      `).join('');

      // Clique no item para recarregar a mensagem
      this.dom.historyList.querySelectorAll('.history-item').forEach(el => {
        el.addEventListener('click', () => {
          const item = history.find(h => String(h.id) === String(el.dataset.id));
          if (item) {
            this.state.currentAffirmation = item;
            this.displayAffirmation(item);
          }
        });
      });

      // Clique no botão de remover item individual
      this.dom.historyList.querySelectorAll('.btn-delete-history').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation(); // Evita recarregar a mensagem na tela ao tentar excluir
          const id = btn.dataset.deleteId;
          Storage.removeFromHistory(id);
          this.renderHistory();
        });
      });
    }

    openSettingsModal() {
      this.loadSettings();
      this.dom.settingsModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => this.dom.btnCloseSettings?.focus(), 60);
    }

    closeSettingsModal() {
      this.dom.settingsModal?.classList.remove('active');
      document.body.style.overflow = '';
      this.dom.btnOpenSettings?.focus();
    }

    loadSettings() {
      const s = Storage.getSettings();
      this.state.settings = s;
      if (this.dom.settingApiKey) this.dom.settingApiKey.value = s.apiKey || '';
      if (this.dom.settingSpeechSpeed) {
        this.dom.settingSpeechSpeed.value = s.speechRate || 0.92;
        if (this.dom.speechSpeedDisplay) {
          this.dom.speechSpeedDisplay.textContent = `${s.speechRate || 0.92}x`;
        }
      }
    }

    saveSettingsFromModal() {
      const newSettings = {
        apiKey: this.dom.settingApiKey?.value.trim() || '',
        speechRate: parseFloat(this.dom.settingSpeechSpeed?.value) || 0.92
      };
      Storage.saveSettings(newSettings);
      this.state.settings = newSettings;
      this.closeSettingsModal();
    }

    openPixModal() {
      this.dom.pixModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => this.dom.btnClosePix?.focus(), 60);
    }

    closePixModal() {
      this.dom.pixModal?.classList.remove('active');
      document.body.style.overflow = '';
      this.dom.btnOpenPix?.focus();
    }

    handleCopyPix() {
      const pixKey = this.dom.pixKeyCodeText?.textContent?.trim() || 'Ee094ef5-01b9-492d-a41e-e0c763cf4f40';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pixKey).then(() => {
          this.showPixCopiedFeedback();
        }).catch(() => {
          this.fallbackCopyPix(pixKey);
        });
      } else {
        this.fallbackCopyPix(pixKey);
      }
    }

    fallbackCopyPix(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        this.showPixCopiedFeedback();
      } catch (err) {
        console.warn('Falha no fallback de cópia', err);
      }
      document.body.removeChild(ta);
    }

    showPixCopiedFeedback() {
      if (this.dom.copyPixLabel) {
        this.dom.copyPixLabel.textContent = 'Chave Pix Copiada! ✓';
        setTimeout(() => {
          if (this.dom.copyPixLabel) this.dom.copyPixLabel.textContent = 'Copiar Chave Pix';
        }, 2500);
      }
    }
  }

  // Inicialização segura
  function bootstrap() {
    const app = new PalavrasAfirmativasApp();
    app.start();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

})();
