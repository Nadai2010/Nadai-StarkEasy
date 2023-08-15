import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import './Comandos.css';

const Comandos = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [selectedFunction, setSelectedFunction] = useState('');
  const [functionCode, setFunctionCode] = useState('');

const handleCopyFunction = () => {
    const codeElement = document.querySelector(".function-content pre");
    if (codeElement) {
      const range = document.createRange();
      range.selectNode(codeElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
    }
};

const handleCommandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
};

const handleExecuteCommand = () => {
    if (command.trim() === 'cairo-test hello-world.cairo') {
      runHelloWorldTests();
    } else if (command.trim() === 'cairo-test Assert.cairo') {
      runAssertTests();
    } else if (command.trim() === 'cairo-test Variable.cairo') {
      runVariableTests();
    } else if (command.trim() === 'cairo-run Variable.cairo') {
      runVariableTests2();
    } else if (command.trim() === 'cairo-run Functions.cairo') {
      runVariableTests2();
    } else if (command.trim() === 'cairo-run Expression_If.cairo') {
      runIfTest();
    } else if (command.trim() === 'cairo-run Name_parameters_2.cairo') {
      runNameParTest();
    } else if (command.trim() === 'cairo-run Name_parameters.cairo') {
      runNameParTest2();
    } else if (command.trim() === 'cairo-run Felt.cairo') {
      runFelt();
    } else if (command.trim() === 'cairo-run Felt2.cairo') {
      runFelt2();
    } else if (command.trim() === 'cairo-run Print.cairo') {
      runPrint();
    } else if (command.trim() === 'cairo-run Return_Value.cairo') {
      runReturnValue();
    } else if (command.trim() === 'cairo-run Variable_Basic.cairo') {
      runVariableBasic();
    } else if (command.trim() === 'cairo-run Variable_Mut.cairo') {
      runVariableMut();
    } else if (command.trim() === 'cairo-run Variable_Shadowing.cairo') {
      runVariableShadowing();
    } else if (command.trim() === 'cairo-run Scalar_Types_Strings.cairo') {
      runScalarTypesString();
    } else if (command.trim() === 'cairo-run Scalar_Types_Operator_Arithmetic.cairo') {
      runScalarTypesOperatorArithmetic();
    } else if (command.trim() === 'cairo-run Scalar_Types_Operator_Comparison.cairo') {
      runScalarTypesOperatorComparison();
    } else if (command.trim() === 'cairo-run Scalar_Types_Operator_u256.cairo') {
      runScalarTypesOperator256();
    } else {
      setOutput(['Command not recognized']);
    }
  
    setCommand('');
  };

const runHelloWorldTests = () => {
    const testsOutput = [
      '[DEBUG] Hello, world!               (raw: 5735816763073854953388147237921)',
      '',
      'Run completed successfully, returning []',
    ];

    setOutput(testsOutput);
};

const runAssertTests = () => {
    const testsOutput = [
      'running 1 tests',
      'test Assert::Assert::test_main ... ok',
      'test result: ok. 1 passed; 0 failed; 0 ignored; 0 filtered out;',
    ];

    setOutput(testsOutput);
};

const runVariableTests = () => {
    const testsOutput = [
      'running 1 tests',
      'test Variable::Variable::test_main ... ok',
      'test result: ok. 1 passed; 0 failed; 0 ignored; 0 filtered out;',
    ];

    setOutput(testsOutput);
};

const runVariableTests2 = () => {
    const testsOutput = [
      'Run completed successfully, returning []',
    ];

    setOutput(testsOutput);
};

const runIfTest = () => {
  const testsOutput = [
    '[DEBUG] Cairo is awesome!               (raw: 22928401211463211905187340600081071826209)',
    'Run completed successfully, returning []',
  ];

  setOutput(testsOutput);
};

