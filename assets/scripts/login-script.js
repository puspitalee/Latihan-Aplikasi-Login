/** @Module login-script*/
/**
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');
/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
const inputEmailElement = document.querySelector('#inputEmail');
*/
const inputPasswordElement = document.querySelector('#inputPassword');
/**
* Membuat variabel expected email  untuk menyimpan informasi email
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';
/**
* Membuat variabel ExpectedPassword untuk menyimpan informasi password
* {string}
*/
const expectedPassword = 'superpassword';

/* comment : Menambahkan akasi kllik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  /**
  * Membuat variabel email untuk menyimpan nilai email yang dianggap didapatkan saat button ditekan
  * constan {string}
  */
  const email = inputEmailElement.value;

  /** Membuat variabel password untuk menyimpan niali password yang didapatkan saat button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  /*Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {
    /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
