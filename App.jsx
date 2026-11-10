import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ArticlesView from './ArticlesView';
import {
  Sparkles,
  Send,
  Heart,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Share2,
  Mail,
  RefreshCw,
  History,
  User,
  BookOpen,
  Zap,
  Feather,
  Compass,
  Download,
  Sliders,
  MessageSquare,
  Sun,
  ShieldAlert,
  Settings,
  X
} from 'lucide-react';

/**
 * Palavras Afirmativas - Versão React Componente
 * Fundamentada em Psicologia do Desenvolvimento (Jordan Peterson),
 * Acolhimento Maternal (Winnicott), Aceitação Incondicional (Rogers),
 * Sentido da Vida (Viktor Frankl) e Pedagogia Inclusiva (Vygotsky).
 *
 * Funciona 100% Grátis com contingência curada instantânea ou com API Gemini opcional.
 */

const CURATED_DB = [
  {
    category: 'Autismo / Neurodivergente',
    tone: 'Acolhedora / Afetuosa',
    theme: 'Autoestima',
    reference: 'Inspirado no acolhimento maternal de Winnicott',
    template: 'Seu cérebro e seu coração funcionam de um jeito único e precioso, {nome}. Quando o mundo parecer barulhento ou acelerado demais, lembre-se de que não há pressa. Você tem o direito de respirar no seu próprio ritmo, e cada pequeno passo que você dá é motivo de imenso orgulho para quem te ama.'
  },
  {
    category: 'Autismo / Neurodivergente',
    tone: 'Motivadora',
    theme: 'Superação',
    reference: 'Regra das microvitórias de Jordan Peterson',
    template: '{nome}, não compare o seu caminho com o de ninguém. A sua única régua é quem você era ontem. Cada barreira sensorial ou desafio que você enfrentou com paciência esta semana já faz de você um vencedor. Siga firme, porque a sua força silenciosa é inspiradora.'
  },
  {
    category: 'Dificuldade de Aprendizagem',
    tone: 'Pedagógica / Educativa',
    theme: 'Superação',
    reference: 'Pedagogia Afetiva e Vygotsky',
    template: 'O seu valor nunca será medido por uma nota ou pela velocidade dos outros, {nome}. Errar faz parte de todo aprendizado verdadeiro. Cada esforço sincero que você faz cria pontes fortes para o seu futuro. Continue tentando, com calma e fé no seu potencial.'
  },
  {
    category: 'Dia Difícil / Ansiedade',
    tone: 'Acolhedora / Afetuosa',
    theme: 'Calma & Paciência',
    reference: 'Colo e Segurança Emocional (Carl Rogers)',
    template: 'Se o dia hoje foi pesado, {nome}, permita-se descansar o coração. Você não precisa carregar o mundo inteiro nas suas costas. Aqui você tem um porto seguro e amor verdadeiro. Amanhã é uma nova oportunidade abençoada e a paz voltará a reinar.'
  },
  {
    category: 'Precisa de Motivação',
    tone: 'Motivadora',
    theme: 'Superação',
    reference: 'Jordan Peterson & Viktor Frankl',
    template: '{nome}, erga os ombros e enfrente o dia com coragem. Os dias difíceis não apagam o valor do seu caráter nem a força dos seus sonhos. Dê hoje o melhor passo que você puder dar, por menor que seja, e confie na recompensa do trabalho honesto e bem feito.'
  }
];

