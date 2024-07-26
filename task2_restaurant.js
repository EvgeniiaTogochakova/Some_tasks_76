class Client {
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  #firstname;
  #lastname;

  getInfo() {
    return `${this.#firstname} ${this.#lastname}`;
  }
}
const victor = {
  name: "Виктор",
};

const olga = {
  name: "Ольга",
};

const dmitrii = {
  name: "Дмитрий",
};

const pizzaSet = new Set(["Маргарита", "Пепперони"]);
const sushiSet = new Set(["Филадельфия", "Калифорния"]);
const dessertSet = new Set(["Тирамису", "Чизкейк"]);
const allDishes = [];
allDishes.push(pizzaSet);
allDishes.push(sushiSet);
allDishes.push(dessertSet);

const dishesChefs = new Map();
dishesChefs.set(pizzaSet, victor).set(sushiSet, olga).set(dessertSet, dmitrii);

class Manager {
  findChefForCooking(dishName) {
    for (let i = 0; i < allDishes.length; i++) {
      if (allDishes[i].has(dishName)) {
        return dishesChefs.get(allDishes[i]).name;
      }
    }
  }

  newOrder(client, ...dishes) {
    console.log(`Клиент ${client.getInfo()} заказал:`);

    for (let i = 0; i < dishes.length; i++) {
      console.log(
        `${dishes[i].type} "${dishes[i].name}" - ${
          dishes[i].quantity
        }; готовит повар ${this.findChefForCooking(dishes[i].name)}`
      );
    }
  }
}
const manager = new Manager();

manager.newOrder(
  new Client("Алексей", "Иванов"),
  { name: "Пепперони", quantity: 1, type: "Пицца" },
  { name: "Тирамису", quantity: 2, type: "Десерт" }
);

const clientMaria = new Client("Мария", "Павлова");

manager.newOrder(
  clientMaria,
  { name: "Калифорния", quantity: 5, type: "Суши" },
  { name: "Маргарита", quantity: 1, type: "Пицца" }
);

const clientIrina = new Client("Ирина", "Сергеева");

manager.newOrder(clientIrina, { name: "Чизкейк", quantity: 1, type: "Десерт" });
