
function rgb(r, g, b){
        const array = [r, g, b]
        let rgb16 = ''
    for (let a of array) {
        a < 0 ? a = '00' : a > 255 ? a = 255 : 0
        rgb16 += a.toString(16).padStart(2, '0')
        }
    return rgb16.toUpperCase()
} 

console.log(rgb(01,10,00))