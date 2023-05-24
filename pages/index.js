import React, { useState, useEffect } from "react";
import axios from "axios";
import { CharacterCard } from "../components/CharacterCard";
import { Paginator } from "../components/Paginator";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

const IndexPage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${
          process.env.NEXT_PUBLIC_MARVEL_API_KEY
        }&offset=${(currentPage - 1) * 10}&limit=10`
      );
      const data = response.data.data.results;
      if (data && data.length > 0) {
        setCharacters(data);
        setTotalPages(Math.ceil(data.data.total / 10));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderCharacters = () => {
    if (!characters) {
      return <p>Loading...</p>;
    }
    return characters.map((character) => (
      <div key={character.id}>
        <CharacterCard key={character.id} character={character} />
      </div>
    ));
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className={styles.flex}>{renderCharacters()}</div>
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default IndexPage;
