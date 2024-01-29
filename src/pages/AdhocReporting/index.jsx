import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const AdhocReportingPage = () => {
  return (
    <>
      <div className="bg-gray-50_01 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray-50 flex flex-col gap-[35px] items-center justify-start p-6 sm:px-5 w-full">
            <Img
              className="h-[35px] mt-[3px] w-[65%]"
              src="images/img_group.svg"
              alt="Group"
            />
            <div className="flex flex-col md:gap-10 gap-[441px] items-center justify-start mb-2 w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
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
                <div className="flex flex-col items-start justify-start p-2 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700_01"
                      size="txtGilroySemiBold16"
                    >
                      Transactions
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                  <Line className="bg-blue-A700 h-6 w-0.5" />
                  <div className="flex flex-row gap-2 items-start justify-start w-[36%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_analyticssolid.svg"
                      alt="analyticsSolid"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue-A700"
                      size="txtGilroySemiBold16BlueA700"
                    >
                      Report
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
              </div>
              <div className="flex flex-col font-opensans items-start justify-start p-2 w-full">
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
          </div>
        </Sidebar>
        <div className="flex-1 sm:h-[1056px] h-[1109px] md:h-[2276px] md:mt-0 mt-6 md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-6 inset-x-[0] items-center justify-start mx-auto top-[1%] w-full">
            <div className="flex flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="mb-[5px] mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                size="txtGilroySemiBold28"
              >
                Ad hoc Report
              </Text>
              <div className="flex flex-row font-opensans gap-6 items-center justify-between w-[12%]">
                <div className="flex flex-row gap-6 h-14 items-center justify-between overflow-auto w-14">
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-14 items-end justify-start p-2 rounded-[50%] w-14">
                    <div className="md:h-9 h-[35px] mb-1 relative w-9">
                      <Img
                        className="absolute bottom-[0] h-8 left-[0] w-8"
                        src="images/img_notification.svg"
                        alt="notification"
                      />
                      <div className="absolute bg-red-700 border border-blue_gray-50 border-solid flex flex-col h-[18px] items-start justify-start p-0.5 right-[0] rounded-[50%] top-[0] w-[18px]">
                        <Text
                          className="mb-0.5 ml-0.5 md:ml-[0] text-white-A700 text-xs"
                          size="txtOpenSansRomanSemiBold12"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-14 md:h-auto object-cover w-14"
                    src="images/img_ellipse13.png"
                    alt="EllipseThirteen"
                  />
                </div>
                <div className="md:h-12 h-14 pl-1 py-1 relative w-[37%]">
                  <Img
                    className="absolute h-12 inset-y-[0] my-auto object-cover right-[0] rounded-[24px] w-[92%]"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[79px] items-start justify-start ml-0.5 md:ml-[0] w-[81%] md:w-full">
                <div className="h-[50px] relative w-[46%] md:w-full">
                  <div className="absolute bg-gray-50 border-b border-blue_gray-100 border-solid flex flex-row gap-9 h-full inset-[0] items-start justify-center m-auto pb-1 pr-1 w-full">
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        Daily
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        Weekly
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        Monthly
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-1 h-max inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                    <div className="flex flex-col items-center justify-start p-2.5 w-full">
                      <Text
                        className="text-base text-blue-A700 w-auto"
                        size="txtGilroyMedium16BlueA700"
                      >
                        Custom
                      </Text>
                    </div>
                    <Line className="bg-blue-A700 h-0.5 w-full" />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-between pt-1 w-[46%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[48%] sm:w-full">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      Start Date
                    </Text>
                    <Input
                      name="Frame9951"
                      placeholder="08/21/2022"
                      className="!placeholder:text-blue_gray-900 !text-blue_gray-900 font-medium p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid flex w-full"
                      suffix={
                        <Img
                          className="h-5 ml-[35px] mr-3 my-3"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                      }
                      shape="round"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[48%] sm:w-full">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      End Date
                    </Text>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row items-center justify-between p-3 rounded-md w-full">
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        08/27/2022
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_calendar.svg"
                        alt="calendar One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-[73%] md:w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-[51%] md:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[255px] items-center justify-start p-4 w-full"
                        style={{
                          backgroundImage: "url('images/img_group9824.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[23px] items-center justify-start w-[37%] md:w-full">
                          <div className="h-[134px] relative rounded-[20px] w-[134px]">
                            <div className="!w-[134px] h-[134px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[134px] h-[134px] m-auto overflow-visible"
                                value={79}
                                counterClockwise
                                strokeWidth={10}
                                styles={{
                                  trail: {
                                    strokeWidth: 10,
                                    stroke: "#e4e4e499",
                                  },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(0deg)",
                                    stroke: "#0061ff",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <Text
                              className="absolute h-max inset-[0] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 w-max"
                              size="txtGilroySemiBold36"
                            >
                              80%
                            </Text>
                          </div>
                          <Text
                            className="text-2xl md:text-[22px] text-blue-A700 sm:text-xl"
                            size="txtGilroySemiBold24BlueA700"
                          >
                            Overall
                          </Text>
                          <Text
                            className="text-base text-blue_gray-400"
                            size="txtGilroyRegular16"
                          >
                            Actively liberal
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-4 grid grid-cols-3 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[135px] items-center justify-end p-[9px] w-full"
                          style={{
                            backgroundImage: "url('images/img_graphpie.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-5 items-center justify-start mt-[3px] w-[91%] md:w-full">
                            <div className="h-[78px] relative rounded-[10px] w-[78px]">
                              <div className="!w-[78px] h-[78px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[78px] h-[78px] m-auto overflow-visible"
                                  value={89}
                                  counterClockwise
                                  strokeWidth={9}
                                  styles={{
                                    trail: {
                                      strokeWidth: 9,
                                      stroke: "#e4e4e499",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(0deg)",
                                      stroke: "#0061ff",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <Text
                                className="absolute h-max inset-[0] justify-center m-auto text-base text-gray-900_04 w-max"
                                size="txtGilroySemiBold16Gray90004"
                              >
                                90%
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              Passively Income
                            </Text>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[135px] items-start justify-start p-2.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_graphpie.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-5 items-end justify-start my-0.5 w-[95%] md:w-full">
                            <div className="h-[78px] relative rounded-[10px] w-[78px]">
                              <div className="!w-[78px] h-[78px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[78px] h-[78px] m-auto overflow-visible"
                                  value={74}
                                  counterClockwise
                                  strokeWidth={9}
                                  styles={{
                                    trail: {
                                      strokeWidth: 9,
                                      stroke: "#e4e4e499",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(0deg)",
                                      stroke: "#0061ff",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <Text
                                className="absolute h-max inset-[0] justify-center m-auto text-base text-gray-900_04 w-max"
                                size="txtGilroySemiBold16Gray90004"
                              >
                                75%
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              Passively Savings
                            </Text>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[135px] items-center justify-end p-[9px] w-full"
                          style={{
                            backgroundImage: "url('images/img_graphpie.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-5 items-center justify-start mt-[3px] w-[97%] md:w-full">
                            <div className="h-[78px] relative rounded-[10px] w-[78px]">
                              <div className="!w-[78px] h-[78px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[78px] h-[78px] m-auto overflow-visible"
                                  value={49}
                                  counterClockwise
                                  strokeWidth={9}
                                  styles={{
                                    trail: {
                                      strokeWidth: 9,
                                      stroke: "#e4e4e499",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(0deg)",
                                      stroke: "#0061ff",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <Text
                                className="absolute h-max inset-[0] justify-center m-auto text-base text-gray-900_04 w-max"
                                size="txtGilroySemiBold16Gray90004"
                              >
                                50%
                              </Text>
                            </div>
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              Passively Expense
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-start mb-1.5 md:mt-0 mt-11 p-4 rounded-md w-[46%] md:w-full">
                      <div className="flex flex-col md:gap-10 gap-[63px] justify-start mb-[49px] mt-[11px] w-[86%] md:w-full">
                        <div className="flex flex-col items-start justify-end pt-[7px] w-[69%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-[86%] md:w-full">
                            <Text
                              className="text-blue_gray-900_02 text-lg"
                              size="txtGilroySemiBold18"
                            >
                              Total Working Days
                            </Text>
                            <div className="flex flex-row gap-4 items-center justify-start pr-2 py-2 w-[67%] md:w-full">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                                size="txtGilroyBold28"
                              >
                                225
                              </Text>
                              <Text
                                className="text-base text-blue_gray-900"
                                size="txtGilroyMedium16Bluegray900"
                              >
                                Days
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[7px] items-start justify-start mt-1 w-full">
                            <Text
                              className="text-red-A200 text-sm"
                              size="txtMontserratMedium14"
                            >
                              48%
                            </Text>
                            <Text
                              className="text-gray-400_01 text-sm"
                              size="txtGilroyMedium14Gray40001"
                            >
                              {" "}
                              Higher than colleagues
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-end justify-end ml-12 md:ml-[0] w-[83%] md:w-full">
                          <div className="bg-blue-A700_7e h-[98px] mt-3.5 rounded w-[14%]"></div>
                          <div className="bg-blue-A700_7e h-[84px] ml-2 mt-7 rounded w-[14%]"></div>
                          <div className="bg-blue-A700_7e h-[103px] ml-2 mt-2 rounded w-[14%]"></div>
                          <div className="bg-blue-A700_7e h-[70px] ml-2 mt-[42px] rounded w-[14%]"></div>
                          <div className="bg-blue-A700_7e h-[98px] ml-2 mt-3.5 rounded w-[14%]"></div>
                          <div className="bg-blue-A700 h-28 ml-2 rounded w-[14%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-md w-[64%] md:w-full">
                      <div className="flex flex-col gap-[21px] items-center justify-start mt-[3px] w-full">
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex flex-col gap-[7px] items-start justify-start mt-[7px] w-[32%]">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroySemiBold18Bluegray900"
                            >
                              Spend Analysis
                            </Text>
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <Img
                                className="h-4 mb-[3px] w-4"
                                src="images/img_arrowgrowthou.svg"
                                alt="arrowgrowthOu"
                              />
                              <Text
                                className="mt-0.5 text-black-900 text-sm"
                                size="txtGilroyRegular14"
                              >
                                <span className="text-colors font-gilroy text-left font-normal">
                                  88%
                                </span>
                                <span className="text-colors1 font-gilroy text-left font-normal">
                                  {" "}
                                  Compared to last week
                                </span>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[13px] items-center justify-between w-[17%]">
                            <Text
                              className="ml-[3px] text-blue_gray-600 text-sm"
                              size="txtGilroySemiBold14"
                            >
                              This Week
                            </Text>
                            <Img
                              className="h-5 w-5"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-end py-[3px] w-full">
                          <div className="flex flex-col gap-[18px] items-end justify-start w-full">
                            <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                              <div className="flex flex-col gap-[26px] items-start justify-start">
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  25k
                                </Text>
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  20k
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[3px] text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  15k
                                </Text>
                                <Text
                                  className="ml-0.5 md:ml-[0] text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  10k
                                </Text>
                                <Text
                                  className="ml-2 md:ml-[0] text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  5k
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[7px] text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  0k
                                </Text>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[200px] items-end justify-start p-[26px] sm:px-5 w-[96%] md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group1717.png')",
                                }}
                              >
                                <div className="flex flex-col items-center justify-start mb-[78px] mr-[136px] w-auto">
                                  <div className="bg-black-900_01 flex flex-col items-center justify-center px-[11px] py-2.5 rounded-[5px] w-auto">
                                    <Text
                                      className="text-white-A700 text-xs w-auto"
                                      size="txtGilroyMedium12WhiteA700"
                                    >
                                      <>
                                        $2311.65
                                        <br />5 May
                                      </>
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-2 w-3.5"
                                    src="images/img_arrow.svg"
                                    alt="Arrow"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[96%] md:w-full">
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Mon
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Tue
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Wed
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[71px] text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Thu
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[73px] text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Fri
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[74px] text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Sat
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[70px] text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-[35%] md:w-full">
                      <div className="flex flex-col items-center justify-start mt-[3px] w-[99%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="mt-[5px] text-base text-blue_gray-900"
                            size="txtGilroySemiBold16Bluegray900"
                          >
                            Expense Tracking
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-between mb-[5px] w-[31%]">
                            <Text
                              className="text-blue_gray-600 text-sm"
                              size="txtGilroySemiBold14"
                            >
                              This Month
                            </Text>
                            <Img
                              className="h-5 w-5"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown One"
                            />
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[200px] items-start justify-start mt-[35px] p-[35px] sm:px-5 w-[200px]"
                          style={{
                            backgroundImage: "url('images/img_group30.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-[47px] items-start justify-start mb-0.5 mt-[13px] w-[90%] md:w-full">
                            <div className="flex flex-col md:gap-10 gap-[63px] justify-start mt-[18px]">
                              <Text
                                className="mr-2 text-base text-white-A700"
                                size="txtGilroySemiBold16WhiteA700"
                              >
                                28%
                              </Text>
                              <Text
                                className="ml-2.5 md:ml-[0] text-base text-white-A700"
                                size="txtGilroySemiBold16WhiteA700"
                              >
                                12%
                              </Text>
                            </div>
                            <div className="flex flex-col md:gap-10 gap-[63px] items-start justify-start mb-[18px]">
                              <Text
                                className="text-base text-white-A700"
                                size="txtGilroySemiBold16WhiteA700"
                              >
                                24%
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[3px] text-base text-white-A700"
                                size="txtGilroySemiBold16WhiteA700"
                              >
                                36%
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[13px] pt-[3px] w-[91%] md:w-full">
                          <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-1/4">
                                <div className="bg-blue-900 h-2 my-0.5 rounded-sm w-[31%]"></div>
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroySemiBold14Bluegray900"
                                >
                                  Travel
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-start justify-start w-[26%]">
                                <div className="bg-blue-800 h-2 mb-[7px] rounded-sm w-[30%]"></div>
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroySemiBold14Bluegray900"
                                >
                                  Sports
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="flex flex-row gap-2 items-start justify-start w-[32%]">
                                <div className="bg-blue-A700 h-2 mb-[7px] rounded-sm w-[23%]"></div>
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroySemiBold14Bluegray900"
                                >
                                  Shopping
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-start w-[31%]">
                                <div className="bg-blue-A200_01 h-2 my-0.5 rounded-sm w-[24%]"></div>
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroySemiBold14Bluegray900"
                                >
                                  Medicine
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-50 md:h-[1056px] h-[1109px] inset-y-[0] my-auto pb-[53px] right-[2%] shadow-bs w-[23%]">
            <div className="bg-gray-50 h-[1056px] mx-auto shadow-bs w-full"></div>
            <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
              <Img
                className="h-6 mb-0.5 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <Text
                className="mt-1 text-blue_gray-900 text-lg"
                size="txtGilroySemiBold18Bluegray900"
              >
                My Profile
              </Text>
              <Img
                className="h-6 mb-0.5 w-6"
                src="images/img_share.svg"
                alt="share"
              />
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[5px] top-[6%] w-[45%]">
              <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                <div className="border-[1.79px] border-blue-A700_01 border-solid flex flex-col h-[100px] items-center justify-start p-[7px] rounded-[50%] w-[100px]">
                  <Img
                    className="h-[85px] md:h-auto rounded-[50%] w-[85px]"
                    src="images/img_profileimglarg_85X85.png"
                    alt="ProfileImgLarg One"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18Bluegray900"
                >
                  Michelle Rock
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[21%] w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start pt-1 w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start pb-[5px] pr-[5px] w-full">
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Mobile Number
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      (808) 555-0111
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyRegular16"
                  >
                    Email
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtGilroyMedium16Bluegray900"
                    >
                      Michellerock@gmail.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdhocReportingPage;
