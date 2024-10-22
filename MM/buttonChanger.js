function textChanger(input)
{
    document.getElementById(input).textContent = 'Go to '+input;
}
    
function textReverter(input)
{
    document.getElementById(input).textContent = input;
}
/*

ADD THIS TO BUTTONS TO MAKE THEM INTERACTIVE!
Change the Insert part to whatever the button is saposed to say.

id="Insert" onmouseover="textChanger('Insert')" onmouseleave="textReverter('Insert')"

*/
var saveAllowed = true;

var click = 0;
var message1 = 0;
var cursors = 0;
var wheel = 0;
var nextCost = 10;
var WheelnextCost = 100;
var Cage = 0;
var CagenextCost = 250;
var clickpower = 1;
var clickpowerUPGnextCost = 15
var cursorMult = 1;
var cursorMultnextCost = 100
var wheelMult = 1;
var wheelMultnextCost = 500;
var cageMult = 1;
var house = 0;
var houseMult = 1;
var God = 0;
var GodMult = 1;
let achievements = [];
/* following is part of template just replace "NEW_ITEM" with new item name */
/*
var NEW_ITEM = 0;
*/

function prettify(input){
    var output = Math.round(input * 100000000000)/100000000000;
    var output2 = output.toLocaleString();
	return output2;
}


function hamsterclick(input){
  click = click + input * clickpower;
  document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks.";
  checkAchievements();  // Check for achievements after each click
}
function sellCursor(){
    if(cursors>=1){ 
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
    cursors = cursors - 1;
    click = click + cursorCost*0.6;
    document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks."; 
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
    document.getElementById('cursorCost').innerHTML = prettify(cursorCost);
    document.getElementById('cursors').innerHTML = cursors + 'x';
    if(cursors>=1){
        document.getElementById('sellCursorAmount').innerHTML = 'You will earn $' + prettify(cursorCost*0.6) + ' clicks.';
    } else {
    document.getElementById('sellCursorAmount').innerHTML = 'You do not own any cursors!';
    }
    }   
}    
    
function sellwheel(){
    if(wheel>=1){ 
    var wheelCost = Math.floor(100 * Math.pow(1.1,wheel));
    wheel = wheel - 1;
    click = click + wheelCost*0.6;
    document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks."; 
    var wheelCost = Math.floor(100 * Math.pow(1.1,wheel));
    document.getElementById('wheelCost').innerHTML = prettify(wheelCost);
    document.getElementById('wheel').innerHTML = wheel + 'x';
    if(wheel>=1){
        document.getElementById('sellWheelAmount').innerHTML = 'You will earn $' + prettify(wheelCost*0.6) + ' clicks.';
    } else {
    document.getElementById('sellWheelAmount').innerHTML = 'You do not own any wheels!';
    }
    }   
}

function sellcage(){
    if(Cage>=1){ 
    var CageCost = Math.floor(250 * Math.pow(1.1,Cage));
    Cage = Cage - 1;
    click = click + CageCost*0.6;
    document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks."; 
    var CageCost = Math.floor(250 * Math.pow(1.1,Cage));
    document.getElementById('CageCost').innerHTML = prettify(CageCost);
    document.getElementById('Cage').innerHTML = Cage + 'x';
    if(Cage>=1){
        document.getElementById('sellCageAmount').innerHTML = 'You will earn $' + prettify(CageCost*0.6) + ' clicks.';
    } else {
    document.getElementById('sellCageAmount').innerHTML = 'You do not own any Cages!';
    }
    }   
}

function sellhouse(){
    if(house>=1){ 
    var houseCost = Math.floor(500 * Math.pow(1.1,house));
    house = house - 1;
    click = click + houseCost*0.6;
    document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks."; 
    var houseCost = Math.floor(500 * Math.pow(1.1,house));
    document.getElementById('houseCost').innerHTML = prettify(houseCost);
    document.getElementById('house').innerHTML = house + 'x';
    if(house>=1){
        document.getElementById('sellhouseAmount').innerHTML = 'You will earn $' + prettify(houseCost*0.6) + ' clicks.';
    } else {
    document.getElementById('sellhouseAmount').innerHTML = 'You do not own any houses!';
    }
    }   
}


