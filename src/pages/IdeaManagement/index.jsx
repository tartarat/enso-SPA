import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const IdeaManagementPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto pb-1.5 w-full">
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
                      src="images/img_arrowdown_gray_901.svg"
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
                      src="images/img_arrowdown_gray_901.svg"
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
                src="images/img_profileimglarg_85X85.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[39px] items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start pt-[9px] w-[74%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                size="txtGilroySemiBold28"
              >
                Add a Note
              </Text>
              <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-start justify-start p-2 rounded-md w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-1 md:ml-[0] pl-1 w-[54%] md:w-full">
                    <div className="flex flex-col items-center justify-start rounded w-[27%] sm:w-full">
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <Button
                          className="flex h-5 items-center justify-center w-5"
                          shape="round"
                          color="gray_300"
                          size="xs"
                          variant="fill"
                        >
                          <Img src="images/img_mobile.svg" alt="mobile" />
                        </Button>
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_refresh.svg"
                          alt="refresh"
                        />
                        <Img
                          className="h-5 rounded w-5"
                          src="images/img_iconstypeunde.svg"
                          alt="IconsTypeunde"
                        />
                      </div>
                    </div>
                    <Button
                      className="flex h-7 items-center justify-center ml-7 sm:ml-[0] w-7"
                      shape="round"
                      color="gray_50_05"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_link.svg"
                        alt="link"
                      />
                    </Button>
                    <List
                      className="sm:flex-col flex-row gap-6 grid grid-cols-2 ml-6 sm:ml-[0] w-[46%] sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-50_05 flex flex-col items-center justify-start p-1 rounded w-full">
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_volume_20X20.svg"
                            alt="volume One"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_user.svg"
                            alt="user"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_iconstypeh3.svg"
                            alt="IconsTypehThree"
                          />
                        </div>
                      </div>
                      <div className="bg-gray-50_05 flex flex-col items-center justify-start p-1 rounded w-full">
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_menu_20X20.svg"
                            alt="menu"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_menu_1.svg"
                            alt="menu One"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_menu_2.svg"
                            alt="menu Two"
                          />
                        </div>
                      </div>
                    </List>
                    <div className="bg-gray-50_05 md:h-3.5 h-[27px] ml-6 sm:ml-[0] p-1 relative rounded w-[7%] sm:w-full">
                      <Img
                        className="absolute h-3.5 inset-[0] justify-center m-auto w-[72%]"
                        src="images/img_cursor.svg"
                        alt="cursor"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-center justify-end p-[34px] sm:px-5 w-full">
                  <div className="flex flex-col items-start justify-start mt-[11px] w-[97%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between pt-[5px] w-full">
                      <div className="flex flex-col gap-[18px] items-start justify-start">
                        <Text
                          className="text-blue_gray-900 text-xl"
                          size="txtGilroySemiBold20"
                        >
                          Rashed Othman Salem
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Webflow Developer
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Dubai, U.A.E
                      </Text>
                    </div>
                    <Text
                      className="leading-[29.00px] mt-6 text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      <>
                        As a candidate for the Webflow Developer position at
                        02100, I would like to introduce myself as an
                        exceptional designer with a strong background in
                        Webflow, I understand the impact that good design can
                        have. In applying for this position, I am confident due
                        to my recent job and freelance experience, as well as my
                        education.
                        <br />
                        <br />
                        As UI/UX Designer at Unseen Works DMCC, I created
                        innovative, creative, and digital experiences using a
                        variety of software and concepts. An enthusiast of Figma
                        and web design, I excel in both. I&#39;ve always had a
                        keen eye for how things fit together and do not. Other
                        members of the team sought my advice on their designs.
                        <br />
                        <br />
                        I’m applying for this position because I want a career
                        in Webflow, I love how Webflow gave me the ability to
                        bring designs to life. I realize that I don’t have a
                        strong background in Html etc., but I’m willing to learn
                        it to get the position.
                      </>
                    </Text>
                    <div className="flex flex-col gap-[18px] items-start justify-start mt-[29px]">
                      <Text
                        className="text-blue_gray-900 text-xl"
                        size="txtGilroySemiBold20"
                      >
                        Michele D.
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Director of Say It Now
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[535px] sm:min-w-full rounded-md text-base text-center"
              shape="round"
              color="blue_A700"
              size="2xl"
              variant="fill"
            >
              Save Changes
            </Button>
          </div>
          <div className="bg-white-A700 border border-blue_gray-50 border-solid flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[70px] p-3 rounded-md w-[24%] md:w-full">
            <div className="flex flex-row gap-[26px] items-start justify-between mt-1 w-full">
              <Button
                className="flex h-[34px] items-center justify-center rounded-md w-[34px]"
                shape="round"
                color="gray_100"
                size="xl"
                variant="outline"
              >
                <Img
                  src="images/img_arrowdown_bluegray_903.svg"
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
                  src="images/img_arrowdown_bluegray_903.svg"
                  alt="arrowdown Three"
                />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start mt-4 w-full">
              <div className="flex flex-row items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-[0] grid grid-cols-2 w-[29%]"
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
                </List>
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
                <List
                  className="sm:flex-col flex-row grid grid-cols-2 w-[29%]"
                  orientation="horizontal"
                >
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
              </div>
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
                  <div className="flex flex-col gap-[5px] items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      23
                    </Text>
                    <Img
                      className="h-1 w-[34%]"
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
                  <div className="flex flex-col gap-[5px] items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      25
                    </Text>
                    <Img
                      className="h-1 w-[54%]"
                      src="images/img_eventdots.svg"
                      alt="EventDots Three Three"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      26
                    </Text>
                    <Img
                      className="h-1 w-[54%]"
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
                  <div className="flex flex-col gap-[5px] items-center justify-end p-1 w-[15%]">
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-xs"
                      size="txtGilroySemiBold12"
                    >
                      28
                    </Text>
                    <div className="bg-blue-A700 h-1 rounded-[50%] w-1"></div>
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

export default IdeaManagementPage;
