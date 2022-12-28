class GameManagerSingleton {
  static _instance: GameManagerSingleton;
  private _context: CanvasRenderingContext2D;
  private _scene: HTMLCanvasElement;
  private _SCENE_WIDTH: number;
  private _SCENE_HEIGHT: number;
  someVar = 5;

  private constructor() {
    this._scene = document.getElementById('scene') as HTMLCanvasElement;
    this._context = this._scene.getContext('2d') as CanvasRenderingContext2D;
    this._SCENE_WIDTH = this._scene.width = 500;
    this._SCENE_HEIGHT = this._scene.height = 700;
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  get Scene(): HTMLCanvasElement {
    return this._scene;
  }

  get Context(): CanvasRenderingContext2D {
    return this._context;
  }

  get SceneWidth(): number {
    return this._SCENE_WIDTH;
  }

  get SceneHeight(): number {
    return this._SCENE_HEIGHT;
  }
}

export const GameManager = GameManagerSingleton.Instance;
