import AccordionItem from "./AccordionItem";
import Image from "next/image";
import scbLogo from "@/assets/images/scb.svg";
import kbankLogo from "@/assets/images/kbank.svg";
import trueWalletLogo from "@/assets/images/truewallet.svg";

const BankInfo = ({ logo, bankName, accountNumber, testName }) => (
  <div className="flex flex-col justify-center items-center">
    <Image className="my-3" src={logo} alt={bankName} width={90} height={90} />
    <p className="text-center text-white">{bankName}</p>
    <span>{accountNumber}</span>
    <span>{testName}</span>
  </div>
);

const Deposit = () => {
  const banks = [
    {
      logo: scbLogo.src,
      title: "ธนาคารไทยพาณิชย์",
      account: "859-2-59209-0",
      name: "ทดสอบ ทดสอบ 1",
    },
    {
      logo: kbankLogo.src,
      title: "ธนาคารกสิกรไทย",
      account: "859-2-59209-0",
      name: "ทดสอบ ทดสอบ 2",
    },
  ];

  const wallets = [
    { logo: trueWalletLogo.src, phone: "062-546-2593", name: "ทดสอบ 1" },
    { logo: trueWalletLogo.src, phone: "062-539-8783", name: "ทดสอบ 2" },
    { logo: trueWalletLogo.src, phone: "062-539-8783", name: "ทดสอบ 3" },
  ];

  return (
    <div className="tabcontent">
      <div className="headerprocess mt-30">
        <h1 className="text-center  text-3xl"> + ฝากเงิน</h1>
        <div className="accordion-div mt-10">
          <div className="pdingaccord">
            <AccordionItem title="ธนาคาร" index={1}>
              <div className="grid grid-cols-2 gap-2">
                {banks.map((bank, index) => (
                  <BankInfo
                    key={index}
                    logo={bank.logo}
                    bankName={bank.title}
                    accountNumber={bank.account}
                    testName={bank.name}
                  />
                ))}
              </div>
            </AccordionItem>
            <AccordionItem title="Truemoneywallet" index={2}>
              <div className="grid grid-cols-2 gap-2">
                {wallets.map((wallet, index) => (
                  <BankInfo
                    key={index}
                    logo={wallet.logo}
                    bankName="ทรูมันนี่วอลเล็ท"
                    accountNumber={wallet.phone}
                    testName={wallet.name}
                  />
                ))}
              </div>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
