import React from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ChatScreenProps } from '../route/NavigationProps'

const ChatScreen = ({navigation}: ChatScreenProps): JSX.Element => {
  
  const handleBackPress = () => {
    navigation.goBack();
  }

  return (
    <View>
      <View style = {styles.header}>
        <TouchableOpacity style = {styles.backButton} onPress={handleBackPress}>
          <Ionicons name="chevron-back-outline" color='white' size={40} />
        </TouchableOpacity>
        <Text style = {styles.nameHeading}>Store Name</Text>
      </View>
      <ScrollView style = {styles.chatContainer}>

      </ScrollView>
      <View style = {styles.textInputBar}>
        <TextInput style = {styles.textEntry} placeholder='Enter a message'/>
        <TouchableOpacity style = {styles.sendButton}>
          <Ionicons name="send-outline" color='white' size={30} />
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create ({
  header: {
    flexDirection: 'row',
    backgroundColor: '#0348C2',
    elevation: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',      
  },
  backButton: {
    position: 'absolute',
    alignSelf: 'center',
    left: 10,
  },
  nameHeading: {
    fontSize: 19,
    textAlign: 'center', 
    color: 'white'
  },
  chatContainer: {
    borderWidth: 1,
    height: 710
  },
  textInputBar: {
    borderWidth: 1,
    height: 59,
    flexDirection: 'row'
  },
  textEntry: {
    paddingLeft: 10,
    fontSize: 16,
    marginTop: 4,
    marginLeft: 6,
    borderWidth: 1,
    width: 345,
    height: 50,
    borderRadius: 15
  },
  sendButton: {
    backgroundColor: '#0348C2',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    right: 5,
    top: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ChatScreen;