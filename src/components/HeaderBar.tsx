import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const HeaderBar = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style = {{flexDirection: 'row'}}>
            <Ionicons style = {styles.searchIcon} name="search-outline" color='#9ca3af' size={30} />
                <TextInput
                    style={styles.searchBar}
                    placeholder='Search PrimePick'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartButton}>
                <Ionicons name="cart-outline" color='white' size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.helpButton}>
                <Ionicons name="help-circle-outline" color='white' size={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 65,
        backgroundColor: '#0348C2',
        flexDirection: 'row',
    },
    searchBar: {
        paddingLeft: 40,
        marginTop: 10,
        marginLeft: 6,
        backgroundColor: 'white',
        width: 280,
        borderRadius: 15,
        fontSize: 17,
        height: 45,
    },
    cartButton: {
        position: 'absolute',
        right: 75,
        top: 17,
    },
    helpButton: {
        position: 'absolute',
        right: 20,
        top: 17,
    },
    searchIcon: {
        position: 'absolute',
        zIndex: 1,
        top: 17,
        left: 12,
    }
});
export default HeaderBar;