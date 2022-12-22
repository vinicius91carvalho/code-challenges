// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(n) {
    // Implement your solution here
    const binaryN = n.toString(2)

    const numberOnePositions = []
    const bynaryNArray = binaryN.split('')
    
    bynaryNArray.forEach((value, index) => {
        if (value == 1) {
            numberOnePositions.push(index)
        }
    })

    if (numberOnePositions.length < 2) {
        return 0
    }

    let binaryGap = 0

    for (let i = 0; i < numberOnePositions.length; i++) {
        if (i !== numberOnePositions.length - 1) {
            let binaryGapTmp = numberOnePositions[i+1] - numberOnePositions[i] - 1
            if (binaryGapTmp > binaryGap) {
                binaryGap = binaryGapTmp
            }
        }

    }

    return binaryGap
}