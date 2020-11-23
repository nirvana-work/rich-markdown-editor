webpackHotUpdate("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __importStar(__webpack_require__(/*! react */ \"../../frontend/node_modules/react/index.js\"));\nconst memoize_1 = __importDefault(__webpack_require__(/*! lodash/memoize */ \"./node_modules/lodash/memoize.js\"));\nconst prosemirror_state_1 = __webpack_require__(/*! prosemirror-state */ \"./node_modules/prosemirror-state/dist/index.js\");\nconst prosemirror_dropcursor_1 = __webpack_require__(/*! prosemirror-dropcursor */ \"./node_modules/prosemirror-dropcursor/dist/index.js\");\nconst prosemirror_gapcursor_1 = __webpack_require__(/*! prosemirror-gapcursor */ \"./node_modules/prosemirror-gapcursor/dist/index.js\");\nconst prosemirror_view_1 = __webpack_require__(/*! prosemirror-view */ \"./node_modules/prosemirror-view/dist/index.js\");\nconst prosemirror_model_1 = __webpack_require__(/*! prosemirror-model */ \"./node_modules/prosemirror-model/dist/index.js\");\nconst prosemirror_inputrules_1 = __webpack_require__(/*! prosemirror-inputrules */ \"./node_modules/prosemirror-inputrules/dist/index.js\");\nconst prosemirror_keymap_1 = __webpack_require__(/*! prosemirror-keymap */ \"./node_modules/prosemirror-keymap/dist/index.js\");\nconst prosemirror_commands_1 = __webpack_require__(/*! prosemirror-commands */ \"./node_modules/prosemirror-commands/dist/index.js\");\nconst prosemirror_utils_1 = __webpack_require__(/*! prosemirror-utils */ \"./node_modules/prosemirror-utils/dist/index.js\");\nconst styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.cjs.js\"));\nconst theme_1 = __webpack_require__(/*! ./theme */ \"./src/theme.ts\");\nconst dictionary_1 = __importDefault(__webpack_require__(/*! ./dictionary */ \"./src/dictionary.ts\"));\nconst Flex_1 = __importDefault(__webpack_require__(/*! ./components/Flex */ \"./src/components/Flex.tsx\"));\nconst SelectionToolbar_1 = __importDefault(__webpack_require__(/*! ./components/SelectionToolbar */ \"./src/components/SelectionToolbar.tsx\"));\nconst BlockMenu_1 = __importDefault(__webpack_require__(/*! ./components/BlockMenu */ \"./src/components/BlockMenu.tsx\"));\nconst LinkToolbar_1 = __importDefault(__webpack_require__(/*! ./components/LinkToolbar */ \"./src/components/LinkToolbar.tsx\"));\nconst Tooltip_1 = __importDefault(__webpack_require__(/*! ./components/Tooltip */ \"./src/components/Tooltip.tsx\"));\nconst ExtensionManager_1 = __importDefault(__webpack_require__(/*! ./lib/ExtensionManager */ \"./src/lib/ExtensionManager.ts\"));\nconst ComponentView_1 = __importDefault(__webpack_require__(/*! ./lib/ComponentView */ \"./src/lib/ComponentView.tsx\"));\nconst headingToSlug_1 = __importDefault(__webpack_require__(/*! ./lib/headingToSlug */ \"./src/lib/headingToSlug.ts\"));\nconst Doc_1 = __importDefault(__webpack_require__(/*! ./nodes/Doc */ \"./src/nodes/Doc.ts\"));\nconst Text_1 = __importDefault(__webpack_require__(/*! ./nodes/Text */ \"./src/nodes/Text.ts\"));\nconst Blockquote_1 = __importDefault(__webpack_require__(/*! ./nodes/Blockquote */ \"./src/nodes/Blockquote.ts\"));\nconst BulletList_1 = __importDefault(__webpack_require__(/*! ./nodes/BulletList */ \"./src/nodes/BulletList.ts\"));\nconst CodeBlock_1 = __importDefault(__webpack_require__(/*! ./nodes/CodeBlock */ \"./src/nodes/CodeBlock.ts\"));\nconst CodeFence_1 = __importDefault(__webpack_require__(/*! ./nodes/CodeFence */ \"./src/nodes/CodeFence.ts\"));\nconst CheckboxList_1 = __importDefault(__webpack_require__(/*! ./nodes/CheckboxList */ \"./src/nodes/CheckboxList.ts\"));\nconst CheckboxItem_1 = __importDefault(__webpack_require__(/*! ./nodes/CheckboxItem */ \"./src/nodes/CheckboxItem.ts\"));\nconst Embed_1 = __importDefault(__webpack_require__(/*! ./nodes/Embed */ \"./src/nodes/Embed.tsx\"));\nconst HardBreak_1 = __importDefault(__webpack_require__(/*! ./nodes/HardBreak */ \"./src/nodes/HardBreak.ts\"));\nconst Heading_1 = __importDefault(__webpack_require__(/*! ./nodes/Heading */ \"./src/nodes/Heading.ts\"));\nconst HorizontalRule_1 = __importDefault(__webpack_require__(/*! ./nodes/HorizontalRule */ \"./src/nodes/HorizontalRule.ts\"));\nconst Image_1 = __importDefault(__webpack_require__(/*! ./nodes/Image */ \"./src/nodes/Image.tsx\"));\nconst ListItem_1 = __importDefault(__webpack_require__(/*! ./nodes/ListItem */ \"./src/nodes/ListItem.ts\"));\nconst Notice_1 = __importDefault(__webpack_require__(/*! ./nodes/Notice */ \"./src/nodes/Notice.tsx\"));\nconst OrderedList_1 = __importDefault(__webpack_require__(/*! ./nodes/OrderedList */ \"./src/nodes/OrderedList.ts\"));\nconst Paragraph_1 = __importDefault(__webpack_require__(/*! ./nodes/Paragraph */ \"./src/nodes/Paragraph.ts\"));\nconst Table_1 = __importDefault(__webpack_require__(/*! ./nodes/Table */ \"./src/nodes/Table.ts\"));\nconst TableCell_1 = __importDefault(__webpack_require__(/*! ./nodes/TableCell */ \"./src/nodes/TableCell.ts\"));\nconst TableHeadCell_1 = __importDefault(__webpack_require__(/*! ./nodes/TableHeadCell */ \"./src/nodes/TableHeadCell.ts\"));\nconst TableRow_1 = __importDefault(__webpack_require__(/*! ./nodes/TableRow */ \"./src/nodes/TableRow.ts\"));\nconst Bold_1 = __importDefault(__webpack_require__(/*! ./marks/Bold */ \"./src/marks/Bold.ts\"));\nconst Code_1 = __importDefault(__webpack_require__(/*! ./marks/Code */ \"./src/marks/Code.ts\"));\nconst Highlight_1 = __importDefault(__webpack_require__(/*! ./marks/Highlight */ \"./src/marks/Highlight.ts\"));\nconst Italic_1 = __importDefault(__webpack_require__(/*! ./marks/Italic */ \"./src/marks/Italic.ts\"));\nconst Link_1 = __importDefault(__webpack_require__(/*! ./marks/Link */ \"./src/marks/Link.ts\"));\nconst Strikethrough_1 = __importDefault(__webpack_require__(/*! ./marks/Strikethrough */ \"./src/marks/Strikethrough.ts\"));\nconst Placeholder_1 = __importDefault(__webpack_require__(/*! ./marks/Placeholder */ \"./src/marks/Placeholder.ts\"));\nconst Underline_1 = __importDefault(__webpack_require__(/*! ./marks/Underline */ \"./src/marks/Underline.ts\"));\nconst BlockMenuTrigger_1 = __importDefault(__webpack_require__(/*! ./plugins/BlockMenuTrigger */ \"./src/plugins/BlockMenuTrigger.ts\"));\nconst History_1 = __importDefault(__webpack_require__(/*! ./plugins/History */ \"./src/plugins/History.ts\"));\nconst Keys_1 = __importDefault(__webpack_require__(/*! ./plugins/Keys */ \"./src/plugins/Keys.ts\"));\nconst Placeholder_2 = __importDefault(__webpack_require__(/*! ./plugins/Placeholder */ \"./src/plugins/Placeholder.ts\"));\nconst SmartText_1 = __importDefault(__webpack_require__(/*! ./plugins/SmartText */ \"./src/plugins/SmartText.ts\"));\nconst TrailingNode_1 = __importDefault(__webpack_require__(/*! ./plugins/TrailingNode */ \"./src/plugins/TrailingNode.ts\"));\nconst MarkdownPaste_1 = __importDefault(__webpack_require__(/*! ./plugins/MarkdownPaste */ \"./src/plugins/MarkdownPaste.ts\"));\nvar server_1 = __webpack_require__(/*! ./server */ \"./src/server.ts\");\nexports.schema = server_1.schema;\nexports.parser = server_1.parser;\nexports.serializer = server_1.serializer;\nvar Extension_1 = __webpack_require__(/*! ./lib/Extension */ \"./src/lib/Extension.ts\");\nexports.Extension = Extension_1.default;\nexports.theme = theme_1.light;\nclass RichMarkdownEditor extends React.PureComponent {\n    constructor() {\n        super(...arguments);\n        this.state = {\n            blockMenuOpen: false,\n            linkMenuOpen: false,\n            blockMenuSearch: \"\",\n        };\n        this.editorState = () => {\n            return this.view.state;\n        };\n        this.value = () => {\n            return this.serializer.serialize(this.view.state.doc);\n        };\n        this.handleChange = () => {\n            if (this.props.onChange) {\n                this.props.onChange(() => {\n                    return this.value();\n                });\n            }\n            if (this.props.onStateChange) {\n                this.props.onStateChange(() => {\n                    return this.editorState();\n                });\n            }\n        };\n        this.handleSave = () => {\n            const { onSave } = this.props;\n            if (onSave) {\n                onSave({ done: false });\n            }\n        };\n        this.handleSaveAndExit = () => {\n            const { onSave } = this.props;\n            if (onSave) {\n                onSave({ done: true });\n            }\n        };\n        this.handleOpenLinkMenu = () => {\n            this.setState({ linkMenuOpen: true });\n        };\n        this.handleCloseLinkMenu = () => {\n            this.setState({ linkMenuOpen: false });\n        };\n        this.handleOpenBlockMenu = (search) => {\n            this.setState({ blockMenuOpen: true, blockMenuSearch: search });\n        };\n        this.handleCloseBlockMenu = () => {\n            if (!this.state.blockMenuOpen)\n                return;\n            this.setState({ blockMenuOpen: false });\n        };\n        this.handleSelectRow = (index, state) => {\n            this.view.dispatch(prosemirror_utils_1.selectRow(index)(state.tr));\n        };\n        this.handleSelectColumn = (index, state) => {\n            this.view.dispatch(prosemirror_utils_1.selectColumn(index)(state.tr));\n        };\n        this.handleSelectTable = (state) => {\n            this.view.dispatch(prosemirror_utils_1.selectTable(state.tr));\n        };\n        this.focusAtStart = () => {\n            const selection = prosemirror_state_1.Selection.atStart(this.view.state.doc);\n            const transaction = this.view.state.tr.setSelection(selection);\n            this.view.dispatch(transaction);\n            this.view.focus();\n        };\n        this.focusAtEnd = () => {\n            const selection = prosemirror_state_1.Selection.atEnd(this.view.state.doc);\n            const transaction = this.view.state.tr.setSelection(selection);\n            this.view.dispatch(transaction);\n            this.view.focus();\n        };\n        this.getHeadings = () => {\n            const headings = [];\n            const previouslySeen = {};\n            this.view.state.doc.forEach(node => {\n                if (node.type.name === \"heading\") {\n                    const slug = headingToSlug_1.default(node);\n                    let id = slug;\n                    if (previouslySeen[slug] > 0) {\n                        id = headingToSlug_1.default(node, previouslySeen[slug]);\n                    }\n                    previouslySeen[slug] =\n                        previouslySeen[slug] !== undefined ? previouslySeen[slug] + 1 : 1;\n                    headings.push({\n                        title: node.textContent,\n                        level: node.attrs.level,\n                        id,\n                    });\n                }\n            });\n            return headings;\n        };\n        this.theme = () => {\n            return this.props.theme || (this.props.dark ? theme_1.dark : theme_1.light);\n        };\n        this.dictionary = memoize_1.default((providedDictionary) => {\n            return Object.assign(Object.assign({}, dictionary_1.default), providedDictionary);\n        });\n        this.render = () => {\n            const { readOnly, readOnlyWriteCheckboxes, style, tooltip, className, onKeyDown, } = this.props;\n            const dictionary = this.dictionary(this.props.dictionary);\n            return (React.createElement(Flex_1.default, { onKeyDown: onKeyDown, style: style, className: className, align: \"flex-start\", justify: \"center\", column: true },\n                React.createElement(styled_components_1.ThemeProvider, { theme: this.theme() },\n                    React.createElement(React.Fragment, null,\n                        React.createElement(StyledEditor, { readOnly: readOnly, readOnlyWriteCheckboxes: readOnlyWriteCheckboxes, ref: ref => (this.element = ref) }),\n                        !readOnly && this.view && (React.createElement(React.Fragment, null,\n                            React.createElement(SelectionToolbar_1.default, { view: this.view, dictionary: dictionary, commands: this.commands, isTemplate: this.props.template === true, onSearchLink: this.props.onSearchLink, onClickLink: this.props.onClickLink, onCreateLink: this.props.onCreateLink, tooltip: tooltip }),\n                            React.createElement(LinkToolbar_1.default, { view: this.view, dictionary: dictionary, isActive: this.state.linkMenuOpen, onCreateLink: this.props.onCreateLink, onSearchLink: this.props.onSearchLink, onClickLink: this.props.onClickLink, onShowToast: this.props.onShowToast, onClose: this.handleCloseLinkMenu, tooltip: tooltip }),\n                            React.createElement(BlockMenu_1.default, { view: this.view, commands: this.commands, dictionary: dictionary, isActive: this.state.blockMenuOpen, search: this.state.blockMenuSearch, onClose: this.handleCloseBlockMenu, uploadImage: this.props.uploadImage, onLinkToolbarOpen: this.handleOpenLinkMenu, onImageUploadStart: this.props.onImageUploadStart, onImageUploadStop: this.props.onImageUploadStop, onShowToast: this.props.onShowToast, embeds: this.props.embeds })))))));\n        };\n    }\n    componentDidMount() {\n        this.init();\n        if (this.props.scrollTo) {\n            this.scrollToAnchor(this.props.scrollTo);\n        }\n        if (this.props.readOnly)\n            return;\n        if (this.props.autoFocus) {\n            this.focusAtEnd();\n        }\n    }\n    componentDidUpdate(prevProps) {\n        if (this.props.value && prevProps.value !== this.props.value) {\n            const newState = this.createState(this.props.value);\n            this.view.updateState(newState);\n        }\n        if (prevProps.readOnly !== this.props.readOnly) {\n            this.view.update(Object.assign(Object.assign({}, this.view.props), { editable: () => !this.props.readOnly }));\n        }\n        if (this.props.scrollTo && this.props.scrollTo !== prevProps.scrollTo) {\n            this.scrollToAnchor(this.props.scrollTo);\n        }\n        if (prevProps.readOnly && !this.props.readOnly && this.props.autoFocus) {\n            this.focusAtEnd();\n        }\n    }\n    init() {\n        this.extensions = this.createExtensions();\n        this.nodes = this.createNodes();\n        this.marks = this.createMarks();\n        this.schema = this.createSchema();\n        this.plugins = this.createPlugins();\n        this.keymaps = this.createKeymaps();\n        this.serializer = this.createSerializer();\n        this.parser = this.createParser();\n        this.inputRules = this.createInputRules();\n        this.nodeViews = this.createNodeViews();\n        this.view = this.createView();\n        this.commands = this.createCommands();\n    }\n    createExtensions() {\n        const dictionary = this.dictionary(this.props.dictionary);\n        return new ExtensionManager_1.default([\n            new Doc_1.default(),\n            new Text_1.default(),\n            new HardBreak_1.default(),\n            new Paragraph_1.default(),\n            new Blockquote_1.default(),\n            new CodeBlock_1.default({\n                dictionary,\n                initialReadOnly: this.props.readOnly,\n                onShowToast: this.props.onShowToast,\n            }),\n            new CodeFence_1.default({\n                dictionary,\n                initialReadOnly: this.props.readOnly,\n                onShowToast: this.props.onShowToast,\n            }),\n            new CheckboxList_1.default(),\n            new CheckboxItem_1.default(),\n            new BulletList_1.default(),\n            new Embed_1.default(),\n            new ListItem_1.default(),\n            new Notice_1.default({\n                dictionary,\n            }),\n            new Heading_1.default({\n                dictionary,\n                onShowToast: this.props.onShowToast,\n                offset: this.props.headingsOffset,\n            }),\n            new HorizontalRule_1.default(),\n            new Image_1.default({\n                dictionary,\n                uploadImage: this.props.uploadImage,\n                onImageUploadStart: this.props.onImageUploadStart,\n                onImageUploadStop: this.props.onImageUploadStop,\n                onShowToast: this.props.onShowToast,\n            }),\n            new Table_1.default(),\n            new TableCell_1.default({\n                onSelectTable: this.handleSelectTable,\n                onSelectRow: this.handleSelectRow,\n            }),\n            new TableHeadCell_1.default({\n                onSelectColumn: this.handleSelectColumn,\n            }),\n            new TableRow_1.default(),\n            new Bold_1.default(),\n            new Code_1.default(),\n            new Highlight_1.default(),\n            new Italic_1.default(),\n            new Placeholder_1.default(),\n            new Underline_1.default(),\n            new Link_1.default({\n                onKeyboardShortcut: this.handleOpenLinkMenu,\n                onClickLink: this.props.onClickLink,\n                onClickHashtag: this.props.onClickHashtag,\n                onHoverLink: this.props.onHoverLink,\n            }),\n            new Strikethrough_1.default(),\n            new OrderedList_1.default(),\n            new History_1.default(),\n            new SmartText_1.default(),\n            new TrailingNode_1.default(),\n            new MarkdownPaste_1.default(),\n            new Keys_1.default({\n                onSave: this.handleSave,\n                onSaveAndExit: this.handleSaveAndExit,\n                onCancel: this.props.onCancel,\n            }),\n            new BlockMenuTrigger_1.default({\n                dictionary,\n                onOpen: this.handleOpenBlockMenu,\n                onClose: this.handleCloseBlockMenu,\n            }),\n            new Placeholder_2.default({\n                placeholder: this.props.placeholder,\n            }),\n            ...this.props.extensions,\n        ], this);\n    }\n    createPlugins() {\n        return this.extensions.plugins;\n    }\n    createKeymaps() {\n        return this.extensions.keymaps({\n            schema: this.schema,\n        });\n    }\n    createInputRules() {\n        return this.extensions.inputRules({\n            schema: this.schema,\n        });\n    }\n    createNodeViews() {\n        return this.extensions.extensions\n            .filter((extension) => extension.component)\n            .reduce((nodeViews, extension) => {\n            const nodeView = (node, view, getPos, decorations) => {\n                return new ComponentView_1.default(extension.component, {\n                    editor: this,\n                    extension,\n                    node,\n                    view,\n                    getPos,\n                    decorations,\n                });\n            };\n            return Object.assign(Object.assign({}, nodeViews), { [extension.name]: nodeView });\n        }, {});\n    }\n    createCommands() {\n        return this.extensions.commands({\n            schema: this.schema,\n            view: this.view,\n        });\n    }\n    createNodes() {\n        return this.extensions.nodes;\n    }\n    createMarks() {\n        return this.extensions.marks;\n    }\n    createSchema() {\n        return new prosemirror_model_1.Schema({\n            nodes: this.nodes,\n            marks: this.marks,\n        });\n    }\n    createSerializer() {\n        return this.extensions.serializer();\n    }\n    createParser() {\n        return this.extensions.parser({\n            schema: this.schema,\n        });\n    }\n    createState(value) {\n        const doc = this.createDocument(value || this.props.defaultValue);\n        return prosemirror_state_1.EditorState.create({\n            schema: this.schema,\n            doc,\n            plugins: [\n                ...this.plugins,\n                ...this.keymaps,\n                prosemirror_dropcursor_1.dropCursor({ color: this.theme().cursor }),\n                prosemirror_gapcursor_1.gapCursor(),\n                prosemirror_inputrules_1.inputRules({\n                    rules: this.inputRules,\n                }),\n                prosemirror_keymap_1.keymap(prosemirror_commands_1.baseKeymap),\n            ],\n        });\n    }\n    createDocument(content) {\n        return this.parser.parse(content);\n    }\n    createView() {\n        if (!this.element) {\n            throw new Error(\"createView called before ref available\");\n        }\n        const isEditingCheckbox = tr => {\n            return tr.steps.some((step) => step.slice.content.firstChild &&\n                step.slice.content.firstChild.type.name ===\n                    this.schema.nodes.checkbox_item.name);\n        };\n        const view = new prosemirror_view_1.EditorView(this.element, {\n            state: this.createState(),\n            editable: () => !this.props.readOnly,\n            nodeViews: this.nodeViews,\n            handleDOMEvents: this.props.handleDOMEvents,\n            dispatchTransaction: transaction => {\n                const { state, transactions } = this.view.state.applyTransaction(transaction);\n                this.view.updateState(state);\n                if (transactions.some(tr => tr.docChanged) &&\n                    (!this.props.readOnly ||\n                        (this.props.readOnlyWriteCheckboxes &&\n                            transactions.some(isEditingCheckbox)))) {\n                    this.handleChange();\n                }\n                this.forceUpdate();\n            },\n        });\n        return view;\n    }\n    scrollToAnchor(hash) {\n        if (!hash)\n            return;\n        try {\n            const element = document.querySelector(hash);\n            if (element)\n                element.scrollIntoView({ behavior: \"smooth\" });\n        }\n        catch (err) {\n            console.warn(`Attempted to scroll to invalid hash: ${hash}`, err);\n        }\n    }\n}\nRichMarkdownEditor.defaultProps = {\n    defaultValue: \"\",\n    placeholder: \"Write something nice…\",\n    onImageUploadStart: () => {\n    },\n    onImageUploadStop: () => {\n    },\n    onClickLink: href => {\n        window.open(href, \"_blank\");\n    },\n    embeds: [],\n    extensions: [],\n    tooltip: Tooltip_1.default,\n};\nconst StyledEditor = styled_components_1.default(\"div\") `\n  color: ${props => props.theme.text};\n  background: ${props => props.theme.background};\n  font-family: ${props => props.theme.fontFamily};\n  font-weight: ${props => props.theme.fontWeight};\n  font-size: 1em;\n  line-height: 1.7em;\n  width: 100%;\n\n  .ProseMirror {\n    position: relative;\n    outline: none;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    white-space: break-spaces;\n    -webkit-font-variant-ligatures: none;\n    font-variant-ligatures: none;\n    font-feature-settings: \"liga\" 0; /* the above doesn't seem to work in Edge */\n  }\n\n  pre {\n    white-space: pre-wrap;\n  }\n\n  li {\n    position: relative;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .image {\n    text-align: center;\n\n    img {\n      pointer-events: ${props => (props.readOnly ? \"initial\" : \"none\")};\n    }\n  }\n\n  .image.placeholder {\n    position: relative;\n    background: ${props => props.theme.background};\n\n    img {\n      opacity: 0.5;\n    }\n  }\n\n  .ProseMirror-hideselection *::selection {\n    background: transparent;\n  }\n  .ProseMirror-hideselection *::-moz-selection {\n    background: transparent;\n  }\n  .ProseMirror-hideselection {\n    caret-color: transparent;\n  }\n\n  .ProseMirror-selectednode {\n    outline: 2px solid\n      ${props => (props.readOnly ? \"transparent\" : props.theme.selected)};\n  }\n\n  /* Make sure li selections wrap around markers */\n\n  li.ProseMirror-selectednode {\n    outline: none;\n  }\n\n  li.ProseMirror-selectednode:after {\n    content: \"\";\n    position: absolute;\n    left: -32px;\n    right: -2px;\n    top: -2px;\n    bottom: -2px;\n    border: 2px solid ${props => props.theme.selected};\n    pointer-events: none;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 1em 0 0.5em;\n    font-weight: 500;\n    cursor: default;\n\n    &:not(.placeholder):before {\n      display: ${props => (props.readOnly ? \"none\" : \"block\")};\n      position: absolute;\n      font-family: ${props => props.theme.fontFamilyMono};\n      color: ${props => props.theme.textSecondary};\n      font-size: 13px;\n      left: -24px;\n    }\n\n    &:hover {\n      .heading-anchor {\n        opacity: 1;\n      }\n    }\n  }\n\n  .heading-name {\n    color: ${props => props.theme.text};\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n\n  a:first-child {\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin-top: 0;\n    }\n  }\n\n  h1:not(.placeholder):before {\n    content: \"H1\";\n    line-height: 3em;\n  }\n  h2:not(.placeholder):before {\n    content: \"H2\";\n    line-height: 2.8em;\n  }\n  h3:not(.placeholder):before {\n    content: \"H3\";\n    line-height: 2.3em;\n  }\n  h4:not(.placeholder):before {\n    content: \"H4\";\n    line-height: 2.2em;\n  }\n  h5:not(.placeholder):before {\n    content: \"H5\";\n  }\n  h6:not(.placeholder):before {\n    content: \"H6\";\n  }\n\n  .with-emoji {\n    margin-left: -1em;\n  }\n\n  .heading-anchor {\n    opacity: 0;\n    display: ${props => (props.readOnly ? \"block\" : \"none\")};\n    color: ${props => props.theme.textSecondary};\n    cursor: pointer;\n    background: none;\n    border: 0;\n    outline: none;\n    padding: 2px 12px 2px 4px;\n    margin: 0;\n    position: absolute;\n    transition: opacity 100ms ease-in-out;\n    font-family: ${props => props.theme.fontFamilyMono};\n    font-size: 22px;\n    left: -1.3em;\n\n    &:focus,\n    &:hover {\n      color: ${props => props.theme.text};\n    }\n  }\n\n  .placeholder {\n    &:before {\n      display: block;\n      content: ${props => (props.readOnly ? \"\" : \"attr(data-empty-text)\")};\n      pointer-events: none;\n      height: 0;\n      color: ${props => props.theme.placeholder};\n    }\n  }\n\n  @media print {\n    .placeholder {\n      display: none;\n    }\n  }\n\n  .notice-block {\n    display: flex;\n    align-items: center;\n    background: ${props => props.theme.noticeInfoBackground};\n    color: ${props => props.theme.noticeInfoText};\n    border-radius: 4px;\n    padding: 8px 16px;\n    margin: 8px 0;\n\n    a {\n      color: ${props => props.theme.noticeInfoText};\n    }\n\n    a:not(.heading-name) {\n      text-decoration: underline;\n    }\n  }\n\n  .notice-block .icon {\n    width: 24px;\n    height: 24px;\n    align-self: flex-start;\n    margin-right: 4px;\n    position: relative;\n    top: 1px;\n  }\n\n  .notice-block.tip {\n    background: ${props => props.theme.noticeTipBackground};\n    color: ${props => props.theme.noticeTipText};\n\n    a {\n      color: ${props => props.theme.noticeTipText};\n    }\n  }\n\n  .notice-block.warning {\n    background: ${props => props.theme.noticeWarningBackground};\n    color: ${props => props.theme.noticeWarningText};\n\n    a {\n      color: ${props => props.theme.noticeWarningText};\n    }\n  }\n\n  blockquote {\n    border-left: 3px solid ${props => props.theme.quote};\n    margin: 0;\n    padding-left: 10px;\n    font-style: italic;\n  }\n\n  b,\n  strong {\n    font-weight: 600;\n  }\n\n  .template-placeholder {\n    color: ${props => props.theme.placeholder};\n    border-bottom: 1px dotted ${props => props.theme.placeholder};\n    border-radius: 2px;\n    cursor: text;\n\n    &:hover {\n      border-bottom: 1px dotted\n        ${props => props.readOnly ? props.theme.placeholder : props.theme.textSecondary};\n    }\n  }\n\n  p {\n    position: relative;\n    margin: 0;\n  }\n\n  a {\n    color: ${props => props.theme.link};\n  }\n\n  a:hover {\n    text-decoration: ${props => (props.readOnly ? \"underline\" : \"none\")};\n  }\n\n  ul,\n  ol {\n    margin: 0 0.1em;\n    padding: 0 0 0 1em;\n\n    ul,\n    ol {\n      margin: 0;\n    }\n  }\n\n  ol ol {\n    list-style: lower-alpha;\n  }\n\n  ol ol ol {\n    list-style: lower-roman;\n  }\n\n  ul.checkbox_list {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  ul.checkbox_list li {\n    display: flex;\n  }\n\n  ul.checkbox_list li.checked > div > p {\n    color: ${props => props.theme.textSecondary};\n    text-decoration: line-through;\n  }\n\n  ul.checkbox_list li input {\n    pointer-events: ${props => props.readOnly && !props.readOnlyWriteCheckboxes ? \"none\" : \"initial\"};\n    opacity: ${props => props.readOnly && !props.readOnlyWriteCheckboxes ? 0.75 : 1};\n    margin: 0 0.5em 0 0;\n    width: 14px;\n    height: 14px;\n  }\n\n  li p:first-child {\n    margin: 0;\n    word-break: break-all;\n  }\n\n  hr {\n    height: 0;\n    border: 0;\n    border-top: 1px solid ${props => props.theme.horizontalRule};\n  }\n\n  code {\n    border-radius: 4px;\n    border: 1px solid ${props => props.theme.codeBorder};\n    padding: 3px 4px;\n    font-family: ${props => props.theme.fontFamilyMono};\n    font-size: 85%;\n  }\n\n  mark {\n    border-radius: 1px;\n    color: ${props => props.theme.black};\n    background: ${props => props.theme.textHighlight};\n  }\n\n  .code-block,\n  .notice-block {\n    position: relative;\n\n    select,\n    button {\n      background: ${props => props.theme.blockToolbarBackground};\n      color: ${props => props.theme.blockToolbarItem};\n      border-width: 1px;\n      font-size: 13px;\n      display: none;\n      position: absolute;\n      border-radius: 4px;\n      padding: 2px;\n      z-index: 1;\n      top: 4px;\n      right: 4px;\n    }\n\n    button {\n      padding: 2px 4px;\n    }\n\n    &:hover {\n      select {\n        display: ${props => (props.readOnly ? \"none\" : \"inline\")};\n      }\n\n      button {\n        display: ${props => (props.readOnly ? \"inline\" : \"none\")};\n      }\n    }\n\n    select:focus,\n    select:active {\n      display: inline;\n    }\n  }\n\n  pre {\n    display: block;\n    overflow-x: auto;\n    padding: 0.75em 1em;\n    line-height: 1.4em;\n    position: relative;\n    background: ${props => props.theme.codeBackground};\n    border-radius: 4px;\n    border: 1px solid ${props => props.theme.codeBorder};\n\n    -webkit-font-smoothing: initial;\n    font-family: ${props => props.theme.fontFamilyMono};\n    font-size: 13px;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n    color: ${props => props.theme.code};\n    margin: 0;\n\n    code {\n      font-size: 13px;\n      background: none;\n      padding: 0;\n      border: 0;\n    }\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: ${props => props.theme.codeComment};\n  }\n\n  .token.punctuation {\n    color: ${props => props.theme.codePunctuation};\n  }\n\n  .token.namespace {\n    opacity: 0.7;\n  }\n\n  .token.operator,\n  .token.boolean,\n  .token.number {\n    color: ${props => props.theme.codeNumber};\n  }\n\n  .token.property {\n    color: ${props => props.theme.codeProperty};\n  }\n\n  .token.tag {\n    color: ${props => props.theme.codeTag};\n  }\n\n  .token.string {\n    color: ${props => props.theme.codeString};\n  }\n\n  .token.selector {\n    color: ${props => props.theme.codeSelector};\n  }\n\n  .token.attr-name {\n    color: ${props => props.theme.codeAttr};\n  }\n\n  .token.entity,\n  .token.url,\n  .language-css .token.string,\n  .style .token.string {\n    color: ${props => props.theme.codeEntity};\n  }\n\n  .token.attr-value,\n  .token.keyword,\n  .token.control,\n  .token.directive,\n  .token.unit {\n    color: ${props => props.theme.codeKeyword};\n  }\n\n  .token.function {\n    color: ${props => props.theme.codeFunction};\n  }\n\n  .token.statement,\n  .token.regex,\n  .token.atrule {\n    color: ${props => props.theme.codeStatement};\n  }\n\n  .token.placeholder,\n  .token.variable {\n    color: ${props => props.theme.codePlaceholder};\n  }\n\n  .token.deleted {\n    text-decoration: line-through;\n  }\n\n  .token.inserted {\n    border-bottom: 1px dotted ${props => props.theme.codeInserted};\n    text-decoration: none;\n  }\n\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n\n  .token.important {\n    color: ${props => props.theme.codeImportant};\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border-radius: 4px;\n    margin-top: 1em;\n\n    tr {\n      position: relative;\n      border-bottom: 1px solid ${props => props.theme.tableDivider};\n    }\n\n    th {\n      background: ${props => props.theme.tableHeaderBackground};\n    }\n\n    td,\n    th {\n      position: relative;\n      vertical-align: top;\n      border: 1px solid ${props => props.theme.tableDivider};\n      position: relative;\n      padding: 4px 8px;\n      text-align: left;\n      min-width: 100px;\n    }\n\n    .selectedCell {\n      background: ${props => props.readOnly ? \"inherit\" : props.theme.tableSelectedBackground};\n\n      /* fixes Firefox background color painting over border:\n       * https://bugzilla.mozilla.org/show_bug.cgi?id=688556 */\n      background-clip: padding-box;\n    }\n\n    .grip-column {\n      /* usage of ::after for all of the table grips works around a bug in\n       * prosemirror-tables that causes Safari to hang when selecting a cell\n       * in an empty table:\n       * https://github.com/ProseMirror/prosemirror/issues/947 */\n      &::after {\n        content: \"\";\n        cursor: pointer;\n        position: absolute;\n        top: -16px;\n        left: 0;\n        width: 100%;\n        height: 12px;\n        background: ${props => props.theme.tableDivider};\n        border-bottom: 3px solid ${props => props.theme.background};\n        display: ${props => (props.readOnly ? \"none\" : \"block\")};\n      }\n\n      &:hover::after {\n        background: ${props => props.theme.text};\n      }\n      &.first::after {\n        border-top-left-radius: 3px;\n      }\n      &.last::after {\n        border-top-right-radius: 3px;\n      }\n      &.selected::after {\n        background: ${props => props.theme.tableSelected};\n      }\n    }\n\n    .grip-row {\n      &::after {\n        content: \"\";\n        cursor: pointer;\n        position: absolute;\n        left: -16px;\n        top: 0;\n        height: 100%;\n        width: 12px;\n        background: ${props => props.theme.tableDivider};\n        border-right: 3px solid ${props => props.theme.background};\n        display: ${props => (props.readOnly ? \"none\" : \"block\")};\n      }\n\n      &:hover::after {\n        background: ${props => props.theme.text};\n      }\n      &.first::after {\n        border-top-left-radius: 3px;\n      }\n      &.last::after {\n        border-bottom-left-radius: 3px;\n      }\n      &.selected::after {\n        background: ${props => props.theme.tableSelected};\n      }\n    }\n\n    .grip-table {\n      &::after {\n        content: \"\";\n        cursor: pointer;\n        background: ${props => props.theme.tableDivider};\n        width: 13px;\n        height: 13px;\n        border-radius: 13px;\n        border: 2px solid ${props => props.theme.background};\n        position: absolute;\n        top: -18px;\n        left: -18px;\n        display: ${props => (props.readOnly ? \"none\" : \"block\")};\n      }\n\n      &:hover::after {\n        background: ${props => props.theme.text};\n      }\n      &.selected::after {\n        background: ${props => props.theme.tableSelected};\n      }\n    }\n  }\n\n  .scrollable-wrapper {\n    position: relative;\n    margin: 0.5em 0px;\n    scrollbar-width: thin;\n    scrollbar-color: transparent transparent;\n\n    &:hover {\n      scrollbar-color: ${props => props.theme.scrollbarThumb}\n        ${props => props.theme.scrollbarBackground};\n    }\n\n    & ::-webkit-scrollbar {\n      height: 14px;\n      background-color: transparent;\n    }\n\n    &:hover ::-webkit-scrollbar {\n      background-color: ${props => props.theme.scrollbarBackground};\n    }\n\n    & ::-webkit-scrollbar-thumb {\n      background-color: transparent;\n      border: 3px solid transparent;\n      border-radius: 7px;\n    }\n\n    &:hover ::-webkit-scrollbar-thumb {\n      background-color: ${props => props.theme.scrollbarThumb};\n      border-color: ${props => props.theme.scrollbarBackground};\n    }\n  }\n\n  .scrollable {\n    overflow-y: hidden;\n    overflow-x: auto;\n    padding-left: 1em;\n    margin-left: -1em;\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    transition: border 250ms ease-in-out 0s;\n  }\n\n  .scrollable-shadow {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -1em;\n    width: 16px;\n    transition: box-shadow 250ms ease-in-out;\n    border: 0px solid transparent;\n    border-left-width: 1em;\n    pointer-events: none;\n\n    &.left {\n      box-shadow: 16px 0 16px -16px inset rgba(0, 0, 0, 0.25);\n      border-left: 1em solid ${props => props.theme.background};\n    }\n\n    &.right {\n      right: 0;\n      left: auto;\n      box-shadow: -16px 0 16px -16px inset rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  .block-menu-trigger {\n    display: ${props => (props.readOnly ? \"none\" : \"block\")};\n    height: 1em;\n    color: ${props => props.theme.textSecondary};\n    background: none;\n    border-radius: 100%;\n    font-size: 30px;\n    position: absolute;\n    transform: scale(0.9);\n    transition: color 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n      transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    outline: none;\n    border: 0;\n    line-height: 1;\n    margin-top: -6px;\n    left: -34px;\n\n    &:hover,\n    &:focus {\n      cursor: pointer;\n      transform: scale(1);\n      color: ${props => props.theme.text};\n    }\n  }\n\n  @media print {\n    .block-menu-trigger {\n      display: none;\n    }\n  }\n\n  .ProseMirror-gapcursor {\n    display: none;\n    pointer-events: none;\n    position: absolute;\n  }\n\n  .ProseMirror-gapcursor:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -2px;\n    width: 20px;\n    border-top: 1px solid ${props => props.theme.cursor};\n    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n  }\n\n  @keyframes ProseMirror-cursor-blink {\n    to {\n      visibility: hidden;\n    }\n  }\n\n  .ProseMirror-focused .ProseMirror-gapcursor {\n    display: block;\n  }\n\n  @media print {\n    em,\n    blockquote {\n      font-family: \"SF Pro Text\", ${props => props.theme.fontFamily};\n    }\n  }\n`;\nexports.default = RichMarkdownEditor;\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

})