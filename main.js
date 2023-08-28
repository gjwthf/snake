const mainWindow = document.querySelector('.main-window');

const menu = document.querySelector('.menu');
const startBtn = document.querySelector('.menu__start');
const themesBtn = document.querySelector('.menu__themes');
const skinsBtn = document.querySelector('.menu__skins');
const testBtn = document.querySelector('.menu__test');

const themesWindow = document.querySelector('.themes');
const backFromThemesBtn = document.querySelector('.themes__back');
const setGreenThemeBtn = document.querySelector('[color="green"]');
const setBlueThemeBtn = document.querySelector('[color="blue"]');
const setWhiteThemeBtn = document.querySelector('[color="white"]');
const setBlackThemeBtn = document.querySelector('[color="black"]');

const skinsWindow = document.querySelector('.skins');
const backFromSkinsBtn = document.querySelector('.skins__back');
//
const setGreenSnakeBtn = document.querySelector('[snake="green"]');
const setYellowSnakeBtn = document.querySelector('[snake="yellow"]');
const setRubikSnakeBtn = document.querySelector('[snake="rubik"]');
const setFierySnakeBtn = document.querySelector('[snake="fiery"]');
const setWhitenSnakeBtn = document.querySelector('[snake="white"]');
const setBlackSnakeBtn = document.querySelector('[snake="black"]');
//
const setSnakeHeadBtn = document.querySelector('[head="snake"]');
const setGruHeadBtn = document.querySelector('[head="gru"]');
const setSteveHeadBtn = document.querySelector('[head="steve"]');
const setJunkHeadBtn = document.querySelector('[head="junk"]');
//
const setAppleFoodBtn = document.querySelector('[food="apple"]');
const setPenisFoodBtn = document.querySelector('[food="penis"]');
const setMinionFoodBtn = document.querySelector('[food="minion"]');
const setBurgerFoodBtn = document.querySelector('[food="burger"]');
const setCreeperFoodBtn = document.querySelector('[food="creeper"]');
const setMarijuanaFoodBtn = document.querySelector('[food="marijuana"]');

const mainTitle = document.querySelector('.title');
const winningTitle = document.querySelector('.winning__title');
const menuTitle = document.querySelector('.menu__title');

const game = document.querySelector('.game');

const losingWindow = document.querySelector('.losing');
const losingTitle = document.querySelector('.losing__title');
const restartBtn = document.querySelector('.losing__restart');
const backFromLosingWindowBtn = document.querySelector('.losing__menu');

const winningWindow = document.querySelector('.winning');
const winningBtn = document.querySelector('.winning__button');

let paused = false;
let pause = document.createElement('div');
pause.style.cssText = `
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`

const menuInPauseBtn = document.createElement('button');
menuInPauseBtn.textContent = 'menu';
menuInPauseBtn.className = 'menu-pause';
pause.append(menuInPauseBtn);

skinsBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 1000px;
        height: 750px;
        margin-top: 40px;
        border-radius: 0;
    `;
    saveTheme(theme);
    menu.hidden = true;
    setTimeout(() => skinsWindow.hidden = false, 500);
}

backFromSkinsBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 500px;
        height: 400px;
        margin-top: 200px;
        border-radius: 20px;
    `;
    saveTheme(theme);
    skinsWindow.hidden = true;
    menu.hidden = false;
}

let snakeSkin = 'green';
let headSkin = 'snake';
let foodSkin = 'apple';

