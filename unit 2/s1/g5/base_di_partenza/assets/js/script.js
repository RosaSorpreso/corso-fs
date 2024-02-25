//animazione header */
window.addEventListener('scroll', () => {
    let header = document.querySelector('.header')
    let a = document.querySelector('#get-started')
    if(window.scrollY > 250){
        header.classList.add('white-background')
        a.classList.add('green-background')
    }else{
        header.classList.remove('white-background')
        a.classList.remove('green-background')
    }
})


//animazione delle M

const getRandomPaths = () => {
    let svg = document.querySelector('svg');
    let mPaths = Array.from(svg.querySelectorAll('path'));
    let randomPaths = [];
    do {
        let randomIndex = Math.floor(Math.random() * mPaths.length);
        randomPaths.push(mPaths[randomIndex]);
    } while (randomPaths.length < 50);
    return randomPaths;
}

const animate = (mPaths, index) => {
    if (index < mPaths.length) {
        let currentPath = mPaths[index];
        currentPath.classList.add('hide'); 
        setTimeout(() => currentPath.classList.remove('hide'), 1000);
        setTimeout(() => animate(mPaths, index + 1), 100);
    } else {
        setTimeout(() => animate(mPaths, 0), 1000);
    }
}

let randomPaths = getRandomPaths();
animate(randomPaths, 0);