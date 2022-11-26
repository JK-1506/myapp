import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native'


import React from 'react'

const EdituserScreen = () => {
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
            marginVertical: 20,
          }}>
          {/* header */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: '#85C1E9',
                margin: 10,
              }}>Cập nhật thông tin
            </Text>
          </View>
          {/* body */}
          <View>

            <View
              style={{
                padding: 10,
              }}>
              <View>
                <TextInput placeholder='Số điện thoại'
                  style={{
                    fontSize: 20,
                    backgroundColor: "#CDD1D3",
                    borderRadius: 20,
                  }}></TextInput>
              </View>
            </View>
                  
            <View
              style={{
                padding: 10,
              }}>
              <View>
                <TextInput secureTextEntry={true} placeholder='Họ và tên'
                  style={{
                    fontSize: 20,
                    backgroundColor: '#CDD1D3',
                    borderRadius: 20,
                  }}></TextInput>
              </View>
            </View>

            <View
              style={{
                padding: 10,
              }}>
              
              <View>
                <TextInput placeholder='Địa chỉ'
                  style={{
                    fontSize: 20,
                    backgroundColor: "#CDD1D3",
                    borderRadius: 20,
                  }}></TextInput>
              </View>
            </View>
            <View
              style={{
                margin: 20,
                justifyContent:'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity  activeOpacity={0.5}
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
                    color: 'white',
                    fontWeight: "600",
                    fontSize: 20,

                  }}>Cập nhật</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default EdituserScreen;