function secretMessageButton1(input){
    click = click + input;
    document.getElementById('clicks').innerHTML = 'you are at ' + prettify(click) +' clicks.'
}

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(click >= cursorCost){
        document.getElementById('cursor_img').style.display = 'block';                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	click = click - cursorCost;                          //removes the click spent
        document.getElementById('cursors').innerHTML = prettify(cursors) + 'x';  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
        document.getElementById('sellCursorAmount').innerHTML = 'You will earn $' + prettify(nextCost*0.6) + ' clicks.';
    };
}    
function buyWheel(){
        var WheelCost = Math.floor(100 * Math.pow(1.1,wheel));     //works out the cost of this cursor
        if(click >= WheelCost){
            document.getElementById('wheel_img').style.display = 'block';                                   //checks that the player can afford the cursor
            wheel = wheel + 1;                                   //increases number of cursors
            click = click - WheelCost;                          //removes the click spent
            document.getElementById('wheel').innerHTML = prettify(wheel) + 'x';  //updates the number of cursors for the user
            document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
            var WheelnextCost = Math.floor(100 * Math.pow(1.1,wheel));       //works out the cost of the next cursor
            document.getElementById('wheelCost').innerHTML = prettify(WheelnextCost);  //updates the cursor cost for the user
            document.getElementById('sellWheelAmount').innerHTML = 'You will earn $' + prettify(WheelnextCost*0.6) + ' clicks.';
        };
};

function buyCage(){
    var CageCost = Math.floor(250 * Math.pow(1.1,Cage));     //works out the cost of this cursor
    if(click >= CageCost){
        document.getElementById('Cage_img').style.display = 'block';                                   //checks that the player can afford the cursor
        Cage = Cage + 1;                                   //increases number of cursors
        click = click - CageCost;                          //removes the click spent
        document.getElementById('Cage').innerHTML = prettify(Cage) + 'x';  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var CagenextCost = Math.floor(250 * Math.pow(1.1,Cage));       //works out the cost of the next cursor
        document.getElementById('CageCost').innerHTML = prettify(CagenextCost);  //updates the cursor cost for the user
        document.getElementById('sellCageAmount').innerHTML = 'You will earn $' + prettify(CagenextCost*0.6) + ' clicks.';
    };
};
//hi

var clickpowerUPGlvl = 1;
function buyclickingupgrade(){
    var clickUpgCost = Math.floor(15 * Math.pow(1.3,clickpowerUPGlvl));     //works out the cost of this cursor
    if(click >= clickUpgCost){                                   //checks that the player can afford the cursor
        clickpower = clickpower + 1;                                   //increases number of cursors
        clickpowerUPGlvl = clickpowerUPGlvl + 1;
        click = click - clickUpgCost;                          //removes the click spent
        document.getElementById('clickpowerUPG').innerHTML = prettify(clickpowerUPGlvl);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var clickpowerUPGnextCost = Math.floor(15 * Math.pow(1.3, clickpowerUPGlvl));       //works out the cost of the next cursor
        document.getElementById('clickpowerUPGcost').innerHTML = prettify(clickpowerUPGnextCost);  //updates the cursor cost for the user
    };
};

var cursorMult = 1;
function buycursorMult(){
    var cursorMultCost = Math.floor(100 * Math.pow(1.3,cursorMult));     //works out the cost of this cursor
    if(click >= cursorMultCost){                                   //checks that the player can afford the cursor
        cursorMult = cursorMult + 1;                                   //increases number of cursors
        click = click - cursorMultCost;                          //removes the click spent
        document.getElementById('cursorMultUPG').innerHTML = prettify(cursorMult);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var cursorMultnextCost = Math.floor(100 * Math.pow(1.3, cursorMult));       //works out the cost of the next cursor
        document.getElementById('cursorMultcost').innerHTML = prettify(cursorMultnextCost);  //updates the cursor cost for the user
    };
};

var wheelMult = 1;
function buywheelMult(){
    var wheelMultCost = Math.floor(500 * Math.pow(1.3,wheelMult));     //works out the cost of this cursor
    if(click >= wheelMultCost){                                   //checks that the player can afford the cursor
        wheelMult = wheelMult + 1;                                   //increases number of cursors
        click = click - wheelMultCost;                          //removes the click spent
        document.getElementById('wheelMultUPG').innerHTML = prettify(wheelMult);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var wheelMultnextCost = Math.floor(500 * Math.pow(1.3, wheelMult));       //works out the cost of the next cursor
        document.getElementById('wheelMultcost').innerHTML = prettify(wheelMultnextCost);  //updates the cursor cost for the user
    };
};

var cageMult = 1;
function buycageMult(){
    var cageMultCost = Math.floor(750 * Math.pow(1.3,cageMult));     //works out the cost of this cursor
    if(click >= cageMultCost){                                   //checks that the player can afford the cursor
        cageMult = cageMult + 1;                                   //increases number of cursors
        click = click - cageMultCost;                          //removes the click spent
        document.getElementById('cageMultUPG').innerHTML = prettify(cageMult);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var cageMultnextCost = Math.floor(750 * Math.pow(1.3, cageMult));       //works out the cost of the next cursor
        document.getElementById('cageMultcost').innerHTML = prettify(cageMultnextCost);  //updates the cursor cost for the user
    };
};

