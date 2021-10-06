const api_key="155a325cb594ed53331801ce46cd253e";
function getweather(city){
	fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=155a325cb594ed53331801ce46cd253e")
.then((response)=>{
    if (!response.ok) {
      alert("No weather found.");
      throw new Error("No weather found.");
    }
    return response.json();
  })
  .then((data) => this.getdata(data));
}
const search=document.querySelector(".search_btn");
const search_box=document.querySelector(".search_box");


// getweather("guntur")
const name_ele=document.querySelector(".name");
const icon_ele=document.querySelector(".icon");
const body_img=document.querySelector("body");
const description_ele=document.querySelector(".description");
const temperature=document.querySelector(".temp");
const humidity_val=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const text_to_hide=document.querySelector(".text_to_hide")
function getdata(data){
  text_to_hide.style.display="none";
	const {name}=data;
    
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
   if(name=="innichen"){
       name="India";
   }
    console.log(name,icon,description,temp,humidity,icon,speed*10);
    name_ele.innerHTML=name;
    icon_ele.src =
    "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    description_ele.innerHTML=description;
    temperature.innerHTML="Temperature : "+temp+" °c ";
    wind.innerHTML="Wind Speed : "+speed+" km/hr";
    humidity_val.innerHTML="Humidity : "+humidity+" g.m<sup>-3</sup>";
    body_img.style.background="url(https://source.unsplash.com/1600x1900/?"+name+")";
}

search.addEventListener("click",()=>{
 getweather(search_box.value);
    
})
document
 search_box.addEventListener("keyup", (event)=>{
    if (event.key == "Enter") {
        getweather(search_box.value);
    }
  });