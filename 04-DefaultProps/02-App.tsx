// TypeScript 2.9

// C:/code/_temp/ts-react-defaultprops/myapp/src/App.tsx
// (27,6): Type '{ text: string; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<SplitText> & Readonly<{ children?: ReactNode; }> &...'.
//   Type '{ text: string; }' is not assignable to type 'Readonly<IProps>'.
//     Property 'delimiter' is missing in type '{ text: string; }'.

// => change as follows

import * as React from "react";
import "./App.css";

interface IProps {
  text: string;
  delimiter?: string; // *** add optional param
}

class SplitText extends React.Component<IProps> {
  static defaultProps = {
    delimiter: ","
  };
  render() {
    const bits = this.props.text.split(this.props.delimiter!); // *** bang because can be undefined
    return (
      <ul>
        {bits.map((bit: string) => (
          <li key={bit}>{bit}</li>
        ))}
      </ul>
    );
  }
}

const App = () => (
  <div>
    <SplitText text="Fred,Jane,Bob" />
  </div>
);

export default App;
