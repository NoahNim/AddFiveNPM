export const addFive = (num : number) => {
    if (typeof num === 'number') {
        return num += 5
    } else {
        return "Error: Not a Number"
    }
}