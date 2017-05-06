import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'

export class SignupForm extends Component {
    state = { email: 'mani@gmail.com', password: 'mani', userName: 'Majid Ashraf', error: '' }

    createUserAccount() {
        const { email, password, userName } = this.state
        console.log('this.state', userName)
        this.setState({ error: '' })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            // Handle Response here
            .then((Response) => {
                console.log('Response', Response)
                firebase.database().ref('/').child('nativeUser/' + Response.uid).set(this.state)
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                this.setState({ error: errorMessage })
            })

    }
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="your full name"
                            label="User Name"
                            value={this.state.userName}
                            onChangeText={userName => this.setState({ userName })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="user@gmail.com"
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder="******"
                            label="Password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection >

                    <CardSection>
                        <Text style={errorStyle}>{this.state.error}</Text>
                    </CardSection>

                    <CardSection />

                    <CardSection>

                        <Button onPress={this.createUserAccount.bind(this)}>
                            Submit
                        </Button >
                    </CardSection>

                </Card>
            </View>
        )
    }
}
const errorStyle = {
    fontSize: 18,
    color: 'red'
}