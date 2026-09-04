import "../styles/profileCard.css";

function ProfileCard() {
  return (
    <div className="profile-card">

      <div className="profile-image">
        👩
      </div>

      <h2>Dewanshi Chouhan</h2>

      <p className="role">
        B.Tech CSE Student
      </p>

      <div className="profile-info">

        <div className="info-row">
          <span>📧 Email: </span>
          <strong>dewanshi@gmail.com</strong>
        </div>

        <div className="info-row">
          <span>📱 Phone: </span>
          <strong>+91 9876543210</strong>
        </div>

        <div className="info-row">
          <span>📍 Location: </span>
          <strong>Raigarh, Chhattisgarh</strong>
        </div>

      </div>

      <button className="edit-btn">
        Edit Profile
      </button>

    </div>
  );
}

export default ProfileCard;