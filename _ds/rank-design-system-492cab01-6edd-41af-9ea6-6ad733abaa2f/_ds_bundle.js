/* @ds-bundle: {"format":4,"namespace":"RankDesignSystem_492cab","components":[{"name":"AgentCard","sourcePath":"components/ai/AgentCard.jsx"},{"name":"AgentToolSelector","sourcePath":"components/ai/AgentToolSelector.jsx"},{"name":"ApprovalRequest","sourcePath":"components/ai/ApprovalRequest.jsx"},{"name":"ChatMessage","sourcePath":"components/ai/ChatMessage.jsx"},{"name":"CodeBlock","sourcePath":"components/ai/CodeBlock.jsx"},{"name":"CommandPalette","sourcePath":"components/ai/CommandPalette.jsx"},{"name":"CreditsMeter","sourcePath":"components/ai/CreditsMeter.jsx"},{"name":"GeneratedImageCard","sourcePath":"components/ai/GeneratedImageCard.jsx"},{"name":"GenerationIndicator","sourcePath":"components/ai/GenerationIndicator.jsx"},{"name":"ModelSelector","sourcePath":"components/ai/ModelSelector.jsx"},{"name":"ProjectCard","sourcePath":"components/ai/ProjectCard.jsx"},{"name":"PromptInput","sourcePath":"components/ai/PromptInput.jsx"},{"name":"PromptSuggestions","sourcePath":"components/ai/PromptSuggestions.jsx"},{"name":"SourceCard","sourcePath":"components/ai/SourceCard.jsx"},{"name":"TaskExecution","sourcePath":"components/ai/TaskExecution.jsx"},{"name":"TaskStep","sourcePath":"components/ai/TaskStep.jsx"},{"name":"UploadArea","sourcePath":"components/ai/UploadArea.jsx"},{"name":"NumberedList","sourcePath":"components/brand/NumberedList.jsx"},{"name":"ProductCard","sourcePath":"components/brand/ProductCard.jsx"},{"name":"ProductName","sourcePath":"components/brand/ProductName.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/AvatarGroup.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Empty","sourcePath":"components/feedback/Empty.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"DropdownMenu","sourcePath":"components/navigation/DropdownMenu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Accordion","sourcePath":"components/overlays/Accordion.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"Drawer","sourcePath":"components/overlays/Drawer.jsx"},{"name":"GlassSurface","sourcePath":"components/surfaces/GlassSurface.jsx"}],"sourceHashes":{"components/ai/AgentCard.jsx":"d292adeb3785","components/ai/AgentToolSelector.jsx":"18ffc02d69fa","components/ai/ApprovalRequest.jsx":"9d6e51b57595","components/ai/ChatMessage.jsx":"d75d705c9747","components/ai/CodeBlock.jsx":"d58436189670","components/ai/CommandPalette.jsx":"3157c7343b2c","components/ai/CreditsMeter.jsx":"8675f42e61ee","components/ai/GeneratedImageCard.jsx":"080e7efd3cc3","components/ai/GenerationIndicator.jsx":"1724485618be","components/ai/ModelSelector.jsx":"559ace76532f","components/ai/ProjectCard.jsx":"14e10fac6104","components/ai/PromptInput.jsx":"ab7edc571522","components/ai/PromptSuggestions.jsx":"3d45a9037681","components/ai/SourceCard.jsx":"0f8ed20b4c6c","components/ai/TaskExecution.jsx":"f639306072ba","components/ai/TaskStep.jsx":"f364e46fdb7f","components/ai/UploadArea.jsx":"05c1816e5c66","components/brand/NumberedList.jsx":"0c8ba8196c10","components/brand/ProductCard.jsx":"935084064124","components/brand/ProductName.jsx":"e3aed694cf7a","components/brand/SectionHeading.jsx":"72a5f9184c4f","components/core/Avatar.jsx":"3d600a39af8d","components/core/AvatarGroup.jsx":"4ef39cb55746","components/core/Badge.jsx":"e7d8199b01e7","components/core/Button.jsx":"1d0b4533c323","components/core/Icon.jsx":"92180022ef73","components/core/IconButton.jsx":"365fac982173","components/core/Logo.jsx":"f97be958736a","components/core/Tooltip.jsx":"0a3d2d22c30a","components/feedback/Alert.jsx":"51a47b82ad0b","components/feedback/Empty.jsx":"6b0e33c7a61c","components/feedback/Progress.jsx":"272e736525f7","components/feedback/Skeleton.jsx":"42236d281309","components/feedback/Toast.jsx":"4eb7b010a4b8","components/forms/Checkbox.jsx":"4d13fed583dd","components/forms/Field.jsx":"e6e38537c6a2","components/forms/Input.jsx":"7c5e5e9cd194","components/forms/RadioGroup.jsx":"972cf6f19cbf","components/forms/Select.jsx":"c99ab5825be0","components/forms/Slider.jsx":"bf3ff4a26124","components/forms/Switch.jsx":"58b947c18576","components/navigation/Breadcrumb.jsx":"eb78dcf49384","components/navigation/DropdownMenu.jsx":"5294d4adfde0","components/navigation/Pagination.jsx":"0854071036a3","components/navigation/Tabs.jsx":"696308ccba05","components/overlays/Accordion.jsx":"a0bf599665d7","components/overlays/Dialog.jsx":"5989d15b1c69","components/overlays/Drawer.jsx":"3487766e20ec","components/surfaces/GlassSurface.jsx":"edc34e9638a4","ui_kits/platform/Home.jsx":"f9b3a58d5958","ui_kits/platform/ResultsPanel.jsx":"2b06dca03fef","ui_kits/platform/Workspace.jsx":"451cb8e1f495"},"inlinedExternals":[],"unexposedExports":[{"name":"materialName","sourcePath":"components/core/Icon.jsx"},{"name":"rankModels","sourcePath":"components/ai/ModelSelector.jsx"},{"name":"rkAsset","sourcePath":"components/core/Logo.jsx"}]} */

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
