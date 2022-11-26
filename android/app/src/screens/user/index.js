import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {


    }, []);

    const onLogout = () => {
        //xoa clear cache
        AsyncStorage.clear();
        //Chuyen den dang nhap
        navigation.replace('Login');
    }
    const onEditPass = () => {
        //Chuyen den editpass
        navigation.navigate('Editpass');
    }

    const onEditUser = () => {
        //Chuyen den editpass
        navigation.navigate('Edituser');
    }

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
                <View
                    style={{
                        flex: 1,
                    }}>
                </View>
                <View
                    style={{
                        flex: 3,
                        backgroundColor: '#85C1E9',
                        borderRadius: 10,
                        margin: 10,
                    }}>
                    <View
                        style={{
                            position: 'absolute',
                            top: -90,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                        <Image
                            style={{
                                width: 180,
                                height: 180,
                                borderRadius: 90,
                            }}
                            source={require('../image/user.png')}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 100,
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: 'bold',
                                color: 'black',
                            }}
                        > Ho va ten </Text>
                        <TouchableOpacity onPress={onEditUser}>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 90,
                                }}
                                source={require('../image/edituser.png')}
                            />
                        </TouchableOpacity>

                    </View>
                    <View
                        style={{
                            marginTop: 20,
                        }}
                    >
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 90,
                            }}
                            source={require('../image/phone.png')}
                        />
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'black',
                                marginBottom: 10,
                            }}> So dien thoai </Text>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 90,
                            }}
                            source={require('../image/address.png')}
                        />
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'black',
                                marginBottom: 10,
                            }}> Dia chi </Text>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10,
                        }}>
                        <TouchableOpacity onPress={onEditPass}
                            style={{
                                width: 200,
                                padding: 10,
                                borderRadius: 20,
                                backgroundColor: "white",
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 5,
                            }}>
                            <Text
                                style={{
                                    color: '#85C1E9',
                                    fontWeight: "600",
                                    fontSize: 20,

                                }}>Đổi mật khẩu</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onLogout}
                            style={{
                                width: 200,
                                padding: 10,
                                borderRadius: 20,
                                backgroundColor: "white",
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 5,
                            }}>
                            <Text
                                style={{
                                    color: '#85C1E9',
                                    fontWeight: "600",
                                    fontSize: 20,

                                }}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default UserScreen;