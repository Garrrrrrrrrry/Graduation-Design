<?php
//接收前端传递过来的数据
$username = $_POST["username"];
$phonenum = $_POST["phonenum"];
$password = $_POST["password"];
$repassword = $_POST["repassword"];

// 连接数据库
$conn = mysqli_connect("localhost", "root", "123456", "graduation_project");

//查询语句
$select_SQL = "SELECT *FROM students WHERE username='$username' and phonenum='$phonenum' and password='$password' and repassword='$repassword'";

//执行sql语句       (数据库连接对象   sql语句)
$result = mysqli_query($conn, $select_SQL);
// var_dump($result);

// 获取结果集中的数据条数
$num = mysqli_num_rows($result);
// echo $num;


// 判断
    if($num == 0){
        echo json_encode(array("error" => 0,"data" =>"注册成功"));
        $insert_SQL = "INSERT INTO students values('$username','$password','$null','$null','$phonenum','$repassword')";
        $result = mysqli_query($conn, $insert_SQL);
    }else{
        echo json_encode(array("error" => 1,"data" =>"该用户名已经存在"));
    }
?>