INSTALLING.Build react on you computer (https://www.youtube.com/watch?v=tuxt25oaous) (https://www.codecademy.com/learn/learn-express)

Instruction video for below contents: (https://www.youtube.com/watch?v=vi_MzFyosSA)
REACT ROUTER
Installing React Router
Jan 2022 Update: This project is meant to be written using React Router v5. React Router v6 introduces breaking changes and your project will not work using these instructions if you install v6. Check out React Router’s documentation to learn more about upgrading from v5 to v6.

In order to use React Router, you will need to include the react-router-dom package (the version of React Router built specifically for web browsers) in your project by using npm like so:

npm install --save react-router-dom@5.2.0
Once you have added react-router-dom to your project, you can import one of its router components to add routing to your project. React Router provides several router components however the most common one is the BrowserRouter. The other option and the reasons you might choose one over the other are outside the scope, but you can read more about that here.

For the sake of simplicity and readability, it is common to alias BrowserRouter as Router when importing, like so:

import { BrowserRouter as Router} from ‘react-router-dom’
Instructions
888888888888888  Task 1  8888888888888888888
Before we can install react-router-dom, we need to install all of the dependencies for this project. This can be done by running the command below in your terminal:

npm install
Hint

In the root directory of the project, run the command
npm install
You should see a folder called node_modules appear in your file system.

888888888888888888 Task 2  888888888888888888
Next, install react-router-dom@5.2.0.

To verify that you have successfully added the package to your project, navigate to package.json and check that react-router-dom appears in the “dependencies”.

Hint

Your terminal command should look like this:
npm install --save react-router-dom@5.2.0
88888888888888888888  Task 3  8888888888888888
In App.js import BrowserRouter from react-router-dom and rename it to Router.

To confirm that you’ve followed these steps properly, run npm start in your terminal to start your application. Then, inspect the console and you should see no red errors related to react-router-dom (you may see yellow warnings though!).

Hint

The syntax for importing a component and renaming it looks like this:
import { ComponentName as AliasName } from `name-of-package`;
=========================

https://www.youtube.com/watch?v=pzxHs_2b62Y
REACT ROUTER
Rendering A <Router>
In the React Router paradigm, the different views of your application, also called routes, along with the Router itself, are just React components. To include them in your application, you will need to render them.

The first step is to render a Router component as the top-level component in your application.

import { BrowserRouter as Router } from 'react-router-dom';
 
export default function App () {
  return (
    <Router>
      {/* Application views are rendered here */
    </Router>
  )
}
 
Making Router the top-level component prevents URL changes from causing the page to reload. Instead, URL changes will allow the Router to determine which of its child components to render while passing along information about the current URL’s path as props.

In the next exercises, you will see how the children of the Router can make use of this information but for now, let’s add a Router to our application.

Instructions
88888888888888888888888888 Task 1 8888888888888888888888888 
To add routing to your application, in App.js, replace the <div> component which currently surrounds the entire application’s contents with a Router component.

Hint

At this point, the `App` component should return the following:
<Router>
  <Header />
  <main>
    {/* Add Routes here! */}
  </main>
  <Footer />
</Router>
=================
REACT ROUTER: https://www.youtube.com/watch?v=vBq-olSb7hc
Basic Routing with <Route>
With the Router component in place, we can begin defining the different views, or routes, that our application will render for various URL paths. For example, we might want to render an About component for the /about path and a SignUp component for the /sign-up path.

To do this, we must use the Route component provided by the react-router-dom package. This component can be imported alongside the BrowserRouter like so:

import { BrowserRouter as Router, Route } from `react-router-dom`
The Route component is designed to render (or not render) a component based on the current URL path. Each Route component should:

be rendered inside a Router.
have a path prop indicating the URL path that will cause the route to render.
wrap the component that we want to display in the event that the path prop matches.
For example, the following Route renders the About component when the URL path matches '/about':

<Router>
  <Route path='/about'>
    <About />
  </Route>
</Router>
If your router includes a Route with no path prop, then that route will always match and render. You can leverage this fact to make your application render components that you want your user to see regardless of the current route, such as sidebars and navigation bars.

<Router>
 
  {/* Renders when the URL matches '/about' */
  <Route path='/about'>  
    <About />
  </Route>
 
  {/* Always renders */}
  <Route>
    <Sidebar />
  </Route>
 
</Router>
Whereas other routing paradigms are static (eg. routes are predefined prior to and separate from the process of rendering), React Router’s philosophy is declarative and dynamic. This means that routes come into being when they are rendered. While this might seem more complicated than configuring our routes statically, it’s also more flexible. As you’ll see throughout this lesson, our application’s route structure can evolve based on user interactions and changing state.

Instructions
888888888888888888888888 Task 1 88888888888888888888888
Navigate to App.js where we will begin adding routes to our Router. First, add the Route component to the import statement.

Hint
88888888888888888888888 Task 2 8888888888888888888888888
Next, let’s render the main routes of the application. As you can see, at the top of App.js a number of components are being imported but not used. For now, we’ll render the About, SignUp, Articles, Categories, and Profile components.

Between the <main> tags, use the Route component to render the following components for their respective paths:

About: /about
SignUp: /sign-up
Articles: /articles
Categories: /categories
Profile: /profile
Hint
888888888888888888888888 Task 3 8888888888888888888888
Test that your code works by navigating to these URLs in your browser. For example, to see the About component, navigate to http://localhost:3000/about.

You should see each component render only when the URL matches the appropriate path. You should see the Header and Footer rendered regardless of the URL.
============================
Linking to Routes: https://www.youtube.com/watch?v=UQxK1Np5-kI

In the last exercise, you used the URL bar to navigate to a path that matched one of your application’s routes. But how do you navigate from within the app itself?

When building a website using HTML, the anchor (<a>) tag can be used to create links to other pages, however, this causes the page to reload which can distract our users from the immersive experience of our smooth React application!

React Router offers two solutions for this: the Link and NavLink components which can be imported from react-router-dom on their own or alongside the other components we’ve already imported.

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
Both Link and NavLink components work much like anchor tags:

They have a to prop that indicates the location to redirect the user to (similar to the anchor tag’s href attribute)
They wrap some HTML to use as the display for the link
<Link to="/about">About</Link>
<NavLink to="/about">About</NavLink>
The two links above will generate anchor (<a>) tags with the text “About” and which take the user to the /about page when clicked. However, the default behavior of an anchor tag – refreshing when the page loads – will be disabled!

So, what’s the difference between a Link and a NavLink? When the URL path matches a NavLink component’s to prop, the link will automatically have an 'active' class applied to it. This can be quite useful for building navigation menus, as we can define CSS styles for the .active class name to differentiate between active and inactive links, enabling a user to quickly see which content they are viewing.

NavLink components also accept an optional activeClassName prop which can specify an additional class or set of classes that will be applied when the URL path matches their to prop.

Note: Though the simplest way to specify the to location is as a string, React Router also allows you to provide this location as a function or object. These approaches aren’t covered in this lesson but you may find it interesting to read about them if you need to programmatically generate the to location.

Instructions
8888888888888888888888 Task 1 888888888888888888888
Head over to Articles.js located in the src/components/. This component renders a list of <a> links for each value in the filteredArticles array. If you try clicking on these links in the running application, you’ll notice a very subtle page reload (pay attention to the “refresh” button in your browser)!

Import the Link component into this file and then replace the <a> tags to eliminate the page reload!

Note: The articles themselves won’t appear yet. We’ll fix that soon!
Using LINK or NAVLINK instead of A HREF linking; avoid refreshing the whole page. 
Hint

Take a look at the Categories.js file to see how this is done. Your code should look something like this:

<Link to='/path/to/page'>
  Link Text
</Link>
888888888888888888888888888 Task 2 888888888888888888888888
In the running application, try clicking on the links rendered by the Header, such as “Articles”. Again, you may notice a page refresh.

Open up the Header.js file and you’ll see that these links are rendered using plain old <a> tags!

First, import the NavLink component into the Header.js file. Then, inside the return statement of the Header component, replace each instance of the <a> tag with a NavLink component.

Make sure to replace the href attribute with the to prop!

Hint

You will have to import the NavLink component from react-router-dom.

To render a NavLink, include a to prop like so:

<NavLink to="/path">Click Me</NavLink>
8888888888888888888888888888888 Task 3 8888888888888888888888888888
To verify your work, try clicking on the navigation links. You should notice that the page no longer refreshes! Furthermore, you’ll notice that link that you click on will be bolded!

Hint

Recall that the .active class is automatically added when the URL matches the to prop of a NavLink. If you open up the public/index.css file, you’ll see that we’ve defined a style for the selector .header a.active.
===================
Dynamic Routes; https://www.youtube.com/watch?v=h7ZTdTFcv-w
So far, all the routes we’ve covered have been static, which means they match a single unique path. This works for certain types of routes, but not all.

For example, imagine in a tech news site where every article is accessible at the path '/articles/' + someTitle where someTitle is different for each article. Specifying a unique route for every article would not only be verbose and time-consuming, it would require an impractical amount of maintenance should the path structure ever change.

Instead, we would rather express the pattern at a high level with a single route that can match any path of the form '/articles/' + someTitle and still know which article to render. React Router allows us to do this by using URL parameters to create dynamic routes.

URL parameters are dynamic segments of a URL that act as placeholders for more specific resources the URL is meant to display. They appear in a dynamic route as a colon (:) followed by a variable name, like so:

<Route path='/articles/:title'>
  <Article />
</Route>
Let’s break down this short, yet powerful demonstration of URL parameters:

In this example, the path '/articles/:title' contains the URL parameter :title.
This means that when the user navigates to pages such as '/articles/what-is-react' or '/articles/html-and-css', the <Article /> component will render.
When the Article component is rendered in this way, it can access the actual value of that :title URL parameter (what-is-react or html-and-css) to determine which article to display (more on this in the next exercise).
A single route can even have multiple parameters (eg. '/articles/:title/comments/:commentId') or none (eg. '/articles').

To make a URL parameter optional, you can append a '?' to the end of the URL parameter’s name (eg. '/articles/:title?'). In this case, the child component of the Route will render when the URL matches either /articles/what-is-react or just /articles.

Instructions
888888888888888888888888888 Task 1 88888888888888888888888888888
Navigate to App.js. Within the <main> section, add a dynamic route with a URL parameter that renders the Article component whenever the URL path matches paths such as '/articles/objects' or '/articles/browser-compatibility'.

Name the URL parameter in the route’s path prop :title.

To confirm that your code works, navigate to http://localhost:3000/articles/objects or try clicking on one of the links in the /articles page.

Hint

To add a dynamic route, render the Route component and make sure that its path prop includes a dynamic segment (a segment beginning with a colon). Your code should look like this:

<Route>
  <MyComponent path='/path/:param' />
</Route>
8888888888888888888888888888 Task 2 8888888888888888888888888
Add another dynamic route with a URL parameter that renders the Author component whenever the URL path matches paths such as '/authors/maria' or '/authors/samir'.

Name the URL parameter in the route’s path prop :name.

To confirm that your code works, navigate to http://localhost:3000/authors/Lily. You should see the header “Articles by REPLACE ME” rather than the articles by the author Lily. In the exercise, we’ll fix this.
============================

useParams: https://www.youtube.com/watch?v=3p1LfoCwcmE
useParams
It is common to use the value of URL parameters to determine what is displayed in the component that a dynamic route renders. For example, the Article component might need to display the title of the current article.

React Router provides a hook, useParams(), for accessing the value of URL parameters. When called, useParams() returns an object that maps the names of URL Parameters to their values in the current URL.

For example, consider the Articles component below which is rendered when by a route with the dynamic URL '/articles/:title'. Suppose the user visits /articles/objects:

import { Link, useParams } from 'react-router-dom';
 
// Rendered when the user visits '/articles/objects'
export default function Article() {
 
  let { title } = useParams();
  // title will be equal to the string 'objects'
 
  // The title will be rendered in the <h1>
  return (
    <article>
      <h1>{title}</h1>
      // ...
    </article>
  );
}
Let’s break down the example above.

First, the useParams() hook is imported from react-router-dom.
Then, inside the Article component, useParams() is called which returns an object.
Destructuring assignment is then used to extract the value of the URL parameter from that object, storing it in a variable named title.
Finally, this title value is used to display the name of the article in the <h1> element.
Instructions
88888888888888888888888888 Task 1 88888888888888888888888888
You may have noticed that navigating to the various /articles/:title paths will render an Article component that displays the proper article. However, this doesn’t work as well when navigating to a specific author’s page.

Take a look at the Article.js file and you can see that the useParams() hook has been imported and used. Let’s do the same thing with the Author.js file.

First, in Author.js, import useParams from 'react-router-dom'.

Hint

Use the named import syntax:

import { value } from 'name-of-package';
88888888888888888888888 Task 2 888888888888888888888888888 
Now, at the top of the Author component, call useParams() to get the value of the :name URL parameter. You should use destructuring syntax to extract the value into a variable called name.

Hint

To get the value of a particular URL parameter, use destructuring assignment like so:

const { nameOfParameter } = useParams();
8888888888888888888888888  Task 3 8888888888888888888888 
Now that you have the value of name, let’s use it to display the correct data in the Author component.

First, on the line where we define author, replace the string "replace me" with the variable name.

Next, in between the <h1> tags we’ve provided, replace the text “REPLACE ME” with {name}.

To test that your code works, navigate to an article and click on its author. The Authors page should display the name that you just clicked on.

Hint

Watch the video to see how to complete this step!
=========================
<Switch> and exact  https://www.youtube.com/watch?v=6ryX7rVK3Dk

<Switch> and exact
By design, a Router will render all the Routes whose paths match the current URL. This allows us to compose layouts in which multiple components should appear or disappear based on the current URL (for example, an application in which the sidebar and main display respond to changes in the current URL). But sometimes, this design choice can produce unintended results.

Consider the following (relatively common) setup:

<Router>
  <div>
    <Route path='/articles/new'>
      <NewArticle />
    </Route>
    <Route path='/articles/:title'>
      <Article />
    </Route>
    <Route path='/articles'>
      <Articles />
    </Route>
  </div>
</Router>
What should happen when the user navigates to 'articles/new'? The NewArticle component should appear, right?

What actually happens is that ALL routes match:

/articles/new matches exactly
/articles/:title will match new to the URL parameter :title
/articles will match because both begin with /articles.
Because all routes match, the application will render the NewArticle, Article, and Articles components simultaneously.

React Router provides several mechanisms for preventing this sort of unintended rendering. The first is the Switch component:

import { Switch } from 'react-router-dom';
When wrapped around a collection of routes, Switch will render the first of its child routes whose path prop matches the current URL.

<Switch>
  <div>
    <Route path='/articles/new'>
      <NewArticle />
    </Route>
    <Route path='/articles/:title'>
      <Article />
    </Route>
    <Route path='/articles'>
      <Articles />
    </Route>
  </div>
</Switch>
Because the Switch checks routes sequentially, the order in which Routes are rendered matters. Consider a similar example but with the order of the routes reversed:

<Switch>
  <div>
    <Route path='/articles/:title'>
      <Article />
    </Route>
    <Route path='/articles/new'>
      <NewArticle />
    </Route>
    <Route path='/articles'>
      <Articles />
    </Route>
  </div>
</Switch>
Now imagine that a user navigates to '/articles/new'. The Switch renders the first route with a matching path, '/articles/new' matches '/articles/:title', since :title is a dynamic segment. With the routes listed in this order, the NewArticle component will never render. In general, you can avoid this problem by listing routes from most- to least-specific.

Sometimes you may want to leverage React Router’s composability and render multiple routes simultaneously (this would prevent you from using a Switch component) while also ensuring your router distinguishes between static paths and paths including URL parameters. Consider the following example:

<Router>
  <div>
    <Route path='/'>
      <Home />
    </Route>
    <Route path='/sign-up'>
      <SignUp />
    </Route>
  </div>
</Router>
Any path will match first route, so the the Home component will be rendered whether the user is at '/' or '/sign-up'. This might be ideal behavior if the component rendered by the '/' route should display regardless of the current route.

But what if you only want the Home component to be visible to users on the home page and not to those who have navigated to /sign-up? By using React Router’s exact prop on the first route, you can ensure that the route will match only if the current URL is an exact match.

 <Route exact path='/'>
   <Home />
 </Route>
Now, when a user visits /, the Home component will render. But when a user visits /sign-up, only the second route will match and only the SignUp component will render.

React Router provides a couple of additional props—strict and sensitive—on the Route component for fine-tuning when a particular route should match, however, these are used far less frequently than the exact prop.

Instructions
88888888888888888888888888888 Task 1 888888888888888888
If you navigate to /articles/objects, you will notice that the Article and Articles components both render. Let’s fix this by using a Switch component.

First, import the Switch component in App.js.

Hint

Import the Switch component from react-router-dom and wrap the existing routes in a Switch.

88888888888888888888888888 Task 2 8888888888888888888888
Next, use a Switch component to wrap all of the Route components inside the <main> section. Organize your Route components such that only the Articles component renders when you visit '/articles' and only the Article component renders when you visit /articles/objects.

Hint

Make sure to organize your components from most specific to least specific. In this case, the Route with the path '/articles/:title' should be above the Route with the path '/articles'.
================

Nested Routes; https://www.youtube.com/watch?v=Sv4Vhp-LfCw
Up to this point, we have been working with routers that are small enough to be rendered entirely in a single file. But as an application grows in scope, it can be useful to split up the router and write Routes nearer to where the related UI logic is written.

Let’s return to our tech article website example, and imagine that the engineering team is building out a Categories feature that will organize tech news articles by their category – front end, back end, mobile development, etc. In addition to a Categories component (which will render links to each individual category), the team has created a Category view that will display all the articles for a given category.

Previously, we might have written a router like this:

// In the top level App component
<Router>
  <Route path={'/categories/:categoryName'}>
    <Category />
  </Route>
  <Route path={'/categories'}>
    <Categories />
  </Route>
  {/* Other Routes */}
</Router>
There’s nothing wrong with this way of routing, but as soon as you start to introduce more features into your application, you may find that having all the routes contained in a single router becomes a bit unwieldy. The way around this is to get comfortable with rendering routes from components nested within your app.

For example, consider the Categories component, which iterates through a list of categories and creates Links for each category:

function Categories ({ categories }) {
  return (
    <ul>
      {
        categories.map(category =>
          <li>
            <Link to={`/categories/${category}`}>
              {category}
            </Link>
          </li>
        )
      }
    </ul>
  );
};
Clicking on a link rendered by this component will cause the URL to change, for example, to /categories/html. According to our previously defined Router, the route '/categories/:categoryName' will then match and the Category component will render.

Notice that the code for the Categories component doesn’t indicate which component will be rendered when the user clicks on one of the category links (it’s the Category component). We have to navigate back to the top-level App component file where the Router is defined in order to see that the Category component will be rendered when the URL changes to /categories/html. This separation of cause and effect is not ideal.

Because React Router handles routing dynamically (eg. routes exist when they are rendered), you can render a Route anywhere within your application. In this case, we can relocate the Route that renders an individual Category component to within the Categories component where the links to that route are defined:

import { Link, Route } from 'react-router-dom'
 
function Categories ({ categories }) {
  return (
    <div>
      <ul>
        {
          categories.map(category => 
            <li>
              <Link to={`/categories/${category}`}>
                {category}
              </Link>
            </li>
          )
        }
      </ul>
 
      <Route path={'/categories/:categoryName'}>
        <Category />
      </Route>
    </div>
  )
}
As a result, the top-level router can be simplified:

// In the top level App component
<Router>
 
  {/* The Category route has been removed. */}
 
  <Route path={'/categories'}>
    <Categories />
  </Route>
 
  {/* Other Routes */}
</Router>
Rewriting your routes this way makes it very obvious what will happen when the user clicks on a link. It also allows us to clean up our top-level router by removing the route for an individual category. Splitting routes up this way also makes an application more efficient since Routes are not always rendered. Instead, Routes are only rendered when the UI logic requires them to be.

Instructions
8888888888888888888888 Task 1 8888888888888888888888
In the running application, navigate to the sign-up form and choose a username. Then navigate to the new “Profile” link that will appear. The URL will change to /profile and you should see the username you just entered, followed by a link to an “Edit” page. Try clicking on this link – you’ll notice that the URL changes, but the page does not.

The EditProfileForm component should render when the URL changes to /profile/edit but it is currently not being rendered by the application. Let’s fix that with a nested routing approach.

First, open up Profile.js which can be found in the src/components/ folder.

888888888888888888888888888 Task 2 888888888888888888888
Notice that the EditProfileForm component is being imported into Profile.js but isn’t being used.

At the bottom of the <main> element returned by Profile, render EditProfileForm when the URL path matches /profile/edit.

To test your code, try clicking on the “Edit” button.

Hint

Notice that the EditProfileForm component is rendered alongside the Profile component, but only when the URL matches the path /profile/edit. Using a nested approach, we can choose to render both of these components at the same time for this particular URL.

If EditProfileForm were rendered in the App component’s Switch component, then only one would be rendered at a time.
=====================

useRouteMatch: https://www.youtube.com/watch?v=k05c1m6ozrc
In the previous exercise, we created a nested Link and Route in the Categories component.

// Ex: Create a link for the '/categories/html' page
<Link to={`/categories/${category}`}>
  {category}
</Link>
 
... 
// Ex: When the user visits `/categories/html`, a Category component is rendered
<Route path={'/categories/:categoryName'}>
  <Category />
</Route>
Route nesting improves the organization of Link and Route components in our application. As in the Categories component, it is common that nested Link and Route components stem from the same base URL (in this case, the /categories URL).

Instead of writing out the full URL path, it would be much more flexible if we could create relative paths based on the /categories URL. React Router provides a hook, useRouteMatch(), that makes it incredibly easy to do this.

Below, you can see the basic usage in a component called BandPage that gets rendered by the route '/bands/:band/'. Suppose that the user visits the page /bands/queen/. This page should render a list of relative Links based on the various songs by the band Queen. A Route is also created to render a SongPage for any chosen song:

import { useRouteMatch, Link, Route } from 'react-router-dom';
import { SongPage } from '../SongPage.js'
 
function BandPage ({ songs }) {
  let { path, url } = useRouteMatch();
 
  // path = '/band/:band'
  // url = '/band/queen' 
 
  // Render a list of relative Links and a Route to render a SongPage
  return (
    <div>
      <ul>
        {
          songs.map(songName =>
            <li>
              <Link to={`${url}/song/${songName}`}> 
                {category}
              </Link>
            </li>
          )
        }
       </ul>
 
       <Route path={`${path}/song/:songName`}>
         <SongPage />
       </Route>
     </div>
  )
}
Let’s break this down.

useRouteMatch() should be called inside a component and returns an object with a url and a path property. This object is sometimes referred to as the match object:
The path property contains the dynamic path pattern with URL parameters (eg. /bands/:band) and should be used for creating relative path props for Route components (eg. /bands/:band/songs/:songName)
The url property has the values of URL parameters filled in (eg. /bands/queen) and should be used for creating relative to props for Link components (eg. /bands/queen/songs/we_are_the_champions).
Let’s see how we can use these values within the Categories component to create relative routes to the Category component:

import { Link, Route, useRouteMatch } from 'react-router-dom'
 
function Categories ({ categories }) {
  let { path, url } = useRouteMatch();
 
  // path = '/categories'
  // url = '/categories' 
 
  // Even though path and url are the same in this case, use path for relative Routes and url for relative Links
  return (
    <div>
      <ul>
        {
          categories.map(category =>
            <li>
              <Link to={`${url}/${category}`}>
                {category}
              </Link>
            </li>
          )
        }
       </ul>
 
       <Route path={`${path}/:category`}>
        <Category />
       </Route>
     </div>
  )
}
Using the relative url and path values to generate the Link and Route components ensures that they accurately route the user to the correct URL regardless of the route that caused the Categories component to render.

Instructions
88888888888888888888888 Task 1 8888888888888888
Let’s now return to the Profile component. We want to use relative paths to construct the Link and Route components for the EditProfileForm component.

In src/components/Profile.js, import useRouteMatch from react-router-dom.

Hint

You can either add useRouteMatch to the list of existing imports, or import it on its own.

88888888888888888888888 Task 2 8888888888888888
Next, inside the Profile component, use destructuring assignment to get the url and path properties from the object returned by useRouteMatch.

Hint

Your code should look something like this:

const { valueA, valueB } = useRouteMatch();
888888888888888888888888888 Task 3 88888888888888888888
Refactor the Route and Link components by replacing hard-coded instances of /profile with the path and url values from useRouteMatch as appropriate.

Hint

Though both path and url will have the same value ('/profile'), it’s important to consistently use path when constructing Route components, and url when constructing Link components.

Your code may look like this (using plain string concatenation):

<Link to={url+"/edit"}>Edit</Link>
<Route path={path+"/edit"}>
  <EditProfileForm />
</Route>
or like this (using template literals):

<Link to={`${url}/edit`}>Edit</Link>
<Route path={`${path}/edit`}>
  <EditProfileForm />
</Route>
Note: The url and path values are mixed up in the video!

==================
<Redirect> https://www.youtube.com/watch?v=haQ-5XBKOcY
If you take anything away from this lesson, it should be that React Router treats everything as a component. To get fully comfortable using React Router in your code, you have to embrace this idea and the declarative coding style that follows from it. For the most part, this is pretty intuitive, but it can feel a bit counterintuitive when it comes to redirecting users.

To appreciate the declarative pattern, consider a common case for redirecting a user: a user wants to access a /profile page that requires authentication but is not currently signed in.

The Redirect component provided by React Router makes this easy! Like a Link or NavLink, the Redirect component has a to prop. However, once the Redirect is rendered, the user will immediately be taken to the location specified by the to prop:

import { Redirect } from 'react-router-dom'
 
const UserProfile = ({ loggedIn }) => {
  if (!loggedIn) {
    return (
      <Redirect to='/' />
    )
  }
 
  return (
    // ... user profile contents here
  )  
}
In this example, when the UserProfile component renders, if the loggedIn prop is false, then the Redirect component will be returned and then rendered, sending the user to the / page. Otherwise, the component will render normally.

Instructions
8888888888888888888888 Task 1 888888888888888888 
If you had been previously signed in, press the “Log Out” button. Then, manually navigate to http://localhost:3000/profile/ which will render the Profile component.

As you can see, the component will render but there will be no username to show. Instead, the Profile component should only be viewable if there is a user logged in and it should redirect the user to the SignUp page otherwise.

First, import Redirect from react-router-dom.

Hint

You may either add Redirect to the existing list of imports or you can import it on its own.

88888888888888888888888 Task 2 888888888888888888
Now, above the return statement in the Profile component, return a Redirect to the path '/sign-up' if loggedIn is false.

Test that your code works by first making sure that you are signed out. Then by revisiting /profile. You should be redirected to the /sign-up page.
===============
useHistory: https://www.youtube.com/watch?v=ozhqPr9Od6A

In the previous exercise you learned how to redirect declaratively by rendering a Redirect component that updates the browser’s current location. Though this approach follows React Router’s declarative coding style, it does introduce a few extra steps in the React rendering lifecycle:

The Redirect component must be returned
The Redirect is then rendered
The URL is then updated
And finally the appropriate route is rendered.
React Router also provides a mechanism for updating the browser’s location imperatively: the Router‘s history object which is accessible via the useHistory() hook.

import { useHistory } from 'react-router-dom';
The history object that useHistory() returns has a number of methods for imperatively redirecting users. The first and most straightforward is history.push(location) which redirects the user to the provided location.

Consider this example which immediately triggers a redirect back to the / page after a user successfully submits a <form>:

import { useHistory } from `react-router-dom`
 
export const ExampleForm = () => {
 
  const history = useHistory()
 
  const handleSubmit = e => {
    e.preventDefault();
    history.push('/')
  }
 
  return (
    <form onSubmit={handleSubmit}>
      {/* form elements */ }
    </form>
  )
}
By enabling imperative updates to the browser location, the history object allows you to respond immediately to user input without having to wait.

You might be wondering how the history object works. Internally, the BrowserRouter‘s history object uses the html5 history API. In brief, browser history is a stack that stores the URLs visited by the user and maintains a pointer to the user’s current location. This history API allows you to navigate through a user’s session history and alter the history stack if necessary.

In addition to history.push(), the history object has a few more useful methods for navigating through the browser’s history:

history.goBack() which navigates to the previous URL in the history stack
history.goForward() which navigates to the next URL in the history stack
history.go(n) which navigates n entries (where positive n values are forward and negative n values are backward) through the history stack
Below, we can see how the .goBack() method is used to create a “Go Back” button:

import { useHistory } from `react-router-dom`
 
export const BackButton = () => {
  const history = useHistory()
 
  return (
    <button onClick={() => history.goBack()}>
      Go Back
    </button>
  )
}
Instructions
888888888888888888888 Task 1 8888888888888888888
So far, you may have noticed the “Back” and “Forward” buttons in the Footer component. However, if you try clicking on them, nothing will happen. Let’s fix that using the history object and its methods!

First, navigate to Footer.js and import the useHistory hook.

Hint

Use the named import syntax to import the useHistory method from 'react-router-dom':

import { value } from 'package-name';
888888888888888888 Task 2 88888888888888888888888
Next, inside the Footer component, call useHistory() to get the history object.

Hint

Your code should look like this:

const history = useHistory();
888888888888888888 Task 3 888888888888888888888
Finally, modify the goBack and goForward click handlers such that they imperatively redirect the user.

Verify your work by navigating to a few URLs and then using the “Back” and “Forward” buttons in the footer.

Hint

Call the history object’s .goBack() method inside the goBack handler. Call the history object’s .goForward() method inside the goForward handler.

8888888888888888888 Task 4 88888888888888888888
Lastly, let’s add an imperative redirect to the SignUp component such that after a user submits their username they are redirected to the /profile page.

Navigate to SignUp.js and import the useHistory hook.

Then, use the appropriate history method to redirect the user to '/profile' at the end of the handleSubmit method.

Test that your code works by signing up and ensuring that you are redirected to the profile page (which you can now view since loggedIn is now true).

Hint

Import the useHistory hook from react-router-dom, call it to get a history object, and use the history object’s push function to redirect the user to '/profile'.
===================

Query Parameters: https://www.youtube.com/watch?v=p7LeZWUh8BA
Query parameters appear in URLs beginning with a question mark (?) and are followed by a parameter name assigned to a value. They are optional and are most often used to search, sort and/or filter resources.

For example, if you were to visit the URL below…

https://www.google.com/search?q=codecademy
… you would be taken to Google’s /search page displaying results for the search term codecademy. In this example, the name of the query parameter is q.

React Router provides a mechanism for grabbing the values of query parameters: the useLocation() hook. When called, useLocation() returns a location object with a search property that is often directly extracted with destructuring syntax. This search value corresponds to the current URL’s query string.

Consider this example of a SortedList component:

import { useLocation } from 'react-router-dom'
 
// Rendered when a user visits "/list?order=DESC"
export const SortedList = (numberList) => {
  const { search } = useLocation();
  console.log(search); // Prints "?order=DESC"
};
While we could parse this search string on our own to get the query parameter value ('DESC'), the native URLSearchParams constructor is often used to do this for us:

import { useLocation } from 'react-router-dom'
 
// Rendered when a user visits "/list?order=DESC"
export const SortedList = (numberList) => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const order = queryParams.get('order');
  console.log(order); // Prints 'DESC'
};
Let’s break down this example:

First, we import useLocation() and call it within SortedList to get the search query parameter string '?order=DESC'
Next, we pass the search string into the new URLSearchParams() constructor which returns an object, often called queryParams. This object has a .get() method for retrieving query parameter values.
Finally, to get the value of a specific query parameter, we pass in the name of the query parameter whose value we want to obtain as a string ('order') to the queryParams.get() method. The value ('DESC') is then stored in the variable order.
Let’s expand the SortedList example so that the component uses the order value to render a list of data either in ascending order, in descending order, or in its natural order.

import { useLocation } from 'react-router-dom'
 
// Rendered when a user visits "/list?order=DESC"
export const SortedList = (numberList) => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const sortOrder = queryParams.get('order');
 
  if (sortOrder === 'ASC') {
    // render the numberList in ascending order
  } else if (sortOrder === 'DESC') {
    // render the numberList in descending order
  } else {
    // render the numberList as is
  }
}
Now, if the user were to visit /list?order=DESC, the value 'DESC' would be extracted and we can render the SortedList component in descending order. Likewise, visiting /list?order=ASC will render the list in ascending order. Finally, since query parameters are optional, if we were to visit /list, the SortedList component would render in its natural order.

Instructions
88888888888888888888 Task 1 8888888888888888888888
You’re going to add a search feature to the Articles page that filters the listed articles by whether or not their titles match the search string. For example, if the path is /articles?title=react, only the articles with 'react' in the title should be displayed.

Navigate to Articles.js and import useLocation from react-router-dom.

Hint

Import useLocation from react-router-dom.

8888888888888888888888888888 Task 2 8888888888888888888
Next, inside the Articles component, call useLocation to get access to the current URL’s query string (accessible via the location object’s search property) and store it in a variable called search.

Hint

Often, the search value is extracted from useLocation() using destructuring assignment, like so:

const { search } = useLocation();
888888888888888888888888888 Task 3 888888888888888888
Pass the search string to the URLSearchParams() constructor to get the queryParams value.

Hint

You do not need to import URLSearchParams. Your code should look like this:

const queryParams = new URLSearchParams(search);
888888888888888888888 Task 4 88888888888888888
Finally, you should see a variable named title declared and assigned to the empty string value ''. Replace this hard-coded '' value with queryParams.get(), passing in the name of the query parameter whose value we would like to extract.

Verify your code works by navigating to /articles?title=browser and ensuring that only articles with “browser” in the title show up on the page.

Hint

The query parameter we want to extract is called ?title so your code should look like this:

const title = queryParams.get('title');

===============
Review of all above: https://www.youtube.com/watch?v=P1YK6iqlS00
