// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(n) {
    // Implement your solution here
    const binaryN = n.toString(2)

    const numberOnePostions = []
    const bynaryNArray = binaryN.split('')
    
    bynaryNArray.forEach((value, index) => {
        if (value == 1) {
            numberOnePostions.push(index)
        }
    })

    if (numberOnePostions.length < 2) {
        return 0
    }

    let binaryGap = 0

    for (let i = 0; i < numberOnePostions.length; i++) {
        if (i !== numberOnePostions.length - 1) {
            let binaryGapTmp = numberOnePostions[i+1] - numberOnePostions[i] - 1
            if (binaryGapTmp > binaryGap) {
                binaryGap = binaryGapTmp
            }
        }

    }

    return binaryGap
}