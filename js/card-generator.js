/**
 * Gerador de Cartões Visuais em Alta Resolução (HTML5 Canvas)
 * Permite pré-visualizar e exportar cartões prontos para Instagram,
 * Stories e WhatsApp Status em formato PNG de alta definição.
 * Custo zero e 100% no navegador.
 */

export const CardGenerator = {
  palettes: {
    rose: {
      name: 'Rosa Acolhedor (Maternal)',
      bgGrad: ['#FFF5F5', '#FFE3E8', '#FBD2DB'],
      border: '#F3B5C3',
      primaryText: '#4A2330',
      secondaryText: '#874D5E',
      accent: '#D96582',
      quote: 'rgba(217, 101, 130, 0.25)'
    },
    lavender: {
      name: 'Lavanda & Serenidade',
      bgGrad: ['#FAF7FD', '#EFE6FA', '#E1D3F5'],
      border: '#D0BAEC',
      primaryText: '#37234D',
      secondaryText: '#6F548C',
      accent: '#8B5CF6',
      quote: 'rgba(139, 92, 246, 0.22)'
    },
    amber: {
      name: 'Camomila & Âmbar Quente',
      bgGrad: ['#FFFBF2', '#FEF3D6', '#FDE4B0'],
      border: '#F8D38D',
      primaryText: '#462E12',
      secondaryText: '#825C2E',
      accent: '#D97706',
      quote: 'rgba(217, 119, 6, 0.22)'
    },
    sage: {
      name: 'Sálvia & Calma Natural',
      bgGrad: ['#F4F9F5', '#E2EFE5', '#CDE4D2'],
      border: '#B3D6BB',
      primaryText: '#1B3B26',
      secondaryText: '#476E54',
      accent: '#059669',
      quote: 'rgba(5, 150, 105, 0.22)'
    }
  },

  drawCard(canvas, {
    text = '',
    name = '',
    relationship = '',
    paletteKey = 'rose',
    format = 'square' // 'square' (1080x1080) ou 'story' (1080x1920)
  } = {}) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 1080;
    const height = format === 'story' ? 1920 : 1080;
    canvas.width = width;
    canvas.height = height;

    const pal = this.palettes[paletteKey] || this.palettes.rose;

    // 1. Fundo Gradiente Acolhedor
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, pal.bgGrad[0]);
    grad.addColorStop(0.5, pal.bgGrad[1]);
    grad.addColorStop(1, pal.bgGrad[2]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // 2. Moldura decorativa suave
    const margin = 50;
    ctx.strokeStyle = pal.border;
    ctx.lineWidth = 4;
    ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(margin + 12, margin + 12, width - (margin + 12) * 2, height - (margin + 12) * 2);

    // 3. Cabeçalho do Cartão
    ctx.textAlign = 'center';
    ctx.fillStyle = pal.accent;
    ctx.font = '600 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.letterSpacing = '4px';
    const headerY = format === 'story' ? 240 : 140;
    ctx.fillText('• PALAVRAS AFIRMATIVAS •', width / 2, headerY);

    ctx.fillStyle = pal.secondaryText;
    ctx.font = 'italic 22px Georgia, serif';
    ctx.letterSpacing = '1px';
    ctx.fillText('Acolhimento, Fé e Motivação', width / 2, headerY + 40);

    // 4. Aspas Decorativas Gigantes de Fundo
    ctx.fillStyle = pal.quote;
    ctx.font = 'bold 240px Georgia, serif';
    const quoteY = format === 'story' ? 560 : 360;
    ctx.fillText('“', width / 2, quoteY);

    // 5. Quebra de linha e renderização do texto principal
    ctx.fillStyle = pal.primaryText;
    const fontSize = text.length > 220 ? 36 : text.length > 140 ? 42 : 48;
    const lineHeight = fontSize * 1.55;
    ctx.font = `italic 500 ${fontSize}px Georgia, "Playfair Display", serif`;

    const maxWidth = width - 240;
    const words = text.replace(/^["“']|["”']$/g, '').split(' ');
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

    // Centraliza verticalmente o bloco de texto
    const totalTextHeight = lines.length * lineHeight;
    let startY = (height / 2) - (totalTextHeight / 2) + 20;
    if (format === 'story') {
      startY = Math.max(500, startY);
    }

    lines.forEach((l) => {
      ctx.fillText(l, width / 2, startY);
      startY += lineHeight;
    });

    // 6. Rodapé com Dedicatória e Assinatura
    const footerY = format === 'story' ? height - 260 : height - 150;

    // Linha divisória suave
    ctx.strokeStyle = pal.border;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 120, footerY - 50);
    ctx.lineTo(width / 2 + 120, footerY - 50);
    ctx.stroke();

    // Nome / Vínculo
    if (name || relationship) {
      ctx.fillStyle = pal.primaryText;
      ctx.font = 'bold 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      const label = name ? `Para: ${name}` : `Para: ${relationship}`;
      ctx.fillText(label, width / 2, footerY);
    }

    // Frase final motivacional
    ctx.fillStyle = pal.secondaryText;
    ctx.font = '500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
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
