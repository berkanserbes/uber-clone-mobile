import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useState, useRef } from "react";
import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<Swiper>(null);

  const isLastIndex = currentIndex === onboarding.length - 1;

  const handleSkip = () => {
    router.replace("/(auth)/sign-up");
  };

  const handleNext = () => {
    isLastIndex
      ? router.replace("/(auth)/sign-up")
      : swiperRef.current?.scrollBy(1);
  };

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="p-5 justify-end w-full items-end"
        onPress={handleSkip}
      >
        <Text className="text-black">Skip</Text>
      </TouchableOpacity>

      <Swiper
        loop={false}
        ref={swiperRef}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {onboarding.map((item) => {
          return (
            <View
              key={item.id}
              className="flex items-center justify-center p-5"
            >
              <Image
                source={item.image}
                className="w-full h-[300px]"
                resizeMode="contain"
              />
              <View className="flex flex-row items-center justify-center w-full mt-10">
                <Text className="text-black text-3xl font-bold mx-10 text-center">
                  {item.title}
                </Text>
              </View>
              <Text className="text-center text-[#858585] mx-10 mt-3">
                {item.description}
              </Text>
            </View>
          );
        })}
      </Swiper>

      <CustomButton
        className="w-11/12 mt-10 mb-5"
        title={isLastIndex ? "Get Started" : "Next"}
        onPress={handleNext}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
