<?php
 
$fn = $_FILES["file"]["name"];
 
if(file_exists('uploads/' . $fn)) {
    unlink('uploads/' . $fn);
}
 
$allowedExts = array("gif", "jpeg", "jpg", "png");
$extension = end(explode(".", $fn));
 
if (
    (
           ($_FILES["file"]["type"] == "image/gif")
        || ($_FILES["file"]["type"] == "image/jpeg")
        || ($_FILES["file"]["type"] == "image/jpg")
        || ($_FILES["file"]["type"] == "image/pjpeg")
        || ($_FILES["file"]["type"] == "image/x-png")
        || ($_FILES["file"]["type"] == "image/png")
    )
    && ($_FILES["file"]["size"] < 50000000)
    && in_array($extension, $allowedExts)
    && (!$_FILES["file"]["error"] > 0)
) {
    if(move_uploaded_file($_FILES["file"]["tmp_name"], "uploads/" . $fn)) {
        echo "uploads/" . $fn;
    }
}
else {
    echo "Invalid File/Size";
}
?>