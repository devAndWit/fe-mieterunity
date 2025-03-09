import { useContext, useEffect } from "react";

import List from "./Lists/List.jsx";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import { ForumContext } from "../../../contexts/ForumContext.jsx";

import styles from "./Content.module.css";

const Content = () => {
  const { locationLength } = useContext(ForumContext);

  useEffect(() => {}, [locationLength]);

  return <>{locationLength == 0 ? <div>test</div> : <div>content</div>}</>;
};

export default Content;
