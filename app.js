const orderList = document.getElementById("orderList");
const addOrderBtn = document.getElementById("addOrderBtn");

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener("click", () => {
  const order = { id: orderId++, status: "En Proceso" };
  addOrder(order); //Llamamos a la FUNCIÓN que dibuja en el HTML
  processOrder(order); //Llamamos a la FUNCIÓN asíncrona para la lógica
});

function addOrder(order) {
  const listItem = document.createElement("li");
  listItem.id = `order-${order.id}`;
  listItem.textContent = `Pedido #${order.id}: ${order.status}`;
  orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
  const listItem = document.getElementById(`order-${order.id}`);
  if (listItem) {
    listItem.textContent = `Pedido #${order.id}: ${status}`;
  }
}

async function processOrder(order) {
  // Definimos la tarea asíncrona
  const simulatePreparation = () => {
    return new Promise((resolve) => {
      const time_preparing = Math.floor(Math.random() * 3000) + 2000; //Entre 2 y 5 segundos
      setTimeout(() => {
        resolve();
      }, time_preparing);
    });
  };
  // EJECUTA: Se espera a que la promesa se cumpla
  await simulatePreparation();

  // Terminada la espera, se actualiza el DOM
  updateOrderStatus(order, "Completado");
}