var houseMult = 1;
function buyhouseMult(){
    var houseMultCost = Math.floor(1000 * Math.pow(1.3,houseMult));     //works out the cost of this cursor
    if(click >= houseMultCost){                                   //checks that the player can afford the cursor
        houseMult = houseMult + 1;                                   //increases number of cursors
        click = click - houseMultCost;                          //removes the click spent
        document.getElementById('houseMultUPG').innerHTML = prettify(houseMult);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var houseMultnextCost = Math.floor(1500 * Math.pow(1.3, houseMult));       //works out the cost of the next cursor
        document.getElementById('houseMultcost').innerHTML = prettify(houseMultnextCost);  //updates the cursor cost for the user
    };
};

function buyhouse(){
        var houseCost = Math.floor(500 * Math.pow(1.1,house));     //works out the cost of this cursor
        if(click >= houseCost){
            document.getElementById('house_img').style.display = 'block';                                   //checks that the player can afford the cursor
            house = house + 1;                                   //increases number of cursors
            click = click - houseCost;                          //removes the click spent
            document.getElementById('house').innerHTML = prettify(house) + 'x';  //updates the number of cursors for the user
            document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
            var housenextCost = Math.floor(500 * Math.pow(1.1,house));       //works out the cost of the next cursor
            document.getElementById('houseCost').innerHTML = prettify(housenextCost);  //updates the cursor cost for the user
            document.getElementById('sellhouseAmount').innerHTML = 'You will earn $' + prettify(housenextCost*0.6) + ' clicks.';
        };
};

function buyGod(){
  var GodCost = Math.floor(100000 * Math.pow(1.1,God));     //works out the cost of this cursor
  if(click >= GodCost){
      document.getElementById('God_img').style.display = 'block';                                   //checks that the player can afford the cursor
      God = God + 1;                                   //increases number of cursors
      click = click - GodCost;                          //removes the click spent
      document.getElementById('God').innerHTML = prettify(God) + 'x';  //updates the number of cursors for the user
      document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
      var GodnextCost = Math.floor(100000 * Math.pow(1.1,God));       //works out the cost of the next cursor
      document.getElementById('GodCost').innerHTML = prettify(GodnextCost);  //updates the cursor cost for the user
      document.getElementById('sellGodAmount').innerHTML = 'You will earn $' + prettify(GodnextCost*0.6) + ' clicks.';
  };
};

var GodMult = 1;
function buyGodMult(){
  var GodMultCost = Math.floor(150000 * Math.pow(1.3,GodMult));     //works out the cost of this cursor
  if(click >= GodMultCost){                                   //checks that the player can afford the cursor
      GodMult = GodMult + 1;                                   //increases number of cursors
      click = click - GodMultCost;                          //removes the click spent
      document.getElementById('GodMultUPG').innerHTML = prettify(GodMult);  //updates the number of cursors for the user
      document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
      var GodMultnextCost = Math.floor(150000 * Math.pow(1.3, GodMult));       //works out the cost of the next cursor
      document.getElementById('GodMultcost').innerHTML = prettify(GodMultnextCost);  //updates the cursor cost for the user
  };
};


function sellGod(){
  if(God>=1){ 
  var GodCost = Math.floor(100000 * Math.pow(1.1,God));
  God = God - 1;
  click = click + GodCost*0.6;
  document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks."; 
  var GodCost = Math.floor(100000 * Math.pow(1.1,God));
  document.getElementById('GodCost').innerHTML = prettify(GodCost);
  document.getElementById('God').innerHTML = God + 'x';
  if(God>=1){
      document.getElementById('sellGodAmount').innerHTML = 'You will earn $' + prettify(GodCost*0.6) + ' clicks.';
  } else {
  document.getElementById('sellGodAmount').innerHTML = 'You do not own any Gods!';
  }
  }   
}


window.setInterval(function(){

  if(God >= 1){
      var GodPower = God*GodMult;
      secretMessageButton1(GodPower);
  };

  }, 1)

