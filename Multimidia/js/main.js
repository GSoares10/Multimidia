document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    const input = document.querySelector('#loader');
    const player0 = document.querySelector('#player0');
    const ol = document.querySelector('ol');

    let songs = [];
    let iMusic = 0;
    let titles = [];

    input.addEventListener('change', function() {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            songs.push(reader.result);
            adcList();
            playMusic(iMusic);
        });
        reader.readAsDataURL(input.files[0]);
    });

    ol.addEventListener('click', function(event) {
        console.log(event.target.tagName);
        if (event.target.tagName === 'A') {
            iMusic = titles.indexOf(event.target.textContent);
            playMusic(iMusic);
        }
    });

    const playMusic = function(i) {
        player0.src = songs[i];
        player0.play();
        const label = document.querySelector('#idMusica');
        label.textContent = ol.children[i].textContent;
    }

    const adcList = function() {
        let idMusica = loader.files[0].name;
        const li = document.createElement('li');
        const click = document.createElement('click');
        click.setAttribute('href', '#');
        li.appendChild(a);
        ol.appendChild(li);
    }


});