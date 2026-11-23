/* @ds-bundle: {"format":4,"namespace":"RankDesignSystem_492cab","components":[{"name":"AgentCard","sourcePath":"components/ai/AgentCard.jsx"},{"name":"AgentToolSelector","sourcePath":"components/ai/AgentToolSelector.jsx"},{"name":"ApprovalRequest","sourcePath":"components/ai/ApprovalRequest.jsx"},{"name":"ChatMessage","sourcePath":"components/ai/ChatMessage.jsx"},{"name":"CodeBlock","sourcePath":"components/ai/CodeBlock.jsx"},{"name":"CommandPalette","sourcePath":"components/ai/CommandPalette.jsx"},{"name":"CreditsMeter","sourcePath":"components/ai/CreditsMeter.jsx"},{"name":"GeneratedImageCard","sourcePath":"components/ai/GeneratedImageCard.jsx"},{"name":"GenerationIndicator","sourcePath":"components/ai/GenerationIndicator.jsx"},{"name":"ModelSelector","sourcePath":"components/ai/ModelSelector.jsx"},{"name":"ProjectCard","sourcePath":"components/ai/ProjectCard.jsx"},{"name":"PromptInput","sourcePath":"components/ai/PromptInput.jsx"},{"name":"PromptSuggestions","sourcePath":"components/ai/PromptSuggestions.jsx"},{"name":"SourceCard","sourcePath":"components/ai/SourceCard.jsx"},{"name":"TaskExecution","sourcePath":"components/ai/TaskExecution.jsx"},{"name":"TaskStep","sourcePath":"components/ai/TaskStep.jsx"},{"name":"UploadArea","sourcePath":"components/ai/UploadArea.jsx"},{"name":"NumberedList","sourcePath":"components/brand/NumberedList.jsx"},{"name":"ProductCard","sourcePath":"components/brand/ProductCard.jsx"},{"name":"ProductName","sourcePath":"components/brand/ProductName.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/AvatarGroup.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Empty","sourcePath":"components/feedback/Empty.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"DropdownMenu","sourcePath":"components/navigation/DropdownMenu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Accordion","sourcePath":"components/overlays/Accordion.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"Drawer","sourcePath":"components/overlays/Drawer.jsx"},{"name":"GlassSurface","sourcePath":"components/surfaces/GlassSurface.jsx"}],"sourceHashes":{"components/ai/AgentCard.jsx":"d292adeb3785","components/ai/AgentToolSelector.jsx":"18ffc02d69fa","components/ai/ApprovalRequest.jsx":"9d6e51b57595","components/ai/ChatMessage.jsx":"d75d705c9747","components/ai/CodeBlock.jsx":"d58436189670","components/ai/CommandPalette.jsx":"3157c7343b2c","components/ai/CreditsMeter.jsx":"8675f42e61ee","components/ai/GeneratedImageCard.jsx":"080e7efd3cc3","components/ai/GenerationIndicator.jsx":"1724485618be","components/ai/ModelSelector.jsx":"559ace76532f","components/ai/ProjectCard.jsx":"14e10fac6104","components/ai/PromptInput.jsx":"ab7edc571522","components/ai/PromptSuggestions.jsx":"3d45a9037681","components/ai/SourceCard.jsx":"0f8ed20b4c6c","components/ai/TaskExecution.jsx":"f639306072ba","components/ai/TaskStep.jsx":"f364e46fdb7f","components/ai/UploadArea.jsx":"05c1816e5c66","components/brand/NumberedList.jsx":"0c8ba8196c10","components/brand/ProductCard.jsx":"935084064124","components/brand/ProductName.jsx":"e3aed694cf7a","components/brand/SectionHeading.jsx":"72a5f9184c4f","components/core/Avatar.jsx":"3d600a39af8d","components/core/AvatarGroup.jsx":"4ef39cb55746","components/core/Badge.jsx":"e7d8199b01e7","components/core/Button.jsx":"1d0b4533c323","components/core/Icon.jsx":"92180022ef73","components/core/IconButton.jsx":"365fac982173","components/core/Logo.jsx":"f97be958736a","components/core/Tooltip.jsx":"0a3d2d22c30a","components/feedback/Alert.jsx":"51a47b82ad0b","components/feedback/Empty.jsx":"6b0e33c7a61c","components/feedback/Progress.jsx":"272e736525f7","components/feedback/Skeleton.jsx":"42236d281309","components/feedback/Toast.jsx":"4eb7b010a4b8","components/forms/Checkbox.jsx":"4d13fed583dd","components/forms/Field.jsx":"e6e38537c6a2","components/forms/Input.jsx":"7c5e5e9cd194","components/forms/RadioGroup.jsx":"972cf6f19cbf","components/forms/Select.jsx":"c99ab5825be0","components/forms/Slider.jsx":"bf3ff4a26124","components/forms/Switch.jsx":"58b947c18576","components/navigation/Breadcrumb.jsx":"eb78dcf49384","components/navigation/DropdownMenu.jsx":"5294d4adfde0","components/navigation/Pagination.jsx":"0854071036a3","components/navigation/Tabs.jsx":"696308ccba05","components/overlays/Accordion.jsx":"a0bf599665d7","components/overlays/Dialog.jsx":"5989d15b1c69","components/overlays/Drawer.jsx":"3487766e20ec","components/surfaces/GlassSurface.jsx":"edc34e9638a4","doc-page.js":"f52ae9c02fca","ui_kits/platform/Home.jsx":"f9b3a58d5958","ui_kits/platform/ResultsPanel.jsx":"2b06dca03fef","ui_kits/platform/Workspace.jsx":"451cb8e1f495"},"inlinedExternals":[],"unexposedExports":[{"name":"materialName","sourcePath":"components/core/Icon.jsx"},{"name":"rankModels","sourcePath":"components/ai/ModelSelector.jsx"},{"name":"rkAsset","sourcePath":"components/core/Logo.jsx"}]} */

