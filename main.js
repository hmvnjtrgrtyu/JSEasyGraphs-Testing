import { DOMGraphics } from "./graphics.js";

const Graphics = new DOMGraphics();

Graphics.setDrawColor("red");

let text = Graphics.createText();

let rectangle = Graphics.createRect("100px", "100px", "100px", "100px");

let circle = Graphics.createCircle("100px", "200px", "200px");

Graphics.setDrawColor("green");

let triangle = Graphics.createTriangle("60px", "100px", "300px", "300px");

Graphics.insertGraphics(text);
Graphics.insertGraphics(rectangle);
Graphics.insertGraphics(circle);
Graphics.insertGraphics(triangle);
