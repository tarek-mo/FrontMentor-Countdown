



    
    

(() => {
    function timeUpdate() {
        const daysLeft = document.querySelector('.days-left')
        const hoursLeft = document.querySelector('.hours-left')
        const minutesLeft = document.querySelector('.minutes-left')
        const secondsLeft = document.querySelector('.seconds-left')

        const currentDate = new Date().getTime();
        let launchDate = new Date('08/20/2021').getTime();
        const difference = launchDate - currentDate;

        if (difference == 0) {
            launchDate = new Date('10/20/2021').getTime()
        }
        let seconds = 1000;
        let minutes = seconds * 60;
        let hours = minutes * 60;
        const days = hours * 24;

        
        function addZero(unit) {
            unit.innerText = unit.innerText < 10 ? `0${unit.innerText}` : unit.innerText
        };
        daysLeft.innerText = Math.floor(difference / days);

        hoursLeft.innerText = Math.floor((difference % days) / hours );
        addZero(hoursLeft);
        

        minutesLeft.innerText = Math.floor((difference % hours) / minutes );
        addZero(minutesLeft);

        secondsLeft.innerText = Math.floor((difference % minutes) / seconds );
        addZero(secondsLeft);
    };

    function countdown() {
        setInterval(timeUpdate, 1000);
    };

    countdown();
    
})();




    

    
    


    