/* Following is part of template, replace "NEW_ITEM" with item name and "STARTING_COST" with starting cost of item */
/*
function buyNEW_ITEM(){
        var NEW_ITEMCost = Math.floor(STARTING_COST * Math.pow(1.1,NEW_ITEM));     //works out the cost of this cursor
        if(click >= NEW_ITEMCost){
            document.getElementById('NEW_ITEM_img').style.display = 'block';                                   //checks that the player can afford the cursor
            NEW_ITEM = NEW_ITEM + 1;                                   //increases number of cursors
            click = click - NEW_ITEMCost;                          //removes the click spent
            document.getElementById('NEW_ITEM').innerHTML = prettify(NEW_ITEM) + 'x';  //updates the number of cursors for the user
            document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
            var NEW_ITEMnextCost = Math.floor(STARTING_COST * Math.pow(1.1,NEW_ITEM));       //works out the cost of the next cursor
            document.getElementById('NEW_ITEMCost').innerHTML = prettify(NEW_ITEMnextCost);  //updates the cursor cost for the user
        };
};
*/


// Update achievements list in UI
function updateAchievementsUI() {
  achievementList.innerHTML = '';
  achievements.forEach(achievement => {
      let li = document.createElement("li");
      li.innerText = achievement;
      achievementList.appendChild(li);
  });
}




window.setInterval(function(){
if(cursors >= 1){
    
        var cursorPower = cursors*cursorMult*0.1;
	    secretMessageButton1(cursorPower);
    
};
	//document.getElementById('hampter_clicker').style.animation="shake 0.1s"
}, 100);

window.setInterval(function(){

    if(wheel >= 1){
        var wheelPower = wheel*wheelMult*0.1
        secretMessageButton1(wheelPower);
    };

}, 20)

window.setInterval(function(){

    if(Cage >= 1){
        var cagePower = Cage*cageMult*0.1;
        secretMessageButton1(cagePower);
    };

    }, 10)

    window.setInterval(function(){

        if(house >= 1){
            var housePower = house*houseMult;
            secretMessageButton1(housePower);
        };

        }, 50)

/* following is part of template, replace "NEW_ITEM" with item name, replace "TIME_PER_CLICK" with the delay before you want to get 1 click (in milliseconds). */
/*
window.setInterval(function(){
    secretMessageButton1(NEW_ITEM);
    }, TIME_PER_CLICK)
*/ 
function save2TXT(){
   
  var obj = `${click},${cursors},${wheel},${Cage},${clickpower},CHECK!?,${clickpowerUPGlvl},${cursorMult},${wheelMult},CHECKSTRING,${cageMult},${house},${houseMult},${God},${GodMult},${achievements.join('|')}`;
  var base64EncodeString = btoa(obj);
  document.getElementById("txtSaveNotification").innerHTML = "The following is your savegame code.";
  document.getElementById("txtSave").innerHTML = base64EncodeString;
  addNotificationLoad("Savegame code generated. Keep it safe!");
}
function save(){
    var save = {
         click:click,
         cursors:cursors,
         wheel:wheel,
         Cage:Cage,
         clickpower:clickpower,
         clickpowerUPGlvl:clickpowerUPGlvl, 
         cursorMult:cursorMult,
         wheelMult:wheelMult,
         cageMult:cageMult,
         house:house,
         houseMult:houseMult,
         God:God,
         GodMult:GodMult,
         achievements: achievements// ADD COMMA WHEN ADD NEW ITEM BELOW
         /*
         NEW_ITEM:NEW_ITEM 
         */
    }
       localStorage.setItem("save",JSON.stringify(save));
       addNotificationLoad("Game sucessfully saved.");
  };
  function load(){
  //clicks
    var savegame = JSON.parse(localStorage.getItem("save"));
       if (typeof savegame.click !== "undefined") click = savegame.click;
  document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks.";
  //cursors
  if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
  document.getElementById("cursors").innerHTML = prettify(cursors) + 'x';
  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);
        if (cursors >= 1) {document.getElementById('sellCursorAmount').innerHTML = 'You will earn $' + prettify(nextCost*0.6) + ' clicks.';} else {document.getElementById('sellCursorAmount').innerHTML = 'You do not own any cursors!';}

//wheels
if (typeof savegame.wheel !== "undefined") wheel = savegame.wheel;
  document.getElementById("wheel").innerHTML = wheel + "x";
  var WheelnextCost = Math.floor(100 * Math.pow(1.1,wheel));       //works out the cost of the next cursor
  document.getElementById('wheelCost').innerHTML = prettify(WheelnextCost);  //updates the cursor cost for the user
  if (wheel >= 1) {document.getElementById('sellWheelAmount').innerHTML = 'You will earn $' + prettify(WheelnextCost*0.6) + ' clicks.';} else {document.getElementById('sellWheelAmount').innerHTML = 'You do not own any wheels!';}

