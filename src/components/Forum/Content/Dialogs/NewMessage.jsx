import { useEffect, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { AuthContext } from "./../../../../contexts/AuthContext.jsx";
import { ForumContext } from "./../../../../contexts/ForumContext.jsx";
import { BACKEND_URL } from "./../../../../const/urls.js";

import styles from "./Dialogs.module.css";

export const NewMessage = () => {
  return <div></div>;
};

export default NewMessage;
