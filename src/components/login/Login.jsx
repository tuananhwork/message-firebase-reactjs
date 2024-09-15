import { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  // Xử lý đăng ký tài khoản
  const handleSignup = (e) => {
    e.preventDefault();
    toast.success('Test');
  };

  // Xử lý đăng nhập bằng email và password
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with email:', email, 'and password:', password);
    // Logic để xử lý đăng nhập email/password
  };

  // Xử lý đăng nhập bằng Google
  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
    // Logic để xử lý đăng nhập bằng Google
  };

  // Xử lý đăng nhập bằng Facebook
  const handleFacebookLogin = () => {
    console.log('Logging in with Facebook');
    // Logic để xử lý đăng nhập bằng Facebook
  };

  return (
    <div className="main">
      <form id="login" onSubmit={handleLogin}>
        <h2>Login to Chat App</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p>Or login with</p>
        <div className="social-login">
          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            <span>Google</span>
          </button>
          <button type="button" className="facebook-btn" onClick={handleFacebookLogin}>
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </button>
        </div>
      </form>

      <form id="signup" onSubmit={handleSignup}>
        <h2>Register to Chat App</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="signup-confirm-password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            placeholder="Re enter your password"
            required
          />
        </div>

        <button type="submit" className="signup-btn">
          Register
        </button>

        <p>Or signup with</p>
        <div className="social-login">
          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            <span>Google</span>
          </button>
          <button type="button" className="facebook-btn" onClick={handleFacebookLogin}>
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
