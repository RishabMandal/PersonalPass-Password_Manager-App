import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";

export default function LoggedinContent() {
  return (
    <>
      <View>
        {/* // NEW SECTION START */}

        {/* // NEW SECTION END */}

        <View>
          <View className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <View className="flex items-start justify-between">
              <View className="h-screen hidden lg:block shadow-lg relative w-80">
                <View className="bg-white h-full dark:bg-gray-700">
                  <View className="flex items-center justify-start pt-6">
                    <Text className="font-bold dark:text-white text-3xl">
                      PersonalPass
                    </Text>
                    <Image
                      //   src={logo}
                      className="rounded-lg w-48 mx-auto"
                      alt=""
                    />
                  </View>
                  <View className="mt-6">
                    <View>
                      <View
                        className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500"
                        href="#"
                      >
                        <Text className="text-left">
                          {/* <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                          </svg> */}
                        </Text>
                        <Text className="mx-2 text-sm font-normal">
                          <Text>Home</Text>
                        </Text>
                      </View>
                      <View
                        className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                        href="#"
                      >
                        <Text className="text-left">
                          {/* <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                          </svg> */}
                        </Text>
                        <Text className="mx-2 text-sm font-normal">
                          Password Generator (BETA)
                        </Text>
                      </View>
                      <View
                        className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                        href="#"
                      >
                        <Text className="text-left">
                          {/* <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path>
                          </svg> */}
                        </Text>
                        <Text className="mx-2 text-sm font-normal">
                          <Text>Labs(Coming soon)</Text>
                        </Text>
                      </View>
                      <View
                        className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                        href="#"
                      >
                        <Text className="text-left">
                          {/* <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zm743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zm-236-507q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zm635 507q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zm-266-397q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zm592 561q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z"></path>
                          </svg> */}
                        </Text>
                        <Text className="mx-2 text-sm font-normal">
                          {/* Feedback (Coming Soon) */}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="flex flex-col w-full md:space-y-4">
                <View className="w-full h-16 z-40 flex items-center justify-between">
                  <View className="block lg:hidden ml-6">
                    <Pressable className="flex p-2 mt-4 items-center rounded-full bg-white shadow text-gray-500 text-md">
                      {/* <svg
                        width="20"
                        height="20"
                        className="text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                      </svg> */}
                    </Pressable>
                  </View>
                  <View className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                    <View className="relative p-1 flex items-center w-full space-x-4 justify-end">
                      <Pressable
                        // whileHover={{ rotate: 40 }}
                        className="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md"
                      >
                        {/* <svg
                          width="20"
                          height="20"
                          className="text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path>
                        </svg> */}
                      </Pressable>
                      <Pressable className="flex py-2 px-3 items-center font-bold rounded-lg bg-green-600 shadow text-white hover:text-green-800 text-md">
                        <Text>Premium</Text>
                      </Pressable>

                      <View className="relative inline-block text-left">
                        <View>
                          <Pressable
                            type="Pressable"
                            className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                            id="options-menu"
                          >
                            {/* {username} */}
                            {/* <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                            </svg> */}
                          </Pressable>
                        </View>
                        <View
                          className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
                        >
                          <View
                            className="py-1 rounded-xl"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <View
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                            >
                              <Text className="flex flex-col">
                                {/* <Text>{username}</Text> */}
                              </Text>
                            </View>
                            <View
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                            >
                              <Text className="flex flex-col">
                                <Text>Logout</Text>
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View className={`overflow-auto h-screen pb-24 px-4 md:px-6`}>
                  <Text className="text-4xl mt-8 font-semibold text-gray-800 dark:text-white">
                    {/* Welcome back, {username} */}
                  </Text>
                  <Text className="text-md mt-2 text-gray-400">
                    View and Manage your passwords
                  </Text>
                  <View className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                    <View className="w-full md:w-6/12">
                      <View className="shadow-lg w-full bg-white rounded-xl dark:bg-gray-700 relative overflow-hidden">
                        <View href="#" className="w-full h-full block">
                          <View className="flex items-center bg-purple-600 hover:bg-purple-700 rounded-xl justify-between px-4 py-6 space-x-4">
                            <View className="flex items-center rounded-xl">
                              <Text className="text-xl text-gray-700 dark:text-white ml-2 font-semibold">
                                Generate new password
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View className="flex items-center w-full md:w-1/2 space-x-4">
                      <View className="w-1/2 ">
                        <View className="shadow-lg cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-xl px-4 py-6 w-full relative">
                          <Pressable className="peer px-5 py-2 text-white">
                            <Text className="text-2xl text-black dark:text-white font-bold">
                              All
                            </Text>
                            <Text className="text-white text-sm">Safe</Text>
                          </Pressable>
                        </View>
                      </View>

                      <View className="w-1/2 ">
                        <View className="shadow-lg cursor-pointer bg-orange-500 hover:bg-orange-600 rounded-xl px-4 py-6 w-full relative">
                          <Pressable className="peer px-5 py-2 text-white">
                            <Text className="text-2xl text-black dark:text-white font-bold">
                              <Text>0</Text>
                            </Text>
                            <Text className="text-white text-sm">
                              Compromised
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View className="flex items-center space-x-4">
                    <Pressable className="flex items-center text-gray-400 text-md border-gray-300 border px-4 py-2 rounded-tl-sm rounded-bl-full rounded-r-full">
                      {/* <svg
                        // whileHover={{ scale:1.1 }}
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mr-2 text-gray-400"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"></path>
                      </svg> */}
                      {/* Last month */}
                      {/* <svg
                        width="20"
                        height="20"
                        className="ml-2 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                      </svg> */}
                    </Pressable>
                    {/* <Text className="text-gray-400">Today's date : {date}</Text> */}
                  </View>
                  <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    {/* {eventData.map((eventData1, index) => {
                      return (
                        <>
                          <View className="w-full">
                            <View className="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                              <View className="flex">
                                <Text className="text-xl w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                  {eventData1.notice}
                                </Text>
                                <Image
                                  //   whileHover={{ rotate: 180 }}
                                  //   src={deleteicon}
                                  className="w-[35px] mx-2 cursor-pointer"
                                  alt=""
                                />
                              </View>
                              <View className="flex items-end px-1 space-x-2 my-6">
                                <Text className="text-4xl text-black dark:text-white font-bold">
                                  {eventData1.date}
                                </Text>
                              </View>

                              <PasswordStrengthMeter
                                password1={eventData1.date}
                              />
                            </View>
                          </View>
                        </>
                      );
                    })} */}
                    <View className="w-full">
                      <View className="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                        <Text className="text-xl text-black">
                          <TextInput
                            className="w-11/12 bg-gray-200 rounded-lg p-2"
                            placeholder="Account identifier"
                            type="text"
                          />
                        </Text>
                        <Text className="text-xl mt-3 mb-6 text-black">
                          <TextInput
                            className="w-11/12 bg-gray-200 rounded-lg p-2"
                            placeholder="Password"
                            type="text"
                          />
                        </Text>
                        {/* </View> */}
                        <Pressable className="bg-orange-500 hover:bg-orange-100 hover:text-orange-500 rounded-lg px-3 py-2 text-white">
                          {/* Add */}
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
                {/* // */}
                {/* // Password Generator */}

                {/* <View className={`${generator_visibility}`}>
                  <PasswordGenerator username={username} />
                </View> */}
                {/* // End  */}
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
