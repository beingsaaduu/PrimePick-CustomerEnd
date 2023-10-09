import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Chat = (): JSX.Element => {
  return (
    <View style = {styles.mainContainer}>
        <Ionicons style = {styles.avatarIcon} name="person-circle-outline" color='black' size={45} />
      <View style = {styles.chatColumn}>
        <Text style = {styles.chatHeading}>Store Name</Text>
        <Text style = {styles.chatDisplay}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste voluptatum commodi</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        elevation: 1,
        flexDirection: 'row',
        //borderWidth: 1,
        height: 70,
        marginTop: 1
    },
    avatarIcon: {
        alignSelf: 'center',
        marginLeft: 5,
    },
    chatColumn: {
        flexDirection: 'column'
    },
    chatHeading: {
        color: 'black',
        fontSize: 17,
        marginTop: 5,
        marginLeft: 7,
    },
    chatDisplay: {
        marginLeft: 7,
        color: 'black',
    }
})

export default Chat;