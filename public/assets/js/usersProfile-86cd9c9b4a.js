createFriend=function(){target=$(".friendButton");let t=$("#addFriend");t.submit((function(e){e.preventDefault(),$.ajax({type:"Post",url:"/users/friends",data:t.serialize(),success:function(t){1==t.data.bools?($(target).html("UnFollow"),$(target).removeAttr("id","button-id")):0==t.data.bools&&($(target).html("Follow"),$(target).attr("id","button-id"))},error:function(t){console.log(t)}})}))},createFriend();