function btn_move(el, mouseLeft, mouseTop) {
    let leftRnd = (Math.random() - 0.5) * 20;
    let topRnd = (Math.random() - 0.5) * 20;
    let btnLeft = mouseLeft + (leftRnd > 0 ? 100 : -100) + leftRnd;
    let btnTop = mouseTop + (topRnd > 0 ? 30 : -30) + topRnd;
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

window.onload = () => {
    let buttons = $("button,a[href],input[type=button],input[type=submit]");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onmouseover = over_btn;
    }
};