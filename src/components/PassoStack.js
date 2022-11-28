import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default props => (
    <View style={styles.flex}>
        <View style={styles.buttonSpace}>
            {props.voltar
                ? <Button
                    title='Voltar'
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                />
                : false
            }
            {/* {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        props.navigation.navigate(
                            props.avancar,
                            props.avancarParams
                        )
                    }}
                />
                : false
            } */}
            {props.avancar
                ? <Button
                    title='Avançar'
                    onPress={() => {
                        props.navigation.push(
                            props.avancar,
                            props.avancarParams
                        )
                    }}
                />
                : false
            }
        </View>
        <View style={styles.flex}>
            {props.children}
        </View>
    </View>
)

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    buttonSpace: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
    }
})