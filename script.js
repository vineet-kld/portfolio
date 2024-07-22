var i = 0;
var txt = 'Vineet Singh is a Software Development Engineer I at Internshala with 3.5 years of experience. He plays a key role in developing and enhancing software solutions within the organization.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("desc_1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

setTimeout(typeWriter, 1000);