import React, { useEffect, useState } from "react";

const ResetPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      window.alert(message);
      // Clear message
      setMessage("");
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("รหัสผ่านใหม่และยืนยันรหัสผ่านไม่ตรงกัน");
      return;
    }
    setMessage("รหัสผ่านถูกเปลี่ยนแล้ว");
  };

  return (
    <div className="headerprocess">
      <h1 className="text-center text-3xl mt-3">
        <i className="fa-solid fa-lock gtnbtn"></i>เปลี่ยนรหัสผ่าน
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="relative mt-3">
          <label>รหัสผ่านเก่า:</label>
          <br />
          <input
            className="w-full rounded-full p-3 pl-10 mt-2 focus:outline-none text-black shadow-md filter drop-shadow-md focus:bg-gray-200"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <i
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 fa-solid fa-lock"
            style={{ color: "#326a99", marginTop: "15px", fontSize: "20px" }}
          ></i>
        </div>
        <div className="relative mt-3">
          <label>รหัสผ่านใหม่:</label>
          <br />
          <input
            className="w-full rounded-full p-3 pl-10 mt-2 focus:outline-none text-black shadow-md filter drop-shadow-md focus:bg-gray-200"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <i
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 fa-solid fa-lock"
            style={{ color: "#326a99", marginTop: "15px", fontSize: "20px" }}
          ></i>
        </div>
        <div className="relative mt-3">
          <label>ยืนยันรหัสผ่านใหม่:</label>
          <br />
          <input
            className="w-full rounded-full p-3 pl-10 mt-2 focus:outline-none text-black shadow-md filter drop-shadow-md focus:bg-gray-200"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <i
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 fa-solid fa-lock"
            style={{ color: "#326a99", marginTop: "15px", fontSize: "20px" }}
          ></i>
        </div>
        <div className="flex items-center justify-center my-5">
          <button className="btn-wit p-3 rounded-md text-sm w-40">
          <i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>
            ยืนยันการถอน{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