export default function App() {
  // Estados dos filtros
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('Filho(a)');
  const [ageGroup, setAgeGroup] = useState('Criança');
  const [gender, setGender] = useState('Não especificar');
  const [profession, setProfession] = useState('');
  const [hobby, setHobby] = useState('');
  const [specialConditions, setSpecialConditions] = useState(['Autismo / Neurodivergente', 'Dificuldade de Aprendizagem']);
  const [tone, setTone] = useState('Acolhedora / Afetuosa');
  const [theme, setTheme] = useState('Autoestima');

  // Controle da Aplicação
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [currentReference, setCurrentReference] = useState('Psicologia & Afeto');
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('generator'); // 'generator' | 'card'
  const [cardPalette, setCardPalette] = useState('rose'); // 'rose' | 'lavender' | 'amber' | 'sage'
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showPixModal, setShowPixModal] = useState(false);
  const [pixCopied, setPixCopied] = useState(false);

  // Síntese de voz
  const synthRef = useRef(null);
  const cardCanvasRef = useRef(null);

  const relationships = ['Filho(a)', 'Companheiro(a)', 'Amigo(a)', 'Aluno(a)', 'Colega de Trabalho', 'Para Mim Mesmo', 'Outro'];
  const ageGroups = ['Criança', 'Adolescente', 'Adulto', 'Idoso'];

  const conditionOptions = [
    { id: 'Autismo / Neurodivergente', label: 'Autismo / Neurodivergente', icon: '🧩' },
    { id: 'Dificuldade de Aprendizagem', label: 'Dificuldade de Aprendizagem', icon: '📖' },
    { id: 'Precisa de Motivação', label: 'Precisa de Motivação', icon: '⚡' },
    { id: 'Dia Difícil / Ansiedade', label: 'Dia Difícil / Ansiedade', icon: '🫂' },
    { id: 'Baixa Autoestima', label: 'Baixa Autoestima', icon: '🌱' },
    { id: 'Transição / Desafio Novo', label: 'Transição / Desafio Novo', icon: '🚀' }
  ];

  const tones = [
    { id: 'Acolhedora / Afetuosa', label: 'Acolhedora & Afetuosa', desc: 'Carinhosa, maternal e protetora (Winnicott)', icon: Heart, color: 'from-pink-500 to-rose-500' },
    { id: 'Motivadora', label: 'Motivadora', desc: 'Microvitórias e firmeza (Jordan Peterson)', icon: Zap, color: 'from-amber-500 to-orange-500' },
    { id: 'Aconselhadora', label: 'Aconselhadora', desc: 'Sábia, calma e com propósito (Viktor Frankl)', icon: Compass, color: 'from-teal-500 to-emerald-500' },
    { id: 'Pedagógica / Educativa', label: 'Pedagógica / Educativa', desc: 'Didática, paciente e inclusiva (Vygotsky)', icon: BookOpen, color: 'from-blue-500 to-indigo-500' },
    { id: 'Poética', label: 'Poética & Profunda', desc: 'Lírica, inspiradora e reflexiva', icon: Feather, color: 'from-purple-500 to-violet-500' },
    { id: 'Animadora', label: 'Animadora & Entusiasta', desc: 'Alegre, vibrante e bem-humorada', icon: Sun, color: 'from-yellow-500 to-amber-500' }
  ];

  const themes = ['Autoestima', 'Superação', 'Pequenas Vitórias', 'Calma & Paciência', 'Amor & Gratidão', 'Foco & Concentração', 'Resiliência', 'Coragem', 'Aleatório'];

  useEffect(() => {
    const saved = localStorage.getItem('affirmative_messages_history');
    if (saved) {
      try { setHistory(JSON.parse(saved)); } catch (e) { /* ignore */ }
    }
    const savedKey = localStorage.getItem('affirmative_gemini_key');
    if (savedKey) setApiKey(savedKey);

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setShowPixModal(false);
        setShowSettings(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleCondition = (condId) => {
    setSpecialConditions(prev =>
      prev.includes(condId) ? prev.filter(c => c !== condId) : [...prev, condId]
    );
  };

  const generateMessage = async (isDailyQuick = false) => {
    // 1. Verifica cache da afirmativa do dia se for afirmativa diária
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    if (isDailyQuick) {
      try {
        const cached = localStorage.getItem('palavras_afirmativas_daily');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.date === today && parsed.item) {
            stopSpeech();
            setGeneratedMessage(parsed.item.text);
            setCurrentReference(parsed.item.reference || '☀️ Afirmativa do Dia');
            return;
          }
        }
      } catch (e) { /* ignore */ }
    }

    setLoading(true);
    stopSpeech();

    const targetName = isDailyQuick ? 'alguém querido' : (name.trim() || relationship);
    const chosenTone = isDailyQuick ? 'Acolhedora / Afetuosa' : tone;
    let messageText = '';
    let refText = isDailyQuick ? `☀️ Afirmativa do Dia • ${new Date().toLocaleDateString('pt-BR')}` : 'Psicologia & Afeto';

    // Se houver chave API, tenta chamar o Gemini
    if (apiKey && apiKey.trim().length > 10) {
      try {
        const sysPrompt = `Você é um mentor especialista em empatia, psicologia do desenvolvimento (Jordan Peterson, Winnicott, Rogers, Frankl) e pedagogia inclusiva.
Diretrizes: Respeite a família e a fé; não promova ateísmo; não incite violência; não insira temas de homossexualismo ou pautas divisivas. Use linguagem límpida e afetuosa para neurodivergentes/autistas. 3 a 4 frases edificantes em PT-BR.`;
        const userPrompt = `Crie uma palavra afirmativa para ${targetName} (${relationship}), faixa etária ${ageGroup}, tom ${chosenTone}, tema ${theme}.`;
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: userPrompt }] }], systemInstruction: { parts: [{ text: sysPrompt }] } })
        });
        if (resp.ok) {
          const data = await resp.json();
          messageText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()?.replace(/^["“']|["”']$/g, '');
          refText = 'Gerado com IA • Psicologia Positiva';
        }
      } catch (e) {
        console.warn('API indisponível, usando contingência local curada.');
      }
    }

    // Se não gerou via API ou não tem chave, usa a base curada com zero custo
    if (!messageText) {
      const match = CURATED_DB.find(c => specialConditions.includes(c.category)) || CURATED_DB[0];
      messageText = match.template.replace(/\{nome\}/g, targetName);
      refText = match.reference;
    }

    setGeneratedMessage(messageText);
    setCurrentReference(refText);

    const newItem = {
      id: Date.now(),
      name: targetName,
      text: messageText,
      tone: chosenTone,
      reference: refText,
      date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
    };

    if (isDailyQuick) {
      try {
        localStorage.setItem('palavras_afirmativas_daily', JSON.stringify({ date: today, item: newItem }));
      } catch (e) { /* ignore */ }
    }

    const updated = [newItem, ...history.filter(h => String(h.id) !== String(newItem.id) && h.text !== newItem.text)].slice(0, 25);
    setHistory(updated);
    localStorage.setItem('affirmative_messages_history', JSON.stringify(updated));

    setLoading(false);
  };

  // Leitura em Voz Alta
  const handleToggleSpeech = () => {
    if (!generatedMessage || !synthRef.current) return;
    if (isSpeaking) {
      stopSpeech();
    } else {
      stopSpeech();
      const utterance = new SpeechSynthesisUtterance(generatedMessage);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.92;
      utterance.pitch = 1.05;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      synthRef.current.speak(utterance);
    }
  };

  const stopSpeech = () => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
    }
    setIsSpeaking(false);
  };

  const handleCopy = () => {
    if (!generatedMessage) return;
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleShareWhatsapp = () => {
    if (!generatedMessage) return;
    const text = encodeURIComponent(`🌸 *Palavra Afirmativa:*\n\n"${generatedMessage}"\n\n✨ _Com carinho e votos de um dia abençoado!_`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareEmail = () => {
    if (!generatedMessage) return;
    const subject = encodeURIComponent(`Uma palavra afirmativa especial para você!`);
    const body = encodeURIComponent(`Olá,\n\nGostaria de compartilhar esta mensagem afirmativa com você:\n\n"${generatedMessage}"\n\nCom todo o meu carinho!`);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FCF9F7] text-[#33262B] font-sans flex flex-col antialiased">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-[#EFE4E0] sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C25E75] to-[#E58667] flex items-center justify-center text-white shadow-md">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-[#33262B] leading-tight">Palavras Afirmativas</h1>
              <p className="text-xs text-[#6B5860]">Afeto, acolhimento maternal e neurodiversidade</p>
            </div>
          </div>

          {/* Navegação Entre Vistas (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F9F3F0] p-1 rounded-full border border-[#EFE4E0]">
            <button
              type="button"
              onClick={() => setActiveTab('generator')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                activeTab === 'generator'
                  ? 'bg-white text-[#C25E75] shadow-xs'
                  : 'text-[#6B5860] hover:text-[#33262B]'
              }`}
            >
              Gerador de Afirmativas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('articles')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'articles'
                  ? 'bg-white text-[#C25E75] shadow-xs'
                  : 'text-[#6B5860] hover:text-[#33262B]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Artigos & Reflexões</span>
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => generateMessage(true)}
              disabled={loading}
              className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#FDE8ED] text-[#C25E75] hover:bg-[#FCD6DF] transition border border-[#F7B5C3]"
            >
              <Sun className="w-4 h-4 text-amber-500" />
              <span>Afirmativa do Dia</span>
            </button>

            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-xl bg-[#F9F3F0] text-[#6B5860] hover:text-[#C25E75] hover:bg-white border border-[#EFE4E0] transition"
              title="Configurações"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Navegação Mobile */}
      <div className="md:hidden bg-white/95 border-b border-[#EFE4E0] px-4 py-2 flex justify-center sticky top-[57px] z-20">
        <div className="inline-flex bg-[#F9F3F0] p-1 rounded-full border border-[#EFE4E0]">
          <button
            type="button"
            onClick={() => setActiveTab('generator')}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition ${
              activeTab === 'generator'
                ? 'bg-white text-[#C25E75] shadow-xs'
                : 'text-[#6B5860]'
            }`}
          >
            Gerador
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('articles')}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
              activeTab === 'articles'
                ? 'bg-white text-[#C25E75] shadow-xs'
                : 'text-[#6B5860]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Artigos & Reflexões</span>
          </button>
        </div>
      </div>

      {/* Main Container Condicional */}
      {activeTab === 'articles' ? (
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
          <ArticlesView
            onSelectAffirmation={(affirmationText, articleTitle) => {
              setGeneratedMessage(affirmationText);
              setCurrentReference(`Artigo: ${articleTitle}`);
              setActiveTab('generator');
            }}
            onBackToGenerator={() => setActiveTab('generator')}
          />
        </main>
      ) : (
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 space-y-5">
          <div className="bg-gradient-to-r from-[#FFF0F2] via-[#F8EAF2] to-[#F1EEF9] rounded-2xl p-6 border border-[#F7B5C3] shadow-sm relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#F7B5C3] text-xs font-bold text-[#C25E75] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inclusivo & Afetivo</span>
            </div>
            <h2 className="text-xl font-bold mb-1 text-[#33262B]">Construa laços com palavras que abraçam a alma</h2>
            <p className="text-sm text-[#6B5860] leading-relaxed">
              Mensagens sob medida para quem precisa de motivação, supera dificuldades de aprendizagem ou vive com autismo. Fundamentado na psicologia do afeto, respeito e superação.
            </p>
          </div>

          {/* Form Box */}
          <div className="bg-white rounded-2xl p-6 border border-[#EFE4E0] shadow-sm space-y-5">
            <div className="flex items-center gap-2 font-bold text-base text-[#33262B] border-b border-[#EFE4E0] pb-3">
              <Sliders className="w-4 h-4 text-[#C25E75]" />
              <h3>Personalize o Destinatário</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#6B5860] uppercase mb-1">Nome (Opcional)</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Ex: Lucas, Sofia..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#F9F3F0] border border-[#EFE4E0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C25E75] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#6B5860] uppercase mb-1">Vínculo</label>
                <select
                  value={relationship}
                  onChange={e => setRelationship(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F9F3F0] border border-[#EFE4E0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C25E75] focus:bg-white"
                >
                  {relationships.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>

            {/* Special Conditions */}
            <div>
              <label className="block text-xs font-bold text-[#6B5860] uppercase mb-2">Perfil ou Momento Atual</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {conditionOptions.map(cond => {
                  const active = specialConditions.includes(cond.id);
                  return (
                    <button
                      key={cond.id}
                      type="button"
                      onClick={() => toggleCondition(cond.id)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs font-semibold transition ${
                        active ? 'bg-[#FDE8ED] border-[#F7B5C3] text-[#C25E75]' : 'bg-[#F9F3F0] border-[#EFE4E0] text-[#6B5860]'
                      }`}
                    >
                      <span>{cond.icon}</span>
                      <span className="flex-1">{cond.label}</span>
                      {active && <Check className="w-3.5 h-3.5 text-[#C25E75]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tones */}
            <div>
              <label className="block text-xs font-bold text-[#6B5860] uppercase mb-2">Tom da Afirmativa</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tones.map(t => {
                  const Icon = t.icon;
                  const active = tone === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTone(t.id)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition ${
                        active ? 'bg-white border-[#C25E75] ring-2 ring-[#FDE8ED] shadow-sm' : 'bg-[#F9F3F0] border-[#EFE4E0]'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg text-white bg-gradient-to-r ${t.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#33262B]">{t.label}</div>
                        <div className="text-[10px] text-[#6B5860]">{t.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => generateMessage(false)}
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C25E75] to-[#E58667] text-white font-bold text-sm shadow-md hover:opacity-95 transition flex items-center justify-center gap-2"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              <span>{loading ? 'Tecendo mensagem com afeto...' : 'Gerar Palavra Afirmativa'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Display */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white rounded-2xl border border-[#EFE4E0] shadow-sm p-6 flex flex-col min-h-[420px]">
            <h3 className="font-bold text-sm text-[#33262B] border-b border-[#EFE4E0] pb-3 mb-4">
              Sua Palavra Afirmativa
            </h3>

            {generatedMessage ? (
              <div className="space-y-5 flex-1 flex flex-col justify-between">
                <div className="bg-[#FFF8F9] rounded-xl p-5 border border-[#F7B5C3]">
                  <p className="text-[#382128] text-base leading-relaxed font-serif italic">
                    "{generatedMessage}"
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#F7B5C3]/40 flex items-center justify-between text-xs text-[#6B5860]">
                    <span>Para: <strong>{name || relationship}</strong></span>
                    <span className="bg-[#EFEAF7] text-[#7E66AC] px-2 py-0.5 rounded text-[11px] font-semibold">{currentReference}</span>
                  </div>
                </div>

                {/* Audio */}
                <div className="bg-[#F9F3F0] rounded-xl p-3 border border-[#EFE4E0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleToggleSpeech}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition ${
                        isSpeaking ? 'bg-rose-600 animate-pulse' : 'bg-[#C25E75] hover:opacity-90'
                      }`}
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <div>
                      <div className="text-xs font-bold text-[#33262B]">{isSpeaking ? 'Lendo mensagem...' : 'Ouvir em Voz Alta'}</div>
                      <div className="text-[10px] text-[#6B5860]">Voz em Português (PT-BR)</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2">
                  <button onClick={handleShareWhatsapp} className="py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm">
                    <Send className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <button onClick={handleShareEmail} className="py-2.5 bg-[#2563EB] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm">
                    <Mail className="w-3.5 h-3.5" />
                    <span>E-mail</span>
                  </button>
                  <button onClick={handleCopy} className="py-2.5 bg-[#33262B] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm">
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center space-y-3 m-auto">
                <div className="w-12 h-12 rounded-full bg-[#FDE8ED] text-[#C25E75] flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <h4 className="font-bold text-sm text-[#33262B]">Nenhuma mensagem gerada</h4>
                <p className="text-xs text-[#6B5860] max-w-xs mx-auto">
                  Preencha os filtros ao lado ou clique abaixo para uma afirmativa imediata.
                </p>
                <button
                  onClick={() => generateMessage(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 bg-[#C25E75] text-white rounded-xl shadow-sm hover:opacity-95"
                >
                  <Sun className="w-4 h-4" />
                  Gerar Afirmativa do Dia
                </button>
              </div>
            )}
          </div>

          {/* Histórico Recente */}
          <div className="bg-white rounded-2xl border border-[#EFE4E0] shadow-sm p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-[#33262B]">
              <div className="flex items-center gap-1.5">
                <History className="w-3.5 h-3.5 text-[#C25E75]" />
                <span>Últimas Afirmativas Salvas</span>
              </div>
              <span className="text-[#9B8891]">{history.length} salvas</span>
            </div>

            {history.length === 0 ? (
              <p className="text-xs text-[#9B8891] text-center py-2 italic">Nenhuma mensagem salva ainda.</p>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {history.map(item => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setGeneratedMessage(item.text);
                      setCurrentReference(item.reference || 'Psicologia & Afeto');
                    }}
                    className="p-2.5 rounded-xl bg-[#F9F3F0] hover:bg-[#FFF0F2] border border-[#EFE4E0] transition cursor-pointer text-left"
                  >
                    <div className="flex items-center justify-between text-[11px] text-[#6B5860] mb-1">
                      <strong>{item.name || 'Pessoa Querida'} • {item.date}</strong>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          const updated = history.filter(h => String(h.id) !== String(item.id));
                          setHistory(updated);
                          localStorage.setItem('affirmative_messages_history', JSON.stringify(updated));
                        }}
                        className="text-[#9B8891] hover:text-rose-600 px-1 py-0.5 rounded transition"
                        title="Remover do histórico"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-[#382128] font-serif italic line-clamp-2">"{item.text}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-[#EFE4E0] py-6 text-center text-xs text-[#6B5860] space-y-2 mt-auto">
        <p>Projeto Palavras Afirmativas • <span className="text-[#C25E75]">♥</span> • Amor, perseverança e inclusão</p>
        <div>
          <button
            type="button"
            onClick={() => setShowPixModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF0F2] border border-[#F7B5C3] text-[#C25E75] font-bold text-xs hover:bg-[#FCD6DF] transition"
          >
            <span>☕</span>
            <span>Apoiar este projeto com Pix</span>
          </button>
        </div>
      </footer>

      {/* Modal Pix */}
      {showPixModal && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setShowPixModal(false); }}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center space-y-4 border border-[#EFE4E0] shadow-xl my-auto max-h-[92vh] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center border-b border-[#EFE4E0] pb-3 shrink-0">
              <h3 className="font-bold text-sm text-[#33262B] flex items-center gap-1.5">
                <span>☕</span>
                <span>Apoie o Palavras Afirmativas</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowPixModal(false)}
                className="w-8 h-8 rounded-full bg-[#F9F3F0] hover:bg-[#FCD6DF] text-[#6B5860] hover:text-[#C25E75] flex items-center justify-center transition font-bold text-sm"
                title="Fechar (Esc)"
                aria-label="Fechar janela"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-y-auto space-y-4 pr-1">
              <p className="text-xs text-[#6B5860] leading-relaxed">
                Gostou do <strong>Palavras Afirmativas</strong>? Apoie este projeto independente mantendo-o gratuito, acolhedor e acessível para todos.
              </p>

              {/* QR Code */}
              <div className="flex flex-col items-center gap-1.5 py-1">
                <div className="p-2 bg-white rounded-xl border border-[#EFE4E0] shadow-xs">
                  <img src="assets/pix-qrcode.png" alt="QR Code Pix" className="w-32 h-32 rounded-lg" />
                </div>
                <span className="text-[11px] text-[#6B5860] font-medium">Escaneie o QR Code no app do banco</span>
              </div>

              <div className="bg-[#F9F3F0] p-3.5 rounded-xl border border-dashed border-[#F7B5C3] space-y-2">
                <div className="text-[11px] font-bold text-[#6B5860] uppercase tracking-wider">Ou copie a chave aleatória</div>
                <code className="block bg-white border border-[#EFE4E0] px-3 py-1.5 rounded text-xs font-mono select-all text-[#33262B] break-all">
                  Ee094ef5-01b9-492d-a41e-e0c763cf4f40
                </code>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText('Ee094ef5-01b9-492d-a41e-e0c763cf4f40');
                    setPixCopied(true);
                    setTimeout(() => setPixCopied(false), 2400);
                  }}
                  className="w-full py-2 bg-[#33262B] hover:bg-black text-white text-xs font-bold rounded-lg transition"
                >
                  {pixCopied ? 'Chave Pix Copiada! ✓' : 'Copiar Chave Pix'}
                </button>
              </div>

              <div className="pt-2 border-t border-[#EFE4E0]">
                <p className="text-xs font-semibold text-[#C25E75] mb-1">
                  Muito obrigado pelo carinho e por apoiar este projeto! ♥
                </p>
                <p className="text-[11px] text-[#6B5860]">
                  🔒 O projeto é e sempre será 100% gratuito e acolhedor para todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
