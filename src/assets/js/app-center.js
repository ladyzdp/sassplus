 

 $("#all-app").on('click', '.add-btn', function(event) {
     apendItem($(this));
 });

 $("#append").on('click', '.add-btn', function(event) {
     removeItem($(this));
 });

 $("#all-item").on('click', '.hot-add-btn', function() {
     var dataId = $(this).data('id'); //获取他自己的data-id
     var arr = ckdata($("#append li > a ")); //取出常用工具中已经存在的工具
     var tarBox = $("#all-app a"); //取出全部常用工具中的工具
     hotAppend(dataId, arr, tarBox); //
 });

 $("#save-btn").on('click', function() {
     var dataID = ckdata($("#append a"));

     $.ajax({
         url: 'index.html',
         data: {
             'tools': dataID
         },
         success: function() {
             $("#append .add-btn").each(function() {
                 $(this).remove();

             });

         }
     });


     console.log(dataID);

 });

 $("#edit-btn").on('click', function() {
     $("#append a").each(function() {
         if ($(this).find('.add-btn') === true) {

             return false;
         } else {

             $(this).append('<span class="icons-message-m add-btn">');
         }

     });

 });

 //根据data-id判断目标盒子是否存在要添加的当前盒子
 function hotAppend(obj, target, toolbox) {

     if ($.inArray(obj, target) != '-1') {
         alert("已经存在常用工具！");
         return false;
     } else {
         toolbox.each(function(index, el) {
             if ($(this).data('id') === obj) {
                 $(this).find('.add-btn').trigger('click');
             }
         });
     };

 }
 //添加盒子
 function apendItem(obj) {
     var name = obj.siblings('.app-name').text(); //获取工具名称
     var dataId = obj.parent('a').data('id');
     var icons = obj.siblings('.icon-item').attr('class'); //获取工具图标class
     var newC = icons.split(" ");
     var classN = newC[0] + "-new";
     var item = '<li><a href="javascript:;" title="' + name + '" data-id="' + dataId + '"><span class="icons-message-m add-btn" data-id="' + dataId + '"></span><span class="' + classN + ' icon-item"></span><p class="app-name">' + name + '</p></a></li>';
     obj.closest('li').remove();
     $("#append").append(item);
 }
 //删除盒子
 function removeItem(obj) {
     var name = obj.siblings('.app-name').text(); //获取工具名称
     var icons = obj.siblings('.icon-item').attr('class'); //获取工具图标class
     var dataId = obj.parent('a').data('id');
     var newC = icons.split(" ");
     var classN = newC[0].replace('-new', '');
     var item = '<li><a href="javascript:;" title="' + name + '" data-id="' + dataId + '"><span class="icons-message-jia add-btn"></span><span class="' + classN + ' icon-item"></span><p class="app-name">' + name + '</p></a></li>';
     obj.closest('li').remove();
     $("#all-app").append(item);
 }
 //收集工具ID
 function ckdata(obj) {
     var dataList = [];
     obj.each(function(index, el) {
         var dataId = $(this).data('id');
         dataList.push(dataId);
     });
     return dataList;
 }
