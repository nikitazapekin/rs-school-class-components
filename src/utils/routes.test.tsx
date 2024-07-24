


import { render } from '@testing-library/react'

//import { render, waitFor } from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import {
  createMemoryRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom'
//import { screen } from '@testing-library/react'

// The element we want to render. Uses the hook useNavigate to send us somewhere.
const ElementToRender: React.FC = () => {
  const navigate = useNavigate()

  return <button onClick={() => navigate('/')}>Navigate to Home</button>
}

const setupMyTest = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/userdata',
        element: <>Navigated from Start</>,
      },
      {
        path: '/main',
        // Render the component causing the navigate to '/'
        element: <ElementToRender />,
      },
    ],
    {
      // Set for where you want to start in the routes. Remember, KISS (Keep it simple, stupid) the routes.
      initialEntries: ['/main'],
      // We don't need to explicitly set this, but it's nice to have.
     // initialIndex: 0,
    }
  )

  render(<RouterProvider router={router} />)

  // Objectify the router so we can explicitly pull when calling setupMyTest
  return { router }
}

it('tests react router dom v6.4.0 navigates properly', async () => {
  const { router } = setupMyTest()

  // Given we do start where we want to start
  expect(router.state.location.pathname).toEqual('/main')

  // Navigate away from /starting/path
  /*
  userEvent.click(screen.getByRole('button', { name: 'Navigate to Home' }))

  // Don't forget to await the update since not all actions are immediate
  await waitFor(() => {
    expect(router.state.location.pathname).toEqual('/')
  })

  */
})
 