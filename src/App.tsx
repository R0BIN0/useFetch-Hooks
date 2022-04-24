import { useFetch } from "./Hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, handleError } = useFetch(
    "https://fakerapi.it/api/v1/users?_quantity=10"
  );

  return (
    <>
      <section className="container">
        <h1>CUSTOM HOOK | USEFETCH</h1>
        {loading ? (
          <p>Loader</p>
        ) : (
          <>
            {handleError ? (
              <p>{handleError}</p>
            ) : (
              <div className="items-flex">
                {data.map((item, i) => (
                  <div className="item-box" key={i}>
                    <p>{item.firstname}</p>
                    <p>{item.lastname}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

export default App;
