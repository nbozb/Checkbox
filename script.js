const checkAll = document.querySelector("#check-all");
const checkA = document.querySelector("#check-all-a");
const checkB = document.querySelector("#check-all-b");

checkAll.addEventListener("change", (box) => {
    check = box.target.checked
    let boxes = document.querySelectorAll("input[type = 'checkbox']");
    boxes.forEach((checkbox) => {
        checkbox.checked = check;
    })
})

checkA.addEventListener("change", (box) => {
    check = box.target.checked
    let boxes = document.querySelectorAll("input[class = 'check-a']");
    boxes.forEach((checkbox) => {
        checkbox.checked = check;
    })
})

checkB.addEventListener("change", (box) => {
    check = box.target.checked
    let boxes = document.querySelectorAll("input[class = 'check-b']");
    boxes.forEach((checkbox) => {
        checkbox.checked = check;
    })
})