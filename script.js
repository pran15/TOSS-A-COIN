let headsCount = 0;
let tailsCount = 0;

function tossCoin() {
  const coin = document.getElementById("coin");
  const headsImg = document.getElementById("heads-img");
  const tailsImg = document.getElementById("tails-img");
  const result = document.getElementById("result");

  const button = document.querySelector("button");
  button.disabled = true;

  
  coin.classList.add("flipping");

  
  setTimeout(() => {
    
    const isHeads = Math.random() < 0.5;

    if (isHeads) {
      headsImg.style.transform = "rotateY(0deg)"; 
      tailsImg.style.transform = "rotateY(180deg)"; 
      result.textContent = "It's Heads!";
      headsCount++;
    } else {
      headsImg.style.transform = "rotateY(180deg)"; 
      tailsImg.style.transform = "rotateY(0deg)"; 
      result.textContent = "It's Tails!";
      tailsCount++;
    }

    
    document.getElementById("heads-score").textContent = headsCount;
    document.getElementById("tails-score").textContent = tailsCount;

    
    button.disabled = false;

    
    coin.classList.remove("flipping");
  }, 1000); 
}



document.querySelector("button").addEventListener("click", tossCoin);
