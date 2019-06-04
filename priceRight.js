/**
 * readLine module to read over the shell
 */
const readline = require('readline');

/**
 * readlineInterface allow us to read on user input
 * @type {Interface}
 */
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Define App object that contains all consts
 * @type {{msg: {tooSmall: string, tooBig: string, win: string, badNumber: string}, game: {maxRange: number, minRange: number}, dev: boolean}}
 */
const app = {
    dev : false,
    msg : {
        badNumber : "This is not a positive number my friend :(",
        tooSmall : "The random number is bigger",
        tooBig : "The random number is smaller",
        win : "You win ! Big Boss...",
    },
    game : {
        minRange : 0,
        maxRange : 100,
    }
};

/**
 * Define random number between minRange and maxRange
 * @type {number}
 */
const randomNumber = Math.floor(Math.random() * (app.game.maxRange + app.game.minRange));
if (app.dev) console.log(`Range : ${app.game.minRange} | ${app.game.maxRange} // RandNumber : ${randomNumber}`);

/**
 * userWin define if the user find random number
 * @type {boolean}
 */
let userWin = false;


/**
 * Define gameCore function that get user input async
 * and test value
 */
function gameCore() {
    /**
     * Ask user to give us a number
     */
    readlineInterface.question('Give me number > $ ', (userNumber) => {

        /**
         * Check if user input is not number and go out of question
         */
        if (isNaN(userNumber) || userNumber < 0) {
            console.log(app.msg.badNumber);
        }

        if(app.dev) console.log(`UserInput is : ${userNumber}`);

        /**
         * Check if user input number is smaller, bigger or is the random number
         */
        if (userNumber < randomNumber)
        {
            console.log(app.msg.tooSmall);
        }else if (userNumber > randomNumber) {
            console.log(app.msg.tooBig);
        }else{
            userWin = true;
        }


        /**
         * If the user discover the number
         * just go out the function and close the read interface
         */
        if (userWin)
        {
            readlineInterface.close();
            console.log(app.msg.win);
            return;
        }
        /**
         * If the user still not win just go again
         */
        gameCore();

    });
}

/**
 * Call the game
 */
gameCore();
