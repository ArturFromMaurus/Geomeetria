
window.onload = function() {
  // ----------------------------------------- HTML ToolTip ------------------------------------------

tooltip = document.createElement("div");
tooltip.style.backgroundColor = "rgba(9,9,96,0.95)"
tooltip.style.color = "white";
tooltip.style.borderRadius="25px";
tooltip.style.padding = "10px";
tooltip.style.position = "absolute";
tooltip.style.display = "none";
tooltip.style.zIndex="1";
tooltip.style.border="solid 2px black";
tooltip.style.width="340px"
document.body.appendChild(tooltip);

regularText = document.createElement("div");
regularText.innerHTML = "Püramiidi täispindala sõltub püramiidi põhjast.";
regularText.style.fontFamily="Computer Modern";
regularText.style.fontSize="16px";
tooltip.appendChild(regularText);

KaTeX_EQ=""
katexEquation = document.createElement("div");
tooltip.appendChild(katexEquation);


// Info nuppu funktsionaalsus
infoNupp = document.createElement("button");
infoNupp.style.color="rgb(255,255,255)"
infoNupp.innerHTML = "i";
infoNupp.style.position = "absolute";
infoNupp.style.margin="20px";
infoNupp.style.top="12px";
infoNupp.style.left="325px";
infoNupp.style.padding="5px 12px";
infoNupp.style.fontSize="20px";
infoNupp.style.fontWeight="bold";
infoNupp.style.fontFamily="Hoefler Text";
infoNupp.style.fontStyle="italic";
infoNupp.style.background="transparent";
infoNupp.style.border="solid 2px rgb(255,255,255)";
infoNupp.style.borderRadius="50%";
document.body.appendChild(infoNupp);

infoNupp.addEventListener("mouseenter", function() {
  tooltip.style.left = "20px";
  tooltip.style.top =  "80px";
  infoNupp.style.background="#FF9800"
  tooltip.style.display = "block";
});

infoNupp.addEventListener("mouseleave", function() {
  tooltip.style.display = "none";
  infoNupp.style.background="transparent"
});

// ----------------------------------------- HTML ToolTip -------------------------------------------  
  
};

var s=50;
var alusp1=[-1*s,0,-1*s];
var alusp2=[1*s,0,-1*s];
var alusp3=[1*s,0,1*s];
var alusp4=[-1*s,0,1*s];

var tahk_tagumine_P1=[-1*s,0,-1*s];
var tahk_tagumine_P2=[1*s,0,-1*s];
var tahk_tagumine_P3=[0,-3*s,0];

var tahk_ees_P1=[-1*s,0,1*s];
var tahk_ees_P2=[1*s,0,1*s];
var tahk_ees_P3=[0,-3*s,0];

var tahk_parem_P1=[1*s,0,-1*s];
var tahk_parem_P2=[1*s,0,1*s];
var tahk_parem_P3=[0,-3*s,0];

var tahk_vasak_P1=[-1*s,0,-1*s];
var tahk_vasak_P2=[-1*s,0,1*s];
var tahk_vasak_P3=[0,-3*s,0];

var nurga_inkrement=0.5;

var nurk_tagumine_tahk=1*nurga_inkrement;
var nurk_ees_tahk=-1*nurga_inkrement;
var nurk_parem_tahk=1*nurga_inkrement;
var nurk_vasak_tahk=-1*nurga_inkrement;

var nurk_tagumine_tahk_SUM=0;
var nurk_eesmine_tahk_SUM=0;
var nurk_parem_tahk_SUM=0;
var nurk_vasak_tahk_SUM=0;

var toggle=false;

function setup() {
  createCanvas(400, 400,WEBGL);

  stroke(100,180,200,255);
  strokeWeight(2);
  noFill();
  
  STOP=createButton("Jätka");
  STOP.mousePressed(stop_rotate);
  STOP.style('padding','10px 20px');
  STOP.style('background-color','#FF8F00');
  STOP.style('color','black');
  STOP.style('border-radius','30px');
  STOP.style('margin-top','30px');
  STOP.style('margin-left','15px');
  STOP.style("width","370px");
  STOP.position(0,330);
  
  pindala_HTML=createP("");
  pindala_HTML.position(30,30);
  pindala_HTML.style("color:white");

  tekstJoonisel=createP("")
  pindala_HTML.position(30,30);
  tekstJoonisel.style("color:white");

  Sp_HTML=createP("");
  Sp_HTML.position(30,70);
  Sp_HTML.style("color:white");
  
  Sk_HTML=createP("");
  Sk_HTML.position(30,110);
  Sk_HTML.style("color:white");
  
  kolmnurk_HTML=createP("");
  kolmnurk_HTML.position(30,150);
  kolmnurk_HTML.style("color:white");
  
}

