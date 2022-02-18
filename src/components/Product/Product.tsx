import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { tailwind } from "tailwind";
import { ProductFragment, useProductLikeMutation } from "./Product.generated";

export type ProductProps = {
  product: ProductFragment;
};

export const Product = ({ product }: ProductProps) => {
  const [productLike] = useProductLikeMutation();
  const [loading, setLoading] = useState(false);

  const likePress = async () => {
    setLoading(true);
    try {
      await productLike({
        variables: {
          productId: product.id,
        },
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <View style={tailwind("flex flex-col p-4")}>
      <Image
        source={{ uri: product.pictures[0].url }}
        style={tailwind("h-20 w-20")}
      />
      <Text>{product.name}</Text>
      <Text style={tailwind("font-bold")}>{product.priceValue / 100} €</Text>
      {loading ? (
        <ActivityIndicator color={"black"} />
      ) : (
        <TouchableOpacity onPress={likePress}>
          <Text style={tailwind("text-red-500 font-bold ")}>
            ❤️ {product.likes}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
