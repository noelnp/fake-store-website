export function validateCheckoutForm() {
  const email = document.getElementById('emailInput').value.trim();
  const phone = document.getElementById('phoneInput').value.trim();
  const firstName = document.getElementById('firstNameInput').value.trim();
  const lastName = document.getElementById('lastNameInput').value.trim();
  const address = document.getElementById('addressInput').value.trim();
  const postalCity = document.getElementById('postalCityInput').value.trim();
  const postalCode = document.getElementById('postalCodeInput').value.trim();

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.match(emailRegex)) {
    alert('Ange en giltig email');
  }

  // Validera epost

  // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  // Validera telefon

  // Validera förnamn + efternamn

  /*
    a. Namnet är minst 2 tecken och max 50 tecken
b. E-postadressen måste innehålla @ och max 50 tecken
c. Telefonnummer får innehålla siffror, bindestreck och parenteser. Max 50 tecken.
d. Leveransadress enligt svensk standard:
i. Gatuadress: Min 2 tecken och Max 50 tecken
ii. Postnummer: Exakt 5 siffror
iii. Ort: Min 2 tecken och Max 50 tecken
*/
}
