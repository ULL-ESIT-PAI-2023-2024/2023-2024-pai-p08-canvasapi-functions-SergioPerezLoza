/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sergio Perez Lozano
 * @since Mar 15, 2023
 * @description Polynomial class
 */

import { Function } from '../myfunction.js';
/**
   * @descripcion This class represents a polynomial function.
   * @no_param  
   * @return This class does not return anything
*/
export class Polynomial implements Function {
  private coefficients: number[];
  private scale: number;
/**
   * @descripcion This is the constructor of the class. It initializes the scale and the coefficients of the function.
   * @param scale the scale of the function
   * @param coefficients the coefficients of the function  
   * @return This method does not return anything
*/
  constructor(scale: number, coefficients: number[]) {
    this.coefficients = coefficients;
    this.scale = scale;
  }

/**
   * @descripcion This method evaluates the function in a given point.
   * @param pointToEvaluate the point to evaluate the function  
   * @return This method returns the result of evaluating the function at the given point
*/
  evaluate(pointToEvaluate: number): number {
    let result = 0;
    for (let i = 0; i < this.coefficients.length; i++) {
      result += this.coefficients[i] * Math.pow(pointToEvaluate, i);
    }
    return -result;
  }

/**
   * @descripcion This method returns the string representation of the function.
   * @no_param  
   * @return This method returns the string representation of the function
*/
  toString(): string {
    let str = '';
    for (let i = 0; i < this.coefficients.length; i++) {
      if (this.coefficients[i] !== 0) {
        if (i > 0) {
          str += (this.coefficients[i] > 0 ? ' + ' : ' - ');
        }
        if (Math.abs(this.coefficients[i]) !== 1 || i === 0) {
          str += this.coefficients[i];
        }
        if (i > 0) {
          str += `x^${i}`;
        }
      }
    }
    return str;
  }

/**
   * @descripcion This method draws the function in a given canvas context.
   * @param context the canvas context in which the function will be drawn  
   * @return This method does not return anything
*/
  public draw(context: CanvasRenderingContext2D): void {
    const JUMPEVALUATION = 10;
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 2;
    const xStart = -context.canvas.width / 2;
    const xEnd = context.canvas.width / 2;
    for (let actualX = xStart; actualX < xEnd; actualX = actualX + this.scale / JUMPEVALUATION) {
      context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
    }
    context.stroke();
  }
}
