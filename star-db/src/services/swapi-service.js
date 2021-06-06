export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResourse(url) {
      const res = await fetch(`${this._apiBase}${url}`);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}`);
      }
      return await res.json();
   }

   _extractId(item) {
    const idRegExp = "\/([0-9]*)\/$";
    return item.url.match(idRegExp)[1];
   }

   async getAllPeople() {
     const res = await this.getResourse('/people/');
     return res.results.map(this._transformPerson);
   }

   async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
   }

   async getAllPlanets() {
     const res = await this.getResourse('/planets/');
     return res.results.map(this._transformPlanet);
   }

   async getPlanet(id) {
     const planet = await this.getResourse(`/planets/${id}`);
     return this._taransformPlanet(planet);
   }

   async getAllStarships() {
     const res = await this.getResourse('/starships/');
     return res.results.map(this._transformStarship);
   }

   async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
   }

   _taransformPlanet(planet) {     
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
   }

   _taransformPerson(person) {     
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }

   _taransformStarship(starship) {     
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }
}