//cages  
  if (typeof savegame.Cage !== "undefined") Cage = savegame.Cage;
  document.getElementById("Cage").innerHTML = Cage + "x";
  var CagenextCost = Math.floor(250 * Math.pow(1.1,Cage));       //works out the cost of the next cursor
  document.getElementById('CageCost').innerHTML = prettify(CagenextCost);  //updates the cursor cost for the user
  if (Cage >= 1) {document.getElementById('sellCageAmount').innerHTML = 'You will earn $' + prettify(CagenextCost*0.6) + ' clicks.';} else {document.getElementById('sellCageAmount').innerHTML = 'You do not own any cages!';}
 
//clickpower 
  if (typeof savegame.clickpower !== "undefined") clickpower = savegame.clickpower;

//click upg level  
  if (typeof savegame.clickpowerUPGlvl !== "undefined") clickpowerUPGlvl = savegame.clickpowerUPGlvl;
  document.getElementById("clickpowerUPG").innerHTML = clickpowerUPGlvl;
  var clickpowerUPGnextCost = Math.floor(15 * Math.pow(1.3,clickpowerUPGlvl));       //works out the cost of the next cursor
  document.getElementById('clickpowerUPGcost').innerHTML = prettify(clickpowerUPGnextCost);

//cursor upg lvl  
  if (typeof savegame.cursorMult !== "undefined") cursorMult = savegame.cursorMult;
  document.getElementById("cursorMultUPG").innerHTML = cursorMult;
  var cursorMultnextCost = Math.floor(100 * Math.pow(1.3,cursorMult));       //works out the cost of the next cursor
  document.getElementById('cursorMultcost').innerHTML = prettify(cursorMultnextCost);  //updates the cursor cost for the user

//wheel upg lvl  
  if (typeof savegame.wheelMult !== "undefined") wheelMult = savegame.wheelMult;
  document.getElementById("wheelMultUPG").innerHTML = wheelMult;
  var wheelMultnextCost = Math.floor(500 * Math.pow(1.3,wheelMult));       //works out the cost of the next cursor
  document.getElementById('wheelMultcost').innerHTML = prettify(wheelMultnextCost);  //updates the cursor cost for the user

//cage upg lvl
  if (typeof savegame.cageMult !== "undefined") cageMult = savegame.cageMult;
  document.getElementById("cageMultUPG").innerHTML = cageMult;
  var cageMultnextCost = Math.floor(750 * Math.pow(1.3,cageMult));       //works out the cost of the next cursor
  document.getElementById('cageMultcost').innerHTML = prettify(cageMultnextCost);  //updates the cursor cost for the user

//house
  if (typeof savegame.house !== "undefined") house = savegame.house;
  document.getElementById("house").innerHTML = house + "x";
  var housenextCost = Math.floor(500 * Math.pow(1.1,house));
  document.getElementById('houseCost').innerHTML = prettify(housenextCost);
  if (house >= 1) {document.getElementById('sellhouseAmount').innerHTML = 'You will earn $' + prettify(housenextCost*0.6) + ' clicks.';} else {document.getElementById('sellhouseAmount').innerHTML = 'You do not own any houses!';}

