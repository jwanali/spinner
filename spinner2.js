


let n = 0;
const array = ['|','/','-','\\','|'];

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    //console.log()

    process.stdout.write(`\r${array[i]}`);
  }, n);
 
  n += 200;
}

setTimeout(() => {
  //console.log()
  process.stdout.write('\n');
},n)