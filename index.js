let countEl = document.getElementById("count-el");
let pastCount = "past counts: ";

let myCounts = [];
if(localStorage.getItem("counts") == null){
    localStorage.setItem("counts", JSON.stringify(myCounts));
}
else{
    myCounts = JSON.parse(localStorage.getItem("counts"));
}

let count = 0;

console.log(count);

document.getElementById("count-el").textContent = count;

function increment(){
    count++;
    countEl.textContent = count;
}

function save(){
    myCounts = JSON.parse(localStorage.getItem("counts"));
    myCounts.push(count);
    localStorage.setItem("counts", JSON.stringify(myCounts));
    console.log("saving");
    console.log(myCounts)
    document.getElementById("past-counts").textContent = pastCount;
    for(let i = 0; i < myCounts.length; i++){
        document.getElementById("past-counts").textContent += " - " + myCounts[i];
        console.log("printing");
    }
    count = 0;
    countEl.textContent = count;
}

function clearCounts(){
    localStorage.setItem("counts", "[]");
    document.getElementById("past-counts").textContent = pastCount;
}