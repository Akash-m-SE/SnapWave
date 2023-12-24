import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      // fetching all the pins of each specific category
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your feed" />;

  if (!pins?.length)
    return (
      <div className="text-center h-screen mt-10 text-2xl text-white">
        No pins Found!
      </div>
    );

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
