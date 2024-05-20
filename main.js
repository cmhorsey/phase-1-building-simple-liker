// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  let span = document.querySelectorAll('span.like-glyph')
  let modal = document.getElementById('modal')
  let modalMessage = document.getElementById('modal-message')

  span.forEach(span => {
    span.addEventListener('click', (e) => {
      mimicServerCall()
      .then(() => handleResolve(e.target))
      .catch(handleError)
    })
  })

  function handleResolve(span){
      if(span.innerHTML === EMPTY_HEART){
        span.innerHTML = FULL_HEART;
        span.classList.add('activated-heart');
      } else {
          span.innerHTML = EMPTY_HEART;
          span.classList.remove('activated-heart');
      }
  }

  function handleError(reject) {
    modal.classList.remove('hidden')
    modalMessage.innerHTML = reject

    setTimeout(() => {
      modal.classList.add('hidden')
    }, 3000);
  }
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
