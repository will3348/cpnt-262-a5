const picsumIds = [1, 5, 13, 154, 188, 193, 216,345];

console.log(picsumIds.length);
let output = "";

for (let i = 0; i <= picsumIds.length - 1; i++) {
  let pictures = `<img src="https://picsum.photos/id/${picsumIds[i]}/300/300" alt="lorem picsum"></img>`;

  output += `${pictures}`;
  console.log(i)
}

document.querySelector(".picture").innerHTML = `${output}`;