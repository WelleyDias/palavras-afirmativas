/**
 * Base de Conhecimento e Afirmações Curadas
 * Fundamentada em Psicologia Positiva, Teoria do Apego (Winnicott),
 * Aceitação Incondicional (Carl Rogers), Logoterapia (Viktor Frankl),
 * Pedagogia Afetiva (Vygotsky) e Princípios de Desenvolvimento Pessoal (Jordan Peterson).
 *
 * Conteúdo 100% voltado para a edificação, acolhimento materno e familiar,
 * paz, respeito, fé, serenidade e neurodiversidade inclusiva.
 */

export const AFFIRMATIONS_DB = [
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
    reference: 'Inspirado na regra das microvitórias (J. Peterson)',
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
  {
    id: 'aut_est_03',
    category: 'Baixa Autoestima',
    tone: 'Poética',
    theme: 'Amor & Gratidão',
    relationships: ['Companheiro(a)', 'Filho(a)', 'Amigo(a)'],
    reference: 'Literatura poética de consolo e ternura',
    template: '{nome}, há uma melodia doce e singular que só você sabe tocar na vida de quem te cerca. Cada gesto seu de afeto, cada dedicação em {hobby_text} reflete um coração precioso. Tenha orgulho da pessoa digna que você está se tornando a cada dia.'
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
  {
    id: 'mot_04',
    category: 'Transição / Desafio Novo',
    tone: 'Acolhedora / Afetuosa',
    theme: 'Resiliência',
    relationships: ['Filho(a)', 'Companheiro(a)', 'Amigo(a)'],
    reference: 'Apoio incondicional na jornada',
    template: 'Mudar de fase exige bravura, {nome}, mas saiba que você não está só nessa caminhada. Estaremos sempre na primeira fila torcendo por você, vibrando a cada pequena conquista e oferecendo a mão sempre que precisar. Vá com serenidade e fé!'
  },

  // --- COMPANHEIRISMO & CASAL (Respeitoso, Afetuoso e Edificante) ---
  {
    id: 'comp_01',
    category: 'Precisa de Motivação',
    tone: 'Acolhedora / Afetuosa',
    theme: 'Amor & Gratidão',
    relationships: ['Companheiro(a)'],
    reference: 'Vínculo saudável, respeito e lealdade',
    template: '{nome}, a sua presença ao meu lado traz serenidade e segurança para a nossa caminhada. Admiro a sua dedicação sincera, a sua retidão de caráter e a força com que você cuida de quem ama. Que o seu dia seja repleto de paz, bênçãos e realizações bem-merecidas.'
  },
  {
    id: 'comp_02',
    category: 'Dia Difícil / Ansiedade',
    tone: 'Acolhedora / Afetuosa',
    theme: 'Calma & Paciência',
    relationships: ['Companheiro(a)'],
    reference: 'Apoio mútuo e companheirismo fiel',
    template: 'Meu amor, nos dias em que o cansaço bater à porta, lembre-se de que somos uma equipe unida pelo respeito e pelo afeto verdadeiro. Você não precisa dar conta de tudo sozinho(a). Descanse o coração e saiba que meu apoio e admiração por você são incondicionais.'
  },

  // --- FILHO / FILHA (Amor Maternal / Paternal Afetivo) ---
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

export const GENERAL_QUICK_AFFIRMATIONS = [
  'A vida é construída na paciência dos pequenos passos diários. Respire com calma, cuide de quem você ama e lembre-se de que a sua força reside na serenidade e na retidão do seu coração.',
  'Cada manhã é uma página em branco abençoada. Não deixe que as preocupações de ontem roubem a paz de hoje. Seja fiel aos seus valores e siga em frente com firmeza e humildade.',
  'Trate a si mesmo com a mesma compaixão e dignidade com que você cuidaria de um filho amado. Você tem valor intrínseco, e cada esforço seu para fazer o bem tem um significado eterno.',
  'Quando o mundo parecer acelerado demais, diminua o passo e busque a ordem nas pequenas coisas. Há uma beleza sagrada no silêncio, na paciência e no dever cumprido com amor.',
  'Nunca menospreze o poder de um dia vivido com retidão e bondade. As grandes vitórias da vida são filhas das pequenas vitórias silenciosas que ninguém vê.'
];
