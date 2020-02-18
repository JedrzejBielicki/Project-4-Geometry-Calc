
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
function triangle() {
    let a = document.querySelector("#triangle-side").value;
    let b = document.querySelector("#height").value;
    if (a == 0 || b == 0) {
        document.querySelector(".triangle-result").innerHTML = "Jedena z długości jest równa zero";
    }
    else if (a < 0 || b < 0) {
        document.querySelector(".triangle-result").innerHTML = "Jedena z długości jest mniejsza od zera";
    }
    else {
        let answer = 0.5 * a * b;
        document.querySelector(".triangle-result").innerHTML = answer;
    }

}
function trapezoid() {
    let a = document.querySelector("#trapezoid-side-longer").value;
    let b = document.querySelector("#trapezoid-side-shorter").value;
    let c = document.querySelector("#trapezoid-height").value;
    let d = parseInt(a);
    let e = parseInt(b);
    if (a == 0 || b == 0 || c == 0) {
        document.querySelector(".trapezoid-result").innerHTML = "Jedena z długości jest równa zero";
    }
    else if (a < 0 || b < 0 || c < 0) {
        document.querySelector(".trapezoid-result").innerHTML = "Jedena z długości jest mniejsza od zera";
    }
    else {
        let answer = (d + e) / 2 * c;
        document.querySelector(".trapezoid-result").innerHTML = answer;
    }
}
function rhombus() {
    let a = document.querySelector("#rhombus-side").value;
    let b = document.querySelector("#rhombus-height").value;
    if (a == 0 || b == 0) {
        document.querySelector(".rhombus-result").innerHTML = "Jedena z wartości jest równy zero";
    }
    else if (a < 0 || b < 0) {
        document.querySelector(".rhombus-result").innerHTML = "Jedena z wartości jest mniejszy od zera";
    }
    else {
        let answer = a * b;
        document.querySelector(".rhombus-result").innerHTML = answer;
    }
}
function circle() {
    let a = document.querySelector("#circle-radius").value;
    if (a == 0) {
        document.querySelector(".circle-result").innerHTML = "Promień nie może być równy 0";
    }
    else if (a < 0) {
        document.querySelector(".circle-result").innerHTML = "Promień nie może być mniejszy od zera";
    }
    else {
        let answer = 3.1415 * (a * a);
        document.querySelector(".circle-result").innerHTML = answer;
    }
}