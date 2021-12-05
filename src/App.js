import { useState } from 'react'; // Importo useState() en react (para crear un estado)

import './App.css';
import Animal from './Animal';

function App() {
  // Creo un estado. Como argumento de useState() vamos a pasarle el valor que queremos que el estado tenga por defecto cuando lo creamos.

  // const myFirstState = useState(0);
  // const actualState = myFirstState[0];
  // const setActualState = myFirstState[1];

  // Siempre desestructuraremos el array cuando usemos useState(). Al primer ítem le daremos el nombre que le queremos dar al estado y al segundo ítem la función que va a modificar al estado.
  const [counter, setCounter] = useState(0);
  const [valueFromInput, setValueFromInput] = useState('');
  const [animals, setAnimals] = useState([
    { type: 'cat', canFly: false, color: 'red'},
    { type: 'dog', canFly: false, color: 'orange' },
    { type: 'bat', canFly: true, color: 'coral' },
    { type: 'eagle', canFly: true, color: 'cyan' },
    { type: 'horse', canFly: false, color: 'green' },
  ]);

  const deleteAnimal = (animalFromChild) => {
    const filteredAnimals = animals.filter((item) => {
      return item.type !== animalFromChild; // Devolvemos lo que queremos que se incluya en el nuevo array. Si el boolean es verdadero, se incluirá en el nuevo array. Si es falso, no.
    });
    setAnimals(filteredAnimals); // Actualizo el estado con el nuevo array. Tiene todos los animales, menos el que he dado click.
  };

  return (
    <div className='App'>
      <h1>Nueva app</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>RESTAR</button>
      <button onClick={() => setCounter(counter + 1)}>SUMAR</button>
      <div>
        <input
          type='text'
          onChange={(event) => setValueFromInput(event.target.value)}
        />
        <h2>What I'm typing: {valueFromInput}</h2>
      </div>
      <div className='flex-space'>
        {animals.map((animal, index) => {
          return (
            <Animal
              animal={animal}
              key={index + Date.now()}
              deleteAnimal={deleteAnimal} // Pasar la función como prop al componente. Le pasamos la referencia para que podamos llamarla desde el hijo
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

// A TENER EN CUENTA

// El estado en React es inmutable. SIEMPRE que queramos "cambiar" el estado hay que utilizar la función que nos da useState()[1]. Esta función nos la da React para cambiar ese estado en específico.
// Siempre que cambia el estado en React, el componente se re-renderiza.
// Siempre que hagamos un .map, hay que pasarle key={index + Date.now()}.
