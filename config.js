/**
 * CONFIG.JS — Configuração da instância
 * ======================================
 * Preencha este arquivo para cada nova instalação.
 * Este arquivo está no .gitignore e NÃO deve ser commitado.
 * Use config.example.js como referência.
 */

const APP_CONFIG = {
    // URL do Apps Script Web App (obrigatório)
    // Após publicar o Code.gs, cole a URL aqui
    GAS_URL: 'https://script.google.com/macros/s/AKfycbz8SjwqwKndYGUw2JREn_0z1WCYWwQFnieWpDWaATVdPYAqdbvPjeWBZIS4l5c3jRGA/exec',

    // Instituição padrão (criada automaticamente na primeira abertura)
    INSTITUICAO_PADRAO: {
        id: 'default',
        nome: 'Sec. Mun. Educação Pedro Leopoldo',
        cidade: 'Pedro Leopoldo',
    },

    // Prefixo dos códigos de inventário gerados automaticamente
    CODIGO_PREFIXO: 'SME',

    // Nome do app (aparece no título da página e no PWA)
    APP_NOME: 'Inventário SME',
    APP_NOME_CURTO: 'Inventário SME',
};
