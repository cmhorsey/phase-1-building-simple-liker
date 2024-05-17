// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Test server function
// Create click event for heart button
// Console.log based on server function response

document.addEventListener('DOMContentLoaded', function() {


  const mediaPost = document.querySelectorAll('.media-post')
  // console.log(mediaPost)

  // const heartBtn = document.querySelectorAll('.like-glyph')
  // // console.log(heartBtn)
  // for(let item of heartBtn) {
  //   item.addEventListener('click', () => {
  //     mimicServerCall()
  //     .then(handleResolve)
  //     .catch(handleError)
  //   })
  // }

  let span = document.querySelectorAll('span.like-glyph')
  span.forEach(item => {
    item.addEventListener('click', () => {
      mimicServerCall()
      .then(handleResolve)
      .catch(handleError)
    })
  })

  function handleResolve(resolve){
    console.log(resolve)
    }

  let modal = document.getElementById('modal')
  let modalMessage = document.getElementById('modal-message')

  function handleError(reject) {
    modal.classList.remove('hidden')
    modalMessage.innerHTML = reject
  }


  

});


// heartBtn.addEventListener('click', console.log('liked'))
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
