import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomRadioButtons from './components/CustomRadioButtons';
import CustomRadioPractice1 from './components/CustomRadioPractice1';
import DynamicRadioButtons from './components/DynamicRadioButtons';
import ActivityIndicatorTest from './components/ActivityIndicatorTest';
import ModalBox from './components/ModalBox';
import Platforms from './components/Platforms';
import WebViewInApp from './components/WebViewInApp';
import PressableTest from './components/PressableTest';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CustomRadioButtons /> */}
      {/* <CustomRadioPractice1 /> */}
      {/* <DynamicRadioButtons /> */}
       {/* <ActivityIndicatorTest /> */}

       {/* <ModalBox /> */}

       {/* <Platforms /> */}

       {/* <WebViewInApp /> */}

       <PressableTest />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent:'center',
  },
  
});
