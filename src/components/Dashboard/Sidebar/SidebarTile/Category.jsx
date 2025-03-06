import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { fetchSidebarData } from '';  // 
import '../../Styles/styles.css';
import { AuthContext } from "../../../../contexts/AuthContext.jsx";


function Category() {
    const { backendUrl, user } = useContext(AuthContext);
    console.log(backendUrl);


    const [categoryList, setCategoryList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // API-Daten holen
        const loadCategories = async () => {
            try {
                const response = await axios.get(
                    `${backendUrl}/categories`,
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log(response);

                if (response && response.data && response.status === 200) {
                    setCategoryList(response.data.data || null);
                } else if (response && response.status === 304) {
                    // 304: Daten nicht geändert, verwende den aktuellen Zustand
                    setIsLoading(false);
                    return;
                } else {
                    setIsError(true);
                }
            } catch (error) {
                console.error("Error fetching Category: ", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        loadCategories();


    }, [backendUrl]);

    console.log("isLoading");
    if (isLoading) {
        return <div>Data Loading....</div>;
    }

    console.log("isError");
    if (isError) {
        return (

            <div>Error at Category Loading</div>
        );
    }
    if (!isLoading && !isError) {
        console.log(categoryList);
        return (


            <div className="sidebar-tile" >
                {categoryList.map((value, index) => ( // Wichtig: Rückgabe mit Klammern
                    <span key={index}>
                        {value.title}
                    </span>
                ))}
            </div>


        )
    }



};

export default Category;
