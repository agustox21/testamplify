import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import Amplify  from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function SampleSignInAmplify() {

  return (
    <div className="App">
      <header className="App-header">
           <AmplifySignOut>
           <h2>Please Login To AWS</h2>
         </AmplifySignOut>
      </header>
    </div>
  );
}

export default withAuthenticator(SampleSignInAmplify);
