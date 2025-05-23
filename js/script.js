// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const navbar = document.querySelector('.navbar');
    const productCards = document.querySelectorAll('.product-card');
    
    // 页面加载动画
    document.body.style.opacity = '0';
    fadeIn(document.body);
    
    // 滚动事件 - 改变导航栏样式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            navbar.style.padding = '0.8rem 2rem';
        } else {
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            navbar.style.padding = '1rem 2rem';
        }
    });
    
    // 产品卡片点击事件
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // 简单的点击反馈
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // 获取产品名称
            const productName = this.querySelector('h3').textContent;
            alert(`您点击了: ${productName}\n这是模拟的JetBrains产品`);
        });
    });
    
    // 导航链接点击效果
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // 简单的点击效果
            this.style.color = '#61dafb';
            setTimeout(() => {
                this.style.color = 'white';
            }, 300);
            alert('这是模拟的导航链接\n实际网站会跳转到相应页面');
        });
    });
});

// 淡入动画函数
function fadeIn(element) {
    let opacity = 0;
    const timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.05;
    }, 30);
}