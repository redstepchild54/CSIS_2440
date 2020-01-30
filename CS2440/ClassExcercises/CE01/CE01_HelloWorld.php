<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Hello World</title>
        
        <?php
        /*
         * Page created by William McConnell
         * CSIS 2440
         */
        
        $name = "William M.";
        $age = 26;
        $male=true;
        $icecream="cookie dough";
        $imageFile = "img/dndlogo.png";
        ?>
    </head>
    <body>
        <?php
        
        echo "<p style = 'color:blue;'>Hello World. This is my first php page!</p>";
        print("<p>My name is: ".$name." who is ".$age." years old, and likes ".$icecream." ice-cream.</p>");
        print('<p>We use variable names like $name, $age, and $icecream. This paragrah uses single quotation marks. This prevents php from using the actual varable values</p>');
        print("<img src=$imageFile 'height=100'>");
        ?>
    </body>
    
</html>
