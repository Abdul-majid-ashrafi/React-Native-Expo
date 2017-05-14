import React, { Component } from 'react'
import { View,ScrollView } from 'react-native'
import axios from 'axios'
import { ListDetails } from './'


export class List extends Component {
    state = {
        albums: []
    }
    componentWillMount() {
        // axios.get('https://api.github.com/users/uqutub').then(response => console.log(response))
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => {
            this.setState({ albums: response.data })
        })
    }

    renderAlbums() {
        return this.state.albums.map(album => {
           return (<ListDetails key={album.title} album={album} />)
        })
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}
