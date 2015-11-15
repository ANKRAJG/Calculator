function erase(val) {
    document.getElementById("d").value = val;
}

function Value(val) {
    document.getElementById("d").value += val;
}

function solve() {
    try {
        erase(eval(document.getElementById("d").value));
    } catch (e) {
        erase("Error");
    }
}