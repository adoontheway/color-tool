const fs = require('fs')
const fetch = require('node-fetch');

function checkAndWrite(filepath,res) {
    console.log("ok , here it is:",filepath);
    //todo create directory loop  
    const dirpath = filepath.substr(0,filepath.lastIndexOf("/"));
    console.log(dirpath);
    if(!fs.existsSync(dirpath)){
        fs.mkdir(dirpath,{recursive:true},(err)=>{
            if(err != null) {
                console.log(filepath);
                console.log("mkdir err:",err);
            }
            const dest = fs.createWriteStream(filepath);
            res.body.pipe(dest);
        })
        return;
    }

    const dest = fs.createWriteStream(filepath);
    res.body.pipe(dest);
}

console.log("starting now...")

fetch("https://material.io/resources/color/", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/main.html');
    // res.body.pipe(dest);

    checkAndWrite('./html/main.html',res)
})
// fetch("https://fonts.googleapis.com/css?family=Roboto:400,500,700|Roboto+Mono:400,700|Material+Icons+Extended", {
//   "headers": {
//     "accept": "text/css,*/*;q=0.1",
//     "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
//     "cache-control": "no-cache",
//     "pragma": "no-cache",
//     "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "style",
//     "sec-fetch-mode": "no-cors",
//     "sec-fetch-site": "cross-site",
//     "x-client-data": "CKS1yQEIirbJAQimtskBCMS2yQEIqZ3KAQiMnssBCKGgywEI7/LLAQjN9ssBCLP4ywEInvnLAQj6+csBCMP9ywE="
//   },
//   "referrer": "https://material.io/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// }).then(res=>{
//     const dest = fs.createWriteStream('./html/css.css');
//     res.body.pipe(dest);
// })

