import React, { useState } from 'react';
import BigNumber from 'bignumber.js';
import styled from 'styled-components'; // Importar styled-components

interface ConverterProps {
    onConvert: () => void;
}

// Estilos de los componentes en el componente Converter
const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;


const InputLabel = styled.label`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 50vh;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1.2rem;
  flex: 1;
`;

const CustomButton = styled.button`
  display: inline-block;
  background-color: #9d6af0;
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem 3rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  font-family: 'Teko', sans-serif;
  margin-left: 2vh;

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(45deg);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  &:hover {
    background-color: #6b099c;
    transform: scale(1.05);
  }

  &:hover:before {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const StyledTable = styled.table`
  width: 125vh; /* Ancho fijo para la tabla */
  margin-top: 0.2rem;
  border-radius: 10px;
  border-collapse: collapse;
  border: 1px solid #ddd;
  background-color: #ffffff;
`;

const StyledTableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
  text-align: center;
`;

const Converter: React.FC<ConverterProps> = ({ onConvert }) => {
    const [input, setInput] = useState<string>('');
    const [outputHex, setOutputHex] = useState<string>('');
    const [outputFelt, setOutputFelt] = useState<string>('');

    const convertToOtherFormats = () => {
        const text = input;
        const hex = [...text].map((char) => char.charCodeAt(0).toString(16)).join('');

        // Convertir a valor Felt usando BigNumber
        let feltValue = new BigNumber(0);
        for (let i = 0; i < text.length; i++) {
            const charCode = new BigNumber(text.charCodeAt(i));
            const exponent = new BigNumber(text.length - i - 1);
            const term = charCode.multipliedBy(new BigNumber(256).exponentiatedBy(exponent));
            feltValue = feltValue.plus(term);
        }

        const feltString = feltValue.toFixed(0); // Convertir a cadena sin decimales
        setOutputHex(`0x${hex}`);
        setOutputFelt(feltString);
    };

    return (
        <div>
            <InputField>
                <InputLabel>Convert any name you're going to register in Stark Easy ENS to Felt</InputLabel>
                <InputWrapper>
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        className="form-control formy mt-2 mb-4 text-center shadow"
                        placeholder="Convert Name by to Felt"
                        maxLength={31}
                    />
                    <CustomButton onClick={() => { convertToOtherFormats(); onConvert(); }}>
                        Convert
                    </CustomButton>
                </InputWrapper>
            </InputField>

            <TableWrapper>
                <StyledTable>
                    <tbody>
                        <tr>
                            <StyledTableCell>Hexadecimal</StyledTableCell>
                        </tr>
                        <tr>
                            <StyledTableCell>{outputHex}</StyledTableCell>
                        </tr>
                    </tbody>
                </StyledTable>
                
                <StyledTable>
                    <tbody>
                        <tr>
                            <StyledTableCell>Felt</StyledTableCell>
                        </tr>
                        <tr>
                            <StyledTableCell>{outputFelt}</StyledTableCell>
                        </tr>
                    </tbody>
                </StyledTable>
            </TableWrapper>
        </div>
    );
};

export default Converter;
