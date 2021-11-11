import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import defaultTheme from './styles/theme/defaultTheme';
import GlobalStyles from './styles/GlobalStyles';
import { RoutesApp } from './routes';

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Toaster />
        <RoutesApp />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
