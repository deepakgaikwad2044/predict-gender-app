

let wrapper = document.querySelector(".wrapper");

let btn = document.querySelector(".btn");

let search = document.querySelector("#search");

let errorDiv = document.querySelector(".error");

let api = "https://api.genderize.io/?name="

let resdiv= document.querySelector(".resultdiv");


btn.addEventListener("click", (e)=>{
    
    e.preventDefault();
    
 let userInput = search.value.trim();
    
    if(userInput.length < 1 ){
        errorDiv.classList.add("show")
    }else{
        errorDiv.classList.remove("show")
    search.value ="";
    
getdata(api+userInput);
    }
})


const getdata = async(apikey)=>
{   
    resdiv.classList.add("show");

    resdiv.innerHTML =` <div class="loadicon"> <div> <h3 class="wait">  Please wait data loading..
    </h3> 
    </div> 
    <div>
    <img class="loader" src="loader.gif">
    </div>
    
    </div> `
    
    let apiUrl = await fetch(apikey);
    
    let data =  await apiUrl.json();
    
    showAPIResult(data);
    
}


const showAPIResult = (res)=>{
  
  resdiv.classList.add("show");
    let div = document.createElement("div");
  
   
   let { count , gender,  name, probability} = res;
   
   
   let username = name.toUpperCase();
   
   let gendericon =  gender=="male" ? "male.png" : "female.png" ;
   
   
    resdiv.innerHTML= ` 
    
 
        <div class="typography">
           <div> <h3> <b> ${username} </b> </h3> <div>
          
          <div class="resimg">
          <img src="${gendericon}">
           </div>
           
            <div class="textcenter">
                
            <h4>Gender: <b> ${gender}</b></h4>
        <h4>probablity: <b> ${probability} </b> </h4>
        
        <h4> count: <b> ${count} </b> </h4>
            </div>
        </div>
                
    `
    wrapper.appendChild(div)
    
    errorDiv.innerHTML = "";
}

