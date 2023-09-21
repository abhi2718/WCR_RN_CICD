export class AppExcaptions extends Error {
  constructor(message: string, name: string) {
    super(message);
    this.name = name;
  }
}
