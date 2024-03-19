/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sergio Perez Lozano
 * @since Mar 15, 2023
 * @description SquareRoot class
 */
import { Function } from '../myfunction.js';

/**
   * @descripcion This method draws the axis
   * @no_param  
   * @return This method does not return anything
*/
export class SquareRoot implements Function {
  private scale: number;
  private slope: number;
  private constant: number;
/**
   * @descripcion This is the constructor of the class. It initializes the scale, slope and constant of the function.
   * @param scale the scale of the function
   * @param slope the slope of the function
   * @param constant the constant of the function  
   * @return This method does not return anything
*/
  constructor(scale: number, slope: number = 1, constant: number = 0) {
    this.scale = scale;
    this.slope = slope;
    this.constant = constant;
  }
/**
   * @descripcion This method evaluates the function in a given point.
   * @param evaluate the point to evaluate the function  
   * @return This method returns the result of evaluating the function at the given point
*/
  public evaluate(pointToEvaluate: number): number {
    return -this.slope * Math.sqrt(pointToEvaluate) + this.constant;
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
    context.setLineDash([5, 10]);
    const xStart = -context.canvas.width / 2;
    const xEnd = context.canvas.width / 2;
    for (let actualX = xStart; actualX < xEnd; actualX = actualX + this.scale / JUMPEVALUATION) {
      context.lineTo(actualX, this.evaluate(actualX / this.scale) * this.scale);
    }
    context.stroke();
  }
}