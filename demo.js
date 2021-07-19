
window.onload = function () {
    document.getElementById("button").onclick = function () {
        let result = validateAll();
        let btn = document.getElementById("button");

        setTimeout(function () {
            if(result) {
                btn.innerHTML = "<i class=\"bi bi-check\"></i> Success";
            } else {
                btn.innerHTML = "Absenden";
            }
        }, 500)

    }
}

