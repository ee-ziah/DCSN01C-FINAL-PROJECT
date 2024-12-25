function myFunction() {
    const mycontent =
    document.getElementById('reveal');
    const mybutton =
    document.getElementById('ReadMore');


if (mycontent.style.display === 'none'
    || mycontent.style.display === '') {
    mycontent.style.display = 'block';
    mybutton.textContent = 'Read Less';
} else {
    mycontent.style.display = 'none';
    mybutton.textContent = 'Read More';
}
var x = document.getElementById("page");
if (x.style.display === "none") {
  x.style.display = "flex";
} else {
  x.style.display = "none";
}
}


   
 
  