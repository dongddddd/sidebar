import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from "react-icons";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* 네비게이션 토글 코드*/}
        <div className="navbar">
          <div className="Side-menu">
            <svg
              className="menu"
              onClick={showSidebar}
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 17H30V13.6666H0V17ZM0 23.6667H30V20.3333H0V23.6667ZM0 10.3333H30V6.99998H0V10.3333ZM0 0.333313V3.66665H30V0.333313H0Z"
                fill="black"
              />
            </svg>
          </div>
          <Link to="#" className="menu-bars">
            <div className="logo">
              <svg
                width="62"
                height="31"
                viewBox="0 0 62 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.2106 16.7481C47.4413 14.8922 50.6624 13.0219 53.9027 11.1868C54.5793 10.7697 55.347 10.5232 56.1399 10.4686C56.9328 10.414 57.7272 10.5529 58.4545 10.8732C59.1819 11.1936 59.8205 11.6858 60.3155 12.3077C60.8105 12.9295 61.147 13.6623 61.296 14.443C61.4972 15.4224 61.39 16.4401 60.9893 17.3561C60.5885 18.2721 59.9138 19.0414 59.058 19.5584C53.2499 22.9431 47.4269 26.3001 41.589 29.6293C40.7696 30.1253 39.8153 30.3515 38.8605 30.2761C37.9057 30.2007 36.9987 29.8274 36.2674 29.2089C35.4919 28.6375 34.9052 27.8471 34.5827 26.9395C34.2602 26.0319 34.2167 25.0485 34.4578 24.1159C34.6797 23.3843 35.0496 22.706 35.5446 22.1233C36.0396 21.5406 36.6491 21.0659 37.3352 20.7286C39.6499 19.4369 41.9263 18.0765 44.2186 16.7465"
                  fill="#FABC05"
                />
                <path
                  d="M46.5813 15.3991C43.3602 13.5287 40.1295 11.6744 36.918 9.78651C36.2185 9.40906 35.6212 8.86732 35.1775 8.2079C34.7338 7.54848 34.4569 6.79112 34.3707 6.001C34.2845 5.21087 34.3916 4.41164 34.6827 3.67206C34.9739 2.93249 35.4403 2.27472 36.042 1.75535C36.7904 1.09175 37.7261 0.676412 38.7203 0.566484C39.7146 0.456557 40.7184 0.657443 41.5938 1.1415C47.4285 4.47929 53.2484 7.84319 59.0533 11.2332C59.8919 11.6951 60.5645 12.4085 60.9763 13.2728C61.3881 14.1372 61.5184 15.109 61.3488 16.0513C61.2416 17.0086 60.8506 17.912 60.2259 18.6453C59.6011 19.3785 58.7713 19.9081 57.8431 20.166C57.0985 20.3395 56.3262 20.3581 55.574 20.2206C54.8219 20.0831 54.1061 19.7925 53.4711 19.3667C51.1947 18.0079 48.8784 16.7163 46.5797 15.3959"
                  fill="#109D58"
                />
                <path
                  d="M17.2153 14.0754C15.1479 15.2477 13.0809 16.4226 11.0145 17.6002C9.806 18.2892 8.61667 19.0022 7.39697 19.6784C6.27156 20.3355 4.93119 20.5187 3.67073 20.1876C2.41027 19.8564 1.33297 19.0382 0.675823 17.9128C0.0186777 16.7874 -0.164483 15.447 0.166633 14.1865C0.497749 12.9261 1.31602 11.8488 2.44143 11.1916C8.20797 7.83038 13.9889 4.49685 19.7842 1.19103C20.5882 0.695474 21.5257 0.460238 22.4684 0.517461C23.4112 0.574684 24.3133 0.921575 25.0515 1.51074C25.8567 2.08024 26.4708 2.88 26.8132 3.80494C27.1556 4.72988 27.2101 5.73675 26.9697 6.69327C26.7913 7.22845 26.5395 7.73629 26.2216 8.20231C25.6375 8.87409 24.9616 9.46014 24.2138 9.94315C21.9087 11.3643 19.5524 12.7023 17.2153 14.0722"
                  fill="#E94436"
                />
                <path
                  d="M14.8483 15.3944C16.8997 16.5976 18.9512 17.8002 21.0027 19.0024C22.2032 19.7041 23.4181 20.3819 24.6123 21.0949C25.7224 21.7519 26.5295 22.8193 26.8593 24.0665C27.1891 25.3136 27.015 26.6404 26.3748 27.7603C25.7345 28.8803 24.6795 29.7034 23.4374 30.0519C22.1954 30.4005 20.8661 30.2465 19.7367 29.6232C13.9435 26.3195 8.16681 22.9822 2.40666 19.6114C1.57544 19.1624 0.903156 18.4677 0.481692 17.6222C0.0602291 16.7767 -0.0898461 15.8217 0.0519794 14.8877C0.143406 13.9059 0.529572 12.9748 1.15977 12.2165C1.78998 11.4582 2.63476 10.9082 3.5832 10.6387C4.13359 10.5267 4.6968 10.4912 5.25689 10.5332C6.12883 10.7025 6.97261 10.9936 7.76344 11.398C10.1469 12.6769 12.484 14.0564 14.8387 15.3944"
                  fill="#4385F3"
                />
              </svg>
            </div>
            <div className="Blog-text">
              <svg
                className="univ"
                width="52"
                height="10"
                viewBox="0 0 52 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.372559 0.0620258H2.60405C3.35816 0.0620258 4.0163 0.220535 4.57846 0.537553C5.14061 0.84768 5.57252 1.28186 5.87416 1.84009C6.17581 2.39831 6.32663 3.03924 6.32663 3.76287C6.32663 4.4865 6.17581 5.12743 5.87416 5.68566C5.57252 6.24388 5.14061 6.68151 4.57846 6.99853C4.0163 7.30865 3.35816 7.46372 2.60405 7.46372H0.372559V0.0620258ZM2.60405 6.62637C3.47471 6.62637 4.16369 6.37483 4.67101 5.87173C5.17832 5.36864 5.43198 4.66568 5.43198 3.76287C5.43198 2.86006 5.17832 2.1571 4.67101 1.65401C4.16369 1.15091 3.47471 0.899367 2.60405 0.899367H1.24664V6.62637H2.60405Z"
                  fill="black"
                />
                <path
                  d="M9.06377 7.62912C8.69357 7.62912 8.35765 7.55675 8.056 7.41203C7.76121 7.26041 7.52812 7.05366 7.35673 6.79177C7.1922 6.523 7.10993 6.22321 7.10993 5.89241C7.10993 5.34796 7.31217 4.92412 7.71665 4.62089C8.12799 4.31765 8.65244 4.16604 9.29 4.16604C9.60536 4.16604 9.88987 4.20049 10.1435 4.26941C10.3972 4.33833 10.5994 4.41414 10.7502 4.49684V4.22806C10.7502 3.97996 10.6851 3.75943 10.5549 3.56646C10.4315 3.3666 10.2635 3.21498 10.051 3.1116C9.83845 3.00134 9.60879 2.9462 9.36199 2.9462C8.77927 2.9462 8.33365 3.18397 8.02515 3.6595L7.29503 3.17363C7.50756 2.85661 7.78863 2.61196 8.13827 2.43966C8.4879 2.26048 8.8821 2.17089 9.32086 2.17089C10.0201 2.17089 10.572 2.36041 10.9765 2.73945C11.381 3.1185 11.5832 3.62848 11.5832 4.26941V7.46372H10.7502V6.70907H10.7091C10.5446 6.97096 10.3218 7.19149 10.0407 7.37068C9.75961 7.54297 9.43397 7.62912 9.06377 7.62912ZM9.13575 6.8538C9.40998 6.8538 9.67049 6.78144 9.91729 6.63671C10.1641 6.49199 10.3629 6.29557 10.5137 6.04747C10.6714 5.79937 10.7502 5.53059 10.7502 5.24114C10.3663 4.99304 9.92415 4.86899 9.42369 4.86899C8.99179 4.86899 8.64558 4.96892 8.38507 5.16878C8.13141 5.36175 8.00458 5.60985 8.00458 5.91308C8.00458 6.18875 8.1177 6.41618 8.34394 6.59536C8.57017 6.76765 8.83411 6.8538 9.13575 6.8538Z"
                  fill="black"
                />
                <path
                  d="M15.0032 7.62912C14.5096 7.62912 14.0674 7.51196 13.6767 7.27764C13.2928 7.04332 12.9911 6.71941 12.7717 6.30591C12.5524 5.89241 12.4427 5.42377 12.4427 4.9C12.4427 4.4038 12.5455 3.94895 12.7512 3.53544C12.9568 3.11505 13.2482 2.78425 13.6252 2.54304C14.0092 2.29494 14.4479 2.17089 14.9415 2.17089C15.4351 2.17089 15.867 2.2846 16.2372 2.51203C16.6143 2.73256 16.9022 3.04613 17.101 3.45274C17.2998 3.85935 17.3992 4.32799 17.3992 4.85865C17.3992 4.95514 17.3924 5.02405 17.3787 5.0654H13.327C13.3407 5.45134 13.4333 5.77869 13.6047 6.04747C13.7761 6.30936 13.9886 6.50577 14.2422 6.63671C14.5028 6.76765 14.7701 6.83312 15.0444 6.83312C15.6888 6.83312 16.1858 6.51611 16.5354 5.88207L17.3067 6.25422C17.0873 6.66772 16.7822 7.00197 16.3915 7.25696C16.0076 7.50507 15.5448 7.62912 15.0032 7.62912ZM16.4737 4.33144C16.46 4.12469 16.4018 3.91793 16.2989 3.71118C16.1961 3.50443 16.0281 3.32869 15.795 3.18397C15.5688 3.03924 15.2774 2.96688 14.921 2.96688C14.537 2.96688 14.2045 3.09093 13.9235 3.33903C13.6424 3.58713 13.4641 3.91793 13.3887 4.33144H16.4737Z"
                  fill="black"
                />
                <path
                  d="M18.8986 1.26118C18.7272 1.26118 18.5798 1.19916 18.4564 1.07511C18.333 0.951055 18.2713 0.802884 18.2713 0.630591C18.2713 0.458299 18.333 0.310127 18.4564 0.186076C18.5798 0.0620253 18.7272 0 18.8986 0C19.07 0 19.2174 0.0620253 19.3408 0.186076C19.4642 0.310127 19.5259 0.458299 19.5259 0.630591C19.5259 0.802884 19.4642 0.951055 19.3408 1.07511C19.2242 1.19916 19.0769 1.26118 18.8986 1.26118ZM17.8908 9.8C17.7263 9.8 17.5755 9.77933 17.4384 9.73798V8.90064C17.5892 8.96955 17.7297 9.00401 17.86 9.00401C18.0725 9.00401 18.2268 8.93509 18.3227 8.79726C18.4187 8.66632 18.4667 8.4699 18.4667 8.20802V2.33629H19.3305V8.20802C19.3305 8.73868 19.2037 9.13495 18.95 9.39684C18.6964 9.66562 18.3433 9.8 17.8908 9.8Z"
                  fill="black"
                />
                <path
                  d="M21.1983 1.26118C21.0269 1.26118 20.8795 1.19916 20.7561 1.07511C20.6327 0.951055 20.571 0.802884 20.571 0.630591C20.571 0.458299 20.6327 0.310127 20.7561 0.186076C20.8795 0.0620253 21.0269 0 21.1983 0C21.3697 0 21.5171 0.0620253 21.6405 0.186076C21.7639 0.310127 21.8256 0.458299 21.8256 0.630591C21.8256 0.802884 21.7639 0.951055 21.6405 1.07511C21.5239 1.19916 21.3766 1.26118 21.1983 1.26118ZM20.7664 2.33629H21.6302V7.46372H20.7664V2.33629Z"
                  fill="black"
                />
                <path
                  d="M22.9838 2.33629H23.8168V3.10127H23.8579C24.0019 2.83938 24.2281 2.61885 24.5366 2.43966C24.8451 2.26048 25.1742 2.17089 25.5238 2.17089C26.1477 2.17089 26.6207 2.35352 26.9429 2.71878C27.272 3.08404 27.4365 3.58369 27.4365 4.21772V7.46372H26.5727V4.35211C26.5727 3.42862 26.1443 2.96688 25.2873 2.96688C25.0131 2.96688 24.7663 3.04613 24.5469 3.20464C24.3275 3.36315 24.1561 3.5699 24.0327 3.8249C23.9162 4.07989 23.8579 4.34867 23.8579 4.63123V7.46372H22.9838V2.33629Z"
                  fill="black"
                />
                <path
                  d="M33.6025 7.62912C33.0746 7.62912 32.605 7.50851 32.1936 7.2673C31.7823 7.0192 31.4635 6.67806 31.2373 6.24388C31.011 5.80281 30.8979 5.29628 30.8979 4.72426V0.0620258H31.772V4.76561C31.772 5.36519 31.9297 5.8545 32.2451 6.23355C32.5604 6.6057 33.0129 6.79177 33.6025 6.79177C34.192 6.79177 34.6445 6.6057 34.9599 6.23355C35.2821 5.8545 35.4432 5.36519 35.4432 4.76561V0.0620258H36.3173V4.72426C36.3173 5.29628 36.2076 5.80281 35.9882 6.24388C35.7757 6.68495 35.4637 7.02609 35.0524 7.2673C34.6411 7.50851 34.1578 7.62912 33.6025 7.62912Z"
                  fill="black"
                />
                <path
                  d="M37.6055 2.33629H38.4385V3.10127H38.4796C38.6236 2.83938 38.8498 2.61885 39.1583 2.43966C39.4668 2.26048 39.7959 2.17089 40.1455 2.17089C40.7694 2.17089 41.2424 2.35352 41.5646 2.71878C41.8937 3.08404 42.0582 3.58369 42.0582 4.21772V7.46372H41.1944V4.35211C41.1944 3.42862 40.7659 2.96688 39.909 2.96688C39.6348 2.96688 39.388 3.04613 39.1686 3.20464C38.9492 3.36315 38.7778 3.5699 38.6544 3.8249C38.5379 4.07989 38.4796 4.34867 38.4796 4.63123V7.46372H37.6055V2.33629Z"
                  fill="black"
                />
                <path
                  d="M43.8137 1.26118C43.6423 1.26118 43.4949 1.19916 43.3715 1.07511C43.2481 0.951055 43.1864 0.802884 43.1864 0.630591C43.1864 0.458299 43.2481 0.310127 43.3715 0.186076C43.4949 0.0620253 43.6423 0 43.8137 0C43.9851 0 44.1325 0.0620253 44.2559 0.186076C44.3793 0.310127 44.441 0.458299 44.441 0.630591C44.441 0.802884 44.3793 0.951055 44.2559 1.07511C44.1393 1.19916 43.9919 1.26118 43.8137 1.26118ZM43.3818 2.33629H44.2456V7.46372H43.3818V2.33629Z"
                  fill="black"
                />
                <path
                  d="M45.0233 2.33629H45.9694L47.5325 6.42996H47.5531L49.1367 2.33629H50.0622L47.9747 7.46372H47.0903L45.0233 2.33629Z"
                  fill="black"
                />
                <path
                  d="M50.8247 7.52574C50.6396 7.52574 50.4819 7.46372 50.3517 7.33967C50.2283 7.20872 50.1666 7.05021 50.1666 6.86414C50.1666 6.68495 50.2283 6.53334 50.3517 6.40929C50.4819 6.27834 50.6396 6.21287 50.8247 6.21287C51.0029 6.21287 51.1538 6.27834 51.2772 6.40929C51.4074 6.53334 51.4725 6.68495 51.4725 6.86414C51.4725 7.05021 51.4074 7.20872 51.2772 7.33967C51.1538 7.46372 51.0029 7.52574 50.8247 7.52574Z"
                  fill="black"
                />
              </svg>
              <svg
                className="GDSC-Blog"
                width="151"
                height="29"
                viewBox="0 0 151 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8793 22.2701C9.86052 22.2701 7.99852 21.7997 6.29332 20.8589C4.60772 19.8985 3.26512 18.5853 2.26551 16.9193C1.26591 15.2337 0.766113 13.3521 0.766113 11.2745C0.766113 9.19694 1.26591 7.32514 2.26551 5.65913C3.26512 3.97353 4.60772 2.66033 6.29332 1.71953C7.99852 0.759131 9.86052 0.278931 11.8793 0.278931C13.5257 0.278931 15.0251 0.572931 16.3775 1.16093C17.7495 1.72933 18.9157 2.54273 19.8761 3.60113L17.1419 6.27654C16.4363 5.53173 15.6523 4.97313 14.7899 4.60073C13.9471 4.22833 12.9573 4.04213 11.8205 4.04213C10.5465 4.04213 9.36072 4.34593 8.26312 4.95353C7.18512 5.56113 6.32272 6.41373 5.67592 7.51134C5.04872 8.60894 4.73512 9.86334 4.73512 11.2745C4.73512 12.6857 5.05852 13.9401 5.70532 15.0377C6.35212 16.1353 7.21452 16.9879 8.29252 17.5955C9.39012 18.2031 10.5857 18.5069 11.8793 18.5069C13.8197 18.5069 15.4367 17.9287 16.7303 16.7723C17.1223 16.3999 17.4555 15.9491 17.7299 15.4199C18.0239 14.8711 18.2395 14.2733 18.3767 13.6265H11.7911V10.2455H22.1105C22.2477 10.7943 22.3163 11.4117 22.3163 12.0977C22.3163 13.4893 22.1007 14.7829 21.6695 15.9785C21.2579 17.1741 20.6209 18.2227 19.7585 19.1243C18.7981 20.1435 17.6515 20.9275 16.3187 21.4763C15.0055 22.0055 13.5257 22.2701 11.8793 22.2701Z"
                  fill="black"
                />
                <path
                  d="M25.9697 0.749332H33.0846C35.2798 0.749332 37.1908 1.19033 38.8176 2.07233C40.4444 2.95433 41.6988 4.18913 42.5808 5.77673C43.4628 7.36434 43.9038 9.19694 43.9038 11.2745C43.9038 13.3521 43.4628 15.1847 42.5808 16.7723C41.6988 18.3599 40.4444 19.5947 38.8176 20.4767C37.1908 21.3587 35.2798 21.7997 33.0846 21.7997H25.9697V0.749332ZM32.9081 18.0365C35.1818 18.0365 36.9164 17.4387 38.112 16.2431C39.3272 15.0279 39.9348 13.3717 39.9348 11.2745C39.9348 9.17734 39.3272 7.53093 38.112 6.33533C36.9164 5.12013 35.1818 4.51253 32.9081 4.51253H29.9387V18.0365H32.9081Z"
                  fill="black"
                />
                <path
                  d="M53.9115 22.2701C52.0691 22.2701 50.4423 21.7507 49.0311 20.7119C47.6199 19.6731 46.6301 18.2031 46.0617 16.3019L49.7955 14.8319C50.0895 15.9491 50.5893 16.8409 51.2949 17.5073C52.0005 18.1737 52.8825 18.5069 53.9409 18.5069C54.8229 18.5069 55.5775 18.2913 56.2047 17.8601C56.8319 17.4093 57.1455 16.7919 57.1455 16.0079C57.1455 15.2239 56.8417 14.5869 56.2341 14.0969C55.6461 13.5873 54.5877 13.0483 53.0589 12.4799L51.7653 12.0095C50.4129 11.5391 49.2565 10.8237 48.2961 9.86334C47.3357 8.88334 46.8555 7.65834 46.8555 6.18834C46.8555 5.09073 47.1397 4.09113 47.7081 3.18953C48.2765 2.28793 49.0801 1.58233 50.1189 1.07273C51.1577 0.543531 52.3337 0.278931 53.6469 0.278931C55.5481 0.278931 57.0475 0.729731 58.1451 1.63133C59.2427 2.51333 59.9973 3.55213 60.4089 4.74773L56.9103 6.21773C56.6947 5.57093 56.3125 5.03193 55.7637 4.60073C55.2345 4.14993 54.5485 3.92453 53.7057 3.92453C52.8433 3.92453 52.1279 4.13033 51.5595 4.54193C51.0107 4.93393 50.7363 5.45333 50.7363 6.10013C50.7363 6.72733 51.0009 7.26633 51.5301 7.71713C52.0593 8.14833 52.9315 8.56974 54.1467 8.98134L55.4697 9.42234C57.2925 10.0495 58.6841 10.8825 59.6445 11.9213C60.6245 12.9405 61.1145 14.2831 61.1145 15.9491C61.1145 17.3211 60.7617 18.4873 60.0561 19.4477C59.3505 20.3885 58.4391 21.0941 57.3219 21.5645C56.2243 22.0349 55.0875 22.2701 53.9115 22.2701Z"
                  fill="black"
                />
                <path
                  d="M74.7255 22.2701C72.6871 22.2701 70.8251 21.7899 69.1395 20.8295C67.4539 19.8495 66.1211 18.5265 65.1411 16.8605C64.1807 15.1749 63.7005 13.3129 63.7005 11.2745C63.7005 9.23614 64.1807 7.38393 65.1411 5.71793C66.1211 4.03233 67.4539 2.70933 69.1395 1.74893C70.8251 0.768931 72.6871 0.278931 74.7255 0.278931C77.9007 0.278931 80.5272 1.42553 82.6048 3.71873L79.8118 6.42354C78.4202 4.83593 76.7346 4.04213 74.755 4.04213C73.4417 4.04213 72.2461 4.34593 71.1681 4.95353C70.0901 5.54153 69.2375 6.38433 68.6103 7.48194C67.9831 8.57954 67.6695 9.84374 67.6695 11.2745C67.6695 12.7053 67.9831 13.9695 68.6103 15.0671C69.2375 16.1647 70.0901 17.0173 71.1681 17.6249C72.2461 18.2129 73.4417 18.5069 74.755 18.5069C76.9501 18.5069 78.7926 17.5857 80.2822 15.7433L83.134 18.4187C82.0756 19.6731 80.8408 20.6335 79.4296 21.2999C78.0184 21.9467 76.4503 22.2701 74.7255 22.2701Z"
                  fill="black"
                />
                <path
                  d="M93.4405 0.749332H101.673C102.849 0.749332 103.927 0.994332 104.907 1.48433C105.906 1.97433 106.69 2.64073 107.259 3.48353C107.827 4.32633 108.111 5.24753 108.111 6.24713C108.111 7.30553 107.847 8.22674 107.317 9.01074C106.808 9.77514 106.132 10.3631 105.289 10.7747V11.0099C106.386 11.4019 107.259 12.0291 107.905 12.8915C108.552 13.7343 108.876 14.7535 108.876 15.9491C108.876 17.1055 108.562 18.1345 107.935 19.0361C107.327 19.9181 106.494 20.6041 105.436 21.0941C104.397 21.5645 103.241 21.7997 101.967 21.7997H93.4405V0.749332ZM101.379 9.33414C102.261 9.33414 102.956 9.09894 103.466 8.62854C103.976 8.13854 104.23 7.53094 104.23 6.80573C104.23 6.10013 103.976 5.51213 103.466 5.04173C102.976 4.55173 102.319 4.30673 101.496 4.30673H97.4095V9.33414H101.379ZM101.82 18.1835C102.78 18.1835 103.525 17.9385 104.054 17.4485C104.603 16.9389 104.877 16.2823 104.877 15.4787C104.877 14.6751 104.603 14.0185 104.054 13.5089C103.505 12.9993 102.721 12.7445 101.702 12.7445H97.4095V18.1835H101.82Z"
                  fill="black"
                />
                <path
                  d="M111.804 0.749332H115.655V21.7997H111.804V0.749332Z"
                  fill="black"
                />
                <path
                  d="M126.092 22.2701C124.603 22.2701 123.27 21.9369 122.094 21.2705C120.918 20.6041 119.997 19.6829 119.33 18.5069C118.664 17.3113 118.331 15.9785 118.331 14.5085C118.331 13.0189 118.664 11.6861 119.33 10.5101C119.997 9.33414 120.918 8.41294 122.094 7.74654C123.27 7.08014 124.603 6.74693 126.092 6.74693C127.562 6.74693 128.885 7.08014 130.061 7.74654C131.237 8.41294 132.158 9.34394 132.825 10.5395C133.491 11.7155 133.824 13.0385 133.824 14.5085C133.824 15.9785 133.491 17.3113 132.825 18.5069C132.158 19.6829 131.237 20.6041 130.061 21.2705C128.885 21.9369 127.562 22.2701 126.092 22.2701ZM126.092 18.7127C126.778 18.7127 127.415 18.5461 128.003 18.2129C128.611 17.8601 129.091 17.3701 129.444 16.7429C129.797 16.0961 129.973 15.3513 129.973 14.5085C129.973 13.6657 129.797 12.9307 129.444 12.3035C129.091 11.6567 128.611 11.1667 128.003 10.8335C127.415 10.4807 126.778 10.3043 126.092 10.3043C125.387 10.3043 124.73 10.4807 124.122 10.8335C123.534 11.1667 123.064 11.6567 122.711 12.3035C122.358 12.9307 122.182 13.6657 122.182 14.5085C122.182 15.3513 122.358 16.0961 122.711 16.7429C123.064 17.3701 123.534 17.8601 124.122 18.2129C124.73 18.5461 125.387 18.7127 126.092 18.7127Z"
                  fill="black"
                />
                <path
                  d="M143.371 28.6205C142.097 28.6205 140.961 28.4049 139.961 27.9737C138.961 27.5621 138.148 27.0231 137.521 26.3567C136.894 25.7099 136.453 25.0141 136.198 24.2693L139.873 22.7993C140.147 23.5441 140.598 24.1321 141.225 24.5633C141.852 24.9945 142.568 25.2101 143.371 25.2101C144.567 25.2101 145.518 24.8279 146.223 24.0635C146.948 23.2991 147.311 22.2505 147.311 20.9177V19.8593H147.076C146.605 20.5061 145.998 21.0157 145.253 21.3881C144.508 21.7409 143.646 21.9173 142.666 21.9173C141.49 21.9173 140.373 21.6037 139.314 20.9765C138.275 20.3297 137.433 19.4379 136.786 18.3011C136.139 17.1447 135.816 15.8217 135.816 14.3321C135.816 12.8425 136.139 11.5195 136.786 10.3631C137.433 9.20674 138.275 8.31494 139.314 7.68774C140.373 7.06054 141.49 6.74693 142.666 6.74693C143.646 6.74693 144.508 6.92333 145.253 7.27613C146.017 7.62894 146.625 8.12874 147.076 8.77554H147.311V7.21734H150.986V20.7707C150.986 22.3583 150.663 23.7401 150.016 24.9161C149.389 26.1117 148.497 27.0231 147.34 27.6503C146.204 28.2971 144.881 28.6205 143.371 28.6205ZM143.489 18.4187C144.155 18.4187 144.773 18.2619 145.341 17.9483C145.929 17.6151 146.4 17.1447 146.752 16.5371C147.125 15.9099 147.311 15.1749 147.311 14.3321C147.311 13.4697 147.135 12.7347 146.782 12.1271C146.429 11.4999 145.959 11.0295 145.371 10.7159C144.783 10.4023 144.155 10.2455 143.489 10.2455C142.823 10.2455 142.195 10.4121 141.607 10.7453C141.039 11.0589 140.569 11.5293 140.196 12.1565C139.843 12.7641 139.667 13.4893 139.667 14.3321C139.667 15.1749 139.843 15.9099 140.196 16.5371C140.569 17.1447 141.039 17.6151 141.607 17.9483C142.195 18.2619 142.823 18.4187 143.489 18.4187Z"
                  fill="black"
                />
              </svg>
            </div>
          </Link>
          <input
            type="text"
            className="search"
            placeholder="궁금한 정보나 계정을 입력해주세요"
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle"></li>
            {/* SidebarData를 순서대로 담기*/}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
