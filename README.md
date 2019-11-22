# cogentemr

Fresh Workspace built with  Lerna, Yarn workspace and React Workspace for Cogent Health


#Create new module

```$xslt
$ npx create-react-app --scripts-version @react-workspaces/react-scripts new-module-name
```

#Eject
After ejecting the project module, add
```$xslt
"@react-workspaces/react-scripts": "3.0.1-alpha-07"
```
dependency in your module's `package.json` file.

And, change 
```$xslt
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
```
**to**
```$xslt
"react": "^16.11.0",
"react-dom": "^16.11.0",
```
Also, change **react-scripts** to use
```$xslt
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
```

instead of **node-scripts**