const runNameParTest = () => {
    const testsOutput = [
      '[DEBUG]                                 (raw: 3)',
      '[DEBUG]                                 (raw: 4)',
      'Run completed successfully, returning []',
    ];

    setOutput(testsOutput);
};

const runNameParTest2 = () => {
    const testsOutput = [
      '[DEBUG]                                 (raw: 1)',
      '[DEBUG]                                 (raw: 2)',
      'Run completed successfully, returning []',
    ];

    setOutput(testsOutput);
};

const runFelt = () => {
    const testsOutput = [
      'Run completed successfully, returning []',
    ];

    setOutput(testsOutput);
};

const runFelt2 = () => {
    const testsOutput = [
      'Run completed successfully, returning []',
    ];

    setOutput(testsOutput);
};

const runPrint = () => {
  const testsOutput = [
   '[DEBUG]                                 (raw: 3600)',
   'Run completed successfully, returning []',
  ];

  setOutput(testsOutput);
};

const runReturnValue = () => {
    const testsOutput = [
     'Run completed successfully, returning [500]',
    ];

  setOutput(testsOutput);
};

const runVariableBasic = () => {
  const testsOutput = [
   '[DEBUG]                                 (raw: 2)',
   '[DEBUG]                                 (raw: 5)',
   '[DEBUG]                                 (raw: 20)',
   'Run completed successfully, returning []',
  ];

setOutput(testsOutput);
};

const runVariableMut = () => {
  const testsOutput = [
   '[DEBUG]                                 (raw: 20)',
   '[DEBUG]                                 (raw: 30)',
   'Run completed successfully, returning []',
  ];

setOutput(testsOutput);
};

const runVariableShadowing = () => {
  const testsOutput = [
   '[DEBUG] Inner scope age Nadai is:       (raw: 460936192697377895572574560520641142114213622945834051662650)',
   '[DEBUG]                                 (raw: 120)',
   '[DEBUG] Outer scope age Nadai is:       (raw: 498771017296102784416047316307063156605336911421473641034554)',
   '[DEBUG]                                 (raw: 30)',
   'Run completed successfully, returning [])',
  ];

   setOutput(testsOutput);
};

const runScalarTypesString = () => {
  const testsOutput = [
   '[DEBUG] Nadai                           (raw: 336641417577)',
   'Run completed successfully, returning [],',
  ];

   setOutput(testsOutput);
};

const runScalarTypesOperatorArithmetic = () => {
  const testsOutput = [
    '[DEBUG] 5 + 3 == 8                      (raw: 250878826942406347006008)',
    '[DEBUG] 2 + 5 == 7                      (raw: 236711727495996434620471)',
    '[DEBUG] 10 - 5 == 5                     (raw: 59464632299762274780651573)',
    '[DEBUG] 1 * 3 == 3                      (raw: 231989288953333728223283)',
    '[DEBUG] 2 * 4 == 8                      (raw: 236711655437302885064760)',
    '[DEBUG] 19 / 7 == 2                     (raw: 59507133742225488686686258)',
    '[DEBUG] 19 % 7 == 5                     (raw: 59507133021649548307406901)',
    'Run panicked with [60697465104476077298890032 (250-100=150)].',
  ];

  setOutput(testsOutput);
};

const runScalarTypesOperatorComparison = () => {
  const testsOutput = [
    '[DEBUG] 3 == 3                          (raw: 56213559386163)',
    '[DEBUG] 3 != 2                          (raw: 56213089624114)',
    '[DEBUG] 3 < 7                           (raw: 219584143415)',
    '[DEBUG] 2 <= 8                          (raw: 55114030981176)',
    '[DEBUG] 10 > 3                          (raw: 54082769133619)',
    '[DEBUG] 50 >= 10                        (raw: 3832598734577873200)',
    '[DEBUG] !(5 > 5)                        (raw: 2389218014917571881)',
    'Run completed successfully, returning [].',
  ];

  setOutput(testsOutput);
};

