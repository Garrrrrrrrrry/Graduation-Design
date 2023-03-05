window.addEventListener('load', function () {
   $(document).ready(function () {
      /* 添加商品 */
      $(".add1").click(function () {
         var $newPro = $(
            "<div class='item'>"
            + "<div class='tbody'>"
            + "<div><input type='checkbox' class='select_option'></div>"

            + "<div>"
            + "<img src ='./images/product1.png' height='100'/>"
            + "</div>"
            + "<div>【柯基犬专用狗粮】10斤5斤朕的狗粮幼犬成犬美毛亮毛补钙去泪痕天然粮主粮</div>"
            + " <div>¥66.00</div>"
            + "<div>"
            + "<input type='number'  class='itxt' value='1' min='1'>"
            + " </div>"
            + "   <div>¥66.00</div>"
            + " <div>"
            + "  <a href='#' class='del'>删除</a>"
            + " </div>"
            + "</div>"
            + "</div>"
         );
         $("#listBox").append($newPro);
      });
	  
	  $(".add2").click(function () {
	     var $newPro = $(
	        "<div class='item'>"
	        + "<div class='tbody'>"
	        + "<div><input type='checkbox' class='select_option'></div>"
	  
	        + "<div>"
	        + "<img src ='./images/product2.png' height='100'/>"
	        + "</div>"
	        + "<div>麦富迪 宠物狗狗零食 成犬幼犬训狗奖励鸡肉干400g</div>"
	        + " <div>¥39.00</div>"
	        + "<div>"
	        + "<input type='number'  class='itxt'  value='1' min='1'>"
	        + " </div>"
	        + "   <div>¥39.00</div>"
	        + " <div>"
	        + "  <a href='#' class='del'>删除</a>"
	        + " </div>"
	        + "</div>"
	        + "</div>"
	     );
	     $("#listBox").append($newPro);
	  });
	  
	  $(".add3").click(function () {
	     var $newPro = $(
	        "<div class='item'>"
	        + "<div class='tbody'>"
	        + "<div><input type='checkbox' class='select_option'></div>"
	  
	        + "<div>"
	        + "<img src ='./images/product3.png' height='100'/>"
	        + "</div>"
	        + "<div> YaHo亚禾狗狗磨牙棒(混合味270g*袋 约7cm*30根装）宠物狗耐咬洁齿骨零食</div>"
	        + " <div>¥26.70</div>"
	        + "<div>"
	        + "<input type='number'   class='itxt' value='1' min='1'>"
	        + " </div>"
	        + "   <div>¥26.70</div>"
	        + " <div>"
	        + " <a href='#' class='del'>删除</a>"
	        + " </div>"
	        + "</div>"
	        + "</div>"
	     );
	     $("#listBox").append($newPro);
	  });
	  
	  $(".add4").click(function () {
	     var $newPro = $(
	        "<div class='item'>"
	        + "<div class='tbody'>"
	        + "<div><input type='checkbox' class='select_option'></div>"
	  
	        + "<div>"
	        + "<img src ='./images/product4.png' height='100'/>"
	        + "</div>"
	        + "<div>加绒加厚 酷奇宠 狗窝猫窝 秋冬季狗窝犬狗狗垫子猫咪宠物狗床狗屋用品</div>"
	        + " <div>¥45.00</div>"
	        + "<div>"
	        + "<input type='number' class='itxt' value='1' min='1'>"
	        + " </div>"
	        + "   <div>¥45.00</div>"
	        + " <div>"
	        + "  <a href='#' class='del'>删除</a>"
	        + " </div>"
	        + "</div>"
	        + "</div>"
	     );
	     $("#listBox").append($newPro);
	  });

	  
	  /* 删除单个行 */
	     $("body").on("click", ".del", function () {
	        $(this).parent().parent().remove();
	  
	     });
	  });
	  //数量改变，小计的改变
	  $("input[type='number']").on('click', function () {
	     var num = $(this).val();
	     var price = $(this).parent().prev().html().substr(1);
	     $(this).parent().next().html("￥" + (price * num).toFixed(2))
	  })
	  
	  $("#selectAll").on("click", function () {
	     // 这里是判断全选按钮是否被选中
	     if ($(this).is(":checked") == true) {
	        // 选中class = select_option的标签
	        $(".select_option").each(function () {
	           // 通过prop()函数设置checkbox的状态 
	           $(this).prop("checked", true);
	           /* 给选中的商品增加商品背景颜色 */
	           $(this).parents(".item").addClass("check-cart-item");
	        })
	     }
	     else {
	        $(".select_option").each(function () {
	           $(this).prop("checked", false);
	           $(this).parents(".item").removeClass("check-cart-item");
	        })
	     }
	  })
	  //当小选项全选时，全选框自动选
	  $("body").on("change",".select_option", function () {
	     if ($(".select_option:checked").length === $(".select_option").length) {
	        $("#selectAll").prop("checked", true);
	     }
	     else {
	        $("#selectAll").prop("checked", false);
	     }
	     if ($(this).prop("checked")) {
	        $(this).parents(".item").addClass("check-cart-item");
	     }
	     else {
	        $(this).parents(".item").removeClass("check-cart-item");
	     }
	  })
	/* 删除选中的商品 */
	$(".littledel").on("click", function () {
	   $(".select_option:checked").parents(".tbody").remove();/* parents加了s代表所有的父辈，包括父亲的父亲 */
	})
	
	/* 清空购物车 */
	$(".alldel").click(function () {
	   $(".select_option").parents(".tbody").remove();
	})
	
	/* 计算商品数量 */
	$(".add1,add2,add3,add4").click(function () {
	   var n = $(".t-head span").val();
	   n++;
	   $(".t-head span").val(n);
	});
})