setGreenSnakeBtn.onclick = function() {
    snakeSkin = 'green';
    setGreenSnakeBtn.setAttribute('activated', 'true');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setYellowSnakeBtn.onclick = function() {
    snakeSkin = 'yellow';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'true');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setRubikSnakeBtn.onclick = function() {
    snakeSkin = 'rubik';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'true');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setFierySnakeBtn.onclick = function() {
    snakeSkin = 'fiery';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'true');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setWhitenSnakeBtn.onclick = function() {
    snakeSkin = 'white';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'true');
    setBlackSnakeBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setBlackSnakeBtn.onclick = function() {
    snakeSkin = 'black';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'true');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
//
setSnakeHeadBtn.onclick = function() {
    headSkin = 'snake';
    setSnakeHeadBtn.setAttribute('activated', 'true');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setGruHeadBtn .onclick = function() {
    headSkin = 'gru';
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'true');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setSteveHeadBtn.onclick = function() {
    headSkin = 'steve';
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'true');
    setJunkHeadBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setJunkHeadBtn.onclick = function() {
    headSkin = 'junk';
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'true');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
//
setAppleFoodBtn.onclick = function() {
    foodSkin = 'apple';
    setAppleFoodBtn.setAttribute('activated', 'true');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');

    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setPenisFoodBtn.onclick = function() {
    foodSkin = 'penis';
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'true');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setMinionFoodBtn.onclick = function() {
    foodSkin = 'minion';
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'true');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setBurgerFoodBtn.onclick = function() {
    foodSkin = 'burger';
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'true');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setCreeperFoodBtn.onclick = function() {
    foodSkin = 'creeper';
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'true');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}
setMarijuanaFoodBtn.onclick = function() {
    foodSkin = 'marijuana';
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'true');
    if (theme == 'white') {
        let activatedButtons = document.querySelectorAll('[activated="true"]');
        for (let btn of activatedButtons) {
            btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
        }
        let unactivatedButtons = document.querySelectorAll('[activated="false"]');
        for (let btn of unactivatedButtons) {
            btn.style.backgroundImage = '';
        }
    }
}

menuInPauseBtn.onclick = function() {
    pause.remove();
    mainWindow.style.cssText = `
        width: 500px;
        height: 400px;
        margin-top: 200px;
        border-radius: 20px;
    `; 
    saveTheme(theme);
    coordsSnake = [];
    randomButton(rand(1, 4));
    losing = 0;
    switchDirection(currentBtn);
    clearInterval(intervalId);
    game.innerHTML = '';
    game.style.cssText = `width: 0; height: 0`;
    menu.hidden = false;
    paused = !paused;
}

document.addEventListener('keydown', (event) => {
    if (event.code == 'Space' && coordsSnake.length > 0) {
        clearInterval(intervalId);
        paused = !paused;
        if (!paused) {
            pause.remove();
            intervalId = setInterval(() => {
                eatingFood();
                if (ate) {
                    coordsSnake.push([lastCoord[0], lastCoord[1]]);
                    ate = false;
                }
                
                if (losing) {
                    losing = 0;
                    coordsSnake = [];
                    randomButton(rand(1, 4));
                    switchDirection(currentBtn);
                    clearInterval(intervalId);
                    setTimeout(() => {
                        game.innerHTML = '';
                        game.style.cssText = `width: 0; height: 0`;
                        losingWindow.hidden = false;
                        losingIntervalId = setInterval(() => {
                            losingTitle.style.color = '#ff0000';
                            setTimeout(() => {
                                if (theme == 'white') {
                                    losingTitle.style.color = '#000';
                                } else {
                                    losingTitle.style.color = '#fff';
                                }
                            }, 1000);
                        }, 2000);
                    }, 1000);
                }
                if (coordsSnake.length > 1199) {
                    coordsSnake = [];
                    randomButton(rand(1, 4));
                    switchDirection(currentBtn);
                    clearInterval(intervalId);
                    setTimeout(() => {
                        game.innerHTML = '';
                        game.style.cssText = `width: 0; height: 0`;
                        winningWindow.hidden = false;
                        setTimeout(() => {
                            winningWindow.style.opacity = '1';
                        });
                    }, 1000);
                }
                move(currentBtn);
                permissionToPressButtnon = 1;
            }, 100);
        } else {
            document.body.append(pause);
        }
    }
});

themesBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 1000px;
        height: 750px;
        margin-top: 40px;
        border-radius: 0;
    `;
    saveTheme(theme);
    menu.hidden = true;
    setTimeout(() => themesWindow.hidden = false, 500);
}

let theme = 'green';
setGreenThemeBtn.onclick = function() {
    theme = 'green';
    setGreenThemeBtn.setAttribute('activated', 'true');
    setBlueThemeBtn.setAttribute('activated', 'false');
    setWhiteThemeBtn.setAttribute('activated', 'false');
    setBlackThemeBtn.setAttribute('activated', 'false');

    mainTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #0a7c00;
    `
    winningTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #0a7c00;
    `
    document.body.style.cssText = `
        background-color: #002e1f;
    `
    losingTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #000;
    `
    mainWindow.style.backgroundColor = 'rgba(16, 138, 0, 0.25)';
    mainWindow.style.border = '3px solid green';

    const themesImgs = themesWindow.querySelectorAll('img');
    const skinsImgs = skinsWindow.querySelectorAll('img');
    for (let img of themesImgs) {
        img.style.border = '3px solid green';
    }
    for (let img of skinsImgs) {
        img.style.border = '3px solid green';
    }

    menuTitle.style.color = '#fff';
    startBtn.style.border = '0';
    themesBtn.style.border = '0';
    skinsBtn.style.border = '0';
    testBtn.style.border = '0';
    menuInPauseBtn.style.border = '0';
    restartBtn.style.border = '0';
    backFromLosingWindowBtn.style.border = '0';
    winningBtn.style.border = '0';
    backFromThemesBtn.style.border = '0';
    setGreenThemeBtn.style.border = '3px solid #fff';
    setBlueThemeBtn.style.border = '3px solid #fff';
    setWhiteThemeBtn.style.border = '3px solid #fff';
    setBlackThemeBtn.style.border = '3px solid #fff';
    backFromSkinsBtn.style.border = '0';
    
    setGreenSnakeBtn.style.border = '3px solid #fff';
    setYellowSnakeBtn.style.border = '3px solid #fff';
    setRubikSnakeBtn.style.border = '3px solid #fff';
    setFierySnakeBtn.style.border = '3px solid #fff';
    setWhitenSnakeBtn.style.border = '3px solid #fff';
    setBlackSnakeBtn.style.border = '3px solid #fff';
    setSnakeHeadBtn.style.border = '3px solid #fff';
    setGruHeadBtn.style.border = '3px solid #fff';
    setSteveHeadBtn.style.border = '3px solid #fff';
    setJunkHeadBtn.style.border = '3px solid #fff';
    setAppleFoodBtn.style.border = '3px solid #fff';
    setPenisFoodBtn.style.border = '3px solid #fff';
    setMinionFoodBtn.style.border = '3px solid #fff';
    setBurgerFoodBtn.style.border = '3px solid #fff';
    setCreeperFoodBtn.style.border = '3px solid #fff';
    setMarijuanaFoodBtn.style.border = '3px solid #fff';

    let activatedButtons = document.querySelectorAll('[activated="true"]');
    for (let btn of activatedButtons) {
        btn.style.backgroundImage = '';
    }

    let unactivatedButtons = document.querySelectorAll('[activated="false"]');
    for (let btn of unactivatedButtons) {
        btn.style.backgroundImage = '';
    }
}

