<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <!--<link rel="stylesheet" type="text/css" href="css/style.css">
        <script src="js/script.js"></script>-->
    </head>
    <body>
        <?php $word = "Race car"; ?>
        <h1>Facts about "<?php echo $word; ?>"</h1>
        <ul>
            <li><?php echo (isPalindrome($word) ? "<span class='good'>Is</span>" : "<span class='bad'>Is not</span>"); ?> a palendrome</li>
            <li>It is <?php echo strlen($word); ?> characters long</li>
            <li>It contains <?php echo str_word_count($word) . " word"; if (str_word_count($word) > 1) echo "s"?></li>
        </ul>
    </body>
</html>
<?php
    function isPalindrome($word)
    {
        $word = str_replace(" ", "", $word);
        $word = strtolower($word);
        $reverseWord = strrev($word);
        if ($reverseWord == $word)
            return true;
        return false;
    }
?>
