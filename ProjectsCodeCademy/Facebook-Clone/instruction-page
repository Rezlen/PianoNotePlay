import { css, jsx, jsx } from "@emotion/react";
import { getAppBarUtilityClass, getAppBarUtilityClass, getImageListItemBarUtilityClass, getInputBaseUtilityClass, getTypographyUtilityClass } from "@mui/material";
import { Component, Component, Component, Component } from "react";

========Steps to build it=================

1- create/import react app/tools/folders: npx create-react-app
2- Start the app; npm start
3- Cleanup as follow: src > delete 3 files (App.test.js, logo.svg, setupTest.js) THEN go to App.js and delete the whole HEADER. Change the css name to "app" 
4- Delete everything in the App.css
5- in index.css, add below, so it removes any invisible margin from the page:
 * {
  margin: 0;
}
6- at https://console.firebase.google.com/u/0/project/facebook-clone-rez/overview create WebApp name: (facebook-clone). Tick the Firebase Hosting setup 

7- In the gear Project Setting Section. In the "SDK setup and configuration" section click on the CONFIG, and copy the code: 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsD16h8nR-X7JHwrsAo-xTnigeACwvULY",
  authDomain: "facebook-clone-rez.firebaseapp.com",
  projectId: "facebook-clone-rez",
  storageBucket: "facebook-clone-rez.appspot.com",
  messagingSenderId: "856893351503",
  appId: "1:856893351503:web:140788cb6a4e1532032c3a",
  measurementId: "G-MZHBZKBP4H"
};

8- Create a firebase.js file in SRC folder & paste the code there
9- Comment the sections in App.js that you are going to build there:
{/*Header*/}
{/*App body*/}
{/*Sidebar*/}
{/*Feed*/}
{/*Widgets*/}
10- Create a Header.js file
11- Instal Material-UI tools by: npm install @mui/material @emotion/react @emotion/styled
12- then npm install @mui/icons-material
13- add the magnifier from import SearchIcon from '@mui/icons-material/Search'; to the Div in header & import it on top.
14- add the SearchIcon to the Div in header
15- add the input type="text" to the Div in header
16- Each Icon must be in a Div.
17- Then add the a few icones fromm the Material-US and put each in a <IconButton >.
18- Start creating the Sidebar.js & css and modify in the App.js. Import it in App.js.
19- Include Sidebar Component and create its css & js files with RFCE quick import. Sidebar.js is mother components for SidebarRows.jsx.
20- there you will need SidebarRows, so create its component and css/js Files.
21- In sidebar.js add the Component at he button an their props. Then in sidebarRow.js add the props argument 
22- Add the SRC, ICON to the function component in the SidebarRow.js.
23- Do the CSS SlideRow.css until: .sidebarRow > .MuiSvgIcon-root line 23.
24- Start with the FEED component & pages. This/feed component cover the middle section of the age which includes two sections: 1- Displaying the Reels and 2- Displaying the Posts/message sender
25- Create the StoryReel.js & css & js files and its component. Import it in the Feed.js
26- Create the Story.js & .css files & its component:
// to make it cleaner, instead of argument (props) and props.title, we just use {title & the rest of the props}
function Story({image, profileSrc, title}) {
  return (
    <div className='story'>
      <Avatar src={profileSrc} /> {/*if there is src, then pass it Avatar with the ProfileSrc */}
      <h4>{title}</h4>
    </div>
  )
}

27- Then style the Story.css.  THEN go back to the StoryReel.css o position the all stories in the middle (Display Flex). 
28- Go back to App.css to position the app__body to (Display Flex) in the middle of page.
28- Then Style the Feed.css so all its components display correctly.
29- Create the second section of the FEED.js & CSS; MessageSender.js & CSS and its Component, import etc. Message sender has its own components of 5 which is devided to TWo sections: Top & Bottom.
30- After styling of MessageSendes both parseInt, time to keep & track of the entry to the getInputBaseUtilityClass. Go to the MessgaeSender.js and create a VARIABLE of INPUT and SetInput STATE.
const [input, setInput] = useState('');
AND: 
value={input}
onChange={(e) => setInput(e.target.value)}
AND for the URL of the IMAGES.

