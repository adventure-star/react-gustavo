import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LeftSideBar from './components/LeftSideBar';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';

import './App.css';
import "./css/tailwind.output.css";

const Home = lazy(() => import('./pages/Home'));
const Board = lazy(() => import('./pages/Board'));
const MyLessons = lazy(() => import('./pages/MyLessons'));
const NewLesson = lazy(() => import('./pages/NewLesson'));
const EditLesson = lazy(() => import('./pages/EditLesson'));
const Library = lazy(() => import('./pages/Library'));
const SetUp = lazy(() => import('./pages/SetUp'));
const GetOut = lazy(() => import('./pages/GetOut'));

const SuspenseLoading = () => {
  return (
    <Fragment>
      <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
        <div className="d-flex align-items-center flex-column px-4">
          <ClipLoader color={'var(--primary)'} loading={true} />
        </div>
        <div className="text-muted font-size-xl text-center pt-3">
          Please wait while we load the page
          <span className="font-size-lg d-block text-dark">
            This live preview instance can be slower than a real production
            build!
          </span>
        </div>
      </div>
    </Fragment>
  );
};

function App() {
  return (
    <React.Fragment>
      <main className="w-full mx-auto" style={{ maxWidth: "1400px" }}>
        <Suspense fallback={<SuspenseLoading />}>
          <Switch>
            <Route path="/lesson/new" component={NewLesson} />
            <Route path="/lesson/edit/:id" component={EditLesson} />
            <LeftSideBar>
              <Switch>
                <Redirect from="/" exact to="/home" />
                <motion.div>
                  <Route path="/home" component={Home} />
                  <Route path="/board" component={Board} />
                  <Route path="/mylessons" component={MyLessons} />
                  <Route path="/library" component={Library} />
                  <Route path="/setup" component={SetUp} />
                  <Route path="/getout" component={GetOut} />
                </motion.div>
              </Switch>
            </LeftSideBar>
          </Switch>
        </Suspense>
      </main>
    </React.Fragment>
  );
}

export default App;
