// 1
setTimeout(() => {
const div1 = document.querySelector(`#first`);
const p1 = document.createElement(`p`);
p1.innerText =`Hi`;
div1.append(p1);
}, 1000);

// 2
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);

    setInterval(() => {
        const p3 = document.querySelector(`p`);
        p3.innerText = `Two`;
        div2.append(p3);
    }, 3000);
}, 2000);

// 3a
let i = 1;
const oneSec = setInterval(() => {
    console.log(i);
    i++;
});

// 3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
clearInterval(oneSec);
});