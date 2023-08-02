countLetter = (input) => {
    const vietnameseChars = {
        'aw': 'ă',
        'aa': 'â',
        'dd': 'đ',
        'ee': 'ê',
        'oo': 'ô',
        'ow': 'ơ',
        'w': 'ư',
    };

    let count = 0;

    // Duyệt qua chuỗi đầu vào và tìm các ký tự Tiếng Việt
    for (let i = 0; i < input.length; i++) {
        for (let key in vietnameseChars) {
            if (input.slice(i).startsWith(key)) {
                // Tăng biến đếm khi tìm thấy chữ cái Tiếng Việt
                count++;
                // Di chuyển vị trí i theo độ dài của chữ cái Tiếng Việt để tránh đếm trùng lặp
                i += key.length - 1;
                break;
            }
        }
    }

    return count;
}
// Ví dụ với hàm mẫu
const input = 'hfdawhwhcoomdd';
const result = countLetter(input);
console.log(result); // Output: 4
