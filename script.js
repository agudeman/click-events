const fooBtn = document.querySelector('#foo');
const barBtn = document.querySelector('#bar');
const foobarBtn = document.querySelector('#foobar');
const mainTag = document.querySelector('main');

fooBtn.addEventListener('click', function() {
    const h3 = document.createElement('h3');
    h3.textContent = 'Foo';
    mainTag.appendChild(h3);
});

barBtn.addEventListener('click', function() {
    const h3 = document.createElement('h3');
    h3.textContent = 'Bar';
    mainTag.appendChild(h3);
});

foobarBtn.addEventListener('click', function() {
    const h2 = document.createElement('h2');
    h2.textContent = 'FooBar';
    mainTag.appendChild(h2);
});