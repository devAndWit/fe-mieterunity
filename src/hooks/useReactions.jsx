import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useReactions = () => {
  const { backendUrl } = useContext(AuthContext);

  const [reactions, setReactions] = useState(null);
  const [reactionsError, setReactionsError] = useState(null);
  const [reactionsLoading, setReactionsLoading] = useState(true);

  useEffect(() => {
    const loadReactions = async () => {
      setReactionsLoading(true);

      try {
        const response = await axios.get(`${backendUrl}/reactions`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.data) {
          setReactionsError("Die Reaktionsdaten sind leer.");
          setReactions([]); // Leeres Array setzen.
          return;
        }
        setReactions(response.data);
        setReactionsError(null);
      } catch (err) {
        console.error(err);
        if (axios.isAxiosError(err)) {
          if (err.response) {
            setReactionsError(
              `Serverfehler: ${err.response.status} - ${
                err.response.data.message || "Unbekannter Fehler"
              }`
            );
          } else if (err.request) {
            setReactionsError(
              "Netzwerkfehler: Verbindung zum Server fehlgeschlagen."
            );
          } else {
            setReactionsError(`Clientfehler: ${err.message}`);
          }
        } else {
          setReactionsError("Ein unerwarteter Fehler ist aufgetreten.");
        }
      } finally {
        setReactionsLoading(false);
      }
    };

    loadReactions();
  }, [backendUrl]);

  const getReactionTextById = (id) => {
    const val = reactions?.data?.find((value) => {
      return value._id === id;
    });

    return val.text;
  };

  const getReactionSymbolById = (id) => {
    const val = reactions?.data?.find((value) => {
      return value._id === id;
    });

    return val.symbol;
  };

  return {
    reactions,
    getReactionTextById,
    getReactionSymbolById,
    reactionsError,
    reactionsLoading,
  };
};

export default useReactions;
