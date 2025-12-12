window.onload = function(){
    var year = new Date().getFullYear();
    var textTagline = "I am currently an Engineering Intern at Dometic, Programing Teacher at Code/Art, Student at Florida Atlantic University and Atlantic Technical College. Ambitious, detail-oriented mechanical engineering student focused on drafting, aspiring to be a design engineer.";
    var footerText = "blah";
    //Get current date
    document.getElementById("currentYear").innerHTML = year;
    //tagline
    document.getElementById("tagline").innerHTML = textTagline;
    document.getElementByTagName("footer").innerHTML = footerText;
};