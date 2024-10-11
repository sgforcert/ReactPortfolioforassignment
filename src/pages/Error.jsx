import { useRouteError } from 'react-router-dom';
import swwImage from '../utils/images/SWW.jpg'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Something went wrong!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img src={swwImage} width='40%'/>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}