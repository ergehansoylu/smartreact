import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';
import { Button, Stack } from "@react-native-material/core";
import { AppBar, IconButton, FAB ,Backdrop,BackdropSubheader , HStack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { color } from '@mui/system';
import { ImageBackground } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';

const App = () =>  {

  const image = {uri: 'https://reactjs.org/logo-og.png'};
  const insets = useSafeAreaInsets();
  const [revealed, setRevealed] = useState(false);

  const [text1, setText1] = useState('Lamp 1 Off');
  const [text2, setText2] = useState('Lamp 2 Off');
  const [text3, setText3] = useState('Lamp 3 Off');


  const [l1, setL1] = useState('black');
  const [l2, setL2] = useState('black');
  const [l3, setL3] = useState('black');

  const handleButton1 = () => {
    setL1(l1 === 'black' ? 'blue' : 'black');
    
    setText1(text1 === 'Lamp 1 On' ? 'Lamp 1 Off' : 'Lamp 1 On');
  };

  const handleButton2 = () => {
    
    if (l3 === 'green') {
      setL3('black');
      setText3('Lamp 3 Off');
    }
    setL2(l2 === 'black' ? 'red' : 'black');
    setText2(text2 === 'Lamp 2 Off' ? 'Lamp 2 On' : 'Lamp 2 Off')
    
  };

  const handleButton3 = () => {
    
     
    if (l2 === 'red' ) {
      setL2('black');
      setText2('Lamp 2 Off');
    }
    setL3(l3 === 'black' ? 'green' : 'black');
    setText3(text3 === 'Lamp 3 Off' ? 'Lamp 3 On' : 'Lamp 3 Off')
    
  };

  return(
    <Backdrop
      
      revealed={revealed}
      style={{backgroundColor:'#353b48'}}
      header={
        
      <AppBar
      title="Lamp Control"
      centerTitle={true}
      color='#353b48'
      style={ 
        {paddingTop: insets.top }}
      Image={
        <Image source={image} resizeMode="cover" ></Image>
      }
      leading={(props) => ( 
      <IconButton {...props} 
      icon= { 
      <MaterialCommunityIcons 
      name='menu' 
      size={30}
      color={props.color}
      
     />
    }
    onPress= {() => setRevealed((prevState) => !prevState)} 
      />
      )}
      trailing={props => (
        <HStack>
        <IconButton
          icon={props => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
        
      ) 
    } 
    
    
      /> 
    }
    backLayer={
    <View style={{ backgroundColor :'#353b48', height: 120  }} > 
    <Text style={{color:'white', fontSize: 20 }}> Ergehan Soylu</Text>
    </View>
    
  
  }
    
  >
    
    <BackdropSubheader title="Room"    />
    
    <View>
    <View style={styles.container3}> 
        <View  style={[styles.bulb, { backgroundColor: l1 }]} /> 
        
        <View style={[styles.bulb, { backgroundColor: l2 }]} /> 
        
        <View style={[styles.bulb, { backgroundColor: l3 }]} /> 

       </View>
      
    

    </View>
    <View style={styles.textv}>
        <Text>{text1}</Text>
        <Text>{text2}</Text>
        <Text>{text3}</Text>
      </View>
    <View style={styles.container2}>
    <Button title="Button 1" style={styles.button} onPress={handleButton1} ></Button>
    <Button title="Button 2" style={styles.button} onPress={handleButton2} ></Button>
    <Button title="Button 3" style={styles.button} onPress={handleButton3} ></Button>


    </View>
    <View style={styles.container2}>
    <Button title="Button 1" style={styles.button} onPress={null} ></Button>
    <Button title="Button 2" style={styles.button} onPress={null} ></Button>
    <Button title="Button 3" style={styles.button} onPress={null} ></Button>


    </View>
   
  </Backdrop>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34495E'
  },container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },container3: {
    flex: 1,
    top: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bulb: {
    
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
    
  },
  textv: {
    top: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
    
  },
  button: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 4,
    backgroundColor: 'gray',
    margin: 10,
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  btnview: {
    color: 'white',
    
  },
  lghtview: {
    flexDirection: 'row',
  },
  backcolor: {
    color: 'grey'
  }
});


const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <App/>
    </SafeAreaProvider>
  )
}




export default AppProvider;