(() => {

const __ds_ns = (window.RankDesignSystem_492cab = window.RankDesignSystem_492cab || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/ai/GenerationIndicator.jsx
try { (() => {
function GenerationIndicator({
  label = 'Organizando as ideias',
  seconds
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-generation",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-generation__dots"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), label, seconds != null ? /*#__PURE__*/React.createElement("span", {
    className: "rk-generation__elapsed"
  }, seconds, "s") : null);
}
Object.assign(__ds_scope, { GenerationIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/GenerationIndicator.jsx", error: String((e && e.message) || e) }); }

// components/brand/NumberedList.jsx
try { (() => {
function NumberedList({
  label,
  items = [],
  tone = 'night'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-nl",
    "data-tone": tone
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "rk-nl__label"
  }, label) : null, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "rk-nl__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-nl__n"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rk-nl__t"
  }, it.title), it.meta ? /*#__PURE__*/React.createElement("span", {
    className: "rk-nl__m"
  }, it.meta) : null, it.description ? /*#__PURE__*/React.createElement("span", {
    className: "rk-nl__d"
  }, it.description) : null))));
}
Object.assign(__ds_scope, { NumberedList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NumberedList.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  tone = 'night',
  size = 'lg',
  split = false
}) {
  const n = tone === 'night';
  const eb = (number ? number + ' · ' : '') + (eyebrow || '');
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-sh",
    "data-tone": tone,
    "data-split": split ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-sh__head"
  }, eb ? /*#__PURE__*/React.createElement("span", {
    className: "rk-sh__eyebrow"
  }, eb) : null, /*#__PURE__*/React.createElement("h2", {
    className: 'rk-sh__title rk-sh__title--' + size
  }, title)), description ? /*#__PURE__*/React.createElement("p", {
    className: "rk-sh__desc"
  }, description) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const tints = ['#D6DCFF', '#E2F1EC', '#FFF1DE', '#E4E9EF', '#CFF3F9'];
function Avatar({
  name = '',
  size = 'md',
  color,
  src
}) {
  const ini = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  let h = 0;
  for (const ch of name) h = h * 31 + ch.charCodeAt(0) >>> 0;
  return /*#__PURE__*/React.createElement("span", {
    className: 'rk-avatar rk-avatar--' + size,
    style: {
      background: color || tints[h % tints.length]
    },
    title: name
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : ini);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/AvatarGroup.jsx
try { (() => {
function AvatarGroup({
  names = [],
  max = 3
}) {
  const extra = names.length - max;
  return /*#__PURE__*/React.createElement("span", {
    className: "rk-avatar-group"
  }, names.slice(0, max).map(n => /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    key: n,
    name: n
  })), extra > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "rk-avatar-extra"
  }, "+", extra) : null);
}
Object.assign(__ds_scope, { AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AvatarGroup.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const map = {
  'sparkles': 'auto_awesome',
  'zap': 'bolt',
  'bot': 'smart_toy',
  'house': 'home',
  'copy': 'content_copy',
  'arrow-up-right': 'arrow_outward',
  'file-text': 'description',
  'globe': 'language',
  'shield-check': 'verified_user',
  'clock-3': 'schedule',
  'eye': 'visibility',
  'compass': 'explore',
  'refresh-cw': 'refresh',
  'paperclip': 'attach_file',
  'loader-circle': 'progress_activity',
  'x': 'close',
  'chevron-down': 'expand_more',
  'arrow-right': 'arrow_forward',
  'arrow-left': 'arrow_back',
  'arrow-up': 'arrow_upward',
  'square': 'stop',
  'play': 'play_arrow',
  'plus': 'add',
  'trash-2': 'delete',
  'circle-check': 'check_circle',
  'triangle-alert': 'warning',
  'circle-alert': 'error',
  'thumbs-up': 'thumb_up',
  'thumbs-down': 'thumb_down',
  'code-xml': 'code',
  'wand-sparkles': 'auto_fix_high',
  'circle-dashed': 'radio_button_unchecked',
  'circle-slash': 'block',
  'rotate-ccw': 'undo',
  'gauge': 'speed',
  'brain': 'psychology',
  'list-checks': 'checklist',
  'message-square': 'chat_bubble',
  'folder-plus': 'create_new_folder',
  'megaphone': 'campaign',
  'chart-no-axes-column': 'bar_chart',
  'scan-search': 'manage_search',
  'layout-panel-left': 'space_dashboard',
  'panel-right-open': 'right_panel_open',
  'panel-right-close': 'right_panel_close',
  'maximize-2': 'open_in_full',
  'info': 'info'
};
const materialName = n => {
  const k = String(n || '');
  return map[k] || k.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/-/g, '_').toLowerCase();
};
function Icon({
  name,
  size,
  fill = false,
  weight = 300,
  className = '',
  style,
  ...rest
}) {
  const st = Object.assign({}, size ? {
    width: size,
    height: size
  } : null, style);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'rk-icon ' + className,
    "aria-hidden": "true",
    style: st
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "rk-icon__g",
    style: {
      fontVariationSettings: "'FILL' " + (fill ? 1 : 0) + ", 'wght' " + weight + ", 'GRAD' 0, 'opsz' 24"
    }
  }, materialName(name)));
}
Object.assign(__ds_scope, { materialName, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/ai/CommandPalette.jsx
try { (() => {
const defaults = [{
  group: 'Navegar',
  items: [{
    label: 'Início',
    icon: 'house',
    color: 'var(--rank-teal-mint)',
    kbd: 'G H'
  }, {
    label: 'Workspace do agente',
    icon: 'bot',
    color: 'var(--rank-vibrant-cyan)'
  }, {
    label: 'Projetos',
    icon: 'folder',
    color: 'var(--rank-deep-purple)'
  }]
}, {
  group: 'Ações',
  items: [{
    label: 'Criar projeto',
    icon: 'plus',
    color: 'var(--rank-forest-emerald)',
    kbd: 'N'
  }, {
    label: 'Baixar tokens',
    icon: 'download',
    color: 'var(--rank-coral-spice)'
  }]
}];
function CommandPalette({
  open = true,
  onClose,
  groups = defaults,
  onSelect,
  inline = false
}) {
  const [q, setQ] = React.useState('');
  const [a, setA] = React.useState(0);
  const flat = [];
  groups.forEach(g => g.items.forEach(it => {
    if (it.label.toLowerCase().includes(q.toLowerCase())) flat.push(Object.assign({
      group: g.group
    }, it));
  }));
  if (!open) return null;
  const choose = it => {
    onSelect && onSelect(it);
    onClose && onClose();
  };
  const box = /*#__PURE__*/React.createElement("div", {
    className: "rk-command",
    role: "dialog",
    "aria-label": "Command palette",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-command__search"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: !inline,
    placeholder: "O que voc\xEA est\xE1 procurando?",
    value: q,
    onChange: e => {
      setQ(e.target.value);
      setA(0);
    },
    onKeyDown: e => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setA(Math.min(a + 1, flat.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setA(Math.max(a - 1, 0));
      }
      if (e.key === 'Enter' && flat[a]) choose(flat[a]);
      if (e.key === 'Escape' && onClose) onClose();
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rk-command__list"
  }, flat.length ? flat.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, i === 0 || flat[i - 1].group !== it.group ? /*#__PURE__*/React.createElement("div", {
    className: "rk-command__group"
  }, it.group) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "rk-command__item",
    "data-active": i === a,
    onMouseEnter: () => setA(i),
    onClick: () => choose(it)
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-command__app",
    style: {
      background: it.color
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon
  })), it.label, it.kbd ? /*#__PURE__*/React.createElement("kbd", null, it.kbd) : null))) : /*#__PURE__*/React.createElement("div", {
    className: "rk-command__group",
    style: {
      padding: 20,
      textAlign: 'center'
    }
  }, "Nada encontrado para \u201C", q, "\u201D.")), /*#__PURE__*/React.createElement("div", {
    className: "rk-command__foot"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("kbd", null, "\u2191"), /*#__PURE__*/React.createElement("kbd", null, "\u2193"), " navegar"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("kbd", null, "\u21B5"), " abrir \xB7 ", /*#__PURE__*/React.createElement("kbd", null, "esc"), " fechar")));
  return inline ? box : /*#__PURE__*/React.createElement("div", {
    className: "rk-overlay",
    style: {
      placeItems: 'start center',
      paddingTop: '14vh'
    },
    onClick: onClose
  }, box);
}
Object.assign(__ds_scope, { CommandPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// components/ai/ModelSelector.jsx
try { (() => {
const rankModels = [{
  name: 'Rank Pro',
  description: 'Para ideias que vão além.',
  icon: 'sparkles'
}, {
  name: 'Rank Flash',
  description: 'Velocidade para o dia a dia.',
  icon: 'zap'
}, {
  name: 'Rank Vision',
  description: 'Uma nova forma de enxergar.',
  icon: 'image'
}];
function ModelSelector({
  value,
  defaultValue = 'Rank Pro',
  onChange,
  models = rankModels,
  footer = true
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value !== undefined ? value : v;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": "Modelo de intelig\xEAncia artificial",
    className: "rk-models"
  }, models.map(m => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: m.name,
    role: "radio",
    "aria-checked": cur === m.name,
    className: "rk-model",
    onClick: () => {
      setV(m.name);
      onChange && onChange(m.name);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-model__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: m.icon
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, m.name), /*#__PURE__*/React.createElement("small", null, m.description)), /*#__PURE__*/React.createElement("span", {
    className: "rk-model__dot"
  })))), footer ? /*#__PURE__*/React.createElement("div", {
    className: "rk-models__foot",
    style: {
      marginTop: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "gauge"
  }), "R\xE1pido"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "brain"
  }), "Racioc\xEDnio avan\xE7ado")) : null);
}
Object.assign(__ds_scope, { rankModels, ModelSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/ModelSelector.jsx", error: String((e && e.message) || e) }); }

// components/ai/PromptSuggestions.jsx
try { (() => {
function PromptSuggestions({
  items = [{
    label: 'Criar uma imagem',
    icon: 'image'
  }, {
    label: 'Explorar uma ideia',
    icon: 'lightbulb'
  }, {
    label: 'Planejar um projeto',
    icon: 'list-checks'
  }],
  onSelect,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'rk-chips' + (dark ? ' rk-chips--dark' : '')
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: it.label,
    onClick: () => onSelect && onSelect(it.label)
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon
  }) : null, it.label)));
}
Object.assign(__ds_scope, { PromptSuggestions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/PromptSuggestions.jsx", error: String((e && e.message) || e) }); }

// components/ai/SourceCard.jsx
try { (() => {
function SourceCard({
  title,
  domain,
  href = '#',
  icon = 'file-text'
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "rk-source",
    href: href,
    target: href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-model__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement("small", null, domain)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right"
  }));
}
Object.assign(__ds_scope, { SourceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/SourceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  icon,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'rk-badge' + (tone !== 'neutral' ? ' rk-badge--' + tone : '') + (className ? ' ' + className : '')
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/ai/TaskStep.jsx
try { (() => {
const st = {
  waiting: ['circle-dashed', 'Aguardando', null],
  running: ['loader-circle', 'Em andamento', 'blue'],
  done: ['check', 'Concluída', 'green'],
  failed: ['x', 'Falhou', 'red']
};
function TaskStep({
  title,
  state = 'waiting',
  details,
  defaultOpen = false
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const s = st[state];
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-task"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "rk-task__trigger",
    "aria-expanded": open,
    onClick: () => details && setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", {
    className: 'rk-task__state rk-task__state--' + state
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s[0],
    className: state === 'running' ? 'rk-spin' : ''
  })), /*#__PURE__*/React.createElement("span", {
    className: "rk-task__title"
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: s[2] || 'neutral'
  }, s[1]), details ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    className: "rk-task__chev"
  }) : null), open && details ? /*#__PURE__*/React.createElement("div", {
    className: "rk-task__details"
  }, details) : null);
}
Object.assign(__ds_scope, { TaskStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/TaskStep.jsx", error: String((e && e.message) || e) }); }

// components/ai/TaskExecution.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TaskExecution({
  title = 'Campanha preparada',
  steps = [],
  defaultOpen = true
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const done = steps.filter(s => s.state === 'done').length;
  const running = steps.some(s => s.state === 'running');
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-task-exec"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      border: 0,
      background: 'none',
      padding: '0 0 8px',
      cursor: 'pointer',
      font: '500 12px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'rk-task__state ' + (running ? 'rk-task__state--running' : 'rk-task__state--done')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: running ? 'sparkles' : 'check'
  })), title, /*#__PURE__*/React.createElement("small", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400,
      fontSize: 11
    }
  }, done, "/", steps.length, " etapas"), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      marginLeft: 'auto',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 200ms var(--ease-out)'
    }
  })), open ? steps.map(s => /*#__PURE__*/React.createElement(__ds_scope.TaskStep, _extends({
    key: s.title
  }, s))) : null);
}
Object.assign(__ds_scope, { TaskExecution });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/TaskExecution.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  glow = false,
  onDark = false,
  shape = 'pill',
  icon,
  iconRight,
  className = '',
  children,
  disabled,
  type = 'button',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cx('rk-btn', 'rk-btn--' + variant, size !== 'md' && 'rk-btn--' + size, glow && 'rk-btn--glow', onDark && 'rk-btn--on-dark', shape === 'square' && 'rk-btn--square', className),
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    className: "rk-spin"
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/ai/AgentCard.jsx
try { (() => {
function AgentCard({
  name = 'Nova',
  role = 'Estrategista de marca',
  description = 'Lê o contexto, cruza sinais de mercado e propõe a próxima melhor ação para a sua marca.',
  icon = 'compass',
  defaultActive = true,
  onToggle
}) {
  const [on, setOn] = React.useState(defaultActive);
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-agent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-agent__mark"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement("h4", null, name), /*#__PURE__*/React.createElement("div", {
    className: "rk-agent__role"
  }, role), /*#__PURE__*/React.createElement("p", null, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onDark: true,
    variant: "secondary",
    icon: on ? 'pause' : 'play',
    onClick: () => {
      setOn(!on);
      onToggle && onToggle(!on);
    }
  }, on ? 'Pausar agente' : 'Ativar agente'), /*#__PURE__*/React.createElement("div", {
    className: "rk-agent__foot"
  }, /*#__PURE__*/React.createElement("span", null, on ? 'Ativo agora' : 'Em pausa'), /*#__PURE__*/React.createElement("span", null, "3 ferramentas")));
}
Object.assign(__ds_scope, { AgentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/AgentCard.jsx", error: String((e && e.message) || e) }); }

// components/ai/ApprovalRequest.jsx
try { (() => {
function ApprovalRequest({
  title = 'Sua aprovação é importante',
  description = 'O agente quer publicar 3 peças no calendário da campanha.',
  summary = '3 imagens · 3 textos',
  summaryDetail = 'Nenhuma publicação externa',
  onApprove,
  onCancel
}) {
  const [s, setS] = React.useState('pending');
  const t = s === 'approved' ? 'Ação aprovada' : s === 'cancelled' ? 'Ação cancelada' : title;
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-approval",
    "data-status": s
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-approval__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s === 'approved' ? 'circle-check' : s === 'cancelled' ? 'circle-slash' : 'shield-check'
  })), /*#__PURE__*/React.createElement("div", {
    className: "rk-approval__body"
  }, /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, s === 'cancelled' ? 'Nenhuma alteração foi feita no projeto.' : description), /*#__PURE__*/React.createElement("div", {
    className: "rk-approval__summary"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "layers",
    size: 16
  }), /*#__PURE__*/React.createElement("div", null, summary, /*#__PURE__*/React.createElement("small", null, summaryDetail))), s === 'pending' ? /*#__PURE__*/React.createElement("div", {
    className: "rk-row"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "check",
    onClick: () => {
      setS('approved');
      onApprove && onApprove();
    }
  }, "Aprovar"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: () => {
      setS('cancelled');
      onCancel && onCancel();
    }
  }, "Cancelar")) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    icon: "rotate-ccw",
    onClick: () => setS('pending')
  }, "Desfazer")));
}
Object.assign(__ds_scope, { ApprovalRequest });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/ApprovalRequest.jsx", error: String((e && e.message) || e) }); }

