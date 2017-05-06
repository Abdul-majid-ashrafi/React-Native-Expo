import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Card, CardSection, Input } from './common'

export class LoginForm extends Component {
    state = { text: '' }
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            value={this.state.text}
                            onChangeText={text => this.setState({ text })}
                        />
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