import React from 'react'
import fetch from 'isomorphic-unfetch'
import Select from 'react-select'

export default class extends React.Component {
    static async getInitialProps({ req }) {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=964");
        response = await response.json();
        let pokemonNames = response.results;
        // let pokemonPromises = [];
        // for (let pokemon of list) {
        //     pokemonPromises.push(fetch(pokemon.url).then(e => e.json()));
        // }
        // list = await Promise.all(pokemonPromises);
        // console.log(list[0]);
        return { pokemonList: pokemonNames.map(e => ({label: e.name, value: e.url}) ) }
    }

    render() {
        return (
            <div>
                <Select
                    closeMenuOnSelect={false}
                    defaultValue={[]}
                    isMulti
                    options={this.props.pokemonList}
                />
                Hello World
        {/* <table>{this.props.pokemonList.map(pokemon =>
                    <tr key={pokemon.name}>
                        <td>{pokemon.name}</td>
                        <td><img src={pokemon.sprites.front_default} /></td>
                    </tr>)}
                </table> */}
            </div>
        )
    }
}