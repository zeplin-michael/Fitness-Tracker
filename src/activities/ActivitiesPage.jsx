import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import ActivityForm from "./ActivityForm";
import ActivitiesPageItem from "./ActivitiesPageItem";

export default function ActivitiesPage() {
  const { data, loading, error } = useQuery("/activities", "allActivities");
  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const { token } = useAuth();
  return (
    <>
      <h1>Activities</h1>
      <h4>Imagine all the activities!</h4>
      <ul className="activity-lists">
        {data.map((activity) => (
          <ActivitiesPageItem activity={activity} key={activity.id} />
        ))}
      </ul>
      {token && <ActivityForm />}
    </>
  );
}
