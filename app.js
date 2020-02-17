
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
    console.log(a)
    console.log(b)
    console.log(c)
    // if (a == 0 || b == 0 || c == 0) {
    //     document.querySelector(".trapezoid-result").innerHTML = "Jedena z długości jest równa zero";
    // }
    // else if (a < 0 || b < 0 || c < 0) {
    //     document.querySelector(".trapezoid-result").innerHTML = "Jedena z długości jest mniejsza od zera";
    // }

    let answer = (a + b);
    document.querySelector(".trapezoid-result").innerHTML = answer;


}