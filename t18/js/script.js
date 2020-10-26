let even = []; 
let odd = [];

function sortEvenOdd (arr) {

  for (let i = 0; i <= arr.length; i++) {

    if (arr[i] % 2 === 0) {
      even.push(arr[i])
      even.sort((a,b)=>a-b)
    } 
  }


  for (let j = 0; j <= arr.length; j++) {
       
    if (arr[j] % 2 === 1) {
        odd.push(arr[j])
        odd.sort((a,b)=>a-b)
    }
  }

  return even.concat(odd)

}


const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];

sortEvenOdd(arr);