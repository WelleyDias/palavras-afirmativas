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

    /* ==========================================================================
       MÉTODOS DO MÓDULO DE ARTIGOS & LEITURA IMERSIVA COM ÁUDIO
       ========================================================================== */
    switchView(viewName) {
      if (viewName === 'articles') {
        if (this.dom.viewGenerator) this.dom.viewGenerator.style.display = 'none';
        if (this.dom.viewArticles) this.dom.viewArticles.style.display = 'block';
        this.dom.tabBtnGenerator?.classList.remove('active');
        this.dom.tabBtnArticles?.classList.add('active');
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

      // Encontra artigo anterior e próximo
      const currentIndex = ARTICLES_DATA.findIndex(a => a.id === article.id);
      const prevArticle = currentIndex > 0 ? ARTICLES_DATA[currentIndex - 1] : null;
      const nextArticle = currentIndex < ARTICLES_DATA.length - 1 ? ARTICLES_DATA[currentIndex + 1] : null;

      this.dom.articleReaderBody.innerHTML = `
        <!-- Metadados e Título -->
        <div>
          <div class="reader-meta-row" style="margin-bottom: 0.85rem;">
            <span class="article-cat-tag ${themeClass}">${article.category}</span>
            <span style="font-size: 0.74rem; color: var(--text-muted);">•</span>
            <span style="font-size: 0.74rem; color: var(--text-muted); font-weight: 600;">${article.readTime}</span>
          </div>
          <h2 class="reader-title">${article.title}</h2>
        </div>

        <!-- Parágrafo de Abertura / Lead -->
        <p class="reader-lead">${article.lead}</p>

        <!-- Player de Áudio Flutuante no Topo (Web Speech API) -->
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
              <!-- Play / Pause -->
              <button type="button" class="btn-audio-primary" id="btnReaderAudioPlayPause">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span id="labelReaderAudioPlayPause">Ouvir Artigo</span>
              </button>

              <!-- Parar -->
              <button type="button" class="btn-audio-stop" id="btnReaderAudioStop" title="Parar reprodução">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="5" y="5" width="14" height="14" rx="2"></rect>
                </svg>
                <span>Parar</span>
              </button>

              <!-- Seletor de Velocidade -->
              <div class="audio-speed-pills">
                <button type="button" class="audio-speed-btn ${this.articlesState.speechSpeed === 0.85 ? 'active' : ''}" data-speed="0.85">0.85x</button>
                <button type="button" class="audio-speed-btn ${this.articlesState.speechSpeed === 1.0 ? 'active' : ''}" data-speed="1.0">1.0x</button>
                <button type="button" class="audio-speed-btn ${this.articlesState.speechSpeed === 1.2 ? 'active' : ''}" data-speed="1.2">1.2x</button>
              </div>
            </div>
          </div>

          <!-- Barra de Progresso da Narração -->
          <div class="audio-progress-bar-wrap">
            <div class="audio-progress-fill" id="readerAudioProgressFill" style="width: ${this.articlesState.speechProgress}%;"></div>
          </div>
        </div>

        <!-- Seção 1: O que a ciência explica -->
        <section>
          <div class="reader-section-header">
            <span class="sec-badge">🧬</span>
            <h3>O que a ciência explica</h3>
          </div>
          <div class="science-points-list">
            ${article.science.map(item => `
              <div class="science-point-card">
                <strong>${item.highlight}</strong>
                <p>${item.text}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Seção 2: Na prática do dia a dia -->
        <section>
          <div class="reader-section-header">
            <span class="sec-badge">🌱</span>
            <h3>Na prática do dia a dia</h3>
          </div>
          <div class="practice-steps-list">
            ${article.practice.map(item => `
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
        <section class="reader-affirmation-highlight">
          <div class="reader-affirmation-badge">
            <span>✨</span>
            <span>Palavra Afirmativa para Meditação</span>
          </div>
          <blockquote class="reader-affirmation-quote" id="readerAffirmationQuote">
            "${article.affirmation}"
          </blockquote>
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 1.25rem;">
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

    /* Síntese de Voz Robusta por Trechos (Web Speech API) */
    prepareArticleSpeechChunks(article) {
      const chunks = [];
      chunks.push(article.title);
      if (article.lead) chunks.push(article.lead);
      chunks.push("O que a ciência explica.");
      article.science.forEach(s => chunks.push(`${s.highlight}. ${s.text}`));
      chunks.push("Na prática do dia a dia.");
      article.practice.forEach((p, idx) => chunks.push(`Passo ${p.step || idx + 1}. ${p.title}. ${p.description}`));
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
