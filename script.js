
const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);

    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
} else {
    storeUserInfo();
}

function storeUserInfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
    };
    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
}
