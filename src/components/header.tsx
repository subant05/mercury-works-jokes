import React, { useCallback} from 'react';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getJoke } from '../store/jokes/thunk';

const Header = (props:{onclick:Function} = {onclick:()=>{} }) => {
  const loader = useSelector((state:{loader:{isLoading:boolean}})=> state.loader)
  const dispatch = useDispatch()

  const handleJokeRequest = useCallback(()=>{
    props.onclick()
    dispatch<any>(getJoke())
  },[dispatch, props])

  return (
    <div className="header">
    <Button disabled={loader.isLoading} onClick={handleJokeRequest} variant="contained" color="success">
      GetANewRandomJoke
    </Button>
    <Link className= "api-link" href="https://mwks-joke-service.azurewebsites.net/swagger/index.html">View API Docs</Link>
  </div>
  )
}

export default Header