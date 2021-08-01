import React from 'react'
import { View, Text , StyleSheet,Image ,ScrollView,TouchableOpacity,Button} from 'react-native'
import ServiceCard from './ServiceCard.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Services from '../screens/Services';

const  Stack = createStackNavigator();

export default function ServiceList({ navigation }) {

      return (
      <View style={styles.container}>
      <View style={styles.textServiceBox}>
        <View style={{ flexDirection:'row'}}>
        <Image source={{ uri:'https://h.top4top.io/p_2036dy4sf1.png'}}
        style={{height:20,width: 15}}/>
        <TouchableOpacity onPress={() => navigation.navigate('الخدمات')}>
         <Text style={styles.showAllText}>عرض الكل</Text>
         </TouchableOpacity>
       </View>
         <Text style={styles.servicesText}>الخدمات الحديثة</Text>
      </View>
         <ScrollView horizontal={true} >
         <ServiceCard img='https://j.top4top.io/p_2037h3ryv1.png' name='باركود زيارة التجمع'/>
         <ServiceCard img='https://h.top4top.io/p_2037qjj3j1.png' name='فحص كورونا'/>
         <ServiceCard img='https://e.top4top.io/p_2037w0wlk1.png' name='بطاقة الوضع الصحي'/>
         <ServiceCard img='https://d.top4top.io/p_2036ggxty1.png' name='تعريف رقم الجوال'/>
         <ServiceCard img='https://e.top4top.io/p_203643tkt1.png' name='لقاح كورونا'/>
         <ServiceCard img='https://h.top4top.io/p_2036dg76y1.png' name='الجواز الصحي'/>
        <ServiceCard img='https://c.top4top.io/p_2036qf3iv1.png' name=' التبرع بالاعضاء'/>
    
     </ScrollView>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textServiceBox:{
  flexDirection:'row',
   justifyContent:'space-between',
   padding:10
  },
  showAllText:{
  color: 'gray',
   fontSize:15,
   marginLeft:10,
   fontWeight:'bold'
  },
 servicesText:{
  color:'#23AA9C',
  fontSize:19, 
  fontWeight:'bold'
  }
});
