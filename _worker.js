addEventListener(
  "fetch",event => {
     let url=new URL(event.request.url);
     url.hostname="cdn.816777.xyz";  //你需要反代的域名
     let request=new Request(url,event.request);
     event. respondWith(
       fetch(request)
     )
  }
)