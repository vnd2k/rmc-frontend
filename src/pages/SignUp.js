import { useHistory } from "react-router-dom";

import SignUpForm from "../components/meetups/SignUpForm";

function SignUp() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <SignUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default SignUp;
