const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserCard;
