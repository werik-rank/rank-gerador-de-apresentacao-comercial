(function () {
  const KEY_ATIVA = 'rma-proposta-ativa', KEY_STORE = 'rma-propostas';
  const EXEMPLO = {
    produto: 'rankmyapp',
    principal: 'rankmyapp',
    idioma: 'pt',
    planoGeo: 'rank',
    produtos: { rankmyapp: true, rankmyads: false, rankmygeo: false, intel: false },
    modulos: { rankmyads: ['data'], intel: [] },
    dores: { rankmyapp: ['descoberta', 'conversao', 'mercado', 'reviews'], rankmyads: [], rankmygeo: [], intel: [] },
    prospect: 'Rodobens',
    data: 'Outubro 2026',
    subtitulo: 'Uma solução desenhada pela Rank para que cada review vire uma jornada de autosserviço resolvida, dentro da própria loja.',
    preparadoPara: 'Time de CX e Produto {empresa}',
    escopo: 'App Store e Google Play',
    rep: { nome: 'Karoline Rodrigues', cargo: 'Representante comercial · Rank', email: 'karoline.rodrigues@rankmyapp.com.br', telefone: '(11) 97324-8995', foto: 'assets/web/img119.webp' },
    hipoteses: [
      { t: 'Boleto sem fila', d: 'Emita a 2ª via do boleto em poucos toques' },
      { t: 'Lance e assembleia', d: 'Acompanhe resultados e dê seu lance pelo app' },
      { t: 'Consórcio na mão', d: 'Tudo do pós compra em um só lugar' }
    ],
    taxonomia: 'acesso, boleto, lance e assembleia',
    review: {
      mes: 'Maio',
      texto: 'Falha na autenticação novamente. Não consigo logar, nem com biometria nem com senha. Mostra mensagem de sessão expirada por inatividade.',
      categoria: 'Acesso e login',
      resposta: 'Leonardo, sentimos muito: sabemos que você precisa do app para acompanhar seu consórcio. Já levamos essa falha ao nosso time técnico. Para entrar agora, atualize o app na loja e use Esqueci minha senha para renovar o acesso.'
    },
    passos: [
      { titulo: 'Alinhar a proposta', texto: 'Conversa com a Gisele e o time para ajustar escopo e prioridades.', quando: 'Próxima semana' },
      { titulo: 'Envolver decisores', texto: 'Apresentar a solução a quem aprova o investimento na {empresa}.', quando: 'Data a definir' },
      { titulo: 'Liberar acessos', texto: 'Consoles das lojas, GA4 e MMP para a linha de base.', quando: 'Após aprovação' },
      { titulo: 'Kick off', texto: 'Taxonomia, matriz de respostas e alertas começam a ser construídos.', quando: 'Início do mês 1' }
    ],
    convite: { antes: 'Começar pelo que mais dói hoje,', destaque: 'as reviews de acesso', depois: ', e mostrar resultado concreto ainda no primeiro ciclo.' },
    preco: {
      itens: [
        { id: 'rev', nome: 'Sentimentação e Reviews', desc: 'Gestão, respostas resolutivas e matriz por jornada, análise de sentimentação e acompanhamento', preco: 6000, desconto: 0, incluso: true },
        { id: 'tool', nome: 'Acesso à Tool', desc: 'Sentimento, alertas, benchmark e usabilidade', preco: 2500, desconto: 0, incluso: true },
        { id: 'mi', nome: 'Mobile Intelligence', desc: 'Assessoria com análises de jornada, UX e estabilidade, otimizações para as lojas', preco: 9000, desconto: 0, incluso: true },
        { id: 'aso', nome: 'Personalização e visibilidade', desc: 'ASO, páginas personalizadas e testes A/B', preco: 5000, desconto: 0, incluso: true }
      ],
      setup: { nome: 'Setup e onboarding (valor único)', desc: 'Taxonomia, matriz, alertas e linha de base', valor: 3000, isento: false },
      descontoGeral: { tipo: 'pct', valor: 0 },
      prazo: 12,
      validade: '30 dias',
      apps: 'A proposta contempla os dois apps (Apple e Google)',
      promo: { ativa: true, titulo: 'Condição Black Friday', texto: 'Isenção de Setup' },
      mostrarTotal: false
    }
  };
  const PRODUTOS = [
    { id: 'rankmyapp', nome: 'RankMyApp', desc: 'Mobile intelligence, ASO e reviews', modulos: [], dores: [
      { id: 'descoberta', nome: 'Ser encontrado nas lojas', desc: 'O app não aparece nas buscas certas' },
      { id: 'conversao', nome: 'Converter visitas em instalações', desc: 'Muita visita na página, pouca instalação' },
      { id: 'mercado', nome: 'Entender o app e os concorrentes', desc: 'Falta visão de aquisição e benchmark' },
      { id: 'reviews', nome: 'Reputação e voz do cliente', desc: 'Nota baixa e reviews sem resposta' }
    ] },
    { id: 'rankmyads', nome: 'RankMyAds', desc: 'Mídia de performance', kicker: 'MÍDIA DE PERFORMANCE', texto: 'Mídia orientada a dados para gerar instalações, vendas e reconhecimento de marca para {empresa}, com os canais certos para cada objetivo.', modulos: [
      { id: 'data', nome: 'DataAds', desc: 'Painel que consolida os resultados de mídia de todas as campanhas em um só lugar', padrao: true },
      { id: 'prog', nome: 'Programática', desc: 'Compra automatizada de mídia em sites e apps, com segmentação por dados' },
      { id: 'dooh', nome: 'DOOH', desc: 'Mídia digital fora de casa, em telas de grande circulação' },
      { id: 'adnet', nome: 'Ad Network', desc: 'Rede de apps parceiros para aquisição de usuários' },
      { id: 'ctv', nome: 'CTV', desc: 'Anúncios em TV conectada e plataformas de streaming' },
      { id: 'audio', nome: 'Áudio', desc: 'Anúncios em streaming de música e podcasts' },
      { id: 'ads', nome: 'Ads, Meta Ads e Google Ads', desc: 'Gestão de campanhas nas plataformas Meta e Google' },
      { id: 'apple', nome: 'Apple Ads', desc: 'Anúncios no topo das buscas da App Store' },
      { id: 'gpt', nome: 'ChatGPT Ads', desc: 'Anúncios dentro das conversas do ChatGPT', tag: 'Lançamento' }
    ], dores: [
      { id: 'cobertura', nome: 'Cobertura e notoriedade', desc: 'Preciso de alcance além de Google e Meta', produtos: 'CTV, YouTube, Online Video, pDOOH e Display', metricas: 'Alcance, frequência, viewability e VTR' },
      { id: 'consideracao', nome: 'Descoberta e consideração', desc: 'Minha marca não entra na consideração', produtos: 'Native, vídeo, contextual e ChatGPT Ads', metricas: 'Engajamento, visitas qualificadas e CTR' },
      { id: 'aquisicao', nome: 'Intenção e aquisição', desc: 'Não consigo escalar mantendo eficiência', produtos: 'Apple Ads, Ad Network e retargeting', metricas: 'Instalações, CPI, CPA, CAC e ROAS' },
      { id: 'visita', nome: 'Visita física', desc: 'Preciso levar pessoas às lojas', produtos: 'GEO, pDOOH, Display geolocalizado e mensuração de visita', metricas: 'Visitas, custo por visita e uplift' },
      { id: 'reeng', nome: 'Reengajamento', desc: 'Usuários atuais não ativam ou não compram', produtos: 'Ad Network, Push, retargeting e dados próprios', metricas: 'Ativação, retenção, eventos pós-install e LTV' }
    ] },
    { id: 'rankmygeo', nome: 'RankMyGEO', desc: 'Presença da marca nas respostas de IA', kicker: 'GENERATIVE ENGINE OPTIMIZATION', texto: 'Medimos e ampliamos a presença de {empresa} nas respostas do ChatGPT, Claude, Gemini e Perplexity.', modulos: [], destaques: [
      { nome: 'GEO Score', desc: 'Índice da presença da marca nas respostas das IAs' },
      { nome: 'Share of Voice generativo', desc: 'Participação da marca frente aos concorrentes nas respostas' },
      { nome: 'Citation gaps', desc: 'Perguntas e fontes em que a marca ainda não é citada' }
    ], dores: [
      { id: 'ausente', nome: 'Marca ausente nas respostas de IA', desc: 'As IAs não citam a marca' },
      { id: 'concorrentes', nome: 'Concorrentes citados no lugar da marca', desc: 'Perda de share para a concorrência' },
      { id: 'fontes', nome: 'Fontes que não citam a marca', desc: 'Conteúdo fora das fontes que as IAs usam' }
    ] },
    { id: 'intel', nome: 'Rank Intelligence', desc: 'Inteligência competitiva de mídia', kicker: 'INTELIGÊNCIA COMPETITIVA', texto: 'Acompanhe criativos, campanhas e landing pages dos concorrentes de {empresa} para decidir investimentos com mais contexto.', modulos: [
      { id: 'ads', nome: 'Ads', desc: 'Criativos, campanhas e landing pages dos concorrentes', tag: 'Lançamento em janeiro' },
      { id: 'aiads', nome: 'AI Ads', desc: 'Anúncios em plataformas de IA', tag: 'Lançamento em janeiro' }
    ], dores: [
      { id: 'concorrencia', nome: 'Visibilidade da concorrência', desc: 'Não sei o que os concorrentes anunciam' },
      { id: 'mensagem', nome: 'Mensagens sem tração', desc: 'Verba investida em conceitos não validados' },
      { id: 'contexto', nome: 'Decisão sem contexto de mercado', desc: 'Falta referência para planejar mídia' }
    ] }
  ];
  const GEO_PLANOS = [{ id: 'rank', nome: 'Rank', preco: 4490 }, { id: 'rise', nome: 'Rise', preco: 9690 }, { id: 'lead', nome: 'Lead', preco: 12850 }];
  const GEO_DESC = { 3: 3.5, 6: 8.5, 12: 20 };
  function geoSync(c) {
    if (!(c.produtos && c.produtos.rankmygeo) || !c.preco) return;
    const it = (c.preco.itens || []).find(x => x.id === 'p-rankmygeo'); if (!it) return;
    const pl = GEO_PLANOS.find(x => x.id === (c.planoGeo || 'rank')) || GEO_PLANOS[0];
    it.preco = pl.preco; it.desc = 'Plano ' + pl.nome; it.desconto = 0;
  }
  function geoEnsure(c) {
    if (!(c && c.produtos && c.produtos.rankmygeo)) return;
    c.preco = c.preco || {}; const it = c.preco.itens = c.preco.itens || [];
    let x = it.find(i => i.id === 'p-rankmygeo');
    if (!x) { x = { id: 'p-rankmygeo', nome: 'RankMyGEO', desc: '', preco: '', desconto: 0, incluso: true }; it.push(x); geoSync(c); }
    else if (x.preco === '' || x.preco == null) geoSync(c);
  }
  const APP_ITENS = ['rev', 'tool', 'mi', 'aso'];
  function principal(c) {
    const p = (c && c.produtos) || { rankmyapp: true };
    return c && p[c.principal] ? c.principal : (PRODUTOS.find(x => p[x.id]) || PRODUTOS[0]).id;
  }
  function ordem(c) {
    const p = (c && c.produtos) || { rankmyapp: true }, m = principal(c);
    return [m].concat(PRODUTOS.map(x => x.id).filter(id => id !== m && p[id]));
  }
  function doresSel(c, pid) {
    const P = PRODUTOS.find(x => x.id === pid), l = (((c && c.dores) || {})[pid]) || [];
    return ((P && P.dores) || []).filter(d => l.includes(d.id));
  }
  function appFlags(c) {
    const l = (((c && c.dores) || {}).rankmyapp) || [], all = !l.length;
    const f = { desc: all || l.includes('descoberta'), conv: all || l.includes('conversao'), merc: all || l.includes('mercado'), rev: all || l.includes('reviews') };
    let n = 0; f.num = {}; ['desc', 'conv', 'merc', 'rev'].forEach(k => { if (f[k]) f.num[k] = String(++n); });
    return f;
  }
  const ALC = ['prog', 'dooh', 'ctv', 'audio', 'ads', 'gpt'];
  function adsFlags(c) {
    const ma = (((c && c.modulos) || {}).rankmyads) || [];
    const f = { alcance: ma.some(m => ALC.includes(m)), ua: ma.includes('adnet'), apple: ma.includes('apple'), data: ma.includes('data') };
    let n = 0; const num = {};
    ['alcance', 'ua', 'apple', 'data'].forEach(k => { if (f[k]) num[k] = String(++n); });
    return { f, num, ma };
  }
  function slides(c) {
    const L = [['capa', 'Capa'], ['contracapa', 'Contracapa'], ['sobre-impacto', 'Impacto'], ['sobre-quem', 'Quem é a Rank'], ['marcas', 'Marcas clientes'], ['sobre-eco', 'Ecossistema']];
    const riAds = (((c && c.modulos) || {}).intel || []).includes('ads');
    ordem(c).forEach(id => {
      if (id === 'rankmyapp') { const af = appFlags(c); L.push(['valor', 'Proposta de valor'], ['como', 'Como funciona']); if (af.desc) L.push(['descoberta', 'Descoberta']); if (af.conv) L.push(['conversao', 'Conversão']); if (af.merc) L.push(['mercado', 'Mercado']); if (af.rev) L.push(['reviews', 'Reviews']); L.push(['imvu', 'Case IMVU'], ['claro', 'Claro e Globo']); }
      else if (id === 'rankmyads') {
        const { f } = adsFlags(c);
        L.push(['prod-rankmyads', 'RankMyAds'], ['ads-kpi', 'Qual é o seu KPI'], ['ads-jornada', 'Jornada do consumidor'], ['ads-como', 'Como funciona RankMyAds'], ['ads-entrega', 'O que entregamos'], ['ads-orq', 'Orquestração']);
        if (f.alcance) L.push(['ads-alcance', 'Alcance']);
        if (f.ua) L.push(['ads-ua', 'Aquisição']);
        if (f.apple) L.push(['ads-apple', 'Apple Ads']);
        if (f.data) L.push(['ads-data', 'Mensuração']);
        L.push(['ads-dif', 'Mídia em decisão'], ['ads-case', 'Case Banco ABC'], ['ads-cases', 'Cases de mídia'], ['ads-maturacao', 'Maturação']);
      }
      else if (id === 'intel') { const mi = (((c && c.modulos) || {}).intel || []); if (mi.includes('aiads')) L.push(['prod-intel', 'Rank Intelligence']); if (riAds) L.push(['ri-ads', 'Intelligence Ads']); }
      else if (id === 'rankmygeo') L.push(['geo-valor', 'Proposta de valor'], ['geo-mercado', 'Comportamento de compra'], ['geo-monitore', 'Monitore'], ['geo-analise', 'Analise'], ['geo-aprimore', 'Aprimore'], ['geo-recursos', 'Recursos']);
      else L.push(['prod-' + id, PRODUTOS.find(x => x.id === id).nome]);
    });
    L.push(['passos', 'Próximos passos'], ['preco', 'Proposta comercial'], ['assinatura', 'Assinatura']);
    return L.map(([key, label]) => ({ key, label }));
  }
  const clone = o => JSON.parse(JSON.stringify(o));
  const DEFAULTS = (() => {
    const d = clone(EXEMPLO);
    const blank = o => { for (const k in o) { if (typeof o[k] === 'string' && k !== 'produto' && k !== 'principal' && k !== 'foto' && k !== 'id' && k !== 'tipo') o[k] = ''; else if (o[k] && typeof o[k] === 'object' && !Array.isArray(o[k])) blank(o[k]); } };
    blank(d);
    d.idioma = 'pt'; d.planoGeo = 'rank';
    d.hipoteses = [{ t: '', d: '' }, { t: '', d: '' }, { t: '', d: '' }];
    d.passos = EXEMPLO.passos.map(() => ({ titulo: '', texto: '', quando: '' }));
    d.preco.itens = EXEMPLO.preco.itens.map(i => Object.assign({}, i, { preco: '' }));
    d.preco.setup = { nome: EXEMPLO.preco.setup.nome, desc: EXEMPLO.preco.setup.desc, valor: '', isento: false };
    d.preco.prazo = ''; d.preco.promo.ativa = false;
    return d;
  })();
  const vazio = v => v === '' || v == null || (typeof v === 'string' && !v.trim());
  function fill(c) {
    const r = clone(c), E = EXEMPLO;
    geoEnsure(r);
    const f = (o, e) => { for (const k in e) {
      if (typeof e[k] === 'string' || typeof e[k] === 'number') { if (vazio(o[k])) o[k] = e[k]; }
      else if (e[k] && typeof e[k] === 'object' && !Array.isArray(e[k])) { if (!o[k] || typeof o[k] !== 'object') o[k] = {}; f(o[k], e[k]); }
    } };
    const semApp = !(c.produtos && c.produtos.rankmyapp), setupVazio = vazio(c.preco && c.preco.setup && c.preco.setup.valor);
    f(r, E);
    if (semApp && setupVazio) { r.preco.setup.valor = 0; r.preco.setup.nome = ''; r.preco.setup.desc = ''; }
    if (!(r.hipoteses || []).some(h => !vazio(h.t))) r.hipoteses = clone(E.hipoteses);
    r.passos = (r.passos || []).map((p, i) => { const e = E.passos[i] || {}; return { titulo: vazio(p.titulo) ? e.titulo || '' : p.titulo, texto: vazio(p.texto) ? e.texto || '' : p.texto, quando: vazio(p.quando) ? e.quando || '' : p.quando }; });
    (r.preco.itens || []).forEach(it => { if (vazio(it.preco)) { const m = E.preco.itens.find(x => x.id === it.id); it.preco = m ? m.preco : 0; } });
    return r;
  }
  function merge(d, o) {
    if (Array.isArray(d)) return Array.isArray(o) ? o : d;
    if (d && typeof d === 'object') {
      const r = Object.assign({}, d);
      if (o && typeof o === 'object') for (const k in o) r[k] = k in d ? merge(d[k], o[k]) : o[k];
      return r;
    }
    return o === undefined || o === null ? d : o;
  }
  const uid = () => Math.random().toString(36).slice(2, 9);
  function brl(n) {
    n = Math.round((+n || 0) * 100) / 100;
    return 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });
  }
  const pctFmt = x => (Math.round(x * 10) / 10).toLocaleString('pt-BR') + '%';
  const WORDS = ['nenhuma', 'uma', 'duas', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

  function compute(c) {
    c = fill(c);
    const T = s => String(s == null ? '' : s).split('{empresa}').join(c.prospect || '');
    const p = c.preco || {};
    const inc = (p.itens || []).filter(i => i.incluso);
    let cheio = 0, aposItens = 0;
    const itens = inc.map(i => {
      const pr = Math.max(0, +i.preco || 0), d = Math.min(100, Math.max(0, +i.desconto || 0)), fin = pr * (1 - d / 100);
      cheio += pr; aposItens += fin;
      return { nome: T(i.nome), desc: T(i.desc), precoFmt: brl(fin), precoCheioFmt: brl(pr), temDesconto: d > 0 && pr > 0 };
    });
    const dg = p.descontoGeral || {}, dv = Math.max(0, +dg.valor || 0);
    const descGeral = dg.tipo === 'valor' ? Math.min(dv, aposItens) : aposItens * Math.min(100, dv) / 100;
    const mensal = Math.max(0, aposItens - descGeral), descTotal = cheio - mensal, pct = cheio > 0 ? descTotal / cheio * 100 : 0;
    const s = p.setup || {}, setupValor = Math.max(0, +s.valor || 0), setupFinal = s.isento ? 0 : setupValor;
    const prazo = Math.max(1, Math.round(+p.prazo || 1)), n = inc.length;
    const rep = c.rep || {}, rv = c.review || {}, cv = c.convite || {}, pr = p.promo || {};
    const sel = c.produtos || { rankmyapp: true }, mods = c.modulos || {};
    const main = principal(c);
    const produtosExtras = PRODUTOS.filter(x => x.id !== 'rankmyapp' && x.id !== 'rankmyads' && x.id !== 'rankmygeo' && sel[x.id] && (x.id !== 'intel' || (mods.intel || []).includes('aiads'))).map(x => {
      const lst = x.modulos.length ? x.modulos.filter(m => (mods[x.id] || []).includes(m.id)) : (x.destaques || []);
      const cards = lst.map((m, i) => ({ n: String(i + 1).padStart(2, '0'), nome: m.nome, desc: T(m.desc), tag: (m.tag || '').toUpperCase(), temTag: !!m.tag }));
      const dl = doresSel(c, x.id).map(d => ({ nome: d.nome }));
      return { dores: dl, temDores: dl.length > 0, id: x.id, nome: x.nome, kicker: x.kicker, texto: T(x.texto), cards, temCards: cards.length > 0, cols: Math.min(4, Math.max(1, cards.length)) };
    });
    const hip = (c.hipoteses || []).filter(h => (h.t || '').trim()).map(h => ({ t: T(h.t), d: T(h.d) }));
    const AF = adsFlags(c), adsCanais = PRODUTOS[1].modulos.filter(m => AF.ma.includes(m.id)).map(m => ({ nome: m.nome }));
    const AP = appFlags(c), adl = doresSel(c, 'rankmyads'), adsDores = (adl.length ? adl : PRODUTOS[1].dores).map((d, i) => ({ n: String(i + 1).padStart(2, '0'), nome: d.nome, produtos: d.produtos, metricas: d.metricas }));
    const gp = GEO_PLANOS.find(x => x.id === (c.planoGeo || 'rank')) || GEO_PLANOS[0];
    const geoPlanos = GEO_PLANOS.map(x => ({ nome: x.nome, preco: brl(x.preco), tag: x.id === gp.id ? 'PLANO PROPOSTO' : '', temTag: x.id === gp.id, borda: x.id === gp.id ? '#06B6D4' : 'rgba(205,212,234,0.22)', fundo: x.id === gp.id ? 'rgba(6,182,212,0.12)' : 'rgba(5,20,45,0.55)' }));
    return {
      geoPlanos,
      appDesc: AP.desc, appConv: AP.conv, appMerc: AP.merc, appRev: AP.rev, nDesc: AP.num.desc, nConv: AP.num.conv, nMerc: AP.num.merc, nRev: AP.num.rev,
      adsDores, adsDoresSel: adl.length > 0,
      adsAntes: !!sel.rankmyads && main === 'rankmyads', adsDepois: !!sel.rankmyads && main !== 'rankmyads',
      adsAlcance: AF.f.alcance, adsUA: AF.f.ua, adsApple: AF.f.apple, adsData: AF.f.data,
      nAlcance: AF.num.alcance, nUA: AF.num.ua, nApple: AF.num.apple, nData: AF.num.data,
      adsCanais, temAdsCanais: adsCanais.length > 0,
      temApp: !!sel.rankmyapp, capaGeo: main === 'rankmygeo', capaPadrao: main !== 'rankmygeo', geoAntes: !!sel.rankmygeo && main === 'rankmygeo', geoDepois: !!sel.rankmygeo && main !== 'rankmygeo', produtosExtras, temRiAds: !!sel.intel && (mods.intel || []).includes('ads'),
      extrasAntes: produtosExtras.filter(x => x.id === main), extrasDepois: produtosExtras.filter(x => x.id !== main),
      riAdsAntes: !!sel.intel && (mods.intel || []).includes('ads') && main === 'intel', riAdsDepois: !!sel.intel && (mods.intel || []).includes('ads') && main !== 'intel',
      produtoNome: (PRODUTOS.find(x => x.id === main) || PRODUTOS[0]).nome, prospectLogo: c.prospectLogo || '', prospectLogoCss: c.prospectLogo ? 'url("' + c.prospectLogo + '")' : 'none', temProspectLogo: !!c.prospectLogo, semProspectLogo: !c.prospectLogo,
      prospect: c.prospect, prospectUpper: (c.prospect || '').toUpperCase(), data: (c.data || '').toUpperCase(),
      subtitulo: T(c.subtitulo), preparadoPara: T(c.preparadoPara), escopo: T(c.escopo),
      repNome: rep.nome, repCargo: rep.cargo, repEmail: rep.email, repTelefone: rep.telefone, repFoto: rep.foto || 'assets/web/img119.webp', repFotoCss: 'url("' + (rep.foto || 'assets/web/img119.webp') + '")',
      repAssinatura: (rep.nome || '') + ', Rank',
      hipoteses: hip, temHipoteses: hip.length > 0,
      taxonomia: T(c.taxonomia), reviewMes: (rv.mes || '').toUpperCase(), reviewTexto: T(rv.texto), reviewCategoria: T(rv.categoria), reviewResposta: T(rv.resposta),
      passos: (c.passos || []).map(x => ({ titulo: T(x.titulo), texto: T(x.texto), quando: T(x.quando) })),
      conviteAntes: T(cv.antes), conviteDestaque: T(cv.destaque), conviteDepois: T(cv.depois),
      itens, nFrentes: n,
      precoTitulo: 'Investimento mensal: uma solução, ' + (WORDS[n] || n) + (n === 1 ? ' frente' : ' frentes'),
      temDescontoGeral: descGeral > 0,
      descontoGeralFmt: '− ' + brl(descGeral),
      descontoGeralLabel: dg.tipo === 'valor' ? 'Condição especial sobre o investimento mensal' : pctFmt(Math.min(100, dv)) + ' sobre o investimento mensal',
      setupMostrar: setupValor > 0, setupNome: T(s.nome), setupDesc: T(s.desc), setupFmt: brl(setupValor),
      setupIsento: !!s.isento && setupValor > 0, setupCobrado: !s.isento && setupValor > 0,
      setupBoxFmt: setupValor === 0 ? 'Não se aplica' : s.isento ? 'Isento' : brl(setupValor),
      cheio, mensal, descTotal, setupFinal, prazo,
      mensalFmt: brl(mensal), mensalCheioFmt: brl(cheio), descontoTotalFmt: '− ' + brl(descTotal),
      temDesconto: descTotal > 0.004, descontoPctFmt: pctFmt(pct),
      appsTexto: T(p.apps), prazoFmt: prazo + (prazo === 1 ? ' mês' : ' meses'), validade: p.validade,
      promoAtiva: !!pr.ativa, promoTitulo: (T(pr.titulo) || '').toUpperCase(), promoTexto: T(pr.texto),
      mostrarTotal: !!p.mostrarTotal, total: mensal * prazo + setupFinal, totalFmt: brl(mensal * prazo + setupFinal)
    };
  }
  function loadStore() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY_STORE));
      if (s && s.propostas && s.propostas[s.ativa]) {
        for (const id in s.propostas) {
          const c = s.propostas[id].cfg = merge(DEFAULTS, s.propostas[id].cfg);
          geoEnsure(c);
          if (!c._geoDesc0) { c._geoDesc0 = true; const gi = ((c.preco || {}).itens || []).find(i => i.id === 'p-rankmygeo'); if (gi) gi.desconto = 0; }
          if (!c._dataAdsMig) {
            c._dataAdsMig = true; c.modulos = Object.assign({}, c.modulos);
            const l = c.modulos.rankmyads || [];
            if (c.produtos && c.produtos.rankmyads && !l.includes('data')) {
              c.modulos.rankmyads = ['data'].concat(l);
              const f = ((c.preco || {}).itens || []).find(x => x.id === 'p-rankmyads');
              const P = PRODUTOS[1];
              if (f) f.desc = P.modulos.filter(m => c.modulos.rankmyads.includes(m.id)).map(m => m.nome).join(', ');
            }
          }
        }
        return s;
      }
    } catch (e) {}
    const id = uid();
    return { ativa: id, propostas: { [id]: { id, criado: Date.now(), cfg: clone(DEFAULTS) } } };
  }
  function saveStore(s) {
    localStorage.setItem(KEY_STORE, JSON.stringify(s));
    localStorage.setItem(KEY_ATIVA, JSON.stringify(s.propostas[s.ativa].cfg));
  }
  function loadAtiva() {
    try { const c = JSON.parse(localStorage.getItem(KEY_ATIVA)); if (c) return merge(DEFAULTS, c); } catch (e) {}
    return clone(DEFAULTS);
  }
  window.RMA = { geoEnsure, GEO_PLANOS, GEO_DESC, geoSync, doresSel, appFlags, principal, PRODUTOS, APP_ITENS, slides, KEY_ATIVA, DEFAULTS, EXEMPLO, fill, clone, merge, uid, brl, compute, loadStore, saveStore, loadAtiva };
})();
