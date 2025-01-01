import { ImageSourcePropType, TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface InputFieldProps extends TextInputProps {
  className?: string;
  label: string;
  icon?: any;
  value?: string;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  textContentType?: TextInputProps["textContentType"];
  keyboardType?: TextInputProps["keyboardType"];
  onChangeText?: (value: string) => void;
}

declare interface TabIconProps {
  focused: boolean;
  source: ImageSourcePropType;
}

declare interface RideProps {
  origin_address: string;
  destination_address: string;
  origin_latitude: number | string;
  origin_longitude: number | string;
  destination_latitude: number | string;
  destination_longitude: number | string;
  ride_time: number;
  fare_price: number | string;
  payment_status: string;
  driver_id: number;
  user_id: string;
  created_at: string;
  driver: {
    first_name: string;
    last_name: string;
    car_seats: number;
  };
}
