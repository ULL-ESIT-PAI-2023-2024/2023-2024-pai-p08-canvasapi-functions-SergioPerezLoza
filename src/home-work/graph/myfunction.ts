/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sergio Perez Lozano
 * @since Mar 15, 2023
 * @description Function interface
 */


/**
   * @descripcion This interface represents a function that can be evaluated, drawn and converted to a string.
   * @no_param  
   * @return This interface does not return anything
*/
export interface Function {
  evaluate(x: number): number;
  draw(context: CanvasRenderingContext2D): void;
}