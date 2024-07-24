document.addEventListener("click", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        
        var emailInput = document.querySelector('input[type="email"]');
        var passwordInput = document.querySelector('input[type="password"]');
        
        var emailValue = emailInput.value;
        var passwordValue = passwordInput.value;

        if (emailValue === "" || passwordValue === "") {
            
            alert("Please enter both email and password.");
        } else {
           
            alert("Login successful!");

            
        }
    });
});
