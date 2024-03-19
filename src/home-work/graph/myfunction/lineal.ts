/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sergio Perez Lozano
 * @since Mar 15, 2023
 * @description Lineal class
 */

import { Function } from '../myfunction.js';

/**
   * @descripcion This class represents a lineal function.
   * @no_param  
   * @return This class does not return anything
*/
export class Lineal implements Function {
  private scale: number;
  private slope: number;
  private constant: number;
/**
   * @descripcion This is the constructor of the class. It initializes the scale, slope and constant of the function.
   * @no_param  
   * @return This method does not return anything
*/
  constructor(scale: number, slope: number, constant: number) {
    this.scale = scale;
    this.slope = slope;
    this.constant = constant;
  }
/**
   * @descripcion This method evaluates the function in a given point.
   * @no_param  
   * @return This method returns the result of evaluating the function at the given point
*/
  public evaluate(pointToEvaluate: number): number {
    return -this.slope * pointToEvaluate - this.constant;
  }
  
/**
   * @descripcion This method draws the function in a given canvas context.
   * @no_param  
   * @return This method does not return anything
*/
  public draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 2;
    context.setLineDash([5, 10]);
    const xStart = -context.canvas.width / 2;
    const xEnd = context.canvas.width / 2;
    const yStart = this.evaluate(xStart / this.scale) * this.scale;
    const yEnd = this.evaluate(xEnd / this.scale) * this.scale;
    context.moveTo(xStart, yStart);
    context.lineTo(xEnd, yEnd);
    context.stroke();
  }
}