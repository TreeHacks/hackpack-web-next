# hackpack-web-next

Write a website using React and Express using [Next](https://nextjs.org) that creates a Pokedex.

## Getting started
This hackpack is designed to get you up and running with making a website using React and Express. You will make a site that grabs data from the [PokéApi](https://pokeapi.co/) and allows users to create their own Pokédex!

### What is Next JS?
Next JS is a framework that allows you get started with React and server-side code quickly. It comes with built-in features like routing, hot module replacement, server-side rendering, and code splitting which improve performance and might otherwise be a **huge** pain to implement yourself.

### Get started
Clone this repository locally and install dependencies:
```
git clone https://github.com/TreeHacks/hackpack-web-next.git
npm install
```
To start, run the following:
```
npm start
```

You can open the website if you go to http://localhost:3000. Note that now, the terminal will watch for changes in your code and automatically recompile your code and also . Try changing some text in `pages/index.js` and the site should immediately change. This is called [Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)!

![image](https://user-images.githubusercontent.com/1689183/52835583-e0bc1f00-309b-11e9-8c2e-e067bd5290d4.png)


### Ideas for improvements
- We are just storing the data temporarily, so when the user refreshes the page their Pokémon are gone! Can you use a database such as MongoDB instead
- Can you add an accounts system with authentication? Maybe even a "sign in with Google" or a "sign in with Facebook" feature?
- [Deploy this app](https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages) to Github pages!
- Feel free to make a PR with any additional improvements!

### License
MIT

# About HackPacks 🌲

HackPacks are built by the [TreeHacks](https://www.treehacks.com/) team to help hackers build great projects at our hackathon that happens every February at Stanford. We believe that everyone of every skill level can learn to make awesome things, and this is one way we help facilitate hacker culture. We open source our hackpacks (along with our internal tech) so everyone can learn from and use them! Feel free to use these at your own hackathons, workshops, and anything else that promotes building :) 

If you're interested in attending TreeHacks, you can apply on our [website](https://www.treehacks.com/) during the application period.

You can follow us here on [GitHub](https://github.com/treehacks) to see all the open source work we do (we love issues, contributions, and feedback of any kind!), and on [Facebook](https://facebook.com/treehacks), [Twitter](https://twitter.com/hackwithtrees), and [Instagram](https://instagram.com/hackwithtrees) to see general updates from TreeHacks. 