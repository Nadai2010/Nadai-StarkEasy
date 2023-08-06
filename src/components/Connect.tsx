import { useNavigate } from 'react-router-dom';
import { useConnectors } from "@starknet-react/core";

export default function Connect() {
  const { connect, connectors } = useConnectors();
  const navigate = useNavigate(); // Agrega esta línea

  const handleConnect = (connector: any) => {
    connect(connector);
    navigate('/TokenForm'); // Redirige después de la conexión
  };

  return (
    <div className="flex justify-center gap-8">
      {connectors.map((connector) => (
        <button
          className="btn"
          onClick={() => handleConnect(connector)} // Usa handleConnect
          key={connector.id()}
          disabled={!connector.available()}
        >
          Connect {connector.id()}
        </button>
      ))}
    </div>
  );
}






