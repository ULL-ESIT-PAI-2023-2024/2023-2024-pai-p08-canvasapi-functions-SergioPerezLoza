/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sergio Perez Lozano
 * @since Mar 15, 2023
 * @description Main program
 */

import { Sine } from './myfunction/sine.js';
import { Exponential } from './myfunction/exponential.js';
import { Lineal } from './myfunction/lineal.js';
import { SquareRoot } from './myfunction/square_root.js';
import { Polynomial } from './myfunction/polinomial.js';

import { View } from './view.js';

/**
   * @descripcion This method is the main method of the program. It initializes the view and draws the selected function.
   * @no_param  
   * @return This method does not return anything
*/
function main() {
  const PROPORTIONSCALE = 40;
  let view: View = new View(PROPORTIONSCALE);
  let functionToCalculate: string = 'polynomial';
  view.initialize();

  switch (functionToCalculate) {
    case 'lineal':
      const lineal = new Lineal(PROPORTIONSCALE, 0, 1);
      view.drawFunction(lineal);
      break;
    case 'sqrt':
      const square = new SquareRoot(PROPORTIONSCALE, 1, 0);
      view.drawFunction(square);
      break;
    case 'exponential':
      const exponential = new Exponential(PROPORTIONSCALE, 1, 2, 0);
      view.drawFunction(exponential);
      break;
    case 'sine':
      const sine = new Sine(PROPORTIONSCALE, 1, 1, 0);
      view.drawFunction(sine);
      break;
    case 'polynomial':
      const polynomial = new Polynomial(PROPORTIONSCALE, [1, 0, 1]);
      view.drawFunction(polynomial);
      break;
    default:
      console.log('This function does not exists. Please, select another one.');
  }
}

main();