// import foo,{c} from './foo.js';
// export default function () {
//   console.log(foo);
// }


// // src/main.js
// import { age } from '../a.json';

// export default function () {
//   console.log('age ' + age);
// }


// // src/main.js
// import answer from 'the-answer';

// export default function () {
//   console.log('the answer is ' + answer);
// }


// src/main.js
import answer from 'the-answer';

export default () => {
  console.log(`the answer is ${answer}`);
}