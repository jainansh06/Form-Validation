document.querySelector(".btn").addEventListener("click", ()=>{
    const firstName = document.querySelector('.fname').value;
    const lastName = document.querySelector('.lname').value;
    const mobNum = document.querySelector('.mobNum').value;
    const email = document.querySelector('.email').value;
    const city = document.querySelector('.city').value;

    const nameRegex = /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)?$/;
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const arr = [];

    if (!firstName) {    
        arr.push("First Name is required");
    }
    else if(!nameRegex.test(firstName)){
        arr.push("Invalid First Name format");
    }

    if (!lastName) {
        arr.push("Last Name is required");
    }
    else if(!nameRegex.test(lastName)){
        arr.push("Invalid Last Name format");
    }

    if (!mobNum) {
        arr.push("Mobile Number is required");
    } 
    else if (!mobileRegex.test(mobNum)) {
        arr.push("Mobile Number should be a 10-digit number");
    }

    if (!email) {
        arr.push("Email is required");
    } 
    else if (!emailRegex.test(email)) {
        arr.push("Invalid email format");
    }

    if (!city) {
        arr.push("City is required");
    }
    else if(!nameRegex.test(city)){
        arr.push("Invalid Format");
    }

    if (arr.length > 0) {
      alert(arr.join("\n"));
    } 
    else {
      alert("Form submitted");
    }
});


