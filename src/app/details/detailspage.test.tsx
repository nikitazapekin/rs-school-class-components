

import { render} from '@testing-library/react';
import Details from "./page"
 
describe('MyApp Component', () => {
 
  it('renders an async component with searchParams', async () => {
  
    render(await Details({ searchParams: {query: 'type:user', page: '1', user: "d"} }));
  
  });
    })
 
