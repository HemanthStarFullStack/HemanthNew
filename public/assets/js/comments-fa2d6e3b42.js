class PostComments{constructor(e){this.postId=e,this.newCommentForm=$(`#post-comments-${e}`),this.createComment(e),this.commentContainer=$(`#post-listComments-${e}`);let t=this;$(".deleteButton",this.commentContainer).each((function(){t.deleteComment($(this))}))}createComment(e){let t=this;this.newCommentForm.submit((function(n){n.preventDefault();$.ajax({type:"post",url:"/comments/update",data:$(this).serialize(),success:function(n){let o=t.newCommentDom(n.data);$(`#post-listComments-${e}`).prepend(o),console.log($(".deleteButton",o)),t.deleteComment($(".deleteButton",o)),new Noty({theme:"relax",text:"Comment published!",type:"success",layout:"topRight",timeout:1500}).show()},error:function(e){console.log(e.responseText)}})}))}newCommentDom(e){return $(`\n         \n            <li id="comment-${e.comment_id}"> \n                    <div class="comment-li-con">\n                        <div class="comment-container">\n                            <div class="flex-arrangement">\n                                <div class="comment-image-class">\n                                    <img src="${e.commentor_avatar}" alt="">\n                                </div>\n                                <div class="comment-name">\n                                    <span>\n                                        ${e.commentor_name}\n                                    </span>\n                                </div>\n                                <div class="comment-content">\n                                    <span>\n                                        ${e.commentor_con}\n                                    </span>\n                                </div>\n                                <div class="comment-delete-button">\n                                    <a href="/comments/deleteComment/?id=${e.comment_id}"class="deleteButton">\n                                        <i class="fa-regular fa-trash-can"></i>\n                                    </a>\n                            </div>\n                            </div>\n                        </div>\n                        <div class="flex-arrangement-2">\n                            <div class="likes-container">\n                                    <a href="/likes/toggle/?id=${e.comment_id}&type=Comment" class="toggle-like" data-likes="<%=comment.likes.lenght%>">\n                                        <i class="fa-regular fa-heart"></i>\n                                    </a>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                 `)}deleteComment(e){$(e).click((function(t){t.preventDefault(),$.ajax({type:"get",url:$(e).prop("href"),success:function(e){$(`#comment-${e.data.comment_id}`).remove(),new Noty({theme:"relax",text:"Comment Deleted",type:"success",layout:"topRight",timeout:1500}).show()},error:function(e){console.log(e.responseText)}})}))}}