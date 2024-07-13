let array = [1, 2, 3, 4, 5];

let array2 = [0, 9, 8, 7];

// let array3 = [0, 9, 8, 7];

// let newArray = array.concat(array2, array3);

// console.log(newArray);

function remove(newArray, index) {
  return newArray.slice(0, index).concat(newArray.slice(index + 1));
}

let updateArray = remove(array, 2);

console.log(updateArray);
