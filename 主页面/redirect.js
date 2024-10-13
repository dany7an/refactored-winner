document.addEventListener('click', function(event) {
    // 获取点击位置
    const x = event.clientX;
    const y = event.clientY;

    // 设置目标跳转的URL
    const targetUrl = 'https://www.example.com';

    // 在点击位置打开新窗口进行跳转
    window.open(targetUrl, '_blank');
});