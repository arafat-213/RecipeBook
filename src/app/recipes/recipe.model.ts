export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getImagePath() {
    return this.imagePath;
  }
}