// components/ai/ProjectCard.jsx
try { (() => {
function ProjectCard({
  name = 'Identidade da Aurora',
  description = 'Direção visual, tom de voz e primeiras peças para o lançamento.',
  updated = 'Atualizado há 2 horas',
  icon = 'folder',
  members = ['Marina Lima', 'Rafael Costa', 'Júlia Prado'],
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-project"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-project__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement(__ds_scope.AvatarGroup, {
    names: members
  })), /*#__PURE__*/React.createElement("h4", null, name), /*#__PURE__*/React.createElement("p", null, description), /*#__PURE__*/React.createElement("div", {
    className: "rk-project__meta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock-3"
  }), updated), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: onOpen
  }, "Abrir projeto"));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const ROOT = (() => {
  try {
    const s = document.currentScript && document.currentScript.src;
    return s ? new URL('.', s).href : '';
  } catch (e) {
    return '';
  }
})();
const rkAsset = p => ROOT + p;
const files = {
  wordmark: {
    black: 'rank-logo-preto',
    white: 'rank-logo-branco',
    blue: 'rank-logo-azul',
    cyan: 'rank-logo-ciano'
  },
  symbol: {
    black: 'rank-simbolo-preto',
    white: 'rank-simbolo-branco',
    blue: 'rank-simbolo-azul',
    cyan: 'rank-simbolo-azul'
  }
};
function Logo({
  variant = 'wordmark',
  color = 'black',
  height = 28,
  src,
  alt = 'Rank',
  className = ''
}) {
  const f = (files[variant] || files.wordmark)[color] || files[variant].black;
  return /*#__PURE__*/React.createElement("span", {
    className: 'rk-logo ' + className,
    style: {
      height: height
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src || rkAsset('assets/logo/' + f + '.svg'),
    alt: alt
  }));
}
Object.assign(__ds_scope, { rkAsset, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/ProductCard.jsx
try { (() => {
const colors = {
  rankmyapp: 'var(--product-rankmyapp)',
  rankmyads: 'var(--product-rankmyads)',
  rankmygeo: 'var(--product-rankmygeo)',
  intelligence: 'var(--rank-ice-white)'
};
function ProductCard({
  product = 'rankmyapp',
  number = '01',
  family = 'Organic Solutions',
  name = 'RankMyApp',
  tagline,
  description,
  jobsLabel = 'Jobs to be done',
  jobs = [],
  accent,
  children
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "rk-pc",
    style: {
      '--rk-pc-accent': accent || colors[product] || colors.rankmyapp
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-pc__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-pc__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-pc__fam"
  }, /*#__PURE__*/React.createElement("span", null, number), family), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "rk-pc__name"
  }, /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.rkAsset('assets/logo/rank-simbolo-branco.svg'),
    alt: "",
    "aria-hidden": "true"
  }), name), tagline ? /*#__PURE__*/React.createElement("span", {
    className: "rk-pc__tag"
  }, tagline) : null), description ? /*#__PURE__*/React.createElement("p", {
    className: "rk-pc__desc"
  }, description) : null), jobs.length ? /*#__PURE__*/React.createElement(__ds_scope.NumberedList, {
    label: jobsLabel,
    items: jobs
  }) : null), children);
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/ProductName.jsx
try { (() => {
function ProductName({
  name = 'RankMyApp',
  color = 'white',
  className = '',
  style
}) {
  const f = color === 'black' ? 'rank-simbolo-preto' : color === 'blue' ? 'rank-simbolo-azul' : 'rank-simbolo-branco';
  return /*#__PURE__*/React.createElement("span", {
    className: 'rk-product ' + className,
    style: style
  }, /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.rkAsset('assets/logo/' + f + '.svg'),
    alt: "",
    "aria-hidden": "true"
  }), name);
}
Object.assign(__ds_scope, { ProductName });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ProductName.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  side = 'top',
  open,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "rk-tip",
    "data-open": open ? 'true' : undefined
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: 'rk-tip__bubble' + (side === 'bottom' ? ' rk-tip__bubble--bottom' : '')
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function IconButton({
  label,
  icon,
  variant = 'ghost',
  size = 'md',
  onDark = false,
  shape = 'pill',
  tooltip = true,
  className = '',
  type = 'button',
  ...rest
}) {
  const b = /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    "aria-label": label,
    className: cx('rk-btn', 'rk-btn--' + variant, 'rk-btn--icon', size === 'sm' && 'rk-btn--sm', onDark && 'rk-btn--on-dark', shape === 'square' && 'rk-btn--square', className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }));
  return tooltip ? /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    label: label
  }, b) : b;
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/ai/ChatMessage.jsx
try { (() => {
function ChatMessage({
  role = 'assistant',
  author,
  model = 'Rank Pro',
  time,
  children,
  onRegenerate,
  onCopy
}) {
  const [fb, setFb] = React.useState(null);
  if (role === 'user') return /*#__PURE__*/React.createElement("div", {
    className: "rk-msg rk-msg--user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-msg__head"
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: author || 'Você',
    size: "sm"
  }), /*#__PURE__*/React.createElement("strong", null, author || 'Você'), time ? /*#__PURE__*/React.createElement("span", {
    className: "rk-msg__time"
  }, time) : null), /*#__PURE__*/React.createElement("p", null, children));
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-msg rk-msg--assistant"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-msg__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-msg__mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.rkAsset('assets/logo/rank-simbolo-branco.svg'),
    alt: ""
  })), /*#__PURE__*/React.createElement("strong", null, "Rank"), /*#__PURE__*/React.createElement(__ds_scope.Badge, null, model), time ? /*#__PURE__*/React.createElement("span", {
    className: "rk-msg__time"
  }, time) : null), /*#__PURE__*/React.createElement("p", null, children), /*#__PURE__*/React.createElement("div", {
    className: "rk-msg__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "copy",
    label: "Copiar resposta",
    onClick: onCopy
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "thumbs-up",
    label: "Resposta \xFAtil",
    "aria-pressed": fb === 'up',
    onClick: () => setFb(fb === 'up' ? null : 'up')
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "thumbs-down",
    label: "Resposta n\xE3o \xFAtil",
    "aria-pressed": fb === 'down',
    onClick: () => setFb(fb === 'down' ? null : 'down')
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "refresh-cw",
    label: "Gerar novamente",
    onClick: onRegenerate
  })));
}
Object.assign(__ds_scope, { ChatMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/ChatMessage.jsx", error: String((e && e.message) || e) }); }

// components/ai/CodeBlock.jsx
try { (() => {
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
function hl(code) {
  return esc(code).replace(/("[^"]*"|'[^']*')/g, '<span class="s">$1</span>').replace(/\b(const|let|await|async|return|function|import|from|export|new)\b/g, '<span class="k">$1</span>');
}
function CodeBlock({
  code = 'const projeto = await rank.projetos.criar({\n  nome: "Identidade da Aurora",\n  modelo: "rank-pro",\n});',
  language = 'TypeScript'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-code"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "code-xml"
  }), language), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "copy",
    label: "Copiar c\xF3digo",
    size: "sm",
    onDark: true,
    tooltip: false,
    onClick: () => navigator.clipboard && navigator.clipboard.writeText(code)
  })), /*#__PURE__*/React.createElement("pre", {
    dangerouslySetInnerHTML: {
      __html: hl(code)
    }
  }));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/ai/GeneratedImageCard.jsx
try { (() => {
function GeneratedImageCard({
  src,
  title = 'Atmosfera azul',
  description = 'Luz intencional sobre um fundo escuro, no estilo da marca.',
  ratio = '16:9',
  loading = false,
  onVariation
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-image-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-image-card__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: src || __ds_scope.rkAsset('assets/imagery/gradient-blue-glow.jpg'),
    alt: title
  }), /*#__PURE__*/React.createElement("span", {
    className: "rk-image-card__ratio"
  }, ratio), loading ? /*#__PURE__*/React.createElement("div", {
    className: "rk-image-card__loading"
  }, /*#__PURE__*/React.createElement(__ds_scope.GenerationIndicator, {
    label: "Criando uma varia\xE7\xE3o"
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "rk-image-card__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-between"
  }, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "download",
    label: "Baixar imagem",
    size: "sm"
  })), /*#__PURE__*/React.createElement("p", null, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    icon: "wand-sparkles",
    disabled: loading,
    onClick: onVariation
  }, "Criar varia\xE7\xE3o")));
}
Object.assign(__ds_scope, { GeneratedImageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/GeneratedImageCard.jsx", error: String((e && e.message) || e) }); }

// components/ai/PromptInput.jsx
try { (() => {
function PromptInput({
  value,
  defaultValue = '',
  onChange,
  onSend,
  onStop,
  busy = false,
  model = 'Rank Pro',
  onModelClick,
  placeholder = 'Uma ideia, uma pergunta, um novo começo…',
  dark = false,
  attachments = [],
  onRemoveAttachment,
  rows = 3
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value !== undefined ? value : v;
  const set = t => {
    setV(t);
    onChange && onChange(t);
  };
  const send = () => {
    if (!cur.trim() || busy) return;
    onSend && onSend(cur);
    if (value === undefined) setV('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'rk-composer' + (dark ? ' rk-composer--dark' : '')
  }, attachments.length ? /*#__PURE__*/React.createElement("div", {
    className: "rk-attach-chips"
  }, attachments.map(a => /*#__PURE__*/React.createElement("span", {
    key: a
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "file-text",
    size: 12
  }), a, onRemoveAttachment ? /*#__PURE__*/React.createElement("button", {
    "aria-label": 'Remover ' + a,
    onClick: () => onRemoveAttachment(a)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null))) : null, /*#__PURE__*/React.createElement("textarea", {
    "aria-label": "Seu prompt",
    rows: rows,
    placeholder: placeholder,
    value: cur,
    onChange: e => set(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-composer__bar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "paperclip",
    label: "Anexar arquivo ao prompt",
    size: "sm",
    onDark: dark
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "sparkles",
    iconRight: "chevron-down",
    onDark: dark,
    onClick: onModelClick
  }, model)), busy ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "rk-composer__send",
    icon: "square",
    label: "Interromper gera\xE7\xE3o",
    onClick: onStop
  }) : /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "rk-composer__send",
    icon: "arrow-up",
    label: "Enviar prompt",
    disabled: !cur.trim(),
    onClick: send
  })));
}
Object.assign(__ds_scope, { PromptInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/PromptInput.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const ic = {
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  error: 'circle-alert'
};
function Alert({
  tone = 'info',
  title,
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: tone === 'error' ? 'alert' : 'status',
    className: 'rk-alert' + (tone !== 'info' ? ' rk-alert--' + tone : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ic[tone]
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-alert__title"
  }, title), children ? /*#__PURE__*/React.createElement("div", {
    className: "rk-alert__desc"
  }, children) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Empty.jsx
try { (() => {
function Empty({
  icon = 'folder-open',
  title,
  description,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-empty__media"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement("h4", null, title), description ? /*#__PURE__*/React.createElement("p", null, description) : null, action || null);
}
Object.assign(__ds_scope, { Empty });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Empty.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  label,
  height
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-progress",
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": label,
    style: height ? {
      height: height
    } : undefined
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: Math.max(0, Math.min(100, value)) + '%'
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/ai/CreditsMeter.jsx
try { (() => {
function CreditsMeter({
  used = 36,
  limit = 1000,
  dark = false,
  onBuy
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'rk-credits' + (dark ? ' rk-credits--dark' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-eyebrow",
    style: dark ? {
      color: '#fff'
    } : null
  }, "Cr\xE9ditos"), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "zap",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    className: "rk-credits__value"
  }, (limit - used).toLocaleString('pt-BR'), /*#__PURE__*/React.createElement("span", null, "dispon\xEDveis")), /*#__PURE__*/React.createElement(__ds_scope.Progress, {
    value: used / limit * 100,
    label: "Cr\xE9ditos consumidos"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-between rk-field__hint"
  }, /*#__PURE__*/React.createElement("span", null, used, " consumidos"), /*#__PURE__*/React.createElement("span", null, "Limite ", limit.toLocaleString('pt-BR'))), /*#__PURE__*/React.createElement("div", {
    className: "rk-credits__detail"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "info"
  }), "Uma execu\xE7\xE3o completa usa 36 cr\xE9ditos."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'secondary' : 'primary',
    onDark: dark,
    onClick: onBuy
  }, "Adicionar cr\xE9ditos"));
}
Object.assign(__ds_scope, { CreditsMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/CreditsMeter.jsx", error: String((e && e.message) || e) }); }

// components/ai/UploadArea.jsx
try { (() => {
function UploadArea({
  files = [],
  onFiles
}) {
  const [drag, setDrag] = React.useState(false);
  const ref = React.useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-upload",
    "data-drag": drag ? 'true' : undefined,
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      onFiles && onFiles(Array.from(e.dataTransfer.files));
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cloud-upload"
  }), /*#__PURE__*/React.createElement("strong", null, "Arraste seus arquivos"), /*#__PURE__*/React.createElement("p", null, "PDF, TXT, MD e imagens at\xE9 20 MB"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => ref.current && ref.current.click()
  }, "Escolher arquivos"), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "file",
    multiple: true,
    hidden: true,
    onChange: e => onFiles && onFiles(Array.from(e.target.files))
  })), files.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.name,
    className: "rk-file",
    "data-error": f.error ? 'true' : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: f.error ? 'circle-alert' : 'file-text'
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, f.name), /*#__PURE__*/React.createElement("small", null, f.error || (f.size || '') + (f.progress < 100 ? ' · ' + f.progress + '%' : ' · Pronto')), !f.error && f.progress < 100 ? /*#__PURE__*/React.createElement(__ds_scope.Progress, {
    value: f.progress,
    height: 4
  }) : null))));
}
Object.assign(__ds_scope, { UploadArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/UploadArea.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = '100%',
  height = 12,
  radius
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-skeleton",
    "aria-hidden": "true",
    style: {
      width: width,
      height: height,
      borderRadius: radius
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ic = {
  info: 'info',
  success: 'circle-check',
  error: 'circle-alert'
};
function Toast({
  tone = 'info',
  title,
  description,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: 'rk-toast' + (tone !== 'info' ? ' rk-toast--' + tone : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic[tone]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, title), description ? /*#__PURE__*/React.createElement("p", null, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: "sm",
    tooltip: false,
    onClick: onClose
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  disabled,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "rk-choice",
    "data-disabled": disabled ? 'true' : undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: "rk-check",
    disabled: disabled
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  icon,
  multiline = false,
  invalid,
  className = '',
  ...rest
}) {
  const p = Object.assign({
    className: 'rk-input ' + className,
    'aria-invalid': invalid ? 'true' : undefined
  }, rest);
  const el = multiline ? /*#__PURE__*/React.createElement("textarea", p) : /*#__PURE__*/React.createElement("input", p);
  return icon ? /*#__PURE__*/React.createElement("span", {
    className: "rk-input-wrap"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }), el) : el;
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  id,
  children,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const desc = error ? fid + '-err' : hint ? fid + '-hint' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "rk-field__label",
    htmlFor: fid
  }, label), children || /*#__PURE__*/React.createElement(__ds_scope.Input, _extends({
    id: fid,
    invalid: !!error,
    "aria-describedby": desc
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    id: fid + '-err',
    className: "rk-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    id: fid + '-hint',
    className: "rk-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = 'column'
}) {
  const auto = React.useId();
  const [v, setV] = React.useState(defaultValue);
  const cur = value !== undefined ? value : v;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 18 : 6
    }
  }, options.map(o => {
    const it = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("label", {
      key: it.value,
      className: "rk-choice",
      "data-disabled": it.disabled ? 'true' : undefined
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      className: "rk-radio",
      name: name || auto,
      value: it.value,
      checked: cur === it.value,
      disabled: it.disabled,
      onChange: () => {
        setV(it.value);
        onChange && onChange(it.value);
      }
    }), it.label);
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: 'rk-input ' + className
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v.value,
      value: v.value
    }, v.label);
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slider({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  ...rest
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value !== undefined ? value : v;
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "range",
    className: "rk-slider",
    min: min,
    max: max,
    step: step,
    value: cur,
    style: {
      '--rk-fill': (cur - min) / (max - min) * 100 + '%'
    },
    onChange: e => {
      const n = Number(e.target.value);
      setV(n);
      onChange && onChange(n);
    }
  }, rest));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled
}) {
  const [v, setV] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : v;
  const sw = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    className: "rk-switch",
    disabled: disabled,
    "aria-label": typeof label === 'string' ? label : undefined,
    onClick: () => {
      setV(!on);
      onChange && onChange(!on);
    }
  });
  return label ? /*#__PURE__*/React.createElement("label", {
    className: "rk-choice",
    "data-disabled": disabled ? 'true' : undefined
  }, sw, label) : sw;
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/ai/AgentToolSelector.jsx
try { (() => {
function AgentToolSelector({
  tools = [{
    icon: 'globe',
    name: 'Busca na web',
    description: 'Consultar referências'
  }, {
    icon: 'file-text',
    name: 'Arquivos',
    description: 'Ler o contexto do projeto'
  }, {
    icon: 'image',
    name: 'Imagens',
    description: 'Criar novas perspectivas'
  }],
  value,
  defaultValue = ['Busca na web', 'Arquivos'],
  onChange
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value || v;
  const t = n => {
    const nx = cur.includes(n) ? cur.filter(x => x !== n) : [...cur, n];
    setV(nx);
    onChange && onChange(nx);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-tools"
  }, tools.map(it => /*#__PURE__*/React.createElement("div", {
    className: "rk-tool",
    key: it.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-model__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, it.name), /*#__PURE__*/React.createElement("small", null, it.description)), /*#__PURE__*/React.createElement(__ds_scope.Switch, {
    checked: cur.includes(it.name),
    onChange: () => t(it.name)
  }))));
}
Object.assign(__ds_scope, { AgentToolSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ai/AgentToolSelector.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: "rk-breadcrumb"
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#'
    }, it.label), !last ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right"
    }) : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DropdownMenu.jsx