function draw() {

  orbitControl(4,4,0.1);
  translate(0,70,0);
  background(15,30,60);
  rotateX(0);
  if (toggle==true){
    pyramid_Anim()
  } else if (toggle==false){
    beginShape();
    vertex(alusp1[0],alusp1[1],alusp1[2]);
    vertex(alusp2[0],alusp2[1],alusp2[2]);
    vertex(alusp3[0],alusp3[1],alusp3[2]);
    vertex(alusp4[0],alusp4[1],alusp4[2]);
  endShape(CLOSE);
  
  // tahk 1 tagumine
  beginShape();
    vertex(tahk_tagumine_P1[0],tahk_tagumine_P1[1],tahk_tagumine_P1[2]);
    vertex(tahk_tagumine_P2[0],tahk_tagumine_P2[1],tahk_tagumine_P2[2]);
    vertex(tahk_tagumine_P3[0],tahk_tagumine_P3[1],tahk_tagumine_P3[2]);
  endShape(CLOSE);
  
  // tahk 2 ees
  beginShape();
    vertex(tahk_ees_P1[0],tahk_ees_P1[1],tahk_ees_P1[2]);
    vertex(tahk_ees_P2[0],tahk_ees_P2[1],tahk_ees_P2[2]);
    vertex(tahk_ees_P3[0],tahk_ees_P3[1],tahk_ees_P3[2]);
  endShape(CLOSE);
  
  // tahk 3 parem
  beginShape();
    vertex(tahk_parem_P1[0],tahk_parem_P1[1],tahk_parem_P1[2]);
    vertex(tahk_parem_P2[0],tahk_parem_P2[1],tahk_parem_P2[2]);
    vertex(tahk_parem_P3[0],tahk_parem_P3[1],tahk_parem_P3[2]);
  endShape(CLOSE);
  
  // tahk 4 vasak
  beginShape();
    vertex(tahk_vasak_P1[0],tahk_vasak_P1[1],tahk_vasak_P1[2]);
    vertex(tahk_vasak_P2[0],tahk_vasak_P2[1],tahk_vasak_P2[2]);
    vertex(tahk_vasak_P3[0],tahk_vasak_P3[1],tahk_vasak_P3[2]);
  endShape(CLOSE);
    
  }
  
  
  katex.render("S_{t}=S_{p}+S_{k}", pindala_HTML.elt);
  katex.render("S_{p}=a^{2}", Sp_HTML.elt);
  katex.render("S_{k}=4 \\cdot S_{\\bigtriangleup}", Sk_HTML.elt);
  katex.render("S_{\\bigtriangleup}=\\dfrac{a \\cdot m}{2}", kolmnurk_HTML.elt);
  tekstJoonisel.html("Saad seda pinnalaotust liigutada ja erinevate nurkade alt uurida.")
}






