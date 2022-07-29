import React from 'react'
import { View, TouchableOpacity ,StyleSheet,Image,TextInput,Text,Platform} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home(props) {
  return (
    <ScrollView>
        {/*..........................Title...............................  */}
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',paddingTop:30,paddingBottom:30}}>
        <View >
    <Text style={styles.title}>Coffee first.</Text>
    <Text style={styles.title}>Schemes later.</Text></View>
    <View>
    <Image style={styles.img} source={require('../../assets/images/user.png')}/>
    </View>
    </View>

    
    {/*..........................Input Section...............................  */}

    <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginBottom:30}}>
    <Icon style={styles.searchIcon} name='search1' size={20} color='#9A9A9A'/>
    <TextInput
        style={styles.input}
        placeholder="      Search"
        placeholderTextColor="#9A9A9A"
        keyboardType="email-address"
        returnKeyType="next"
         />
<View style={{backgroundColor:'orange',padding:14,borderRadius:15,display:'flex',alignContent:'center'}}>
    <Image style={styles.search} source={require('../../assets/icons/search.png')}/>
    </View></View>

    <View style={{marginLeft:30}}>
    <Text style={{fontSize:20,marginBottom:20}}>Coffee Products</Text>


        {/*..........................Images Section...............................  */}

    <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    
    <View style={{marginBottom:30,position:'relative'}}>
<View style={{position:'absolute',top:-5,right:20,backgroundColor:'#D0D0D0',borderRadius:35,zIndex:100,width:35,height:35,borderColor:'white',borderWidth:3}}>
    <Icon style={{position:'absolute',top:6,right:4,zIndex:99}} name="hearto" size={18} color='orange'/></View>

    <Image style={{marginRight:20,marginBottom:20,width:150,height:170,borderRadius:20}}
     source={require('../../assets/images/image4.png')}/>
     <Text style={{fontWeight:'700',fontSize:20,marginBottom:5}} >Coffee</Text>     
<Text style={{fontWeight:'700'}}><Icon name='star' size={20} color='orange'/>  4.4   <Text style={{color:'#9A9A9A',shadowColor:'gray',fontWeight:'700'}}>429 reviews</Text></Text>     
     <Text style={{fontWeight:'700',marginTop:7}}>New Cairo, Egypt</Text>
     </View>
     <View style={{marginBottom:30,position:'relative'}}>
<View style={{position:'absolute',top:-5,right:20,backgroundColor:'#D0D0D0',borderRadius:35,zIndex:100,width:35,height:35,borderColor:'white',borderWidth:3}}>
    <Icon style={{position:'absolute',top:6,right:4,zIndex:99}} name="hearto" size={18}/></View>

    <Image style={{marginRight:20,marginBottom:20,width:150,height:170,}}
     source={require('../../assets/images/image1.png')}/>
     <Text style={{fontWeight:'700',fontSize:20,marginBottom:5}} >Coffee</Text>     
<Text style={{fontWeight:'700'}}><Icon name='star' size={20} color='orange'/>  4.4   <Text style={{color:'#9A9A9A',shadowColor:'gray',fontWeight:'700'}}>429 reviews</Text></Text>     
     <Text style={{fontWeight:'700',marginTop:7}}>New Cairo, Egypt</Text>
     </View>
     </View>
    



    <View style={{display:'flex',flexDirection:'row',marginBottom:30,justifyContent:'center',alignItems:'center'}}>
    <View style={{marginBottom:30,position:'relative'}}>
<View style={{position:'absolute',top:-5,right:20,backgroundColor:'#D0D0D0',borderRadius:35,zIndex:100,width:35,height:35,borderColor:'white',borderWidth:3}}>
    <Icon style={{position:'absolute',top:6,right:4,zIndex:99}} name="hearto" size={18}/></View>

    <Image style={{marginRight:20,marginBottom:20,width:150,height:170,}}
     source={require('../../assets/images/image3.png')}/>
     <Text style={{fontWeight:'700',fontSize:20,marginBottom:5}} >Coffee</Text>     
<Text style={{fontWeight:'700'}}><Icon name='star' size={20} color='orange'/>  4.4   <Text style={{color:'#9A9A9A',shadowColor:'gray',fontWeight:'700'}}>429 reviews</Text></Text>     
     <Text style={{fontWeight:'700',marginTop:7}}>New Cairo, Egypt</Text>
     </View>
     <View style={{marginBottom:30,position:'relative'}}>
<View style={{position:'absolute',top:-5,right:20,backgroundColor:'#D0D0D0',borderRadius:35,zIndex:100,width:35,height:35,borderColor:'white',borderWidth:3}}>
    <Icon style={{position:'absolute',top:6,right:4,zIndex:99}} name="hearto" size={18}/></View>

    <Image style={{marginRight:20,marginBottom:20,width:150,height:170,}}
     source={require('../../assets/images/image2.png')}/>
     <Text style={{fontWeight:'700',fontSize:20,marginBottom:5}} >Coffee</Text>     
<Text style={{fontWeight:'700'}}><Icon name='star' size={20} color='orange'/>  4.4   <Text style={{color:'#9A9A9A',shadowColor:'gray',fontWeight:'700'}}>429 reviews</Text></Text>     
     <Text style={{fontWeight:'700',marginTop:7}}>New Cairo, Egypt</Text>
     </View>
</View>
    </View>
        {/*..........................Options Section...............................  */}

    <View style={{display:'flex',justifyContent:'space-around',flexDirection:'row',marginBottom:20}}>
    <View style={{backgroundColor:'orange',borderRadius:20,paddingLeft:13,paddingRight:15,paddingBottom:12,paddingTop:12,top:-10}}>
    <Image source={require('../../assets/icons/home.png')} style={{width:30,height:30}}/></View>     
    <Image source={require('../../assets/icons/heart.png')} style={{width:30,height:30}}/>
    <Image source={require('../../assets/icons/bookmark.png')} style={{width:30,height:30}}/>
    {/* <<<<<<<<<<<<<<<<<<  Navigate to caffee Section <<<<<<<<<<<<<<<<<<<<<<<<<<< */}
    <TouchableOpacity onPress={()=>props.navigation.navigate('Coffee')}> 
    <Image source={require('../../assets/icons/user.png')} style={{width:30,height:30}}/>
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
 title:
 {
    fontSize:30,
    fontWeight:'bold',
    marginRight:50
 },
  buttonStyle: {
    backgroundColor: '#622da4',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,
    margin:'auto',
    justifyContent:'center',
    width:'40%'
  },
  img:
  {
    width: 60,
    height: 60,


  },
  search:
  {
    width: 30,
    height: 30,

  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:18,
    borderColor:'#D0D0D0',
    backgroundColor:'#D0D0D0',
    shadowColor:'gray',
    width:'70%',
  },
  searchIcon:
  {
position:'absolute',
top:32,
left:Platform.OS=='android'?32:Platform.OS=='ios'?32:180,
zIndex:99,

  }
})