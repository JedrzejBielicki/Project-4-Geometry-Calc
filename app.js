function clicked() {
    var input_value = document.getElementById('data').value;
    document.getElementById('display').innerHTML = input_value * input_value;
    console.log(input_value);
}

document.getElementById('btn').addEventListener('click', clicked);