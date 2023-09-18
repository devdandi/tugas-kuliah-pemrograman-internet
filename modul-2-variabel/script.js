let num1 = 0
let num2 = 0


async function run () {
    const calc = document.getElementById('calc')

    calc.addEventListener('click', e => {
        let n = 0
        num1 = parseInt(document.getElementById('num1').value)
        num2 = parseInt(document.getElementById('num2').value)
        let ops = document.getElementById('ops')

        if (ops.value === '*') {
            n = num1 * num2
        }else if (ops.value === '+') {
            n = num1 + num2
        }else if (ops.value === '-') {
            n = num1 - num2
        }else if (ops.value === '/') {
            n = num1 / num2
        }else{
            alert("Operator doesn't match")
            return
        }

        const results = document.getElementById('result-value')
        results.innerText = `Result : ${n}`

        
    })
}


run()