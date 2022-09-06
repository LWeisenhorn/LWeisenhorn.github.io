console.log("                                                                                                              \n" +
    "                      ********         *******o*°......°                °......°                °......°      \n" +
    "                    O                 O                               °                       °               \n" +
    "                   *  *********     *  ********°.........              ..........              ..........     \n" +
    "                 O* °*********°    * °******o**..........          °  ........... °           ...........     \n" +
    "                *  *********°    Oo ********** ..........         ° ............. o       . ...........       \n" +
    "               * °*********  *  *  *********° *...........         ...............         ..........  .      \n" +
    "             *  *********° oO o* °*********  *° ..........     .  ................     .  ..........          \n" +
    "            * .*********  *  *  *********° *  ° ..........    ° ..................    ° ........... °         \n" +
    "          *O °*********  *  O °*********  *    o .......... .  .................... .  ..........  °          \n" +
    "         *  *********° *  *  *********° O*     ° ......... ° ..........° ..........° ...........              \n" +
    "       o* °*********  *  °  *********° *         .......... ..........  . ......... ........... °             \n" +
    "      *  ********** *o OO **********  *         ° ...................     ...................                 \n" +
    "     O °*********  *  *  *********° *           ° .................  °   ° ................. °                \n" +
    "   *  *********°  *  * °*********  *              ................       . ................ .                 \n" +
    "     *********. *     ********** *o              ° .............. .        ..............                     \n" +
    " o **********  *    °*********  *                ° ............           ° ............ °                    \n" +
    "   ********* *      °*******°  *                   ........... °            ..........  °                     \n" +
    "            *                *                                                                                \n" +
    "   ********o         ********                       °°......°                °......°°                        \n" +
    "                                                                                                              \n")


let jCounter = true, pCounter = true, sCounter = true, jsCounter = true, hCounter = true, cCounter = true;

// On hover make numbers appear in proj section
function writeProjNum(projNum) {
    if(projNum === 1) {
        let proj = document.getElementById("proj1");
        let projBg = document.getElementById("proj1bg");
        proj.style.color = '#92BA92';
        projBg.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    }
    else if(projNum === 2) {
        let proj = document.getElementById("proj2");
        let projBg = document.getElementById("proj2bg");
        proj.style.color = '#92BA92';
        projBg.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    }
    else if(projNum === 3) {
        let proj = document.getElementById("proj3");
        let projBg = document.getElementById("proj3bg");
        proj.style.color = '#92BA92';
        projBg.style.backgroundColor = 'rgba(200, 200, 200, 0.8)'
    }
    else if(projNum === 4) {
        let proj = document.getElementById("proj4");
        let projBg = document.getElementById("proj4bg");
        proj.style.color = '#92BA92';
        projBg.style.backgroundColor = 'rgba(200, 200, 200, 0.8)'
    }
    else {
        return;
    }
};

function hideProjNum(projNum) {
    if(projNum === 1) {
        let proj = document.getElementById("proj1");
        let projBg = document.getElementById("proj1bg");
        proj.style.color = 'rgba(0, 0, 0, 0)';
        projBg.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    }
    else if(projNum === 2) {
        let proj = document.getElementById("proj2");
        let projBg = document.getElementById("proj2bg");
        proj.style.color = 'rgba(0, 0, 0, 0)';
        projBg.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    }
    else if(projNum === 3) {
        let proj = document.getElementById("proj3");
        let projBg = document.getElementById("proj3bg");
        proj.style.color = 'rgba(0, 0, 0, 0)';
        projBg.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    }
    else if(projNum === 4) {
        let proj = document.getElementById("proj4");
        let projBg = document.getElementById("proj4bg");
        proj.style.color = 'rgba(0, 0, 0, 0)';
        projBg.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    }
    else {
        return;
    }
}

function swapCards(lang) {
    switch (lang) {
        case Java:
            if(jCounter) {
                swapToImg(lang);
            }
            else {
                swapToText(lang);
            }
            jCounter = !jCounter;
            break;
        case Python:  
            if(pCounter) {
                swapToImg(lang);
            }
            else {
                swapToText(lang);
            }
            pCounter = !pCounter;
            break;
        case SQL: 
            if(sCounter) {
                swapToImg(lang);
            }
            else {
                swapToText(lang);
            }
            sCounter = !sCounter;
            break; 
        case Javascript:  
            if(jsCounter) {
                swapToImg(lang);
            }
            else {
                swapToText(lang);
            }
            jsCounter = !jsCounter;
            break;
        case HTML: 
            if(hCounter) {
                swapToImg(lang);
            }
            else {
                swapToText(lang);
            }
            hCounter = !hCounter;
            break; 
        case CSSlang:    
            if(cCounter) {
                swapToImg(lang);
            }
            else {
                swapToText(lang);
            }
            cCounter = !cCounter;
    }
}

function swapToImg(lang) {
    if(lang === Java) {
        document.getElementById("Java").innerHTML = "<p>I primarily use Java to work on the back-end of projects and have taken various courses in college based in Java.</p>";
    }
    if(lang === Python) {
        document.getElementById("Python").innerHTML = '<p>I have used Python to do webscraping as well as data analysis. I have employed this in calculus classes as well as Statistics.</p>';
    }
    if(lang === SQL) {
        document.getElementById("SQL").innerHTML = '<p>I learned this in this in a Database Design and Implementation course. I use this whenever I need a Database in a project.</p>';
    }
    if(lang === Javascript) {
        document.getElementById("Javascript").innerHTML = '<p>I have used this in various classes and it is quickly becoming my preferred language for any development I do in my free time.</p>';
    }
    if(lang === HTML) {
        document.getElementById("HTML").innerHTML = '<p>I use HTML to structure my webpages I make for any projects.</p>';
    }
    if(lang === CSSlang) {
        document.getElementById("CSSlang").innerHTML = '<p>I use CSS to style any webpages I make for projects.</p>';
    }
}

function swapToText(lang) {
    if(lang === Java) {
        document.getElementById("Java").innerHTML = 'Java <br><br><img src="https://cdn-icons-png.flaticon.com/128/152/152760.png" alt="Java Image" class="center">';
    }
    if(lang === Python) {
        document.getElementById("Python").innerHTML = 'Python <br><br><img src="https://cdn-icons-png.flaticon.com/128/1822/1822920.png" alt="Python Image" class="center">';
    }
    if(lang === SQL) {
        document.getElementById("SQL").innerHTML = 'MySQL <br><br><img src="https://cdn-icons-png.flaticon.com/128/288/288882.png" alt="MySQL Image" class="center"></div>';
    }
    if(lang === Javascript) {
        document.getElementById("Javascript").innerHTML = 'JavaScript <br><br><img src="https://cdn-icons-png.flaticon.com/512/288/288877.png" alt="JS Image" class="center" style="width: 130px;"></div>';
    }
    if(lang === HTML) {
        document.getElementById("HTML").innerHTML = 'HTML <br><br><img src="https://cdn-icons-png.flaticon.com/128/1051/1051328.png" alt="HTML Image" class="center"></div>';
    }
    if(lang === CSSlang) {
        document.getElementById("CSSlang").innerHTML = 'CSS <br><br><img src="https://cdn-icons-png.flaticon.com/128/732/732007.png" alt="CSS Image" class="center"></div>';
    }
}

function unfinishedProject() {
    alert("This project is still a work in progress and hasn't been launched yet.");
}