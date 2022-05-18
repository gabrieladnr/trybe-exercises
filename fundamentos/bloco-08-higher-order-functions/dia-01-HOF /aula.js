// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.table);

const wakeUp = () => "Acordando!!";

const coffe = () => "Bora tomar café!!";

const aMimir = () => "Partiu dormir!!";

const doingThings = (param) => {
  console.log(param());  
}

doingThings(aMimir)