setBlueThemeBtn.onclick = function() {
    theme = 'blue';
    setGreenThemeBtn.setAttribute('activated', 'false');
    setBlueThemeBtn.setAttribute('activated', 'true');
    setWhiteThemeBtn.setAttribute('activated', 'false');
    setBlackThemeBtn.setAttribute('activated', 'false');

    mainTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #0004ff;
    `
    winningTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #0004ff;
    `
    document.body.style.cssText = `
        background-color: #00012e;
    `
    losingTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    mainWindow.style.backgroundColor = 'rgba(12, 0, 180, 0.25)';
    mainWindow.style.border = '3px solid blue';

    const themesImgs = themesWindow.querySelectorAll('img');
    const skinsImgs = skinsWindow.querySelectorAll('img');
    for (let img of themesImgs) {
        img.style.border = '3px solid blue';
    }
    for (let img of skinsImgs) {
        img.style.border = '3px solid blue';
    }

    menuTitle.style.color = '#fff';
    startBtn.style.border = '0';
    themesBtn.style.border = '0';
    skinsBtn.style.border = '0';
    testBtn.style.border = '0';
    menuInPauseBtn.style.border = '0';
    restartBtn.style.border = '0';
    backFromLosingWindowBtn.style.border = '0';
    winningBtn.style.border = '0';
    backFromThemesBtn.style.border = '0';
    setGreenThemeBtn.style.border = '3px solid #fff';
    setBlueThemeBtn.style.border = '3px solid #fff';
    setWhiteThemeBtn.style.border = '3px solid #fff';
    setBlackThemeBtn.style.border = '3px solid #fff';
    backFromSkinsBtn.style.border = '0';

    setGreenSnakeBtn.style.border = '3px solid #fff';
    setYellowSnakeBtn.style.border = '3px solid #fff';
    setRubikSnakeBtn.style.border = '3px solid #fff';
    setFierySnakeBtn.style.border = '3px solid #fff';
    setWhitenSnakeBtn.style.border = '3px solid #fff';
    setBlackSnakeBtn.style.border = '3px solid #fff';
    setSnakeHeadBtn.style.border = '3px solid #fff';
    setGruHeadBtn.style.border = '3px solid #fff';
    setSteveHeadBtn.style.border = '3px solid #fff';
    setJunkHeadBtn.style.border = '3px solid #fff';
    setAppleFoodBtn.style.border = '3px solid #fff';
    setPenisFoodBtn.style.border = '3px solid #fff';
    setMinionFoodBtn.style.border = '3px solid #fff';
    setBurgerFoodBtn.style.border = '3px solid #fff';
    setCreeperFoodBtn.style.border = '3px solid #fff';
    setMarijuanaFoodBtn.style.border = '3px solid #fff';

    let activatedButtons = document.querySelectorAll('[activated="true"]');
    for (let btn of activatedButtons) {
        btn.style.backgroundImage = '';
    }

    let unactivatedButtons = document.querySelectorAll('[activated="false"]');
    for (let btn of unactivatedButtons) {
        btn.style.backgroundImage = '';
    }
}

