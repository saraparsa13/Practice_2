import React, { useEffect } from 'react';
import Navigator from 'routes';
import { Provider as PaperProvider } from 'react-native-paper';
import themes from 'view/style/themes';
import { getTheme } from 'store/selectors/appearance';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, useColorScheme } from 'react-native';
import { toggleTheme } from './store/reducers/appearance';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const App = () => {
  const dispatch = useDispatch();
  const colorSchema = useColorScheme();
  const theme = useSelector(getTheme);
  if (colorSchema && colorSchema != theme) dispatch(toggleTheme());

  useEffect(() => {
    if (theme === 'light') {
      StatusBar.setBarStyle('dark-content');
    } else {
      StatusBar.setBarStyle('light-content');
    }
  }, [theme]);
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={themes[theme]}>
        <Navigator />
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;
