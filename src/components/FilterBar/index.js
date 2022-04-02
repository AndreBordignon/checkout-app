import React, { useEffect } from "react";
import { Text } from "react-native";

import { Container, Tag, TagText } from "./styles";
import { getAllCategories } from "../../services/CategoryService";
import { FlatList } from "react-native";

function FilterBar({ selectedCategorie, setSelectedCategorie }) {
  const [categories, setCategories] = React.useState();

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    await getAllCategories()
      .then((response) => {
        const catArray = [response.data.unshift("Ultimos")];
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const renderItem = ({ item }) => {
    return (
      <Tag
        onPress={() => setSelectedCategorie(item)}
        selected={selectedCategorie === item}
      >
        <TagText selected={selectedCategorie === item}>{item}</TagText>
      </Tag>
    );
  };
  return (
    <Container>
      {categories && (
        <FlatList
          data={categories}
          horizontal
          renderItem={(item) => renderItem(item)}
          keyExtractor={() => Math.random()}
        />
      )}
    </Container>
  );
}

export default FilterBar;
