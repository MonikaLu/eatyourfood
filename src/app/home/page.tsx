"use client";
import axios from "axios";

export default function Page() {
  const url = "https://kassal.app/api/v1/products";
  const token = process.env.NEXT_PUBLIC_API_KEY;

  const fetchProducts = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data[0]);
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    }
  };

  return (
    <div>
      Home
      <button className="text-black" onClick={fetchProducts} type="button">
        Fetch
      </button>
    </div>
  );
}
