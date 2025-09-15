$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(225,550,10,100,"black");
createPlatform(125,640,100,10,"black");
createPlatform(500,500,15,15,"black");
createPlatform(750,400,15,15,"Black");
createPlatform(1000,300,15,15,"Black");
createPlatform(1300,300,100,10,"Black");


    // TODO 3 - Create Collectables
createCollectable("steve", 1300, 265);
createCollectable("diamond", 150 , 600,);
createCollectable("max" , 740 , 350)


    
    // TODO 4 - Create Cannons
createCannon( "top" , 200 , 1000);
createCannon( "top" , 550, 1500);
createCannon( "left" , 300, 1200);

   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
