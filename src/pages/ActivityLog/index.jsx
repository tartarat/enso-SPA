import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ActivityLogPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[35px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 shadow-bs2 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
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
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-[30px] md:px-5 shadow-bs2 w-[42%] md:w-full">
          <div className="flex flex-row items-start justify-between w-[61%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <Text
              className="mt-0.5 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtGilroySemiBold24"
            >
              Activity Log
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start mt-[54px] w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtGilroyMedium24Bluegray900"
            >
              Today
            </Text>
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      src="images/img_profileimglarg.png"
                      alt="ProfileImgLarg One"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                      shape="circle"
                      color="red_400"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_notification_24X24.svg"
                        alt="notification"
                      />
                    </Button>
                  </div>
                  <Text
                    className="leading-[29.00px] text-blue_gray-900 text-lg w-[77%] sm:w-full"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      Rose
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      liked a photo
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      Carmelo’s
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      post.
                    </span>
                    <span className="text-colors5 font-gilroy text-left font-medium">
                      {" "}
                      20 min ago.
                    </span>
                  </Text>
                </div>
                <Img
                  className="h-[72px] md:h-auto object-cover"
                  src="images/img_profileimglarg_72X52.png"
                  alt="ProfileImgLarg One"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      src="images/img_profileimglarg_72X72.png"
                      alt="ProfileImgLarg Two"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                      shape="circle"
                      color="red_400"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_notification_24X24.svg"
                        alt="notification One"
                      />
                    </Button>
                  </div>
                  <Text
                    className="leading-[29.00px] text-blue_gray-900 text-lg w-[77%] sm:w-full"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      Benito
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      {" "}
                      liked a photo{" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      Carmelo’s{" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      post.{" "}
                    </span>
                    <span className="text-colors5 font-gilroy text-left font-medium">
                      50 min ago.
                    </span>
                  </Text>
                </div>
                <Img
                  className="h-[72px] md:h-auto object-cover"
                  src="images/img_profileimglarg_72X52.png"
                  alt="ProfileImgLarg One One"
                />
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[31px] items-start justify-start mb-[130px] mt-[31px] w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtGilroyMedium24Bluegray900"
            >
              This Month
            </Text>
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      src="images/img_profileimglarg_1.png"
                      alt="ProfileImgLarg Three"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                      shape="circle"
                      color="blue_A200_02"
                      size="xs"
                      variant="fill"
                    >
                      <Img src="images/img_videocamera.svg" alt="videocamera" />
                    </Button>
                  </div>
                  <Text
                    className="leading-[29.00px] text-blue_gray-900 text-lg w-[77%] sm:w-full"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      Anton
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      {" "}
                      Posted a new video{" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      “Video Name”
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      .{" "}
                    </span>
                    <span className="text-colors5 font-gilroy text-left font-medium">
                      5w
                    </span>
                  </Text>
                </div>
                <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      src="images/img_profileimglarg_2.png"
                      alt="ProfileImgLarg Four"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                      shape="circle"
                      color="blue_A200_02"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        alt="videocamera One"
                      />
                    </Button>
                  </div>
                  <Text
                    className="leading-[29.00px] text-blue_gray-900 text-lg w-[77%] sm:w-full"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      Kai
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      {" "}
                      Posted a new video{" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      “Video Name”
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      .{" "}
                    </span>
                    <span className="text-colors5 font-gilroy text-left font-medium">
                      5w
                    </span>
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_user.svg"
                  alt="user One"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      src="images/img_profileimglarg_72X72.png"
                      alt="ProfileImgLarg Five"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                      shape="circle"
                      color="red_400"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_notification_24X24.svg"
                        alt="notification Two"
                      />
                    </Button>
                  </div>
                  <Text
                    className="leading-[29.00px] text-blue_gray-900 text-lg w-[77%] sm:w-full"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      Benito
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      {" "}
                      liked a photo{" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      Carmelo’s{" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      post.{" "}
                    </span>
                    <span className="text-colors5 font-gilroy text-left font-medium">
                      6w.
                    </span>
                  </Text>
                </div>
                <Img
                  className="h-[72px] md:h-auto object-cover"
                  src="images/img_profileimglarg_3.png"
                  alt="ProfileImgLarg One Two"
                />
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start">
                  <div className="h-[72px] relative w-[72px]">
                    <Img
                      className="h-[72px] m-auto rounded-[50%] w-[72px]"
                      src="images/img_profileimglarg_4.png"
                      alt="ProfileImgLarg Six"
                    />
                    <Button
                      className="absolute bottom-[0] flex h-6 items-center justify-center right-[0] w-6"
                      shape="circle"
                      color="blue_A200_02"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        alt="videocamera Two"
                      />
                    </Button>
                  </div>
                  <Text
                    className="leading-[29.00px] text-blue_gray-900 text-lg w-[77%] sm:w-full"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      Marin Posted a new video{" "}
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      “Video Name”
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      .{" "}
                    </span>
                    <span className="text-colors5 font-gilroy text-left font-medium">
                      5w
                    </span>
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_user.svg"
                  alt="user Two"
                />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityLogPage;