//house upg lvl
  if (typeof savegame.houseMult !== "undefined") houseMult = savegame.houseMult;
  document.getElementById("houseMultUPG").innerHTML = houseMult;
  var houseMultnextCost = Math.floor(1000 * Math.pow(1.3,houseMult));       //works out the cost of the next cursor
  document.getElementById('houseMultcost').innerHTML = prettify(houseMultnextCost);


  
                            
  if (typeof savegame.God !==  "undefined") God = savegame.God;
  document.getElementById("God").innerHTML = God + "x";
  var GodnextCost = Math.floor(100000 * Math.pow(1.1,God));       //works out the cost of the next cursor
  document.getElementById('GodCost').innerHTML = prettify(GodnextCost);  //updates the cursor cost for the user
  if (God >= 1) {document.getElementById('sellGodAmount').innerHTML = 'You will earn $' + prettify(GodnextCost*0.6) + ' clicks.';} else {document.getElementById('sellGodAmount').innerHTML = 'You do not own any Gods!';}

  if (typeof savegame.GodMult !==  "undefined") GodMult = savegame.GodMult;
  document.getElementById("GodMultUPG").innerHTML = GodMult;
  var GodMultnextCost = Math.floor(150000 * Math.pow(1.3,GodMult));       //works out the cost of the next cursor
  document.getElementById('GodMultcost').innerHTML = prettify(GodMultnextCost);
   
  if (typeof savegame.achievements !== "undefined") achievements = savegame.achievements;
    updateAchievementsUI();  // Update the UI with loaded achievements

  /* PART OF TEMPLATE, REPLACE "NEW_ITEM" WITH NEW ITEM NAME AND "STARTING_COST" WITH STARTING COST*/
  /*
    if (typeof savegame.NEW_ITEM !== "undefined") NEW_ITEM = savegame.NEW_ITEM;
  document.getElementById("NEW_ITEM").innerHTML = NEW_ITEM;
  if (NEW_ITEM >= 1) document.getElementById('NEW_ITEM_img').style.display = 'block';
  var NEW_ITEMnextCost = Math.floor(STARTING_COST * Math.pow(1.1,NEW_ITEM));
  document.getElementById('NEW_ITEMCost').innerHTML = prettify(NEW_ITEMnextCost);
  */
  addNotificationLoad("Savegame loaded! Happy clicking!");
};
function addNotificationLoad(NotiText) {
    // Generate a unique ID for each notification
    const uniqueId = `notification_${Date.now()}`;
    
    // Create the notification element
    const NotiElement = document.createElement("div");
    NotiElement.id = uniqueId; // Set the unique ID
    NotiElement.style.display = "block";
    NotiElement.style.position = "absolute";
    NotiElement.style.width = "290px";
    NotiElement.style.height = "90px";
    NotiElement.style.padding = "10px";
    NotiElement.style.borderRadius = "5px";
    NotiElement.style.border = "1px solid black";
    NotiElement.style.backgroundColor = "black";
    NotiElement.style.right = "10px";
    NotiElement.style.bottom = "10px";
    NotiElement.style.color = "white";
    NotiElement.innerHTML = `<div style="text-align: right; cursor: pointer;" onclick="closeNotification('${uniqueId}')">X</div> <span>${NotiText}</span>`;

    document.body.appendChild(NotiElement);

    // Keep the notification at the bottom corner of the window even when scrolling
    let btmPos = -window.scrollY + 10;
    NotiElement.style.bottom = btmPos + "px";

    // Adjust position on scroll
    document.addEventListener("scroll", function () {
        let btmPos = -window.scrollY + 10;
        NotiElement.style.bottom = btmPos + "px";
    });
}

