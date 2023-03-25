import { createHashRouter } from 'react-router-dom'
import Game from 'src/pages/Game'
import SignIn from 'src/pages/SignIn'
import Error from 'src/pages/Error'

export const router = createHashRouter([
  {
    path: '/',
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: '/game',
    element: <Game />,
  },
])
