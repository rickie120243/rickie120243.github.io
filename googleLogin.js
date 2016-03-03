function onSignIn(googleUser) {
  var arr = [];
  var profile = googleUser.getBasicProfile();
  var id_token = googleUser.getAuthResponse().id_token;
  arr.push("ID: " + profile.getId());
  arr.push("Name: " + profile.getName());
  arr.push("Image URL: " + profile.getImageUrl());
  arr.push("Email: " + profile.getEmail());
  document.getElementById("loginInfo").innerHTML = arr.join("<br>");
  console.log("ID: " + profile.getId());
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  console.log("ID Token: " + id_token);  
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    document.getElementById("loginInfo").innerHTML = 'User signed out.';
    console.log('User signed out.');
  });
}
