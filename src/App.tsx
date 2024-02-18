import React, {useState, useCallback} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getJoke } from './store/jokes/thunk';
import { IJoke } from './model/interface/joke';
import './App.css';
import Header from './components/header';

function App() {
  const dispatch = useDispatch()
  const joke = useSelector((state:{jokes:IJoke[]})=> state.jokes[state.jokes.length-1])
  const loader = useSelector((state:{loader:{isLoading:boolean}})=> state.loader)
  const [punchlineVisibility, setPunchLineVisibility] = useState(false)

  const togglePunchline = useCallback(()=>setPunchLineVisibility(punchlineVisibility=>!punchlineVisibility), [])

  if(!joke && !loader.isLoading)
    dispatch<any>(getJoke())

  return (
    <div className="container">
        <Header onclick={()=>setPunchLineVisibility(()=>false)}></Header>
        <hr/>
        <div className="content">
          {loader.isLoading ? 
            <div className='loader'>
                LOADING YOUR JOKE...
            </div> :
            joke ?  
            <div className='joke'>
              { joke.error ? 
                  <div className='error'>
                    {joke.joke}
                  </div> : 
                  <div className='joke'>
                    <div className="opening">
                      {joke.joke}
                    </div>
                    <button className='btn-show-punchline' onClick={togglePunchline}>
                        Show Punchline
                    </button>
                    {punchlineVisibility && <div className="punch-line">
                      {joke.punchLine}
                    </div>}
                  </div>}
            </div>  : "" 
          } 
          
        </div>
    </div>
  );
}

export default App;
