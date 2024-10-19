const Button = () => {
  //onClick event
  return(
    <button onClick={handleClick}>CLICK ME HERE</button>
  )
}

const handleClick = () => {
  console.log("Button clicked");
}

const person1 = {
  name: "Teng",
  age: 25
}

const person2 = {
  name: "John",
  age: 30
}

const bool = false;

const persons = [
  person1,
  person2,
  {
    name: "Jane",
    age: 35
  }
]

const shoppingList = [
  "Milk",
  "Bread",
  "Eggs",
]


const App = () => {
  return (
   
    <div className="container" id="container"
        style={{backgroundColor : "blue"}}>
      {/* class becomes className, style has double bracket */}
      {/* here if bool is true, render person1, else person2*/}
      <h1>Greeting {bool ? person1.name : person2.name}</h1>
      {/* map through persons array and render each person */}
      {persons.map((person, index) => (
        <p key={index}>{index} Name: {person.name}, Age: {person.age}</p>
      ))}
      {/* map through shoppingList array and render each item */}
      {shoppingList.map((item, index) => (
        <p key={index}>Item : {item}</p>
      ))}

      <p>Hello World</p>
      {/* Button component from function*/}
      <Button />
    </div>
  )
}

export default App;