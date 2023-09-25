export function saveCookie(object) {
  const converted_object = encodeURIComponent(JSON.stringify(object));

  const currentTime = new Date();
  const expires = new Date(currentTime.getTime() + 40 * 60 * 1000); // Adiciona 40 minutos

  document.cookie = `playersData=${converted_object};expires=${expires.toUTCString()};path=./game.html`;
  window.location.href = "./game.html";
  console.log("Cookie Salvo!");
}

export function getCookie(name) {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  for (const cookie of cookies) {
    if (cookie.startsWith(`${name}=`)) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

