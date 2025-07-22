let count = 0;
const display = document.querySelector("#display");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const reset = document.querySelector("#reset");

add.addEventListener("click",()=>{
  count++;
   display.textContent = count;
})

sub.addEventListener("click",()=>{
  count--;
   display.textContent = count;
})

reset.addEventListener("click",()=>{
  count = 0;
  display.textContent = count;
}
)