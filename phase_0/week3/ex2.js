var input = 'hello world'

function balikString() {
    var output = '';
    for (var i = input.length -1; i >= 0; i--) {
        output = output + input[i];
    }
    return output
}
console.log(balikString());
