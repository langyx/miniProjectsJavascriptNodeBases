/**
 * Define app consts
 * @type {{}}
 */
const app = {
    dev : true,
};

/**
 * Define the char of the ball
 * @type {string}
 */
const ball = '*';

/**
 * Define the direction in which the ball go
 * @type {string}
 */
const RIGHT ='R';
const LEFT ='L';
let currentBallDirection = RIGHT;

/**
 * Define the char of the empty cell on table
 * @type {string}
 */
const emptyTableChar = ' ';

/**
 * Define the size of the ping pong table
 * @type {number}
 */
const tableSize = 10;

/**
 * Define the ping pong table size of 10 (array)
 * Init it with space by default
 * @type {[]}
 */
let pongTable = new Array(tableSize).fill(' ');
/**
 * Set the ball à the first index of ping pong table
 */
pongTable[0] = ball;

/**
 * Fonction that draw the border up and down of the table
 */
function drawTableBorder()
{
    process.stdout.write('|');
    for (let i = 0; i < tableSize; i += 1)
    {
        process.stdout.write("-");
    }
    process.stdout.write('|\n');
}

/**
 * Next step the ball on table
 */
function swapBall()
{
    /**
     * Get the ball index on table
     * @type {number}
     */
    const indexOfBall = pongTable.indexOf(ball);

    if (app.dev) { console.log(`Dir=${currentBallDirection}||Index=${indexOfBall}`)}

    const pushLeft = () => {
        pongTable[indexOfBall] = emptyTableChar;
        pongTable[indexOfBall - 1] = ball;
        currentBallDirection = LEFT;
        if (app.dev) {console.log("pushLeft")}
    };

    const pushRight = () => {
        pongTable[indexOfBall] = emptyTableChar;
        pongTable[indexOfBall + 1] = ball;
        currentBallDirection = RIGHT;
        if (app.dev) {console.log("pushRight")}
    };

    /**
     * If the ball is the start push it to right
     */
    if (currentBallDirection === RIGHT)
    {
        if (indexOfBall === tableSize - 1)
        {
            pushLeft();
        }else{
            pushRight();
        }
    }else{
        if (indexOfBall === 0)
        {
            pushRight()
        }else{
            pushLeft();
        }
    }

    if (app.dev) { console.log(`Dir=${currentBallDirection}||Index=${pongTable.indexOf(ball)}`)}
}

/**
 * Loop infinitely every 500 Milliseconds (0.5 seconds)
 */
setInterval(() => {
    /**
     * Clear the terminal before each drawing
     */
    console.clear();

    /**
     * Draw the pp table
     */
    drawTableBorder();

    /**
     * Draw the table
     */
    process.stdout.write('|');
    pongTable.forEach((elem) => {
        process.stdout.write(elem);
    });
    process.stdout.write('|\n');
    drawTableBorder();

    swapBall();
}, 500);
