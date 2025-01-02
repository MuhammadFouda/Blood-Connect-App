const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-primary text-center">BloodConnect</h1>
        <p className="text-muted-foreground text-center mb-4">Connecting donors with those in need</p>
        <h2 className="text-xl font-semibold text-primary">Welcome Back</h2>
        <form className="mt-4">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" className="input" placeholder="Enter your email" required />

          <label className="label mt-4" htmlFor="password">
            Password
          </label>
          <input type="password" id="password" className="input" placeholder="Enter your password" required />

          <button type="submit" className="button mt-6">
            Sign In
          </button>
        </form>
        <p className="text-muted-foreground text-center mt-4">
          New to BloodConnect?{' '}
          <a href="/signup" className="text-accent hover:text-accent/80">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
