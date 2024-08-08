






import { render} from '@testing-library/react';
import MyApp from './page';  

describe('MyApp Component', () => {
 
  it('renders an async component with searchParams', async () => {
  
    render(await MyApp({ searchParams: {query: 'type:user', page: '1'} }));
  
  });
    })
 