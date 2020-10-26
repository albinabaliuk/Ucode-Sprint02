let firstName = prompt('Please, enter your first name')
let lastName = prompt('Please, enter your last name')

if (firstName.match(/^\b[a-zA-Z]+\b$/i) && lastName.match(/^\b[a-zA-Z]+\b$/i)) {

  let capitaliseFN = firstName[0].toUpperCase() + firstName.slice(1);
  let caitalisepLN = lastName[0].toUpperCase() + lastName.slice(1);

  alert('Hi ' + capitaliseFN + ' ' + caitalisepLN)
} else {
  alert('Please, try again')
}