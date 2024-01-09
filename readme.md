# File based routing in React Native  

Using Expo Router within a managed expo project enables file based routing for the application. If you are familar with modern web meta frameworks such as NextJS or Nuxt,
you will have experienced file based routing. However this is something novel for the mobile world, once you have installed and set up Expo Router this enables the developer to create a file inside of the app directory and this automatically creates a screen that is accessible without having to set up React Navigation manually. Expo Router is built on top of React Navigation so you still have access to familiar API's.

### Why this is cool  

**More opinionated way of structuring applications**  
Traditionally there isn't a _go to way_ of creating a React Native application. There are certainly best practices,
but more often than not each React Native project could look completely different, requiring the developer to adapt
each time. This enforces a strict way of structuring the application that is relatively simplistic and easier to reason with now each file inside of the app directory is a screen. The convention is to name them in a way to match the route, which improves efficiency of the developer onboarding and overall cognitive load.

**More familiar to web developers who may want to contribute to the application**  
With common web frameworks making use of this paradigm, it makes the codebase more accessible to web developers. It allows them to look at the project and understand how it works, and will need less support to make contributions to the codebase.

**Comprehensive deep linking out of the box**  
Deep Linking is something that is often an after thought when creating mobile applications, however, with Expo Router you get this out of the box. Each route is a link and they can be nested just like you would on the web.

**Typed routing**  
The routes are typed, this means you get autocomplete when writing, which improves the developer experience. You get the hint right there in your IDE vs having to find the name of a specific screen manually.

**Layouts**  
You can create a `_layout.tsx` which works as a wrapper component for your screens, allowing you to have less repetition in your code. These can also be nested, I found this helps with the overall readability of the codebase as you spend less time looking for components inside of components.

### Some draw backs  

**If you don't like file based routing this won't be for you**  
File based routing isn't for everyone, and that is fair, so this may not be the solution for you.

**Feels like magic**  
As a lot of the traditional navigation code is hidden away, it can feel like magic and in some more complex scenarios this could become a pain.

**It is novel**  
Expo Router hasn't been widely used at this point, so could feel risky to introduce.

## Getting our hands dirty  

I feel like explaining this only goes so far, so that is why I created this repo so you can play with it as well. This repo is an Expo project so all you should have to do is pull it down, install the dependencies (I have used yarn for demo), and run `npx expo start -c`.

### Explaining the codebase  

The way Expo Router works, is every file inside of the app directory is equal to a screen/route. For example if you wanted an "about" route, you would do this by creating an `about.tsx` file. `index.tsx` similar to the web will be the entry point and you would use this for your initial screen of your application. You can also create directories with the name of your route with an `index.tsx` file e.g. `app/about/index.tsx` which is equal to creating `about.tsx`.

`_layout.tsx` files are wrappers for the files in that directory, so having a layout file in the root of /app means every route in there will be wrapped by that layout. If you have a `<Stack />` component the the Layout this means that every screen will have a header at the top of the screen.

To restrict routes, this doesn't change too much from how you would do this with React Navigation. However, some of the paradigms in Expo Router simplifies some aspects of it. You can add the logic that authenticates a user in a `_layout.tsx` file, therefore that logic only has to be maintained in one file. You can also split the application up using the bracket convention e.g. you could have two directories `(login)` and `(app)`, the brackets mean that login and app are optional in the URL structure. The files within can be accessed from the base of the route. This makes a nice way of organising the application and simplifying the route login without having to reset the stack manually. 

How did we create the tabs? This is very similar to the layout in the root, except instead of a `<Stack/>` we use the `<Tabs />` component, as this is built on top of React Navigation we start to see those familiar api's appear. I have hidden the headers that appear in the tabs, the reason is just so you can navigate back to the home screen, this is mostly a quirk for this demo as usually you wouldn't do this in a real application, but this is just to show how this all hangs together. I made use of the Ionic icons just to show an exmple of how you would add icons to the tabs.

You can also have dynamic files, e.g. if you have a news app and you wanted to link to individual enteries you can have a file that looks like `[slug].tsx`, the square brackets signify that this is a dynamic route, and the "slug" is the label, so this can be referenced in the code to fetch data specifically for that page.

You will see the Button component on the home screen wrapped in a `<Link />` component. The `<Link />` component similar to an `<a>` tag in HTML is used to navigate to other screens. You can see the URL structure in the href is very similar to the web, but this also represents the deep linking that is within the application. You can probably see how this could be a very powerful feature for linking into the application and also for how it simplifies the code required for navigating to different routes programmatically.

Hopefully you can see the power of this, with very little code written we have a home screen, a tabs screen, and an opinionated layout that looks very similar to projects web developers are used to. It has the potential to make the codebase more accessible to the wider team and to allow them to become confident quicker.
