

function letterIndices(sentence) {
 const lettersArray = sentence
                       .split(" ")
                       .join("")
                       .split("");

 const lettersObj = {}; // maybe can set all keys top default of array? TODO

 lettersArray.forEach((l,i) => {
   if (lettersObj[l]) {
     lettersObj[l].push(i);
   } else {
     lettersObj[l] = [i];
   }
 })

 return lettersObj;

 // console.log("test", lettersArray);

}

console.log(letterIndices("lighthouse in the house"));