setBlackThemeBtn.onclick = function() {
    theme = 'black';
    setGreenThemeBtn.setAttribute('activated', 'false');
    setBlueThemeBtn.setAttribute('activated', 'false');
    setWhiteThemeBtn.setAttribute('activated', 'false');
    setBlackThemeBtn.setAttribute('activated', 'true');

    mainTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    document.body.style.cssText = `
        background-color: #000;
    `
    losingTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    winningTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    mainWindow.style.backgroundColor = '#000';
    mainWindow.style.border = '3px solid #fff';

    const themesImgs = themesWindow.querySelectorAll('img');
    const skinsImgs = skinsWindow.querySelectorAll('img');
    for (let img of themesImgs) {
        img.style.border = '3px solid #fff';
    }
    for (let img of skinsImgs) {
        img.style.border = '3px solid #fff';
    }

    menuTitle.style.color = '#fff';
    startBtn.style.border = '0';
    themesBtn.style.border = '0';
    skinsBtn.style.border = '0';
    testBtn.style.border = '0';
    menuInPauseBtn.style.border = '0';
    restartBtn.style.border = '0';
    backFromLosingWindowBtn.style.border = '0';
    winningBtn.style.border = '0';
    backFromThemesBtn.style.border = '0';
    setGreenThemeBtn.style.border = '3px solid #fff';
    setBlueThemeBtn.style.border = '3px solid #fff';
    setWhiteThemeBtn.style.border = '3px solid #fff';
    setBlackThemeBtn.style.border = '3px solid #fff';
    backFromSkinsBtn.style.border = '0';

    setGreenSnakeBtn.style.border = '3px solid #fff';
    setYellowSnakeBtn.style.border = '3px solid #fff';
    setRubikSnakeBtn.style.border = '3px solid #fff';
    setFierySnakeBtn.style.border = '3px solid #fff';
    setWhitenSnakeBtn.style.border = '3px solid #fff';
    setBlackSnakeBtn.style.border = '3px solid #fff';
    setSnakeHeadBtn.style.border = '3px solid #fff';
    setGruHeadBtn.style.border = '3px solid #fff';
    setSteveHeadBtn.style.border = '3px solid #fff';
    setJunkHeadBtn.style.border = '3px solid #fff';
    setAppleFoodBtn.style.border = '3px solid #fff';
    setPenisFoodBtn.style.border = '3px solid #fff';
    setMinionFoodBtn.style.border = '3px solid #fff';
    setBurgerFoodBtn.style.border = '3px solid #fff';
    setCreeperFoodBtn.style.border = '3px solid #fff';
    setMarijuanaFoodBtn.style.border = '3px solid #fff';

    let activatedButtons = document.querySelectorAll('[activated="true"]');
    for (let btn of activatedButtons) {
        btn.style.backgroundImage = '';
    }

    let unactivatedButtons = document.querySelectorAll('[activated="false"]');
    for (let btn of unactivatedButtons) {
        btn.style.backgroundImage = '';
    }
}

