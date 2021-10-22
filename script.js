const search = document.getElementById('search');
const items = document.querySelectorAll('.item');
const toggle = document.querySelector('.form-check-input');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const socialMediaHeader = document.querySelectorAll('.social')[0]; 
const socialMediaFooter = document.querySelectorAll('.social')[1];


search.addEventListener('input', (e) => {
    items.forEach(element => {
        let text = element.children[1].textContent;
        if(text.toLowerCase().includes(e.target.value.toLowerCase()) === false) {
            element.classList.add('hide');
        } else {
            element.classList.remove('hide');
        }
    });
});

toggle.addEventListener('change', () => {
   if(toggle.checked) {
    body.style.backgroundColor = '#2d2327';
    h1.style.color = '#fff';
    socialMediaHeader.style.backgroundColor = '#e2dbbe';
    socialMediaFooter.style.backgroundColor = '#e2dbbe';
    socialMediaHeader.style.boxShadow = '8px 8px #d5d6aa';
    socialMediaFooter.style.boxShadow = '8px 8px #d5d6aa';
    items.forEach(item => {
        item.style.backgroundColor = '#ead637';
        item.style.boxShadow = '8px 8px #cba328'
    });

   } else {
    body.style.backgroundColor = '#d1d7e0';
    h1.style.color = '#000';
    socialMediaHeader.style.backgroundColor = 'rgb(155, 155, 155)';
    socialMediaFooter.style.backgroundColor = 'rgb(155, 155, 155)';
    socialMediaHeader.style.boxShadow = '8px 8px rgb(170, 170, 170)';
    socialMediaFooter.style.boxShadow = '8px 8px rgb(170, 170, 170)';
    items.forEach(item => {
        item.style.backgroundColor = '#fff';
        item.style.boxShadow = '8px 8px #eee'
    });
   }
});

items.forEach(item => {
    item.addEventListener('mouseover',() => {
        item.children[0].style.border = '3px solid #96031a';
        item.children[0].style.borderRadius = '10px';
    });
});

items.forEach(item => {
    item.addEventListener('mouseout',() => {
        item.children[0].style.border = 'none';
    });
});