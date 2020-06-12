
function getPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      json.forEach(post => { postHtml(post.id, post.title, post.body) })
    })
    .catch(function () {
    });
}

function getComment(postId) {
  // Busca pelo método GET os comentários de determinada postagem.
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(json => {
      document.getElementById(`post-${postId}`).innerHTML += `<h6 class="comment" onclick="showComment(${postId})" >Comentários<small><br>Cique aqui para ler os comentários.</small></h6><div id="comment-${postId}" hidden>`;
      json.forEach(comment => { commentHtml(postId, comment.name, comment.email, comment.body); })
    })
    .catch(function () {
    });
}

function postHtml(postId, postTitle, postBody) {
  // "StringBuilder" para gerar o HTML de determinada postagem.
  var postHtml = [
    '<div class="card">',
    `<div id="post-${postId}" class="post">`,
    `<h2>${postTitle}</h2>`,
    `<p>${postBody}</p>`,
    '<hr>'
  ];

  // Adiciona o POST atual na página HTML
  document.getElementById('main').innerHTML += postHtml.join("");

  // Busca os comentários referente ao post atual.
  getComment(postId);
}

function commentHtml(postId, commentName, commentEmail, commentBody) {
  // "StringBuilder" para gerar o HTML de determinado comentário.
  var commentHtml = [
    '<div class="post-comment">',
    `<h4>Nome: <small>${commentName}</small> </h4>`,
    `<h4>E-mail: <small>${commentEmail}</small></h4>`,
    `<p>${commentBody}</p>`,
    '</div><hr class="post-comment">'
  ];

  // Adiciona o COMENTÁRIO atual na página HTML
  document.getElementById(`comment-${postId}`).innerHTML += commentHtml.join("");
}

function showComment(postId) {
  if (document.getElementById(`comment-${postId}`).hasAttribute("hidden")){
    document.getElementById(`comment-${postId}`).removeAttribute("hidden");
  }
  else{
    document.getElementById(`comment-${postId}`).setAttribute("hidden", "hidden");
  }
}