const runScalarTypesOperator256 = () => {
  const testsOutput = [
    '[DEBUG] z == 2 * y                      (raw: 576723419439064974762105)',
    '[DEBUG] 0 == x - y                      (raw: 227268299707011876855929)',
    '[DEBUG] 1 == x / y                      (raw: 231990666189881522200697)',
    '[DEBUG] 0 == x % y                      (raw: 227268299707011876331641)',
    '[DEBUG] x == y                          (raw: 132079861702777)',
    '[DEBUG] x <= y                          (raw: 132079844925561)',
    '[DEBUG] x >= y                          (raw: 132079878479993)',
    '[DEBUG] x - 1 < y                       (raw: 2215927833623678165113)',
    '[DEBUG] x + 1 >= y                      (raw: 567277381292473569845369)',
    '[DEBUG] x != y                          (raw: 132079391940729)',
    'Run completed successfully, returning []',
];

  setOutput(testsOutput);
};


const handleFunctionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFunction = event.target.value;
    setSelectedFunction(selectedFunction);
    setFunctionCode(getFunctionCode(selectedFunction));
  };

const getFunctionCode = (selectedFunction: string) => {
    switch (selectedFunction) {
      case 'hello-world':
        return `use debug::PrintTrait;

fn main() {
  'Hello, world!'.print();
}

// cairo-test hello-world.cairo`;


      case 'assert':
        return `fn main(x: felt252, y: felt252) {
   assert(x != y, 'error, x is equal to y');
}

#[test]
fn test_main() {
    main(1,2);
}

// cairo-test Assert.cairo`;

      case 'variables':
        return `fn main() {
  let immutable_var: felt252 = 17;
  // immutable_var = 38;  <-- fails to compile
      
  // but this is legal:
  let mut mutable_var: felt252 = immutable_var;
  mutable_var = 38;
      
  assert(mutable_var != immutable_var, 'mutable equals immutable');
}
      
#[test]
fn test_main() {
    main();
}
      
// cairo-test Variable.cairo
// cairo-run Variable.cairo`;

      case 'functions':
        return `fn main() {
  let x = 3;
}
        
// This function returns an u32.
fn inc(x: u32) -> u32 {
   x + 1
}
        
// cairo-run Functions.cairo`;

      case 'if':
        return `use debug::PrintTrait;

fn main() {
    let is_awesome = true;

    if is_awesome {
        'Cairo is awesome!'.print();
    }
}
        
// cairo-run Expression_If.cairo`;

      case 'name_parameters_2':
        return `use debug::PrintTrait;

fn foo(x: u8, y: u8) {
    // ...
}

fn main() {
    let first_arg = 3;
    let second_arg = 4;
    // parameter_name: value
    foo(x: first_arg, y: second_arg);
    // foo(y: second_arg, x: first_arg); <- this would produce an error
    first_arg.print();
    second_arg.print();

}
        
// cairo-run Name_parameters_2.cairo`;

      case 'name_parameters2':
        return `use debug::PrintTrait;

fn foo(x: u8, y: u8) {
    // ...
}

fn main() {
    let first_arg = 3;
    let second_arg = 4;
    // parameter_name: value
    foo(x: first_arg, y: second_arg);
    // foo(y: second_arg, x: first_arg); <- this would produce an error
    first_arg.print();
    second_arg.print();

}
        
// cairo-run Name_parameters2.cairo`;

      case 'Name_parameters':
        return `use debug::PrintTrait;

fn foo(x: u8, y: u8) {
}

fn main() {
    let x = 1;
    let y = 2;
    foo(:x, :y);
    x.print();
    y.print();
}
        
// cairo-run Name_parameters.cairo`;

      case 'felt':
        return `fn main() {
   // max value of felt252
   let x = 3618502788666131213697322783095070105623107215331596699973092056135872020480;
   let y = 1;
   assert(x + y == 0, 'P == 0 (mod P)');
}
        
// cairo-run Felt.cairo`;

      case 'felt2':
        return `fn main() {
   // max value of felt252
   let x: felt252 = 3618502788666131213697322783095070105623107215331596699973092056135872020480;
   let y: felt252 = 1;
   assert(x + y == 0, 'P == 0 (mod P)');
    
}      
// cairo-run Felt2.cairo`;

      case 'print':
        return `use debug::PrintTrait;

const ONE_HOUR_IN_SECONDS: felt252 = 3600;

fn main(){
    ONE_HOUR_IN_SECONDS.print();
}
// cairo-run Print.cairo`;

      case 'Return_Value':
        return `fn main() -> felt252 {
    return 500; 
}
// cairo-run Return_Value.cairo`

      case 'Variable_Basic':
        return `use debug::PrintTrait;

fn main() {
    let x = 2;
    let y:u8 = 5;
    let z:u32 = 20;
    x.print();
    y.print();
    z.print();
}
// cairo-run Variable_Basic.cairo`

      case 'Variable_Mut':
        return `use debug::PrintTrait;
fn main() {
    let mut Nadai_Edad = 20;
    Nadai_Edad.print();
    Nadai_Edad = 30;
    Nadai_Edad.print();
}
  
// cairo-run Variable_Mut.cairo`

      case 'Variable_Shadowing':
        return `use debug::PrintTrait;
fn main() {
    let mut Nadai_Age = 20_u32;
    let Nadai_Age: felt252 = 30;
    {
         // It will only affect the variables inside the braces
      let Nadai_Age = Nadai_Age * 4;
      'Inner scope age Nadai is:'.print();
      Nadai_Age.print()
      }
   'Outer scope age Nadai is:'.print();
   Nadai_Age.print();
}

// cairo-run Variable_Shadowing.cairo`

      case 'Scalar_Types_Strings':
        return `use debug::PrintTrait;
fn main() {
    let my_first_name = 'Javier';
    let mut my_first_name = 'Nadai';
    my_first_name.print();
}

// cairo-run Scalar_Types_Strings.cairo`

      case 'Scalar_Types_Operator_Arithmetic':
        return `use debug::PrintTrait;
fn main() {
    assert(5_u8 + 3_u8 == 8_u8,'5 + 3 == 8');
    '5 + 3 == 8'.print();
    assert(2_u8 + 5_u8 == 7_u8, '2 + 5 == 7');
    '2 + 5 == 7'.print();
    assert(10_u8 - 5_u8 == 5_u8, '10 - 5 == 5');
    '10 - 5 == 5'.print();
    assert(1_u8 * 3_u8 == 3_u8, '1 * 3 == 3');
    '1 * 3 == 3'.print();
    assert(2_u8 * 4_u8 == 8_u8, '2 * 4 == 8');
    '2 * 4 == 8'.print();
    assert(19_u8 / 7_u8 == 2_u8, '19 / 7 == 2');
    '19 / 7 == 2'.print();
    assert(19_u8 % 7_u8 == 5_u8, '19 % 7 == 5');
    '19 % 7 == 5'.print();
    // This result is incorrect, result is 
    // assert(250_u8 - 100_u8 == 150_u8, '250-100=150');
    assert(250_u8 - 100_u8 == 100_u8, '250-100=150');
    '250-100=150'.print();
}

// cairo-run Scalar_Types_Operator_Arithmetic.cairo`

      case 'Scalar_Types_Operator_Comparison':
        return `use debug::PrintTrait;
fn main() {
     assert(3_u8 == 3_u8, '3 == 3');
    '3 == 3'.print();
     assert(3_u8 != 2_u8, '3 != 2');
    '3 != 2'.print();
     assert(3_u8 < 7_u8, '3 < 7');
    '3 < 7'.print();
      assert(2_u8 <= 8_u8, '2 <= 8');
    '2 <= 8'.print();
     assert(10_u8 > 3_u8, '10 > 3');
    '10 > 3'.print();
     assert(50_u8 >= 10_u8, '50 >= 10');
    '50 >= 10'.print();
    assert(!(5_u8 > 5_u8), '!(5 > 5)');
    '!(5 > 5)'.print();
}
 
// cairo-run Scalar_Types_Operator_Comparison.cairo`

      case 'Scalar_Types_Operator_u256':
        return `use debug::PrintTrait;
fn main() {
     let x:u256 = u256{high:3, low: 3};
     let y:u256 = u256{high:3, low: 3};
  
     let z = x + y;
        
     assert(z == 2 * y, 'z == 2 * y');
     'z == 2 * y'.print();
     assert(0 == x - y, '0 == x - y');
     '0 == x - y'.print();
     assert(1 == x / y, '1 == x / y');
     '1 == x / y'.print();
     assert(0 == x % y, '0 == x % y');
     '0 == x % y'.print();
     
     assert(x == y, 'x == y');
     'x == y'.print();
     assert(x <= y, 'x <= y');
     'x <= y'.print();
     assert(x >= y, 'x >= y');
     'x >= y'.print();
     assert(x - 1 < y, 'x - 1 < y');
     'x - 1 < y'.print();
     assert(x + 1 > y, 'x + 1 >= y');
     'x + 1 >= y'.print();
     assert(x != y - 1, 'x != y');
     'x != y'.print();
}

// cairo-run Scalar_Types_Operator_u256.cairo`

     default:
        return '';
    }
  };


  return (
    <div className="comandos-container">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-dot terminal-red" />
          <span className="terminal-dot terminal-yellow" />
          <span className="terminal-dot terminal-green" />
        </div>
        <div className="terminal-body">
          <div className="terminal-output">
            {output.map((result, index) => (
              <pre key={index}>{result}</pre>
            ))}
          </div>
          <div className="terminal-input-container">
            <span className="terminal-prompt">$</span>
            <input
              className="terminal-input"
              value={command}
              onChange={handleCommandChange}
              onKeyDown={(e) => e.key === 'Enter' && handleExecuteCommand()}
              autoFocus
            />
          </div>
        </div>
  
        <div className="terminal-footer">
          <div className="function-container">
            <h2>Ejemplos Cairo - Ejecuta los comandos que encontrarán al final de cada función con //</h2>
            <div className="function-select-container">
              <label htmlFor="function-select">Selecciona una Ejemplo:</label>
              <select
                id="function-select"
                value={selectedFunction}
                onChange={handleFunctionChange}
              >
                <option value="">-- Select --</option>
                <option value="hello-world">Hello World</option>
                <option value="assert">Assert</option>
                <option value="Variable_Basic">Variables Basic</option>
                <option value="Variable_Mut">Variables Mut</option>
                <option value="Variable_Shadowing">Variables Shadowing</option>
                <option value="variables">Variables</option>
                <option value="functions">Funciones</option>
                <option value="if">If Expression</option>
                <option value="Name_parameters">Name Parameters </option>
                <option value="name_parameters_2">Name Parameters 2</option>
                <option value="felt">Felt</option>
                <option value="felt2">Felt 2</option>
                <option value="print">Print</option>
                <option value="Return_Value">Return Value</option>
                <option value="Scalar_Types_Strings">Scalar Type Strings</option>
                <option value="Scalar_Types_Operator_Arithmetic">Scalar Type Operator Arithmetic</option>
                <option value="Scalar_Types_Operator_Comparison">Scalar Type Operator Comparison</option>
                <option value="Scalar_Types_Operator_u256">Scalar Type Operator u256</option>
              </select>
            </div>
            {selectedFunction && (
              <div className="code-container">
                <div className="function-content">
                  <div className="copy-link" onClick={handleCopyFunction}>
                    <FontAwesomeIcon icon={faCopy} />
                  </div>
                  <pre>{functionCode}</pre>
                </div>
                <div >
  
    </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
  
}
  
export default Comandos;
