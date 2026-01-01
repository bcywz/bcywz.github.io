function signin() {
    var inpass = document.getElementById("signinpass").value;
    if (inpass == "426") {
        window.location.replace("https://bcywz.github.io/arg/end.html");
    } else {
        window.location.replace("https://bcywz.github.io/arg/surface.html");
    }
}
