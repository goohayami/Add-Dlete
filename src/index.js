const after = document.getElementById("after");
const array1 = {
  name: ["a", "b", "c"],
  number: [1, 5, 9]
};

for (let i = 0; i < array1.name.length; i++) {
  const prof = document.getElementById("tes" + [i]);
  prof.innerHTML = `名前は${array1.name[i]}で、年齢は${array1.number[i]}`;
  // console.log(prof);
}

{
  const i = 0;
  document.getElementById("tes" + i).addEventListener("click", () => {
    const div = document.createElement("div");
    after.appendChild(
      div
    ).innerText = `名前は${array1.name[i]}で、年齢は${array1.number[i]}`;
    console.log(after);
    div.addEventListener("click", () => {
      after.removeChild(div);
    });
  });
}
{
  const i = 1;
  document.getElementById("tes" + i).addEventListener("click", () => {
    const div = document.createElement("div");
    after.appendChild(
      div
    ).innerText = `名前は${array1.name[i]}で、年齢は${array1.number[i]}`;
    console.log(after);
    div.addEventListener("click", () => {
      after.removeChild(div);
    });
  });
}
{
  const i = 2;
  document.getElementById("tes" + i).addEventListener("click", () => {
    const div = document.createElement("div");
    after.appendChild(
      div
    ).innerText = `名前は${array1.name[i]}で、年齢は${array1.number[i]}`;
    console.log(after);
    div.addEventListener("click", () => {
      after.removeChild(div);
    });
  });
}
