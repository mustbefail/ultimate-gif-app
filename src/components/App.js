import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navigation from './Navigation';
import SearchedGifsContainer from './SearchedGifsContainer';
import CategoryContainer from './Categories/CategoryContainer';
import SubCategoryContainer from './Categories/SubCategoryContainer';
import SearchGif from './SearchGif';
import Footer from './Footer';
import Trends from './Trends';
import SingleGif from './SingleGif';

export default function App() {
  return (
    <div className="container d-flex flex-column h-100">
      <div className="row justify-content-center">
        <Navigation />
        <SearchGif />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/trending" />
          </Route>
          <Route path="/trending">
            <Trends />
          </Route>
          <Route path="/search">
            <SearchedGifsContainer />
          </Route>
          <Route path="/random">
            <SingleGif />
          </Route>
          <Route path="/categories/:subCategory">
            <SubCategoryContainer />
          </Route>
          <Route path="/categories">
            <CategoryContainer />
          </Route>
          <Route path="/single">
            <SingleGif />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}
