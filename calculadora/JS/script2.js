
document.getElementById("-").onclick = function() {
    document.getElementById("res").value =
        Number(document.getElementById("n1").value) -
        Number(document.getElementById("n2").value);
};
document.getElementById("*").onclick = function() {
    document.getElementById("res").value =
        Number(document.getElementById("n1").value) *
        Number(document.getElementById("n2").value);
};
document.getElementById("/").onclick = function() {
    document.getElementById("res").value =
        Number(document.getElementById("n1").value) /
        Number(document.getElementById("n2").value);
};
document.getElementById("^").onclick = function() {
    document.getElementById("res").value =
        Number(document.getElementById("n1").value) **
        Number(document.getElementById("n2").value);
};
document.getElementById("+").onclick = function() {
    document.getElementById("res").value =
        Number(document.getElementById("n1").value) +
        Number(document.getElementById("n2").value);
};

document.getElementById("√").onclick = function() {
    document.getElementById("res").value =
        Number(document.getElementById("n1").value) ** (1/
        Number(document.getElementById("n2").value));
};