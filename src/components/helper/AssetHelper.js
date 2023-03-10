
export const PanelList = {
    TextEditorPanel: 1,
    // IconEditorPanel: 2,
    // ImageEditorPanel: 3,
    // SettingEditorPanel:4,
    TaglineEditorPanel: 2,
    IconEditorPanel: 3,
    ContainerEditorPanel: 4,
    ExtrasEditorPanel: 5,
    PresetsEditorPanel: 6,
    ColorsEditorPanel: 7,
    ThemeEditorPanel: 8,
    SavedLogoEditorPanel: 9,
    IndustryEditorPanel: 10,
    StyleEditorPanel: 11,
    LogoTypeEditorPanel: 12,
    TextNameEditorPanel:13,
};

export const ToolsHeaderOptions={
    //need 9 tools for tools header
    BACKGROUND:'BACKGROUND',
    CLONE_DEL_ITEM:'CLONE_DEL_ITEM',
    ALIGN:'ALIGN',
    COLOR_REMIX:'COLOR_REMIX',
    LAYOUT:'LAYOUT',
    SEARCH:'SEARCH',
    FLIP:'FLIP',
    LAYERING:'LAYERING',
    ALIGN_WITH:'ALIGN_WITH',

}
export const ToolsForPanel = {
    1:{
        [ToolsHeaderOptions.BACKGROUND]:true,
        [ToolsHeaderOptions.CLONE_DEL_ITEM]:true,
        [ToolsHeaderOptions.ALIGN]:true,
        [ToolsHeaderOptions.LAYERING]:false,
    },
    2:{
        [ToolsHeaderOptions.BACKGROUND]:true,
        [ToolsHeaderOptions.CLONE_DEL_ITEM]:true,
        [ToolsHeaderOptions.ALIGN]:false,
        [ToolsHeaderOptions.LAYOUT]:false,
        [ToolsHeaderOptions.SEARCH]:false,
        [ToolsHeaderOptions.LAYERING]:false,
        [ToolsHeaderOptions.ALIGN_WITH]:true,

    },
    3:{
        [ToolsHeaderOptions.BACKGROUND]:true,
        [ToolsHeaderOptions.CLONE_DEL_ITEM]:true,
        [ToolsHeaderOptions.LAYOUT]:false,
        [ToolsHeaderOptions.ALIGN]:false,
        [ToolsHeaderOptions.FLIP]:true,
        [ToolsHeaderOptions.SEARCH]:false,
        [ToolsHeaderOptions.LAYERING]:false,

    },
    4:{
        [ToolsHeaderOptions.BACKGROUND]:true,
        [ToolsHeaderOptions.CLONE_DEL_ITEM]:true,
        [ToolsHeaderOptions.ALIGN]:true,
        [ToolsHeaderOptions.FLIP]:true,
        [ToolsHeaderOptions.SEARCH]:false,
        [ToolsHeaderOptions.LAYERING]:false,


    },
    5:{
        [ToolsHeaderOptions.BACKGROUND]:true,
        [ToolsHeaderOptions.COLOR_REMIX]:true,
        [ToolsHeaderOptions.CLONE_DEL_ITEM]:false,
        [ToolsHeaderOptions.LAYOUT]:false,
        [ToolsHeaderOptions.ALIGN]:false,
        [ToolsHeaderOptions.FLIP]:false,
        [ToolsHeaderOptions.LAYERING]:false,

    },
    6:{
        [ToolsHeaderOptions.BACKGROUND]:true,
        [ToolsHeaderOptions.SEARCH]:true,
        [ToolsHeaderOptions.LAYERING]:false,

    },
    7:{
        [ToolsHeaderOptions.BACKGROUND]:true,
        [ToolsHeaderOptions.COLOR_REMIX]:false,
        [ToolsHeaderOptions.LAYERING]:false,

    },
    8:{
        [ToolsHeaderOptions.BACKGROUND]:true,
    },
    9:{
        [ToolsHeaderOptions.BACKGROUND]:true,
    },
    10:{
        [ToolsHeaderOptions.BACKGROUND]:true,
    },
    11:{
        [ToolsHeaderOptions.BACKGROUND]:true,
    },
    12:{
        [ToolsHeaderOptions.BACKGROUND]:true,
    },
    13:{
        [ToolsHeaderOptions.BACKGROUND]:true,
        [ToolsHeaderOptions.CLONE_DEL_ITEM]:true,
        [ToolsHeaderOptions.ALIGN]:true,
        [ToolsHeaderOptions.LAYERING]:true,
    }

};


// export const ToolsHeaderOptions={
//     //need 15 tools for tools header
//     BACKGROUND:'BACKGROUND',
//     DELETE_ITEM:'DELETE_ITEM',
//     CLONE_ITEM:'CLONE_ITEM',
//     TEXT_ALIGN:'TEXT_ALIGN',
//     COLOR_MIXER:'COLOR_MIXER',
//     TAGLINE_LAYOUT:'TAGLINE_LAYOUT',
//     FONT_SEARCH:'FONT_SEARCH',
//     ICON_ALIGN:'ICON_ALIGN',
//     ICON_LAYOUT:'ICON_LAYOUT',
//     FLIP:'FLIP',
//     ICON_SEARCH:'ICON_SEARCH',
//     CONTAINER_ALIGN:'CONTAINER_ALIGN',
//     CONTAINER_SEARCH:'CONTAINER_SEARCH',
//     COLOR_REMIX:'COLOR_REMIX',
//     EXTRA_LAYOUT:'EXTRA_LAYOUT',
//     EXTRA_ALIGN:'EXTRA_ALIGN',
// }

