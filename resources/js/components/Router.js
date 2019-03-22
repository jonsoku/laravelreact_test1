import React, { Component } from 'react'
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Home from '../Route/Home/Home';
import Board from '../Route/Board/Board';
import Header from './Header';
import BoardShow from '../Route/Board/BoardShow';
import BoardEdit from '../Route/Board/BoardEdit';
import BoardCreate from '../Route/Board/BoardCreate';
import Post from '../Route/Post';
export default () => (
        <Router>
        <>
        <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/boards" exact component={Board} />
                <Route path="/boards/create" exact component={BoardCreate} />
                <Route path="/boards/:id" exact component={BoardShow} />
                <Route path="/boards/:id/edit" exact component={BoardEdit} />
                <Route path="/posts" exact component={Post} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
        </Router>
)