fetch("https://material.io/resources/color/styles/vendor-bab328c105.css", {
  "headers": {
    "accept": "text/css,*/*;q=0.1",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "style",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // console.log(res);
    checkAndWrite('./html/styles/vendor-bab328c105.css',res)
    // const dest = fs.createWriteStream('./html/styles/vendor-bab328c105.css.html');
    // res.body.pipe(dest);
})
fetch("https://material.io/resources/color/styles/app-2bc402abea.css", {
  "headers": {
    "accept": "text/css,*/*;q=0.1",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "style",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./htmlr/styles/app-2bc402abea.css');
    // res.body.pipe(dest);
    checkAndWrite('./html/styles/app-2bc402abea.css',res)
})
fetch("https://material.io/resources/color/scripts/vendor-40fd59d5cd.js", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "script",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/scripts/vendor-40fd59d5cd.js');
    // res.body.pipe(dest);
    checkAndWrite('./html/scripts/vendor-40fd59d5cd.js',res)
})
fetch("https://material.io/resources/color/scripts/app-b6bd69de9a.js", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "script",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html//scripts/app-b6bd69de9a.js');
    // res.body.pipe(dest);
    checkAndWrite('./html//scripts/app-b6bd69de9a.js',res)
})
// fetch("https://www.gstatic.com/feedback/api.js", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
//     "cache-control": "no-cache",
//     "pragma": "no-cache",
//     "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "script",
//     "sec-fetch-mode": "no-cors",
//     "sec-fetch-site": "cross-site",
//     "x-client-data": "CKS1yQEIirbJAQimtskBCMS2yQEIqZ3KAQiMnssBCKGgywEI7/LLAQjN9ssBCLP4ywEInvnLAQj6+csBCMP9ywE="
//   },
//   "referrer": "https://material.io/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// }).then(res=>{
//     const dest = fs.createWriteStream('./html//feedback/api.js');
//     res.body.pipe(dest);
// })
// // fetch("https://www.google-analytics.com/analytics.js", {
// //   "headers": {
// //     "accept": "*/*",
// //     "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
// //     "cache-control": "no-cache",
// //     "pragma": "no-cache",
// //     "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
// //     "sec-ch-ua-mobile": "?0",
// //     "sec-fetch-dest": "script",
// //     "sec-fetch-mode": "no-cors",
// //     "sec-fetch-site": "cross-site"
// //   },
// //   "referrer": "https://material.io/",
// //   "referrerPolicy": "strict-origin-when-cross-origin",
// //   "body": null,
// //   "method": "GET",
// //   "mode": "cors"
// // }).then(res=>{
// //     const dest = fs.createWriteStream('./html/analytics.js');
// //     res.body.pipe(dest);
// // })
// // fetch("https://www.google-analytics.com/j/collect?v=1&_v=j93&a=1056502531&t=pageview&_s=1&dl=https%3A%2F%2Fmaterial.io%2Fresources%2Fcolor%2F&ul=zh-cn&de=UTF-8&dt=Color%20Tool%20-%20Material%20Design&sd=24-bit&sr=1280x800&vp=1240x666&je=0&_u=AACAAEABAAAAAC~&jid=&gjid=&cid=682063148.1629876102&tid=UA-90255304-1&_gid=1595024389.1629876102&_slc=1&z=891135920", {
// //   "headers": {
// //     "accept": "*/*",
// //     "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
// //     "cache-control": "no-cache",
// //     "content-type": "text/plain",
// //     "pragma": "no-cache",
// //     "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
// //     "sec-ch-ua-mobile": "?0",
// //     "sec-fetch-dest": "empty",
// //     "sec-fetch-mode": "cors",
// //     "sec-fetch-site": "cross-site"
// //   },
// //   "referrer": "https://material.io/",
// //   "referrerPolicy": "strict-origin-when-cross-origin",
// //   "body": "",
// //   "method": "POST",
// //   "mode": "cors"
// // }).then(res=>{
// //     const dest = fs.createWriteStream('./html/main.html');
// //     res.body.pipe(dest);
// // })
fetch("https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "font",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-data": "CKS1yQEIirbJAQimtskBCMS2yQEIqZ3KAQiMnssBCKGgywEI7/LLAQjN9ssBCLP4ywEInvnLAQj6+csBCMP9ywE="
  },
  "referrer": "https://fonts.googleapis.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2');
    // res.body.pipe(dest);
    checkAndWrite('./html/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2',res)
})
fetch("https://fonts.gstatic.com/s/materialiconsextended/v108/kJEjBvgX7BgnkSrUwT8UnLVc38YydejYY-oE_LvJHMXBBA.woff2", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "font",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-data": "CKS1yQEIirbJAQimtskBCMS2yQEIqZ3KAQiMnssBCKGgywEI7/LLAQjN9ssBCLP4ywEInvnLAQj6+csBCMP9ywE="
  },
  "referrer": "https://fonts.googleapis.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/s/materialiconsextended/v108/kJEjBvgX7BgnkSrUwT8UnLVc38YydejYY-oE_LvJHMXBBA.woff2');
    // res.body.pipe(dest);
    checkAndWrite('./html/s/materialiconsextended/v108/kJEjBvgX7BgnkSrUwT8UnLVc38YydejYY-oE_LvJHMXBBA.woff2',res)
})
fetch("https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "font",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-data": "CKS1yQEIirbJAQimtskBCMS2yQEIqZ3KAQiMnssBCKGgywEI7/LLAQjN9ssBCLP4ywEInvnLAQj6+csBCMP9ywE="
  },
  "referrer": "https://fonts.googleapis.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2');
    // res.body.pipe(dest);
    checkAndWrite('./html/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',res)
})
fetch("https://material.io/resources/color/assets/images/codepen-logo.svg", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/assets/images/codepen-logo.svg');
    // res.body.pipe(dest);
    checkAndWrite('./html/assets/images/codepen-logo.svg',res)
})
fetch("https://material.io/resources/color/assets/images/ic_material_24px.svg", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/assets/images/ic_material_24px.svg');
    // res.body.pipe(dest);
    checkAndWrite('./html/assets/images/ic_material_24px.svg',res)
})
fetch("https://material.io/resources/color/libs/codepen-demos/mdc-components/mdc-components.html", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/libs/codepen-demos/mdc-components/mdc-components.html');
    // res.body.pipe(dest);
    checkAndWrite('./html/libs/codepen-demos/mdc-components/mdc-components.html',res)
})
fetch("https://material.io/resources/color/assets/images/material_logo.svg", {
  "headers": {
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "image",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/styles/app-2bc402abea.css",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/assets/images/material_logo.svg');
    // res.body.pipe(dest);
    checkAndWrite('./html/assets/images/material_logo.svg',res)
})
fetch("https://material.io/resources/color/assets/images/material_wordmark-dark.svg", {
  "headers": {
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "image",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/styles/app-2bc402abea.css",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/assets/images/material_wordmark-dark.svg');
    // res.body.pipe(dest);
    checkAndWrite('./html/assets/images/material_wordmark-dark.svg',res)
})
fetch("https://material.io/resources/color/assets/images/color_light.svg", {
  "headers": {
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "image",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/styles/app-2bc402abea.css",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html//assets/images/color_light.svg');
    // res.body.pipe(dest);
    checkAndWrite('./html//assets/images/color_light.svg',res)
})
fetch("https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "font",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-data": "CKS1yQEIirbJAQimtskBCMS2yQEIqZ3KAQiMnssBCKGgywEI7/LLAQjN9ssBCLP4ywEInvnLAQj6+csBCMP9ywE="
  },
  "referrer": "https://fonts.googleapis.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2');
    // res.body.pipe(dest);
    checkAndWrite('./html/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2',res)
})
fetch("https://fonts.gstatic.com/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "font",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-client-data": "CKS1yQEIirbJAQimtskBCMS2yQEIqZ3KAQiMnssBCKGgywEI7/LLAQjN9ssBCLP4ywEInvnLAQj6+csBCMP9ywE="
  },
  "referrer": "https://fonts.googleapis.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2');
    // res.body.pipe(dest);
    checkAndWrite('./html/s/robotomono/v13/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2',res)
})
fetch("https://material.io/resources/color/assets/images/components/droplet.svg", {
  "headers": {
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "image",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/styles/app-2bc402abea.css",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/assets/images/components/droplet.svg');
    // res.body.pipe(dest);
    checkAndWrite('./html/assets/images/components/droplet.svg',res)
})
fetch("https://material.io/resources/color/assets/images/components/colorwheel-selector.png", {
  "headers": {
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "image",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/styles/app-2bc402abea.css",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/assets/images/components/colorwheel-selector.png');
    // res.body.pipe(dest);
    checkAndWrite('./html/assets/images/components/colorwheel-selector.png',res)
})
fetch("https://material.io/resources/color/libs/codepen-demos/mdc-components/mdc-components.css", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/libs/codepen-demos/mdc-components/mdc-components.css');
    // res.body.pipe(dest);
    checkAndWrite('./html/libs/codepen-demos/mdc-components/mdc-components.css',res)
})
fetch("https://material.io/resources/color/libs/codepen-demos/mdc-components/mdc-components.js", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.2.682063148.1629876102; _gid=GA1.2.1595024389.1629876102; _gat=1"
  },
  "referrer": "https://material.io/resources/color/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/libs/codepen-demos/mdc-components/mdc-components.js');
    // res.body.pipe(dest);
    checkAndWrite('./html/libs/codepen-demos/mdc-components/mdc-components.js',res)
})
fetch("https://storage.googleapis.com/demos-in-spec/images/android-bottom.png", {
  "headers": {
    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "image",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "cross-site",
    "x-client-data": "CKS1yQEIirbJAQimtskBCMS2yQEIqZ3KAQiMnssBCKGgywEI7/LLAQjN9ssBCLP4ywEInvnLAQj6+csBCMP9ywE="
  },
  "referrer": "https://material.io/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(res=>{
    // const dest = fs.createWriteStream('./html/demos-in-spec/images/android-bottom.png');
    // res.body.pipe(dest);
    checkAndWrite('./html/demos-in-spec/images/android-bottom.png',res)
});