31- Then go back to the Feed.js to add the post components key, Import it. 
32- In post.js you need profilePic, image, username, timestamp, message; as your props and make thier {CallBacks}.
33- Then inside the Feed.js  add the IDs & their values like:
<Post 
  profilePic='https://scontent.flhr13-1.fna.fbcdn.net/v/t1.6435-9/71174257_10219137739930243_3997180261132402688_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ddQ-pAIdwDEAX9mDh0q&_nc_ht=scontent.flhr13-1.fna&oh=00_AT-ObuFKOCG2o6iUZZPCT0dzHYgfMMV7I_bYQrjdYk18Kw&oe=63252ECE'
  message='Wow this works'
  timestamp='This is the time stamp'
  username={'John'}
  image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/211859445_10158300571710872_1739945872121343798_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lO-7SGBYeBgAX_nVZ98&_nc_oc=AQlbMBQSYcahDre9hkbvCaMZlVuXMmsqQG6cs-1RuxO9eVJXkld4Gzt3gpQS_zwUeUo&_nc_ht=scontent.flhr13-1.fna&oh=00_AT90ioUB0QDNYKOprfAPvVnBhJSkIlnXhfL7FPSKoCiDmg&oe=63056690'
/>

34- Then STYLE the Post.css THEN add its DIVs in post.js: 
<div className='post__options'>
<div className='post__option'>
  <ThumbUpIcon />
  <p>Like</p>
</div>
</div>

35- then finish the Post style to line 79. The start Widget/Iframe on the right, first ad its button in App.js.
36- Add the <Iframe></Iframe> DIV inside your Widgets.js and import it in App.js. get the Facebook Ifarem link from:  https://developers.facebook.com/docs/plugins/page-plugin
37- Time to start the User Authentication. In App.js add const user = null; 
{!user ? <h1>Login</h1> : (
  Rest of the Buttons.
)}

38- Time to create Login.js & css import, export and in the App.js. Inside create div for logo & Const signIn functions.
39- Then go back to firebase.js and instal firebase in the project: npm i firebase, then Import the firebase in the page and add: const firebaseApp = firebase.initializeApp(firebaseConfig);
40- While there connect to the DB by: const db = firebaseApp.firestore();  THEN fo the the Google's firestore & connect. https://console.firebase.google.com/u/0/project/facebook-clone-rez/firestore Realtime database in testing mode.
41- Then While in the firebase.js add the DB VARIABLE & AUTH. In the Google Authentication page select GOOGLE from the Sign In Method.
42- Then go to the firebase.js and add the AUTH VARIABLE & the AUTH. In the Google Authentication page select GOOGLE from the Sign In Method.AND EXPORT them.
43- Then in the Login .js add the AUTH case:
const signIn = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => alert(error.message));
};

44- Then create the StateProvider.js + import Export.
45- The create the reducer.js and import it in the StateProvider.js.
46- the inside the index.js Import & Exports, & do not gorget the diff between the React DOm or ROOT for react version 8. You can copy those from Amazon Clone project.
47- Then go to the index.js and add the State and dispatch variable.
48 then in the Login.js add the StateProvider.js and import export;   
  const [{state}, dispatch] = useStateValue();
  dispatch({
    type: actionTypes.SET_USER,
    user: result.user,
  });

