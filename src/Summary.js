// Change ... with your value
function Summary(props) {
  function handlePatty(e){
    props.onInputLast(e.target.value)
  }
    return (
      <div>
      <h1>Thanks for your submission!</h1>
      <p onChange={handlePatty}>The protein you like:{props.order.patty}</p>
      <p>Number of patties: {props.order.amount}</p>
      <p>Patty cooked level:{props.order.doneness}</p>
      <p>The topping you chose:{props.order.topping}</p>
      <p>Extra cheese:{props.order.cheese}</p>
      <p>The bun type:{props.order.bun}</p>
      <p>Sauces:{props.order.sauce}</p>
      <p>Anything extra:{props.order.extra}</p>
    </div>
    )
  }
  export default Summary;

  