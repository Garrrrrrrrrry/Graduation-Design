<?php
$page = $_GET["page"];
// 连接数据库  
$conn = mysqli_connect("localhost", "root", "123456", "graduation_project");
//将页数转换为数据库中的起始条数
$num = $page *20;
//查询商品表
$select_SQL = "SELECT *FROM goods limit $num,20";
$result = mysqli_query($conn, $select_SQL);
$arr = mysqli_fetch_all($result,MYSQLI_ASSOC);
//给前端返回商品信息
echo json_encode(array("error" => 0,"data" => $arr));

?>