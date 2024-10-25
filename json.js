        let arrAy = JSON.parse(localStorage.getItem('arrAy')) || [{ name: 'Get up', time: '6:00 AM' }]


        const aDd = document.querySelector('.addi');


    prinCon();

    function prinCon (){
    let rout = "";

    arrAy.forEach((arra, index) => {
        const html = `<div>${arra.name}</div>
        <div> ${arra.time}</div>
            <button class="delet" onclick = "arrAy.splice(${index},1), prinCon();">DELETE</button>`;

        rout += html;

        document.getElementById('print').innerHTML = rout;})
        
        saveArray();

        };

        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') { changeName();}
        });

    aDd.addEventListener('click', () => {
        addCon();

    });

    function addCon () {

    let rouTine = document.getElementById('routine').value;
    let tiMe = document.getElementById('time').value;

    if(rouTine && tiMe){
    const obj = {
        name: rouTine,
        time: tiMe,

    };

    arrAy.push(obj);
    saveArray();
    prinCon();

    rouTine = '';
    tiMe = '';
    }

    };

    function saveArray() {
        localStorage.setItem('arrAy', JSON.stringify(arrAy));
    };

    const changeName = () => {
        const name = document.getElementById('nam').value;
        document.getElementById('head').innerText = `${name}'s Daily Routine List`; 

        localStorage.setItem('name', name);
    };

    window.onload = () => {
        const savedName = localStorage.getItem('name');
        if (savedName) {
            document.getElementById('head').innerText = `${savedName}'s Daily Routine List`;
            document.getElementById('nam').value = savedName;
        }

        saveArray();
        prinCon(); 
    };
