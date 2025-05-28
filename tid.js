/* inspiration til koden https://www.youtube.com/watch?v=paiI1N96EpQ */
function updateClock(){
    let now = new Date();
    let dname = now.getDay();
        mo = now.getMonth();
        dnum = now.getDate();
        hou = now.getHours();
        min = now.getMinutes();
        

    
        if(hou > 24){
            hou = hou - 24;
        }
       

    
        const months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "oktober", "November", "December"]
        const week = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
        const ids = ["dag", "måned", "dagnum", "time", "minutter"]
        let values = [week[dname], months[mo], dnum, hou.toString().padStart(2, 0), min.toString().padStart(2, 0)]
        for(let i = 0; i < ids.length; i++){
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        }
        let åben = document.getElementById("åben");
        if((dname > 0 && dname < 6 && hou > 10 && hou < 17) ||
            (dname == 6 && hou > 9 && hou < 12)
        ){
            åben.firstChild.nodeValue = "Vi har åben"
        }
        else{
             åben.firstChild.nodeValue = "Vi har lukket"
        }
        
}

function initClock(){
    updateClock();
    window.setInterval(updateClock, 1);
}