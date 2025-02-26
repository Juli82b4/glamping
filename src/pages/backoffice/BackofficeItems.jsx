// ACTIVITIES
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useFetch } from "../../components/hooks/useFetch";
import { useFetchReviews } from "../../components/hooks/useFetchReviews";
const BackofficeActivities = () => {
  const { activities, deleteActivity, refetch } = useFetch();
  const navigate = useNavigate();

  const handleAddActivity = () => {
    navigate("/activities/add");
  };

  const handleEdit = (activityId) => {
    navigate(`/activities/edit/${activityId}`);
  };

  console.log(activities);
  return (
    <article>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Ugedage</th>
            <th>Tidspunkt</th>
            <th>Billede</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities?.map((activity) => (
            <tr key={activity._id} className="backofficeItem">
              <td>{activity.title}</td>
              <td>{`${activity.description.slice(0, 10)}...`}</td>
              <td>{activity.date}</td>
              <td>{activity.time}</td>
              <td>
                <img src={activity.image}></img>
              </td>
              <td className="buttons">
                <Button
                  buttonText="Slet"
                  background="red"
                  onClick={() => deleteActivity(activity._id)}
                />
                <Button
                  buttonText="Redigér"
                  onClick={() => handleEdit(activity._id)}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <Button
                buttonText="Tilføj aktivitet"
                background="green"
                onClick={() => handleAddActivity()}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Outlet context={{ refetch }} />
    </article>
  );
};

// STAYS

// REVIEWS
const BackofficeReviews = () => {
  const { reviews, deleteReview } = useFetchReviews();

  return (
    <article>
      <table>
        <thead>
          <tr>
            <th>Aktivitet</th>
            <th>Navn</th>
            <th>Alder</th>
            <th>Review</th>
            <th>Tid</th>
            <th>Billede</th>
            <th>---</th>
          </tr>
        </thead>

        <tbody>
          {reviews?.map((review) => (
            <tr key={review._id} className="backofficeItem">
              <td>{review.stay}</td>
              <td>{review.name}</td>
              <td>{review.age}</td>
              <td>{review.review}</td>
              <td>{review.created}</td>
              <td>
                <img src={review.image}></img>
              </td>
              <td>
                <Button
                  buttonText="Slet"
                  background="red"
                  onClick={() => deleteReview(review._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};

export { BackofficeActivities, BackofficeReviews };
