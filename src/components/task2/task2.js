import './styling.css';
import {Screen,Wrapper} from "./Screen";
import {Button,ButtonBox} from './Button';
import CalcProvider from "./CalcContext";
import 'bootstrap/dist/css/bootstrap.min.css';


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export function Task2() {
  return (
    <div style={{ height: '700px' }} className='d-flex justify-content-center align-items-center'>
    <p>
    <CalcProvider >
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
    </p>
    </div>
  );
}

