import {
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  Platform,
  Keyboard,
} from "react-native";

import { InputFieldProps } from "@/types/type";

const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  value,
  placeholder = "",
  onChangeText,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  placeholderTextColor = "#858585",
  className,
  textContentType,
  keyboardType,
  ...props
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              textContentType={textContentType}
              value={value}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
