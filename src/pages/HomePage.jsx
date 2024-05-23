import React from "react";
import axios from "axios";
import Button from "../components/Button";

const HomePage = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [render, setRender] = React.useState(false);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [render]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='text-center p-10'>
      <h2 className='font-bold font-serif text-10 text-3xl text-slate-200 drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)]'>
        Barman dziś proponuje
      </h2>
      {data && (
        <div className='flex flex-center flex-col content-center items-center p-2'>
          <h2 className='font-bold p-3 font-serif text-slate-200 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            {data.drinks[0].strDrink}
          </h2>
          <img
            src={data.drinks[0].strDrinkThumb}
            alt={data.drinks[0].strDrink}
            className='size-1/4 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
          />
          <p className='font-bold p-3  w-3/4 font-serif text-slate-200 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            {data.drinks[0].strInstructions}
          </p>
        </div>
      )}
      <Button
        text='Chcę coś innego'
        onClick={() => setRender(!render)}
        type='button'
      />
    </div>
  );
};

export default HomePage;
