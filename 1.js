//#CLIENTSIDE
 
 function onCreated() {
      onTimeOut();
      function onKeyPressed(code,key) {
      if (key == "h") { 
              this.on = !this.on;
          if(this.on) {
              player.chat = "Lazer Designator ON";
              onTimeOut();
          }
          else {
              player.chat = "Lazer Designator OFF"; 
          }
     function onTimeOut() { 
        if(this.on == 1) { 
         temp.delta_x = mousex - player.x;
         temp.delta_y = mousey - player.y;
         temp.ang = getangle(temp.delta_x, temp.delta_y);
         temp.ndir = getdir(temp.delta_x, temp.delta_y);
         with (findimg(2)) {
         //Lazer startPoint
         x = player.x + 0.3 + cos(temp.ang) * 0.10;
         y = player.y - 1.2 - sin(temp.ang) * 0.10;
         image = "green.png";
         findimg(2).zoom=.1;
         //Lazer Stream
         //temp.imageX=mousex;
         //temp.imageY=mousey;
         temp.imageX=player.x + 0.3 + cos(temp.ang) * 0.10;
         temp.imageY=player.y - 1.2 - sin(temp.ang) * 0.10;
         //line 1-D polygon
     with(findimg(4)){
         polygon={
             temp.imageX + mouse.x,
             temp.imageY + mouse.y,
   
             temp.imageX - x * -pi * cos(temp.ang),
             temp.imageY - y = sin(temp.ang)
             };
             layer=2;
             red=0;
             green=1;
             blue=0.5;
            }
    //Lazer endPoint
    showimg 5,green.png,mousex,mousey;
    findimg(5).zoom=.0;
    }
 
    with (findimg(3)) {
        x = mousex;
        y = mousey - 0.5;
    }
   } 
   else 
   { 
       hideimg(2);
       hideimg(3);
       hideimg(4);
       hideimg(5);
   } 
   settimer(0.05);
  }
 }
}
}
