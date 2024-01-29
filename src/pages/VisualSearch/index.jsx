import React from "react";

import { Button, Img, Line, List, Text } from "components";

const VisualSearchPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_7.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
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
                    src="images/img_arrowdown.svg"
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
                    src="images/img_arrowdown.svg"
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
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtGilroyMedium16Gray900">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] rounded-md text-base text-center"
                shape="round"
                color="blue_A700"
                size="2xl"
                variant="fill"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="h-[1156px] sm:h-[2337px] md:h-[4464px] max-w-[1268px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[77px] inset-x-[0] items-center justify-start mx-auto top-[0] w-[99%]">
            <div className="flex flex-col gap-[38px] justify-start pt-3 w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtGilroySemiBold32Black900"
                >
                  Gallery
                </Text>
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start ml-5 md:ml-[0] w-[99%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtGilroySemiBold24Black900"
                >
                  Recent
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle10.png"
                    alt="RectangleTen"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle11.png"
                    alt="RectangleEleven"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2448.png')",
                    }}
                  >
                    <Img
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera"
                    />
                  </div>
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle10.png"
                    alt="RectangleTen One"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle11.png"
                    alt="RectangleEleven One"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2448.png')",
                    }}
                  >
                    <Img
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera One"
                    />
                  </div>
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_rectangle11.png"
                    alt="RectangleEleven Two"
                  />
                  <div
                    className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                    style={{
                      backgroundImage: "url('images/img_group2448.png')",
                    }}
                  >
                    <Img
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera Two"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-end w-[99%] md:w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtGilroySemiBold24Black900"
                >
                  Last Week
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle10_150X150.png"
                      alt="RectangleTen Two"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera Three"
                      />
                    </div>
                    <div
                      className="bg-cover bg-no-repeat md:h-10 h-[150px] p-[54px] md:px-10 sm:px-5 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group923.png')",
                      }}
                    >
                      <Img
                        className="absolute h-10 inset-[0] justify-center m-auto w-10"
                        src="images/img_checkmark_40X40.svg"
                        alt="checkmark"
                      />
                    </div>
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle10_150X150.png"
                      alt="RectangleTen Three"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera Four"
                      />
                    </div>
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_group923.png"
                      alt="RectangleSeventeen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle10_150X150.png"
                      alt="RectangleTen Four"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera Five"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-1 w-full">
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle1302.png"
                      alt="RectangleFourteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle12.png"
                      alt="RectangleTwelve"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle13.png"
                      alt="RectangleThirteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle1302.png"
                      alt="RectangleSixteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle12.png"
                      alt="RectangleFifteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle13.png"
                      alt="RectangleEighteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle1302.png"
                      alt="RectangleTwenty"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle12.png"
                      alt="RectangleNineteen"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-end pt-2.5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtGilroySemiBold24Black900"
                  >
                    A Month Ago
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle23.png"
                      alt="RectangleTwentyThree"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle21.png"
                      alt="RectangleTwentyOne"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2450.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera Six"
                      />
                    </div>
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle23.png"
                      alt="RectangleTwentyFive"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle21.png"
                      alt="RectangleTwentyFour"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2450.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera Seven"
                      />
                    </div>
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle21.png"
                      alt="RectangleTwentySix"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2450.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera Eight"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[41%]">
            <div className="h-[1156px] sm:h-[2337px] md:h-[993px] relative w-full">
              <div className="absolute bg-white-A700 h-[925px] inset-x-[0] mx-auto rounded-tl-[12px] rounded-tr-[12px] shadow-bs2 top-[0] w-full"></div>
              <div className="absolute flex flex-col gap-[29px] h-max inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-col gap-[31px] items-start justify-start pb-[7px] w-[89%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat md:h-[276px] h-[405px] p-[34px] sm:px-5 relative w-full"
                      style={{
                        backgroundImage: "url('images/img_group923.png')",
                      }}
                    >
                      <Img
                        className="absolute h-[276px] inset-x-[0] mx-auto top-[8%] w-[64%]"
                        src="images/img_crop.svg"
                        alt="Crop"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start w-[43%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_1.svg"
                        alt="settings"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtGilroySemiBold24Black900"
                      >
                        Visual Search
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-200 h-px w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                  <List
                    className="flex flex-col gap-[3.43px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle10_148X148.png"
                        alt="RectangleTen Five"
                      />
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle11_148X148.png"
                        alt="RectangleEleven Three"
                      />
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle13_148X148.png"
                        alt="RectangleThirteen One"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle14.png"
                        alt="RectangleFourteen One"
                      />
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle12_148X148.png"
                        alt="RectangleTwelve One"
                      />
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle20.png"
                        alt="RectangleTwenty One"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle16.png"
                        alt="RectangleSixteen One"
                      />
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle15.png"
                        alt="RectangleFifteen One"
                      />
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle21_148X148.png"
                        alt="RectangleTwentyOne One"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle19.png"
                        alt="RectangleNineteen One"
                      />
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle18.png"
                        alt="RectangleEighteen One"
                      />
                      <Img
                        className="h-[148px] md:h-auto object-cover w-[148px]"
                        src="images/img_rectangle18_148X148.png"
                        alt="RectangleEighteen One"
                      />
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

export default VisualSearchPage;
