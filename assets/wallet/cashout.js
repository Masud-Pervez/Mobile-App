import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function CashOut(props) {
  return (
    <Svg
      width={props.width || "60"}
      height={props.height || "60"}
      viewBox="0 0 47 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M37.5 12.5V26.5C37.5 27.3333 37.2 29 36 29H15.5"
        stroke="#7E2F44"
        stroke-width="0.7"
      />
      <Path
        d="M33.5 10C34 10.1667 35 10.9 35 12.5V15.2073V21V24.5C35 25.1667 34.6 26.5 33 26.5H30.5H30H16.1347H13C12.1667 26.6667 10.5 26.6 10.5 25V20.75V16.5L18.5 10H29.5H33.5Z"
        fill="#FDA4A8"
      />
      <Path
        d="M10.5 25C10.5 26.6 12.1667 26.6667 13 26.5C13.9161 26.5 14.9814 26.5 16.1347 26.5M10.5 25C10.5 23.4 10.5 18.6667 10.5 16.5M10.5 25V20.75M10.5 16.5V20.75M10.5 16.5L18.5 10H29.5M10.5 20.75C12.2565 20.8333 15.8424 22.1 16.1347 26.5M16.1347 26.5C20.6279 26.5 26.4565 26.5 30 26.5M30.5 26.5C31.7449 26.5 32.6423 26.5 33 26.5C34.6 26.5 35 25.1667 35 24.5C35 23.561 35 22.3258 35 21M30.5 26.5C30.339 26.5 30.1722 26.5 30 26.5M30.5 26.5H30M30 26.5C30 25 31 21.8 35 21M35 21C35 19.0465 35 16.8964 35 15.2073M35 21V15.2073M35 15.2073C35 13.9732 35 12.9852 35 12.5C35 10.9 34 10.1667 33.5 10H29.5M35 15.2073C33.3333 15.3049 29.9 14.4 29.5 10"
        stroke="#7E2F44"
        stroke-width="0.7"
      />
      <Circle cx="14.5" cy="13.5" r="4.5" fill="#FDA4A8" />
      <Path
        d="M14.5 19C13.7392 19 13.0242 18.8555 12.355 18.5666C11.6858 18.278 11.1038 17.8863 10.6088 17.3913C10.1138 16.8963 9.72197 16.3142 9.4334 15.645C9.14447 14.9758 9 14.2608 9 13.5C9 12.7392 9.14447 12.0242 9.4334 11.355C9.72197 10.6858 10.1138 10.1038 10.6088 9.60875C11.1038 9.11375 11.6858 8.72178 12.355 8.43285C13.0242 8.14428 13.7392 8 14.5 8C15.2608 8 15.9758 8.14428 16.645 8.43285C17.3142 8.72178 17.8963 9.11375 18.3913 9.60875C18.8863 10.1038 19.278 10.6858 19.5666 11.355C19.8555 12.0242 20 12.7392 20 13.5C20 14.2608 19.8555 14.9758 19.5666 15.645C19.278 16.3142 18.8863 16.8963 18.3913 17.3913C17.8963 17.8863 17.3142 18.278 16.645 18.5666C15.9758 18.8555 15.2608 19 14.5 19ZM14.5 17.9C15.7283 17.9 16.7688 17.4738 17.6213 16.6213C18.4738 15.7688 18.9 14.7283 18.9 13.5C18.9 12.2717 18.4738 11.2312 17.6213 10.3787C16.7688 9.52625 15.7283 9.1 14.5 9.1C13.2717 9.1 12.2312 9.52625 11.3787 10.3787C10.5262 11.2312 10.1 12.2717 10.1 13.5C10.1 14.7283 10.5262 15.7688 11.3787 16.6213C12.2312 17.4738 13.2717 17.9 14.5 17.9Z"
        fill="#7E2F44"
      />
      <Path
        d="M14.75 16L14.225 15.3958L15.5562 13.9167H11V13.0833H15.5562L14.225 11.6042L14.75 11L17 13.5L14.75 16Z"
        fill="#7E2F44"
      />
      <Path
        d="M21 14.2857C21 13.9447 21.1264 13.6177 21.3515 13.3766C21.5765 13.1355 21.8817 13 22.2 13C22.5183 13 22.8235 13.1355 23.0485 13.3766C23.2736 13.6177 23.4 13.9447 23.4 14.2857V20.0714C23.4 20.5829 23.5896 21.0735 23.9272 21.4351C24.2648 21.7968 24.7226 22 25.2 22C25.6774 22 26.1352 21.7968 26.4728 21.4351C26.8104 21.0735 27 20.5829 27 20.0714V19.75M21.6 16.8571H25.2"
        stroke="#7E2F44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}