function onSignIn(googleUser) {
  var arr = [];
  var profile = googleUser.getBasicProfile();
  var idToken = googleUser.getAuthResponse()["id_token"];
  arr.push('ID: ' + profile.getId());
  arr.push('Name: ' + profile.getName());
  arr.push('Image URL: ' + profile.getImageUrl());
  arr.push('Email: ' + profile.getEmail());
  arr.push('ID Token: ' + idToken);
  document.getElementById('loginInfo').innerHTML = arr.join('<br>');  
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    document.getElementById('loginInfo').innerHTML = 'User signed out.';
  });
}