// export const ToolsForPanel = {
//     1:{
//         [ToolsHeaderOptions.BACKGROUND]:true,
//         [ToolsHeaderOptions.CLONE_DEL_ITEM]:true,
//         [ToolsHeaderOptions.CLONE_ITEM]:true,
//         [ToolsHeaderOptions.TEXT_ALIGN]:true,
//     },
//     2:{
//         [ToolsHeaderOptions.BACKGROUND]:true,
//         [ToolsHeaderOptions.DELETE_ITEM]:true,
//         [ToolsHeaderOptions.CLONE_ITEM]:true,
//         [ToolsHeaderOptions.TEXT_ALIGN]:true,
//         [ToolsHeaderOptions.TAGLINE_LAYOUT]:true,
//         [ToolsHeaderOptions.FONT_SEARCH]:false,
//     },
//     3:{
//         [ToolsHeaderOptions.BACKGROUND]:true,
//         [ToolsHeaderOptions.DELETE_ITEM]:true,
//         [ToolsHeaderOptions.CLONE_ITEM]:true,
//         [ToolsHeaderOptions.ICON_LAYOUT]:true,
//         [ToolsHeaderOptions.ICON_ALIGN]:true,
//         [ToolsHeaderOptions.FLIP]:true,
//         [ToolsHeaderOptions.ICON_SEARCH]:false,
//
//     },
//     4:{
//         [ToolsHeaderOptions.BACKGROUND]:true,
//         [ToolsHeaderOptions.DELETE_ITEM]:true,
//         [ToolsHeaderOptions.CLONE_ITEM]:true,
//         [ToolsHeaderOptions.CONTAINER_ALIGN]:true,
//         [ToolsHeaderOptions.FLIP]:true,
//         [ToolsHeaderOptions.CONTAINER_SEARCH]:false,
//
//     },
//     5:{
//         [ToolsHeaderOptions.BACKGROUND]:true,
//         [ToolsHeaderOptions.COLOR_REMIX]:true,
//
//         [ToolsHeaderOptions.DELETE_ITEM]:false,
//         [ToolsHeaderOptions.CLONE_ITEM]:false,
//
//         [ToolsHeaderOptions.EXTRA_LAYOUT]:false,
//         [ToolsHeaderOptions.EXTRA_ALIGN]:false,
//         [ToolsHeaderOptions.FLIP]:false,
//
//     },
//      6:{
//          [ToolsHeaderOptions.BACKGROUND]:true,
//          [ToolsHeaderOptions.FONT_SEARCH]:true,
//
//      }
//
// };

export const steps = {
    BUSINESS: 1,
    EXTRA_DETAIL: 2,
    CHOOSE_INDUSTRY: 3,
    CHOOSE_STYLE: 4,
    MARK_TYPE: 5,
    FILTER_PANEL: 6,
    DESIGNER: 10,
}

export const ColorVariables = {
    mildText: "#C2CBD0",
    superLight: "#ECEEF0",
    subHeadings: "#74838C",
    headingDark: "#121223",
    darkAccent: "#121223",
    accent: "#434B57",
    normalGray:'#74838C',
    iconDefault: '#74838C',
    superLightGray2:'#ECEEF0'
};

export const containerRuleOptions={
    unlimitedTextLength:'unlimitedTextLength',
    minWidthMaintainFont:'minWidthMaintainFont',
    fixedContainer:'fixedContainer',
}
export const fixedContainerRuleOptions={
    fixedWidthVariableHeight:'fixedWidthVariableHeight',
    fixedSizeVariableKerning:'fixedSizeVariableKerning',
}
export const BASE_URL = 'https://dev.logoflow.io/';

export const lineLayoutValues={
    ABOVE_ICON:'ABOVE_ICON',
    BELOW_NAME:'BELOW_NAME',
    BW_ICON_NAME:'BW_ICON_NAME',
    BW_TAGLINE_NAME:'BW_TAGLINE_NAME',

}

export const fontsList = [
    "Arial",
    "Times",
    "Modak",
    "Dancing Script",
    "Lobster",
    "Press Start 2P",
    "Monoton",
    "Pinyon Script",
    "Mrs Saint Delafield",
    "Changa One",
    "Love Ya Like A Sister",
    "Unifraktur Maguntia",
    "Cutive",
    "Limelight",
    "Spicy Rice",
    "Mouse Memoirs",
    "Bad Script",
    "Homemade Apple",
    "BenchNine",
    "Cinzel",
    "Permanent Marker",
    "Fredoka One",
    "Amatic SC",
    "Comfortaa",
    "Indie Flower",
    "Pacifico",
    "Fjalla One",
    "PT Serif",
    "Roboto Condensed",
    "Open Sans",
    "Montserrat",
    "Lora",
    "Alex Brush",
    "Bungee Shade",
    "Covered By Your Grace",
    "Crafty Girls",
    "Graduate",
    "Great Vibes",
    "Julius",
    "League Script",
    "Miss Fajardose",
    "Rouge",
    "Sacramento",
    "Sniglet",
    "Sofia",
    "Alfa Slab One",
    "Biryani",
    "Black Ops One",
    "Courier Prime",
    "Fredericka the Great",
    "Grand Hotel",
    "Josefin Sans",
    "Metal Mania",
    "Parisienne",
    "Raleway",
    "Rampart One",
    "Slackey",
    "Sorts Mill Goudy"
].sort();