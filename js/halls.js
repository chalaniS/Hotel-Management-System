function showHallContent(name){

    
    document.getElementById('hallImage').src = "../src/hallImages/lawn.jpg";
    document.getElementById('description').innerHTML = "Golden moment are in Booker Recreation (Pvt) Ltd business over a decade since inspiration 21 / Dec / 2003. Booker Recreation (Pvt) Ltd sincerely thank all the customers, well-wishers and staff members for providing and maintaining star class royal service to our customers. Focusing on customers comfort is our primary resposiblilty to acheive your wedding dream come true.";

    const btn = document.getElementById('hall');

    if(name == 2){
        document.getElementById('hallImage').src = "../src/hallImages/egle.jpg";
        document.getElementById('description').innerHTML = "B creation strives to be the best decoration expert and provider in Sri lanka. We realize every function is different and with every new event there is a story to tell. We take joy in combining flowers, thrones ,lights - anything that we can get our hands on - to create decorations that leave a positive impact in your function. We decorate any place according to your request...!Book a chat to get more information ";
      

    }
    else if(name == 3 ){
        document.getElementById('hallImage').src = "../src/hallImages/ball.jpg";
        document.getElementById('description').innerHTML = "Booker Recreation (Pvt) Ltd is an iconic place located at the heart of the city, where you could have royal hospitality services and wedding planning to appreciate from the moment you handover the responsibility to Booker Recreation (Pvt) Ltd. We offer professional advise in organizing Wedding and other official functions against a stunning and ancient backdrop. Designer decors and elegantly appointed furnishings are common features in Booker Recreation (Pvt) Ltd. We have been always been highlighted for stylish Settee back, Head table decorations, Oil lamps, Cake structures, Table decorations, Poruwa and Entrance decorations. ";
       
    }
    else if(name == 4 ){
        document.getElementById('hallImage').src = "../src/hallImages/outdoor.jpg";
        document.getElementById('description').innerHTML = "Booker Recreation (Pvt) Ltd is an iconic place located at the heart of the city, where you could have royal hospitality services and wedding planning to appreciate from the moment you handover the responsibility to Booker Recreation (Pvt) Ltd. We offer professional advise in organizing Wedding and other official functions against a stunning and ancient backdrop. Designer decors and elegantly appointed furnishings are common features in Booker Recreation (Pvt) Ltd. We have been always been highlighted for stylish Settee back, Head table decorations, Oil lamps, Cake structures, Table decorations, Poruwa and Entrance decorations. ";
     
    
    }  
}