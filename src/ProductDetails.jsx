import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const detailsURL = `https://image.tmdb.org/t/p/original/`;

export default function ProductDetails() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);
}
