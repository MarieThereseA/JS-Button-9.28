//Marie-Therese Acloque
//P9 Odd
//09-28-23
function createParagraph(b){
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    para.textContent = "I was once 16\nIn AP CSP";
    para1.textContent = "Coding on Snap\nI was having a blast";
    para2.textContent = "Sophmore year at last\nI've found my task";

    if(b.getAttribute('id') == "btn"){
        document.body.appendChild(para);
        console.log("btn");
    }

    if(b.getAttribute('id') == "btn1"){
        document.body.appendChild(para1);
    }

    if(b.getAttribute('id') == "btn2"){
        document.body.appendChild(para2);
    }

}
const button = document.getElementById('btn');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');

button.addEventListener("click", createParagraph(button));
button1.addEventListener("click", createParagraph(button1));
button2.addEventListener("click", createParagraph(button2));