// Function to close the notification with a specific ID
function closeNotification(id) {
    const notification = document.getElementById(id);
    if (notification) {
        document.body.removeChild(notification);
    }
}


  function loadFromtxt() {

    const input = document.getElementById("TXTload");
const inputValue = input.value;
var txtDecodeString = atob(inputValue);

let TXTsavegame = txtDecodeString.split(",");

if (TXTsavegame[5] == 'CHECK!?' && TXTsavegame[9] == 'CHECKSTRING'){

if (typeof TXTsavegame[0] !==  "0") click = parseInt(TXTsavegame[0]);
  document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks.";

  if (typeof TXTsavegame[1] !==  "0") cursors = parseInt(TXTsavegame[1]);
  document.getElementById("cursors").innerHTML = prettify(cursors) + 'x';
  //if (typeof TXTsavegame.cursorCost !==  "0") cursorCost = TXTsavegame.cursorCost;
  //document.getElementById("cursorCost").innerHTML = cursorCost;

  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
        if (cursors >= 1) {document.getElementById('sellCursorAmount').innerHTML = 'You will earn $' + prettify(nextCost*0.6) + ' clicks.';} else {document.getElementById('sellCursorAmount').innerHTML = 'You do not own any cursors!';}

if (typeof TXTsavegame[2] !==  "0") wheel = parseInt(TXTsavegame[2]);
  document.getElementById("wheel").innerHTML = wheel;
  var WheelnextCost = Math.floor(100 * Math.pow(1.1,wheel));       //works out the cost of the next cursor
  document.getElementById('wheelCost').innerHTML = prettify(WheelnextCost);  //updates the cursor cost for the user
  if (wheel >= 1) {document.getElementById('sellWheelAmount').innerHTML = 'You will earn $' + prettify(WheelnextCost*0.6) + ' clicks.';} else {document.getElementById('sellWheelAmount').innerHTML = 'You do not own any wheels!';}
 
  if (typeof TXTsavegame[3] !==  "0") Cage = parseInt(TXTsavegame[3]);
  document.getElementById("Cage").innerHTML = Cage;
  var CagenextCost = Math.floor(250 * Math.pow(1.1,Cage));       //works out the cost of the next cursor
  document.getElementById('CageCost').innerHTML = prettify(CagenextCost);  //updates the cursor cost for the user
  if (Cage >= 1) {document.getElementById('sellCageAmount').innerHTML = 'You will earn $' + prettify(CagenextCost*0.6) + ' clicks.';} else {document.getElementById('sellCageAmount').innerHTML = 'You do not own any cages!';}
 
  if (typeof TXTsavegame[4] !==  "0") clickpower = parseInt(TXTsavegame[4]);
  
  if (typeof TXTsavegame[6] !==  "0") clickpowerUPGlvl = parseInt(TXTsavegame[6]);
  document.getElementById("clickpowerUPG").innerHTML = clickpowerUPGlvl;
  var clickpowerUPGnextCost = Math.floor(15 * Math.pow(1.3,clickpowerUPGlvl));       //works out the cost of the next cursor
  document.getElementById('clickpowerUPGcost').innerHTML = prettify(clickpowerUPGnextCost);

  if (typeof TXTsavegame[7] !==  "0") cursorMult = parseInt(TXTsavegame[7]);
  document.getElementById("cursorMultUPG").innerHTML = cursorMult;
  var cursorMultnextCost = Math.floor(100 * Math.pow(1.3,cursorMult));       //works out the cost of the next cursor
  document.getElementById('cursorMultcost').innerHTML = prettify(cursorMultnextCost);  //updates the cursor cost for the user
  
  if (typeof TXTsavegame[8] !==  "0") wheelMult = parseInt(TXTsavegame[8]);
  document.getElementById("wheelMultUPG").innerHTML = wheelMult;
  var wheelMultnextCost = Math.floor(500 * Math.pow(1.3,wheelMult));       //works out the cost of the next cursor
  document.getElementById('wheelMultcost').innerHTML = prettify(wheelMultnextCost);  //updates the cursor cost for the user

  if (typeof TXTsavegame[10] !==  "0") cageMult = parseInt(TXTsavegame[10]);
  document.getElementById("cageMultUPG").innerHTML = cageMult;
  var cageMultnextCost = Math.floor(750 * Math.pow(1.3,cageMult));       //works out the cost of the next cursor
  document.getElementById('cageMultcost').innerHTML = prettify(cageMultnextCost);  //updates the cursor cost for the user

  if (typeof TXTsavegame[11] !==  "0") house = parseInt(TXTsavegame[11]);
  document.getElementById("house").innerHTML = house;
  var housenextCost = Math.floor(500 * Math.pow(1.1,house));       //works out the cost of the next cursor
  document.getElementById('houseCost').innerHTML = prettify(housenextCost);  //updates the cursor cost for the user
  if (house >= 1) {document.getElementById('sellhouseAmount').innerHTML = 'You will earn $' + prettify(housenextCost*0.6) + ' clicks.';} else {document.getElementById('sellhouseAmount').innerHTML = 'You do not own any houses!';}

  if (typeof TXTsavegame[12] !==  "0") houseMult = parseInt(TXTsavegame[12]);
  document.getElementById("houseMultUPG").innerHTML = houseMult;
  var houseMultnextCost = Math.floor(1000 * Math.pow(1.3,houseMult));       //works out the cost of the next cursor
  document.getElementById('houseMultcost').innerHTML = prettify(houseMultnextCost);

  if (typeof TXTsavegame[13] !==  "0") God = parseInt(TXTsavegame[13]);
  document.getElementById("God").innerHTML = God;
  var GodnextCost = Math.floor(100000 * Math.pow(1.1,God));       //works out the cost of the next cursor
  document.getElementById('GodCost').innerHTML = prettify(GodnextCost);  //updates the cursor cost for the user
  if (God >= 1) {document.getElementById('sellGodAmount').innerHTML = 'You will earn $' + prettify(GodnextCost*0.6) + ' clicks.';} else {document.getElementById('sellGodAmount').innerHTML = 'You do not own any Gods!';}

  if (typeof TXTsavegame[14] !==  "0") GodMult = parseInt(TXTsavegame[14]);
  document.getElementById("GodMultUPG").innerHTML = GodMult;
  var GodMultnextCost = Math.floor(150000 * Math.pow(1.3,GodMult));       //works out the cost of the next cursor
  document.getElementById('GodMultcost').innerHTML = prettify(GodMultnextCost);

  achievements = TXTsavegame[15] ? TXTsavegame[15].split('|') : [];
        updateAchievementsUI();  // Update the UI with loaded achievements


  addNotificationLoad("Savegame loaded! Happy clicking!");
}else{
    addNotificationLoad('Invalid save. Please do not tamper with the save codes.');
}
}


function checkAchievements() {
  if (click >= 100 && !achievements.includes("100 Clicks")) {
      addAchievement("100 Clicks");
  }
  if (click >= 1000 && !achievements.includes("1,000 Clicks")) {
      addAchievement("1,000 Clicks");
  }
  if (cursors >= 10 && !achievements.includes("10 Clickers")) {
      addAchievement("10 Clickers");
  }
  if (wheel >= 1 && !achievements.includes("First Wheel Purchased")) {
      addAchievement("First Wheel Purchased");
  }
  if (Cage >= 1 && !achievements.includes("First Cage Purchased")) {
    addAchievement("First Cage Purchased");
}
if (wheel >= 1 && !achievements.includes("First Wheel Purchased")) {
  addAchievement("First Wheel Purchased");
}
  if (wheel >= 5 && !achievements.includes("5 Wheels")) {
    addAchievement("5 Wheels");
}
  if (God >= 1 && !achievements.includes("First God Purchased")) {
      addAchievement("First God Purchased");
  }
  if (cursors + wheel + Cage + house + God >= 100 && !achievements.includes("100 Helpers Owned")) {
    addAchievement("100 Helpers Owned");
}
}

