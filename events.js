const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const navBar = document.getElementById('nav-part');

// const boxM = document.getElementById('Maths');
// const boxI = document.getElementById('it');
// const boxS = document.getElementById('Science');
// const footer = document.getElementById('foot');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {

        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';

        // body.style.background = 'white';
        // body.style.color = 'black';
        // body.style.transition = '2s';

        // page2.style.background = 'white';
        // page2.style.color = 'black';
        // page2.style.transition = '2s';

        // page3.style.background = 'white';
        // page3.style.color = 'black';
        // page3.style.transition = '2s';

        // page4.style.background = 'white';
        // page4.style.color = 'black';
        // page4.style.transition = '2s';

        // evntslider.style.background = 'white';
        // evntslider.style.color = 'black';
        // evntslider.style.transition = '2s';

        // foot.style.background = 'white';
        // foot.style.color = 'black';
        // foot.style.transition = '2s';

        // page5.style.background = 'white';
        // page5.style.color = 'black';
        // page5.style.transition = '2s';
        navBar.className = "nav-part2";



        
        // footer.className = "foot1";
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';

        // page2.style.background = 'black';
        // page2.style.color = 'white';
        // page2.style.transition = '2s';

        // page3.style.background = 'black';
        // page3.style.color = 'white';
        // page3.style.transition = '2s';

        // page4.style.background = 'black';
        // page4.style.color = 'white';
        // page4.style.transition = '2s';

        // foot.style.background = 'black';
        // foot.style.color = 'white';
        // foot.style.transition = '2s';

        // evntslider.style.background = 'black';
        // evntslider.style.color = 'white';
        // evntslider.style.transition = '2s';

        // page5.style.background = 'black';
        // page5.style.color = 'white';
        // page5.style.transition = '2s';
        navBar.className = "nav-part3";



        // boxM.className = "box2";
        // boxI.className = "box2";
        // boxS.className = "box2";

        // footer.className = "foot2";
    }
});