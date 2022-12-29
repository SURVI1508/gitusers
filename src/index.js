import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';
import Khabar from './Khabar';
import Gituser from './Gituser';
import News from './News';
import Weather from './Weather';
import Api from './Api';


ReactDOM.render(
  <>
    {/* <Weather /> */}
    <Gituser />
    {/* <News />
    <Khabar />
    <Movie /> */}
    <Api/>
  </>

  , document.getElementById("root")
)