# 🌸 Palavras Afirmativas - Acolhimento, Empatia e Neurodiversidade

[![HTML5](https://img.shields.io/badge/HTML5-Semântico-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Design_Maternal-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Offline First](https://img.shields.io/badge/Custo-100%25_Gratuito-10b981?style=for-the-badge)](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
[![Licença: MIT](https://img.shields.io/badge/Licença-MIT-blue.svg?style=for-the-badge)](LICENSE)

> Uma aplicação web sensível, calorosa e acessível criada para gerar e compartilhar palavras afirmativas personalizadas para **filhos, companheiros(as), amigos(as), alunos(as) ou colegas de trabalho**, especialmente desenhada para apoiar **pessoas no espectro autista (neurodivergentes)**, **com dificuldades de aprendizagem**, que estejam enfrentando ansiedade ou que precisem de ânimo e afeto verdadeiro.

---

## 📌 Fundamentação Psicológica e Pedagógica

O projeto não se limita a frases motivacionais genéricas de "positividade tóxica". Todas as mensagens são estruturadas sobre pilares comprovados da psicologia humanista, cognitiva e do desenvolvimento:

1. **Jordan Peterson & Psicologia do Desenvolvimento**:
   - **Regra das Microvitórias**: Foco no progresso incremental ("Compare-se com quem você era ontem, não com quem outra pessoa é hoje"). Essencial para crianças e adultos que sentem o peso da frustração escolar ou cognitiva.
   - **Responsabilidade com Amor**: Tratar a si mesmo ou à pessoa amada como alguém de quem você é responsável por cuidar, proteger e encorajar com firmeza e carinho.
   - **Postura Serena perante o Caos**: Trazer ordem, previsibilidade e calma para momentos de sobrecarga.

2. **Donald Winnicott & Teoria do Apego (*Holding Environment*)**:
   - O abraço maternal que acolhe: um ambiente emocional seguro onde o erro é compreendido e a vulnerabilidade não é punida.
   - Amor incondicional que oferece alívio e descanso mental.

3. **Carl Rogers (Abordagem Centrada na Pessoa)**:
   - Aceitação positiva incondicional: o valor da pessoa não depende de notas, títulos ou velocidade, mas da sua dignidade intrínseca como ser humano.

4. **Viktor Frankl (Logoterapia)**:
   - A certeza de que mesmo nos dias mais pesados há propósito, beleza e uma centelha de esperança inabalável a ser nutrida.

5. **Lev Vygotsky & Pedagogia Inclusiva**:
   - Respeito ao ritmo e tempo próprio de desenvolvimento.
   - Linguagem clara, direta e livre de metáforas ambíguas para garantir conforto sensorial a indivíduos autistas.

---

## 🛡️ Diretrizes de Conteúdo & Valores Familiares

A aplicação foi rigorosamente construída com regras de integridade e segurança afetiva:
- **Paz e Não-Violência**: Linguagem puramente acolhedora, sem agressividade ou julgamentos.
- **Respeito à Fé e Espiritualidade**: Mensagens edificantes, sem incentivo a ateísmo ou cisões religiosas.
- **Foco Familiar e Fraterno**: Edificação de laços sadios de maternidade, paternidade, amizade pura, respeito mútuo e companheirismo fiel.

---

## ✨ Funcionalidades Principais

- 🎯 **Filtros Personalizados**: Nome, vínculo (Filho, Companheiro, Amigo, Aluno, Colega, Autoafirmação), idade, hobbies e momentos de vida.
- 🧩 **Módulos Específicos para Neurodiversidade**: Configurações dedicadas para autismo e dificuldades de aprendizagem com linguagem descomplicada.
- 🎨 **Tons Emocionais**: Acolhedora/Afetuosa (maternal), Motivadora, Aconselhadora, Pedagógica, Poética e Animadora.
- 🔊 **Leitura Humanizada em Voz Alta (Web Speech API)**: Áudio nativo do navegador em Português do Brasil com entonação maternal e velocidade ajustável (ideal para crianças e momentos de calma).
- 📲 **Compartilhamento Imediato no WhatsApp**: Disparo com formatação bonita, emojis afetuosos e mensagem pronta com 1 clique.
- ✉️ **Envio por E-mail**: Assunto e corpo configurados automaticamente.
- 🖼️ **Gerador de Cartão Visual (Canvas HD)**: Cria cartões de design em alta resolução para Instagram (Feed e Stories) ou WhatsApp Status com paletas personalizadas (Rosa Maternal, Lavanda Serenidade, Camomila Âmbar e Sálvia Calma) e botão de **Download PNG**.
- 🌟 **Histórico Local (LocalStorage)**: Salva as últimas afirmativas geradas para consultar novamente mesmo sem internet.
- ⚙️ **Modo Híbrido Gratuito + IA Opcional**: Funciona instantaneamente offline com a base curada a custo zero, com campo opcional para chave da API Google Gemini para quem desejar geração infinita por IA.

---

## 📁 Estrutura de Arquivos

```
c:\Users\Welley\Documents\palavras afirmativas\
├── index.html            # Interface principal responsiva e semântica
├── App.jsx               # Versão React do componente para reutilização
├── README.md             # Esta documentação
├── css/
│   └── styles.css        # Design System maternal, acolhedor e responsivo
└── js/
    ├── app.js            # Controlador principal de UI e interações
    ├── database.js       # Acervo curado de afirmativas fundamentadas
    ├── generator.js      # Motor híbrido de geração (Offline + Gemini)
    ├── speech.js         # Síntese de voz em PT-BR (Web Speech API)
    ├── card-generator.js # Renderizador de cartões em PNG via Canvas
    └── storage.js        # Gerenciamento de histórico no LocalStorage
```

---

## 🚀 Como Executar

### Opção 1: Direto no Navegador (Mais Rápido e Simples)
Basta dar um **duplo clique no arquivo `index.html`** em seu Windows Explorer ou abri-lo em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Opção 2: Servidor Local via Python
No PowerShell ou Prompt de Comando, acesse a pasta e digite:
```powershell
cd "c:\Users\Welley\Documents\palavras afirmativas"
python -m http.server 3000
```
Em seguida, abra seu navegador no endereço: [http://localhost:3000](http://localhost:3000).
