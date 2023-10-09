import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ChatListScreenProps } from '../route/NavigationProps'
import Chat from '../components/Chat'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ChatListScreen = ({navigation}: ChatListScreenProps): JSX.Element => {

  const handleChatPress = () => {
    navigation.navigate('ChatScreen');
  }

  return (
    <View>
      <View style={styles.headerBar}>
        <Text style={styles.heading}>Chat</Text>
        <Ionicons style={styles.searchIcon} name="search-outline" color='white' size={30} />
      </View>
      <TouchableOpacity onPress={handleChatPress}>
        <Chat />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0348C2',
  },
  heading: {
    fontSize: 20,
    color: 'white'
  },
  searchIcon: {
    position: 'absolute',
    right: 15
  }
});

export default ChatListScreen;