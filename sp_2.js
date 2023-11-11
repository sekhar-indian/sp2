
let form=document.getElementById("form");
form.addEventListener("submit",f)

function f(event){
    event.preventDefault();

    const cost=event.target.cost.value;
    const ProdectName=event.target.P_name.value;
    const op=event.target.op.value;

    axios
        .post('https://crudcrud.com/api/cb094845867d41d887c63e1f113d35a0/s',{
          data:cost,
          pName:ProdectName,
          ops:op

        })
        .then(re=>showData(re))

        
            
    
}

function showData(re){
    
    
    document.getElementById("1").innerHTML=`
    <h1>${JSON.stringify(res.data)}</h1>
    `
      
}



