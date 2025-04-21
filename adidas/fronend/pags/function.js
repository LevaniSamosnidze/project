// Sign up variables
let name1 = document.getElementById("name13");
let gmail1 = document.getElementById("gmail");
let pas1 = document.getElementById("password");

// Sign is variables
let name2 = document.getElementById("name12");
let gmail2 = document.getElementById("gmail1");
let pas2 = document.getElementById("password1");
let but = document.getElementById("button1");

but.addEventListener("click", () => {
    let name1Value = name1.value;
    let gmail1Value = gmail1.value;
    let pas1Value = pas1.value;
    let name2Value = name2.value;
    let gmail2Value = gmail2.value;
    let pas2Value = pas2.value;

    if (pas1Value === pas2Value && gmail1Value === gmail2Value && name1Value === name2Value && pas1Value != ""){
        window.location.href = "http://127.0.0.1:3000/fronend/pags/user pags/index.html"
    }
    else{
        alert("Try again")
    }
    
});
