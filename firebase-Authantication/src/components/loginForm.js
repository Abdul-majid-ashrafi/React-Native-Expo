import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

export class LoginForm extends Component {
    state = { email: 'user@gmail.com', password: 'mani12', error: '', loading: false }

    login() {
        const { email, password } = this.state
        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            this.onLoginSuccess()
            console.log(user)
        })
            .catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message;
                this.setState({ error: errorMessage, loading: false })
            })
    }

    onLoginSuccess() {
        this.setState({ email: "", password: '', loading: false, error: '' })
    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner />
        }
        else {
            return (<Button onPress={this.login.bind(this)}>
                Login
                  </Button >)
        }
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

                    <CardSection>
                        {this.renderButton()}
                        {/*<Button onPress={this.login.bind(this)}>
                            Login
                        </Button >*/}
                    </CardSection>

                </Card>
            </View>
        )
    }
}