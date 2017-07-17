//#CLIENTSIDE
function onCreated(){timeout = "0.01";}

function onTimeOut(){timeout = "0.01";
  //Angle Ratios
  temp.delta_x = mousex - player.x;
  temp.delta_y = mousey - player.y;
  temp.ang = getangle(temp.delta_x, temp.delta_y);
  temp.ndir = getdir(temp.delta_x, temp.delta_y);
  with (findimg(200)) {
    //Lazer startPoint
    x = player.x + 0.3 + cos(temp.ang) * 0.10;
    y = player.y - 1.2 - sin(temp.ang) * 0.10;
    image = "green.png";
    findimg(200).zoom=.1;
    //Lazer Stream
     //temp.imageX=mousex;
     //temp.imageY=mousey;
     temp.imageX=player.x + 0.3 + cos(temp.ang) * 0.10;
     temp.imageY=player.y - 1.2 - sin(temp.ang) * 0.10;
    //line 1-D polygon
 with(findimg(202)){
  polygon={
   temp.imageX + mouse.x,
   temp.imageY + mouse.y,
   
   temp.imageX - x * -pi * cos(temp.ang),
   temp.imageY - y = sin(temp.ang)
   
   
  };
  layer=1;
  red=0;
  green=1;
  blue=0.5;
 }
    //Lazer endPoint
    showimg 3030,green.png,mousex-.4,mousey-.4;
    findimg(3030).zoom=.1;}
  }
  with (findimg(201)) {
    x = mousex;
    y = mousey - 0.5;
  }
