import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <SearchBar />
        <Weather />
        <WeatherInfo />
      </div>
    </QueryClientProvider>
  );
};

export default App;
