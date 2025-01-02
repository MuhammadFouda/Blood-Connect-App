const UserProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-4">User Profile</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-primary">Personal Information</h2>
            <p className="text-muted-foreground">Name: John Doe</p>
            <p className="text-muted-foreground">Email: john@example.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-primary">Medical Information</h2>
            <p className="text-muted-foreground">Blood Type: A+</p>
            <p className="text-muted-foreground">Allergies: None</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
