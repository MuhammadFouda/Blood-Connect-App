const SignupForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-primary text-center">BloodConnect</h1>
        <p className="text-muted-foreground text-center mb-4">Join our community of life-savers</p>
        <h2 className="text-xl font-semibold text-primary">Create Your Account</h2>
        <form className="mt-4">
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <input type="text" id="name" className="input" placeholder="Enter your full name" required />

          <label className="label mt-4" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" className="input" placeholder="Enter your email" required />

          <label className="label mt-4" htmlFor="password">
            Password
          </label>
          <input type="password" id="password" className="input" placeholder="Create a password" required />

          <label className="label mt-4" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input type="password" id="confirmPassword" className="input" placeholder="Confirm your password" required />

          <button type="submit" className="button mt-6">
            Create Account
          </button>
        </form>
        <p className="text-muted-foreground text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-accent hover:text-accent/80">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
