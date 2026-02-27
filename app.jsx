import { useState } from "react";
import { fetchUser } from "./services/api";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import UserCard from "./components/UserCard";
import "./App.css";


function App() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    setError("");
    setUser(null);

    if (!userId) {
      setError("Please enter a User ID");
      return;
    }

    setLoading(true);
    try {
      const data = await fetchUser(userId);
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Loader + Error Handling UI</h1>

      <div className="input-group">
        <input
          type="number"
          placeholder="Enter User ID (1-10)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleFetch}>Fetch User</button>
      </div>

      {loading && <Loader />}

      {error && (
        <ErrorMessage
          message={error}
          onRetry={handleFetch}
        />
      )}

      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
