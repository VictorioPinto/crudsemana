let menuItems = {
  segunda: [],
  terca: [],
  quarta: [],
  quinta: [],
  sexta: [],
  sabado: [],
  domingo: [],
};

let editedIndex = -1;

function addItem() {
  const dia = document.getElementById("dia").value;
  const item = document.getElementById("menuItem").value;

  if (item.trim() !== "") {
    if (editedIndex !== -1) {
      menuItems[dia][editedIndex] = item;
      editedIndex = -1;
    } else {
      menuItems[dia].push(item);
    }
    displayMenu();
    document.getElementById("menuItem").value = "";
  } else {
    alert("Por favor, insira um item.");
  }
}

function editItem(dia, index) {
  const item = menuItems[dia][index];
  document.getElementById("dia").value = dia;
  document.getElementById("menuItem").value = item;
  editedIndex = index;
}

function deleteItem(dia, index) {
  menuItems[dia].splice(index, 1);
  displayMenu();
}

function displayMenu() {
  const dias = [
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo",
  ];
  const menuTable = document
    .getElementById("menuTable")
    .getElementsByTagName("tbody")[0];
  menuTable.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    const row = menuTable.insertRow(i);
    const cell = row.insertCell(0);
    cell.textContent = dias[i];

    for (let j = 1; j < 10; j++) {
      const cell = row.insertCell(j);
      const diaItems = menuItems[dias[i]];
      if (diaItems.length >= j) {
        const item = diaItems[j - 1];
        cell.textContent = item;
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.onclick = () => editItem(dias[i], j - 1);
        cell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = () => deleteItem(dias[i], j - 1);
        cell.appendChild(deleteButton);
      }
    }
  }
}
