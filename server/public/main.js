(function(){
    const btn = document.querySelector('.input-btn');
    const ipt = document.querySelector('.input-box');
    const content = document.querySelector('.damiao-content');
    const linkText = document.querySelector('.dc-link-Text');
    const qrcode = document.querySelector('#qrcode');


    btn.addEventListener('click', () => {
        
        // 验证是表单内容否为空
        if(!ipt.value.replace(/\s*/g,'')){
            return
        }

        // 验证表单内容是否是一个链接
        
        
        // 内容显示
        content.style.display = 'none';
        qrcode.innerHTML = '';

        // 请求 获取短链接
        fetch('http://127.0.0.1/api/url/shorten',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                longUrl: ipt.value
            })
        }).then(res => res.json()).then(res => {
            let link = 'http://127.0.0.1/'+res.urlCode;
            // 赋值 短链接
            linkText.innerText = link;
            linkText.href = link;
            // qrcode
            new QRCode(qrcode, link);
            // 显示 盒子
            content.style.display = 'block';
        });

        // 请求 获取二维码

    });

})();