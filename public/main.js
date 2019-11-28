(function(){
    const btn = document.querySelector('.input-btn');
    const ipt = document.querySelector('.input-box');
    const content = document.querySelector('.damiao-content');
    const linkText = document.querySelector('.dc-link-Text');


    btn.addEventListener('click', () => {
        // 显示 盒子
        content.style.display = 'block';
        
        // 请求 获取短链接
        fetch('http://127.0.0.1:3002/api/url/shorten',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                longUrl: ipt.value
            })
        }).then(res => res.json()).then(res => {
            console.log(res);
            linkText.innerText = 'http://www.damiao.com:3002/'+res.urlCode;
        });



    });

})();