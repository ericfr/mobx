import * as React from "react"
import { render } from "react-dom"
import { FriendlyComponent } from "./FriendlyComponent"
import { ObservePerson } from "./ObservePerson"
import { TodoList } from "./TodoList"
import { Calculator } from "./Calculator"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

const App = () => (
  <div style={styles}>
    <h2>FriendlyComponent</h2>
    <FriendlyComponent />
    <br />
    <hr />
    <h2>ObservePerson</h2>
    <ObservePerson />
    <br />
    <hr />
    <h2>TodoList</h2>
    <TodoList />
    <br />
    <hr />
    <h2>Calculator</h2>
    <Calculator />
  </div>
)

render(<App />, document.getElementById("root"))
