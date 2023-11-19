const clearNotification = document.getElementById("read-notification")
const redDot = document.querySelectorAll(".red-dot")
const userBg = document.querySelectorAll(".user-bg")
const notificationCount = document.getElementById("notification-number")

clearNotification.addEventListener("click", () => {
    notificationAction()
})

function notificationAction() {
    notificationCount.innerHTML = "0"
   
    for (i = 0; i < redDot.length; i++) {
        redDot[i].style.position = "initial"
    }

    for (i = 0; i < userBg.length; i++) {
        userBg[i].style.background = "transparent"
    }
}