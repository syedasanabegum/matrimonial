
document.addEventListener('DOMContentLoaded',()=>{
const selectDrop=document.querySelector('#countries');
fetch("https://www.universal-tutorial.com/api/countries").then(res => {
    return res.json();
}).then(data => {
 let output= "";
 data.forEach(country => {
    output+= `<option value="${country.name}">${country.name}</option>`;
 })
 selectDrop.innerHTML=output;
}).catch(err => {
    console.log(err);
})
});