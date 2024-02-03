class Shape{
  constructor(className){ 
    this.element=document.createElement("div");// создаем в HTML тег div
    this.element.classList.add("shape", className)// затем добовляем диву класс-"shape" - это дефолтное значение класса , которая мы добавляем в качестве параметра для сохранения свойств и className - это имя нового класса, которое мы передаем при создание нового класса
  }
  //создадим метод который будут добавлять элементы внутрь контейнера
  render(){
    document.querySelector(".container").append(this.element);
  //
  }
  setStyle(){
    this.element.style.background = "orange" 
    this.element.style.borderRadius = "25px" 
  }

}
// let shape = new Shape("circle") 
// shape.render()
// console.log(shape)


//Создаем еще один элемент используя этот же метод , но задавая новый класс rectangle
// let rectangle = new Shape("rectangle");
// rectangle.render()

//Создадим отдельные классы для этих фигур

class Circle extends Shape{
  constructor(){
    super("circle")
  }
}
let circle = new Circle()
circle.render()
circle.setStyle()

class Rectangle extends Shape {
  constructor() {
    super("rectangle");
  }
}

let rectangle = new Rectangle()
rectangle.render()
rectangle.setStyle()