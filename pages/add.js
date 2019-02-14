import React from 'react'
import fetch from 'isomorphic-unfetch'
import Select, { components } from 'react-select'
import { get } from 'http';



export default class extends React.Component {
    static async getInitialProps({ req }) {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=964");
        response = await response.json();
        let pokemonNames = response.results;
        let pokemonList = pokemonNames.map(e => ({ label: e.name, value: e.url }));
        return { pokemonList: pokemonList }
    }

    constructor(props) {
        super(props);
        this.state = { data: {}, images: {}, value: [] };
    }
    onChange(value) {
        this.setState({value: value});
    }

    render() {
        const MultiValueLabel = (props) => {
            let url = props.data.value;
            let imgUrl = this.state.images[url];
            if (!imgUrl) {
                let get = async () => {
                    let data = await fetch(url);
                    data = await data.json();
                    imgUrl = data.sprites.back_default;
                    this.setState({
                        images: {
                            ...this.state.images,
                            [url]: imgUrl
                        }
                    });
                }
                get();
            }
            return (
                <div>
                    <components.MultiValueLabel {...props} />
                    <img src={imgUrl} />
                </div>
            );
        };
        return (
            <div>
                <Select
                    closeMenuOnSelect={false}
                    defaultValue={[]}
                    isMulti
                    value={this.state.value}
                    onChange={e => this.onChange(e)}
                    components={{ MultiValueLabel }}
                    //     styles={{ multiValueLabel: (base) => ({ ...base, backgroundColor: colourOptions[2].color, color: 'white' }) }}
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