// Yêu cầu 1: Thay đổi nội dung đoạn văn
function changeText() {
    document.getElementById("greeting").textContent = "Chào mừng bạn đến với bài tập DOM!";
}

// Yêu cầu 2: Thay đổi màu nền của box
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button")[1].addEventListener("click", function () {
        document.getElementById("box").style.backgroundColor = "orange";
    });

    // Yêu cầu 3: Thêm và Xóa công việc
    document.querySelectorAll("button")[2].addEventListener("click", function () {
        const input = document.getElementById("todoInput");
        const value = input.value.trim();
        if (value === "") return;

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.onclick = function () {
            removeTodo(this);
        };

        li.appendChild(span);
        li.appendChild(document.createTextNode(" "));
        li.appendChild(deleteBtn);

        document.getElementById("todoList").appendChild(li);
        input.value = "";
    });

    // Gắn sự kiện Xóa cho các nút "Xóa" đã có sẵn
    const existingDeleteButtons = document.querySelectorAll("#todoList button");
    existingDeleteButtons.forEach(button => {
        button.onclick = function () {
            removeTodo(this);
        };
    });
});

// Hàm xóa công việc
function removeTodo(buttonElement) {
    const li = buttonElement.parentElement;
    li.remove();
}

// Yêu cầu 4: Thay đổi hình ảnh
function changeImage() {
    const img = document.getElementById("myImage");
    img.src = "https://www.svgrepo.com/show/452030/avatar-default.svg";
}

// Yêu cầu 5: Bật/Tắt highlight
function toggleHighlight() {
    const p = document.getElementById("toggleClassText");
    p.classList.toggle("highlight");
}