var posts=["2024/06/19/dns/","2024/06/18/gitup/","2024/06/18/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };