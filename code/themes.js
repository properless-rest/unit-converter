

export function switchToLightTheme() {
    darkSwitcher.classList.remove("theme-selected");
    lightSwitcher.classList.add("theme-selected");
    const { 
        bg, mainBorder, heroThemeSwitcher, heroThemeHover, 
        heroBg, heroText, heroInputBorder, 
        heroBtnBg, heroBtnBgHover, heroBtnTxt, 
        convBg, convDivBg, convDivUnit, convDivTxt 
    } = themeLight;
    CSSRoot.style.setProperty('--bg', bg);
    CSSRoot.style.setProperty('--main-border', mainBorder);
    CSSRoot.style.setProperty('--hero-theme-switcher', heroThemeSwitcher);
    CSSRoot.style.setProperty('--hero-theme-hover', heroThemeHover);
    CSSRoot.style.setProperty('--hero-bg', heroBg);
    CSSRoot.style.setProperty('--hero-text', heroText);
    CSSRoot.style.setProperty('--hero-input-border', heroInputBorder);
    CSSRoot.style.setProperty('--hero-btn-bg', heroBtnBg);
    CSSRoot.style.setProperty('--hero-btn-bg-hover', heroBtnBgHover);
    CSSRoot.style.setProperty('--hero-btn-txt', heroBtnTxt);
    CSSRoot.style.setProperty('--conv-bg', convBg);
    CSSRoot.style.setProperty('--conv-div-bg', convDivBg);
    CSSRoot.style.setProperty('--conv-div-unit', convDivUnit);
    CSSRoot.style.setProperty('--conv-div-txt', convDivTxt);
}


export function switchToDarkTheme() {
    lightSwitcher.classList.remove("theme-selected");
    darkSwitcher.classList.add("theme-selected");
    const { 
        bg, mainBorder, heroThemeSwitcher, heroThemeHover, 
        heroBg, heroText, heroInputBorder, 
        heroBtnBg, heroBtnBgHover, heroBtnTxt, 
        convBg, convDivBg, convDivUnit, convDivTxt 
    } = themeDark;
    CSSRoot.style.setProperty('--bg', bg);
    CSSRoot.style.setProperty('--main-border', mainBorder);
    CSSRoot.style.setProperty('--hero-theme-switcher', heroThemeSwitcher);
    CSSRoot.style.setProperty('--hero-theme-hover', heroThemeHover);
    CSSRoot.style.setProperty('--hero-bg', heroBg);
    CSSRoot.style.setProperty('--hero-text', heroText);
    CSSRoot.style.setProperty('--hero-input-border', heroInputBorder);
    CSSRoot.style.setProperty('--hero-btn-bg', heroBtnBg);
    CSSRoot.style.setProperty('--hero-btn-bg-hover', heroBtnBgHover);
    CSSRoot.style.setProperty('--hero-btn-txt', heroBtnTxt);
    CSSRoot.style.setProperty('--conv-bg', convBg);
    CSSRoot.style.setProperty('--conv-div-bg', convDivBg);
    CSSRoot.style.setProperty('--conv-div-unit', convDivUnit);
    CSSRoot.style.setProperty('--conv-div-txt', convDivTxt);
}

   
export const lightSwitcher = document.getElementById("switch-light");
export const darkSwitcher = document.getElementById("switch-dark");

const CSSRoot = document.documentElement;

const themeLight = {
    bg: "#f5f5f5",
    mainBorder: "#000000",
    heroThemeSwitcher: "#bae6fd",
    heroThemeHover: "#fafafa",
    heroBg: "#0284c7",
    heroText: "#ffffff",
    heroInputBorder: "#b295ff",
    heroBtnBg: "#ffffff",
    heroBtnBgHover: "#efefef",
    heroBtnTxt: "#3d3d3d",
    convBg: "#f4f4f4",
    convDivBg: "#ffffff",
    convDivUnit:"#5a537b",
    convDivTxt: "#353535"
}
    
const themeDark = {
    bg: "#d1d1d1",
    mainBorder: "#000000",
    heroThemeSwitcher: "#b295ff",
    heroThemeHover: "#dfdfdf",
    heroBg: "#6943ff",
    heroText: "#ffffff",
    heroInputBorder: "#b295ff",
    heroBtnBg: "#ffffff",
    heroBtnBgHover: "#efefef",
    heroBtnTxt: "#3d3d3d",
    convBg: "#1f2937",
    convDivBg: "#273549",
    convDivUnit:"#ccc1ff",
    convDivTxt: "#fff"
}