try { (() => {
function DropdownMenu({
  label = 'Opções',
  icon,
  items = [],
  align = 'start',
  variant = 'secondary',
  defaultOpen = false
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const f = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const k = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', f);
    document.addEventListener('keydown', k);
    return () => {
      document.removeEventListener('mousedown', f);
      document.removeEventListener('keydown', k);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-menu",
    ref: ref
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: variant,
    icon: icon,
    iconRight: "chevron-down",
    "aria-haspopup": "menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, label), open ? /*#__PURE__*/React.createElement("div", {
    role: "menu",
    className: 'rk-menu__content' + (align === 'end' ? ' rk-menu__content--end' : '')
  }, items.map((it, i) => it === 'separator' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rk-menu__sep"
  }) : it.group ? /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rk-menu__label"
  }, it.group) : /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "menuitem",
    className: "rk-menu__item",
    disabled: it.disabled,
    onClick: () => {
      setOpen(false);
      it.onSelect && it.onSelect();
    }
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon
  }) : null, it.label))) : null);
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page,
  defaultPage = 1,
  total = 5,
  onChange
}) {
  const [p, setP] = React.useState(defaultPage);
  const cur = page !== undefined ? page : p;
  const go = n => {
    setP(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagina\xE7\xE3o",
    className: "rk-pagination"
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Anterior",
    disabled: cur <= 1,
    onClick: () => go(cur - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left"
  })), Array.from({
    length: total
  }, (_, i) => i + 1).map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    "aria-current": n === cur ? 'page' : undefined,
    onClick: () => go(n)
  }, n)), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Pr\xF3xima",
    disabled: cur >= total,
    onClick: () => go(cur + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right"
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  dark = false,
  block = false,
  label
}) {
  const first = items[0] && (items[0].value || items[0]);
  const [v, setV] = React.useState(defaultValue || first);
  const cur = value !== undefined ? value : v;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": label,
    className: 'rk-tabs' + (dark ? ' rk-tabs--dark' : '') + (block ? ' rk-tabs--block' : '')
  }, items.map(o => {
    const it = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "tab",
      key: it.value,
      "aria-selected": cur === it.value,
      className: "rk-tabs__tab",
      onClick: () => {
        setV(it.value);
        onChange && onChange(it.value);
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon
    }) : null, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        opacity: .7
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  multiple = false
}) {
  const [open, setOpen] = React.useState(defaultOpen == null ? [] : [defaultOpen]);
  const t = i => setOpen(o => o.includes(i) ? o.filter(x => x !== i) : multiple ? [...o, i] : [i]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-accordion"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rk-accordion__item"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "rk-accordion__trigger",
    "aria-expanded": open.includes(i),
    onClick: () => t(i)
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon
  }) : null, it.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down"
  })), open.includes(i) ? /*#__PURE__*/React.createElement("div", {
    className: "rk-accordion__panel"
  }, it.content) : null)));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  description,
  footer,
  children,
  inline = false
}) {
  React.useEffect(() => {
    if (!open || inline) return;
    const k = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open, inline]);
  if (!open) return null;
  const box = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    className: "rk-dialog",
    onClick: e => e.stopPropagation()
  }, onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    className: "rk-dialog__close",
    icon: "x",
    label: "Fechar",
    size: "sm",
    tooltip: false,
    onClick: onClose
  }) : null, /*#__PURE__*/React.createElement("h2", {
    className: "rk-dialog__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "rk-dialog__desc"
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "rk-dialog__body"
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    className: "rk-dialog__footer"
  }, footer) : null);
  return inline ? box : /*#__PURE__*/React.createElement("div", {
    className: "rk-overlay",
    onClick: onClose
  }, box);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Drawer.jsx
