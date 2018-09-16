function changeMe(check) {
    var obj = {}
    if (check == 0) {
        console.log(`""`)



    }
    else {
        for (var i = 0; i < check.length; i++) {
            console.log((i + 1) + ". " + check[i][0] + " " + check[i][1])
            obj.firstName = check[i][0];
            obj.lastName = check[i][1];
            obj.gender = check[i][2];
            if (!check[i][3] || check[i][3] > 2018) {
                obj.age = "Invalid Birth Year"
            }
            else {
                obj.age = 2018 - check[i][3];
            }
            console.log(obj)

        }
    }
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male',]]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""



