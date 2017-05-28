// // rollup.config.js
// export default {
//   entry: 'src/main.js',
//   format: 'cjs',
//   dest: 'bundle.js' // equivalent to --output
// };


// // rollup.config.js
// import json from 'rollup-plugin-json';

// export default {
//   entry: 'src/main.js',
//   format: 'cjs',
//   plugins: [ json() ],
//   dest: 'bundle.js'
// };


// // rollup.config.js
// import resolve from 'rollup-plugin-node-resolve';

// export default {
//   entry: 'src/main.js',
//   format: 'cjs',
//   plugins: [ resolve() ],
//   dest: 'bundle.js'
// };


// // rollup.config.js
// import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';

// export default {
//   entry: 'src/main.js',
//   format: 'cjs',
//   plugins: [
//     resolve(),
//     babel({
//       exclude: 'node_modules/**' // only transpile our source code
//     })
//   ],
//   dest: 'bundle.js',
// };


// rollup.config.js Sourcemaps
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  format: 'cjs',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  dest: 'bundle.js',
  sourceMap: true
};
