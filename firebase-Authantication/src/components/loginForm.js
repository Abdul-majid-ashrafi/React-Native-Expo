import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'

export class LoginForm extends Component {
    state = { email: 'user@gmail.com', password: 'mani112', error: '' }

    login() {
        const { email, password } = this.state
          this.setState({ error: '' })
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            console.log(user)
        })
            .catch((error) => {
                // Handle Errors here.
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
                            placeholder="user@gmail.com"
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection >


                    <CardSection>
                        <Text style={{ color: 'red' }}>{this.state.error}</Text>
                    </CardSection>
                    <CardSection />

                    <CardSection>

                        <Button onPress={this.login.bind(this)}>
                            Login
                        </Button >
                    </CardSection>

                </Card>
            </View>
        )
    }
}