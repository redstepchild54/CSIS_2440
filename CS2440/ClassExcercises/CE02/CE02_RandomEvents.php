<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Random Page</title>
    </head>
    <body>
        <?php
        $score = 0;
        print("<table><tr><th>Player</th><th>Computer</th><th>Rounds</th></tr>\n");
        
        //loop that runs for a number a rounds and compares the scores of the two players
        for ($round = 1; $round <= 10; $round++) {
            $playerScore = rand(1,100);
            $computerScore = rand(1,100);
            print("<tr><td>$playerScore</td><td>$computerScore</td>");
            
            if ($playerScore < $computerScore){
                display("lost");
                $score--;
            }
            else if ($playerScore > $computerScore) {
                display("won");
                $score++;
            } else {
                display("tied");
            }
            
        }
        print("<tr><td colspan=2>$score</td><td>Player Score</td></tr></table>\n");

        //Year of the---

        $year = date("Y");
        print("<p>$year is the year of the: ");
        //Here you will write out a switch that will print out the year using the modulo(% 12)
        //Monkey, roster, dog, boar, rat, ox, tiger, rabbit, dragon, snake, horse, and lamb is the order, do not forget a default case
        
        switch($year % 12) {
            case 0:
                echo 'Monkey';
                break;
            case 1:
                echo 'Rooster';
                break;
            case 2:
                echo 'Dog';
                break;
            case 3:
                echo 'Boar';
                break;
            case 4:
                echo 'Rat';
                break;
            case 5:
                echo 'Ox';
                break;
            case 6:
                echo 'Tiger';
                break;
            case 7:
                echo 'Rabbit';
                break;
            case 8:
                echo 'Dragon';
                break;
            case 9:
                echo 'Snake';
                break;
            case 10:
                echo 'Horse';
                break;
            case 11:
                echo 'Lamb';
                break;
            default:
                echo 'Something Broke';
        }
        print("</p>\n");
        ?>
    </body>
</html>

<?php
// function that displays whether the player won, lost, or tied the round
function display($status) {
    print("<td>player $status this round</td></tr>\n");
}
?>