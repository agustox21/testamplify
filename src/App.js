import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Sample1 from "./Sample1";
import Sample2 from "./Sample2";
import Sample3 from "./Sample3";
import Sample4 from "./Sample4";
import SampleSignInAmplify from "./SampleSignInAmplify";

export default function App() {
    return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                 <Link to="/users">Users</Link>
              </li>
              <li>
                 <Link to="/about">About</Link>
              </li>
              <li>
                 <Link to="/topics">Topics</Link>
              </li>
              <li>
                 <Link to="/sample1">Sample 1</Link>
              </li>
              <li>
                 <Link to="/sample2">Sample 2</Link>
              </li>
              <li>
                 <Link to="/sample3">Sample 3</Link>
              </li>
              <li>
                 <Link to="/sample4">Sample 4</Link>
              </li>
              <li>
                 <Link to="/samplesigninamplify">Sample SignIn Amplify</Link>
              </li>
            </ul>
          </nav>
  
         <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/sample1">
              <Sample1 />
            </Route>
            <Route path="/sample2">
              <Sample2 />
            </Route>
            <Route path="/sample3">
              <Sample3 />
            </Route>
            <Route path="/sample4">
              <Sample4 />
            </Route>
            <Route path="/SampleSignInAmplify">
              <SampleSignInAmplify />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </Router>
     );
   
  }

  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

  function Topics() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }
  

  