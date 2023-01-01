let f=document.getElementsByClassName('pad')
let but=document.getElementById('buttonn');
let parent=null;
let mistake=0;
let score=document.getElementById('mistake')
score.innerText=0;
const clickAudio=new Audio('Audio/click.wav')

let button=document.getElementsByClassName('button')
function ffc() {
    fetch('data.txt').then((res) => {
        hole_data=res.text();
        return hole_data
    }).then((dat) => {
        ds=dat.split("$")
        console.log(ds[5])
        let arr1=[...ds]
        console.log(typeof(arr1))
        console.log(arr1)
        return arr1
    })

}
but.addEventListener('click',()=>{
    console.log("GOT INPUt");
    const ans = [['4', '3', '5', '2', '6', '9', '7', '8', '1'], ['6', '8', '2', '5', '7', '1', '4', '9', '3'], ['1', '9', '7', '8', '3', '4', '5', '6', '2'], ['8', '2', '6', '1', '9', '5', '3', '4', '7'], ['3', '7', '4', '6', '8', '2', '9', '1', '5'], ['9', '5', '1', '7', '4', '3', '6', '2', '8'], ['5', '1', '9', '3', '2', '6', '8', '7', '4'], ['2', '4', '8', '9', '5', '7', '1', '3', '6'], ['7', '6', '3', '4', '1', '8', '2', '5', '9']]
    const arr = [['', '', '', '2', '6', '', '7', '', '1'], ['6', '8', '', '', '7', '', '', '9', ''], ['1', '9', '', '', '', '4', '5', '', ''], ['8', '2', '', '1', '', '', '', '4', ''], ['', '', '4', '6', '', '2', '9', '', ''], ['', '5', '', '', '', '3', '', '2', '8'], ['', '', '9', '3', '', '', '', '7', '4'], ['', '4', '', '', '5', '', '', '3', '6'], ['7', '', '3', '', '1', '8', '', '', '']]
    mistake=0;
    holegamelogic(arr,ans,mistake)
    
})
// Hole game
function holegamelogic(arr,ans,mistake){
    const createNEW = () => {
        let pp = document.getElementById("Box")
        for (let a = 0; a < 9; a++) {
            dd = pp.children[a]
            for (let b = 0; b < 9; b++) {
                val = dd.children[b]
                val.innerHTML = arr[a][b]}
        }
    
    }
    createNEW()
    
    let boxx1 = document.getElementsByClassName("Board");
    Array.from(boxx1).forEach((element) => {
        let e = element.querySelectorAll(".cell")
        Array.from(e).forEach((fff) => {
            fff.addEventListener('click',clickk);
    
        })
    })
    // click for board
    function clickk(){
        clickAudio.play();
        if (parent!=null){
            parent.classList.remove('selected')
        }
        parent=this
        parent.classList.add('selected');
    }
    // to get pad number
    let boxx11 = document.getElementsByClassName("pad");
        Array.from(boxx11).forEach((elem) => {
            let e = elem.querySelector(".text")
            elem.addEventListener('click', changevalue)
            
        })
        
    function changevalue(){
        if(parent.innerText=="" || parent.classList.contains('khatra')){
            clickAudio.play();
            parent.innerText=this.innerText
            if (checkvalue(parent)==false){
                mistake++
                parent.classList.add('khatra');
                score.innerText=mistake;
    
            }
            else if (checkvalue(parent)==true){
                parent.classList.remove('khatra');
            }
            if (checkcomplete()){
                alert("Game Over");
            }
            
        }
    
    }
    function checkvalue(par){
        let pp = par.id;
        let row=Number(pp[1])
        let col=Number(pp[2])
        if (ans[row-1][col-1]==par.innerText){
            return true;
        }
        else{
            return false;
        }
    }
    function checkcomplete(){
       const win=document.querySelectorAll('.cell')
       return [...win].every((w)=>{
        return (w.innerText!="")
       })
    }
    
}