// Add an achievement and show it in the UI
function addAchievement(name) {
  if (!achievements.includes(name)) {
      achievements.push(name);

      let li = document.createElement("li");
      li.innerText = name;
      achievementList.appendChild(li);

      addNotificationLoad("Achievement unlocked: " + name + "!");
  }
}







window.setInterval(checkAchievements, 1000);


  function onClickCode(cb) {
    var input = '';
    var key = '13161316';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) { // anthony ignore the fact that it says depreciated, it still works
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onClickCode(function () {secretMessageButton1(1)})

  function onJudeSecret(cb) {
    var input = '';
    var key = '7182737765676913'; // ma60--fel1\f#c but must be inserted backward with a slash at the begining
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) { // anthony ignore the fact that it says depreciated, it still works
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onClickCode(function () {secretMessageButton1(1)})

  function onOldSecretCode(cb) {
    var input1 = '';
    var key1 = '7765544849'; // ma60--fel1\f#c but must be inserted backward with a slash at the begining
    document.addEventListener('keydown', function (e) {
      input1 += ("" + e.keyCode);
      if (input1 === key1) { // anthony ignore the fact that it says depreciated, it still works
        return cb();
      }
      if (!key1.indexOf(input1)) return;
      input1 = ("" + e.keyCode);
    });
  }
  
  onOldSecretCode(function () {alert("The code got leaked, so it got changed. Sry to those people who are now suffering from the concequences, but ur not getting the code back.");})

  onJudeSecret(function () {document.getElementById('sideNAV').style.display = 'block';})


function cheatAddCursor(amount) {

        cursors = cursors + amount;
        document.getElementById('cursors').innerHTML = prettify(cursors) + 'x';  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
    
}
function cheatAddWheel(amount) {

        wheel = wheel + amount;
        document.getElementById('wheel').innerHTML = prettify(wheel) + 'x';  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var WheelnextCost = Math.floor(100 * Math.pow(1.1,wheel));       //works out the cost of the next cursor
        document.getElementById('wheelCost').innerHTML = prettify(WheelnextCost);  //updates the cursor cost for the user
}
function cheatAddCage(amount) {    
        Cage = Cage + amount;
        document.getElementById('Cage').innerHTML = prettify(Cage) + 'x';  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var CagenextCost = Math.floor(250 * Math.pow(1.1,Cage));       //works out the cost of the next cursor
        document.getElementById('CageCost').innerHTML = prettify(CagenextCost);  //updates the cursor cost for the user
}
function cheatAddHouse(amount) {    
    house = house + amount;
    document.getElementById('house').innerHTML = prettify(house) + 'x';  //updates the number of cursors for the user
    document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
    var housenextCost = Math.floor(500 * Math.pow(1.1,house));       //works out the cost of the next cursor
    document.getElementById('houseCost').innerHTML = prettify(housenextCost);  //updates the cursor cost for the user
}
function cheatAddClickUPG(amount) {    
    clickpower = clickpower + amount;
    clickpowerUPGlvl = clickpowerUPGlvl + amount;
    document.getElementById('clickpowerUPG').innerHTML = prettify(clickpowerUPGlvl);  //updates the number of cursors for the user
    document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
    var clickpowerUPGnextCost = Math.floor(15 * Math.pow(1.3, clickpowerUPGlvl));       //works out the cost of the next cursor
    document.getElementById('clickpowerUPGcost').innerHTML = prettify(clickpowerUPGnextCost);  //updates the cursor cost for the user
}

function cheatAddClickerUPG(amount) {    
    cursorMult = cursorMult + amount;
    document.getElementById('cursorMultUPG').innerHTML = prettify(cursorMult);  //updates the number of cursors for the user
    document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
    var cursorMultnextCost = Math.floor(100 * Math.pow(1.3,cursorMult));       //works out the cost of the next cursor
    document.getElementById('cursorMultcost').innerHTML = prettify(cursorMultnextCost);  //updates the cursor cost for the user
}

window.setInterval(function(){
    if(isNaN(click) == true) {
    alert("Your game has been corrupted. Reloading game... ");
    location.reload();
}
}, 10000);
