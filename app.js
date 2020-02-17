
function square() {
    let a = document.querySelector("#side").value;
    if (a == 0) {
        document.querySelector(".square-result").innerHTML = "Bok nie może być równy 0";
    }
    else if (a < 0) {
        document.querySelector(".square-result").innerHTML = "Bok nie może być mniejszy od zera";
    }
    else {
        let answer = a * a;
        document.querySelector(".square-result").innerHTML = answer;
    }
}
function rectangle() {
    let a = document.querySelector("#side-a").value;
    let b = document.querySelector("#side-b").value;
    if (a == 0 || b == 0) {
        document.querySelector(".rectangle-result").innerHTML = "Jeden z boków jest równy zero";
    }
    else if (a < 0 || b < 0) {
        document.querySelector(".rectangle-result").innerHTML = "Jeden z boków jest mniejszy od zera";
    }
    else {
        let answer = a * b;
        document.querySelector(".rectangle-result").innerHTML = answer;
    }

}