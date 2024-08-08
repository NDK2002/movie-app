import React, { useEffect, useState } from "react";
import apiService from "../app/apiServie";
import { API_KEY } from "../app/config";

function PopularPage() {
  const [loadingTrending, setLoadingTrending] = useState();
  const [trendingList, setTrendingList] = useState([]);
  const [cutInitial, setCutInitial] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingTrending(true);
        const res = await apiService.get(`trending/all/day?api_key=${API_KEY}`);
        const result = res.data.results;
        setTrendingList(result);
        setCutInitial([...result].splice(16, 4));
        setLoadingTrending(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return <div></div>;
}

export default PopularPage;
