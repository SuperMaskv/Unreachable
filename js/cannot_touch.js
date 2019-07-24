function btn_move(el, mouseLeft, mouseTop) {
    var leftRnd = (Math.random() - 0.5) * 20;
    var topRnd = (Math.random() - 0.5) * 20;
    var btnLeft = mouseLeft + (leftRnd > 0 ? 100 : -100) + leftRnd;
    var btnTop = mouseTop + (topRnd > 0 ? 30 : -30) + topRnd;
    btnLeft = btnLeft < 100 ? (btnLeft + window.innerWidth - 200) : (btnLeft > window.innerWidth - 100 ? btnLeft - window.innerWidth + 200 : btnLeft);
    btnTop = btnTop < 100 ? (btnTop + window.innerHeight - 200) : (btnTop > window.innerHeight - 100 ? btnTop - window.innerHeight + 200 : btnTop);
    el.style.position = 'fixed';
    el.style.left = btnLeft + 'px';
    el.style.top = btnTop + 'px';
}

function over_btn(e) {
    if (!e) {
        e = window.event;
    }
    btn_move(this, e.clientX, e.clientY);
}

//a button input.button input.submit
window.onload = function () {
    var buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onmouseover = over_btn;
    }
    var abtns = document.querySelectorAll("a[href]");
    for (let i = 0; i < abtns.length; i++) {
        abtns[i].onmouseover = over_btn;
    }
    var inputbtns = document.querySelectorAll("input[type='button']");
    for (let i = 0; i < inputbtns.length; i++) {
        inputbtns[i].onmouseover = over_btn;
    }
    var inputsubs = document.querySelectorAll("input[type='submit']");
    for (let i = 0; i < inputsubs.length; i++) {
        inputsubs[i].onmouseover = over_btn;
    }
};