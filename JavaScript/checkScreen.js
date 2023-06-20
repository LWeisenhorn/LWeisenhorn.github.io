function checkScreen() {
    if(window.screen.availWidth < 1000 || window.screen.availHeight < 700) {
        document.getElementsByClassName("overlay")[0].innerHTML = "<a href='BoFA.html'><p style='margin-left: 3vw;'>BoFA Project</p></a>";
        document.getElementsByClassName("overlay")[1].innerHTML = "<a href='fileSorter.html'><p style='margin-left: 3vw;'>File Sorter</p></a>";
        document.getElementsByClassName("overlay")[2].innerHTML = "<a href='logicGate.html'><p style='margin-left: 3vw;'>Logic Gates</p></a>";
    }
    
}
