var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100
var playerAttack = 10

// you can also log multiple valus at once like this

console.log(playerName, playerAttack, playerHealth);

var enemyName = " Greg ";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // subtract the values 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable 
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message in the console so we know that it worked
    console.log(playerName + " Bitch Slapped " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");
    
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHeath' variable
    playerHealth = playerHealth - enemyAttack
    
    // Log a resulting message to the console so that we now that it worked
    console.log(enemyName + " Nut Punched " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // check player's health //
    if (playerHealth <= 0) {
        window.alert(playerName + " had their soul snatched!");
    }
    else {
        windows.alert(playerName + " has " + playerHealth + " health remaining ");
    }

    // check the enemy's health //
    if (enemyHealth <= 0) {
        window.alert(enemyName + " had their soul snatched!");
    }
    else {
        window.alert(enemyName + " has" + enemyHealth + " health remaining");
    }
};



    fight();