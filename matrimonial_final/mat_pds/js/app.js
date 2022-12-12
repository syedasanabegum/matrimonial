const chkbxAll=document.querySelector("#chkbxAll");

const chkbxOptions=document.querySelectorAll(".select-option");

function selectAllchkboxes(){
    const isChecked=chkbxAll.checked;
    for(let i=0;i<chkbxOptions.length;i++){
        chkbxOptions[i].checked = isChecked;
    }
}   
