import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button, Card, CardSection } from './common'

export class LoginForm extends Component {
    state = { text: '' }
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <TextInput
                            value={this.state.text}
                            onChangeText={text => this.setState({ text }, () => console.log(this.state.text))}
                            style={{ height: 40, width: 150 }}
                            placeholder="Type here to translate!" />
                    </CardSection >

                    <CardSection />

                    <CardSection>

                        <Button>
                            Login
                        </Button >
                    </CardSection>

                </Card>
            </View>
        )
    }
}