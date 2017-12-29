// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

//Look for primes and add to an array
let arrPrimes = allPrimes(2000000)
//add up elements of array
let result = addArray(arrPrimes)
console.log('Addition = '+result)


//Function that add all the elements in an array and returns a value
function addArray(ar){
  let res = 0
  ar.forEach((e)=>{
    res +=e
  })
  return res
}

//Function that returns an array of all the prime numbers lower that argument x
function allPrimes(x){
  let arrRes = [2]
  for (let i =3; i<x; i+=2){ //Jump evey two because, with exeption of 2, all prime numbers are odd
    if(isPrime(i,arrRes)){
      arrRes.push(i)
    }
  }
  return arrRes
}

//function isPrime determines if a number is prime
function isPrime(x,ar){
  let res = true

  if (x==1){
    res = false
  } else if (x>ar[ar.length-1]){ // Make sure the number is not already included in our list of primes
    for(let i=2;i<=x/2;i++){
        if (x%i == 0){
          console.log(x)
        res = false
        break
      }
    }
  }
  return res
}
