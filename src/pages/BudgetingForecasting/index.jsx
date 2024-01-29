import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const BudgetingForecastingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_1.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer h-5 my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="round"
                ></Input>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg_85X85.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 rounded-lg w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_dollaraltsoli.svg"
                        alt="dollaraltSoli"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Payments
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[61%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_walletoutline.svg"
                        alt="walletOutline"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Wallet & Cards
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[54%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_userarrowsout.svg"
                        alt="userarrowsOut"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Transactions
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[43%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Analytics
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_menu.svg"
                        alt="menu"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Messages
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings Two"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_question.svg"
                      alt="question"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700_01"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[37px] items-start justify-start md:mt-0 mt-[37px] w-full">
              <Text
                className="text-gray-900_05 text-lg"
                size="txtGilroySemiBold18Gray90005"
              >
                Transactions
              </Text>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start pr-1 py-1">
                      <Text
                        className="text-base text-blue-A700"
                        size="txtGilroyMedium16BlueA700"
                      >
                        Total Balance
                      </Text>
                      <Text
                        className="mb-1.5 text-4xl sm:text-[32px] md:text-[34px] text-blue-A700"
                        size="txtGilroyBold36"
                      >
                        $40,241
                      </Text>
                    </div>
                    <div className="!w-[70px] h-[70px] my-[11px] overflow-visible">
                      <CircularProgressbar
                        className="!w-[70px] h-[70px] my-[11px] overflow-visible"
                        value={29}
                        counterClockwise
                        strokeWidth={24}
                        styles={{
                          trail: { strokeWidth: 24, stroke: "#0061ff" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(19deg)",
                            stroke: "#e0ebff",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start pr-1 py-1">
                      <Text
                        className="text-base text-green-600"
                        size="txtGilroyMedium16Green600"
                      >
                        Total Income
                      </Text>
                      <Text
                        className="mb-1.5 text-4xl sm:text-[32px] md:text-[34px] text-green-600"
                        size="txtGilroyBold36Green600"
                      >
                        $40,241
                      </Text>
                    </div>
                    <div className="!w-[70px] h-[70px] my-[11px] overflow-visible">
                      <CircularProgressbar
                        className="!w-[70px] h-[70px] my-[11px] overflow-visible"
                        value={29}
                        counterClockwise
                        strokeWidth={24}
                        styles={{
                          trail: { strokeWidth: 24, stroke: "#349765" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(19deg)",
                            stroke: "#d2efe0",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[19px] items-start justify-start pr-[5px] py-[5px]">
                      <Text
                        className="text-base text-red-700"
                        size="txtGilroyMedium16Red700"
                      >
                        Total Expenses
                      </Text>
                      <Text
                        className="mb-[5px] text-4xl sm:text-[32px] md:text-[34px] text-red-700"
                        size="txtGilroyBold36Red700"
                      >
                        $40,241
                      </Text>
                    </div>
                    <div className="!w-[70px] h-[70px] my-[11px] overflow-visible">
                      <CircularProgressbar
                        className="!w-[70px] h-[70px] my-[11px] overflow-visible"
                        value={29}
                        counterClockwise
                        strokeWidth={24}
                        styles={{
                          trail: { strokeWidth: 24, stroke: "#d03329" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(19deg)",
                            stroke: "#f6d6d4",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-[37px] items-start justify-start w-full">
                <Text
                  className="text-gray-900_05 text-lg"
                  size="txtGilroySemiBold18Gray90005"
                >
                  Recent Transaction
                </Text>
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center rounded-[5px] w-16"
                        shape="round"
                        color="blue_50_7f"
                        variant="fill"
                      >
                        <Img
                          className="h-[27px]"
                          src="images/img_checkmark_64X64.svg"
                          alt="checkmark One"
                        />
                      </Button>
                      <div className="flex flex-col gap-2.5 items-start justify-start pr-[7px] pt-[7px]">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtGilroySemiBold18Black900"
                        >
                          Salary
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          May, 16 2022
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-green-600 text-lg"
                      size="txtGilroyBold18"
                    >
                      + $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center rounded-[5px] w-16"
                        shape="round"
                        color="blue_50_7f"
                        variant="fill"
                      >
                        <Img
                          className="h-[27px]"
                          src="images/img_arrowgrowthso.svg"
                          alt="arrowgrowthSo"
                        />
                      </Button>
                      <div className="flex flex-col gap-2.5 items-start justify-start pr-[7px] pt-[7px]">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtGilroySemiBold18Black900"
                        >
                          Light bill
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          May, 14 2022
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-lg text-red-700"
                      size="txtGilroyBold18Red700"
                    >
                      - $180
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center rounded-[5px] w-16"
                        shape="round"
                        color="blue_50_7f"
                        variant="fill"
                      >
                        <Img
                          className="h-[27px]"
                          src="images/img_arrowgrowthso.svg"
                          alt="arrowgrowthSo One"
                        />
                      </Button>
                      <div className="flex flex-col gap-4 items-start justify-start pr-[5px] pt-[5px]">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtGilroySemiBold18Black900"
                        >
                          House Rent
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          May, 10 2022
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-lg text-red-700"
                      size="txtGilroyBold18Red700"
                    >
                      - $550
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center rounded-[5px] w-16"
                        shape="round"
                        color="blue_50_7f"
                        variant="fill"
                      >
                        <Img
                          className="h-[27px]"
                          src="images/img_arrowgrowthso.svg"
                          alt="arrowgrowthSo Two"
                        />
                      </Button>
                      <div className="flex flex-col gap-3.5 items-start justify-start pr-1.5 pt-1.5">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtGilroySemiBold18Black900"
                        >
                          Loan, interests
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          May, 04 2022
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-lg text-red-700"
                      size="txtGilroyBold18Red700"
                    >
                      - $240
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center rounded-[5px] w-16"
                        shape="round"
                        color="blue_50_7f"
                        variant="fill"
                      >
                        <Img
                          className="h-[27px]"
                          src="images/img_checkmark_64X64.svg"
                          alt="checkmark Two"
                        />
                      </Button>
                      <div className="flex flex-col gap-2.5 items-start justify-end pr-1 py-1">
                        <Text
                          className="mt-0.5 text-black-900 text-lg"
                          size="txtGilroySemiBold18Black900"
                        >
                          Salary
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          March, 18 2022
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-green-600 text-lg"
                      size="txtGilroyBold18"
                    >
                      + $2000
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center rounded-[5px] w-16"
                        shape="round"
                        color="blue_50_7f"
                        variant="fill"
                      >
                        <Img
                          className="h-[27px]"
                          src="images/img_arrowgrowthso.svg"
                          alt="arrowgrowthSo Three"
                        />
                      </Button>
                      <div className="flex flex-col gap-3.5 items-start justify-start pr-1.5 pt-1.5">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtGilroySemiBold18Black900"
                        >
                          Loan, interests
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          May, 04 2022
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-lg text-red-700"
                      size="txtGilroyBold18Red700"
                    >
                      - $240
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-[28%]">
                      <Button
                        className="flex h-16 items-center justify-center rounded-[5px] w-16"
                        shape="round"
                        color="blue_50_7f"
                        variant="fill"
                      >
                        <Img
                          className="h-[27px]"
                          src="images/img_arrowgrowthso.svg"
                          alt="arrowgrowthSo Four"
                        />
                      </Button>
                      <div className="flex flex-col gap-[15px] items-start justify-start pr-[5px] pt-[5px]">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtGilroySemiBold18Black900"
                        >
                          House Rent
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyRegular16"
                        >
                          May, 10 2022
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-lg text-red-700"
                      size="txtGilroyBold18Red700"
                    >
                      - $550
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetingForecastingPage;
