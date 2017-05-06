import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Card, CardSection } from './common'

export class LoginForm extends Component {
    render() {
        return (
            <View>
                <Card>
                    <CardSection />
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