$(document).ready(function() {
    $('.custom-control-input').change(function() {
      if ($(this).is(':checked')) {
        $(this).closest('.list-group-item').find('.expandable-section').slideDown();
      } else {
        $(this).closest('.list-group-item').find('.expandable-section').slideUp();
      }
    });
  });


// COMMENT SECTION

document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('commentForm');
  const commentSection = document.getElementById('comment_section');

  commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

    //   const usernameInput = commentForm.querySelector('#username');
      const messageTextarea = commentForm.querySelector('#message');
    //   const username = usernameInput.value.trim();
      const message = messageTextarea.value.trim();
      const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

      if (message !== '') {
          const newComment = document.createElement('div');
          newComment.classList.add('comment');
          newComment.innerHTML = `
              <div class="media-body">
                  <div class="d-flex w-100 justify-content-between">
                  
                      <div class="comment-title d-flex">
                          <h4 class="media-heading username">Sandro</h4>
                          <i class="bi bi-pencil-fill edit"></i>
                          <i class="bi bi-trash-fill erase erase-comment"></i>
                      </div>

                      <div class="list-unstyled list-inline media-detail pull-left">
                          <p><i class="bi bi-calendar-week"></i>${currentDate}</p>
                      </div>

                  </div>
                  <p>${message}</p>
              </div>
          `;

          commentSection.appendChild(newComment);

        //   usernameInput.value = ''; // Limpa o campo de nome
          messageTextarea.value = ''; // Limpa a área de texto
      }
  });

  // Manipulador de evento para exclusão de comentários
  commentSection.addEventListener('click', function(event) {
      if (event.target.classList.contains('erase-comment')) {
          const comment = event.target.closest('.comment');
          if (comment) {
              comment.remove();
          }
      }
  });
});