setWhiteThemeBtn.onclick = function() {
    theme = 'white';
    setGreenThemeBtn.setAttribute('activated', 'false');
    setBlueThemeBtn.setAttribute('activated', 'false');
    setWhiteThemeBtn.setAttribute('activated', 'true');
    setBlackThemeBtn.setAttribute('activated', 'false');

    mainTitle.style.cssText = `
        color: #000;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    document.body.style.cssText = `
        background-color: #fff;
    `
    losingTitle.style.cssText = `
        color: #000;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    winningTitle.style.cssText = `
        color: #000;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    mainWindow.style.backgroundColor = '#fff';
    mainWindow.style.border = '3px solid #000';

    const themesImgs = themesWindow.querySelectorAll('img');
    const skinsImgs = skinsWindow.querySelectorAll('img');
    for (let img of themesImgs) {
        img.style.border = '3px solid #000';
    }
    for (let img of skinsImgs) {
        img.style.border = '3px solid #000';
    }

    menuTitle.style.color = '#000';
    startBtn.style.border = '1px solid #000';
    themesBtn.style.border = '1px solid #000';
    skinsBtn.style.border = '1px solid #000';
    testBtn.style.border = '1px solid #000';
    menuInPauseBtn.style.border = '1px solid #000';
    restartBtn.style.border = '1px solid #000';
    backFromLosingWindowBtn.style.border = '1px solid #000';
    winningBtn.style.border = '1px solid #000';
    backFromThemesBtn.style.border = '1px solid #000';
    setGreenThemeBtn.style.border = '3px solid #000';
    setBlueThemeBtn.style.border = '3px solid #000';
    setWhiteThemeBtn.style.border = '3px solid #000';
    setBlackThemeBtn.style.border = '3px solid #000';
    setWhiteThemeBtn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
    backFromSkinsBtn.style.border = '1px solid #000';

    setGreenSnakeBtn.style.border = '3px solid #000';
    setYellowSnakeBtn.style.border = '3px solid #000';
    setRubikSnakeBtn.style.border = '3px solid #000';
    setFierySnakeBtn.style.border = '3px solid #000';
    setWhitenSnakeBtn.style.border = '3px solid #000';
    setBlackSnakeBtn.style.border = '3px solid #000';
    setSnakeHeadBtn.style.border = '3px solid #000';
    setGruHeadBtn.style.border = '3px solid #000';
    setSteveHeadBtn.style.border = '3px solid #000';
    setJunkHeadBtn.style.border = '3px solid #000';
    setAppleFoodBtn.style.border = '3px solid #000';
    setPenisFoodBtn.style.border = '3px solid #000';
    setMinionFoodBtn.style.border = '3px solid #000';
    setBurgerFoodBtn.style.border = '3px solid #000';
    setCreeperFoodBtn.style.border = '3px solid #000';
    setMarijuanaFoodBtn.style.border = '3px solid #000';

    let activatedButtons = document.querySelectorAll('[activated="true"]');
    for (let btn of activatedButtons) {
        btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
    }
}

backFromThemesBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 500px;
        height: 400px;
        margin-top: 200px;
        border-radius: 20px;
    `;
    saveTheme(theme);
    themesWindow.hidden = true;
    menu.hidden = false;
}

testBtn.onclick = function() {
    alert(`Ваш IQ — ${rand(0, 228)}`);
}

startBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 1000px;
        height: 750px;
        margin-top: 40px;
        border-radius: 0;
    `;
    saveTheme(theme);
    menu.hidden = true;
    game.style.cssText = `width: 100%; height: 100%`;
    setTimeout(startGame, 500);
}

let losingIntervalId;
restartBtn.onclick = function() {
    clearInterval(losingIntervalId);
    losingTitle.style.color = '#fff';
    losingWindow.hidden = true;
    game.style.cssText = `width: 100%; height: 100%`;
    startGame();
}

winningBtn.onclick = function() {
    winningWindow.hidden = true;
    game.style.cssText = `width: 100%; height: 100%`;
    winningWindow.style.opacity = '0';
    startGame();
}

backFromLosingWindowBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 500px;
        height: 400px;
        margin-top: 200px;
        border-radius: 20px;
    `; 
    saveTheme(theme);
    clearInterval(losingIntervalId);
    losingTitle.style.color = '#fff';
    losingWindow.hidden = true;
    menu.hidden = false;
}

//////////////////////////////////////////
// Main functions

// Field
function createField() {
    const table = document.createElement('table');
    table.style.cssText = `
        width: 100%;
        height: 100%;
        border-spacing: 0;
    `
    game.append(table);
    const tbody = document.createElement('tbody');
    tbody.style.cssText = `
        width: 100%;
        height: 100%;
    `
    table.append(tbody);
    for (let i = 0; i < 30; i++) {
        const row = document.createElement('tr');
        tbody.append(row);
        for (let j = 0; j < 40; j++) {
            const cell = document.createElement('td');
            cell.setAttribute('data-positionX', j+1);
            cell.setAttribute('data-positionY', i+1);
            row.append(cell);
        }
    }
}

// Array with coords of snake
let coordsSnake = [];

// Spawn
let direction = rand(1, 4);
function randowSpawn() {
    const spawnX = rand(10, 30);
    const spawnY = rand(10, 20);

    paintCell(spawnX, spawnY, headSkin);
    coordsSnake.push([spawnX, spawnY]);

    switch (direction) {
        case 1:
            paintCell(spawnX, spawnY - 1, snakeSkin);
            coordsSnake.push([spawnX, spawnY - 1]);
            paintCell(spawnX, spawnY - 2, snakeSkin);
            coordsSnake.push([spawnX, spawnY - 2]);
            break;
        case 2:
            paintCell(spawnX + 1, spawnY, snakeSkin);
            coordsSnake.push([spawnX + 1, spawnY]);
            paintCell(spawnX + 2, spawnY, snakeSkin);
            coordsSnake.push([spawnX + 2, spawnY]);
            break;
        case 3:
            paintCell(spawnX, spawnY + 1, snakeSkin);
            coordsSnake.push([spawnX, spawnY + 1]);
            paintCell(spawnX, spawnY + 2, snakeSkin);
            coordsSnake.push([spawnX, spawnY + 2]);
            break;
        case 4:
            paintCell(spawnX - 1, spawnY, snakeSkin);
            coordsSnake.push([spawnX - 1, spawnY]);
            paintCell(spawnX - 2, spawnY, snakeSkin);
            coordsSnake.push([spawnX - 2, spawnY]);
            break;
    }
}

// Start game
let losing = 0;
let intervalId;
function startGame() {
    createField();
    randowSpawn();
    spawnFood();
    intervalId = setInterval(() => {
        eatingFood();
        if (ate) {
            coordsSnake.push([lastCoord[0], lastCoord[1]]);
            ate = false;
        }
        
        if (losing) {
            losing = 0;
            coordsSnake = [];
            randomButton(rand(1, 4));
            switchDirection(currentBtn);
            clearInterval(intervalId);
            setTimeout(() => {
                game.innerHTML = '';
                game.style.cssText = `width: 0; height: 0`;
                losingWindow.hidden = false;
                losingIntervalId = setInterval(() => {
                    losingTitle.style.color = '#ff0000';
                    setTimeout(() => {
                        if (theme == 'white') {
                            losingTitle.style.color = '#000';
                        } else {
                            losingTitle.style.color = '#fff';
                        }
                    }, 1000);
                }, 2000);
            }, 1000);
        }
        if (coordsSnake.length > 1199) {
            coordsSnake = [];
            randomButton(rand(1, 4));
            switchDirection(currentBtn);
            clearInterval(intervalId);
            setTimeout(() => {
                game.innerHTML = '';
                game.style.cssText = `width: 0; height: 0`;
                winningWindow.hidden = false;
                setTimeout(() => {
                    winningWindow.style.opacity = '1';
                });
            }, 1000);
        }
        move(currentBtn);
        permissionToPressButtnon = 1;
    }, 100);
}

// Current btn
let currentBtn;

switch (direction) {
    case 1:
        currentBtn = 'ArrowDown';
        break;
    case 2:
        currentBtn = 'ArrowLeft';
        break;
    case 3:
        currentBtn = 'ArrowUp';
        break;
    case 4:
        currentBtn = 'ArrowRight';
        break;
}

// Move
function move() {
    for (let coord of coordsSnake) {
        clearCell(coord[0], coord[1]);
    }

    const headCoord = coordsSnake[0];
    if (headCoord == undefined) return;
    coordsSnake.pop();

    switch (currentBtn) {
        case 'ArrowDown':
            coordsSnake.unshift([headCoord[0], headCoord[1] + 1]);
            break;
        case 'ArrowUp':
            coordsSnake.unshift([headCoord[0], headCoord[1] - 1]);
            break;  
        case 'ArrowLeft':
            coordsSnake.unshift([headCoord[0] - 1, headCoord[1]]);
            break;
        case 'ArrowRight':
            coordsSnake.unshift([headCoord[0] + 1, headCoord[1]]);
            break;     
    }

    for (let i = 1; i < coordsSnake.length; i++) {
        if (arraysEquality(coordsSnake[0], coordsSnake[i])) {
            losing = 1;
            makeBoom();
            return;
        }
    }

    for (let coord of coordsSnake) {
        if (coord == coordsSnake[0]) {
            paintCell(coord[0], coord[1], headSkin);
            if (losing) {
                makeBoom();
                return;
            }
            continue;
        }
        paintCell(coord[0], coord[1], snakeSkin);
    }
}

// Control buttons
let permissionToPressButtnon = 1;
document.addEventListener('keydown', (event) => {
    if ((event.key == 'ArrowUp' || event.key == 'ArrowDown' || 
    event.key == 'ArrowRight' || event.key == 'ArrowLeft') &&
    permissionToPressButtnon == 1) {
        if (event.key == 'ArrowUp' && currentBtn != 'ArrowDown') {
            currentBtn = 'ArrowUp';
            permissionToPressButtnon = 0;
        } else if (event.key == 'ArrowRight' && currentBtn != 'ArrowLeft') {
            currentBtn = 'ArrowRight';
            permissionToPressButtnon = 0;
        } else if (event.key == 'ArrowLeft' && currentBtn != 'ArrowRight') {
            currentBtn = 'ArrowLeft';
            permissionToPressButtnon = 0;
        } else if (event.key == 'ArrowDown' && currentBtn != 'ArrowUp') {
            currentBtn = 'ArrowDown';
            permissionToPressButtnon = 0;
        }  
    }
});

// Spawn food
let coordFood;
function spawnFood() {
    let randomX;
    let randomY;
    outer: while (true) {
        randomX = rand(1, 40);
        randomY = rand(1, 30);
        for (let coord of coordsSnake) {
            if (arraysEquality(coord, [randomX, randomY])) {
                continue outer;
            }
        }
        break;
    }
    paintCell(randomX, randomY, foodSkin);
    coordFood = [randomX, randomY];
}

// Eating food
let lastCoord;
let ate = false;
function eatingFood() {
    if (arraysEquality(coordFood, coordsSnake[0])) {
        lastCoord = coordsSnake[coordsSnake.length - 1];
        ate = true;
        spawnFood();
    }
}

//////////////////////////////////////////
//////////////////////////////////////////

//////////////////////////////////////////
// Secondary functions

// Random number function
function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min); 
}

// Paint cell 
function paintCell(x, y, type) {
    const cell = document.querySelector(`
    [data-positionX="${x}"][data-positionY="${y}"]`);
    if (cell == null) {
        losing = 1;
        return;
    }

    cell.className = `painted--${type}`;
}

// Clear cell
function clearCell(x, y) {
    const cell = document.querySelector(`
    [data-positionX="${x}"][data-positionY="${y}"]`);
    cell.className = '';
}

// Arrays equality
function arraysEquality(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) return false;
    }

    return true;
}

// Random button
function randomButton(direction) {
    switch (direction) {
        case 1:
            currentBtn = 'ArrowDown';
            break;
        case 2:
            currentBtn = 'ArrowLeft';
            break;
        case 3:
            currentBtn = 'ArrowUp';
            break;
        case 4:
            currentBtn = 'ArrowRight';
            break;
    }
}

// Random direction
function switchDirection(currentBtn) {
    switch (currentBtn) {
        case 'ArrowDown':
            direction = 1;
            break;
        case 'ArrowLeft':
            direction = 2;
            break;
        case 'ArrowUp':
            direction = 3;
            break;
        case 'ArrowRight':
            direction = 4;
            break;
    }
}

// Make boom
function makeBoom() {
    for (let i = 1; i < coordsSnake.length; i++) {
        paintCell(coordsSnake[i][0], coordsSnake[i][1], 'boom');
    }
}

// Themes
function saveTheme(theme) {
    switch(theme) {
        case 'green':
            mainWindow.style.backgroundColor = 'rgba(16, 138, 0, 0.25)';
            mainWindow.style.border = '3px solid green';
            break;
        case 'blue':
            mainWindow.style.backgroundColor = 'rgba(12, 0, 180, 0.25)';
            mainWindow.style.border = '3px solid blue';
            break;
        case 'white':
            mainWindow.style.backgroundColor = '#fff';
            mainWindow.style.border = '3px solid #000';
            break;
        case 'black':
            mainWindow.style.backgroundColor = '#000';
            mainWindow.style.border = '3px solid #fff';
            break;
    }
}
//////////////////////////////////////////
//////////////////////////////////////////