49- Then in App.js add the StateProvider.js and import export;   const [{user}, dispatch] = useStateValue();
50- Connect the profile & the user name to display th export pic name etc. Start with Header.js, Import UseSatateValue and do <Avatar src={user.photoURL}/>.
51-  The same const [{user}, dispatch] = useStateValue(); in SideBar.js.
52- Next in MessageSender.js, Header.js, SideBar.js    <Avatar src={user.photoURL}/> <h4>{user.displayName}</h4>
53- Then inside the Frirebase DB, create automated base for posts:
  1- StartCollection > TYPE posts > AutoID > FIELD profilePic > Value: https://scontent.flhr13-1.fna.fbcdn.net/v/t1.18169-9/18921941_1464661213555449_8406490878265591879_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rdTaUapa-yAAX_bl1pE&_nc_ht=scontent.flhr13-1.fna&oh=00_AT8-JnwcVI_8vsI7RTENH4dtSDVVqof-pvzSBRK_CQB6sw&oe=6325BFF9
  > FIELD message > Value: I am from the Database wow
  > FIELD timestamp > Type > today's date.
  > FIELD username > Value: Sssanagah
  > FIELD image > Value: https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/211859445_10158300571710872_1739945872121343798_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lO-7SGBYeBgAX_nVZ98&_nc_oc=AQlbMBQSYcahDre9hkbvCaMZlVuXMmsqQG6cs-1RuxO9eVJXkld4Gzt3gpQS_zwUeUo&_nc_ht=scontent.flhr13-1.fna&oh=00_AT90ioUB0QDNYKOprfAPvVnBhJSkIlnXhfL7FPSKoCiDmg&oe=63056690

54- Then in Feed.js add; const [posts, setPosts] = useState([]);
useEffect(() => {
  db.collection('posts').onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))) //This pulls IN everything from the Googl's NoSql database based the IDs & its Data.
  );
}, []);  


55- So now you can remove all the hard coded posts:
<Post 
profilePic='https://scontent.flhr13-1.fna.fbcdn.net/v/t1.18169-9/18921941_1464661213555449_8406490878265591879_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rdTaUapa-yAAX_bl1pE&_nc_ht=scontent.flhr13-1.fna&oh=00_AT8-JnwcVI_8vsI7RTENH4dtSDVVqof-pvzSBRK_CQB6sw&oe=6325BFF9'
message='Wow this works'
timestamp='This is the time stamp'
username={'John'}
image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/211859445_10158300571710872_1739945872121343798_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lO-7SGBYeBgAX_nVZ98&_nc_oc=AQlbMBQSYcahDre9hkbvCaMZlVuXMmsqQG6cs-1RuxO9eVJXkld4Gzt3gpQS_zwUeUo&_nc_ht=scontent.flhr13-1.fna&oh=00_AT90ioUB0QDNYKOprfAPvVnBhJSkIlnXhfL7FPSKoCiDmg&oe=63056690'
/>
and place 
{posts.map((post) => (
  <Post 
    key={post.id}
    profilePic={post.data.profilePic}
    message={post.data.message}
    timestamp={post.data.timestamp}
    username={post.data.username}
    image={post.data.image}
  />

  and add desc to the useEffect above it as:     db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>

If you see an error, might be from your timestamp in your Posts.js. Just add this in your P tags: {new Date(timestamp?toDate()).toUTCString()}

56- Then in  MessageSender.js so users can actually posts things.
db.collection('posts').add({ // this pulls the posted data/posts by the user from actual Firebase server.
  message: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  profilePic: user.photoURL,
  username: user.displayName,
  image: imageUrl
});

57- Do not forget the following: import firebase from 'firebase/compat/app'; // that is import style for react v8; instead of (import firebase from 'firebase'; )
58- Time to deploy everything to the Live Server(Google's firebase) by this command: npm i -g firebase-tools THEN this command: firebase login THEN firebase init
59- Choose:  () Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
60- Use an existing project y > choose your project. ? What do you want to use as your public directory? (public) build
61-  Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y  THEN  Set up automatic builds and deploys with GitHub? No
62- command: npm run build (This pushes everthing in a streemline into the BUILD folder.)
========== If you change anything, you must run NPM RUN BUILD again.===================then FIREBASE DEPLOY===============



















----------------------------
run: npm install firebase
SDK key:
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsD16h8nR-X7JHwrsAo-xTnigeACwvULY",
  authDomain: "facebook-clone-rez.firebaseapp.com",
  projectId: "facebook-clone-rez",
  storageBucket: "facebook-clone-rez.appspot.com",
  messagingSenderId: "856893351503",
  appId: "1:856893351503:web:140788cb6a4e1532032c3a",
  measurementId: "G-MZHBZKBP4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

--------
npm install -g firebase-tools
firebase login
firebase init
firebase deploy

