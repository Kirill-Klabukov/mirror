const video = document.getElementById('video');

// Проверка поддержки навигатором доступа к медиа-устройствам
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Запрашиваем доступ к веб-камере
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(error) {
            console.log("Ошибка при попытке получить доступ к камере: ", error);
        });
} else {
    alert('К сожалению, ваш браузер не поддерживает доступ к веб-камере');
}
