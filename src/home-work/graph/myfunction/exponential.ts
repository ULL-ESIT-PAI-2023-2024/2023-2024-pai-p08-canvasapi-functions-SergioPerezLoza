/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sergio Perez Lozano
 * @since Mar 15, 2023
 * @description Exponential class
 */
import { Function } from '../myfunction.js';

/**
   * @descripcion This class represents an exponential function.
   * @no_param  
   * @return This class does not return anything
*/
export class Exponential implements Function {
  private scale: number;
  private factor: number;
  private exponent: number;
  private constant: number;
/**
   * @descripcion This is the constructor of the class. It initializes the scale, factor, exponent and constant of the function.
   * @param scale the scale of the function
   * @param factor the factor of the function
   * @param exponent the exponent of the function
   * @param constant the constant of the function  
   * @return This method does not return anything
*/
  constructor(scale: number, factor: number, exponent: number, constant: number) {
    this.scale = scale;
    this.factor = factor;
    this.exponent = exponent;
    this.constant = constant;
  }
/**
   * @descripcion This method evaluates the function in a given point.
   * @no_param  
   * @return This method returns the result of evaluating the function at the given point
*/
  public evaluate(pointToEvaluate: number): number {
    return -this.factor * Math.pow(this.exponent, pointToEvaluate) - this.constant;
  }
/**
   * @descripcion This method returns the string representation of the function.
   * @no_param  
   * @return This method returns the string representation of the function
*/
  public toString(): string {
    return `${this.factor} * ${this.factor}^x + ${this.constant}`;
  }

/**
   * @descripcion This method draws the function in a given canvas context.
   * @param  context the canvas context in which the function will be drawn
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