try { (() => {
function Drawer({
  open,
  onClose,
  title,
  description,
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-overlay rk-overlay--drawer",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("aside", {
    role: "dialog",
    "aria-modal": "true",
    className: "rk-drawer",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-between",
    style: {
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "rk-dialog__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "rk-dialog__desc"
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: "sm",
    tooltip: false,
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "rk-dialog__body"
  }, children)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassSurface.jsx
try { (() => {
function GlassSurface({
  material = 'frosted',
  as = 'div',
  className = '',
  style,
  children,
  ...rest
}) {
  return React.createElement(as, Object.assign({
    className: 'rk-glass rk-glass--' + material + (className ? ' ' + className : ''),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { GlassSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassSurface.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/platform/Home.jsx
try { (() => {
const {
  Button,
  IconButton,
  Avatar,
  Logo,
  Tabs,
  PromptInput,
  PromptSuggestions,
  ProjectCard,
  AgentCard,
  Icon
} = window.RankDesignSystem_492cab;
const homeScenes = [{
  src: '../../assets/imagery/portrait-smile-blue.jpg',
  title: 'Presença humana'
}, {
  src: '../../assets/imagery/ribbed-silhouette-sunset.jpg',
  title: 'Transparência'
}];
function HomeHeader({
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "home-header"
  }, /*#__PURE__*/React.createElement(Logo, {
    color: "white",
    height: 30
  }), /*#__PURE__*/React.createElement("nav", {
    className: "home-nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "active",
    href: "#"
  }, "In\xEDcio"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Projetos"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Agentes"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Biblioteca")), /*#__PURE__*/React.createElement("div", {
    className: "home-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "home-search",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), "Buscar", /*#__PURE__*/React.createElement("kbd", null, "\u2318K")), /*#__PURE__*/React.createElement(Avatar, {
    name: "Marina Lima",
    size: "sm",
    color: "rgba(255,255,255,.18)"
  })));
}
function Home({
  onStart,
  onSearch
}) {
  const [scene, setScene] = React.useState(0);
  const [mode, setMode] = React.useState('chat');
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    if (text) return;
    const id = setInterval(() => setScene(s => (s + 1) % homeScenes.length), 4000);
    return () => clearInterval(id);
  }, [text]);
  const go = d => setScene(s => (s + d + homeScenes.length) % homeScenes.length);
  return /*#__PURE__*/React.createElement("div", {
    className: "home",
    "data-screen-label": "Home"
  }, /*#__PURE__*/React.createElement("section", {
    className: "home-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-bg"
  }, homeScenes.map((s, i) => /*#__PURE__*/React.createElement("img", {
    key: s.src,
    src: s.src,
    alt: "",
    "data-active": i === scene
  }))), /*#__PURE__*/React.createElement(HomeHeader, {
    onSearch: onSearch
  }), /*#__PURE__*/React.createElement("span", {
    className: "home-edition"
  }, "RANK \xB7 2026"), /*#__PURE__*/React.createElement("div", {
    className: "home-copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "home-welcome"
  }, "Boa tarde, Marina."), /*#__PURE__*/React.createElement("h1", null, "A aten\xE7\xE3o atrai o olhar. ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "A prefer\xEAncia garante a escolha.")), /*#__PURE__*/React.createElement("p", {
    className: "home-intro"
  }, "N\xF3s decodificamos a aten\xE7\xE3o do cliente para tornar a sua empresa a marca preferida do consumidor, gerando crescimento previs\xEDvel e sustent\xE1vel."), /*#__PURE__*/React.createElement("div", {
    className: "home-prompt"
  }, /*#__PURE__*/React.createElement(Tabs, {
    dark: true,
    value: mode,
    onChange: setMode,
    items: [{
      value: 'chat',
      label: 'Conversar',
      icon: 'message-square'
    }, {
      value: 'explore',
      label: 'Explorar direções',
      icon: 'compass'
    }, {
      value: 'project',
      label: 'Criar projeto',
      icon: 'folder-plus'
    }]
  }), /*#__PURE__*/React.createElement(PromptInput, {
    dark: true,
    rows: 2,
    value: text,
    onChange: setText,
    onSend: t => onStart(t),
    placeholder: "Uma ideia, uma pergunta, um novo come\xE7o\u2026"
  }), /*#__PURE__*/React.createElement(PromptSuggestions, {
    dark: true,
    onSelect: l => setText(l),
    items: [{
      label: 'Planejar uma campanha',
      icon: 'megaphone'
    }, {
      label: 'Analisar a concorrência',
      icon: 'chart-no-axes-column'
    }, {
      label: 'Criar uma imagem',
      icon: 'image'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "home-scenes"
  }, /*#__PURE__*/React.createElement("span", {
    className: "idx"
  }, "0", scene + 1, " / 0", homeScenes.length), /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, homeScenes[scene].title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IconButton, {
    onDark: true,
    variant: "secondary",
    icon: "chevron-left",
    label: "Cen\xE1rio anterior",
    tooltip: false,
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(IconButton, {
    onDark: true,
    variant: "secondary",
    icon: "chevron-right",
    label: "Pr\xF3ximo cen\xE1rio",
    tooltip: false,
    onClick: () => go(1)
  })))), /*#__PURE__*/React.createElement("section", {
    className: "home-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-eyebrow"
  }, "Seus projetos"), /*#__PURE__*/React.createElement("h2", null, "Tudo come\xE7a com uma ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "palavra.")), /*#__PURE__*/React.createElement("div", {
    className: "home-grid"
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    name: "AURA \xB7 Lan\xE7amento",
    description: "Campanha de lan\xE7amento com dire\xE7\xE3o criativa, imagens e textos.",
    updated: "Atualizado agora",
    icon: "megaphone",
    onOpen: () => onStart('')
  }), /*#__PURE__*/React.createElement(ProjectCard, {
    name: "Raio-X competitivo",
    description: "Identifica\xE7\xE3o dos rivais de posicionamento no varejo digital.",
    updated: "Atualizado h\xE1 2 dias",
    icon: "scan-search",
    members: ['Rafael Costa', 'Júlia Prado']
  }), /*#__PURE__*/React.createElement(AgentCard, {
    name: "Nova",
    role: "Estrategista de marca"
  }))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/ResultsPanel.jsx
try { (() => {
const {
  Button: RButton,
  IconButton: RIconButton,
  Badge: RBadge,
  Tabs: RTabs,
  Skeleton: RSkeleton,
  CreditsMeter: RCredits,
  Icon: RIcon
} = window.RankDesignSystem_492cab;
function ResultsPanel({
  tab,
  setTab,
  status,
  busy,
  phase,
  spent,
  activity,
  images,
  caption,
  onClose,
  onApprove,
  onZoom,
  onAdjust,
  toast
}) {
  const ready = phase >= 3,
    copyReady = phase >= 4,
    ok = status === 'approved';
  return /*#__PURE__*/React.createElement("aside", {
    className: "ws-panel",
    "aria-label": "Resultados da campanha"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ws-panel-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rk-eyebrow"
  }, "SEU ESPA\xC7O DE CRIA\xC7\xC3O"), /*#__PURE__*/React.createElement("h2", null, "Da ideia ao resultado", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "."))), /*#__PURE__*/React.createElement(RIconButton, {
    onDark: true,
    icon: "panel-right-close",
    label: "Fechar painel",
    tooltip: false,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "ws-panel-tabs"
  }, /*#__PURE__*/React.createElement(RTabs, {
    block: true,
    value: tab,
    onChange: setTab,
    items: [{
      value: 'preview',
      label: 'Preview',
      icon: 'layout-panel-left'
    }, {
      value: 'files',
      label: 'Arquivos',
      icon: 'folder',
      count: 6
    }, {
      value: 'activity',
      label: 'Atividade',
      icon: 'clock-3'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "ws-scroll"
  }, tab === 'preview' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cmp-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "cmp-word"
  }, "AURA ", /*#__PURE__*/React.createElement("span", {
    className: "cmp-sub"
  }, "ONE")), /*#__PURE__*/React.createElement("p", null, "Campanha de lan\xE7amento")), /*#__PURE__*/React.createElement(RBadge, {
    tone: ok ? 'green' : busy ? 'blue' : 'neutral'
  }, ok ? 'Aprovada' : busy ? 'Em criação' : status === 'paused' ? 'Pausada' : 'Versão 1')), ready ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "cmp-hero",
    onClick: () => onZoom(0)
  }, /*#__PURE__*/React.createElement("img", {
    src: images[0].src,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "cmp-label"
  }, "AURA / ONE"), /*#__PURE__*/React.createElement("span", {
    className: "cmp-title"
  }, 'O mundo tem\noutro ritmo.')), /*#__PURE__*/React.createElement("div", {
    className: "cmp-thumbs"
  }, images.slice(1).map((im, i) => /*#__PURE__*/React.createElement("button", {
    key: im.src,
    onClick: () => onZoom(i + 1)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: im.src,
    alt: ""
  })), /*#__PURE__*/React.createElement("strong", null, im.title), /*#__PURE__*/React.createElement("small", null, im.format))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(RSkeleton, {
    height: 300,
    radius: 23
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(RSkeleton, {
    height: 100,
    radius: 14
  }), /*#__PURE__*/React.createElement(RSkeleton, {
    height: 100,
    radius: 14
  }))), copyReady ? /*#__PURE__*/React.createElement("div", {
    className: "cmp-caption"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-between"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(RIcon, {
    name: "message-square",
    size: 14
  }), " Legenda para o feed"), /*#__PURE__*/React.createElement(RIconButton, {
    icon: "copy",
    label: "Copiar legenda",
    size: "sm",
    onClick: () => toast('success', 'Legenda copiada')
  })), /*#__PURE__*/React.createElement("p", null, caption)) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      padding: '25px 0'
    }
  }, /*#__PURE__*/React.createElement(RSkeleton, null), /*#__PURE__*/React.createElement(RSkeleton, null), /*#__PURE__*/React.createElement(RSkeleton, {
    width: "70%"
  })), /*#__PURE__*/React.createElement("div", {
    className: 'ws-approval' + (ok ? ' ok' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "sym"
  }, /*#__PURE__*/React.createElement(RIcon, {
    name: ok ? 'circle-check' : 'shield-check'
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, ok ? 'Pronto para o próximo passo' : 'Seu olhar faz a diferença'), /*#__PURE__*/React.createElement("p", null, ok ? 'A campanha foi aprovada. As peças estão nos arquivos do projeto.' : 'Revise as imagens e os textos antes de aprovar a campanha.')), /*#__PURE__*/React.createElement("div", {
    className: "rk-row"
  }, ok ? /*#__PURE__*/React.createElement(RButton, {
    variant: "secondary",
    icon: "folder",
    onClick: () => setTab('files')
  }, "Abrir arquivos") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RButton, {
    glow: true,
    icon: "check",
    disabled: !copyReady || busy,
    onClick: onApprove
  }, "Aprovar campanha"), /*#__PURE__*/React.createElement(RButton, {
    variant: "ghost",
    size: "sm",
    disabled: busy,
    onClick: onAdjust
  }, "Pedir ajustes")))), /*#__PURE__*/React.createElement("p", {
    className: "ws-disc"
  }, "Campanha fict\xEDcia \xB7 nenhuma publica\xE7\xE3o autom\xE1tica.")) : null, tab === 'files' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sec-title"
  }, /*#__PURE__*/React.createElement("h3", null, "Arquivos do projeto"), /*#__PURE__*/React.createElement("span", null, "6 arquivos")), /*#__PURE__*/React.createElement("div", {
    className: "files"
  }, images.map(im => /*#__PURE__*/React.createElement("a", {
    className: "file",
    href: "#",
    key: im.file
  }, /*#__PURE__*/React.createElement("img", {
    src: im.src,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, im.file), /*#__PURE__*/React.createElement("span", null, "Imagem \xB7 ", im.format)), /*#__PURE__*/React.createElement(RIcon, {
    name: "download"
  }))), ['textos-da-campanha.md', 'briefing-aura-one.md', 'guia-da-marca.md'].map(f => /*#__PURE__*/React.createElement("a", {
    className: "file",
    href: "#",
    key: f
  }, /*#__PURE__*/React.createElement("span", {
    className: "ft"
  }, /*#__PURE__*/React.createElement(RIcon, {
    name: "file-text"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, f), /*#__PURE__*/React.createElement("span", null, "Documento do projeto")), /*#__PURE__*/React.createElement(RIcon, {
    name: "download"
  }))))) : null, tab === 'activity' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sec-title"
  }, /*#__PURE__*/React.createElement("h3", null, "Atividade do agente"), /*#__PURE__*/React.createElement(RBadge, {
    tone: busy ? 'blue' : 'green'
  }, busy ? 'Trabalhando' : 'Atualizado')), /*#__PURE__*/React.createElement("div", {
    className: "acts"
  }, activity.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "adot"
  }, /*#__PURE__*/React.createElement(RIcon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, a.t), /*#__PURE__*/React.createElement("p", null, a.d), /*#__PURE__*/React.createElement("time", null, a.time))))), /*#__PURE__*/React.createElement(RCredits, {
    used: spent
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "ws-panel-bottom"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "live"
  }), busy ? 'Criando sua próxima versão' : 'Tudo organizado no seu projeto'), /*#__PURE__*/React.createElement("span", null, "AURA One")));
}
Object.assign(window, {
  ResultsPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/ResultsPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Workspace.jsx
try { (() => {
const {
  Button: WButton,
  IconButton: WIconButton,
  Badge: WBadge,
  Avatar: WAvatar,
  Tabs: WTabs,
  ChatMessage,
  SourceCard,
  TaskExecution,
  GenerationIndicator,
  PromptInput: WPromptInput,
  Progress: WProgress,
  CreditsMeter,
  Icon: WIcon
} = window.RankDesignSystem_492cab;
const campaignImages = [{
  src: '../../assets/imagery/gradient-blue-glow.jpg',
  title: 'Frequência',
  format: 'Feed · 1:1',
  file: 'aura-frequencia.jpg'
}, {
  src: '../../assets/imagery/ribbed-teal.jpg',
  title: 'Fluxo',
  format: 'Carrossel · 4:5',
  file: 'aura-fluxo.jpg'
}, {
  src: '../../assets/imagery/glow-blue-dark.jpg',
  title: 'Ritmo',
  format: 'Stories · 9:16',
  file: 'aura-ritmo.jpg'
}];
const steps = [{
  title: 'Ler o briefing e o guia da marca',
  details: '2 arquivos do projeto consultados.'
}, {
  title: 'Definir a direção criativa',
  details: 'Conceito, tom e paleta da campanha.'
}, {
  title: 'Criar as imagens',
  details: 'Três peças para feed, carrossel e stories.'
}, {
  title: 'Escrever os textos',
  details: 'Legendas e chamada principal.'
}];
const caption = 'O mundo tem outro ritmo. Conheça AURA One: som que acompanha você, do primeiro passo ao último compasso. #AURAOne';
function Rail({
  view,
  onHome,
  onPanel,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "ws-rail",
    "aria-label": "Navega\xE7\xE3o"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    "aria-label": "In\xEDcio",
    style: {
      width: 'auto',
      height: 'auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/rank-simbolo-azul.svg",
    alt: "Rank",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    "aria-label": "In\xEDcio",
    onClick: onHome
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "house"
  })), /*#__PURE__*/React.createElement("button", {
    className: "current",
    "aria-label": "Workspace"
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "bot"
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Arquivos",
    onClick: () => onPanel('files')
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "folder"
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Galeria",
    onClick: () => onPanel('preview')
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "image"
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Buscar",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "search"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "ws-rail-end"
  }, /*#__PURE__*/React.createElement(WAvatar, {
    name: "Marina Lima",
    size: "sm"
  })));
}
function Workspace({
  initialPrompt,
  onHome,
  onSearch,
  toast
}) {
  const [status, setStatus] = React.useState(initialPrompt ? 'running' : 'review');
  const [phase, setPhase] = React.useState(initialPrompt ? 0 : 4);
  const [seconds, setSeconds] = React.useState(0);
  const [spent, setSpent] = React.useState(36);
  const [tab, setTab] = React.useState('preview');
  const [panel, setPanel] = React.useState(true);
  const [lightbox, setLightbox] = React.useState(null);
  const [messages, setMessages] = React.useState(() => {
    const base = [{
      id: 1,
      role: 'user',
      text: 'Crie uma campanha de lançamento para o AURA One, fone de ouvido com cancelamento de ruído. Público jovem e urbano, tom sensorial.'
    }, {
      id: 2,
      role: 'assistant',
      text: 'Preparei uma série visual que traduz o som em formas: frequência, fluxo e ritmo. As três artes compartilham a mesma linguagem gráfica e acompanham os textos da campanha. Tudo está pronto para sua revisão.'
    }];
    return initialPrompt ? [...base, {
      id: 3,
      role: 'user',
      text: initialPrompt
    }, {
      id: 4,
      role: 'assistant',
      text: 'Vou trabalhar nessa direção com Rank Pro. Você pode acompanhar cada etapa e interromper quando quiser.'
    }] : base;
  });
  const [activity, setActivity] = React.useState([{
    t: 'Briefing e guia da marca consultados',
    d: '2 arquivos do projeto',
    time: 'Agora'
  }, {
    t: 'Campanha preparada para revisão',
    d: '3 imagens e 3 textos · 36 créditos',
    time: 'Agora'
  }]);
  const busy = status === 'running';
  const log = (t, d) => setActivity(a => [...a, {
    t,
    d,
    time: new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }]);
  React.useEffect(() => {
    if (!busy) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [busy]);
  React.useEffect(() => {
    if (!busy || phase >= 4) return;
    const id = setTimeout(() => {
      setSpent(s => s + [2, 4, 24, 6][phase]);
      setPhase(p => p + 1);
      log(steps[phase].title, 'Etapa concluída');
      if (phase === 3) {
        setStatus('review');
        setMessages(m => [...m, {
          id: Date.now(),
          role: 'assistant',
          text: 'A nova versão está pronta: direção criativa, três imagens e textos para feed, carrossel e stories. Compare as peças no painel e aprove quando estiver tudo certo.'
        }]);
      }
    }, 1400);
    return () => clearTimeout(id);
  }, [busy, phase]);
  const run = text => {
    if (busy) return;
    setMessages(m => [...m, {
      id: Date.now(),
      role: 'user',
      text
    }, {
      id: Date.now() + 1,
      role: 'assistant',
      text: 'Vou trabalhar nessa direção com Rank Pro. Você pode acompanhar cada etapa e interromper quando quiser.'
    }]);
    setPhase(0);
    setSeconds(0);
    setStatus('running');
    log('Agente iniciou uma nova versão', 'Rank Pro · 3 ferramentas');
  };
  const approve = () => {
    setStatus('approved');
    log('Campanha aprovada', 'Nenhuma publicação externa');
    toast('success', 'Campanha aprovada e salva no projeto');
  };
  const openPanel = t => {
    setTab(t);
    setPanel(true);
  };
  const stepList = steps.map((s, i) => ({
    ...s,
    state: i < phase ? 'done' : i === phase && busy ? 'running' : 'waiting'
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "ws",
    "data-screen-label": "Workspace"
  }, /*#__PURE__*/React.createElement(Rail, {
    onHome: onHome,
    onPanel: openPanel,
    onSearch: onSearch
  }), /*#__PURE__*/React.createElement("div", {
    className: "ws-app"
  }, /*#__PURE__*/React.createElement("header", {
    className: "ws-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ws-crumb"
  }, /*#__PURE__*/React.createElement(WIconButton, {
    icon: "arrow-left",
    label: "Voltar ao in\xEDcio",
    size: "sm",
    tooltip: false,
    onClick: onHome
  }), /*#__PURE__*/React.createElement("span", null, "Projetos"), /*#__PURE__*/React.createElement(WIcon, {
    name: "chevron-right"
  }), /*#__PURE__*/React.createElement("strong", null, "AURA \xB7 Lan\xE7amento"), /*#__PURE__*/React.createElement(WBadge, null, "Demonstra\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
    className: "ws-head-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ws-credit",
    onClick: () => openPanel('activity')
  }, /*#__PURE__*/React.createElement(WIcon, {
    name: "zap"
  }), spent, /*#__PURE__*/React.createElement("span", null, "cr\xE9ditos")), !panel ? /*#__PURE__*/React.createElement(WButton, {
    variant: "secondary",
    size: "sm",
    icon: "panel-right-open",
    onClick: () => setPanel(true)
  }, "Resultados") : null, /*#__PURE__*/React.createElement(WAvatar, {
    name: "Marina Lima",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("main", {
    className: 'ws-layout' + (panel ? '' : ' panel-hidden')
  }, /*#__PURE__*/React.createElement("section", {
    className: "ws-conv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ws-agent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ws-agent-mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/rank-simbolo-branco.svg",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Est\xFAdio criativo", /*#__PURE__*/React.createElement("span", {
    className: "ws-agent-tag"
  }, "Agente Rank")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "live"
  }), busy ? 'Transformando sua ideia em campanha' : status === 'approved' ? 'Campanha aprovada' : 'Uma ideia, muitas possibilidades')), /*#__PURE__*/React.createElement(WIconButton, {
    icon: "refresh-cw",
    label: "Reexecutar campanha",
    disabled: busy,
    onClick: () => run('Reexecutar a campanha')
  })), /*#__PURE__*/React.createElement("div", {
    className: "ws-thread"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ws-date"
  }, "HOJE \xB7 SEU ESPA\xC7O PARA CRIAR"), messages.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: m.id
  }, /*#__PURE__*/React.createElement(ChatMessage, {
    role: m.role,
    author: "Marina Lima"
  }, m.text), i === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ws-concept"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(WIcon, {
    name: "sparkles"
  }), " DIRE\xC7\xC3O CRIATIVA"), /*#__PURE__*/React.createElement("h2", null, "No seu pr\xF3prio ritmo."), /*#__PURE__*/React.createElement("p", null, "O som ganha forma. A ideia ganha movimento.", /*#__PURE__*/React.createElement("br", null), "Uma campanha na sua pr\xF3pria frequ\xEAncia."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WBadge, {
    tone: "inverse"
  }, "Abstrato"), /*#__PURE__*/React.createElement(WBadge, {
    tone: "inverse"
  }, "Gr\xE1fico"), /*#__PURE__*/React.createElement(WBadge, {
    tone: "inverse"
  }, "Sensorial"))), /*#__PURE__*/React.createElement("div", {
    className: "ws-sources"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(WIcon, {
    name: "file-text"
  }), " CONTEXTO CONSULTADO"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SourceCard, {
    title: "Briefing AURA One",
    domain: "Arquivo do projeto"
  }), /*#__PURE__*/React.createElement(SourceCard, {
    title: "Guia da marca",
    domain: "Arquivo do projeto"
  })))) : null)), /*#__PURE__*/React.createElement(TaskExecution, {
    key: busy ? 'run' : 'idle',
    title: busy ? 'Criando sua campanha' : 'Campanha preparada',
    steps: stepList,
    defaultOpen: busy
  }), busy ? /*#__PURE__*/React.createElement(GenerationIndicator, {
    label: steps[Math.min(phase, 3)].title,
    seconds: seconds
  }) : null, !busy ? /*#__PURE__*/React.createElement("button", {
    className: "ws-result",
    onClick: () => openPanel('preview')
  }, /*#__PURE__*/React.createElement("span", {
    className: "thumbs"
  }, campaignImages.map(c => /*#__PURE__*/React.createElement("img", {
    key: c.src,
    src: c.src,
    alt: ""
  }))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, status === 'approved' ? 'Campanha aprovada' : 'Sua campanha está pronta para revisar'), /*#__PURE__*/React.createElement("small", null, "3 imagens \xB7 3 textos \xB7 vers\xE3o 1")), /*#__PURE__*/React.createElement(WIcon, {
    name: "arrow-up-right"
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "ws-input"
  }, /*#__PURE__*/React.createElement(WPromptInput, {
    rows: 2,
    busy: busy,
    onSend: run,
    onStop: () => {
      setStatus('paused');
      toast('info', 'Execução pausada. As etapas concluídas foram preservadas.');
    },
    placeholder: "Pe\xE7a um ajuste, uma nova dire\xE7\xE3o\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ws-note"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "live"
  }), "Rank Pro \xB7 Busca, Arquivos, Imagens"), /*#__PURE__*/React.createElement("span", null, "O agente pode cometer erros. Revise antes de publicar.")))), panel ? /*#__PURE__*/React.createElement(ResultsPanel, {
    tab: tab,
    setTab: setTab,
    status: status,
    busy: busy,
    phase: phase,
    spent: spent,
    activity: activity,
    images: campaignImages,
    caption: caption,
    onClose: () => setPanel(false),
    onApprove: approve,
    onZoom: setLightbox,
    onAdjust: () => run('Deixe os textos mais curtos e diretos.'),
    toast: toast
  }) : null)), lightbox !== null ? /*#__PURE__*/React.createElement("div", {
    className: "lightbox",
    onClick: () => setLightbox(null)
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, campaignImages[lightbox].title), /*#__PURE__*/React.createElement("span", {
    className: "rk-field__hint"
  }, campaignImages[lightbox].format, " \xB7 AURA One \xB7 imagem de demonstra\xE7\xE3o")), /*#__PURE__*/React.createElement(WIconButton, {
    icon: "x",
    label: "Fechar",
    tooltip: false,
    onClick: () => setLightbox(null)
  })), /*#__PURE__*/React.createElement("img", {
    src: campaignImages[lightbox].src,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-row"
  }, /*#__PURE__*/React.createElement(WIconButton, {
    icon: "chevron-left",
    label: "Anterior",
    tooltip: false,
    onClick: () => setLightbox((lightbox + 2) % 3)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, lightbox + 1, " / 3"), /*#__PURE__*/React.createElement(WIconButton, {
    icon: "chevron-right",
    label: "Pr\xF3xima",
    tooltip: false,
    onClick: () => setLightbox((lightbox + 1) % 3)
  })), /*#__PURE__*/React.createElement(WButton, {
    variant: "secondary",
    icon: "download"
  }, "Baixar imagem")))) : null);
}
Object.assign(window, {
  Workspace
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Workspace.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AgentCard = __ds_scope.AgentCard;

__ds_ns.AgentToolSelector = __ds_scope.AgentToolSelector;

__ds_ns.ApprovalRequest = __ds_scope.ApprovalRequest;

__ds_ns.ChatMessage = __ds_scope.ChatMessage;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.CommandPalette = __ds_scope.CommandPalette;

__ds_ns.CreditsMeter = __ds_scope.CreditsMeter;

__ds_ns.GeneratedImageCard = __ds_scope.GeneratedImageCard;

__ds_ns.GenerationIndicator = __ds_scope.GenerationIndicator;

__ds_ns.ModelSelector = __ds_scope.ModelSelector;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.PromptInput = __ds_scope.PromptInput;

__ds_ns.PromptSuggestions = __ds_scope.PromptSuggestions;

__ds_ns.SourceCard = __ds_scope.SourceCard;

__ds_ns.TaskExecution = __ds_scope.TaskExecution;

__ds_ns.TaskStep = __ds_scope.TaskStep;

__ds_ns.UploadArea = __ds_scope.UploadArea;

__ds_ns.NumberedList = __ds_scope.NumberedList;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProductName = __ds_scope.ProductName;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Empty = __ds_scope.Empty;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.GlassSurface = __ds_scope.GlassSurface;

})();
