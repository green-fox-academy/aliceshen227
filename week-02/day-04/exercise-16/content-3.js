//fill output1 with the first paragraph's content, text only.

document.querySelector('.output1').innerText = document.querySelector('p').innerText;

//fill output2 with the first paragraph's content keeping the cat strong.

document.querySelector('.output2').innerHTML = document.querySelector('p').innerHTML;