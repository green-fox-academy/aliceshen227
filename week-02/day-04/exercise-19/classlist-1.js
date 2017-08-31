//Does the third p have a cat class?
//If so, alert 'YEAH CAT!'
var check = document.getElementsByTagName('p')
if (check[2].classList.contains('cat')) {
    console.log('YEAH CAT!');
}


//If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
if (check[3].classList.contains('dolphin')) {
    check[0].innerText = 'pear';
}

//If the first p has an 'apple' class, replace cat's content with 'dog'
if (check[0].classList.contains('apple')) {
    check[2].innerText = 'dog';
}

//Make apple red
check[0].style.color = 'red';

//Make balloon less balloon-like

check[1].style.borderRadius = '10%';
