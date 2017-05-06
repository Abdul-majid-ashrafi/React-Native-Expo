import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Card, CardSection, Input } from './common'

export class SignupForm extends Component {
    state = { email: '', password: '', userName: '' }

    createUserAccount() {
        console.log('this.state', this.state)
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