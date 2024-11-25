document.getElementById("catalogue-continue").addEventListener("click", function () {
    alert("Vous avez sélectionné une formation !");
});

document.getElementById("choix-continue").addEventListener("click", function () {
    document.getElementById("choix-formation").style.display = "none";
    document.getElementById("validation-choix").style.display = "block";
});
