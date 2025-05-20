import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";

export default function ActivitiesPageItem({ activity }) {
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", `/activities/${activity.id}`, ["allActivities"]);
  return (
    <>
      <li className="activities">
        <p>{activity.name}</p>
        {token && (
          <button
            onClick={() => {
              deleteActivity();
            }}
          >
            {loading ? "Deleting" : error ? error : "Delete"}
          </button>
        )}
      </li>
    </>
  );
}
