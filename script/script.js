// getLoan - Отобразить только тех пользователей у кого зарплата больше 200$ и они старше 20 лет, так как банк остальным не одобряет кредит

// getUserNames - Отобразить в console имена тех пользователей кто сейчас в сети

// getUserNames - Далее отобразить не только тех кто в онлайн, также добавить offline пользователей у кого активность была не больше 10 минут назад, и рядом с offline вывести имена
//    как в примере Jon 10 minutes ago


const users = [
    {
        id: 1,
        username: "Jon",
        age: 20,
        status: "online",
        lastActivity: 0,
        salary: 150
    },
    {
        id: 2,
        username: "Anna",
        age: 32,
        status: "offline",
        lastActivity: 25,
        salary: 300
    },
    {
        id: 3,
        username: "Bob",
        age: 19,
        status: "offline",
        lastActivity: 120,
        salary: 100
    },
    {
        id: 4,
        username: "David",
        age: 46,
        status: "online",
        lastActivity: 120,
        salary: 1500
    },
    {
        id: 5,
        username: "Bill",
        age: 18,
        status: "offline",
        lastActivity: 8,
        salary: 2000
    },
];
// users.forEach(item=> {
//   if(item.salary > 200 && item.age >= 20)
// console.log(item.id, item.username, item.age, item.status, item.lastActivity, item.salary)
// } )

// users.forEach((item) => {
//   if (item.status == "online")
//     console.log("online : "item.username);
// });

// users.forEach((item) => {
//   if (item.status == "offline" && item.lastActivity<=10 )
//   console.log("offline 10 minutes ago:", item.username)
// })

// const getLoan = users.filter(function (item) {
//   return item.salary > 200 && item.age >= 20;
// });

// console.log(getLoan);

const getUserNames = users.filter((elem) => 
  elem.status == "online"
);

console.log(getUserNames)



// Задача 2
// У вас есть класс Rectangle, представляющий прямоугольник. Ваша задача - добавить методы для вычисления площади и периметра прямоугольника. Также создайте несколько экземпляров класса и выведите результаты в консоль.

// calculateArea - Метод для вычисления площади прямоугольника

// calculatePerimeter - Метод для вычисления периметра прямоугольника


class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  calculateArea() {
    console.log(this.a * this.b);
  }
  calculatePerimeter(){
    console.log(2 * (this.a + this.b));
  }
}
const square = new Rectangle(5,10)
square.calculateArea()

const perimeter = new Rectangle(5,10)
perimeter.calculatePerimeter()


class BorderRectangle extends Rectangle{
  constructor(a,b, border){
    super(a,b)
    this.solid= border
  }
}

const border = new BorderRectangle (5,10, 'solid')
console.log(border)



// Ваша задача - создать класс TrafficLight, представляющий светофор. У светофора есть три цвета: красный, желтый и зеленый. Реализуйте методы для переключения цветов светофора.
// getCurrentColor - Метод для получения текущего цвета светофора
// switchColor - Метод для переключения цвета светофора


class TrafficLight {
  constructor() {
    this.colors = ["red", "yellow", "green"];
    this.currentColorIndex = 0;
  }
  getCurrentColor() {
    return this.colors[this.currentColorIndex]
  }
  switchColor(){
this.currentColorIndex += this.currentColorIndex
  }
}
const trafficLight = new TrafficLight();

console.log("Переключение светофора:", trafficLight.getCurrentColor())

trafficLight.switchColor()
console.log("Переключение светофора:", trafficLight.getCurrentColor());


//У меня не переключает
