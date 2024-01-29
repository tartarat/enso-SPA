import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const GoogleCalenderSyncPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs2 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_3.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] md:mt-0 my-0.5 w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
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
                size="xl"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-center md:ml-[0] ml-[50px] w-[31%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="ml-0.5 text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      Products
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtGilroyMedium16Gray900"
                    >
                      Resouces
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrowdown One"
                    />
                  </div>
                </List>
                <Text
                  className="text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                className="h-14 md:h-auto md:ml-[0] ml-[58px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between max-w-[1380px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start mb-[35px] w-[77%] md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-row items-center justify-evenly w-[19%] sm:w-full">
                <Button
                  className="flex h-[46px] items-center justify-center rounded-bl-md rounded-tl-md w-[46px]"
                  color="blue_gray_50"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft_black_900_46X46.svg"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[92px] text-base text-center"
                  shape="square"
                  color="blue_gray_50"
                  size="xl"
                  variant="fill"
                >
                  Today
                </Button>
                <Button
                  className="flex h-[46px] items-center justify-center rounded-br-md rounded-tr-md w-[46px]"
                  color="blue_gray_50"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowright_black_900.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
              <div className="flex sm:flex-1 flex-row gap-6 items-center justify-between w-[29%] sm:w-full">
                <div className="flex flex-col items-center justify-start p-2.5 rounded-md w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtGilroyMedium16"
                  >
                    Day
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[62px] rounded-md text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="3xl"
                  variant="fill"
                >
                  Week
                </Button>
                <div className="flex flex-col items-center justify-start p-2.5 rounded-md w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtGilroyMedium16"
                  >
                    Month
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start p-2.5 rounded-md w-auto">
                  <Text
                    className="text-base text-blue_gray-400 w-auto"
                    size="txtGilroyMedium16"
                  >
                    Year
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-full">
              <List
                className="sm:flex-col flex-row md:gap-5 gap-[0] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 w-[96%]"
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
                <div className="bg-gray-50_01 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px] w-full">
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
                <div className="bg-gray-50_01 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px] w-full">
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
                <div className="bg-blue-50 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-100 p-[7px] w-full">
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
                <div className="bg-gray-50_01 flex flex-col gap-[11px] items-start justify-start outline outline-[1px] outline-blue_gray-50 p-[7px] w-full">
                  <Text
                    className="text-blue_gray-400 text-xs"
                    size="txtGilroyMedium12"
                  >
                    SAT
                  </Text>
                  <Text
                    className="h-6 mb-[15px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtGilroySemiBold24Black90001"
                  >
                    27
                  </Text>
                </div>
              </List>
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
          <div className="bg-white-A700 border border-blue_gray-50 border-solid flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[76px] p-3 rounded-md w-[22%] md:w-full">
            <div className="flex flex-row gap-[26px] items-start justify-between mt-1 w-full">
              <Button
                className="flex h-[34px] items-center justify-center rounded-md w-[34px]"
                shape="round"
                color="gray_100"
                size="xl"
                variant="outline"
              >
                <Img
                  src="images/img_arrowdown_bluegray_901.svg"
                  alt="arrowdown Two"
                />
              </Button>
              <Text
                className="mt-2 text-blue_gray-900 text-xl"
                size="txtGilroyMedium20"
              >
                September 2021
              </Text>
              <Button
                className="flex h-[34px] items-center justify-center rotate-[-180deg] rounded-md w-[34px]"
                shape="round"
                color="gray_100"
                size="xl"
                variant="outline"
              >
                <Img
                  src="images/img_arrowdown_bluegray_901.svg"
                  alt="arrowdown Three"
                />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start mt-4 w-full">
              <List
                className="sm:flex-col flex-row gap-[0] grid grid-cols-7 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="text-[10px] text-blue_gray-900 w-auto"
                    size="txtGilroySemiBold10"
                  >
                    SUN
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="text-[10px] text-blue_gray-900 w-auto"
                    size="txtGilroySemiBold10"
                  >
                    MON
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="text-[10px] text-blue_gray-900 w-auto"
                    size="txtGilroySemiBold10"
                  >
                    TUE
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="text-[10px] text-blue_gray-900 w-auto"
                    size="txtGilroySemiBold10"
                  >
                    WED
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="text-[10px] text-blue_gray-900 w-auto"
                    size="txtGilroySemiBold10"
                  >
                    THU
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="text-[10px] text-blue_gray-900 w-auto"
                    size="txtGilroySemiBold10"
                  >
                    FRI
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-1 w-[38px]">
                  <Text
                    className="text-[10px] text-blue_gray-900 w-auto"
                    size="txtGilroySemiBold10"
                  >
                    SAT
                  </Text>
                </div>
              </List>
              <List
                className="flex flex-col gap-[0] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="mb-1 text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      31
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      1
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      2
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      3
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      4
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      5
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="mb-1 text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      6
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="mb-1 text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      7
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      8
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots_green_600.svg"
                      alt="EventDots One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      9
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots One One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="h-3 mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      10
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Two One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      11
                    </Text>
                    <div className="bg-green-600 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      12
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Three One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="mb-1 text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      13
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="h-3 mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      14
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[34%]"
                      src="images/img_eventdots_green_600_4X10.svg"
                      alt="EventDots Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="h-3 mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      15
                    </Text>
                    <div className="bg-orange-A700 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="h-3 mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      16
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots One Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      17
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Two Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="h-3 mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      18
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Three Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="h-3 mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      19
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Four One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="mb-1 text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      20
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 pr-[5px] w-full">
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="mb-1 text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      21
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      22
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      23
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[34%]"
                      src="images/img_eventdots_4X10.svg"
                      alt="EventDots One Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      24
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Two Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      25
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Three Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      26
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Four Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start ml-[5px] w-[11%]">
                    <div className="bg-blue-A700 flex flex-col items-center justify-end p-1 rounded-[14px] w-full">
                      <Text
                        className="h-3 mt-[3px] text-gray-50_01 text-xs"
                        size="txtGilroySemiBold12Gray5001"
                      >
                        27
                      </Text>
                      <div className="bg-gray-50_01 h-1 mt-1 rounded-[50%] w-1"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      28
                    </Text>
                    <div className="bg-blue-A700 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      1
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[34%]"
                      src="images/img_eventdots_green_600_4X10.svg"
                      alt="EventDots Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      2
                    </Text>
                    <div className="bg-orange-A700 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      3
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots One Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      4
                    </Text>
                    <div className="bg-green-600 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      5
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[34%]"
                      src="images/img_eventdots_4X10.svg"
                      alt="EventDots Two Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="mb-1 text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      6
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start my-0 w-full">
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="mb-1 text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      7
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      8
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      9
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[34%]"
                      src="images/img_eventdots_4X10.svg"
                      alt="EventDots One Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="h-3 mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      10
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Two Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      11
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Three Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      12
                    </Text>
                    <Img
                      className="h-1 mt-1 w-[34%]"
                      src="images/img_eventdots_orange_A700.svg"
                      alt="EventDots Four Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start p-[7px]">
                    <Text
                      className="mb-1 text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      13
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <List
              className="flex flex-col gap-6 items-center mb-[136px] mt-6 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[13px] items-start justify-start pt-1 w-full">
                <div className="flex flex-row gap-[7px] items-center justify-start w-1/2 md:w-full">
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroySemiBold16Black90001"
                  >
                    TODAY
                  </Text>
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroyRegular16Black90001"
                  >
                    {" "}
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start pt-1 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <div className="bg-blue-A700 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="text-black-900_01 text-sm"
                      size="txtGilroySemiBold14Black90001"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[5px] px-[5px] w-full">
                    <Text
                      className="ml-3.5 md:ml-[0] text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      Financial Update
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col items-end justify-start pl-[3px] py-[3px]">
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroyRegular16Black90001"
                  >
                    {" "}
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start pt-1 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <div className="bg-amber-500_01 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="text-black-900_01 text-sm"
                      size="txtGilroySemiBold14Black90001"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[5px] px-[5px] w-full">
                    <Text
                      className="ml-3.5 md:ml-[0] text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      Financial Update
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col items-end justify-start pl-[3px] py-[3px]">
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroyRegular16Black90001"
                  >
                    {" "}
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start pt-1 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <div className="bg-green-600 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="text-black-900_01 text-sm"
                      size="txtGilroySemiBold14Black90001"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[5px] px-[5px] w-full">
                    <Text
                      className="ml-3.5 md:ml-[0] text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      Financial Update
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col items-end justify-start pl-[3px] py-[3px]">
                  <Text
                    className="text-base text-black-900_01"
                    size="txtGilroyRegular16Black90001"
                  >
                    {" "}
                    2/25/2021
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start pt-1 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[43%] md:w-full">
                    <div className="bg-blue-A700 h-3 rounded-[50%] w-3"></div>
                    <Text
                      className="text-black-900_01 text-sm"
                      size="txtGilroySemiBold14Black90001"
                    >
                      8:30 - 9:00 AM
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[5px] px-[5px] w-full">
                    <Text
                      className="ml-3.5 md:ml-[0] text-blue_gray-400 text-sm"
                      size="txtGilroyMedium14"
                    >
                      Financial Update
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleCalenderSyncPage;
