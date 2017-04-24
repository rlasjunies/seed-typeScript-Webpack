How to avoid relative import in Typescript

```js
import * as mySharedLib from "../../../shared" 
```
but have absolute
```js
import * as mySharedLib from "shared/mySharedLib" 
```

in `tscoonfig.ts` :

```js

{  
    "compilerOptions": {
        //...
        "baseUrl": "src",
        //...
    }
}
```
> the `"path"`attribut of the file is not needed

in the `webpack.coinfig.js` do something equivalent, use `path.resolve('.src')` in the resolve/module.

```js
//...
resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules'
    ],
    extensions: ['.ts', 'tsx']
  },
//...
```

> credits:  
https://www.reddit.com/r/typescript/comments/5vqqjy/say_goodbye_to_in_your_typescript_imports/
