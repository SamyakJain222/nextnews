const themes = [
    {
        Header: "/catsDomain/headerPaws.png",
        Card: "/catsDomain/cardPaws.png",
        Footer: "/catsDomain/footerPaws.jpg"
    },
    {
        Header: "/JapDomain/headerJp.jpg",
        Card: "/JapDomain/cardJp.jpg",
        Footer: "/JapDomain/footerJp.jpg"
    }
]

const getThemeObj = (hostname) => {
    const themeSelector = hostname.split('.')[0];

    switch (themeSelector) {
        case "cats":
            return themes[0];
            break;
        case "jp":
            return themes[1];
            break;
    }
    
    return {};
};

export default getThemeObj;