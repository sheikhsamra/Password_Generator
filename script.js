function generate(){
    let length = document.getElementById("length").value || 12;
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let pass = "";
    for(let i = 0; i < length; i++){
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }  
    document.getElementById("password").value = pass;
}

function copyPassword(){
    let pass = document.getElementById("password");
    pass.ariaSelected();
    document.execCommand("copy");
    alert("Password Copied: " + pass.value);
}function generate() {
    let length = document.getElementById("length").value || 12;
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = pass;
}

function copyPassword() {
    let pass = document.getElementById("password");

    // ✅ Method 1 (old but still works)
    pass.select();  
    pass.setSelectionRange(0, 99999); // mobile ke liye

    document.execCommand("copy");
    alert("Password Copied: " + pass.value);

    // ✅ Method 2 (modern way - better)
    // navigator.clipboard.writeText(pass.value).then(() => {
    //     alert("Password Copied: " + pass.value);
    // });
}