function pyramid_Anim(){
    // põhi
  beginShape();
    vertex(alusp1[0],alusp1[1],alusp1[2]);
    vertex(alusp2[0],alusp2[1],alusp2[2]);
    vertex(alusp3[0],alusp3[1],alusp3[2]);
    vertex(alusp4[0],alusp4[1],alusp4[2]);
  endShape(CLOSE);
  
  // tahk 1 tagumine
  beginShape();
    vertex(tahk_tagumine_P1[0],tahk_tagumine_P1[1],tahk_tagumine_P1[2]);
    vertex(tahk_tagumine_P2[0],tahk_tagumine_P2[1],tahk_tagumine_P2[2]);
    vertex(tahk_tagumine_P3[0],tahk_tagumine_P3[1],tahk_tagumine_P3[2]);
  endShape(CLOSE);
  
  // tahk 2 ees
  beginShape();
    vertex(tahk_ees_P1[0],tahk_ees_P1[1],tahk_ees_P1[2]);
    vertex(tahk_ees_P2[0],tahk_ees_P2[1],tahk_ees_P2[2]);
    vertex(tahk_ees_P3[0],tahk_ees_P3[1],tahk_ees_P3[2]);
  endShape(CLOSE);
  
  // tahk 3 parem
  beginShape();
    vertex(tahk_parem_P1[0],tahk_parem_P1[1],tahk_parem_P1[2]);
    vertex(tahk_parem_P2[0],tahk_parem_P2[1],tahk_parem_P2[2]);
    vertex(tahk_parem_P3[0],tahk_parem_P3[1],tahk_parem_P3[2]);
  endShape(CLOSE);
  
  // tahk 4 vasak
  beginShape();
    vertex(tahk_vasak_P1[0],tahk_vasak_P1[1],tahk_vasak_P1[2]);
    vertex(tahk_vasak_P2[0],tahk_vasak_P2[1],tahk_vasak_P2[2]);
    vertex(tahk_vasak_P3[0],tahk_vasak_P3[1],tahk_vasak_P3[2]);
  endShape(CLOSE);
  
  tagumise_tahu_tipp=rotatingXaroundOrigin(tahk_tagumine_P3[0], tahk_tagumine_P3[1], tahk_tagumine_P3[2], nurk_tagumine_tahk,0,0,-1*s);
  eesmise_tahu_tipp=rotatingXaroundOrigin(tahk_ees_P3[0], tahk_ees_P3[1], tahk_ees_P3[2], nurk_ees_tahk,0,0,1*s);
  parema_tahu_tipp=rotatingZaroundOrigin(tahk_parem_P3[0], tahk_parem_P3[1], tahk_parem_P3[2], nurk_parem_tahk,1*s,0,0);
  vasaku_tahu_tipp=rotatingZaroundOrigin(tahk_vasak_P3[0], tahk_vasak_P3[1], tahk_vasak_P3[2], nurk_vasak_tahk,-1*s,0,0);
  
  tahk_tagumine_P3[0]=tagumise_tahu_tipp.x;
  tahk_tagumine_P3[1]=tagumise_tahu_tipp.y;
  tahk_tagumine_P3[2]=tagumise_tahu_tipp.z;
  
  tahk_ees_P3[0]=eesmise_tahu_tipp.x;
  tahk_ees_P3[1]=eesmise_tahu_tipp.y;
  tahk_ees_P3[2]=eesmise_tahu_tipp.z;
    
  tahk_parem_P3[0]=parema_tahu_tipp.x;
  tahk_parem_P3[1]=parema_tahu_tipp.y;
  tahk_parem_P3[2]=parema_tahu_tipp.z;
  
  tahk_vasak_P3[0]=vasaku_tahu_tipp.x;
  tahk_vasak_P3[1]=vasaku_tahu_tipp.y;
  tahk_vasak_P3[2]=vasaku_tahu_tipp.z;
  
  if (tahk_tagumine_P3[1]>=0){
    nurk_tagumine_tahk=-nurk_tagumine_tahk
  } else if (nurk_tagumine_tahk_SUM<0){
    nurk_tagumine_tahk=-nurk_tagumine_tahk
  }
  
  if (tahk_ees_P3[1]>=0){
    nurk_ees_tahk=-nurk_ees_tahk
  } else if (nurk_eesmine_tahk_SUM<0){
    nurk_ees_tahk=-nurk_ees_tahk
  }
  
  if (tahk_parem_P3[1]>=0){
    nurk_parem_tahk=-nurk_parem_tahk
  } else if (nurk_parem_tahk_SUM<0){
    nurk_parem_tahk=-nurk_parem_tahk
  }
  
  if (tahk_vasak_P3[1]>=0){
    nurk_vasak_tahk=-nurk_vasak_tahk
  } else if (nurk_vasak_tahk_SUM<0){
    nurk_vasak_tahk=-nurk_vasak_tahk
  }
  
  nurk_tagumine_tahk_SUM=nurk_tagumine_tahk_SUM+nurk_tagumine_tahk;
  nurk_eesmine_tahk_SUM=nurk_eesmine_tahk_SUM-nurk_ees_tahk;
  nurk_parem_tahk_SUM=nurk_parem_tahk_SUM+nurk_parem_tahk;
  nurk_vasak_tahk_SUM=nurk_vasak_tahk_SUM-nurk_vasak_tahk;
}







function rotatingYaroundOrigin(x, y, z, angle,originX,originY,originZ) {
  var radianAngle = angle * (Math.PI / 180);
  var cosTheta = Math.cos(radianAngle);
  var sinTheta = Math.sin(radianAngle);
  var rotatedX = (x-originX) * cosTheta -(z-originZ) * sinTheta+originX;
  var rotatedZ = (x-originX) * sinTheta + (z-originZ) * cosTheta+originZ;
  return { x: rotatedX, y: y, z: rotatedZ };
}


function rotatingXaroundOrigin(x, y, z, angle,originX,originY,originZ) {
  var radianAngle = angle * (Math.PI / 180);
  var cosTheta = Math.cos(radianAngle);
  var sinTheta = Math.sin(radianAngle);
  var rotatedY = (y-originY) * cosTheta -(z-originZ) * sinTheta+originY;
  var rotatedZ = (y-originY) * sinTheta + (z-originZ) * cosTheta+originZ;
  return { x: x, y: rotatedY, z: rotatedZ};
}


function rotatingZaroundOrigin(x, y, z, angle,originX,originY,originZ) {
  var radianAngle = angle * (Math.PI / 180);
  var cosTheta = Math.cos(radianAngle);
  var sinTheta = Math.sin(radianAngle);
  var rotatedX = (x-originX) * cosTheta -(y-originY) * sinTheta+originX;
  var rotatedY = (x-originX) * sinTheta + (y-originY) * cosTheta+originY;
  return { x: rotatedX, y: rotatedY, z: z };
}





function stop_rotate(){
  if (toggle==true){
    toggle=false;
    step=0;
    STOP.style('background-color','#FF8F00');
    STOP.style('color','black');
    STOP.html("Jätka")
  } else if (toggle==false){
    toggle=true;
    step=1;
    STOP.style('background-color',"#00897B");
    STOP.style('color','black');
    STOP.html("Peata")
  }
}
