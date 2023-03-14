import { useFetch } from "../../hooks/useFetch";

// page components
import RecipeList from "../../components/recipeList";

// styles
import "./home.css";

const Home = () => {
  const { error, data, isPending } = useFetch("http://localhost:3000/recipes");

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
