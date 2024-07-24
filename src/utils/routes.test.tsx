


import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  createMemoryRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom'
import { screen } from '@testing-library/react'

const ElementToRender: React.FC = () => {
  const navigate = useNavigate()

  return <button onClick={() => navigate('/swefeq')}>Navigate to Home</button>
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
        element: <ElementToRender />,
      },
    ],
    {

      initialEntries: ['/main'],

    }
  )

  render(<RouterProvider router={router} />)

  return { router }
}

it('tests react router dom v6.4.0 navigates properly', async () => {
  const { router } = setupMyTest()

  expect(router.state.location.pathname).toEqual('/main')

  userEvent.click(screen.getByRole('button', { name: 'Navigate to Home' }))

  await waitFor(() => {
    expect(router.state.location.pathname).not.toEqual('/swefeq')
  })
 
})
 