import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const VerifyPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });

  const { verifyCode, isVerifyingCode } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await verifyCode(formData);
    if(success) {
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-base-200 rounded-xl shadow-md">
        
        <div className="text-center">
          <h1 className="text-2xl font-bold">Verify Code</h1>
          <p className="text-base-content/60">
            Enter your email and OTP code
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* OTP */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">OTP Code</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter 6-digit code"
              value={formData.otp}
              onChange={(e) =>
                setFormData({ ...formData, otp: e.target.value })
              }
              maxLength={6}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isVerifyingCode}
          >
            {isVerifyingCode ? "Verifying..." : "Verify"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default VerifyPage;