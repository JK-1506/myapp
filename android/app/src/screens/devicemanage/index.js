import { View, Text, FlatList } from "react-native";
import React, { useEffect , useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DeviceManageScreen = () => {


    return (
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
                    <Text> DeviceManageScreen</Text>
                </View>
                <FlatList>
                    <View
                    style={{
                        padding:10,
                        borderRadius:10,
                        backgroundColor:'white',
                        marginBottom:10,
                    }}>
                        <Text>Device</Text>
                    </View>
                </FlatList>
            </View>
        </View>
    );
};

export default DeviceManageScreen;