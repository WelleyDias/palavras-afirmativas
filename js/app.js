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
    /* ==========================================================================
     BANCO DE ARTIGOS CURADOS (THE SCHOOL OF LIFE / REVISTA AFETIVA)
     ========================================================================== */
  const ARTICLES_DATA = [
  {
    "id": "neurociencia-do-perdao",
    "category": "Relações & Empatia",
    "categoryTheme": "rose",
    "title": "A Neurociência do Perdão: Puxar a cadeira, esfriar o café e desarmar o tribunal da mente",
    "subtitle": "Por que guardar mágoa adoece as nossas células — e o alívio silencioso de não precisar concordar com quem feriu para poder viver em paz.",
    "readTime": "5 min de leitura • Conversa Acolhedora",
    "summary": "Entenda como a ruminação da mágoa mantém o cortisol e a amígdala cerebral sob ataque contínuo e descubra por que perdoar é um ato de soberania para recuperar a própria paz.",
    "lead": "Se você já passou uma noite em claro revivendo mentalmente uma discussão antiga, formulando as respostas perfeitas que nunca teve a chance de dizer, puxa uma cadeira. Põe um café quentinho na xícara. Hoje nós precisamos conversar sobre o que esse tribunal invisível está fazendo com o seu corpo.",
    "bodyParagraphs": [
      "Nós fomos ensinados, desde muito cedo, a pensar no perdão como um presente caridoso que entregamos a quem nos machucou. A cultura popular vendeu a ideia de que perdoar significa dar um abraço caloroso, dizer que \"está tudo bem\" e fingir que a cicatriz nunca existiu. Mas a verdade nua e crua é que quase ninguém consegue fazer isso — e quando tentamos forçar esse perdão açucarado, a única coisa que colhemos é uma camada extra de culpa por ainda sentirmos raiva.",
      "A neurociência moderna traz um alívio imenso para esse dilema. Quando olhamos para um cérebro sob o efeito do ressentimento crônico por meio de ressonâncias magnéticas funcionais, o que vemos não é um coração endurecido: vemos um sistema nervoso em alerta máximo de sobrevivência. Para a sua amígdala cerebral — a pequena sentinela que detecta perigos —, uma lembrança dolorosa não é passada; ela é presente.",
      "Toda vez que você revive a quebra de confiança ou a palavra áspera daquele parente ou ex-amigo, o eixo HPA (hipotálamo-hipófise-adrenal) dispara a mesma torrente bioquímica de anos atrás: cortisol e noradrenalina são liberados no sangue, o ritmo cardíaco acelera, o maxilar aperta e o sistema imunológico entra em processo inflamatório. Em termos estritamente biológicos, guardar ressentimento é tomar um gole diário de veneno esperando que a outra pessoa sinta dor de estômago.",
      "É aqui que a pesquisa do Stanford Forgiveness Project, liderada pelo Dr. Fred Luskin, muda todo o jogo. Perdoar não é reconciliação. Reconciliação exige duas pessoas conscientes, mudança comprovada de conduta e reconstrução de limites. Já o perdão é um processo 100% individual, íntimo e silencioso. É a decisão pragmática de retirar a outra pessoa do controle do seu sistema nervoso.",
      "Quando você decide perdoar, você não está dizendo que o outro estava certo ou que o que aconteceu foi justo. Você está simplesmente cancelando a cobrança de uma dívida que a outra pessoa jamais terá maturidade para pagar. Você está dizendo: \"O que você fez foi injusto, mas eu não permitirei que isso governe a qualidade da minha respiração nesta manhã\"."
    ],
    "quoteCallout": "Perdoar não transforma o passado, mas liberta o futuro. É o momento exato em que você decide que a sua paz vale mais do que a sua razão.",
    "scienceExplain": "Estudos de Stanford demonstram que indivíduos que aprendem a soltar queixas crônicas apresentam queda de até 40% nos níveis de estresse vascular e redução de citocinas inflamatórias como a interleucina-6, restaurando o tônus do nervo vago e o equilíbrio do sistema parassimpático.",
    "practice": [
      {
        "step": "1",
        "title": "Separe o perdão interior da convivência prática",
        "description": "Você tem todo o direito de perdoar intimamente para libertar o seu coração e, ainda assim, manter uma distância saudável e intransponível de quem desrespeita os seus limites."
      },
      {
        "step": "2",
        "title": "Desmonte a fantasia da desculpa perfeita",
        "description": "Esperar um pedido sincero de desculpas de quem não tem maturidade emocional é terceirizar a sua cura. Feche a conta você mesmo e declare o assunto encerrado na sua mente."
      },
      {
        "step": "3",
        "title": "Dê nome à dor sem abrir o tribunal (Name it to Tame it)",
        "description": "Quando a mágoa bater à porta, coloque a mão no peito, respire fundo e diga: \"Eu estou sentindo a dor da injustiça, mas agora eu estou em segurança e escolho soltar este peso\"."
      }
    ],
    "affirmation": "Eu retiro o meu coração do tribunal do passado. Perdoar não significa concordar com o erro alheio, mas reconhecer que a minha paz é valiosa demais para ficar nas mãos de quem me machucou. Hoje eu me devolvo a liberdade de viver leve e sereno.",
    "reference": "Inspirado no Stanford Forgiveness Project (Dr. Fred Luskin), Dr. Dan Siegel e Brené Brown"
  },
  {
    "id": "neurociencia-palavras-afetuosas",
    "category": "Neurociência & Emoções",
    "categoryTheme": "emerald",
    "title": "O Abraço em Forma de Frase: Por que seu cérebro relaxa ao ouvir validação sincera",
    "subtitle": "A química biológica do afeto e o porquê de um elogio verdadeiro agir como um remédio para o corpo cansado.",
    "readTime": "4 min de leitura • Conversa Acolhedora",
    "summary": "Descubra como palavras de carinho e aceitação incondicional desarmam a hiperatividade da amígdala cerebral, reduzem a dor física e ativam ondas de ocitocina.",
    "lead": "Há dias em que a gente só precisa de alguém que olhe nos nossos olhos e diga: \"Eu vi o quanto você se esforçou hoje. Pode soltar os ombros agora\". Não é carência ou fraqueza; é pura e bela neurobiologia.",
    "bodyParagraphs": [
      "Pense no cérebro humano como uma casa antiga com um alarme ultra-sensível. Durante a maior parte do dia, vivemos cercados por micro-ameaças: prazos apertados, notificações insistentes, olhares de desaprovação ou a cobrança interna implacável de que estamos sempre devendo algo. Esse alarme — a amígdala cerebral — fica disparando zumbidos constantes que mantêm nossos músculos contraídos e a respiração rasa.",
      "Quando alguém que amamos ou respeitamos nos oferece uma frase de acolhimento genuíno — sem críticas veladas, sem sermões moralistas, sem o clássico \"eu avisei\" —, algo mágico acontece na fisiologia. As vias auditivas enviam os sinais para o córtex pré-frontal ventromedial, que imediatamente comanda a sentinela: \"Desliga o alarme. O ambiente é seguro. Aqui nós não precisamos lutar\".",
      "Em questão de segundos, cascatas de ocitocina e opioides endógenos começam a irrigar o sistema nervoso. Esses são exatamente os mesmos compostos químicos que o corpo produz para aliviar a dor física e proporcionar sensação de aconchego térmico. É por isso que uma palavra amorosa realmente \"aquece o coração\": não é uma metáfora poética, é dilatação vascular parassimpática acontecendo sob a sua pele.",
      "O pioneiro da psicologia humanista, Carl Rogers, chamou isso de \"Aceitação Positiva Incondicional\". Quando um ser humano percebe que seu valor não está sob julgamento permanente, toda a energia que antes era gasta em defesa e camuflagem pode finalmente ser usada para o descanso, a criatividade e a cicatrização emocional."
    ],
    "quoteCallout": "Uma palavra afetuosa não muda as tempestades do mundo exterior, mas constrói um telhado seguro onde a mente pode descansar em paz.",
    "scienceExplain": "Conforme a Teoria Polivagal de Stephen Porges, a prosódia suave e o vocabulário gentil estimulam o ramo ventral do nervo vago, desacelerando a frequência cardíaca e induzindo o organismo ao estado regenerativo de descanso e digestão.",
    "practice": [
      {
        "step": "1",
        "title": "Valide o sentimento antes de procurar soluções",
        "description": "Quando alguém querido chegar angustiado, segure a vontade de dar conselhos imediatos. Diga primeiro: \"Eu entendo que você esteja exausto. Faz todo sentido se sentir assim depois de tudo\"."
      },
      {
        "step": "2",
        "title": "Elogie a postura e a coragem, não só o resultado",
        "description": "Troque o foco da perfeição pelo reconhecimento do esforço: \"Vi a paciência e a dignidade com que você lidou com aquele momento difícil, e me orgulho muito de você\"."
      },
      {
        "step": "3",
        "title": "Crie pequenos rituais de palavras gentis",
        "description": "Antes de dormir ou ao acordar, envie uma mensagem que não cobre respostas, apenas ofereça um refúgio: \"Só queria que você soubesse que sou grato pela sua vida\"."
      }
    ],
    "affirmation": "O meu valor não reside em ser perfeito, mas na honestidade de cada passo que dou. Eu me permito desacelerar, respirar fundo e receber com o coração aberto todo o carinho que me cerca.",
    "reference": "Fundamentado em Carl Rogers (Terapia Centrada na Pessoa) e Stephen Porges (Teoria Polivagal)"
  },
  {
    "id": "o-conceito-de-holding",
    "category": "Relações & Empatia",
    "categoryTheme": "rose",
    "title": "O Colo que Sustenta: A arte de amar sem tentar consertar a tempestade do outro",
    "subtitle": "Como Donald Winnicott ensinou que o maior presente que podemos dar a quem sofre é um silêncio habitado de ternura.",
    "readTime": "5 min de leitura • Conversa Acolhedora",
    "summary": "Aprenda a criar um refúgio emocional seguro para as pessoas queridas através da presença acolhedora e não-invasiva que permite atravessar crises.",
    "lead": "Ver quem a gente ama em sofrimento desperta um desespero quase incontrolável de consertar as coisas. Queremos dar soluções rápidas, falar frases de efeito ou dizer que \"vai passar logo\". Mas quase sempre, a alma ferida não precisa de um mecânico; precisa de um abrigo.",
    "bodyParagraphs": [
      "O pediatra e psicanalista inglês Donald Winnicott dedicou a vida a observar a relação profunda entre mães e bebês. Ele percebeu que, nos primeiros meses de vida, o bebê não entende onde ele termina e onde o mundo começa. Quando o bebê chora em pânico de cólica ou fome, ele sente que está se desfazendo em pedaços. A mãe não precisa fazer mágica; ela simplesmente segura o bebê nos braços com firmeza e calma. Esse ato físico ganhou o nome técnico de \"holding\" — sustentação.",
      "Na vida adulta, quando os temporais da perda, da frustração ou do esgotamento nos atingem, voltamos a ser aquele bebê assustado. As certezas desmoronam e a sensação é de que não vamos aguentar o peso do dia. É nesse instante que a presença de alguém que não entra em pânico ao nosso lado opera milagres na nossa psique.",
      "Sustentar o outro — praticar o holding emocional — significa ter a coragem de sentar ao lado da dor sem tentar empurrá-la para baixo do tapete. Significa não dizer: \"Não chora por isso, tem tanta coisa boa na vida\". Esse tipo de positividade apressada, mesmo quando bem-intencionada, comunica à pessoa que a tristeza dela é inconveniente e que ela deve se recompor rápido para não incomodar.",
      "O verdadeiro holding é humilde e paciente. Ele se manifesta em oferecer um copo de água fresca, diminuir as luzes da sala, colocar uma manta quentinha nos ombros da pessoa e dizer a frase mais restauradora que existe no vocabulário humano: \"Não precisa falar nada agora se não quiser. Eu estou aqui com você e daqui não vou sair\"."
    ],
    "quoteCallout": "Amar alguém em crise não é ter a resposta certa para todas as dores, mas ser o porto seguro onde o outro pode chorar sem vergonha de ser vulnerável.",
    "scienceExplain": "Graças aos circuitos de neurônios-espelho e co-regulação autonômica, a frequência cardíaca e a respiração calma de um cuidador presente induzem diretamente o relaxamento do sistema nervoso de quem está em desregulação emocional.",
    "practice": [
      {
        "step": "1",
        "title": "Pratique o silêncio habitado",
        "description": "Permita pausas longas. Não tenha pressa em preencher o silêncio do outro com conselhos. Às vezes, o maior alívio do mundo é apenas saber que não estamos sozinhos na sala."
      },
      {
        "step": "2",
        "title": "Cuide do conforto do ambiente físico",
        "description": "O corpo angustiado precisa de segurança tátil. Diminua o barulho ao redor, ofereça uma bebida morna ou um cobertor. O conforto dos sentidos acalma o sistema límbico."
      },
      {
        "step": "3",
        "title": "Elimine as frases de invalidação",
        "description": "Evite expressões como \"podia ser pior\" ou \"levanta essa cabeça\". Troque por: \"Eu sinto muito que você esteja passando por isso. Estou com você em cada segundo\"."
      }
    ],
    "affirmation": "Eu não preciso carregar o peso do mundo sozinho nem fingir fortaleza o tempo todo. Eu me permito descansar em lugares seguros e recebo o acolhimento sincero daqueles que me amam.",
    "reference": "Fundamentado em Donald Winnicott (O Ambiente e os Processos de Maturação)"
  },
  {
    "id": "microvitorias-sobrecarga",
    "category": "Autocuidado & Presença",
    "categoryTheme": "violet",
    "title": "A Força das Microvitórias: Quando lavar uma xícara já é um ato heroico",
    "subtitle": "Como o princípio psicológico dos passos viáveis resgata a dignidade em dias cinzentos e quebra a paralisia mental.",
    "readTime": "4 min de leitura • Conversa Acolhedora",
    "summary": "Aprenda a desarmar o ciclo de exaustão e culpa mental com metas tão gentis e viáveis que se tornam impossíveis de falhar.",
    "lead": "Há manhãs em que o simples pensamento de levantar da cama, enfrentar o trânsito e responder e-mails parece uma maratona olímpica com pedras nos bolsos. Se você está se sentindo assim ultimamente, este texto é um chá quente para a sua sobrecarga.",
    "bodyParagraphs": [
      "A mente contemporânea vive sob o mito da produtividade esmagadora. Fomos bombardeados com a narrativa de que pessoas fortes vencem o cansaço na força bruta, acordam antes do sol e mudam a vida inteira de uma segunda-feira para outra. Só que quando a mente já está beirando a estafa (burnout), essa cobrança grandiosa não produz motivação — produz paralisia executiva.",
      "O córtex pré-frontal, região cerebral encarregada de planejar e tomar decisões difíceis, consome uma quantidade absurda de glicose e oxigênio. Quando estamos exaustos, ele entra em modo de economia de energia. Olhar para a casa desarrumada ou para uma pilha de tarefas pendentes faz com que o cérebro enxergue uma montanha intransponível, gerando desânimo e fuga.",
      "A psicologia clínica ensina que o antídoto para essa paralisia não é um salto gigante, mas uma microvitória. Uma microvitória é uma tarefa propositalmente desenhada para ser pequena demais para falhar. Não tente arrumar o guarda-roupa inteiro: pendure um único casaco. Não tente ler vinte páginas: leia meio parágrafo. Não tente correr dez quilômetros: coloque os sapatos e beba um copo d’água na janela.",
      "A mágica da microvitória mora na dopamina basal. Nosso cérebro não libera o neurotransmissor da esperança apenas quando terminamos grandes projetos; ele o libera no momento em que reconhecemos um avanço real, por mais singelo que pareça. Ao terminar aquela tarefa de dois minutos e dizer para si mesmo: \"Eu fiz o que estava ao meu alcance hoje\", o circuito da vontade se reconecta."
    ],
    "quoteCallout": "Não menospreze os seus passos lentos nos dias pesados. Até a maior das árvores começou enfrentando a terra escura um milímetro de cada vez.",
    "scienceExplain": "A dopamina não atua apenas como recompensa final, mas como moduladora do circuito mesolímbico que restaura a iniciativa comportamental após a depleção energética do córtex pré-frontal.",
    "practice": [
      {
        "step": "1",
        "title": "Diminua a meta até ela ficar irresistível",
        "description": "Se lavar toda a louça parece esmagador, lave apenas uma colher e uma xícara. O segredo biológico é quebrar a inércia do corpo sem assustar a mente."
      },
      {
        "step": "2",
        "title": "Celebre o pequeno mérito conscientemente",
        "description": "Ao terminar o microgesto, pare por cinco segundos, olhe para o que fez e reconheça: \"Foi um passo honesto e ele teve valor\"."
      },
      {
        "step": "3",
        "title": "Compare-se apenas com a sua régua de ontem",
        "description": "Não meça a sua produtividade em dias de chuva com a régua de dias ensolarados. Respeite o clima interno do seu corpo em cada estação da vida."
      }
    ],
    "affirmation": "Hoje eu honro o meu próprio ritmo. Não preciso vencer todas as batalhas de uma só vez; basta cuidar com carinho do próximo passo que está bem diante de mim.",
    "reference": "Inspirado em Jordan Peterson (Regra das Microvitórias) e na Psicologia Comportamental da Vontade"
  },
  {
    "id": "neurodiversidade-autismo-comunicacao",
    "category": "Neurodiversidade & Inclusão",
    "categoryTheme": "amber",
    "title": "Comunicação Compassiva e Neurodiversidade: O amor que sabe esperar o tempo da mente",
    "subtitle": "Por que o afeto mais profundo com pessoas no espectro autista mora na clareza límpida e no silêncio que não atropela.",
    "readTime": "6 min de leitura • Conversa Acolhedora",
    "summary": "Como criar pontes de diálogo genuínas, respeitando o tempo de processamento sensorial e desarmando a exaustão da camuflagem social (masking).",
    "lead": "No universo da neurodiversidade e do espectro autista, o amor raramente mora em declarações floreadas ou metáforas cheias de duplo sentido. Ele floresce na transparência cristalina, na previsibilidade amorosa e na generosidade de saber esperar.",
    "bodyParagraphs": [
      "Imagine que o seu cérebro receba as luzes do ambiente com o brilho no máximo, os sons das conversas com o volume duplicado e a textura da sua roupa pinicando como se fosse arame farpado. Essa é uma aproximação humilde da sobrecarga sensorial com que muitas pessoas no espectro autista ou com TDAH lidam todos os dias. O tálamo — a central de triagem de estímulos do cérebro — filtra menos as informações externas.",
      "Quando estamos com essa sobrecarga sensorial ligada, processar uma pergunta cheia de rodeios ou ironias exige uma quantidade sobre-humana de energia cognitiva. É por isso que muitas vezes uma pessoa autista demora de dez a quinze segundos para responder a uma pergunta simples. Ela não está desatenta nem sendo desrespeitosa: a mente dela está organizando uma biblioteca inteira de dados para encontrar as palavras certas.",
      "O maior erro que cometemos na convivência neurotípica é a pressa ansiosa. Quando a pessoa não responde no primeiro segundo, temos a tendência de repetir a pergunta, mudar as palavras ou elevar o tom de voz. Para o cérebro neurodivergente, isso não ajuda: isso reinicia a fila de processamento do zero, gerando frustração e angústia.",
      "Acolher com afeto no autismo é abraçar a clareza. É dizer exatamente o que vai acontecer: \"Nós vamos almoçar às meio-dia e meia e depois iremos à livraria por trinta minutos\". É ter a delicadeza de não forçar o contato visual quando ele causa queimação sensorial. E, acima de tudo, é sentar-se ao lado da pessoa e escutar com entusiasmo genuíno o seu hiperfoco — porque quando alguém no espectro compartilha o seu interesse especial com você, está lhe entregando as chaves do seu coração."
    ],
    "quoteCallout": "Respeitar o tempo da mente alheia é a forma mais refinada de carinho. Há belezas profundas que só florescem quando deixamos o relógio de lado.",
    "scienceExplain": "Diferenças na conectividade corticotalâmica alteram os mecanismos de gating sensorial e o tempo de resposta executiva, exigindo previsibilidade e pausas para evitar o esgotamento autista (burnout autista).",
    "practice": [
      {
        "step": "1",
        "title": "Dê tempo generoso para a resposta chegar",
        "description": "Após fazer uma pergunta, segure a vontade de falar e espere 15 segundos em silêncio sereno. Dê espaço para que a mente processe e elabore as ideias no tempo dela."
      },
      {
        "step": "2",
        "title": "Use palavras diretas e ofereça previsibilidade",
        "description": "Substitua orientações vagas por passos concretos e amáveis. Explique a ordem dos acontecimentos do dia para desarmar a ansiedade do imprevisto."
      },
      {
        "step": "3",
        "title": "Celebre e valide os temas do coração",
        "description": "Os hiperfocos são âncoras de alegria e regulação emocional. Quando você demonstra curiosidade sobre o assunto favorito da pessoa, o vínculo se torna inquebrável."
      }
    ],
    "affirmation": "A minha mente tem uma arquitetura única, profunda e preciosa. Eu tenho o direito de viver no meu próprio compasso, protegido de barulhos desnecessários e abraçado por quem me ama de verdade.",
    "reference": "Inspirado em Lev Vygotsky (Mediação Afetiva), Uta Frith e Estudos Contemporâneos de Neurodiversidade"
  },
  {
    "id": "autocompaixao-contra-autocritica",
    "category": "Autocuidado & Presença",
    "categoryTheme": "violet",
    "title": "A Tirania da Autocrítica: Aprendendo a conversar consigo mesmo como um amigo leal",
    "subtitle": "Por que o chicote interno nunca gerou resiliência verdadeira — e como a autocompaixão restaura a coragem de tentar de novo.",
    "readTime": "5 min de leitura • Conversa Acolhedora",
    "summary": "Descubra por que ser implacável com os próprios erros ativa o sistema de ameaça do corpo e adote a voz acolhedora de um mentor amoroso.",
    "lead": "Pare um minuto e observe as palavras que você usou consigo mesmo hoje quando cometeu aquele pequeno deslize. Você falaria aquelas mesmas frases para o seu melhor amigo ou para uma criança que você ama?",
    "bodyParagraphs": [
      "A maioria de nós carrega dentro do crânio um juiz implacável. Ele não dorme, não tira férias e tem uma memória prodigiosa para listar todos os nossos tropeços, desde a resposta errada na aula da quinta série até o atraso na reunião de ontem. Nós fomos educados em uma sociedade que santificou a autocrítica severa, convencendo-nos de que sem o chicote da culpa nós nos tornaríamos preguiçosos e relapsos.",
      "Só que as pesquisas das últimas décadas em psicologia clínica, capitaneadas pela Dra. Kristin Neff e pelo Dr. Paul Gilbert, demonstraram exatamente o oposto: a autocrítica implacável é o caminho mais rápido para a depressão e a ansiedade paralisante. Quando você se xinga mentalmente, o seu cérebro não entende que o agressor e a vítima são a mesma pessoa. Ele apenas registra que há um predador atacando — e o corpo entra em estado de terror fisiológico.",
      "A autocompaixão não tem absolutamente nada a ver com autopiedade ou desleixo. Ela não diz \"está tudo bem fazer bobagens\". Ela diz: \"Você errou porque você é humano e seres humanos falham. Agora, em vez de se espancar no chão, vamos respirar fundo, lavar o joelho ralado e ver o que podemos fazer para consertar\".",
      "Experimente mudar o tom de voz da sua mente. Troque o promotor de acusação por um mentor afetuoso — alguém sábio, firme e leal, que não esconde a verdade de você, mas que nunca, sob hipótese alguma, desiste de acreditar no seu valor."
    ],
    "quoteCallout": "Você passou anos se criticando e isso não funcionou. Experimente agora se acolher com gentileza e veja a sua força florescer.",
    "scienceExplain": "A autocompaixão aciona o sistema de afiliação e apaziguamento mediado pela ocitocina e endorfinas, enquanto a autocrítica contínua mantém a hiperativação da amígdala e a inflamação celular.",
    "practice": [
      {
        "step": "1",
        "title": "O teste do melhor amigo",
        "description": "Toda vez que cometer uma falha, pause o pensamento e pergunte-se: \"Eu usaria essas palavras cruéis com alguém que eu amo de verdade?\". Se a resposta for não, não use com você."
      },
      {
        "step": "2",
        "title": "O toque calmante no peito",
        "description": "Coloque suavemente a palma da mão sobre o centro do peito e sinta o calor do corpo por trinta segundos. Os receptores táteis enviam sinais imediatos de segurança para o cérebro."
      },
      {
        "step": "3",
        "title": "Reconheça a humanidade compartilhada",
        "description": "Lembre-se de que a imperfeição não é uma anomalia pessoal sua; é o selo de entrada de qualquer ser humano vivo neste planeta. Você não está sozinho na sua fragilidade."
      }
    ],
    "affirmation": "Eu sou digno de paciência, compaixão e ternura. Perdoo os meus tropeços de hoje, acolho a minha humanidade imperfeita e recomeço com o coração leve e em paz.",
    "reference": "Fundamentado nos estudos clínicos da Dra. Kristin Neff e na Terapia Focada na Compaixão de Paul Gilbert"
  },
  {
    "id": "maternidade-suficientemente-boa",
    "category": "Acolhimento Maternal",
    "categoryTheme": "sky",
    "title": "Maternidade \"Suficientemente Boa\": O alívio de descansar do mito da perfeição",
    "subtitle": "Por que os filhos não precisam de pais impecáveis, mas de pessoas reais dispostas a reparar erros com ternura.",
    "readTime": "5 min de leitura • Conversa Acolhedora",
    "summary": "A ideia libertadora de Winnicott de que a busca pela perfeição adoece as famílias, enquanto a presença autêntica e a reparação de descompassos constroem laços indestrutíveis.",
    "lead": "Se você já foi dormir sentindo o peso esmagador da culpa por ter perdido a paciência no final da tarde, puxa o ar bem fundo. Este ensaio foi escrito para devolver o ar aos seus pulmões.",
    "bodyParagraphs": [
      "A paternidade e a maternidade contemporâneas viraram um campo minado de expectativas irreais. As redes sociais criaram a ilusão de que mães e pais perfeitos nunca se cansam, nunca levantam o tom de voz, servem refeições lúdicas impecáveis e têm paciência infinita vinte e quatro horas por dia. Quando a realidade da vida bate — com cansaço físico, contas para pagar e dias difíceis —, a sensação de insuficiência é devastadora.",
      "Foi Donald Winnicott quem veio salvar a sanidade das famílias ao cunhar o conceito da figura \"suficientemente boa\" (good-enough mother). Com sabedoria cirúrgica, ele explicou que uma mãe perfeita seria, na verdade, uma tragédia para a saúde mental da criança. Se os pais pudessem adivinhar e suprir todas as necessidades antes mesmo do choro, o filho nunca desenvolveria tolerância à frustração, independência ou capacidade de lidar com o mundo real.",
      "A criança não precisa de perfeição matemática; ela precisa de uma presença humana, calorosa e viva. E mais importante do que nunca errar é a nobre arte da reparação afetiva. O que molda a segurança emocional de um filho não é a ausência de conflitos, mas a ternura e a velocidade com que o laço é reatado após a tempestade.",
      "Abaixar-se na altura do filho, olhar nos olhos dele e dizer: \"Mamãe estava exausta e perdeu a paciência. Me perdoe, a culpa não é sua e eu te amo muito\", ensina mais sobre empatia, dignidade e respeito mútuo do que cem discursos moralistas. A imperfeição reparada com amor é a fundação da confiança inabalável."
    ],
    "quoteCallout": "Os seus filhos não precisam que você seja perfeito; eles precisam apenas que você seja real, presente e generoso o bastante para pedir desculpas quando errar.",
    "scienceExplain": "Estudos em neurobiologia do apego comprovam que rupturas seguidas de reparação afetiva precoce fortalecem o córtex orbitofrontal da criança e constroem resiliência emocional para a vida inteira.",
    "practice": [
      {
        "step": "1",
        "title": "Abaixe-se e repare a conexão após os descompassos",
        "description": "Se o cansaço fez você se exaltar, espere a poeira baixar, abrace seu filho na altura dos olhos dele e peça desculpas com sinceridade. A reparação cura qualquer fissura."
      },
      {
        "step": "2",
        "title": "Crie uma ilha diária de conexão pura de 15 minutos",
        "description": "Quinze minutos diários de atenção incondicional (olho no olho, sem celular, sem broncas) nutrem o vínculo mais do que um dia inteiro de convivência distraída e tensa."
      },
      {
        "step": "3",
        "title": "Cuide da sua própria taça para poder transbordar",
        "description": "O descanso de quem cuida não é luxo ou egoísmo; é pré-requisito biológico para que a ternura e o bom humor continuem tendo espaço para florescer na casa."
      }
    ],
    "affirmation": "Eu não preciso ser impecável para ser um refúgio seguro de amor. A minha presença verdadeira, a minha humildade em reparar erros e o meu carinho sincero são mais do que suficientes.",
    "reference": "Fundamentado nas pesquisas clínicas de Donald Winnicott sobre o Desenvolvimento Emocional Infantil"
  }
];

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
      this.articlesState = {
        selectedCategory: 'Todos',
        searchQuery: '',
        activeArticle: null,
        fontSize: 'normal',
        speechStatus: 'idle',
        speechSpeed: 0.88,
        speechProgress: 0,
        currentChunkIndex: 0,
        chunks: [],
        isPaused: false
      };
      this.dom = {};
    }

    start() {
      this.cacheDom();
      this.bindEvents();
      Speech.init();
      this.renderHistory();
      this.loadSettings();
      this.renderArticlesGrid();
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

      // Navegação Principal entre Gerador e Artigos
      this.dom.tabBtnGenerator = document.getElementById('tabBtnGenerator');
      this.dom.tabBtnArticles = document.getElementById('tabBtnArticles');
      this.dom.viewGenerator = document.getElementById('viewGenerator');
      this.dom.viewArticles = document.getElementById('viewArticles');
      this.dom.brandLink = document.getElementById('brandLink');

      // Elementos da Vista de Artigos
      this.dom.inputArticleSearch = document.getElementById('inputArticleSearch');
      this.dom.btnClearArticleSearch = document.getElementById('btnClearArticleSearch');
      this.dom.articlesCategoriesBar = document.getElementById('articlesCategoriesBar');
      this.dom.articlesGrid = document.getElementById('articlesGrid');

      // Modal do Leitor de Artigo Imersivo
      this.dom.articleReaderModal = document.getElementById('articleReaderModal');
      this.dom.btnBackToArticlesList = document.getElementById('btnBackToArticlesList');
      this.dom.btnCloseArticleReader = document.getElementById('btnCloseArticleReader');
      this.dom.btnToggleArticleFontSize = document.getElementById('btnToggleArticleFontSize');
      this.dom.btnToggleArticleFullscreen = document.getElementById('btnToggleArticleFullscreen');
      this.dom.articleReaderBox = document.querySelector('.modal-box-reader');
      this.dom.articleReaderBody = document.getElementById('articleReaderBody');
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
          if (this.dom.articleReaderModal?.classList.contains('active')) {
            this.closeArticleReader();
          }
        }
      });

      // 14. Navegação entre Telas (Gerador e Artigos)
      this.dom.tabBtnGenerator?.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('generator');
      });
      this.dom.tabBtnArticles?.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('articles');
      });
      this.dom.brandLink?.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('generator');
      });

      // 15. Categorias dos Artigos (Filtro)
      if (this.dom.articlesCategoriesBar) {
        this.dom.articlesCategoriesBar.addEventListener('click', (e) => {
          const btn = e.target.closest('.article-cat-btn');
          if (!btn) return;
          e.preventDefault();
          this.dom.articlesCategoriesBar.querySelectorAll('.article-cat-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.articlesState.selectedCategory = btn.dataset.cat || 'Todos';
          this.renderArticlesGrid();
        });
      }

      // 16. Busca de Artigos
      if (this.dom.inputArticleSearch) {
        this.dom.inputArticleSearch.addEventListener('input', (e) => {
          this.articlesState.searchQuery = e.target.value.trim();
          if (this.dom.btnClearArticleSearch) {
            this.dom.btnClearArticleSearch.style.display = this.articlesState.searchQuery ? 'block' : 'none';
          }
          this.renderArticlesGrid();
        });
      }

      if (this.dom.btnClearArticleSearch) {
        this.dom.btnClearArticleSearch.addEventListener('click', () => {
          this.articlesState.searchQuery = '';
          if (this.dom.inputArticleSearch) this.dom.inputArticleSearch.value = '';
          this.dom.btnClearArticleSearch.style.display = 'none';
          this.renderArticlesGrid();
        });
      }

      // 17. Clique nos Cartões de Artigos para abrir o Leitor Imersivo
      if (this.dom.articlesGrid) {
        this.dom.articlesGrid.addEventListener('click', (e) => {
          const card = e.target.closest('.article-card');
          if (!card) return;
          const articleId = card.dataset.articleId;
          if (articleId) {
            this.openArticleReader(articleId);
          }
        });
      }

      // 18. Controles do Leitor Imersivo (Voltar, Fechar e Tamanho da Fonte)
      this.dom.btnBackToArticlesList?.addEventListener('click', () => this.closeArticleReader());
      this.dom.btnCloseArticleReader?.addEventListener('click', () => this.closeArticleReader());
      this.dom.btnToggleArticleFontSize?.addEventListener('click', () => this.toggleArticleFontSize());
      this.dom.btnToggleArticleFullscreen?.addEventListener('click', () => this.toggleArticleFullscreen());

      if (this.dom.articleReaderModal) {
        this.dom.articleReaderModal.addEventListener('click', (e) => {
          if (e.target === this.dom.articleReaderModal) {
            this.closeArticleReader();
          }
        });
      }

      // 19. Delegação de Eventos dentro do Corpo do Leitor (Áudio, Cópia, Navegação)
      if (this.dom.articleReaderBody) {
        this.dom.articleReaderBody.addEventListener('click', (e) => {
          // Play / Pause Áudio
          const btnPlayPause = e.target.closest('#btnReaderAudioPlayPause');
          if (btnPlayPause) {
            e.preventDefault();
            if (this.articlesState.speechStatus === 'playing') {
              this.pauseArticleSpeech();
            } else {
              this.playArticleSpeech();
            }
            return;
          }

          // Parar Áudio
          const btnStop = e.target.closest('#btnReaderAudioStop');
          if (btnStop) {
            e.preventDefault();
            this.stopArticleSpeech();
            return;
          }

          // Velocidade do Áudio
          const speedBtn = e.target.closest('.audio-speed-btn');
          if (speedBtn) {
            e.preventDefault();
            const speed = parseFloat(speedBtn.dataset.speed);
            if (speed) this.setArticleSpeechSpeed(speed);
            return;
          }

          // Copiar Link de Compartilhamento Social
          const btnShareCopy = e.target.closest('.btn-copy-article-share');
          if (btnShareCopy) {
            e.preventDefault();
            const title = btnShareCopy.dataset.title || '';
            const quote = btnShareCopy.dataset.quote || '';
            const fullShareText = `"${title}" - Palavras Afirmativas\n\n"${quote}"\n\nLeia mais em: ${window.location.href}`;
            this.handleCopyReaderAffirmation(fullShareText, btnShareCopy);
            return;
          }

          // Copiar Palavra Afirmativa
          const btnCopy = e.target.closest('#btnCopyReaderAffirmation');
          if (btnCopy) {
            e.preventDefault();
            const quoteEl = document.getElementById('readerAffirmationQuote');
            if (quoteEl) {
              const text = quoteEl.textContent.replace(/^[“"']|[”"']$/g, '').trim();
              this.handleCopyReaderAffirmation(text, btnCopy);
            }
            return;
          }

          // Usar Afirmação no Gerador
          const btnUseGen = e.target.closest('#btnUseAffirmationInGenerator');
          if (btnUseGen) {
            e.preventDefault();
            const quoteEl = document.getElementById('readerAffirmationQuote');
            if (quoteEl && this.articlesState.activeArticle) {
              const text = quoteEl.textContent.replace(/^[“"']|[”"']$/g, '').trim();
              this.useAffirmationInGenerator(text, this.articlesState.activeArticle.title);
            }
            return;
          }

          // Navegação entre Artigos (Anterior / Próximo)
          const navBtn = e.target.closest('.btn-nav-article');
          if (navBtn) {
            e.preventDefault();
            const targetId = navBtn.dataset.articleId;
            if (targetId) {
              this.openArticleReader(targetId);
            }
            return;
          }
        });
      }
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

    /* ==========================================================================
       MÉTODOS DO MÓDULO DE ARTIGOS & LEITURA IMERSIVA COM ÁUDIO
       ========================================================================== */
    switchView(viewName) {
      if (viewName === 'articles') {
        if (this.dom.viewGenerator) this.dom.viewGenerator.style.display = 'none';
        if (this.dom.viewArticles) this.dom.viewArticles.style.display = 'block';
        this.dom.tabBtnGenerator?.classList.remove('active');
        this.dom.tabBtnArticles?.classList.add('active');
        this.renderArticlesGrid();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        if (this.dom.viewArticles) this.dom.viewArticles.style.display = 'none';
        if (this.dom.viewGenerator) this.dom.viewGenerator.style.display = 'block';
        this.dom.tabBtnArticles?.classList.remove('active');
        this.dom.tabBtnGenerator?.classList.add('active');
        this.closeArticleReader();
      }
    }

    renderArticlesGrid() {
      if (!this.dom.articlesGrid) return;
      const cat = this.articlesState.selectedCategory;
      const q = (this.articlesState.searchQuery || '').toLowerCase();

      const filtered = ARTICLES_DATA.filter(article => {
        const matchCat = cat === 'Todos' || article.category === cat;
        const matchQ = !q ||
          article.title.toLowerCase().includes(q) ||
          article.summary.toLowerCase().includes(q) ||
          article.category.toLowerCase().includes(q);
        return matchCat && matchQ;
      });

      if (filtered.length === 0) {
        this.dom.articlesGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: #FFFFFF; border-radius: 1.5rem; border: 1px dashed var(--border-subtle);">
            <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🌿</div>
            <h4 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.35rem;">
              Nenhum artigo encontrado
            </h4>
            <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 360px; margin: 0 auto 1.25rem;">
              Não encontramos nenhum artigo correspondente à sua busca. Experimente mudar os termos ou selecionar outra categoria.
            </p>
            <button type="button" class="btn-audio-primary" id="btnResetArticlesFilter">Ver todos os artigos</button>
          </div>
        `;
        document.getElementById('btnResetArticlesFilter')?.addEventListener('click', () => {
          this.articlesState.selectedCategory = 'Todos';
          this.articlesState.searchQuery = '';
          if (this.dom.inputArticleSearch) this.dom.inputArticleSearch.value = '';
          if (this.dom.btnClearArticleSearch) this.dom.btnClearArticleSearch.style.display = 'none';
          this.dom.articlesCategoriesBar?.querySelectorAll('.article-cat-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.cat === 'Todos');
          });
          this.renderArticlesGrid();
        });
        return;
      }

      this.dom.articlesGrid.innerHTML = filtered.map(article => {
        const themeClass = 'theme-' + (article.categoryTheme || 'emerald');
        return `
          <article class="article-card" data-article-id="${article.id}">
            <div>
              <div class="article-card-header">
                <span class="article-cat-tag ${themeClass}">${article.category}</span>
                <span class="article-read-time">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>${article.readTime}</span>
                </span>
              </div>
              <h3 class="article-card-title">${article.title}</h3>
              <p class="article-card-summary">${article.summary}</p>
            </div>
            <div class="article-card-footer">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic;">
                Ciência & Prática
              </span>
              <button type="button" class="btn-read-article">
                <span>Ler Artigo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </article>
        `;
      }).join('');
    }

    openArticleReader(articleId) {
      const article = ARTICLES_DATA.find(a => a.id === articleId);
      if (!article) return;

      this.articlesState.activeArticle = article;
      this.prepareArticleSpeechChunks(article);
      this.renderArticleReaderContent(article);

      this.dom.articleReaderModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (this.dom.articleReaderBody) {
        this.dom.articleReaderBody.scrollTop = 0;
      }
    }

    closeArticleReader() {
      this.stopArticleSpeech();
      this.dom.articleReaderModal?.classList.remove('active');
      document.body.style.overflow = '';
      this.articlesState.activeArticle = null;
    }

    toggleArticleFontSize() {
      this.articlesState.fontSize = this.articlesState.fontSize === 'normal' ? 'large' : 'normal';
      const isLarge = this.articlesState.fontSize === 'large';
      if (this.dom.articleReaderBody) {
        this.dom.articleReaderBody.classList.toggle('large-font', isLarge);
      }
      if (this.dom.btnToggleArticleFontSize) {
        this.dom.btnToggleArticleFontSize.classList.toggle('active', isLarge);
        this.dom.btnToggleArticleFontSize.textContent = isLarge ? 'A+' : 'A';
      }
    }

        renderArticleReaderContent(article) {
      if (!this.dom.articleReaderBody) return;
      const themeClass = 'theme-' + (article.categoryTheme || 'emerald');

      const currentIndex = ARTICLES_DATA.findIndex(a => a.id === article.id);
      const prevArticle = currentIndex > 0 ? ARTICLES_DATA[currentIndex - 1] : null;
      const nextArticle = currentIndex < ARTICLES_DATA.length - 1 ? ARTICLES_DATA[currentIndex + 1] : null;

      const paragraphsHtml = (article.bodyParagraphs || []).map((p, idx) => {
        const dropCapClass = idx === 0 ? 'reader-drop-cap' : '';
        return `<p class="${dropCapClass}">${p}</p>`;
      }).join('');

      const shareText = encodeURIComponent(`"${article.title}" - Uma leitura linda e acolhedora sobre afeto e psicologia:\n\n"${article.affirmation}"\n\nLeia mais em: `);
      const pageUrl = encodeURIComponent(window.location.href);

      this.dom.articleReaderBody.innerHTML = `
        <!-- Cabeçalho Editorial Estilo Blogue & Chá da Tarde -->
        <header>
          <div class="reader-tea-meta">
            <span class="article-cat-tag ${themeClass}">${article.category}</span>
            <span class="reader-tea-badge">☕ Conversa Acolhedora</span>
            <span style="font-size: 0.74rem; color: var(--text-muted); font-weight: 600;">${article.readTime}</span>
          </div>

          <h1 class="reader-title">${article.title}</h1>
          <p class="reader-subtitle">${article.subtitle || ''}</p>

          <div class="reader-author-row">
            <div class="reader-author-avatar">🌸</div>
            <div>
              <strong style="color: var(--text-main);">Por Equipe Palavras Afirmativas</strong>
              <span style="margin: 0 0.35rem;">•</span>
              <span>Curadoria Humanista & Neurociência</span>
            </div>
          </div>
        </header>

        <!-- Barra de Compartilhamento Rápido no Topo -->

        <div class="article-share-bar">
          <span class="share-bar-label">
            <span>💌</span><span>Compartilhe esta leitura com quem você ama:</span>
          </span>

          <!-- WhatsApp com Logo Oficial -->
          <a href="https://api.whatsapp.com/send?text=${shareText}${pageUrl}" target="_blank" rel="noopener noreferrer" class="share-btn share-whatsapp" title="Compartilhar no WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <!-- X (Twitter) com Logo Oficial 𝕏 -->
          <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${pageUrl}" target="_blank" rel="noopener noreferrer" class="share-btn share-twitter" title="Compartilhar no X (Twitter)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X</span>
          </a>

          <!-- Facebook com Logo Oficial -->
          <a href="https://www.facebook.com/sharer/sharer.php?u=${pageUrl}" target="_blank" rel="noopener noreferrer" class="share-btn share-facebook" title="Compartilhar no Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>

          <!-- Copiar Link / Citação -->
          <button type="button" class="share-btn share-copy btn-copy-article-share" data-title="${article.title}" data-quote="${article.affirmation}" title="Copiar citação e link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Copiar Link</span>
          </button>
        </div>

        <!-- Reprodutor de Voz / Web Speech API (Ouvir em Voz Alta) -->
        <div class="article-audio-box" id="readerAudioPlayerBox">
          <div class="audio-box-top">
            <div class="audio-box-info">
              <div class="audio-icon-avatar" id="readerAudioAvatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
              <div class="audio-title-group">
                <h4 id="readerAudioTitleLabel">Ouvir este artigo em voz alta</h4>
                <p id="readerAudioSubtitleLabel">Narrado com calma e afeto pela síntese do navegador</p>
              </div>
            </div>

            <div class="audio-box-controls">
              <button type="button" class="btn-audio-primary" id="btnReaderAudioPlayPause">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span id="labelReaderAudioPlayPause">Ouvir Artigo</span>
              </button>

              <button type="button" class="btn-audio-stop" id="btnReaderAudioStop" title="Parar reprodução">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="5" y="5" width="14" height="14" rx="2"></rect>
                </svg>
                <span>Parar</span>
              </button>

              <div class="audio-speed-pills">
                <button type="button" class="audio-speed-btn ${this.articlesState.speechSpeed === 0.85 ? 'active' : ''}" data-speed="0.85">0.85x</button>
                <button type="button" class="audio-speed-btn ${this.articlesState.speechSpeed === 1.0 ? 'active' : ''}" data-speed="1.0">1.0x</button>
                <button type="button" class="audio-speed-btn ${this.articlesState.speechSpeed === 1.2 ? 'active' : ''}" data-speed="1.2">1.2x</button>
              </div>
            </div>
          </div>

          <div class="audio-progress-bar-wrap">
            <div class="audio-progress-fill" id="readerAudioProgressFill" style="width: ${this.articlesState.speechProgress}%;"></div>
          </div>
        </div>

        <!-- Parágrafo de Abertura / Lead -->
        <p class="reader-lead">${article.lead}</p>

        <!-- Corpo do Artigo / Texto Corrido de Blogue -->
        <article class="reader-article-content">
          ${paragraphsHtml}

          ${article.quoteCallout ? `
            <blockquote class="reader-quote-callout">
              "${article.quoteCallout}"
            </blockquote>
          ` : ''}

          <!-- Box O que a ciência explica -->
          ${article.scienceExplain ? `
            <div class="reader-science-box">
              <div class="reader-science-box-header">
                <span>🧬</span>
                <span>O que a ciência nos ensina sobre isso</span>
              </div>
              <p class="reader-science-box-text">${article.scienceExplain}</p>
            </div>
          ` : ''}
        </article>

        <!-- Seção Prática Gentil (Passo a Passo do Dia a Dia) -->
        <section style="margin-top: 2rem;">
          <div class="reader-section-header">
            <span class="sec-badge">🌱</span>
            <h3>Pequenos gestos para o seu dia a dia</h3>
          </div>
          <div class="practice-steps-list">
            ${(article.practice || []).map(item => `
              <div class="practice-step-card">
                <div class="practice-step-num">${item.step}</div>
                <div>
                  <strong>${item.title}</strong>
                  <p>${item.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Bloco Final em Destaque: Palavra Afirmativa para Meditação -->
        <section class="reader-affirmation-highlight" style="margin-top: 2.5rem;">
          <div class="reader-affirmation-badge">
            <span>✨</span>
            <span>Palavra Afirmativa para Meditação</span>
          </div>
          <blockquote class="reader-affirmation-quote" id="readerAffirmationQuote">
            "${article.affirmation}"
          </blockquote>
          <div style="font-size: 0.74rem; color: var(--text-muted); margin-bottom: 1.25rem;">
            ${article.reference}
          </div>
          <div class="reader-affirmation-actions">
            <button type="button" class="btn-reader-action" id="btnCopyReaderAffirmation">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copiar Afirmação</span>
            </button>
            <button type="button" class="btn-reader-action btn-use-generator" id="btnUseAffirmationInGenerator">
              <span>✨</span>
              <span>Meditar com esta palavra no Gerador</span>
            </button>
          </div>
        </section>

        <!-- Segunda Barra de Compartilhamento no Rodapé -->

        <div class="article-share-bar" style="margin-top: 2rem;">
          <span class="share-bar-label">
            <span>🌿</span><span>Gostou desta reflexão? Compartilhe paz com alguém:</span>
          </span>

          <!-- WhatsApp com Logo Oficial -->
          <a href="https://api.whatsapp.com/send?text=${shareText}${pageUrl}" target="_blank" rel="noopener noreferrer" class="share-btn share-whatsapp" title="Compartilhar no WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <!-- X (Twitter) com Logo Oficial 𝕏 -->
          <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${pageUrl}" target="_blank" rel="noopener noreferrer" class="share-btn share-twitter" title="Compartilhar no X (Twitter)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X</span>
          </a>

          <!-- Facebook com Logo Oficial -->
          <a href="https://www.facebook.com/sharer/sharer.php?u=${pageUrl}" target="_blank" rel="noopener noreferrer" class="share-btn share-facebook" title="Compartilhar no Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>

          <!-- Copiar Link / Citação -->
          <button type="button" class="share-btn share-copy btn-copy-article-share" data-title="${article.title}" data-quote="${article.affirmation}" title="Copiar citação e link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Copiar Link</span>
          </button>
        </div>

        <!-- Rodapé de Navegação entre Artigos -->
        <div class="reader-nav-footer">
          <div>
            ${prevArticle ? `
              <button type="button" class="btn-back-articles btn-nav-article" data-article-id="${prevArticle.id}">
                ← ${prevArticle.title.substring(0, 32)}...
              </button>
            ` : ''}
          </div>
          <div>
            ${nextArticle ? `
              <button type="button" class="btn-back-articles btn-nav-article" data-article-id="${nextArticle.id}">
                ${nextArticle.title.substring(0, 32)}... →
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }

    toggleArticleFullscreen() {
      const box = document.querySelector('.modal-box-reader');
      const btn = document.getElementById('btnToggleArticleFullscreen');
      if (!box) return;
      const isFullscreen = box.classList.toggle('modal-box-fullscreen');
      if (btn) {
        btn.classList.toggle('active', isFullscreen);
        const iconExpand = btn.querySelector('.icon-expand');
        const iconCompress = btn.querySelector('.icon-compress');
        if (iconExpand && iconCompress) {
          iconExpand.style.display = isFullscreen ? 'none' : 'block';
          iconCompress.style.display = isFullscreen ? 'block' : 'none';
        }
        btn.title = isFullscreen ? 'Restaurar tamanho normal' : 'Expandir para tela cheia / Modo Zen';
      }
    }

    /* Síntese de Voz Robusta por Parágrafos de Blog (Web Speech API) */
    prepareArticleSpeechChunks(article) {
      const chunks = [];
      chunks.push(article.title);
      if (article.subtitle) chunks.push(article.subtitle);
      if (article.lead) chunks.push(article.lead);
      if (article.bodyParagraphs && Array.isArray(article.bodyParagraphs)) {
        article.bodyParagraphs.forEach(p => chunks.push(p));
      }
      if (article.quoteCallout) {
        chunks.push("Reflexão do ensaio: " + article.quoteCallout);
      }
      if (article.scienceExplain) {
        chunks.push("O que a ciência explica: " + article.scienceExplain);
      }
      if (article.practice && Array.isArray(article.practice)) {
        chunks.push("Na prática do dia a dia.");
        article.practice.forEach((p, idx) => {
          chunks.push(`Passo ${p.step || idx + 1}. ${p.title}. ${p.description}`);
        });
      }
      chunks.push("Palavra afirmativa para meditação.");
      chunks.push(article.affirmation);

      this.articlesState.chunks = chunks;
      this.articlesState.currentChunkIndex = 0;
      this.articlesState.speechProgress = 0;
      this.articlesState.isPaused = false;
      this.articlesState.speechStatus = 'idle';
    }

    playArticleSpeech() {
      if (!Speech.synth) {
        alert('Síntese de voz não suportada pelo seu navegador.');
        return;
      }
      if (this.articlesState.speechStatus === 'paused') {
        this.articlesState.isPaused = false;
        this.speakArticleChunk(this.articlesState.currentChunkIndex);
      } else {
        this.stopArticleSpeech();
        this.articlesState.isPaused = false;
        this.speakArticleChunk(0);
      }
    }

    pauseArticleSpeech() {
      if (!Speech.synth) return;
      this.articlesState.isPaused = true;
      Speech.synth.cancel();
      this.articlesState.speechStatus = 'paused';
      this.updateAudioUI();
    }

    stopArticleSpeech() {
      if (Speech.synth) {
        Speech.synth.cancel();
      }
      this.articlesState.isPaused = false;
      this.articlesState.speechStatus = 'idle';
      this.articlesState.currentChunkIndex = 0;
      this.articlesState.speechProgress = 0;
      this.updateAudioUI();
    }

    setArticleSpeechSpeed(speed) {
      this.articlesState.speechSpeed = speed;
      if (this.articlesState.speechStatus === 'playing') {
        if (Speech.synth) Speech.synth.cancel();
        this.speakArticleChunk(this.articlesState.currentChunkIndex);
      } else {
        this.updateAudioUI();
      }
    }

    speakArticleChunk(index) {
      if (!Speech.synth) return;
      const chunks = this.articlesState.chunks;
      if (!chunks || index >= chunks.length) {
        this.articlesState.speechStatus = 'idle';
        this.articlesState.speechProgress = 100;
        this.articlesState.currentChunkIndex = 0;
        this.updateAudioUI();
        return;
      }

      this.articlesState.currentChunkIndex = index;
      this.articlesState.speechStatus = 'playing';
      this.articlesState.speechProgress = Math.round(((index + 1) / chunks.length) * 100);
      this.updateAudioUI();

      const utterance = new SpeechSynthesisUtterance(chunks[index]);
      utterance.lang = 'pt-BR';
      utterance.rate = this.articlesState.speechSpeed || 0.88;
      utterance.pitch = 1.02;
      if (Speech.selectedVoice) {
        utterance.voice = Speech.selectedVoice;
      }

      utterance.onend = () => {
        if (this.articlesState.isPaused) return;
        this.speakArticleChunk(index + 1);
      };

      utterance.onerror = (e) => {
        if (e.error === 'interrupted' || e.error === 'canceled') return;
        console.warn('Leitura de áudio notificação:', e);
        this.articlesState.speechStatus = 'idle';
        this.updateAudioUI();
      };

      Speech.synth.speak(utterance);
    }

    updateAudioUI() {
      const btnPlayPause = document.getElementById('btnReaderAudioPlayPause');
      const labelPlayPause = document.getElementById('labelReaderAudioPlayPause');
      const avatar = document.getElementById('readerAudioAvatar');
      const progressBar = document.getElementById('readerAudioProgressFill');
      const subTitle = document.getElementById('readerAudioSubtitleLabel');

      if (progressBar) {
        progressBar.style.width = this.articlesState.speechProgress + '%';
      }

      // Atualiza botões de velocidade
      document.querySelectorAll('.audio-speed-btn').forEach(btn => {
        const s = parseFloat(btn.dataset.speed);
        btn.classList.toggle('active', Math.abs(s - this.articlesState.speechSpeed) < 0.05);
      });

      if (!btnPlayPause) return;

      if (this.articlesState.speechStatus === 'playing') {
        btnPlayPause.classList.add('playing');
        if (labelPlayPause) labelPlayPause.textContent = 'Pausar';
        btnPlayPause.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"></rect>
            <rect x="14" y="4" width="4" height="16" rx="1"></rect>
          </svg>
          <span id="labelReaderAudioPlayPause">Pausar</span>
        `;
        if (avatar) {
          avatar.classList.add('playing');
          avatar.innerHTML = `
            <div class="eq-bars">
              <div class="eq-bar"></div>
              <div class="eq-bar"></div>
              <div class="eq-bar"></div>
              <div class="eq-bar"></div>
            </div>
          `;
        }
        if (subTitle) subTitle.textContent = 'Lendo com afeto • Pressione Pausar a qualquer momento';
      } else if (this.articlesState.speechStatus === 'paused') {
        btnPlayPause.classList.remove('playing');
        btnPlayPause.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span id="labelReaderAudioPlayPause">Retomar</span>
        `;
        if (avatar) {
          avatar.classList.remove('playing');
          avatar.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          `;
        }
        if (subTitle) subTitle.textContent = 'Narração pausada • Clique em Retomar para continuar';
      } else {
        btnPlayPause.classList.remove('playing');
        btnPlayPause.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span id="labelReaderAudioPlayPause">Ouvir Artigo</span>
        `;
        if (avatar) {
          avatar.classList.remove('playing');
          avatar.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          `;
        }
        if (subTitle) subTitle.textContent = 'Narrado com calma e afeto pela síntese do navegador';
      }
    }

    handleCopyReaderAffirmation(text, btnEl) {
      if (!text) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          this.showCopyFeedback(btnEl);
        }).catch(() => {
          this.fallbackCopyPix(text);
          this.showCopyFeedback(btnEl);
        });
      } else {
        this.fallbackCopyPix(text);
        this.showCopyFeedback(btnEl);
      }
    }

    showCopyFeedback(btnEl) {
      if (!btnEl) return;
      const originalHTML = btnEl.innerHTML;
      btnEl.innerHTML = '<span>✓ Copiada!</span>';
      setTimeout(() => {
        btnEl.innerHTML = originalHTML;
      }, 2200);
    }

    useAffirmationInGenerator(text, reference) {
      this.closeArticleReader();
      this.switchView('generator');

      const affirmation = {
        id: 'art_' + Date.now(),
        text: text,
        tone: 'Acolhedora / Afetuosa',
        theme: 'Autoestima',
        reference: reference || 'Artigo & Neurociência'
      };

      this.state.currentAffirmation = affirmation;
      this.displayAffirmation(affirmation);

      setTimeout(() => {
        this.dom.generatedTextWrapper?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
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
