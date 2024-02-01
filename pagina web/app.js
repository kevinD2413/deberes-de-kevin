const getData = async ()=> {
    const data = [];
    for (let i = 1; i < 31; i++) {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonjason = await pokemon.json();
        data.push(pokemonjason);

    }

    mappeoDatos(data);

    console.log(data);
};
const mappeoDato= (data)=>{
    const dataMapeada = data.map((pokemon,index)=>({
        name: pokemon.name,
        image:p ,

}))
}
getData();