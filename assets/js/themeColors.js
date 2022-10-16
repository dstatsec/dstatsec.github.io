const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
        root.style.setProperty(key, cssVars[key]);
    });
}

function dynamicPrimaryColor(primaryColor) {
    'use strict'
    
    primaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
            const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
            const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
            handleThemeUpdate({
                [cssPropName]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName1]: e.target.value + 95,
                [cssPropName2]: e.target.value,
            });
        });
    });
}
function dynamicBackgroundColor(BackgroundColor) {
    'use strict'
    
    BackgroundColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--dark-${e.target.getAttribute('data-id3')}`;
            const cssPropName1 = `--dark-${e.target.getAttribute('data-id4')}`;
            handleThemeUpdate({
                [cssPropName]: e.target.value + 'dd',
                [cssPropName1]: e.target.value,
            });
        });
    });
}

$(function () {
    'use strict'

    // Light theme color picker 
    const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');
    const dynamicBgColor = document.querySelectorAll('input.background-primary-light');

    // themeSwitch(LightThemeSwitchers);
    dynamicPrimaryColor(dynamicPrimaryLight);
    dynamicBackgroundColor(dynamicBgColor);

    localStorageBackup();
    checkOptions();
});

function localStorageBackup() {
    'use strict'
    // if there is a value stored, update color picker and background color
    // Used to retrive the data from local storage
    if (localStorage.zanexprimaryColor) {
        // document.getElementById('colorID').value = localStorage.zanexprimaryColor;
        document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.zanexprimaryColor);
        document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.zanexprimaryHoverColor);
        document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.zanexprimaryBorderColor);
    }
    
    if (localStorage.zanexbgColor) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        $('#myonoffswitch7').prop('checked', true);
        $('#myonoffswitch10').prop('checked', true);
        $('#myonoffswitch14').prop('checked', true);
        // document.getElementById('bgID').value = localStorage.zanexbgColor;
        document.querySelector('html').style.setProperty('--dark-body', localStorage.zanexbgColor);
        document.querySelector('html').style.setProperty('--dark-theme', localStorage.zanexthemeColor);
    }

    if(localStorage.zanexlightMode){
        document.querySelector('body')?.classList.add('light-mode');
		document.querySelector('body')?.classList.remove('dark-mode');
        $('#myonoffswitch6').prop('checked', true);
        $('#myonoffswitch8').prop('checked', true);
        $('#myonoffswitch12').prop('checked', true);
    }
    if(localStorage.zanexdarkMode){
        document.querySelector('body')?.classList.remove('light-mode');
		document.querySelector('body')?.classList.add('dark-mode');
        $('#myonoffswitch7').prop('checked', true);
        $('#myonoffswitch10').prop('checked', true);
        $('#myonoffswitch14').prop('checked', true);
    }
    
    if(localStorage.zanexhorizontal){
        document.querySelector('body').classList.add('horizontal')
    }
    
    if(localStorage.zanexhorizontalHover){
        document.querySelector('body').classList.add('horizontal-hover')
    }

    if(localStorage.zanexrtl){
        document.querySelector('body').classList.add('rtl')
    }

    if(localStorage.zanexclosedmenu){
        document.querySelector('body').classList.add('closed-leftmenu')
        $("#myonoffswitch23").prop("checked", true);
    }

    if(localStorage.zanexicontextmenu){
        document.querySelector('body').classList.add('icontext-menu')
        $("#myonoffswitch22").prop("checked", true);
    }

    if(localStorage.zanexiconoverlay){
        document.querySelector('body').classList.add('icon-overlay')
        $("#myonoffswitch21").prop("checked", true);
    }

    if(localStorage.zanexhoversubmenu){
        document.querySelector('body').classList.add('hover-submenu')
        $("#myonoffswitch24").prop("checked", true);
    }

    if(localStorage.zanexhoversubmenu1){
        document.querySelector('body').classList.add('hover-submenu1')
        $("#myonoffswitch25").prop("checked", true);
    }

    if(localStorage.zanexboxedwidth){
        document.querySelector('body').classList.add('layout-boxed')
        $("#myonoffswitch17").prop("checked", true);
    }

    if(localStorage.zanexscrollable){
        document.querySelector('body').classList.add('scrollable-layout')
        $("#myonoffswitch19").prop("checked", true);
    }
    

  // MENUS

  // LIGHT MENU
  if (localStorage.zanexLightmenu) {
    document.querySelector("body")?.classList.add("light-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    $("#myonoffswitch12").prop("checked", true);
  }

  // DARK MENU
  if (localStorage.zanexDarkmenu) {
    document.querySelector("body")?.classList.add("dark-menu");
    document.querySelector("body")?.classList.remove("light-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    $("#myonoffswitch14").prop("checked", true);
  }

  // COLOR MENU
  if (localStorage.zanexColormenu) {
    document.querySelector("body")?.classList.add("color-menu");
    document.querySelector("body")?.classList.remove("light-menu");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    $("#myonoffswitch13").prop("checked", true);
  }

  // GRADIENT MENU
  if (localStorage.zanexGradientmenu) {
    document.querySelector("body")?.classList.add("gradient-menu");
    document.querySelector("body")?.classList.remove("light-menu");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    $("#myonoffswitch15").prop("checked", true);
  }

  // HEADERS

  // LIGHT HEADER
  if (localStorage.zanexLightheader) {
    document.querySelector("body")?.classList.add("light-header");
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    $("#myonoffswitch8").prop("checked", true);
  }

  // DARK HEADER
  if (localStorage.zanexDarkheader) {
    document.querySelector("body")?.classList.add("dark-header");
    document.querySelector("body")?.classList.remove("light-header");
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    $("#myonoffswitch10").prop("checked", true);
  }

  // COLOR HEADER
  if (localStorage.zanexColorheader) {
    document.querySelector("body")?.classList.add("color-header");
    document.querySelector("body")?.classList.remove("light-header");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    $("#myonoffswitch9").prop("checked", true);
  }

  // GRADIENT HEADER
  if (localStorage.zanexGradientheader) {
    document.querySelector("body")?.classList.add("gradient-header");
    document.querySelector("body")?.classList.remove("light-header");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("color-header");
    $("#myonoffswitch11").prop("checked", true);
  }
}

// triggers on changing the color picker
function changePrimaryColor() {
    'use strict'
    
    var userColor = document.getElementById('colorID').value;
    localStorage.setItem('zanexprimaryColor', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('zanexprimaryHoverColor', userColor + 95);
    localStorage.setItem('zanexprimaryBorderColor', userColor);
    names()

}

// triggers on changing the color picker
function changeBackgroundColor() {
    'use strict'

    var userColor = document.getElementById('bgID').value;
    localStorage.setItem('zanexbgColor', userColor + 'dd');
    localStorage.setItem('zanexthemeColor', userColor);
    names()
  
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    $('#myonoffswitch7').prop('checked', true);
    $('#myonoffswitch10').prop('checked', true);
    $('#myonoffswitch14').prop('checked', true);
  
    localStorage.setItem("zanexdarkMode", true);
  }
// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
    // convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
    // get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
        if (typeof a !== "undefined") { return a / 255 }
        if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
            return 1
        }
        return alpha
    }
    // convertion of hex code to rgba code 
function hexToRgba(hexValue, alpha) {
    if (!isValidHex(hexValue)) { return null }
    const chunkSize = Math.floor((hexValue.length - 1) / 3)
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}


let myVarVal, myVarVal1, myVarVal2, myVarVal3

function names() {
    'use strict'

    let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();

    //get variable
    myVarVal = localStorage.getItem("zanexprimaryColor") || primaryColorVal;
    myVarVal1 = localStorage.getItem("zanexprimaryColor") || "#05c3fb";
    myVarVal2 = localStorage.getItem("zanexprimaryColor") || null;
    myVarVal3 = localStorage.getItem("zanexprimaryColor") || null;

    if(document.querySelector('#chartArea') !== null){
        chartArea();
    }

    if(document.querySelector('#recentorders') !== null){
        recentOrders();
    }
    
    let colorData = hexToRgba(myVarVal || "#6259ca", 0.1)
    document.querySelector('html').style.setProperty('--primary01', colorData);

    let colorData1 = hexToRgba(myVarVal || "#6259ca", 0.2)
    document.querySelector('html').style.setProperty('--primary02', colorData1);

    let colorData2 = hexToRgba(myVarVal || "#6259ca", 0.3)
    document.querySelector('html').style.setProperty('--primary03', colorData2);

    let colorData3 = hexToRgba(myVarVal || "#6259ca", 0.6)
    document.querySelector('html').style.setProperty('--primary06', colorData3);

    let colorData4 = hexToRgba(myVarVal || "#6259ca", 0.9)
    document.querySelector('html').style.setProperty('--primary09', colorData4);

}
names()

