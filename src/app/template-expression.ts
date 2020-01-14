export interface TemplatePipe {
  pipeName: string;
  pipeParameters: string[];
}

export class TemplateExpression {
  public valueName: string;
  public pipes: TemplatePipe[] = [];

  constructor(public rawExpression: string, expression: string) {
    // this.rawExpression = rawExpression;
    const expressionParts = expression.split('|');
    this.valueName = expressionParts[0];
    const pipes = expressionParts.slice(1);
    pipes.forEach((pipe: string) => {
      const pipeParts = pipe.split(':');
      this.pipes.push({pipeName: pipeParts[0], pipeParameters: pipeParts.slice(1)});
    });
  }
}

export interface Pipe {
  name: string;
  handler(data?: string, ...parameters: string[]): any;
}
