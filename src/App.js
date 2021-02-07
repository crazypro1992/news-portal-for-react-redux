import './App.scss';

import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ContactPage from './components/Body/ContactsPage/ContactPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsPage from './components/Body/News/NewsPage';
import NewsDetail from './components/Body/News/NewsDetail/NewsDetails';
import { connect } from 'react-redux';


const useFetch = dispatch => {
  const requestUrl = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=4908ee40e5b045a28ed0bd079849bf34';
  useEffect( () => {
    const fetchdData = async () => {
      let responce = await axios.get(requestUrl);
      dispatch(responce.data.articles);
    } 

    fetchdData();
  }, [] )
}

function App(props) {
  useFetch(props.addTotolNews);
    
  return (
    <div className="App">
      <Header/>

      <Route
          path={'/'}
          exact
          render={()=> <NewsPage
            // totalNews={fetchResult}
            mainText={'Всегда свежие новости'}
            countOfNews={6}
          />}
      />

      <Route
          path={'/news'}
          exact
          render={()=> <NewsPage
            // totalNews={fetchResult}
            mainText={'Быть в курсе событий'}
            countOfNews={12}
          />}
      />

      <Route
          path={'/contacts'}
          exact
          component={ContactPage}
      />

      <Route
          path={'/news/:name'}
          exact
          component={NewsDetail}
      />

      <Footer
        name={'Виталий Ерёменко'}
      />
    
    </div>
  );
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addTotolNews: (news) => dispatch(
      {type: 'ADD_NEWS', news: news}
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
