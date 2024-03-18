/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Sergio Perez Lozano
 * @since Mar 15, 2023
 * @description Grid class
 */

/**
   * @descripcion This class is in charge of drawing the grid in the canvas.
   * @no_param  
   * @return This method does not return anything
*/
export class Grid {
  constructor(private scale: number) {
    this.scale = scale;
  }

/**
   * @descripcion This method draws the grid in the canvas.
   * @param context the canvas context in which the grid will be drawn
   * @return This method does not return anything
*/
  public draw(context: CanvasRenderingContext2D): void {
    this.drawVerticalLines(context);
    this.drawHorizontalLines(context);
    this.drawAxis(context);
    this.drawNumbers(context);
  }

/**
   * @descripcion This method draws the axis
   * @param context the canvas context in which the axis will be drawn  
   * @return This method does not return anything
*/
  private drawAxis(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;

    context.moveTo(0, 0);
    context.lineTo(0, context.canvas.height);
    context.moveTo(0, 0);
    context.lineTo(context.canvas.width, 0);
    context.moveTo(0, 0);
    context.lineTo(0, -context.canvas.height);
    context.moveTo(0, 0);
    context.lineTo(-context.canvas.width, 0);
    context.stroke();
  }
/**
   * @descripcion This method draws the vertical lines of the grid
   * @param context the canvas context in which the vertical lines will be drawn  
   * @return This method does not return anything
*/
  private drawVerticalLines(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'lightgrey';
    context.lineWidth = 1;
    const halfWidth = context.canvas.width / 2;
    for (let i = 0; i > -context.canvas.width; i -= this.scale) {
      context.moveTo(i, -halfWidth);
      context.lineTo(i, context.canvas.height);
    }
    for (let i = 0; i < context.canvas.width; i += this.scale) {
      context.moveTo(i, -halfWidth);
      context.lineTo(i, context.canvas.height);
    }
    context.stroke();
  }
/**
   * @descripcion This method draws the horizontal lines of the grid
   * @param context the canvas context in which the horizontal lines will be drawn
   * @return This method does not return anything
*/
  private drawHorizontalLines(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'lightgrey';
    context.lineWidth = 1;
    const halfWidth = context.canvas.width / 2;
    for (let i = 0; i > -context.canvas.height; i -= this.scale) {
      context.moveTo(-halfWidth, i);
      context.lineTo(context.canvas.width, i);
    }
    for (let i = 0; i < context.canvas.height; i += this.scale) {
      context.moveTo(-halfWidth, i);
      context.lineTo(context.canvas.width, i);
    }
    context.stroke();
  }

  /**
   * @descripcion This method draws the numbers in the grid
   * @param context the canvas context in which the numbers will be drawn  
   * @return This method does not return anything
*/
  private drawNumbers(context: CanvasRenderingContext2D): void {
    let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;
    context.font = 'bold 10px Arial'; // Set font to bold
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    let yPositionOfNumbers = 16;
    let xPositionOfNumbers = -12;
    for (let actualX = this.scale; actualX < canvasWidth; actualX += this.scale) {
      context.fillText((actualX / this.scale).toString(), actualX, yPositionOfNumbers);
    }
    for (let actualX = -this.scale; actualX > 0 - (canvasWidth / 2); actualX -= this.scale) {
      context.fillText((actualX / this.scale).toString(), actualX, yPositionOfNumbers);
    }
    for (let actualY = this.scale; actualY < canvasHeight; actualY += this.scale) {
      context.fillText((-actualY / this.scale).toString(), xPositionOfNumbers, actualY);
    }
    for (let actualY = -this.scale; actualY > 0 - (canvasHeight / 2); actualY -= this.scale) {
      context.fillText((-actualY / this.scale).toString(), xPositionOfNumbers, actualY);
    }
  }
}