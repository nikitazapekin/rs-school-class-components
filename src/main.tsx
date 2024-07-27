 
import ReactDOM from 'react-dom/client'; 
import AppRoutes from './utils/routes';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AppRoutes />);
} else {
  console.error('Root element with ID "root" not found.');
}
