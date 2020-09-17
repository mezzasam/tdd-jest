let result;
function fizzbuzz(number) {
    if(number % 3 === 0) {
        result = 'fizz';
    } else if (number % 5 === 0){
        result = 'buzz';
    } else {
        result = number;
    }
    return result;
}
module.exports = fizzbuzz