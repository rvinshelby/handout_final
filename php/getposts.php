<?php
require_once 'db.php';

$query=mysql_query("INSERT INTO tbl_posts(post_id, account_name, post_title, post_content, post_date) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])") or die(mysql_error());
$arr[];
while($obj = mysql_fetch_object($query)) {
    array_push($arr, $obj);
}

echo $json_response = json_encode($arr);
?>