import React from 'react'
import { View, TouchableOpacity ,StyleSheet,Text,Image,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import Iconss from 'react-native-vector-icons/Fontisto';
import Iconsss from 'react-native-vector-icons/SimpleLineIcons';

import { ScrollView } from 'react-native-gesture-handler';

export default function Coffee(props) {
  return (
    <>
<View  style={{display:'flex'}}>
  <View style={{position:'absolute',top:30,left:15,backgroundColor:'orange',zIndex:100,padding:8,borderRadius:10}}>
<Iconsss  name="arrow-left" size={18} color='black'/></View>

  <Image  source={require('../../assets/images/image4.png')} style={{width:Platform.OS==('android')? '100%':Platform.OS==('ios')? '100%':1345,height:Platform.OS==('android')? '73%':Platform.OS==('ios')? '73%':500,borderRadius:10}}  />

</View>
  <View style={{backgroundColor:'white',width:"100%",height:"90%",borderRadius:40,position:'absolute',top:"48%",left:0}}>
  <View style={{marginLeft:40,marginTop:30}}>
  <Text style={{fontWeight:'700',fontSize:20,marginBottom:5}} >Coffee</Text>     
<Text style={{fontWeight:'700'}}><Icon name='star' size={20} color='orange'/>  4.4   <Text style={{color:'#9A9A9A',shadowColor:'gray',fontWeight:'700'}}>429 reviews</Text></Text>     
     <Text style={{fontWeight:'700',marginTop:7}}>New Cairo, Egypt</Text></View>
  </View>

  <View style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
    <View style={{backgroundColor:'#D0D0D0',paddingTop:15,paddingBottom:15,paddingLeft:20,paddingRight:20,borderRadius:20}}>
    <Icons  name="coffee" size={50} color='#C9A401'/>
      <Text>Coffee</Text>
    </View>
    <View style={{backgroundColor:'#D0D0D0',paddingTop:15,paddingBottom:15,paddingLeft:30,paddingRight:30,borderRadius:20}}>
    <Iconss  name="test-bottle" size={50} color='#C9A401' />
      <Text>Milk</Text>
    </View>

  </View>
  <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}> Order Now </Text>
          </TouchableOpacity>
          </View>
    </>
  )
}





const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'orange',
    borderWidth: 0,
    color: '#FFFFFF',
    height: 50,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    justifyContent:'center',
    width:'70%',
    // margin:'auto',

  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 18,
    fontWeight:'bold'
  },
})