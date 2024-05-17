// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Test server function
// Create click event for heart button
// Console.log based on server function response

document.addEventListener('DOMContentLoaded', function() {

  const mediaPost = document.querySelectorAll('.media-post')
  let span = document.querySelectorAll('span.like-glyph')

  span.forEach(item => {
    item.addEventListener('click', (e) => {
      mimicServerCall()
      .then(handleResolve(e.target))
      .catch(handleError)
    })
  })

  function handleResolve(span){
      span.innerHTML = FULL_HEART;
      span.classList.add('activated-heart'); 

      span.addEventListener('click', (e) => {
        span.innerHTML.toggle = EMPTY_HEART
        span.classList.toggle('activated-heart')
      })
  }

  let modal = document.getElementById('modal')
  let modalMessage = document.getElementById('modal-message')

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
