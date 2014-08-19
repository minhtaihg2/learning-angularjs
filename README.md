learing-angularjs
=================

###Step by step buiding web/app with AngularJS

#### Step 1

We will need certain files for our application like bootstrap and of course angular. We will tell bower to grab those components for us.

Bower is a great frontend tool to manager your frontend resources. You just specify the packages you need and it will go grab them for you. Here’s an article on getting started with bower.

First we will need Bower installed on our machine. Just type in npm install -g bower into your console.

After you have done that, you will now have access to bower globally on your system. We will need 2 files to get Bower working for us (.bowerrc and bower.json). We’ll place both of these in the root of our document.

.bowerrc will tell Bower where to place our files. bower.json is similar to package.json and will tell Bower which packages are needed.

```javascript
{
    "directory" :"libs" 
}
```

bower.json

```javascript
{
  "name": "libs for bower",
  "version": "0.1",
  "dependencies": {
    "angular": "~1.2.22",
    "bootstrap": "~3.2.0",
    "font-awesome": "~4.1.0",
    "angular-ui-router": "~0.2.10"
  }
}
```

### Create ReourceService

```javascript
 return $resource(appConfig.apiHost + '/:api/:table/:id',
            {
                api: 'api',
                table: '@table',
                id: '@id'
            }
            , { 'get': {method: 'GET', params: {}},
                'save': {method: 'POST', params: {}},
                'query': {method: 'GET', isArray: true},
                'remove': {method: 'DELETE', params: {}},
                'delete': {method: 'DELETE', params: {}} })
```