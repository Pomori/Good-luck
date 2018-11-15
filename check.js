var i;
var check = 0;

function setup() {
  
    var lim = random(1,15);
    noStroke();
    createCanvas(600,600);
    background(255,254,235);
     
    i = 0;
    for (i=0; i<=lim; i++)
  {  
   
     var x  = random(0,600);
     var y = random(0,600);
    
    fill(150,230,160);
    //rotate(PI/3.0);
    ellipse(x,y,50,30); // 150,50
    ellipse(x+20,y-20,30,50);//170,30
    ellipse(x+40,y,50,30);//190,50
    ellipse(x+20,y+20,30,50);//170,70
    
    fill(250,230,100);
    ellipse(x,y,30,10); // 150,50
    ellipse(x+20,y-20,10,30);//170,30
    ellipse(x+40,y,30,10);//190,50
    ellipse(x+20,y+20,10,30);//170,70ellipse(x,y,50,30); // 150,50
   
   
  }
  


}




function draw(){
  
if(check == i)
{  
    

if(check % 2 ==1)
{
  fill(245,217,38);
noStroke();
ellipse(412.5, 299.5, 500, 500);
beginShape();
fill(0);
vertex(295.3, 183);
bezierVertex(295.3, 219.4, 295.3, 255.9, 295.3, 292.3);
bezierVertex(295.3, 300.1, 302.2, 307.7, 310.3, 307.3);
bezierVertex(318.4, 306.9, 325.3, 300.7, 325.3, 292.3);
bezierVertex(325.3, 255.9, 325.3, 219.4, 325.3, 183);
bezierVertex(325.3, 175.2, 318.4, 167.6, 310.3, 168);
bezierVertex(302.2, 168.4, 295.3, 174.6, 295.3, 183);
vertex(295.3, 183);
endShape();
beginShape();
vertex(492.3, 175);
bezierVertex(492.3, 211.4, 492.3, 247.9, 492.3, 284.3);
bezierVertex(492.3, 292.1, 499.2, 299.7, 507.3, 299.3);
bezierVertex(515.4, 298.9, 522.3, 292.7, 522.3, 284.3);
bezierVertex(522.3, 247.9, 522.3, 211.4, 522.3, 175);
bezierVertex(522.3, 167.2, 515.4, 159.6, 507.3, 160);
bezierVertex(499.2, 160.4, 492.3, 166.6, 492.3, 175);
vertex(492.3, 175);
endShape();
beginShape();
vertex(227.2, 355.3);
bezierVertex(248, 404.2, 293.8, 440.6, 344.7, 454.2);
bezierVertex(403.1, 469.8, 466.4, 457.4, 517.4, 425.9);
bezierVertex(543.9, 409.6, 567.4, 388.5, 587.1, 364.5);
bezierVertex(592.2, 358.2, 593.2, 349.4, 587.1, 343.3);
bezierVertex(581.8, 338, 571, 337, 565.9, 343.3);
bezierVertex(557.7, 353.4, 548.8, 362.9, 539.2, 371.8);
bezierVertex(529.5, 380.8, 521.5, 387.2, 511.1, 394.3);
bezierVertex(488.7, 409.5, 467.2, 419.5, 441.3, 425.8);
bezierVertex(416.2, 431.9, 388.1, 432.9, 363, 427.8);
bezierVertex(356.6, 426.5, 350.3, 424.9, 344.2, 422.9);
bezierVertex(341.2, 421.9, 338.2, 420.9, 335.2, 419.7);
bezierVertex(334.3, 419.3, 333.3, 419, 332.4, 418.6);
bezierVertex(334.7, 419.5, 329.6, 417.3, 329.1, 417.1);
bezierVertex(318.2, 412.1, 307.8, 405.9, 298.2, 398.7);
bezierVertex(300.4, 400.3, 296.5, 397.4, 296.5, 397.4);
bezierVertex(295.3, 396.5, 294.2, 395.5, 293, 394.5);
bezierVertex(290.3, 392.2, 287.8, 389.9, 285.2, 387.4);
bezierVertex(280.5, 382.9, 276.2, 378, 272.1, 373);
bezierVertex(269, 369.3, 273.6, 375.2, 270.8, 371.3);
bezierVertex(269.6, 369.7, 268.5, 368.1, 267.3, 366.4);
bezierVertex(265.6, 363.9, 264, 361.4, 262.5, 358.9);
bezierVertex(258.9, 352.9, 255.8, 346.7, 253, 340.2);
bezierVertex(249.8, 332.7, 238.8, 331.1, 232.5, 334.8);
bezierVertex(224.8, 339.3, 224, 347.9, 227.2, 355.3);
vertex(227.2, 355.3);
endShape();
}


else
{
/**
 * Converted from SVG format using @darrylyeo's SVG-to-PJS converter:
 * darryl-yeo.com/svg-to-processing-js-converter
 */

fill(245,217,38);
noStroke();
ellipse(412.5, 299.5, 500, 500);
beginShape();
fill(0);
vertex(213.1, 219.9);
bezierVertex(210.2, 236, 212.8, 252.8, 222.5, 266.2);
bezierVertex(232.7, 280.3, 247.8, 288.9, 265, 290.9);
bezierVertex(297, 294.6, 320.4, 270.5, 338.3, 247.4);
bezierVertex(343.3, 241, 344.5, 232.4, 338.3, 226.2);
bezierVertex(333.1, 221, 322.1, 219.8, 317.1, 226.2);
bezierVertex(310.2, 235.1, 303, 244.1, 294.4, 251.4);
bezierVertex(294.4, 251.4, 290.8, 254.2, 292.7, 252.8);
bezierVertex(291.7, 253.5, 290.7, 254.2, 289.6, 254.9);
bezierVertex(287.3, 256.4, 284.9, 257.7, 282.5, 258.9);
bezierVertex(284.4, 258, 282, 259.1, 281.3, 259.3);
bezierVertex(279.9, 259.8, 278.4, 260.2, 277, 260.5);
bezierVertex(276.2, 260.7, 273.6, 261.2, 275.7, 260.9);
bezierVertex(274.2, 261.1, 272.6, 261.1, 271.1, 261.2);
bezierVertex(269.8, 261.2, 268.6, 261.1, 267.3, 261);
bezierVertex(265.8, 260.9, 268.5, 261.4, 266, 260.8);
bezierVertex(264.5, 260.4, 263, 260.1, 261.6, 259.6);
bezierVertex(261.5, 259.6, 257.3, 257.9, 259.5, 258.9);
bezierVertex(257.2, 257.8, 255, 256.5, 252.9, 255.1);
bezierVertex(254.7, 256.4, 251.2, 253.7, 251.2, 253.6);
bezierVertex(250.1, 252.6, 249, 251.4, 248, 250.3);
bezierVertex(249.2, 251.8, 247.5, 249.6, 247.1, 249.1);
bezierVertex(246.4, 248, 245.7, 246.9, 245.1, 245.8);
bezierVertex(245.1, 245.7, 243.2, 241.6, 244.1, 243.8);
bezierVertex(243.6, 242.6, 243.3, 241.4, 242.9, 240.2);
bezierVertex(242.6, 239, 242.3, 237.7, 242, 236.5);
bezierVertex(241.3, 233.3, 241.8, 237.5, 241.8, 234.4);
bezierVertex(241.8, 232.9, 241.8, 231.4, 241.8, 229.8);
bezierVertex(241.8, 226.7, 241.4, 231, 242, 227.7);
bezierVertex(243.4, 220, 239.9, 211.2, 231.5, 209.2);
bezierVertex(224.2, 207.8, 214.6, 211.6, 213.1, 219.9);
vertex(213.1, 219.9);
endShape();
beginShape();
vertex(480.6, 220);
bezierVertex(472.7, 252.3, 499.8, 289.7, 533, 291.8);
bezierVertex(548.7, 292.8, 565.4, 286.7, 578.8, 278.9);
bezierVertex(592.4, 271, 603.6, 260.1, 612.6, 247.3);
bezierVertex(617.3, 240.7, 613.8, 230.6, 607.2, 226.8);
bezierVertex(599.7, 222.4, 591.3, 225.5, 586.7, 232.2);
bezierVertex(586.7, 232.1, 584, 235.9, 585.3, 234.2);
bezierVertex(584.5, 235.2, 583.6, 236.2, 582.8, 237.2);
bezierVertex(581.1, 239.2, 579.3, 241, 577.4, 242.8);
bezierVertex(576.5, 243.7, 575.5, 244.6, 574.5, 245.4);
bezierVertex(574.6, 245.3, 571, 248.3, 572.7, 247);
bezierVertex(570.7, 248.6, 568.5, 250.1, 566.3, 251.4);
bezierVertex(557.6, 256.8, 548.8, 261.1, 538.6, 261.8);
bezierVertex(536, 262, 533.7, 262, 531.8, 261.6);
bezierVertex(530.6, 261.3, 529.4, 261, 528.3, 260.6);
bezierVertex(526.9, 260.1, 529.4, 261.4, 527.2, 260.1);
bezierVertex(525.9, 259.4, 524.7, 258.6, 523.4, 257.8);
bezierVertex(521.3, 256.4, 523.5, 258, 522.4, 257);
bezierVertex(520.6, 255.3, 518.8, 253.6, 517.2, 251.7);
bezierVertex(516.5, 250.9, 516.6, 250.9, 517.2, 251.8);
bezierVertex(516.9, 251.4, 516.6, 251, 516.3, 250.6);
bezierVertex(515.5, 249.4, 514.6, 248.1, 513.9, 246.8);
bezierVertex(513.3, 245.7, 512.7, 244.6, 512.1, 243.4);
bezierVertex(511.9, 243, 510.6, 240, 511.2, 241.5);
bezierVertex(510.2, 238.9, 509.3, 236.1, 508.9, 233.3);
bezierVertex(509.1, 235.3, 509, 230.5, 509, 230.6);
bezierVertex(509, 230, 509.1, 229.5, 509.1, 228.9);
bezierVertex(509, 230.1, 509.1, 229.8, 509.5, 227.9);
bezierVertex(511.4, 220.3, 507.1, 211.3, 499, 209.4);
bezierVertex(491.3, 207.8, 482.6, 211.9, 480.6, 220);
vertex(480.6, 220);
endShape();
beginShape();
vertex(324, 418.6);
bezierVertex(322.5, 420.5, 326.1, 416.4, 326.4, 416);
bezierVertex(327.8, 414.6, 329.2, 413.3, 330.7, 412);
bezierVertex(332.1, 410.9, 332.2, 410.8, 331.1, 411.6);
bezierVertex(331.7, 411.2, 332.3, 410.7, 332.9, 410.3);
bezierVertex(334.3, 409.3, 335.7, 408.4, 337.2, 407.6);
bezierVertex(338.9, 406.6, 340.6, 405.7, 342.4, 404.8);
bezierVertex(343.3, 404.4, 344.2, 404, 345.1, 403.6);
bezierVertex(343.8, 404.1, 344, 404.1, 345.6, 403.4);
bezierVertex(348.9, 402.2, 352.2, 401.1, 355.6, 400.1);
bezierVertex(359, 399.2, 362.4, 398.4, 365.9, 397.8);
bezierVertex(366.4, 397.7, 372.2, 396.8, 369.4, 397.2);
bezierVertex(371.4, 396.9, 373.4, 396.7, 375.4, 396.6);
bezierVertex(383.6, 395.9, 391.8, 395.8, 400, 396.1);
bezierVertex(416.3, 396.8, 431.3, 399.5, 447.8, 404.6);
bezierVertex(464.1, 409.6, 477.9, 416.1, 492.8, 425.5);
bezierVertex(499.7, 429.8, 509.3, 426.9, 513.3, 420.1);
bezierVertex(517.5, 412.9, 514.8, 403.9, 507.9, 399.6);
bezierVertex(482.5, 383.6, 453.5, 372.8, 423.7, 368.5);
bezierVertex(395.5, 364.5, 364.6, 364, 337.6, 374.5);
bezierVertex(321.6, 380.7, 308.6, 389.8, 298.1, 403.4);
bezierVertex(293.2, 409.8, 297.1, 420.2, 303.5, 423.9);
bezierVertex(311.2, 428.5, 319.1, 425.1, 324, 418.6);
vertex(324, 418.6);
endShape();
}
}
}


function mousePressed(){
  smooth();
  noStroke();
  fill(255,0,0);
  beginShape();
  vertex(50, 15); 
  bezierVertex(50, -5, 90, 5, 50, 40); 
  vertex(50, 15); 
  bezierVertex(50, -5, 10, 5, 50, 40); 
  translate(mouseX-50, mouseY-10);
  endShape();
  check+=1;
}
