//1. Alert the content of the heading.

alert(document.querySelector('h1').innerText);

//2. Write the content of the first paragraph to the console.

console.log(document.querySelector('p').innerText);

//3. Alert the content of the second paragraph.

alert(document.querySelector('.other').innerText);

//4. Replace the heading's content with 'New content'.

document.querySelector('h1').innerText = 'New content';

//5. Replace the last paragraph's content with the first paragraph's content.

document.querySelector('.result').innerText = document.querySelector('.other').innerText;
