import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const GanttChartPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto pb-[59px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between overflow-auto w-full">
          <div className="flex flex-1 flex-col gap-[50px] justify-start w-full">
            <header className="flex items-center justify-center md:px-5 w-full">
              <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[93%]">
                  <Img
                    className="h-[35px] w-[13%]"
                    src="images/img_group_2.svg"
                    alt="Group"
                  />
                  <Input
                    name="InputField"
                    placeholder="Search"
                    value={inputfieldvalue}
                    onChange={(e) => setInputfieldvalue(e)}
                    className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                    prefix={
                      <Img
                        className="cursor-pointer h-5 m-3"
                        src="images/img_search_black_900.svg"
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
            </header>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between max-w-[1432px] mx-auto md:px-5 w-full">
              <div className="flex font-gilroy md:h-[3225px] h-[871px] sm:h-[895px] justify-end relative w-[95%] md:w-full">
                <Img
                  className="h-8 mb-[158px] ml-auto mr-[527px] mt-auto w-8"
                  src="images/img_computer_32X32.svg"
                  alt="computer"
                />
                <div className="absolute flex flex-col gap-[50px] h-full inset-[0] justify-center m-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between pt-1.5 w-[94%] md:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start md:mt-0 mt-1.5">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                        size="txtGilroySemiBold28"
                      >
                        Product Roadmap
                      </Text>
                      <Text
                        className="text-base text-blue_gray-900"
                        size="txtGilroyRegular16Bluegray900"
                      >
                        Chart how your business grows
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-1.5 py-1 w-[56%] md:w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[66%] md:w-full">
                            <div className="flex flex-row gap-2 items-start justify-start w-[49%] sm:w-full">
                              <div className="bg-light_blue-400_01 h-[18px] rounded-[50%] w-[18px]"></div>
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtGilroyRegular16Bluegray90001"
                              >
                                Performance enhancement
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-start justify-start w-[38%] sm:w-full">
                              <div className="bg-purple-A100 h-[18px] mb-1 rounded-[50%] w-[18px]"></div>
                              <Text
                                className="text-base text-blue_gray-900_01"
                                size="txtGilroyRegular16Bluegray90001"
                              >
                                Internal optimization
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-2 items-start justify-start w-1/4 md:w-full">
                            <div className="bg-deep_orange-500 h-[18px] rounded-[50%] w-[18px]"></div>
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtGilroyRegular16Bluegray90001"
                            >
                              Sometimes happens
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[97px] items-center justify-start w-[69%] md:w-full">
                          <div className="flex flex-row gap-2 items-start justify-start w-2/5 sm:w-full">
                            <div className="bg-green-500 h-[18px] rounded-[50%] w-[18px]"></div>
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtGilroyRegular16Bluegray90001"
                            >
                              Customers satisfaction
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start w-2/5 sm:w-full">
                            <div className="bg-yellow-700 h-[18px] rounded-[50%] w-[18px]"></div>
                            <Text
                              className="text-base text-blue_gray-900_01"
                              size="txtGilroyRegular16Bluegray90001"
                            >
                              Customers satisfaction
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[39px] w-full">
                    <div className="flex flex-col gap-3 items-center justify-end pt-1.5 w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900_01 text-xl"
                          size="txtGilroyBold20"
                        >
                          2017
                        </Text>
                        <div className="md:h-[1660px] h-[673px] sm:h-[697px] relative w-full">
                          <Img
                            className="absolute h-[661px] inset-[0] justify-center m-auto object-cover w-[99%]"
                            src="images/img_group10064.png"
                            alt="Group10064"
                          />
                          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-[97%]">
                            <div className="flex flex-col gap-4 items-start justify-start w-full">
                              <div className="bg-blue-50 flex flex-row gap-2.5 items-end justify-start p-2.5 rounded-[23px] w-[15%] md:w-full">
                                <Img
                                  className="h-6 mb-0.5 ml-1.5 w-6"
                                  src="images/img_arrowdown_black_901.svg"
                                  alt="arrowdown"
                                />
                                <Text
                                  className="mt-[5px] text-base text-black-900_01"
                                  size="txtGilroyMedium16Black90001"
                                >
                                  Developers Team
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-2 justify-start w-full">
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[41%] md:w-full">
                                    <div className="bg-light_blue-400_01 flex flex-col items-start justify-end p-2 rounded">
                                      <Text
                                        className="mb-[3px] mt-[9px] text-base text-white-A700"
                                        size="txtGilroyMedium16WhiteA700"
                                      >
                                        Design Database
                                      </Text>
                                    </div>
                                    <div className="bg-green-500 h-12 md:h-8 p-1 relative rounded w-[64%] sm:w-full">
                                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                        <Text
                                          className="mt-0.5 text-base text-white-A700"
                                          size="txtGilroyMedium16WhiteA700"
                                        >
                                          Charts Design System integration
                                        </Text>
                                      </div>
                                      <Img
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        src="images/img_computer_32X32.svg"
                                        alt="computer One"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[268px] w-4/5 md:w-full">
                                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                      <div className="bg-amber-500_02 h-12 md:h-8 p-1 relative rounded w-1/4 md:w-full">
                                        <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                          <Text
                                            className="text-base text-white-A700"
                                            size="txtGilroyMedium16WhiteA700"
                                          >
                                            Dashboard MVP Deploy
                                          </Text>
                                        </div>
                                        <Img
                                          className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                          src="images/img_clock.svg"
                                          alt="clock"
                                        />
                                      </div>
                                      <div className="bg-amber-500_02 h-12 pr-1 relative rounded w-[32%] md:w-full">
                                        <div className="absolute flex inset-[0] justify-center m-auto w-[98%]">
                                          <div className="bg-yellow-700 h-12 my-auto rounded-bl rounded-tl w-[11%]"></div>
                                          <div className="flex flex-col items-start justify-end ml-[-25.63px] mr-auto my-auto pr-[7px] py-[7px] z-[1]">
                                            <Text
                                              className="text-base text-white-A700"
                                              size="txtGilroyMedium16WhiteA700"
                                            >
                                              Backup Database Constantly
                                            </Text>
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                          src="images/img_overflowmenu.svg"
                                          alt="overflowmenu"
                                        />
                                      </div>
                                      <div className="bg-light_blue-400_01 h-12 md:h-8 p-1 relative rounded w-[32%] md:w-full">
                                        <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                          <Text
                                            className="mt-0.5 text-base text-white-A700"
                                            size="txtGilroyMedium16WhiteA700"
                                          >
                                            Purchasing Other Figma Kits
                                          </Text>
                                        </div>
                                        <Img
                                          className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                          src="images/img_notification_32X32.svg"
                                          alt="notification One"
                                        />
                                      </div>
                                      <div className="bg-amber-500_02 flex flex-col items-start justify-start md:ml-[0] ml-[25px] p-2 rounded">
                                        <Text
                                          className="my-[7px] text-base text-white-A700"
                                          size="txtGilroyMedium16WhiteA700"
                                        >
                                          Finished!
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[83%] md:w-full">
                                      <Button
                                        className="cursor-pointer flex items-center justify-center min-w-[160px]"
                                        rightIcon={
                                          <Img
                                            className="h-8 ml-[13px] mr-1 my-2"
                                            src="images/img_trash.svg"
                                            alt="trash"
                                          />
                                        }
                                        shape="round"
                                        color="deep_orange_300"
                                        size="md"
                                        variant="fill"
                                      >
                                        <div className="font-medium text-base text-left">
                                          Purchase now
                                        </div>
                                      </Button>
                                      <div className="bg-green-500 flex flex-col items-center justify-start p-1 rounded w-1/2 md:w-full">
                                        <div className="flex flex-row items-end justify-between my-1 w-full">
                                          <Text
                                            className="mb-[3px] mt-2 text-base text-white-A700"
                                            size="txtGilroyMedium16WhiteA700"
                                          >
                                            Self Service AR System
                                          </Text>
                                          <Img
                                            className="h-8 w-8"
                                            src="images/img_computer_32X32.svg"
                                            alt="computer Two"
                                          />
                                        </div>
                                      </div>
                                      <div className="bg-light_blue-400_01 flex flex-col items-center justify-start p-1 rounded w-[32%] md:w-full">
                                        <div className="flex flex-row items-center justify-between my-1 w-[99%] md:w-full">
                                          <Text
                                            className="text-base text-white-A700"
                                            size="txtGilroyMedium16WhiteA700"
                                          >
                                            Workflow Boost
                                          </Text>
                                          <Img
                                            className="h-8 w-8"
                                            src="images/img_arrowleft.svg"
                                            alt="arrowleft"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-4 items-start justify-start mt-[34px] w-[93%] md:w-full">
                              <Input
                                name="Frame34692"
                                placeholder="Designers Team"
                                className="font-medium p-0 placeholder:text-black-900_01 text-base text-left w-full"
                                wrapClassName="flex rounded-[23px] w-[15%]"
                                prefix={
                                  <Img
                                    className="mt-2.5 mb-3 h-6 ml-4 mr-2.5"
                                    src="images/img_arrowdown_black_901.svg"
                                    alt="arrow_down"
                                  />
                                }
                                color="blue_50"
                                size="lg"
                              ></Input>
                              <div className="flex flex-col items-center justify-start w-full">
                                <List
                                  className="flex flex-col gap-2 items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                                    <div className="bg-purple-A100 h-12 md:h-8 p-1 relative rounded w-[16%] md:w-full">
                                      <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto sm:pr-5 pr-7 w-[92%]">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtGilroyMedium16WhiteA700"
                                        >
                                          Charts Kit in Fi...
                                        </Text>
                                        <Img
                                          className="h-8 w-8"
                                          src="images/img_clock.svg"
                                          alt="clock One"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        src="images/img_computer_32X32.svg"
                                        alt="computer Three"
                                      />
                                    </div>
                                    <div className="bg-light_blue-400_01 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="my-[7px] text-base text-white-A700"
                                        size="txtGilroyMedium16WhiteA700"
                                      >
                                        UX Acceleration
                                      </Text>
                                    </div>
                                    <div className="bg-light_blue-400_01 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="my-[7px] text-base text-white-A700"
                                        size="txtGilroyMedium16WhiteA700"
                                      >
                                        Cool Presentation
                                      </Text>
                                    </div>
                                    <div className="bg-light_blue-400_01 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="my-[7px] text-base text-white-A700"
                                        size="txtGilroyMedium16WhiteA700"
                                      >
                                        Data Visualization
                                      </Text>
                                    </div>
                                    <div className="bg-purple-A100 h-12 md:h-8 md:ml-[0] ml-[137px] p-1 relative rounded w-[30%] md:w-full">
                                      <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto sm:pr-5 pr-7 w-[96%]">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtGilroyMedium16WhiteA700"
                                        >
                                          Material Design Components
                                        </Text>
                                        <Img
                                          className="h-8 w-8"
                                          src="images/img_clock.svg"
                                          alt="clock One"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        src="images/img_computer_32X32.svg"
                                        alt="computer One"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-center ml-[194px] mr-[191px] my-0 w-[69%] md:w-full">
                                    <div className="bg-green-500 h-12 pr-1 relative rounded w-2/5 md:w-full">
                                      <div className="absolute h-12 inset-[0] justify-center m-auto w-[98%]">
                                        <div className="absolute bg-green-500 h-12 inset-y-[0] left-[0] my-auto rounded-bl rounded-tl w-[76%]"></div>
                                        <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-1.5 py-1.5">
                                          <Text
                                            className="mt-0.5 text-base text-white-A700"
                                            size="txtGilroyMedium16WhiteA700"
                                          >
                                            Android Design Kit
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        src="images/img_clock.svg"
                                        alt="clock Two"
                                      />
                                    </div>
                                    <div className="bg-green-500 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="my-[7px] text-base text-white-A700"
                                        size="txtGilroyMedium16WhiteA700"
                                      >
                                        Material Minimal Theme
                                      </Text>
                                    </div>
                                    <div className="bg-amber-500_02 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="mb-1.5 mt-[9px] text-base text-white-A700"
                                        size="txtGilroyMedium16WhiteA700"
                                      >
                                        Prototyping
                                      </Text>
                                    </div>
                                    <div className="bg-purple-A100 h-12 md:h-8 p-1 relative rounded w-1/5 md:w-full">
                                      <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto sm:pr-5 pr-7 w-[91%]">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtGilroyMedium16WhiteA700"
                                        >
                                          GUI
                                        </Text>
                                        <Img
                                          className="h-8 w-8"
                                          src="images/img_overflowmenu.svg"
                                          alt="overflowmenu One"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        src="images/img_trash.svg"
                                        alt="trash"
                                      />
                                    </div>
                                  </div>
                                </List>
                              </div>
                            </div>
                            <div className="flex flex-col gap-4 items-start justify-start mt-[58px] w-[98%] md:w-full">
                              <Input
                                name="Frame34693"
                                placeholder="Marketing Team"
                                className="font-medium p-0 placeholder:text-black-900_01 text-base text-left w-full"
                                wrapClassName="flex rounded-[23px] w-[15%]"
                                prefix={
                                  <Img
                                    className="mt-2.5 mb-3 h-6 ml-4 mr-2.5"
                                    src="images/img_arrowdown_black_901.svg"
                                    alt="arrow_down"
                                  />
                                }
                                color="blue_50"
                                size="lg"
                              ></Input>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-2 justify-start w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-1/5 md:w-full">
                                      <div className="bg-amber-500_02 h-12 md:h-8 p-1 relative rounded w-full">
                                        <div className="absolute flex flex-row gap-[39px] h-max inset-[0] items-center justify-between m-auto sm:pr-5 pr-7 w-[94%]">
                                          <Text
                                            className="text-base text-white-A700"
                                            size="txtGilroyMedium16WhiteA700"
                                          >
                                            Fits for Dashboard
                                          </Text>
                                          <Img
                                            className="h-8 w-8"
                                            src="images/img_clock.svg"
                                            alt="clock Three"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                          src="images/img_computer_32X32.svg"
                                          alt="computer Four"
                                        />
                                      </div>
                                    </div>
                                    <div className="bg-light_blue-400_01 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="my-[7px] text-base text-white-A700"
                                        size="txtGilroyMedium16WhiteA700"
                                      >
                                        Presentation Showcase
                                      </Text>
                                    </div>
                                    <div className="bg-purple-A100 flex flex-col items-start justify-start p-2 rounded">
                                      <Text
                                        className="my-2 text-base text-white-A700"
                                        size="txtGilroyMedium16WhiteA700"
                                      >
                                        Purchasing Other Figma Kits
                                      </Text>
                                    </div>
                                    <Input
                                      name="Group10043"
                                      placeholder="Premium Charts Release"
                                      className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                                      wrapClassName="flex md:flex-1 md:ml-[0] ml-[153px] rounded w-[27%] md:w-full"
                                      suffix={
                                        <Img
                                          className="h-8 ml-[35px] mr-1 my-2"
                                          src="images/img_computer_32X32.svg"
                                          alt="computer"
                                        />
                                      }
                                      shape="round"
                                      color="green_500"
                                      size="lg"
                                    ></Input>
                                  </div>
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[92px] w-[73%] md:w-full">
                                    <div className="bg-purple-A100 h-12 pr-1 relative rounded w-[47%] md:w-full">
                                      <div className="absolute flex inset-[0] justify-center m-auto w-[99%] sm:w-full">
                                        <div className="bg-purple-A100 h-12 my-auto rounded-bl rounded-tl w-[26%]"></div>
                                        <div className="flex flex-row items-center justify-between ml-[-101.67px] mr-auto my-auto sm:pr-5 pr-7 w-[99%] z-[1]">
                                          <Text
                                            className="text-base text-white-A700"
                                            size="txtGilroyMedium16WhiteA700"
                                          >
                                            Dashboard MVP Deploy
                                          </Text>
                                          <Img
                                            className="h-8 w-8"
                                            src="images/img_clock.svg"
                                            alt="clock Four"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        src="images/img_computer_32X32.svg"
                                        alt="computer Six"
                                      />
                                    </div>
                                    <div className="bg-amber-500_02 h-12 md:h-8 p-1 relative rounded w-[36%] md:w-full">
                                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtGilroyMedium16WhiteA700"
                                        >
                                          Backup Database Constantly
                                        </Text>
                                      </div>
                                      <Img
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        src="images/img_overflowmenu.svg"
                                        alt="overflowmenu Two"
                                      />
                                    </div>
                                    <div className="bg-deep_orange-300 h-12 md:h-8 p-1 relative rounded w-[18%] md:w-full">
                                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pr-[7px] py-[7px]">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtGilroyMedium16WhiteA700"
                                        >
                                          Oooh, no!
                                        </Text>
                                      </div>
                                      <Img
                                        className="absolute h-8 inset-y-[0] my-auto right-[8%] w-8"
                                        src="images/img_trash.svg"
                                        alt="trash One"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          jan
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          feb
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          mar
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          apr
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          may
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          jun
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          jul
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          aug
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          sep
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          oct
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          nov
                        </Text>
                        <div className="bg-blue-A700_a2 flex flex-col items-center justify-start rounded-lg">
                          <Text
                            className="text-white-A700 text-xs uppercase"
                            size="txtGilroyMedium12WhiteA700"
                          >
                            may
                          </Text>
                        </div>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          jan
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          feb
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          mar
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          apr
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          may
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          jun
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          jul
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          aug
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          sep
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          oct
                        </Text>
                        <Text
                          className="text-blue-A700 text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          nov
                        </Text>
                        <Text
                          className="text-blue-A700 text-center text-xs uppercase"
                          size="txtGilroyMedium12BlueA700"
                        >
                          dec
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="md:mt-0 mt-[803px] text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                size="txtRobotoMedium10"
              >
                jan
              </Text>
            </div>
          </div>
          <div className="font-roboto md:mt-0 mt-[337px] overflow-x-auto w-[45%]">
            <div className="flex flex-col gap-2 justify-start w-full">
              <div className="flex flex-row sm:gap-[55px] items-center justify-between max-w-[617px] mx-auto md:px-5 w-full">
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
                <Line className="bg-blue_gray-900_01 h-[608px] w-px" />
              </div>
              <div className="flex md:flex-col flex-row gap-2 items-center justify-start md:px-5 w-[95%] md:w-full">
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  feb
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  mar
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  jul
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  aug
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  sep
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  oct
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  nov
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  dec
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  jan
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  feb
                </Text>
                <Text
                  className="text-[10px] text-blue_gray-900_01 text-center tracking-[1.50px] uppercase"
                  size="txtRobotoMedium10"
                >
                  mar
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GanttChartPage;
