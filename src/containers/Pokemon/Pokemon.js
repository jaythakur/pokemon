import React, { Component } from 'react';

import './Pokemon.scss';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-orders';
import PokemonItem from '../../components/PokemonItem/PokemonItem';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';

class Pokemon extends Component {
    state = {
        pokemonList: [],
        nextRecordApi: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3',
        preRecordApi: ''
    }

    componentDidMount() {
        this.getData(this.state.nextRecordApi);
    }

    fetchNextListHandler = () => this.getData(this.state.nextRecordApi);

    fetchPrevioudListHandler = () => this.getData(this.state.preRecordApi);

    getData = (url) => {
        axios.get(url)
        .then(
            response => {
                this.setState({pokemonList: response.data.results, nextRecordApi: response.data.next, preRecordApi: response.data.previous});
            }
        )
    }

    render() {
        const style = {
            marginTop: '10px'
        }
        let items = <Spinner />;
        let pagination = '';
        if (this.state.pokemonList.length > 0) {
            items = this.state.pokemonList.map((element, index) => {
                const url = element.url.split('/').filter((el) => el != "");
                const id = url[url.length - 1];
                return <PokemonItem name={element.name} id={id} key={index}/>
            })

            pagination = <div className="row" style={style}>
            <div className="pre">
                <Button disabled={!this.state.preRecordApi} clicked={this.fetchPrevioudListHandler}>Prev</Button>
            </div>
            <div className="next">
            <Button clicked={this.fetchNextListHandler}>Next</Button>
            </div>
        </div>
        }

        return (
            <Aux>
            <div className="row">
            {items}
            </div>
            {pagination}
            </Aux>
        );
    };
}

export default Pokemon;