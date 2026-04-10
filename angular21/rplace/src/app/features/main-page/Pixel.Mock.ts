export interface IPixel {
    id: number,
    x: number,
    y: number,
    color: string,
    userId: number
}

export function generateSequentialPixels(width = 100, height = 100): IPixel[] {
   const MockPixels: IPixel[] = [];

  for (let i = 0; i < width * height; i++) {
    const x = i % width;
    const y = Math.floor(i / width);

    MockPixels.push({
      id: i + 1,
      x,
      y,
      color: "#ffffff", // ou qualquer cor inicial
      userId: 0,
    });
  }

  return MockPixels;
}