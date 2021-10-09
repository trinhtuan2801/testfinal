function allLongestStrings(inputArray) {
    let maxlength = 0
    for (let i = 0; i < inputArray.length; i++)
    {
        maxlength = Math.max(maxlength, inputArray[i].length)
    }
    let result = []
    for (let i = 0; i < inputArray.length; i++)
    {
        if (inputArray[i].length == maxlength) result.push(inputArray[i])
    }
    return result
}

console.log(allLongestStrings(['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH']))

function alternatingSums(a)
{
    let evensum = 0
    let sum = 0
    for (let i = 0; i < a.length; i++)
    {
        sum += a[i]
        if (i % 2 == 1) evensum += a[i]
    }
    return [sum - evensum, evensum]
}

console.log(alternatingSums([60, 40, 55, 75, 64]))

let ButtonColor = document.getElementById('ButtonColor')
let ButtonCopy = document.getElementById('ButtonCopy')
let TextColor = document.getElementById('TextColor')

function getRandomNumber()
{
    let rand = Math.floor(Math.random()*256)
    return rand
}

function toHexCode(...arr)
{
    let result = '#'
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < 16) result += '0' + arr[i].toString(16)
        else result += arr[i].toString(16)
    }
    return result
}

ButtonColor.addEventListener('click', ()=>{
    let red = getRandomNumber()
    let green = getRandomNumber()
    let blue = getRandomNumber()
    
    let hexcode = toHexCode(red, green, blue)
    TextColor.innerHTML = hexcode
})

ButtonCopy.addEventListener('click', ()=>{
    let copytext = TextColor.innerHTML
    navigator.clipboard.writeText(copytext)
    alert('Copied to clipboard!')
})

let canvas = document.getElementById("BangMau")
let img = new Image
img.src = 'bangmau.png'
img.onload = function()
{
    canvas.getContext('2d').drawImage(img, 0, 0, 500, 500)    
}

canvas.addEventListener('mousedown', (e) => {
    let rect = canvas.getBoundingClientRect()
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top
    let color = canvas.getContext('2d').getImageData(x, y, 1, 1).data
    let hexcode = toHexCode(color[0], color[1], color[2])
    document.body.style.backgroundColor = hexcode
})





