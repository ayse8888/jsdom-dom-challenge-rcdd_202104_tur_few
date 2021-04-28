const counterValue = document.getElementById("counter")
let numberValue = parseInt(counterValue.innerHTML)
console.log(numberValue)
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const heart = document.getElementById("heart")
const likes = document.querySelector(".likes")
const submitForm = document.getElementById("comment-form")
const submitBtn = document.getElementById("comment-form")

setInterval(function(){
    counterValue.innerText = numberValue += 1;
}, 1000);

plus.addEventListener("click", function(){
  console.log("clicked");
  counterValue.innerText = numberValue += 1;
})

minus.addEventListener("click", function(){
  console.log("clicked");
  counterValue.innerText = numberValue -= 1;
})

heart.addEventListener("click", function(){
  console.log("clicked");
  const li = document.createElement("li")
  li.innerHTML = `${numberValue} has been liked 1 time`
  likes.appendChild(li)
})


