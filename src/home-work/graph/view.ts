/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sergio Perez Lozano
 * @since Mar 15, 2023
 * @description View class
 */

import { Function } from './myfunction.js';
import { Grid } from './grid.js';
/**
   * @descripcion This is the view class. It is in charge of drawing the grid and the functions in the canvas.
   * @no_param  
   * @return This class does not return anything
*/
export class View {
  private canvas: HTMLCanvasElement = document.getElementById('myCanvas') as HTMLCanvasElement;
  private context: CanvasRenderingContext2D = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  private scale: number;
/**
   * @descripcion This is the constructor of the class. It initializes the scale and translates the canvas to the center.
   * @no_param  
   * @return This method does not return anything
*/
  constructor(scale: number) {
    this.scale = scale;
    this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
  }
/**
   * @descripcion This method initializes the grid in the canvas.
   * @no_param  
   * @return This metod does not return anything
*/
  public initialize(): void {
    let grid: Grid = new Grid(this.scale);
    grid.draw(this.context);
  }

/**
   * @descripcion This method draws the function in the canvas.
   * @param functionToDraw the function to be drawn  
   * @return This method does not return anything
*/
  public drawFunction(functionToDraw: Function): void {
    functionToDraw.draw(this.context);
  }
}