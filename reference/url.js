const url = require('url');

const myUrl = new URL('http:/myWebsite.com:8000/hello.html?id=2&name=aaqib');

// entire url
console.log(myUrl.href);
console.log(myUrl.toString())

// host name or root domain name
console.log(myUrl.host);

// host name without port
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// after ?
console.log(myUrl.search);

// parameter object
console.log(myUrl.searchParams);

// append params 
myUrl.searchParams.append('email', 'aaqib@gmail.com');
console.log(myUrl.searchParams);