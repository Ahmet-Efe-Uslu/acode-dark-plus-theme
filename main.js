(() => {
    "use strict";

    // -----------------------------------------
    // PLUGIN CONFIGURATION
    // -----------------------------------------

    const PLUGIN_ID = "com.example.darkplus.cpp-theme";
    const THEME_ID = "dark-plus-cpp";

    const COLORS = {
        background: "#1E1E1E",
        foreground: "#D4D4D4",

        keyword: "#C586C0",
        string: "#CE9178",
        comment: "#6A9955",

        function: "#DCDCAA",
        variable: "#9CDCFE",

        type: "#4EC9B0",
        class: "#4EC9B0",

        constant: "#4FC1FF",
        number: "#B5CEA8",

        escape: "#d7ba7d",
        character: "#569cd6",
        label: "#C8C8C8",

        operator: "#D4D4D4"
    };

    let editorThemes = null;
    let registered = false;


    // -----------------------------------------
    // BUILD DARK+ EDITOR EXTENSION
    // -----------------------------------------

    function buildDarkPlusTheme() {

        const {
            cm,
            createTheme,
            createHighlightStyle
        } = editorThemes;

        const t = cm.tags;


        // -------------------------------------
        // C++ SYNTAX HIGHLIGHTING
        // -------------------------------------

        const highlightStyle = createHighlightStyle([

            // ---------------------------------
            // KEYWORDS
            // ---------------------------------

            {
                tag: [
                    t.keyword,
                    t.definitionKeyword,
                    t.controlKeyword,
                    t.operatorKeyword,
                    t.modifier,
                    t.self,
                    t.null
                ],
                color: COLORS.keyword
            },

            // ---------------------------------
            // PREPROCESSOR DIRECTIVES
            //
            // #include
            // #define
            // #ifdef
            // #ifndef
            // #endif
            // #else
            // #if
            // #elif
            // ---------------------------------

            {
                tag: t.processingInstruction,
                color: COLORS.keyword
            },

            // ---------------------------------
            // TYPES, CLASSES AND NAMESPACES
            //
            // Point
            // std
            // string
            // MyNamespace
            // ---------------------------------

            {
                tag: [
                    t.typeName,
                    t.className,
                    t.namespace
                ],
                color: COLORS.type
            },

            // ---------------------------------
            // BUILT-IN / PRIMITIVE TYPES
            //
            // int
            // float
            // double
            // bool
            // void
            // ---------------------------------

            // C++ Lezer maps PrimitiveType and
            // TypeSize to standard(typeName).
            // This rule intentionally comes
            // after the general typeName rule.

            {
                tag: t.standard(t.typeName),
                color: COLORS.keyword
            },

            // ---------------------------------
            // VARIABLES
            // ---------------------------------

            {
                tag: [
                    t.variableName,
                    t.definition(t.variableName)
                ],
                color: COLORS.variable
            },

            // ---------------------------------
            // MEMBER VARIABLES / PROPERTIES
            // ---------------------------------

            {
                tag: [
                    t.propertyName,
                    t.definition(t.propertyName)
                ],
                color: COLORS.variable
            },

            // ---------------------------------
            // FUNCTIONS
            //
            // main()
            // add()
            // print()
            // processString()
            // ---------------------------------

            {
                tag: [
                    t.function(t.variableName),
                    t.function(t.definition(t.variableName)),
                    t.function(t.propertyName)
                ],
                color: COLORS.function
            },

            // ---------------------------------
            // CONSTANTS AND ENUM MEMBERS
            // ---------------------------------

            {
                tag: [
                    t.constant(t.variableName),
                    t.constant(t.propertyName)
                ],
                color: COLORS.constant
            },

            // ---------------------------------
            // MACRO NAMES
            //
            // C++ Lezer:
            // MacroName -> special(name)
            // ---------------------------------

            {
                tag: t.special(t.name),
                color: COLORS.constant
            },

            // ---------------------------------
            // STRINGS
            //
            // "Hello World"
            // "Container size:"
            // ---------------------------------

            {
                tag: t.string,
                color: COLORS.string
            },

            // ---------------------------------
            // SYSTEM LIBRARY HEADERS
            //
            // <iostream>
            // <vector>
            // <string>
            //
            // SystemLibString ->
            // special(string)
            // ---------------------------------

            {
                tag: t.special(t.string),
                color: COLORS.string
            },

            // ---------------------------------
            // CHARACTER LITERALS
            //
            // 'A'
            // 'B'
            // ---------------------------------

            {
                tag: t.character,
                color: COLORS.string
            },

            // ---------------------------------
            // ESCAPE SEQUENCES
            //
            // \n
            // \t
            // \r
            // \"
            // ---------------------------------

            {
                tag: t.escape,
                color: COLORS.escape
            },

            // ---------------------------------
            // NUMBERS
            //
            // 42
            // 3.14
            // 1024
            // ---------------------------------

            {
                tag: t.number,
                color: COLORS.number
            },

            // ---------------------------------
            // BOOLEAN VALUES AND LITERALS
            // ---------------------------------

            {
                tag: [
                    t.bool,
                    t.literal
                ],
                color: COLORS.character
            },

            // ---------------------------------
            // COMMENTS
            // ---------------------------------

            {
                tag: [
                    t.comment,
                    t.lineComment,
                    t.blockComment
                ],
                color: COLORS.comment
            },

            // ---------------------------------
            // LABELS
            // ---------------------------------

            {
                tag: t.labelName,
                color: COLORS.label
            },

            // ---------------------------------
            // OPERATORS
            //
            // +
            // -
            // *
            // /
            // <<
            // >>
            // ->
            // ==
            // &&
            // ---------------------------------

            {
                tag: [
                    t.operator,
                    t.arithmeticOperator,
                    t.logicOperator,
                    t.bitwiseOperator,
                    t.compareOperator,
                    t.definitionOperator,
                    t.updateOperator,
                    t.derefOperator
                ],
                color: COLORS.operator
            },

            // ---------------------------------
            // BRACKETS AND PUNCTUATION
            // ---------------------------------

            {
                tag: [
                    t.paren,
                    t.squareBracket,
                    t.brace,
                    t.angleBracket,
                    t.separator,
                    t.punctuation
                ],
                color: COLORS.foreground
            },

            // ---------------------------------
            // PREPROCESSOR ARGUMENTS / METADATA
            // ---------------------------------

            {
                tag: t.meta,
                color: COLORS.foreground
            }

        ]);


        // -------------------------------------
        // EDITOR INTERFACE
        // -------------------------------------

        return createTheme({

            dark: true,

            highlightStyle,

            styles: {

                // Main editor
                "&": {
                    backgroundColor: COLORS.background,
                    color: COLORS.foreground
                },

                // Editor content
                ".cm-content": {
                    caretColor: COLORS.foreground
                },

                // Cursor
                ".cm-cursor, .cm-dropCursor": {
                    borderLeftColor: COLORS.foreground
                },

                // Gutter
                ".cm-gutters": {
                    backgroundColor: COLORS.background,
                    color: "#858585",
                    border: "none"
                },

                // Active line
                ".cm-activeLine": {
                    backgroundColor: "transparent"
                },

                ".cm-activeLineGutter": {
                    backgroundColor: "transparent"
                },

                // Selection
                ".cm-selectionBackground, .cm-content ::selection": {
                    backgroundColor: "#264F78"
                },

                "&.cm-focused .cm-selectionBackground": {
                    backgroundColor: "#264F78"
                },

                // Matching brackets
                ".cm-matchingBracket": {
                    backgroundColor: "#3A3D41",
                    color: COLORS.foreground
                },

                // Tooltips
                ".cm-tooltip": {
                    backgroundColor: "#252526",
                    color: COLORS.foreground,
                    border: "1px solid #454545"
                }
            }
        });
    }


    // -----------------------------------------
    // REGISTER THEME
    // -----------------------------------------

    function init() {

        if (registered) {
            return;
        }

        editorThemes = acode.require("editorThemes");

        editorThemes.register({

            id: THEME_ID,

            caption: "Dark+ C++",

            dark: true,

            // Actual CodeMirror extension
            getExtension: () => buildDarkPlusTheme(),

            // Acode theme preview configuration
            config: {

                name: "Dark+ C++",
                dark: true,

                background: COLORS.background,
                foreground: COLORS.foreground,

                keyword: COLORS.keyword,
                string: COLORS.string,
                comment: COLORS.comment,

                function: COLORS.function,
                variable: COLORS.variable,

                type: COLORS.type,
                class: COLORS.class,

                number: COLORS.number,
                constant: COLORS.constant,

                operator: COLORS.operator
            }
        });

        registered = true;
    }


    // -----------------------------------------
    // UNREGISTER THEME
    // -----------------------------------------

    function destroy() {

        if (editorThemes && registered) {

            editorThemes.unregister(THEME_ID);

            registered = false;
        }

        editorThemes = null;
    }


    // -----------------------------------------
    // ACODE PLUGIN LIFECYCLE
    // -----------------------------------------

    acode.setPluginInit(PLUGIN_ID, init);

    acode.setPluginUnmount(PLUGIN_ID, destroy);

})();