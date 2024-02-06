import { StatusBar, View } from 'react-native';
import { styles } from './config/theme/app-theme';
import { CalculatorScreen } from './presentation';


export function App() {

  return (
    <View style={ styles.background }>
      <StatusBar
        barStyle={ 'light-content' }
        backgroundColor={ 'black' }/>
        
        <CalculatorScreen />

    </View>
  );
}

