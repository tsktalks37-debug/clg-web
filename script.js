// Generate a random 6-character captcha
function generateCaptcha(){
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no confusing 0/O/1/I
    let captcha = "";
    for(let i = 0; i < 6; i++){
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captchaText").textContent = captcha;
    document.getElementById("captchaInput").value = "";
}

// Show/hide password
function togglePassword(){
    const input = document.getElementById("password");
    const icon = document.getElementById("eyeIcon");
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    icon.classList.toggle("fa-eye", !isHidden);
    icon.classList.toggle("fa-eye-slash", isHidden);
}

// Handle login: validate fields + captcha, then redirect
function handleLogin(){
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value.trim();
    const captchaInput = document.getElementById("captchaInput").value.trim();
    const captchaText = document.getElementById("captchaText").textContent.trim();

    if(!userId || !password){
        alert("Please enter both User ID and Password.");
        return;
    }
    if(!captchaInput){
        alert("Please enter the captcha.");
        return;
    }
    if(captchaInput.toUpperCase() !== captchaText.toUpperCase()){
        alert("Captcha does not match.");
        generateCaptcha();
        return;
    }

    // All checks passed — go to dashboard
    window.location.href = "home.html";
}

// Generate a captcha as soon as the page loads
window.onload = generateCaptcha;
