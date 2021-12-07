import React, { useState, useEffect } from 'react';

const Kaur = () => {
    return (
        <div style={wrapperStyle}>
            <div style={largeTreeWrapper}>
                <Tree treeSize={100} treeOffset={70} />
                <Concise />
            </div>
            {Array.from({ length: 1500 }, (el, idx) => <Tree key={idx} />)}
        </div>
    )
}

const Tree = ({ treeSize = 16, treeOffset = 10, treeSpacing = 5 }) => {
    const [color, setColor] = useState(CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)]);

    const getRandColor = () => CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];

    useEffect(() => {
        const interval = setInterval(() => setColor(getRandColor()), 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'relative', width: (treeSize * 2) + treeSpacing, height: treeSize * 3 }}>
            {Array.from({ length: 3 }).map((el, idx) => {
                return (
                    <div key={idx} style={{
                        ...treeStyle,
                        top: (treeSize - treeOffset * idx),
                        borderLeft: `${treeSize}px solid transparent`,
                        borderRight: `${treeSize}px solid transparent`,
                        borderBottom: `${treeSize}px solid ${color === 'Red' ? getRandColor() : color}`,
                    }} />
                )
            })}
        </div>
    )
};

const concise = ["c", "o", "n", "c", "i", "s", "e"]

const Concise = () => {
    const [letters, setLetters] = useState(concise);

    useEffect(() => {
        const interval = setInterval(() => {
            setLetters(p => p.map(x => [Math.random(), x]).sort(([a], [b]) => a - b).map(([_, x]) => x))
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p style={{
            color: '#ff0',
            fontSize: 60,
            textShadow: '0 0 2px #10161e'
        }}>{letters}</p>
    )
}

const wrapperStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'start',
    overflow: 'hidden',
    position: 'relative',
};

const treeStyle = {
    width: 0,
    height: 0,
    position: 'absolute',
    pointerEvents: 'none',
    userSelect: 'none'
};

const largeTreeWrapper = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }

const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];

export default Kaur;
