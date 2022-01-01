import './App.css';
function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossorigin="anonymous"></link>
      </head>
      <header className="App-header">
        <p> Are you authorized to work at DN? 
          <span class="required"> *</span>
        </p>
        <select class="form-select btn btn-secondary dropdown-toggle" aria-label="Default select example">
          <option selected>Please select</option>
          <option value="1">Test</option>
        </select>
      </header>
    </div>
  );
}

export default App;
