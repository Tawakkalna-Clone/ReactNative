import React from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'
export default function SeviceCard(props) {
    return (
        <View style={{ flex: 1,width:100 , marginHorizontal:5 }}>
        <View style={styles. boxStyle}>
          <View style={{alignItems: "center"}}>
          <Image  style={styles.imgStyle}
           source={{
          uri:props.img
        }} />
          </View>
          <View >
            <Text style={styles.serviceName}>{props.name}</Text>
          </View>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
  imgStyle: {
    width: 40,
    height: 40,
    margin:10
  },
  serviceName:{
  color:'white',
   textAlign: "center",
   fontSize:14
  },
  boxStyle:{
  backgroundColor: "#1C1B1B",
  borderRadius: 10,
  height:160 ,
  padding:10,
   margin:0.6
   }
});
