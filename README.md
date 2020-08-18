# Frontend Test

## Stack
For this frontend app, I used the following "crucial" dependencies:
- React (of course)
- React router
- Material UI
- Jest
- React testing library (nope, no enzyme here folks)
- Axios
- JSS (love it)
- clsx
- prop-types
- build-url
  
_and of course_
- ESLint
- Prettier

## Architecture choices
Like in the beginning of all starting project, you must decide how will your approach be to solve the task ahead. And this was no different.
Lets start by showing and explaning the app tree

> Aplication file tree
```
src
|-- components
|   |-- 404
|   |   |-- 404.test.js
|   |   |-- NotFound.js
|   |   |-- index.js
|   |   `-- styles.js
|   |-- Alert
|   |   |-- Alert.test.js
|   |   |-- SnackbarAlert.js
|   |   `-- index.js
|   |-- Dialog
|   |   |-- CreateDialog.js
|   |   |-- Dialog.test.js
|   |   |-- MessageDialog.js
|   |   |-- index.js
|   |   `-- styles.js
|   |-- Icon
|   |   |-- Icon.test.js
|   |   |-- Logo
|   |   |   |-- Logo.js
|   |   |   `-- index.js
|   |   |-- Note
|   |   |   |-- PaperNote.js
|   |   |   `-- index.js
|   |   |-- Share
|   |   |   |-- Share.js
|   |   |   `-- index.js
|   |   |-- Trash
|   |   |   |-- Trash.js
|   |   |   `-- index.js
|   |   |-- index.js
|   |   `-- styleJss.js
|   |-- Input
|   |   |-- Input.js
|   |   |-- Input.test.js
|   |   |-- SearchInput.js
|   |   |-- index.js
|   |   `-- styles.js
|   |-- Loader
|   |   |-- EchoLoader.js
|   |   |-- Loader.test.js
|   |   |-- PageLoader.js
|   |   |-- index.js
|   |   `-- styles.js
|   |-- Message
|   |   |-- Message.test.js
|   |   |-- NoData.js
|   |   |-- index.js
|   |   `-- styles.js
|   |-- Picker
|   |   |-- BadgePicker.js
|   |   |-- Picker.js
|   |   |-- Picker.test.js
|   |   |-- index.js
|   |   `-- styles.js
|   `-- Tooltip
|       |-- ShareTooltip.js
|       |-- Tooltip.test.js
|       |-- index.js
|       `-- styles.js
|-- constants
|   |-- examples.js
|   |-- index.js
|   `-- routes.js
|-- index.js
|-- services
|   |-- common.js
|   |-- index.js
|   `-- settings.js
|-- utils
|   |-- CounterContext.js
|   |-- fonts
|   |   `-- Metropolis-Regular.otf
|   |-- index.js
|   `-- palette.js
|-- validations
`-- views
    |-- counters
    |   |-- components
    |   |   |-- BottomAppBar.js
    |   |   |-- DataList.js
    |   |   `-- ListHeader.js
    |   |-- containers
    |   |   `-- CounterList.js
    |   |-- index.js
    |   |-- model.js
    |   `-- styles.js
    |-- index.js
    `-- welcome
        |-- containers
        |   `-- Welcome.js
        |-- index.js
        `-- styles.js
```

As you can see, the _main_ folders are:
- `components`
- `constants`
- `services`
- `utils`
- `validations`
- `views`

Lets proceed now to the explanation! Because thats why we are reading this, aren't we?

- `components`: The objective of this folder is to group in one place all the common and rehusable components, were inside they are subdivided by context, making easy and fast to navigate through them and find that one you've always been looking for. Inside of each subdivided context folder, theres a `index.js` file wich exports all the components of the context, making it possible to import them using the following syntax (example below), the component file, a common `styleJss.js` file and its respective tests:
  ```
  import Component from '@components/Icon/Note/PaperNote'
  ```
  and
  ```
  import { Component } from '@components/Icon/Note'
  ```
  and
  ```
  import { Component } from '@components/Icon'
  ```
- `constants`: Here is where you declarate all the constants variables you use in your entire project, including your app routes
- `services`: Well, this is a interesting one! The whole point of this folder is to host the helpers files related to http requests. In the index file you find one exported function for each single method of requests (in this case it was only needed GET, POST and DELETE), making them available through the application and saving the cost of declarate an axios call in each part its needed. In the settings file you find an easy way to organice your API routes, paths and a URL builder (easy and clean way to get a complex URL). And last but not least, the common file purpose is to export common responses function used from your http request (for example, if you manage a global state of your app, here is where you want to place your dispatch to set it to IDLE, PENDING, SUCCESS or ERROR)
  ```
  export const onGetCounterList = () =>
    getFromApi({
      url: settings.buildUrl(settings.urls.apiUrl, settings.path.listCounters),
      onSuccess,
      onError,
      onPending,
    });
  ```
- `utils`: As you can tell by its name, the purpose of this folder is to host the common and rehusable functions to use through all the app (like a currency formatter for example)
- `validations`: Although not completely needed in this project (cuz we do not have complex forms), I thought it was a nice touch to leave it there
- `views`: This is where all the fun happens! Here, theres two level of routes, the main one, and the context one, where the whole point of this architecture is to group by context all the views in your app (in this case, welcome and counters). Inside of each context, theres a components folder, a containers folder, index file, model file and style file. 
  - Components folder is where all the "stupid" component of the context lives, and by "stupid" I dont mean it disrespectfuly but that they dont manage much of the main logic, basically being just presentational. 
  - Containers folder is where "controllers" of each view are, they are logic densed files and they render all the presentational components.
  - Index file is the route of the context. Sadly, theres not much in this case of app, but it helps organizing your code (by splitting it)
  - model file is where all the functions that interacts with APIs (thus the helper described above) lives (context scoped obviously)
  - style file it's autoexplicative. JSS stuff of your context



## Scripts available
- ```npm start```
- ```npm run test```

_please remember to run first ```npm i```!_

> This app was developed using gitflow model, although i really prefer trunk based development...

And thats about it! Given the little time for coding this POC, the test where only made for the components, and their behaviour, and no docker nor storybook :(

Enjoy!


# Francisco Castillo González