$(document).ready(function() {
    var usernameCookie = getCookie('username');
    var passwordCookie = getCookie('password');
  
    if (usernameCookie === 'lberry' && passwordCookie === '12345') {
      showContent();
    }
  
    $('.login-form').on('submit', function(e) {
      e.preventDefault();
      var username = $('input[type="text"]').val();
      var password = $('input[type="password"]').val();
  
      if (username === 'lberry' && password === '12345') {
        setCookie('username', username, 1); // Set expiration to 1 day
        setCookie('password', password, 1); // Set expiration to 1 day
        showContent();
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  
    function showContent() {
      $('.login-box').hide(); // Hide the login box
      // Show the content you want to display after successful login
      $('body').append('<h1>Welcome to the game site!</h1>');
      $('body').append('<p>Your unlocked content goes here.</p>');
    }
  
    function setCookie(name, value, days) {
      var expires = '';
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
      }
      document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
  
    function getCookie(name) {
      var nameEQ = name + '=';
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
        }
      }
      return null;
    }
  });
  