import AccordionItem from "./AccordionItem";
import Image from "next/image";
import kbankLogo from "@/assets/images/kbank.svg";
import scbLogo from "@/assets/images/scb.svg";
import trueWalletLogo from "@/assets/images/truewallet.svg";

const BankInfo = ({ logo, bankName, accountNumber, testName }) => (
  <div className="flex flex-col justify-center items-center text-center text-black p-3">
    <Image className="my-3" src={logo} alt={bankName} width={70} height={70} />
    <p className="text-sm">{bankName}</p>
    <span className="text-sm">{accountNumber}</span>
    <span className="text-sm">{testName}</span>
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
      <div className="headerprocess">
        <h1 className="text-center text-3xl mb-3"> + ฝากเงิน</h1>
        <div className="accordion-div">
          <div className="pdingaccord">
            <AccordionItem title="ธนาคาร" index={1}>
              <div className="grid grid-cols-2 gap-1">
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
              <div className="grid grid-cols-2 gap-1">
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
