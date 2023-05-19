setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);
setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);
setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);
setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 700);
setTimeout(() => {
  process.stdout.write('\r|   '); 
  console.log();
}, 900);



/*
let n = 0;

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    //console.log()
    process.stdout.write('\r| ');
  }, n);
  n += 200;
}
setTimeout(() => {
  //console.log()
  process.stdout.write('\n');
},1900);

*/
