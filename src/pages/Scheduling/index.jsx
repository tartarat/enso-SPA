import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SchedulingPage = () => {
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
                  src="images/img_group.svg"
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
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[31%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Tasks
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[38%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_chartlineoutl.svg"
                        alt="chartlineOutl"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Activity
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[81%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Project management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[39%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Reports
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification One"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700_01"
                        size="txtGilroySemiBold16"
                      >
                        Notifications
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
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start rounded-md w-full">
                <Text
                  className="md:mt-0 my-[5px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtGilroySemiBold24"
                >
                  Tasks
                </Text>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center md:ml-[0] ml-[786px] rounded-md w-[131px]"
                  rightIcon={
                    <Img
                      className="h-5 ml-2 mr-4 my-2"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="xl"
                  variant="fill"
                >
                  <div className="font-medium text-left text-sm">Week View</div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[75px] ml-6 md:ml-[0] rounded-md"
                  leftIcon={
                    <Img
                      className="h-4 ml-3 mr-2 my-[9px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  }
                  shape="round"
                  color="blue_A700"
                  size="lg"
                  variant="fill"
                >
                  <div className="font-medium text-left text-sm">Add</div>
                </Button>
              </div>
              <div className="flex flex-col items-end justify-start w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[96%] md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-[0] grid grid-cols-2 w-[29%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-gray-50_01 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px] w-full">
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroyMedium12"
                      >
                        SUN
                      </Text>
                      <Text
                        className="mb-[15px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroySemiBold24Black90001"
                      >
                        21
                      </Text>
                    </div>
                    <div className="bg-gray-50_01 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px] w-full">
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroyMedium12"
                      >
                        MON
                      </Text>
                      <Text
                        className="mb-[15px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroySemiBold24Black90001"
                      >
                        22
                      </Text>
                    </div>
                  </List>
                  <div className="bg-gray-50_01 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px]">
                    <Text
                      className="text-blue_gray-400 text-xs"
                      size="txtGilroyMedium12"
                    >
                      TUH
                    </Text>
                    <Text
                      className="mb-[15px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroySemiBold24Black90001"
                    >
                      23
                    </Text>
                  </div>
                  <div className="bg-gray-50_01 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px]">
                    <Text
                      className="text-blue_gray-400 text-xs"
                      size="txtGilroyMedium12"
                    >
                      WED
                    </Text>
                    <Text
                      className="mb-[15px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroySemiBold24Black90001"
                    >
                      24
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[0] grid grid-cols-2 w-[29%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-blue-50 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px] w-full">
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroyMedium12"
                      >
                        THU
                      </Text>
                      <Text
                        className="mb-[15px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroySemiBold24Black90001"
                      >
                        25
                      </Text>
                    </div>
                    <div className="bg-gray-50_01 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px] w-full">
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtGilroyMedium12"
                      >
                        FRI
                      </Text>
                      <Text
                        className="mb-[15px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroySemiBold24Black90001"
                      >
                        26
                      </Text>
                    </div>
                  </List>
                  <div className="bg-gray-50_01 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px]">
                    <Text
                      className="text-blue_gray-400 text-xs"
                      size="txtGilroyMedium12"
                    >
                      SAT
                    </Text>
                    <Text
                      className="mb-[15px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroySemiBold24Black90001"
                    >
                      27
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex flex-col gap-[0] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="md:mt-0 mt-1 text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14"
                      >
                        8 AM
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                        <div className="bg-gray-50_01 flex flex-row items-start justify-start outline outline-[1px] outline-blue_gray-50 w-[15%] md:w-full">
                          <Line className="bg-blue-A200 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 pr-[3px] pt-[3px]">
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtGilroyMedium14Black90001"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="md:mt-0 mt-1 text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14"
                      >
                        9 AM
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray-50 w-[15%] md:w-full">
                          <Line className="bg-amber-500 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px]">
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtGilroyMedium14Black90001"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      </div>
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row gap-[9px] items-start justify-between w-full">
                    <Text
                      className="md:mt-0 mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      10 AM
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                      <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      <div className="h-[74px] overflow-hidden relative w-[15%]">
                        <div className="w-full h-full absolute bg-blue_50"></div>
                        <div
                          className="h-full absolute bg-blue_50_01"
                          style={{ width: "3%" }}
                        ></div>
                      </div>
                      <div className="bg-gray-50_01 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray-50 w-[15%] md:w-full">
                        <Line className="bg-green-600 h-[72px] w-1" />
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px]">
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            8 AM
                          </Text>
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtGilroyMedium14Black90001"
                          >
                            Financial Update
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Text
                      className="sm:mt-0 mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      11 AM
                    </Text>
                    <Img
                      className="h-[74px]"
                      src="images/img_frame34702.svg"
                      alt="Frame34702"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-between w-full">
                    <Text
                      className="sm:mt-0 mt-1 text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      12 AM
                    </Text>
                    <Img
                      className="h-[74px]"
                      src="images/img_frame34702.svg"
                      alt="Frame34702 One"
                    />
                  </div>
                  <List
                    className="flex flex-col gap-[0] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between ml-0.5 my-0 w-full">
                      <Text
                        className="md:mt-0 mt-1 text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14"
                      >
                        1 PM
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray-50 w-[15%] md:w-full">
                          <Line className="bg-amber-500 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px]">
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtGilroyMedium14Black90001"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="md:mt-0 mt-1 text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14"
                      >
                        2 PM
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray-50 w-[15%] md:w-full">
                          <Line className="bg-blue-A200 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px]">
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtGilroyMedium14Black90001"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="md:mt-0 mt-1 text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14"
                      >
                        3 PM
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-blue-50 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray-50 w-[15%] md:w-full">
                          <Line className="bg-green-600 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px]">
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtGilroyMedium14Black90001"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="md:mt-0 mt-1 text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14"
                      >
                        4 PM
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                        <div className="bg-gray-50_01 flex flex-row items-start justify-start outline outline-[1px] outline-blue_gray-50 w-[15%] md:w-full">
                          <Line className="bg-blue-A200 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 pr-[3px] pt-[3px]">
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtGilroyMedium14Black90001"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[9px] items-start justify-between my-0 w-full">
                      <Text
                        className="md:mt-0 mt-1 text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14"
                      >
                        5 PM
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="h-[74px] overflow-hidden relative w-[15%]">
                          <div className="w-full h-full absolute bg-blue_50"></div>
                          <div
                            className="h-full absolute bg-blue_50_01"
                            style={{ width: "3%" }}
                          ></div>
                        </div>
                        <div className="bg-gray-50_01 h-[74px] outline outline-[1px] outline-blue_gray-50 w-[15%]"></div>
                        <div className="bg-gray-50_01 flex flex-row items-start justify-center outline outline-[1px] outline-blue_gray-50 w-[15%] md:w-full">
                          <Line className="bg-amber-500 h-[72px] w-1" />
                          <div className="flex flex-col gap-[9px] items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px]">
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              8 AM
                            </Text>
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtGilroyMedium14Black90001"
                            >
                              Financial Update
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchedulingPage;
