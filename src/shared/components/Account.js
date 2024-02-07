import Image from "next/image";
import React from "react";
import kbank from "@/assets/images/kbank.svg";

const Account = () => {
  return (
    <div className="headerprocess">
      <h1 className="text-center text-3xl my-3">
        <i className="fa-solid fal fa-user checkbtn"></i>เข้าเล่นเกม
      </h1>
      <div className="containprocess bg-back p-4">
        <table className="accountofuser w-full">
          <tbody>
            <tr className="trofaccount">
              <td className="headeraccount">
                <i className="fa-solid fal fa-user mr-2"></i> คุณ:
              </td>
              <td>ทดสอบ ทดสอบ</td>
            </tr>
            <tr className="trofaccount">
              <td className="headeraccount">
                <i className="fa-solid fal fa-user-circle mr-2"></i> ยูสเซอร์:
              </td>
              <td>AC168001</td>
            </tr>
            <tr className="trofaccount">
              <td className="headeraccount">
                <i className="fa-solid fal fa-lock mr-2"></i> รหัสผ่าน:
              </td>
              <td>1234567890</td>
            </tr>
            <tr className="trofaccount">
              <td className="headeraccount">
                <i className="fa-solid fal fa-university mr-2"></i>{" "}
                ธนาคารของคุณ:
              </td>
              <td>
                <Image
                  src={kbank}
                  width="25"
                  className="inline-block mr-1"
                  alt="ธนาคาร"
                />{" "}
                กสิกรไทย
              </td>
            </tr>
            <tr className="trofaccount">
              <td className="headeraccount">
                <i className="fa-solid fal fa-gift mr-2"></i> โปรโมชั่นของคุณ:
              </td>
              <td>ไม่รับโปรโมชั่น</td>
            </tr>
            <tr className="trofaccount">
              <td className="headeraccount">
                <i className="fa-solid fal fa-users mr-2"></i> ยอดแนะนำเพื่อน:
              </td>
              <td>949.00 บาท</td>
            </tr>
            <tr className="trofaccount">
              <td className="headeraccount">
                <i className="fa-solid fal fa-sack-dollar mr-2"></i>{" "}
                ยอดคอมมิชชั่น:
              </td>
              <td>478.00 บาท</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Account;
