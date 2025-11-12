function Button(props) {
    return (
        <button
            {...props} 
            className={`bg-sky-900 text-white px-4 py-2 rounded-md transition flex items-center justify-center $(className)`}
        >
            {props.children}
        </button>
    );
}

export default Button;

{/* <Button 
      type="button"
      onClick={() => setCategory("Supermercado")}>
      <ShoppingCartIcon />
    </Button>
    <Button 
      type="button"
      onClick={() => setCategory("Sacolao")}>
      <GrapeIcon />
    </Button>
    <Button 
      type="button"
      onClick={() => setCategory("Padaria")}>
      <SandwichIcon />
    </Button> */}