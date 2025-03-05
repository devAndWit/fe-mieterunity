import { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./ReactionsList.css";
import { AuthContext } from "../contexts/AuthContext.jsx";

export const ReactionsList = () => {
  const { backendUrl } = useContext(AuthContext);

  const [reactionList, setReactionList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initial auf true setzen
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadReactions = async () => {
      try {
        const response = await axios.get(`${backendUrl}/reactions`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response && response.data && response.status === 200) {
          setReactionList(response.data.data || []);
        } else if (response && response.status === 304) {
          // 304: Daten nicht geändert, verwende den aktuellen Zustand
          setIsLoading(false);
          return;
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error("Error fetching reactions ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadReactions();
  }, [backendUrl]); // Nur backendUrl als Abhängigkeit

  if (isLoading) {
    return <span>Reaktionen werden geladen...</span>;
  }

  if (isError) {
    return <span>Fehler beim Laden der Reaktionen!</span>;
  }

  if (!isLoading && !isError) {
    return (
      <>
        <div className="ReactionsList">
          {reactionList.length > 0 &&
            reactionList.map((value, index) => (
              <span key={"reaction_" + index}>{value.symbol}</span>
            ))}
        </div>
      </>
    );
  }
};

export default ReactionsList;
