/* inspiration til koden https://www.youtube.com/watch?v=paiI1N96EpQ */
function updateClock(){
    let now = new Date();
    let dname = now.getDay();
        mo = now.getMonth();
        dnum = now.getDate();
        yr = now.getFullYear();
        hou = now.getHours();
        min = now.getMinutes();
        sec = now.getSeconds();

    
        if(hou > 24){
            hou = hou - 24;
        }
       

    
        const months = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "oktober", "November", "December"]
        const week = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
        const ids = ["dag", "måned", "dagnum", "år", "time", "minutter", "sekunder"]
        let values = [week[dname], months[mo], dnum, yr, hou.toString().padStart(2, 0), min.toString().padStart(2, 0), sec.toString().padStart(2, 0)]
        for(let i = 0; i < ids.length; i++){
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        }
        let hilsen = document.getElementById("hilsen");
        if(hou < 6){
            hilsen.firstChild.nodeValue = "Godnat"
        }
        else if(hou < 9){
            hilsen.firstChild.nodeValue = "Godmorgen"
        }
        else if(hou < 12){
            hilsen.firstChild.nodeValue = "Godformiddag"
        }
        else if(hou < 15){
            hilsen.firstChild.nodeValue = "Godmiddag"
        }
        else if(hou < 18){
            hilsen.firstChild.nodeValue = "Godeftermiddag"
        }
        else if(hou < 24){
            hilsen.firstChild.nodeValue = "Godaften"
        }
}

function initClock(){
    updateClock();
    window.setInterval(updateClock, 1);
}