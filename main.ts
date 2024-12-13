import './style.css'
import p5 from 'p5'

// const text =
//   'Proident velit reprehenderit dolore do ullamco id consectetur consequat Lorem qui adipisicing adipisicing ea reprehenderit.'
const text =
  'Nisi ex eiusmod do commodo irure aliqua sint eiusmod magna in nostrud laborum adipisicing. Amet commodo elit laborum aute. Voluptate pariatur sunt ex minim incididunt. Amet sint cillum voluptate commodo laboris sint ex anim est officia Lorem ullamco. Ullamco velit nostrud aute ea duis consectetur ea ad ut et ex nisi laborum duis.'

let font: p5.Font
let yOffset = 0

const sketch = (p: p5) => {
  p.preload = () => {
    font = p.loadFont('./MesloLGS NF Bold Italic.ttf')
  }
  p.setup = () => {
    p.createCanvas(600, 600, p.WEBGL)
    p.textFont(font)
    // p.textAlign(p.CENTER, p.CENTER)
    p.textSize(50)
  }
  p.draw = () => {
    p.background(0)
    p.rotateX(p.PI / 4)
    p.fill(255, 255, 0)
    // p.fill(255)
    p.textAlign(p.CENTER, p.TOP)
    p.text(text, -p.width / 2, p.height / 2 - yOffset, p.width, 1000)
    yOffset += 2
    // p.fill(255)
    // p.ellipse(p.width / 2, p.height / 2, 50, 50)
  }
}

new p5(sketch)
