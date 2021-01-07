function Order(props) {
    function handleInput(e){
      props.inputFunction(e.target.name, e.target.value)
}

    return (
      <form>
        <h1>Create a burger!</h1>
        <section className="protein">
          <label htmlFor="patty">What type of protein would you like?</label> <br/>
          <input type="text" name="patty" id="patty"  onChange={handleInput} />
        </section>
        <hr/>
  
        <section className="patties">
          <label htmlFor="amount">How many patties would you like?</label><br/>
          <input id="amount" type="number" step="1" name="amount"  onChange={handleInput}/>
        </section>
        <hr/>
        
        <section className="cooked">
          <label htmlFor="doneness">How do you want your patty cooked</label>
          <br/>
          <span>Rare</span>
          <input id="doneness" name="doneness" type="range" min="0" max="5" step="0.5"  onChange={handleInput}/>
          
          <span>Well-Done</span>
        </section>
        <hr/>
        
        <section className="toppings">
          <span>What toppings would you like?</span>
          <br/>
          <input id="lettuce" name="topping" type="checkbox" defaultValue="lettuce"  onChange={handleInput}/>
          <label htmlFor="lettuce">Lettuce</label>
          <input id="tomato" name="topping" type="checkbox" defaultValue="tomato"  onChange={handleInput}/>
          <label htmlFor="tomato">Tomato</label>
          <input id="onion" name="topping" type="checkbox" defaultValue="onion"  onChange={handleInput}/>
          <label htmlFor="onion">Onion</label>
        </section>
        
        <hr/>
        <section className="cheesy">
          <span>Would you like to add cheese?</span>
          <br/>
          <input id="yes" name="cheese" type="radio" defaultValue="yes"  onChange={handleInput}/>
          <label htmlFor="yes">Yes</label>
          <input id="no" name="cheese" type="radio" defaultValue="no"  onChange={handleInput}/>
          <label htmlFor="no">No</label>
        </section>
        
        <hr/>
        <section className="bun-type">
          <label htmlFor="bun">What type of bun would you like?</label> <br/>
          <select id="bun" name="bun" onChange={handleInput}>
            <option defaultValue="sesame">Sesame</option>
            <option defaultValue="potato">Potato</option>
            <option defaultValue="pretzel">Pretzel</option>
          </select>
        </section>
        
        <hr/>
        <section className="sauce-selection">
          <label htmlFor="sauce">What type of sauce would you like?</label>
          <input list="sauces" id="sauce" name="sauce" onChange={handleInput}/>
          <datalist id="sauces">
            <option defaultValue="ketchup"></option>
            <option defaultValue="mayo"></option>
            <option defaultValue="mustard"></option>
          </datalist>
        </section>
        
        <hr/>
        <section className="extra-info">
          <label htmlFor="extra">Anything else you want to add?</label>
          <br/>
          <textarea id="extra" name="extra" rows="3" cols="40" onChange={handleInput}>No plastic utensils please!</textarea>
        </section>
        
        <hr/>
        <section className="submission">
          
          <input type="button" defaultValue="Submit" onClick={props.setComplate}/>
        </section>
      </form>
    )
  }
  
  export default Order;