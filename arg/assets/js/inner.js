function signin() {
    var inpass = document.getElementById("signinpass").value;
    if (inpass == "QSR") {
        window.location.replace("https://bcywz.github.io/arg/dne.html");
    } else {
        window.location.replace("https://bcywz.github.io/arg/inner.html");
    }
}
