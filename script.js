
function updateClock() {
    var now = new Date();

    var localTime = now.toLocaleTimeString();

    var timeZones = ['America/Sao_Paulo', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

    for (var i = 0; i < timeZones.length; i++) {
      var timeZone = timeZones[i];
      var timeZoneName = timeZone.split('/')[1].replace('_', ' ');
      var cityTime = now.toLocaleTimeString('pt-BR', { timeZone: timeZone });
      var timeZoneDiv = document.getElementById('clock-' + timeZone);
      timeZoneDiv.querySelector('span').textContent = cityTime;
    }
  }

  setInterval(updateClock, 1000);
