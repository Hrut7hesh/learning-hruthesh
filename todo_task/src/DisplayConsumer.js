import { NumberContext } from "./App";

function Display() {
    return (
    <NumberContext.Consumer>
        {value => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
    );
  }
export default Display;