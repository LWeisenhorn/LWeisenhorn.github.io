function showLangs() {
    document.getElementById("langButton").className = "active toolButton";
    document.getElementById("frameworkButton").className = "toolButton";
    document.getElementById("otherButton").className = "toolButton";

    document.getElementById("toolsFlexBox").innerHTML = '<div><img src="images/icons/python.png" alt="Python logo" width="60px"><p>Python</p></div><div><img src="images/icons/javascript.png" alt="JavaScript logo" width="60px"><p>JavaScript</p></div><div><img src="images/icons/c.png" alt="C logo" width="60px"><p>C</p></div><div><img src="images/icons/c++.png" alt="C++ logo" width="60px"><p>C++</p></div><div><img src="images/icons/java.png" alt="Java logo" width="60px"><p>Java</p></div><div><img src="images/icons/database.png" alt="Database logo" width="60px"><p>NoSQL/MySQL</p></div>'
}

function showFrameworks() {
    document.getElementById("langButton").className = "toolButton";
    document.getElementById("frameworkButton").className = "active toolButton";
    document.getElementById("otherButton").className = "toolButton";

    document.getElementById("toolsFlexBox").innerHTML = '<div><img src="images/icons/react.png" alt="React logo" width="60px"><p>React</p></div><div><img src="images/icons/nodejs.png" alt="nodeJS logo" height="60px"><p>Node.js</p></div> <div><img src="images/icons/mongodb.png" alt="mongoDB logo" height="60px"><p>MongoDB</p></div><div><img src="images/icons/flask.png" alt="Flask logo" height="60px"><p>Flask</p></div>';
}

function showOther() {
    document.getElementById("langButton").className = "toolButton";
    document.getElementById("frameworkButton").className = "toolButton";
    document.getElementById("otherButton").className = "active toolButton";

    document.getElementById("toolsFlexBox").innerHTML = '<div><img src="images/icons/figma.png" alt="Figma logo" width="60px"><p>Figma</p></div><div><img src="images/icons/cad.png" alt="CAD logo" height="60px"><p>CAD</p></div><div><img src="images/icons/microsoft.png" alt="Microsoft Office logo" width="60px"><p>Microsoft Office</p></div>';
}
