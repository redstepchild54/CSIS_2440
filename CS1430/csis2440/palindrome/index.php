<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script src="js/script.js"></script>
    </head>
    <body>
        <?php 
            $phrase = array("Bob", "Tie It");
            $phrase[] = "Madam I'm Adam"; 
            array_push($phrase, "Senile Felines");

            echo "<div class='facts-wrapper'>";
            for($i = 0; $i < sizeof($phrase); $i++)
                displayPhrase($phrase[$i]);
            echo "</div>";
        ?>
        
    </body>
</html>
<?php

    function displayPhrase($phrase)
    {
        echo "<div class='facts'>";
            echo "<h1>Facts about \"$phrase\"</h1>";
            echo "<ul>";
                echo "<li><span class='".(isPalindrome($phrase) ? "good'>Is" : "bad'>Is not")."</span> a palindrome</li>";
                echo "<li>It is ".strlen($phrase)." characters long</li>";
                echo "<li>It contains ".str_word_count($phrase)." word".(str_word_count($phrase) > 1 ? "s" : "")."</li>";
            echo "</ul>";
        echo "</div>";
    }

    function isPalindrome($word)
    {
        $word = str_replace(" ", "", $word);
        $word = str_replace("'", "", $word);
        $word = strtolower($word);
        $reverseWord = strrev($word);
        if ($reverseWord == $word)
            return true;
        return false;
    }
?>
