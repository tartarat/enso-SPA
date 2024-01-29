import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const frame9869OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SplitViewScreenPage = () => {
  return (
    <>
      <div className="bg-gray-50 font-gilroy h-[1080px] mx-auto relative w-full">
        <div className="h-[1080px] sm:h-[1135px] md:h-[6119px] m-auto md:px-5 w-full">
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="h-[1045px] sm:h-[1135px] md:h-[6119px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col gap-[50px] justify-start w-full">
                  <div className="bg-white-A700 flex flex-row items-center justify-start p-[22px] sm:px-5 shadow-bs2 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-16 w-[91%]">
                      <Img
                        className="h-[35px] w-[13%]"
                        src="images/img_group_12.svg"
                        alt="Group"
                      />
                      <div className="bg-white-A700 border border-blue_gray-300 border-solid flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[52px] md:mt-0 my-0.5 p-3 rounded-md w-2/5 md:w-full">
                        <Img
                          className="h-5 my-1 w-5"
                          src="images/img_search.svg"
                          alt="search"
                        />
                        <Text
                          className="text-base text-blue_gray-200"
                          size="txtGilroyMedium16Bluegray200"
                        >
                          Search
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[31%] md:w-full">
                        <SelectBox
                          className="font-medium text-base text-gray-900 text-left w-[28%] sm:w-full"
                          placeholderClassName="text-gray-900"
                          indicator={
                            <Img
                              className="h-6 mr-[0] w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="Frame9869"
                          options={frame9869OptionsList}
                          isSearchable={false}
                          placeholder="Products"
                          size="sm"
                        />
                        <SelectBox
                          className="font-medium ml-6 sm:ml-[0] text-base text-gray-900 text-left w-[28%] sm:w-full"
                          placeholderClassName="text-gray-900"
                          indicator={
                            <Img
                              className="h-6 mr-[0] w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="Frame9870"
                          options={frame9870OptionsList}
                          isSearchable={false}
                          placeholder="Resouces"
                          size="sm"
                        />
                        <Text
                          className="ml-8 sm:ml-[0] sm:mt-0 mt-[11px] text-base text-gray-900"
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
                  <div className="flex flex-col gap-[30px] items-center justify-start md:ml-[0] ml-[30px] w-[74%] md:w-full">
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
                        <div className="bg-blue-A700 flex flex-col items-center justify-start p-2.5 rounded-md w-auto">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtGilroyMedium16WhiteA700"
                          >
                            Week
                          </Text>
                        </div>
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
                              <div className="flex flex-col gap-2.5 items-start justify-start ml-1 mr-[7px] pr-[3px] pt-[3px]">
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
              <div className="absolute bg-blue_gray-100_01 h-[1030px] inset-y-[0] my-auto right-[0] w-1/2"></div>
            </div>
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-1/2">
            <div className="bg-gray-50 flex flex-col gap-8 items-end justify-start pb-16 w-full">
              <div className="overflow-x-auto w-full">
                <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between overflow-auto pl-4 py-4 w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between ml-4 md:ml-[0] w-[98%] md:w-full">
                    <Img
                      className="h-9"
                      src="images/img_frame34827.svg"
                      alt="Frame34827"
                    />
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[58%] md:w-full">
                      <Input
                        name="InputField"
                        placeholder="Placeholder Text"
                        className="font-medium md:h-auto p-0 placeholder:text-blue_gray-200 sm:h-auto text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-300 border-solid w-full"
                        shape="round"
                        size="xs"
                      ></Input>
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_search_bluegray_900.png"
                        alt="search One"
                      />
                      <Img
                        className="h-5 md:h-auto object-cover w-5"
                        src="images/img_microphone.png"
                        alt="microphone"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-4 items-center justify-between w-1/5 md:w-full">
                    <Img
                      className="h-9 md:h-auto object-cover w-9"
                      src="images/img_videocamera_bluegray_600.png"
                      alt="videocamera"
                    />
                    <Img
                      className="h-9 md:h-auto object-cover w-9"
                      src="images/img_notification_bluegray_600.png"
                      alt="notification"
                    />
                    <Img
                      className="h-9 md:h-auto rounded-[50%] w-9"
                      src="images/img_profileimglarg_36X36.png"
                      alt="ProfileImgLarg One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pb-[55px] w-[94%] md:w-full">
                <div className="overflow-x-auto w-full">
                  <div className="flex flex-col items-start justify-start overflow-auto w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[534px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group10080.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col gap-3 items-start justify-end pl-2 py-2 w-full">
                        <div className="h-2 ml-2 md:ml-[0] mt-[458px] overflow-hidden relative w-[99%]">
                          <div className="w-full h-full absolute bg-blue_gray_50 rounded-[4px]"></div>
                          <div
                            className="h-full absolute bg-amber_500  rounded-[4px]"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start ml-2 md:ml-[0] w-[39%] md:w-full">
                          <Img
                            className="h-10 w-[63%]"
                            src="images/img_icons.svg"
                            alt="Icons"
                          />
                          <div className="flex flex-row items-center justify-evenly w-[35%]">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtGilroyRegular14WhiteA700"
                            >
                              0:01
                            </Text>
                            <Text
                              className="text-sm text-white-A700"
                              size="txtGilroyRegular14WhiteA700"
                            >
                              /
                            </Text>
                            <Text
                              className="text-sm text-white-A700"
                              size="txtGilroyRegular14WhiteA700"
                            >
                              8:00:43
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="mt-[23px] text-black-900_01 text-lg"
                      size="txtGilroySemiBold18Black90001"
                    >
                      8 Hours of Birds Singing in the Forests Below El Capitan
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-3 w-full">
                      <div className="flex md:flex-1 flex-row items-start justify-evenly md:mt-0 mt-[5px] w-[24%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          1,094,526 views
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtInterRegular14"
                        >
                          •
                        </Text>
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtGilroyMedium16"
                        >
                          May 25, 2018
                        </Text>
                      </div>
                      <div className="flex md:flex-1 sm:flex-col flex-row gap-3.5 items-center justify-between mb-0.5 pr-1.5 w-[47%] md:w-full">
                        <div className="flex flex-row items-center justify-evenly w-[12%] sm:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtGilroyMedium14"
                          >
                            567
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center w-[17%] sm:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup One"
                          />
                          <Text
                            className="ml-1 text-blue_gray-400 text-sm"
                            size="txtGilroyMedium14"
                          >
                            Dislike
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center w-[16%] sm:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_share_24X24.svg"
                            alt="share"
                          />
                          <Text
                            className="ml-1 text-blue_gray-400 text-sm"
                            size="txtGilroyMedium14"
                          >
                            Share
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center w-[23%] sm:w-full">
                          <Img
                            className="h-6 md:h-auto object-cover w-6"
                            src="images/img_download.png"
                            alt="download"
                          />
                          <Text
                            className="ml-1 text-blue_gray-400 text-sm"
                            size="txtGilroyMedium14"
                          >
                            Download
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center w-[22%] sm:w-full">
                          <Img
                            className="h-6 md:h-auto object-cover w-6"
                            src="images/img_bookmark_blue_A701.png"
                            alt="bookmark"
                          />
                          <Text
                            className="ml-1 text-blue-A700 text-sm"
                            size="txtGilroyMedium14BlueA700"
                          >
                            Bookmark
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-100 h-px mt-[22px] w-full" />
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[15px] w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_avatarsmall.png"
                          alt="AvatarSmall"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-base text-black-900_01 w-auto"
                            size="txtGilroyMedium16Black90001"
                          >
                            Nature Soundscapes
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtGilroyRegular14Bluegray400"
                          >
                            104K subscribers
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue-A700 h-9 mb-3 rounded-md shadow-bs4 w-[12%]"></div>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start mt-4 pb-[3px] pl-[3px] w-full">
                      <Text
                        className="leading-[26.00px] md:ml-[0] ml-[60px] text-base text-black-900_01 w-[91%] sm:w-full"
                        size="txtGilroyRegular16Black90001"
                      >
                        Find your absolutely beautiful and serene place and
                        listen to nature sounds, birds signing and relaxing
                        water sounds with breathtaking views of Mount Shuksan.
                        It’s 8-hour 4k video of discovery and peace. Download it
                        for your personal use and transform your 4K TV into a
                        source of relaxation and restoration.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14"
                      >
                        SHOW MORE
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-900_7f bottom-[0] flex flex-row font-poppins inset-x-[0] items-center justify-center mx-auto p-1 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:px-5 w-3/5">
            <div className="flex flex-col items-center justify-start w-[35%] sm:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                <Img
                  className="h-[42px] md:h-auto object-cover w-[41px]"
                  src="images/img_start.png"
                  alt="Start"
                />
                <Img
                  className="h-[42px] md:h-auto object-cover w-[41px]"
                  src="images/img_search_white_A700.png"
                  alt="Search Two"
                />
                <Img
                  className="h-[42px] md:h-auto object-cover w-[41px]"
                  src="images/img_desktop.png"
                  alt="Desktop"
                />
                <Img
                  className="h-[42px] md:h-auto object-cover w-[41px]"
                  src="images/img_widgets.png"
                  alt="Widgets"
                />
                <div className="flex flex-col items-center justify-start p-2 w-[41px]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-end p-0.5 w-[25px]"
                    style={{
                      backgroundImage: "url('images/img_explorericon.png')",
                    }}
                  >
                    <div className="bg-gradient1  h-[7px] mt-3 w-[48%]"></div>
                  </div>
                </div>
                <div className="md:h-[38px] h-[41px] relative w-[41px]">
                  <div className="bg-white-A700_0c border border-solid border-white-A700_0c flex flex-col h-full items-center justify-end m-auto rounded w-[41px]">
                    <div className="bg-white-A700_87 h-0.5 mt-9 rounded-[1px] w-2/5"></div>
                  </div>
                  <Img
                    className="absolute h-[25px] inset-[0] justify-center m-auto object-cover w-[25px]"
                    src="images/img_placeyouricon.png"
                    alt="PlaceYourIcon"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 items-center justify-between pt-0.5 w-1/4 sm:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_arrowup.svg"
                alt="arrowup"
              />
              <div className="flex flex-row gap-2.5 items-center justify-center">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_volume.svg"
                  alt="volume"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_videocamera.svg"
                  alt="videocamera One"
                />
              </div>
              <div className="flex flex-col items-end justify-start">
                <Text
                  className="text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  11:55 PM
                </Text>
                <Text
                  className="mt-[3px] text-white-A700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  10/6/2021
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplitViewScreenPage;
