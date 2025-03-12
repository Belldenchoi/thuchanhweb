document.addEventListener("DOMContentLoaded", function () {
    const confirmButton = document.getElementById("confirmBtn");

    confirmButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        let fullName = document.getElementById("fullName").value.trim();
        let birthDate = document.getElementById("birthDate").value.trim();
        let idNumber = document.getElementById("idNumber").value.trim();
        let address = document.getElementById("address").value.trim();

        if (fullName === "" || birthDate === "" || idNumber === "" || address === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }
        let datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (!datePattern.test(birthDate)) {
            alert("Ngày sinh không hợp lệ! Vui lòng nhập theo định dạng dd/mm/yyyy.");
            return;
        }
        let idPattern = /^\d{9}|\d{12}$/;
        if (!idPattern.test(idNumber)) {
            alert("Số căn cước công dân không hợp lệ! Vui lòng nhập 9 hoặc 12 chữ số.");
            return;
        }
        let confirmation = `Xác nhận thông tin:\n\nHọ và Tên: ${fullName}\nNgày Sinh: ${birthDate}\nSố CCCD: ${idNumber}\nĐịa Chỉ: ${address}`;
        alert(confirmation);
        document.getElementById("confirmBtn").addEventListener("click", function () {
            window.location.href = "form.html";
        });        
    });
});
