import React from 'react';

import SwapiServise from '../../services/swapi-service';
import Spinner from '../spinner';
import Error from '../error';

import './random-planet.css';

export default class RandomPlanet extends React.Component {
    swapi = new SwapiServise();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    constructor() {
        super();
        this.updatePlanet();
        setInterval(this.updatePlanet, 1500)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    onPlanetLoaded = (planet) => {
        console.log(planet);
        this.setState({planet, loading: false});
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 18) + 2;
        this.swapi
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;
        let content = null;
        if (error) {
            content = <Error />;
        } else if (loading) {
            content = <Spinner />;
        } else {
            content = <PlanetComponent planet={planet}/>;
        }
        
        return (
            <div className="random-planet section" style={loading || error ? {justifyContent:"center"} : null}>
                {content}
            </div>
        );
    }
}


const PlanetComponent = ({ planet }) =>    {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <>
             <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
             <div>
                 <h4>{name}</h4>
                 <ul className="list-group list-group-flush">
                 <li className="list-group-item">
                     <span className="term">Population: </span>
                     <span>{population}</span>
                 </li>
                 <li className="list-group-item">
                     <span className="term">Rotation period: </span>
                     <span>{rotationPeriod}</span>
                 </li>
                 <li className="list-group-item">
                     <span className="term">Diameter: </span>
                     <span>{diameter}</span>
                 </li>
                 </ul>
             </div>
        </>
     );
}