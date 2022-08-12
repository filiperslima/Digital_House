// IF (numero % 2 = 0) AND (numero > 2 OR numero <-2) THEN
// 		SET retornoPrimoSimNao = 'Número não é primo';
// 	ELSE
// 		SET retornoPrimoSimNao = 'Número primo';
// 	END IF;
//     IF (numero < 2) AND (numero >-2) THEN
// 		SET retornoPrimoSimNao = 'não é número primo';
// 	END IF;

// let primoOuNao = function(a){
//     switch ((a % 2 == 0 && a >= 2) || (a <= 1)) {
//         case true:
//             console.log(`O número ${a} não é primo`)
//             break;
//         case false: 
//         console.log(`O número ${a} é primo` )
//         default:
//             break;
//     }
//     // if(a % 2 == 0 && a > 2 || a < -2) {
//     //     console.log(`O número ${a} não é primo` )
//     // } else {
//     //     console.log(`O número ${a} é primo`)
//     // }
//     // if (a < 2 && a > -2) {
//     //     console.log(`Número ${a} não é primo`)
//     // } 
// }
// primoOuNao(4)


const primoOuNao = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        console.log(`o número ${num} não é primo`)
        return false;
      }
      console.log(`O número ${num} é primo`)
       return num > 1;
  };

// primoOuNao(2)
// primoOuNao(0)
// primoOuNao(1)
// primoOuNao(7)
// primoOuNao(49)
// primoOuNao(61)
// primoOuNao(97)
// primoOuNao(89)
// primoOuNao(27)
// primoOuNao(77)
// primoOuNao(67)
// primoOuNao(49)
// primoOuNao(17)
// primoOuNao(13)
// primoOuNao(19)
// primoOuNao(21)

// primoOuNao(293)
// primoOuNao(299)
// primoOuNao(291)
// primoOuNao(297)

primoOuNao(957)
primoOuNao(997)
primoOuNao(987)
primoOuNao(927)