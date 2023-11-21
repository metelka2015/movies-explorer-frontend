import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import { Header } from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";
import { Main } from "../Main/Main.js";
import { Movies } from "../Movies/Movies.js";
import { SavedMovies } from "../SavedMovies/SavedMovies.js";
import { Profile } from "../Profile/Profile.js";
import { Register } from "../Register/Register.js";
import { Login } from "../Login/Login.js";
import { InfoTooltip } from "../InfoTooltip/InfoTooltip.js";
import { PageNotFound } from "../PageNotFound/PageNotFound.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import * as mainApi from "../../utils/MainApi.js";
import * as moviesApi from "../../utils/MoviesApi.js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute.js"
import * as PopupMessage from '../../utils/constants.js';
import { searchAllMovies, filterShortMovies} from '../../utils/movieFilter.js';

  

function App() {
  const location = useLocation();  
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
 
  const navigate = useNavigate();
  const [ errorMessage, setErrorMessage ] = React.useState({type: 'default', message: ''});
  
  //Попап с сообщениями ошибки, успеха
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [ infoMessage, setInfoMessage ] = React.useState('');
  const [ isSuccess, setIsSuccess ] = React.useState(false)

  //movies
  const [initialMovies, setInitialMovies] = React.useState([]); 
  const [checkboxMovies, setCheckboxMovies] = React.useState([]);
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  const [errorRequest, setErrorRequest] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    loggedIn &&
      Promise.all([mainApi.getUserInfo(token), mainApi.getSavedMovies(token)])
        .then(([user, savedMovies]) => {
          setCurrentUser(user);
          setSavedMovies(savedMovies);
        })
        .catch(console.error);        
  }, [loggedIn])

  React.useEffect(() => {
      checkToken();
    }, []);

  function searchMovie(request) {
    localStorage.setItem('searchMovies', request);
    localStorage.setItem('shortMovies', checkboxStatus);
  
    if (localStorage.getItem('movies')) { 
        const allMovies = JSON.parse(localStorage.getItem('movies'));
        searchFilter(allMovies, request, checkboxStatus); 
    } else {  
        setIsLoading(true)
        moviesApi
        .getMovies()
        .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
            searchFilter(res, request, checkboxStatus);
            setErrorRequest(false)
        })
        .catch((err) => {
          if (err === 'Ошибка: 401') {
            setIsSuccess(false);
            setIsInfoTooltipOpen(true);
            setInfoMessage(PopupMessage.LOGIN_TOKEN_ERR);
          } else {
            setIsSuccess(false);
            setIsInfoTooltipOpen(true);
            setInfoMessage(PopupMessage.LOADING_ERR);
          } 
            console.log(err);
            setErrorRequest(true)
        })
        .finally(() => {
            setIsLoading(false);
        })
    }
  }

  function searchFilter(movies, request, checkboxStatus) { 

        const foundMovies = searchAllMovies(movies, request, setCheckboxStatus);  
        setInitialMovies(foundMovies); 
        setCheckboxMovies(checkboxStatus ? filterShortMovies(foundMovies) : foundMovies);
        localStorage.setItem('foundMovies', JSON.stringify(foundMovies)); 
      }

  function handleCheckboxStatus() { 
    setCheckboxStatus(!checkboxStatus);

    if (!checkboxStatus) {
        setCheckboxMovies(filterShortMovies(initialMovies));  
    } else {
        setCheckboxMovies(initialMovies);
    }
    localStorage.setItem('shortMovies', !checkboxStatus);
  }

  React.useEffect(() => {
    if (localStorage.getItem('foundMovies')) {
      const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
      setInitialMovies(foundMovies);
      if (localStorage.getItem('shortMovies') === 'true') {
        setCheckboxMovies(filterShortMovies(foundMovies));
      } else {
        setCheckboxMovies(foundMovies);
      }
    } 
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setCheckboxStatus(true);
    } else {
      setCheckboxStatus(false);
    }
  }, []); 

  function saveMovie(movie) {
    const token = localStorage.getItem('token');
    mainApi.saveMovie(
      {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: "https://api.nomoreparties.co" + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
        movieId: `${movie.id}`,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      }, token
    )
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch(console.error);
  }

  function handleDeleteMovie(movie) {
    const token = localStorage.getItem('token');
    if (loggedIn) {
      mainApi
      .deleteSavedMovie(movie._id, token)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((card) => card._id !== movie._id))
      })
      .catch(console.error);
    }
  }
  
  function closePopup() {
    setIsInfoTooltipOpen(false);
  }

  function handleRegister({name, email, password}) {
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res.status !== 400) {
          handleLogin({email, password});
          setIsSuccess(true);
          setIsInfoTooltipOpen(true);
          setInfoMessage(PopupMessage.REGISTER_SUCCESS);
        }
      })
      .catch((error) => {        
        if (error.status === 'Ошибка: 409') {
          setIsSuccess(false);
          setIsInfoTooltipOpen(true);
          setInfoMessage(PopupMessage.CONFLICT_ERR);        
        } else if (error === 'Ошибка: 401') {
          setIsSuccess(false);
          setIsInfoTooltipOpen(true);
          setInfoMessage(PopupMessage.LOGIN_TOKEN_ERR);
        } else {
          setIsSuccess(false);
          setIsInfoTooltipOpen(true);
          setInfoMessage(PopupMessage.REGISTER_ERR);
        } 
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleLogin({email, password}) {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then((res) => {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          setIsSuccess(true);
          navigate("/movies", { replace: true });
        })
      .catch((error) => {
        if (error === 'Ошибка: 401') {
          setIsSuccess(false);
          setInfoMessage(PopupMessage.LOGIN_ERR_UNAUTHORIZED);
          setIsInfoTooltipOpen(true);
        } else if (error === 'Ошибка: 409') {
            setIsSuccess(false);
            setIsInfoTooltipOpen(true);
            setInfoMessage(PopupMessage.CONFLICT_ERR); 
        } else {
          setIsSuccess(false);
          setInfoMessage(PopupMessage.SERVER_ERR);
          setIsInfoTooltipOpen(true);     
        }
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleUpdateUser(data) {
    const token = localStorage.getItem('token');
    
    if (loggedIn) {
      setIsLoading(true);
      mainApi
      .updateUserInfo(data, token)
      .then((res) => {
        setCurrentUser(res);
        setIsSuccess(true);
        setIsInfoTooltipOpen(true);
        setInfoMessage(PopupMessage.UPDATE_SUCCESS);
      })
      .catch((error) => {
        if (error === 'Ошибка: 409') {
          setIsSuccess(false);
          setIsInfoTooltipOpen(true);
          setInfoMessage(PopupMessage.CONFLICT_ERR);
        } else if (error === 'Ошибка: 401') {
          setIsSuccess(false);
          setIsInfoTooltipOpen(true);
          setInfoMessage(PopupMessage.LOGIN_TOKEN_INCORRECT);
        } else {
          setIsSuccess(false);
          setIsInfoTooltipOpen(true);
          setInfoMessage(PopupMessage.UPDATE_ERR);
        }
        
      })
      .finally(() => {
        setIsLoading(false);
      })
    }    
  }

  function handleSignOut() {
      localStorage.removeItem("token");
      localStorage.removeItem('movies');
      localStorage.removeItem('foundMovies');
      localStorage.removeItem('shortMovies');
      localStorage.removeItem('searchMovies');
      setLoggedIn(false);
      navigate("/", { replace: true });
    }

  function checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        })
        .catch((error) => {
          localStorage.removeItem("token");          
          navigate("/signup", { replace: true });
          setLoggedIn(false);
          console.log(error);
        });
    }
  }
  
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className={location.pathname === '/saved-movies' || location.pathname === '/movies' ? "app app__align" : "app"} >
        {location.pathname === '/' || location.pathname === '/saved-movies' || location.pathname === '/movies' || location.pathname === '/profile' ? (<Header loggedIn={loggedIn}/>) : ('')}
            <main>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/movies" element={
                      <ProtectedRoute 
                        element={Movies} 
                        loggedIn={loggedIn}
                        isLoading={isLoading} 
                        handleDeleteMovie={handleDeleteMovie} 
                        onSaveMovie={saveMovie} 
                        savedMovies={savedMovies} 
                        onSearch={searchMovie}
                        checkboxMovies={checkboxMovies}
                        errorRequest={errorRequest}
                        onFilter={handleCheckboxStatus}
                        checkboxStatus={checkboxStatus}
                      />} 
                    />
                    <Route path="/saved-movies" element={
                      <ProtectedRoute 
                        element={SavedMovies}
                        loggedIn={loggedIn}
                        isLoading={isLoading} 
                        savedMovies={savedMovies}
                        handleDeleteMovie={handleDeleteMovie} 
                      />} 
                    />
                    <Route path="/profile" element={
                      <ProtectedRoute 
                      element={Profile}
                      loggedIn={loggedIn}
                      isLoading={isLoading}
                      handleSignOut={handleSignOut}
                      handleUpdateUser={handleUpdateUser}
                      error={errorMessage}
                      setErrorMessage={setErrorMessage}
                      />} 
                    />
                    <Route path="/signup" element={
                      <Register 
                      handleRegister={handleRegister}  
                      loggedIn={loggedIn}
                      isLoading={isLoading}
                      />} 
                    />
                    <Route path="/signin" element={
                      <Login 
                        loggedIn={loggedIn}
                        isLoading={isLoading}
                        handleLogin={handleLogin}
                      />} 
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes> 
            </main>
        {location.pathname === '/' || location.pathname === '/saved-movies' || location.pathname === '/movies' ? (<Footer />) : ('')}        
      </div>
      <InfoTooltip className={!isInfoTooltipOpen ? 'popup' : 'popup popup_opened'} 
          isSuccess={isSuccess}
          onClose={closePopup}
          infoMessage={infoMessage}
      />
    </CurrentUserContext.Provider>   
  );
  
}

export default App;
