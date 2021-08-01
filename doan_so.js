function play() {
    let max = prompt('Bạn đoán trong khoảng từ 1 đến mấy ??😗');
    let number =Math.floor(Math.random()*max);
    let me = +prompt('Nhập số bạn đoán');
    let dem =0;
    while(number != me) {
        if (me > number) {
            alert('Sai gòi!! Số bạn đoán lớn hơn số mìn nghĩ ');
            dem++;
            console.log(dem);
            me = +prompt('Nhập số bạn đoán');
            
        } else if (me < number) {
            alert('No no no!! Số bạn đoán nhỏ hơn số mìn nghĩ');
            dem++;
            console.log(dem)
            me = +prompt('Nhập số bạn đoán');
            ;
        }
        
        
    }

    alert("That 's right!! Chính là số "+number+' đấy 🎉');
    alert('Bạn đã đoán đúng trong '+dem+' lần đoán 🙂');
}