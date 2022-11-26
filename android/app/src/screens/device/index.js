import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const DeviceScreen=()=>{
return(
    <View
    style={{
        backgroundColor: '#85C1E9',
        flex: 1,

    }}>
        <View
        style={{
            backgroundColor: 'white',
            margin: 10,
            flex: 1,
            borderRadius: 10,
          }}>
    <View>
        <Text>Device</Text>
    </View>
    </View>
    </View>
    
);
};

export default DeviceScreen;