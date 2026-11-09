/**
 * Motor de Geração de Palavras Afirmativas
 * 
 * Opera em modo 100% Gratuito / Offline através da base curada fundamentada
 * em Psicologia (Peterson, Winnicott, Rogers, Frankl, Vygotsky)
 * com suporte opcional e transparente à API do Google Gemini.
 *
 * DIRETRIZES DE CONTEÚDO E SEGURANÇA:
 * - Acolhimento, respeito, serenidade, valores de família e fé.
 * - Nenhuma menção ou incentivo à violência.
 * - Respeito às convicções religiosas e familiares; sem incentivo ao ateísmo.
 * - Foco afetuoso, puro e fraterno/familiar; sem temas divisivos ou impróprios.
 */

import { AFFIRMATIONS_DB, GENERAL_QUICK_AFFIRMATIONS } from './database.js';

export const Generator = {
  /**
   * Gera uma palavra afirmativa com base nos parâmetros
   */
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
    // 1. Se o usuário forneceu uma chave Gemini e não for erro, tenta a API
    if (apiKey && apiKey.trim().length > 10) {
      try {
        const aiResult = await this.generateWithGemini({
          name, relationship, ageGroup, gender, profession, hobby,
          specialConditions, tone, theme, apiKey, isDailyQuick
        });
        if (aiResult && aiResult.text) {
          return aiResult;
        }
      } catch (err) {
        console.warn('Falha na API do Gemini. Acionando motor curado offline de contingência:', err);
      }
    }

    // 2. Motor Curado Offline Inteligente (Zero Custo & Sem Latência)
    return this.generateFromCuratedDatabase({
      name, relationship, ageGroup, gender, profession, hobby,
      specialConditions, tone, theme, isDailyQuick
    });
  },

  /**
   * Motor de Combinação Inteligente da Base Curada
   */
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
      const randomText = GENERAL_QUICK_AFFIRMATIONS[Math.floor(Math.random() * GENERAL_QUICK_AFFIRMATIONS.length)];
      return {
        id: 'quick_' + Date.now(),
        text: randomText,
        tone: 'Acolhedora / Diária',
        theme: 'Serenidade & Força',
        source: 'Curadoria Diária • Sabedoria Clássica'
      };
    }

    // Sistema de pontuação para encontrar a melhor mensagem na base
    const scored = AFFIRMATIONS_DB.map(item => {
      let score = 0;

      // Correspondência de condições especiais (Autismo, Dificuldades, etc.)
      if (specialConditions.includes(item.category)) {
        score += 8;
      }

      // Correspondência de tom
      if (item.tone === tone) {
        score += 5;
      }

      // Correspondência de relação
      if (item.relationships && item.relationships.includes(relationship)) {
        score += 4;
      }

      // Correspondência de tema
      if (theme !== 'Aleatório' && item.theme === theme) {
        score += 4;
      }

      // Pontuação aleatória sutil para não repetir sempre a mesma
      score += Math.random() * 2;

      return { item, score };
    });

    scored.sort((a, b) => b.score - a.score);
    const chosen = scored[0]?.item || AFFIRMATIONS_DB[0];

    // Tratamento de substituição amigável de variáveis
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

    let text = chosen.template
      .replace(/\{nome\}/g, displayName)
      .replace(/\{hobby_text\}/g, hobbyText);

    return {
      id: chosen.id + '_' + Date.now(),
      text: text,
      tone: chosen.tone,
      theme: chosen.theme,
      reference: chosen.reference,
      source: 'Acervo Especializado • ' + chosen.reference
    };
  },

  /**
   * Chamada à API Gratuita do Gemini
   */
  async generateWithGemini({
    name, relationship, ageGroup, gender, profession, hobby,
    specialConditions, tone, theme, apiKey, isDailyQuick
  }) {
    const targetName = name.trim() || (relationship === 'Filho(a)' ? 'meu filho(a)' : 'alguém especial');

    const systemPrompt = `Você é um mentor especialista em psicologia do desenvolvimento, comunicação afetuosa, acolhimento materno e pedagogia inclusiva, fundamentado nos princípios de Jordan Peterson (responsabilidade amorosa, comparação saudável consigo mesmo, regra das microvitórias), Donald Winnicott (colo acolhedor/holding), Carl Rogers (aceitação positiva incondicional) e Viktor Frankl (força e dignidade interior).

DIRETRIZES ESTRITAS:
1. Respeite sempre valores universais de família, paz, carinho, esperança e fé.
2. Jamais incentive violência, agressividade ou qualquer comportamento destrutivo.
3. Não promova o ateísmo ou discussões antirreligiosas; mantenha um tom sereno, edificante e respeitoso à espiritualidade.
4. Mantenha as mensagens centradas no amor familiar, amizade sã, companheirismo saudável e superação; não introduza temas de homossexualismo ou pautas divisivas.
5. Se envolver Autismo ou Dificuldades de Aprendizagem, use linguagem límpida, afirmativa, sem metáforas herméticas ou sobrecarga, validando o ritmo único de evolução e os sentimentos.
6. A mensagem deve ter entre 3 a 5 frases tocantes e profundamente acolhedoras em Português do Brasil.
7. Retorne APENAS o texto da mensagem, pronto para leitura ou envio.`;

    const userPrompt = `Crie uma palavra afirmativa com estas características:
- Destinatário: ${targetName}
- Vínculo: ${relationship}
- Faixa Etária: ${ageGroup}
- Gênero: ${gender}
${profession ? `- Atividade/Profissão: ${profession}` : ''}
${hobby ? `- Interesses/Hobbies: ${hobby}` : ''}
- Contexto & Necessidades: ${specialConditions.join(', ') || 'Autoestima e ânimo geral'}
- Tom: ${tone}
- Tema: ${theme}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      })
    });

    if (!response.ok) {
      throw new Error(`Erro na API Gemini: ${response.status}`);
    }

    const data = await response.json();
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!resultText) throw new Error('Resposta vazia da IA.');

    const cleaned = resultText.trim().replace(/^["“']|["”']$/g, '');

    return {
      id: 'ai_' + Date.now(),
      text: cleaned,
      tone,
      theme,
      reference: 'Gerado com IA • Fundamentado em Psicologia & Afeto',
      source: 'Inteligência Artificial Personalizada'
    };
  }
};
