import {StatusBar,SafeAreaView,View} from 'react-native';
import Cesta from './src/views/Cesta';
import { 
  useFonts,
  MontserratRegular,
  Montserrat_400Regular,
  Montserrat_700Bold
 } from '@expo-google-fonts/montserrat';

export default function App() {
 
  const [fontLoading] = useFonts({
  "MontserratRegular": Montserrat_400Regular,
  "MontserratBold": Montserrat_700Bold,

  });

  if(!fontLoading){
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
