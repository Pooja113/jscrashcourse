// for (let row = 1; row < 5; row++) {
//   for (let col = 1; col <= row; col++) {
//     process.stdout.write('*');
//   }
//   console.log()
// }

// for (let row = 1; row < 5; row++) {
//   for (let col = 1; col < 5; col++) {
//     process.stdout.write('*');
//   }
//   console.log()
// }

// for (let row = 1; row < 5; row++) {
//   for (let col = 5; col > row; col--) {
//     process.stdout.write('*');
//   }
//   console.log()
// }

// for (let row = 1; row < 5; row++) {
//   for (let col = 1; col <= row; col++) {
//     process.stdout.write(col+" ")
//   }
//   console.log()
// }

// for (let row = 1; row < 2*5; row++) {
//   let totalRow = row>5 ? 2*5-row  : row
//     for (let col = 1; col <= totalRow; col++) {
//       process.stdout.write(col+" ")
//     }


  
//   console.log()
// }



for (let row = 1; row < 2*5; row++) {
  let totalRow = row>5 ? 2*5-row  : row
  let totalSpaces = row>5 ?  row-5 :5-row 
    for (let s = 1; s <= totalSpaces; s++) {
      process.stdout.write(" ")
    }
    for (let col = 1; col <= totalRow; col++) {
      process.stdout.write("* ")
    }


  
  console.log()
}