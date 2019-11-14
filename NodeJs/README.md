## REQUIREMENTS

### NodeJS Lab Setup:
1. NodeJS: node -v: 10.x / 12.x
2. VS.Code
3. Chrome
4. MongoDB Server
5. Mongo Compass (GUI)

### MongoDB Server (Not Cloud)
    v4.2.1 - 2019.11.14
    https://www.mongodb.com/download-center/community

### MongoDB Client: GUI
    v1.19.12 - 2019.11.14
    https://www.mongodb.com/download-center/compass

## NodeJs

- Built on top of Chrome's V8 Engine
- JS anywhere outsode browsers
- Single Threaded
- Build JS Servers
- replaced all client side api with server side apis
- Server APIs
  - FS
  - HTTP
  - NET
  - Process

- Browser APIs (These are replaced by Server APIs)
  - XHR
  - DOM
  - Timer

## Initialize New Project
Creating a new Project
```npm init```

### Create a New file "server.js"
```javascript
function Run()
{
    console.log("funcType1 Called");
}
Run();
```

### Executing project
```node server.js```

## Module Exports

```javascript
// Type 1
function funcType1()
{
    console.log("funcType1 Called");
}

module.exports = // default export
{
    run : funcType1 // revealing Module Pattern
}

// Type 2
module.exports.funcType2 = function()
{
    console.log("funcType2 Called");
}

//Type 3

function funcType3()
{
    console.log("funcType3 Called");
}

module.exports.run3app = funcType3;
```


## Node Monitor - NodeMon
Monitor code, start and stop the server
restart in case of crashes

### Installing NodeMon Globally

```npm install -g nodemon```

### Starting Node Mon
```nodemon server.js```

### Autostart NodeMon
Change package.json
```json
"scripts": {
    "start" : "nodemon server.js"
  },
```

## File IO
Default is Async file IO type