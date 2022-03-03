import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';
function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
    <>
            {/* 아이콘 컬러 전체 변경 기능 */}
            <IconContext.Provider value={{ color: '#fff' }}>
                {/* 네비게이션 토글 코드*/}
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <svg classname="menu" onClick={showSidebar} width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 17H30V13.6666H0V17ZM0 23.6667H30V20.3333H0V23.6667ZM0 10.3333H30V6.99998H0V10.3333ZM0 0.333313V3.66665H30V0.333313H0Z" fill="black"/>
                        </svg>
                        <div className="Big-Logo">
                            <div className="Logo">
                        <svg className="GDSC-Logo"
                            width="25"
                            height="13"
                            viewBox="0 0 25 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.6335 7.02356C18.8878 6.303 20.1384 5.57686 21.3964 4.86437C21.6591 4.70244 21.9572 4.60676 22.265 4.58556C22.5728 4.56435 22.8812 4.61826 23.1636 4.74263C23.446 4.86701 23.694 5.05814 23.8862 5.29957C24.0783 5.541 24.209 5.8255 24.2668 6.1286C24.3449 6.50885 24.3033 6.90395 24.1477 7.25958C23.9921 7.61522 23.7302 7.91392 23.3979 8.11463C21.143 9.42873 18.8822 10.7321 16.6156 12.0246C16.2975 12.2172 15.927 12.305 15.5563 12.2757C15.1856 12.2465 14.8335 12.1015 14.5495 11.8614C14.2485 11.6396 14.0207 11.3327 13.8955 10.9803C13.7703 10.6279 13.7534 10.2461 13.847 9.88407C13.9331 9.60001 14.0768 9.33669 14.2689 9.11045C14.4611 8.88422 14.6977 8.6999 14.9641 8.56894C15.8628 8.06747 16.7466 7.5393 17.6366 7.02294"
                                fill="#FABC05"
                            />
                            <path
                                d="M18.5537 6.49981C17.3031 5.77367 16.0488 5.05373 14.802 4.32076C14.5304 4.17422 14.2985 3.96389 14.1262 3.70787C13.9539 3.45185 13.8464 3.15781 13.813 2.85105C13.7795 2.54429 13.8211 2.23399 13.9341 1.94685C14.0472 1.65971 14.2283 1.40433 14.4618 1.20269C14.7524 0.94505 15.1157 0.783796 15.5017 0.741117C15.8877 0.698438 16.2775 0.776432 16.6173 0.964365C18.8826 2.26025 21.1422 3.56628 23.3959 4.88244C23.7215 5.06177 23.9826 5.33874 24.1425 5.67432C24.3024 6.0099 24.353 6.38719 24.2871 6.75303C24.2455 7.12472 24.0937 7.47546 23.8512 7.76015C23.6086 8.04484 23.2864 8.25045 22.9261 8.35055C22.637 8.41793 22.3371 8.42516 22.0451 8.37178C21.7531 8.31839 21.4752 8.20554 21.2286 8.04023C20.3448 7.51269 19.4455 7.01122 18.5531 6.49857"
                                fill="#109D58"
                            />
                            <path
                                d="M7.1529 5.98586C6.35021 6.44099 5.54773 6.89715 4.74545 7.35436C4.27625 7.62185 3.8145 7.89865 3.34095 8.16118C2.90402 8.41632 2.38362 8.48743 1.89425 8.35887C1.40488 8.23032 0.986626 7.91263 0.731492 7.47569C0.476358 7.03875 0.405246 6.51836 0.533801 6.02899C0.662355 5.53962 0.980046 5.12136 1.41698 4.86623C3.65582 3.56124 5.90025 2.26701 8.15026 0.983534C8.46242 0.791135 8.82638 0.699805 9.19239 0.722022C9.55841 0.744239 9.90865 0.878918 10.1953 1.10766C10.5079 1.32877 10.7463 1.63927 10.8792 1.99837C11.0122 2.35748 11.0333 2.74839 10.94 3.11976C10.8707 3.32754 10.773 3.52471 10.6496 3.70564C10.4228 3.96646 10.1604 4.19399 9.87004 4.38151C8.97508 4.93326 8.06027 5.45273 7.1529 5.98461"
                                fill="#E94436"
                            />
                            <path
                                d="M6.23353 6.49774C7.03002 6.96487 7.8265 7.4318 8.62298 7.89851C9.08908 8.17097 9.56076 8.43412 10.0244 8.71093C10.4554 8.96603 10.7687 9.38044 10.8968 9.86464C11.0248 10.3488 10.9572 10.864 10.7087 11.2988C10.4601 11.7336 10.0505 12.0532 9.56825 12.1885C9.08603 12.3238 8.56994 12.264 8.13144 12.022C5.88225 10.7394 3.63948 9.44369 1.40313 8.13498C1.08041 7.96066 0.819397 7.69094 0.655765 7.36268C0.492134 7.03441 0.433868 6.66363 0.488931 6.301C0.524427 5.91984 0.674354 5.55833 0.919028 5.26392C1.1637 4.96952 1.49169 4.75598 1.85991 4.65135C2.0736 4.60788 2.29227 4.59409 2.50972 4.61039C2.84825 4.67612 3.17584 4.78915 3.48288 4.94615C4.40824 5.44266 5.31561 5.97827 6.22981 6.49774"
                                fill="#4385F3"
                            />
                        </svg>
                            </div>
                        <div className="Blog-Text">
                            <svg className="univ" width="52" height="10" viewBox="0 0 52 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.372559 0.0620258H2.60405C3.35816 0.0620258 4.0163 0.220535 4.57846 0.537553C5.14061 0.84768 5.57252 1.28186 5.87416 1.84009C6.17581 2.39831 6.32663 3.03924 6.32663 3.76287C6.32663 4.4865 6.17581 5.12743 5.87416 5.68566C5.57252 6.24388 5.14061 6.68151 4.57846 6.99853C4.0163 7.30865 3.35816 7.46372 2.60405 7.46372H0.372559V0.0620258ZM2.60405 6.62637C3.47471 6.62637 4.16369 6.37483 4.67101 5.87173C5.17832 5.36864 5.43198 4.66568 5.43198 3.76287C5.43198 2.86006 5.17832 2.1571 4.67101 1.65401C4.16369 1.15091 3.47471 0.899367 2.60405 0.899367H1.24664V6.62637H2.60405Z" fill="black"/>
                                <path d="M9.06377 7.62912C8.69357 7.62912 8.35765 7.55675 8.056 7.41203C7.76121 7.26041 7.52812 7.05366 7.35673 6.79177C7.1922 6.523 7.10993 6.22321 7.10993 5.89241C7.10993 5.34796 7.31217 4.92412 7.71665 4.62089C8.12799 4.31765 8.65244 4.16604 9.29 4.16604C9.60536 4.16604 9.88987 4.20049 10.1435 4.26941C10.3972 4.33833 10.5994 4.41414 10.7502 4.49684V4.22806C10.7502 3.97996 10.6851 3.75943 10.5549 3.56646C10.4315 3.3666 10.2635 3.21498 10.051 3.1116C9.83845 3.00134 9.60879 2.9462 9.36199 2.9462C8.77927 2.9462 8.33365 3.18397 8.02515 3.6595L7.29503 3.17363C7.50756 2.85661 7.78863 2.61196 8.13827 2.43966C8.4879 2.26048 8.8821 2.17089 9.32086 2.17089C10.0201 2.17089 10.572 2.36041 10.9765 2.73945C11.381 3.1185 11.5832 3.62848 11.5832 4.26941V7.46372H10.7502V6.70907H10.7091C10.5446 6.97096 10.3218 7.19149 10.0407 7.37068C9.75961 7.54297 9.43397 7.62912 9.06377 7.62912ZM9.13575 6.8538C9.40998 6.8538 9.67049 6.78144 9.91729 6.63671C10.1641 6.49199 10.3629 6.29557 10.5137 6.04747C10.6714 5.79937 10.7502 5.53059 10.7502 5.24114C10.3663 4.99304 9.92415 4.86899 9.42369 4.86899C8.99179 4.86899 8.64558 4.96892 8.38507 5.16878C8.13141 5.36175 8.00458 5.60985 8.00458 5.91308C8.00458 6.18875 8.1177 6.41618 8.34394 6.59536C8.57017 6.76765 8.83411 6.8538 9.13575 6.8538Z" fill="black"/>
                                <path d="M15.0032 7.62912C14.5096 7.62912 14.0674 7.51196 13.6767 7.27764C13.2928 7.04332 12.9911 6.71941 12.7717 6.30591C12.5524 5.89241 12.4427 5.42377 12.4427 4.9C12.4427 4.4038 12.5455 3.94895 12.7512 3.53544C12.9568 3.11505 13.2482 2.78425 13.6252 2.54304C14.0092 2.29494 14.4479 2.17089 14.9415 2.17089C15.4351 2.17089 15.867 2.2846 16.2372 2.51203C16.6143 2.73256 16.9022 3.04613 17.101 3.45274C17.2998 3.85935 17.3992 4.32799 17.3992 4.85865C17.3992 4.95514 17.3924 5.02405 17.3787 5.0654H13.327C13.3407 5.45134 13.4333 5.77869 13.6047 6.04747C13.7761 6.30936 13.9886 6.50577 14.2422 6.63671C14.5028 6.76765 14.7701 6.83312 15.0444 6.83312C15.6888 6.83312 16.1858 6.51611 16.5354 5.88207L17.3067 6.25422C17.0873 6.66772 16.7822 7.00197 16.3915 7.25696C16.0076 7.50507 15.5448 7.62912 15.0032 7.62912ZM16.4737 4.33144C16.46 4.12469 16.4018 3.91793 16.2989 3.71118C16.1961 3.50443 16.0281 3.32869 15.795 3.18397C15.5688 3.03924 15.2774 2.96688 14.921 2.96688C14.537 2.96688 14.2045 3.09093 13.9235 3.33903C13.6424 3.58713 13.4641 3.91793 13.3887 4.33144H16.4737Z" fill="black"/>
                                <path d="M18.8986 1.26118C18.7272 1.26118 18.5798 1.19916 18.4564 1.07511C18.333 0.951055 18.2713 0.802884 18.2713 0.630591C18.2713 0.458299 18.333 0.310127 18.4564 0.186076C18.5798 0.0620253 18.7272 0 18.8986 0C19.07 0 19.2174 0.0620253 19.3408 0.186076C19.4642 0.310127 19.5259 0.458299 19.5259 0.630591C19.5259 0.802884 19.4642 0.951055 19.3408 1.07511C19.2242 1.19916 19.0769 1.26118 18.8986 1.26118ZM17.8908 9.8C17.7263 9.8 17.5755 9.77933 17.4384 9.73798V8.90064C17.5892 8.96955 17.7297 9.00401 17.86 9.00401C18.0725 9.00401 18.2268 8.93509 18.3227 8.79726C18.4187 8.66632 18.4667 8.4699 18.4667 8.20802V2.33629H19.3305V8.20802C19.3305 8.73868 19.2037 9.13495 18.95 9.39684C18.6964 9.66562 18.3433 9.8 17.8908 9.8Z" fill="black"/>
                                <path d="M21.1983 1.26118C21.0269 1.26118 20.8795 1.19916 20.7561 1.07511C20.6327 0.951055 20.571 0.802884 20.571 0.630591C20.571 0.458299 20.6327 0.310127 20.7561 0.186076C20.8795 0.0620253 21.0269 0 21.1983 0C21.3697 0 21.5171 0.0620253 21.6405 0.186076C21.7639 0.310127 21.8256 0.458299 21.8256 0.630591C21.8256 0.802884 21.7639 0.951055 21.6405 1.07511C21.5239 1.19916 21.3766 1.26118 21.1983 1.26118ZM20.7664 2.33629H21.6302V7.46372H20.7664V2.33629Z" fill="black"/>
                                <path d="M22.9838 2.33629H23.8168V3.10127H23.8579C24.0019 2.83938 24.2281 2.61885 24.5366 2.43966C24.8451 2.26048 25.1742 2.17089 25.5238 2.17089C26.1477 2.17089 26.6207 2.35352 26.9429 2.71878C27.272 3.08404 27.4365 3.58369 27.4365 4.21772V7.46372H26.5727V4.35211C26.5727 3.42862 26.1443 2.96688 25.2873 2.96688C25.0131 2.96688 24.7663 3.04613 24.5469 3.20464C24.3275 3.36315 24.1561 3.5699 24.0327 3.8249C23.9162 4.07989 23.8579 4.34867 23.8579 4.63123V7.46372H22.9838V2.33629Z" fill="black"/>
                                <path d="M33.6025 7.62912C33.0746 7.62912 32.605 7.50851 32.1936 7.2673C31.7823 7.0192 31.4635 6.67806 31.2373 6.24388C31.011 5.80281 30.8979 5.29628 30.8979 4.72426V0.0620258H31.772V4.76561C31.772 5.36519 31.9297 5.8545 32.2451 6.23355C32.5604 6.6057 33.0129 6.79177 33.6025 6.79177C34.192 6.79177 34.6445 6.6057 34.9599 6.23355C35.2821 5.8545 35.4432 5.36519 35.4432 4.76561V0.0620258H36.3173V4.72426C36.3173 5.29628 36.2076 5.80281 35.9882 6.24388C35.7757 6.68495 35.4637 7.02609 35.0524 7.2673C34.6411 7.50851 34.1578 7.62912 33.6025 7.62912Z" fill="black"/>
                                <path d="M37.6055 2.33629H38.4385V3.10127H38.4796C38.6236 2.83938 38.8498 2.61885 39.1583 2.43966C39.4668 2.26048 39.7959 2.17089 40.1455 2.17089C40.7694 2.17089 41.2424 2.35352 41.5646 2.71878C41.8937 3.08404 42.0582 3.58369 42.0582 4.21772V7.46372H41.1944V4.35211C41.1944 3.42862 40.7659 2.96688 39.909 2.96688C39.6348 2.96688 39.388 3.04613 39.1686 3.20464C38.9492 3.36315 38.7778 3.5699 38.6544 3.8249C38.5379 4.07989 38.4796 4.34867 38.4796 4.63123V7.46372H37.6055V2.33629Z" fill="black"/>
                                <path d="M43.8137 1.26118C43.6423 1.26118 43.4949 1.19916 43.3715 1.07511C43.2481 0.951055 43.1864 0.802884 43.1864 0.630591C43.1864 0.458299 43.2481 0.310127 43.3715 0.186076C43.4949 0.0620253 43.6423 0 43.8137 0C43.9851 0 44.1325 0.0620253 44.2559 0.186076C44.3793 0.310127 44.441 0.458299 44.441 0.630591C44.441 0.802884 44.3793 0.951055 44.2559 1.07511C44.1393 1.19916 43.9919 1.26118 43.8137 1.26118ZM43.3818 2.33629H44.2456V7.46372H43.3818V2.33629Z" fill="black"/>
                                <path d="M45.0233 2.33629H45.9694L47.5325 6.42996H47.5531L49.1367 2.33629H50.0622L47.9747 7.46372H47.0903L45.0233 2.33629Z" fill="black"/>
                                <path d="M50.8247 7.52574C50.6396 7.52574 50.4819 7.46372 50.3517 7.33967C50.2283 7.20872 50.1666 7.05021 50.1666 6.86414C50.1666 6.68495 50.2283 6.53334 50.3517 6.40929C50.4819 6.27834 50.6396 6.21287 50.8247 6.21287C51.0029 6.21287 51.1538 6.27834 51.2772 6.40929C51.4074 6.53334 51.4725 6.68495 51.4725 6.86414C51.4725 7.05021 51.4074 7.20872 51.2772 7.33967C51.1538 7.46372 51.0029 7.52574 50.8247 7.52574Z" fill="black"/>
                            </svg>
                        <svg className="GDSC-Blog" width="216" height="41" viewBox="0 0 216 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.724 31.672C13.84 31.672 11.18 31 8.744 29.656C6.336 28.284 4.418 26.408 2.99 24.028C1.562 21.62 0.848 18.932 0.848 15.964C0.848 12.996 1.562 10.322 2.99 7.942C4.418 5.534 6.336 3.658 8.744 2.314C11.18 0.941998 13.84 0.255998 16.724 0.255998C19.076 0.255998 21.218 0.675998 23.15 1.516C25.11 2.328 26.776 3.49 28.148 5.002L24.242 8.824C23.234 7.76 22.114 6.962 20.882 6.43C19.678 5.898 18.264 5.632 16.64 5.632C14.82 5.632 13.126 6.066 11.558 6.934C10.018 7.802 8.786 9.02 7.862 10.588C6.966 12.156 6.518 13.948 6.518 15.964C6.518 17.98 6.98 19.772 7.904 21.34C8.828 22.908 10.06 24.126 11.6 24.994C13.168 25.862 14.876 26.296 16.724 26.296C19.496 26.296 21.806 25.47 23.654 23.818C24.214 23.286 24.69 22.642 25.082 21.886C25.502 21.102 25.81 20.248 26.006 19.324H16.598V14.494H31.34C31.536 15.278 31.634 16.16 31.634 17.14C31.634 19.128 31.326 20.976 30.71 22.684C30.122 24.392 29.212 25.89 27.98 27.178C26.608 28.634 24.97 29.754 23.066 30.538C21.19 31.294 19.076 31.672 16.724 31.672ZM36.8532 0.927999H47.0172C50.1532 0.927999 52.8832 1.558 55.2072 2.818C57.5312 4.078 59.3232 5.842 60.5832 8.11C61.8432 10.378 62.4732 12.996 62.4732 15.964C62.4732 18.932 61.8432 21.55 60.5832 23.818C59.3232 26.086 57.5312 27.85 55.2072 29.11C52.8832 30.37 50.1532 31 47.0172 31H36.8532V0.927999ZM46.7652 25.624C50.0132 25.624 52.4912 24.77 54.1992 23.062C55.9352 21.326 56.8032 18.96 56.8032 15.964C56.8032 12.968 55.9352 10.616 54.1992 8.908C52.4912 7.172 50.0132 6.304 46.7652 6.304H42.5232V25.624H46.7652ZM76.7699 31.672C74.1379 31.672 71.8139 30.93 69.7979 29.446C67.7819 27.962 66.3679 25.862 65.5559 23.146L70.8899 21.046C71.3099 22.642 72.0239 23.916 73.0319 24.868C74.0399 25.82 75.2999 26.296 76.8119 26.296C78.0719 26.296 79.1499 25.988 80.0459 25.372C80.9419 24.728 81.3899 23.846 81.3899 22.726C81.3899 21.606 80.9559 20.696 80.0879 19.996C79.2479 19.268 77.7359 18.498 75.5519 17.686L73.7039 17.014C71.7719 16.342 70.1199 15.32 68.7479 13.948C67.3759 12.548 66.6899 10.798 66.6899 8.698C66.6899 7.13 67.0959 5.702 67.9079 4.414C68.7199 3.126 69.8679 2.118 71.3519 1.39C72.8359 0.633998 74.5159 0.255998 76.3919 0.255998C79.1079 0.255998 81.2499 0.899998 82.8179 2.188C84.3859 3.448 85.4639 4.932 86.0519 6.64L81.0539 8.74C80.7459 7.816 80.1999 7.046 79.4159 6.43C78.6599 5.786 77.6799 5.464 76.4759 5.464C75.2439 5.464 74.2219 5.758 73.4099 6.346C72.6259 6.906 72.2339 7.648 72.2339 8.572C72.2339 9.468 72.6119 10.238 73.3679 10.882C74.1239 11.498 75.3699 12.1 77.1059 12.688L78.9959 13.318C81.5999 14.214 83.5879 15.404 84.9599 16.888C86.3599 18.344 87.0599 20.262 87.0599 22.642C87.0599 24.602 86.5559 26.268 85.5479 27.64C84.5399 28.984 83.2379 29.992 81.6419 30.664C80.0739 31.336 78.4499 31.672 76.7699 31.672ZM106.504 31.672C103.592 31.672 100.932 30.986 98.5243 29.614C96.1163 28.214 94.2123 26.324 92.8123 23.944C91.4403 21.536 90.7543 18.876 90.7543 15.964C90.7543 13.052 91.4403 10.406 92.8123 8.026C94.2123 5.618 96.1163 3.728 98.5243 2.356C100.932 0.955998 103.592 0.255998 106.504 0.255998C111.04 0.255998 114.792 1.894 117.76 5.17L113.77 9.034C111.782 6.766 109.374 5.632 106.546 5.632C104.67 5.632 102.962 6.066 101.422 6.934C99.8823 7.774 98.6643 8.978 97.7683 10.546C96.8723 12.114 96.4243 13.92 96.4243 15.964C96.4243 18.008 96.8723 19.814 97.7683 21.382C98.6643 22.95 99.8823 24.168 101.422 25.036C102.962 25.876 104.67 26.296 106.546 26.296C109.682 26.296 112.314 24.98 114.442 22.348L118.516 26.17C117.004 27.962 115.24 29.334 113.224 30.286C111.208 31.21 108.968 31.672 106.504 31.672ZM133.24 0.927999H145C146.68 0.927999 148.22 1.278 149.62 1.978C151.048 2.678 152.168 3.63 152.98 4.834C153.792 6.038 154.198 7.354 154.198 8.782C154.198 10.294 153.82 11.61 153.064 12.73C152.336 13.822 151.37 14.662 150.166 15.25V15.586C151.734 16.146 152.98 17.042 153.904 18.274C154.828 19.478 155.29 20.934 155.29 22.642C155.29 24.294 154.842 25.764 153.946 27.052C153.078 28.312 151.888 29.292 150.376 29.992C148.892 30.664 147.24 31 145.42 31H133.24V0.927999ZM144.58 13.192C145.84 13.192 146.834 12.856 147.562 12.184C148.29 11.484 148.654 10.616 148.654 9.58C148.654 8.572 148.29 7.732 147.562 7.06C146.862 6.36 145.924 6.01 144.748 6.01H138.91V13.192H144.58ZM145.21 25.834C146.582 25.834 147.646 25.484 148.402 24.784C149.186 24.056 149.578 23.118 149.578 21.97C149.578 20.822 149.186 19.884 148.402 19.156C147.618 18.428 146.498 18.064 145.042 18.064H138.91V25.834H145.21ZM159.473 0.927999H164.975V31H159.473V0.927999ZM179.885 31.672C177.757 31.672 175.853 31.196 174.173 30.244C172.493 29.292 171.177 27.976 170.225 26.296C169.273 24.588 168.797 22.684 168.797 20.584C168.797 18.456 169.273 16.552 170.225 14.872C171.177 13.192 172.493 11.876 174.173 10.924C175.853 9.972 177.757 9.496 179.885 9.496C181.985 9.496 183.875 9.972 185.555 10.924C187.235 11.876 188.551 13.206 189.503 14.914C190.455 16.594 190.931 18.484 190.931 20.584C190.931 22.684 190.455 24.588 189.503 26.296C188.551 27.976 187.235 29.292 185.555 30.244C183.875 31.196 181.985 31.672 179.885 31.672ZM179.885 26.59C180.865 26.59 181.775 26.352 182.615 25.876C183.483 25.372 184.169 24.672 184.673 23.776C185.177 22.852 185.429 21.788 185.429 20.584C185.429 19.38 185.177 18.33 184.673 17.434C184.169 16.51 183.483 15.81 182.615 15.334C181.775 14.83 180.865 14.578 179.885 14.578C178.877 14.578 177.939 14.83 177.071 15.334C176.231 15.81 175.559 16.51 175.055 17.434C174.551 18.33 174.299 19.38 174.299 20.584C174.299 21.788 174.551 22.852 175.055 23.776C175.559 24.672 176.231 25.372 177.071 25.876C177.939 26.352 178.877 26.59 179.885 26.59ZM204.57 40.744C202.75 40.744 201.126 40.436 199.698 39.82C198.27 39.232 197.108 38.462 196.212 37.51C195.316 36.586 194.686 35.592 194.322 34.528L199.572 32.428C199.964 33.492 200.608 34.332 201.504 34.948C202.4 35.564 203.422 35.872 204.57 35.872C206.278 35.872 207.636 35.326 208.644 34.234C209.68 33.142 210.198 31.644 210.198 29.74V28.228H209.862C209.19 29.152 208.322 29.88 207.258 30.412C206.194 30.916 204.962 31.168 203.562 31.168C201.882 31.168 200.286 30.72 198.774 29.824C197.29 28.9 196.086 27.626 195.162 26.002C194.238 24.35 193.776 22.46 193.776 20.332C193.776 18.204 194.238 16.314 195.162 14.662C196.086 13.01 197.29 11.736 198.774 10.84C200.286 9.944 201.882 9.496 203.562 9.496C204.962 9.496 206.194 9.748 207.258 10.252C208.35 10.756 209.218 11.47 209.862 12.394H210.198V10.168H215.448V29.53C215.448 31.798 214.986 33.772 214.062 35.452C213.166 37.16 211.892 38.462 210.24 39.358C208.616 40.282 206.726 40.744 204.57 40.744ZM204.738 26.17C205.69 26.17 206.572 25.946 207.384 25.498C208.224 25.022 208.896 24.35 209.4 23.482C209.932 22.586 210.198 21.536 210.198 20.332C210.198 19.1 209.946 18.05 209.442 17.182C208.938 16.286 208.266 15.614 207.426 15.166C206.586 14.718 205.69 14.494 204.738 14.494C203.786 14.494 202.89 14.732 202.05 15.208C201.238 15.656 200.566 16.328 200.034 17.224C199.53 18.092 199.278 19.128 199.278 20.332C199.278 21.536 199.53 22.586 200.034 23.482C200.566 24.35 201.238 25.022 202.05 25.498C202.89 25.946 203.786 26.17 204.738 26.17Z" fill="black"/>
                        </svg>
                        </div>
                        </div>
                    </Link>
                    <input type="text" className="search"/>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                        </li>
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
