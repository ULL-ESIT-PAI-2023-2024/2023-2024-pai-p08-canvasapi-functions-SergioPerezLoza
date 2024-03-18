/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sergio Perez Lozano
 * @since Mar 15, 2023
 * @description Sine class
 */

import { Function } from '../myfunction.js';

/**
   * @descripcion This class represents a sine function.
   * @no_param  
   * @return This class does not return anything
*/
export class Sine implements Function {
  private scale: number;
  private slope: number;
  private coeficent: number;
  private constant: number;

  /**
   * @descripcion This is the constructor of the class. It initializes the scale, slope, coeficent and constant of the function.
   * @param scale the scale of the function
   * @param slope the slope of the function
   * @param coeficent the coeficent of the function
   * @param constant the constant of the function  
   * @return This method does not return anything
*/
  constructor(scale: number, slope: number = 1, coeficent: number = 1, constant: number = 0) {
    this.scale = scale;
    this.slope = slope;
    this.coeficent = coeficent;
    this.constant = constant;
  }

/**
   * @descripcion This method evaluates the function in a given point.
   * @param pointToEvaluate the point to evaluate the function
   * @return This method returns the result of evaluating the function at the given point
*/
  evaluate(pointToEvaluate: number): number {
    return this.slope * Math.sin(this.coeficent * pointToEvaluate) + this.constant;
  }

/**
   * @descripcion This method returns the string representation of the function.
   * @no_param  
   * @return This method does not return anything
*/
  toString(): string {
    return `${this.slope} * sin(${this.coeficent}x) + + ${this.constant}`;
  }

/**
   * @descripcion This method draws the function in a given canvas context.
   * @param context the canvas context in which the function will be drawn  
   * @return This method does not return anything
*/
  draw(context: CanvasRenderingContext2D): void {
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