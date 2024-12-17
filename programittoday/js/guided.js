
const headerTable = [
    {
        projectName: "Intro",
        projectDesc: "The Basics",
        projectDiff: "Easy",
    },
    {
        projectName: "Hello World!",
        projectDesc: "Displaying Text",
        projectDiff: "Easy",
    },
];

let arrayPos = 0;

function updateTable() {
    document.getElementById("projectName").textContent = headerTable[arrayPos].projectName;
    document.getElementById("projectDesc").textContent = headerTable[arrayPos].projectDesc;
    document.getElementById("projectDiff").textContent = headerTable[arrayPos].projectDiff;
}

  // Initial table load
  updateTable();

  // Navigation buttons
  document.getElementById("prev-btn").addEventListener("click", () => {
    arrayPos = (arrayPos - 1 + headerTable.length) % headerTable.length;
    updateTable();
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    arrayPos = (arrayPos + 1) % headerTable.length;
    updateTable();
  });
