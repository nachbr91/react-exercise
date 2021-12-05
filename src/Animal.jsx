import './Animal.styles.css';

const Animal = (props) => {
  const { animal, deleteAnimal } = props;

  // Creo condicional para pintar de color diferente según si puede volar o no
  // let mainClass = 'Animal';
  // animal.canFly ? (mainClass += ' blue') : (mainClass += ' red');

  return (
    <div className='Animal' style={{ backgroundColor: animal.color }}>
      <h3>{animal.type}</h3>
      {/* {animal.canFly && <p>Este animal puede volar</p>} Si el animal puede volar, escribir <p> */}
      {animal.canFly ? <p>Este animal puede volar</p> : <p>Animal terrestre</p>}
      <button onClick={() => deleteAnimal(animal.type)}>BORRAR</button>
    </div>
  );
};

export default Animal;
