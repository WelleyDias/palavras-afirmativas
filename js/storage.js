/**
 * Gerenciador de Armazenamento Local (LocalStorage)
 * 100% Client-Side, Seguro e Privado.
 */

const STORAGE_KEYS = {
  HISTORY: 'palavras_afirmativas_history',
  FAVORITES: 'palavras_afirmativas_favorites',
  SETTINGS: 'palavras_afirmativas_settings',
  DAILY: 'palavras_afirmativas_daily'
};

export const Storage = {
  getTodayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  },

  // --- AFIRMATIVA DO DIA (CACHE DIÁRIO) ---
  getDailyAfirmativa() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DAILY);
      if (!data) return null;
      const parsed = JSON.parse(data);
      const today = this.getTodayKey();
      return parsed.date === today ? parsed.item : null;
    } catch (e) {
      return null;
    }
  },

  saveDailyAfirmativa(item) {
    try {
      const today = this.getTodayKey();
      localStorage.setItem(STORAGE_KEYS.DAILY, JSON.stringify({ date: today, item }));
    } catch (e) {
      console.error('Erro ao salvar afirmativa do dia', e);
    }
  },
  // --- HISTÓRICO ---
  getHistory() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Erro ao ler histórico', e);
      return [];
    }
  },

  saveToHistory(item) {
    if (!item || !item.text || typeof item.text !== 'string' || !item.text.trim()) {
      return this.getHistory();
    }
    try {
      const history = this.getHistory();
      
      // Garante ID único com fallback seguro
      const id = item.id ? String(item.id) : (
        (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function')
          ? crypto.randomUUID()
          : 'aff_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9)
      );

      // Garante data de criação e data formatada
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

      // Limita a 30 itens recentes sem duplicação
      const updated = [validItem, ...history.filter(h => String(h.id) !== id && h.text !== validItem.text)].slice(0, 30);
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Erro ao salvar no histórico', e);
      return [];
    }
  },

  clearHistory() {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
  },

  removeFromHistory(id) {
    try {
      const history = this.getHistory();
      const updated = history.filter(h => String(h.id) !== String(id));
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Erro ao remover item do histórico', e);
      return [];
    }
  },

  // --- FAVORITOS ---
  getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Erro ao ler favoritos', e);
      return [];
    }
  },

  toggleFavorite(item) {
    try {
      const favorites = this.getFavorites();
      const exists = favorites.some(f => f.id === item.id || f.text === item.text);
      let updated;
      if (exists) {
        updated = favorites.filter(f => f.id !== item.id && f.text !== item.text);
      } else {
        updated = [{ ...item, isFavorite: true, favoritedAt: new Date().toISOString() }, ...favorites];
      }
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));
      return { favorites: updated, isFavorited: !exists };
    } catch (e) {
      console.error('Erro ao alternar favorito', e);
      return { favorites: [], isFavorited: false };
    }
  },

  isFavorite(id, text) {
    const favorites = this.getFavorites();
    return favorites.some(f => (id && f.id === id) || (text && f.text === text));
  },

  // --- CONFIGURAÇÕES (ex: chave opcional da Gemini API) ---
  getSettings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : { apiKey: '', speechRate: 0.95, speechPitch: 1.0 };
    } catch (e) {
      return { apiKey: '', speechRate: 0.95, speechPitch: 1.0 };
    }
  },

  saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error('Erro ao salvar configurações', e);
    }
  }
};
