import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";

const SysModal = ({ message, visible, onHide }) => {
    return (
        <Modal visible={visible} transparent={true}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(00,00,00,.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                }}>
                <View
                    style={{
                        width: '100%',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 20,

                    }}>
                    {/* header */}
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'black',
                            }}>

                            Thông báo</Text>
                    </View>

                    {/* body */}
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                            }}>
                            {message}
                        </Text>
                    </View>

                    {/* footer */}
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                        }}>
                        <TouchableOpacity onPress={onHide}
                            style={{
                                width: 200,
                                padding: 10,
                                borderRadius: 20,
                                backgroundColor: "#85C1E9",
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: 'black',
                                }}>Đóng</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </Modal>
    );
};

export default SysModal;