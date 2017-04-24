It could be time consuming, boring, ugly to import file by file

```js
//...
import { Class1, Int1, Func1 } from "sharedLibs/lib1"
import { Class2, Int2, Func2 } from "sharedLibs/lib2"
//...
```

just create an `index.ts` at the root of your folder `sharedLib` and export the child libs from this folder


file: `sharedLibs\index.ts`
```js
export * from "./lib1"
export * from "./lib2"
```

Then in all your files:
```js
//...
import { Class1, Int1, Func1, Class2, Int2, Func2 } from "sharedLibs"  
// or
import * as share from "sharedLibs"
//...
```

