import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import ActivityForm from "./ActivityForm";
import ActivitiesPageItem from "./ActivitiesPageItem";
// import useMutation from "../api/useMutation";

export default function ActivitiesPage() {
  const { data, loading, error } = useQuery("/activities", "allActivities");
  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  const { token } = useAuth();
  return (
    <>
      <h1>Activities</h1>
      <h4>Imagine all the activities!</h4>
      <ul>
        {data.map((activity) => (
          <ActivitiesPageItem activity={activity} key={activity.id} />
          // <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
      {token && <ActivityForm />}
    </>
  );
}

// function ActivitiesPageItem({ activity }) {
//   const { token } = useAuth();
//   const {
//     mutate: deleteActivity,
//     loading,
//     error,
//   } = useMutation("DELETE", `/activities/${activity.id}`, ["allActivities"]);
//   return (
//     <>
//       <li className="activities">
//         <p>{activity.name}</p>
//         {token && (
//           <button
//             onClick={() => {
//               deleteActivity();
//             }}
//           >
//             {loading ? "Deleting" : error ? error : "Delete"}
//           </button>
//         )}
//       </li>
//     </>
//   );
// }
