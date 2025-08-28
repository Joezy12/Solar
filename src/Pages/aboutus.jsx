import "../styles/aboutus.css"
import Navbar from "../general/navbar";


function Aboutus(prop) {
    return (
        <>
            <section className="about-us">
                <div className="about-banner">
                    <Navbar openNav={prop.openNav} />
                    <div className="about-banner-write">
                        <h1>ABOUT US</h1>
                        <p>Read about our orginazation and what we offer to keep your electricity runnig, <br /> we are here to serve your our premiumn feautures</p>
                        <h4>Home / About Us</h4>
                    </div>
                </div>


                <div className="about-main">
                    <div className="about-m-left">
                        <div className="a-b-dot"><div className="a-b-dot2"></div></div>
                        <div className="a-b-line"></div>
                        <div className="a-b-pic"></div>
                    </div>
                    <div className="about-m-right">
                        <h1>ABOUT US</h1>
                        <h2>SOLAR ENERGY <br /> AND POWER LTD</h2>
                        <p>The best energy solution depends on several factors, including your specific needs, location, budget, and environmental considerations. Purchasing your own solar panel array and having a grid-tiered solar power system installed is an extremely cost effective and responsible energy consumption choice</p>

                        <div className="done-container">
                            <div className="done-box">
                                <div><i className="bi-check"></i></div>
                                <p>Ground Mounting System</p>
                            </div>
                            <div className="done-box">
                                <div><i className="bi-check"></i></div>
                                <p>Solar Carport</p>
                            </div>
                            <div className="done-box">
                                <div><i className="bi-check"></i></div>
                                <p>Flat Roof Mounting System</p>
                            </div>
                            <div className="done-box">
                                <div><i className="bi-check"></i></div>
                                <p>Components</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="choose-us">
                    <div className="choose-head">
                        <p>Solar energy and power ltd</p>
                        <h1>Why You Should Choose Us</h1>
                    </div>
                    <div className="choose-main">
                        <div className="choose-box">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 3V3.41667M3.41667 8H3M4.66667 4.66667L4.25 4.25M11.3333 4.66667L11.75 4.25M4.66667 11.3333L4.25 11.75M9.73244 7C9.38663 6.4022 8.74028 6 8 6C6.89543 6 6 6.89543 6 8C6 8.74028 6.4022 9.38663 7 9.73244M6 15L12.4083 9.01893C12.7929 8.65995 12.9852 8.48046 13.2041 8.41266C13.3969 8.35296 13.6031 8.35296 13.7959 8.41266C14.0148 8.48046 14.2071 8.65995 14.5917 9.01893L21 15M8 13.1333V19.4C8 19.9601 8 20.2401 8.10899 20.454C8.20487 20.6422 8.35785 20.7951 8.54601 20.891C8.75992 21 9.03995 21 9.6 21H17.4C17.9601 21 18.2401 21 18.454 20.891C18.6422 20.7951 18.7951 20.6422 18.891 20.454C19 20.2401 19 19.9601 19 19.4V13.1333" stroke="#89ea5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h1>Efficiency & Power</h1>
                            <p>Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.</p>
                        </div>
                        <div className="choose-box">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z" stroke="#89ea5f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.25 18.47L19.6 18.86C19.23 18.95 18.94 19.23 18.86 19.6L18.51 21.07C18.32 21.87 17.3 22.11 16.77 21.48L12 16L7.22996 21.49C6.69996 22.12 5.67996 21.88 5.48996 21.08L5.13996 19.61C5.04996 19.24 4.75996 18.95 4.39996 18.87L2.74996 18.48C1.98996 18.3 1.71996 17.35 2.26996 16.8L6.16996 12.9C7.24996 14.5 8.95996 15.63 10.95 15.92C11.29 15.98 11.64 16.01 12 16.01C12.36 16.01 12.71 15.98 13.05 15.92C15.04 15.63 16.75 14.5 17.83 12.9L21.73 16.8C22.28 17.34 22.01 18.29 21.25 18.47Z" stroke="#89ea5f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.58 5.98L13.17 7.15999C13.25 7.31999 13.46 7.48 13.65 7.51L14.72 7.68999C15.4 7.79999 15.56 8.3 15.07 8.79L14.24 9.61998C14.1 9.75998 14.02 10.03 14.07 10.23L14.31 11.26C14.5 12.07 14.07 12.39 13.35 11.96L12.35 11.37C12.17 11.26 11.87 11.26 11.69 11.37L10.69 11.96C9.96997 12.38 9.53997 12.07 9.72997 11.26L9.96997 10.23C10.01 10.04 9.93997 9.75998 9.79997 9.61998L8.96997 8.79C8.47997 8.3 8.63997 7.80999 9.31997 7.68999L10.39 7.51C10.57 7.48 10.78 7.31999 10.86 7.15999L11.45 5.98C11.74 5.34 12.26 5.34 12.58 5.98Z" stroke="#89ea5f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h1>Trust & Warranty</h1>
                            <p>Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.</p>
                        </div>
                        <div className="choose-box">
                            <svg fill="#89ea5f" viewBox="0 0 24 24" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2C9.54,2,7.17,2.9,5.33,4.55c-0.41,0.37-0.45,1-0.08,1.41c0.37,0.41,1,0.45,1.41,0.08C8.13,4.72,10.03,4,12,4 c4.41,0,8,3.59,8,8s-3.59,8-8,8c-1.97,0-3.87-0.72-5.33-2.04c-0.41-0.37-1.04-0.33-1.41,0.08c-0.37,0.41-0.33,1.04,0.08,1.41 C7.17,21.1,9.54,22,12,22c5.51,0,10-4.49,10-10C22,6.49,17.51,2,12,2z"></path><path d="M3,17h3c0.55,0,1-0.45,1-1h0.76l1.79,0.89C9.69,16.96,9.84,17,10,17h6c0.5,0,0.92-0.37,0.99-0.86l-0.08-7 c0.04-0.29-0.04-0.58-0.23-0.8C16.49,8.13,16.21,8,15.92,8H13V6c0-0.55-0.45-1-1-1h-1c-0.27,0-0.52,0.11-0.71,0.29L7.59,8H7 c0-0.55-0.45-1-1-1H3C2.45,7,2,7.45,2,8v8C2,16.55,2.45,17,3,17z M8,10c0.27,0,0.52-0.11,0.71-0.29L11,7.41V9c0,0.55,0.45,1,1,1 h3.13v5h-4.9l-1.79-0.89C8.31,14.04,8.16,14,8,14H7v-4H8z M4,9h1v5v1H4V9z"></path></g></svg>
                            <h1>High Quality Work</h1>
                            <p>Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.</p>
                        </div>
                        <div className="choose-box">
                            <svg fill="#89ea5f" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.162 39.162" xml:space="preserve" stroke="#89ea5f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M39.162,22.015V25c0,1.787-1.452,3.24-3.239,3.24h-2.866c-0.731,0-1.328-0.595-1.328-1.328v-6.81 c0-0.679,0.515-1.233,1.17-1.312c-1.455-6.01-6.865-10.494-13.317-10.494S7.719,12.781,6.264,18.791 c0.656,0.079,1.17,0.632,1.17,1.312v6.81c0,0.733-0.596,1.328-1.328,1.328H3.239C1.452,28.24,0,26.787,0,25v-2.985 c0-1.786,1.452-3.239,3.239-3.239h0.296c1.508-7.481,8.128-13.133,16.047-13.133s14.539,5.652,16.047,13.133h0.297 C37.71,18.774,39.162,20.228,39.162,22.015z M23.586,28.318c-0.457,0.719-1.381,1.217-2.457,1.217c-1.527,0-2.766-0.99-2.766-2.211 c0-1.223,1.238-2.213,2.766-2.213c1.076,0,2,0.498,2.457,1.217h6.654c0.54-1.332,0.844-2.787,0.844-4.312 c0-6.354-5.15-11.504-11.504-11.504c-6.354,0-11.505,5.151-11.505,11.504c0,6.354,5.151,11.504,11.505,11.504 c4.023,0,7.561-2.068,9.617-5.197h-5.611V28.318z"></path> </g> </g></svg>
                            <h1>24 * 7 Support</h1>
                            <p>Ut ut eros risus. In luctus fringilla augue, eget ultricies purus. Sed mauris a nisl.</p>
                        </div>
                    </div>
                </div>


                <div className="green-container">
                    <div className="green-box">
                        <div className="green-pic">
                            <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" ><g id="SVGRepo_bgCarrier" stroke-width="0" stroke="#ffffff"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style></style></defs><path class="cls-1" d="M14.87,5.28a2.87,2.87,0,1,1-.84-2A2.89,2.89,0,0,1,14.87,5.28Z"></path><line class="cls-1" x1="12" y1="2.41" x2="12" y2="0.5"></line><line className="cls-1" x1="12" y1="10.07" x2="12" y2="8.15"></line><line className="cls-1" x1="9.13" y1="5.28" x2="7.22" y2="5.28"></line><line className="cls-1" x1="16.78" y1="5.28" x2="14.87" y2="5.28"></line><line className="cls-1" x1="9.97" y1="3.25" x2="8.61" y2="1.9"></line><line className="cls-1" x1="15.39" y1="8.67" x2="14.03" y2="7.31"></line><line className="cls-1" x1="9.97" y1="7.31" x2="8.61" y2="8.67"></line><line className="cls-1" x1="15.39" y1="1.9" x2="14.03" y2="3.25"></line><polygon className="cls-1" points="21.57 22.5 2.44 22.5 6.26 11.98 17.74 11.98 21.57 22.5"></polygon><polyline className="cls-1" points="5.22 14.85 9.56 14.85 14.44 14.85 18.78 14.85"></polyline><polyline className="cls-1" points="3.82 18.67 8.87 18.67 15.13 18.67 20.18 18.67"></polyline><line className="cls-1" x1="10.09" y1="11.98" x2="8.17" y2="22.5"></line><line className="cls-1" x1="13.91" y1="11.98" x2="15.83" y2="22.5"></line></g></svg>
                        </div>
                        <div>
                            <h1>1,000+</h1>
                            <p>Project Done</p>
                        </div>
                    </div>
                    <div className="green-box">
                        <div className="green-pic">
                            <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 393.829 393.828" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M352.313,254.742c-21.186,1.307-49.051,22.474-75.928,34.648c-32.938,14.896-84.219,2.906-84.224,2.906 c7.91-3.693,40.054-11.351,46.526-14.21c34.411-15.126,31.501-46.688,15.112-46.423c-21.658,0.363-34.365,5.678-77.564,11.568 c-32.746,4.455-71.477,2.826-90.053,9.918c-26.224,10.016-68.465,77.41-68.465,77.41l65.3,63.268c0,0,40.426-39.799,60.094-39.799 c44.827,0,46.646-0.618,88.268-2.864c17.689-0.948,21.385-1.673,31.516-5.104c53.949-18.224,111.879-66.802,112.943-72.647 C378.305,259.879,363.508,254.046,352.313,254.742z"></path> <path d="M223.432,209.779c57.838,0,104.896-47.047,104.896-104.889C328.329,47.049,281.27,0,223.432,0 c-57.837,0-104.899,47.049-104.899,104.89C118.533,162.732,165.594,209.779,223.432,209.779z M151.877,150.256 c7.749-3.821,5.387-11.653,2.761-18.157c-2.767-6.853-4.864-16.185,0.162-22.619c4.144-5.337,12.192-7.636,17.88-10.855 c6.863-3.87,12.783-9.524,15.173-17.195c2.191-7.012-1.205-13.39-7.272-16.933c-5.29-3.076-11.765-2.693-17.654-2.881 c-5.178-0.147-11.068-0.589-13.579-4.624c15.74-24.268,43.067-40.341,74.083-40.341c15.76,0,30.575,4.156,43.403,11.417 c-0.662,4.97-2.508,9.5-6.631,12.929c-4.172,3.432-9.877,4.81-14.896,6.503c-4.771,1.583-9.555,3.499-13.143,7.175 c-4.213,4.316-5.013,10.322-5.113,16.081c-0.064,3.595-0.042,8.718,3.146,11.141c2.404,1.818,5.565,0.545,7.85-0.81 c7.143-4.236,12.311-11.346,19.955-14.83c2.307-1.038,4.721-0.986,6.305,1.169c4.652,6.284,2.234,14.25-1.895,20.017 c-2.561,3.552-5.902,6.566-9.047,9.586c-2.381,2.298-3.975,3.72-7.08,4.817c-5.701,2.022-4.75,10.821-2.047,14.813 c2.311,3.393,5.293,6.205,7.572,9.684c1.68,2.583,3.516,5.103,5.727,7.252c3.889,3.778,9.062,4.625,14.271,4.903 c8.51,0.457,17.877,2.398,26.174-0.201c2.674-0.834,4.848-3.073,6.85-4.917c1.02-0.929,1.928-1.614,2.781-2 c-9.115,28.93-32.773,51.458-62.356,59.019c-4.479-3.95-10.36-6.748-15.14-10.1c-1.764-1.229-6.061-3.821-6.272-6.311 c-0.353-4.294,5.778-3.319,8.385-3.079c3.349,0.307,6.69,0.909,10.062,0.612c3.781-0.331,7.16-2.801,9.881-5.283 c5.355-4.888,7.119-12.788,4.398-19.461c-2.516-6.159-8.383-9.128-13.896-12.169c-2.5-1.378-4.522-2.417-6.597-4.478 c-2.524-2.503-6.367-3.308-9.826-3.104c-5.934,0.335-10.225,4.129-16.231,1.161c-4.178-2.046-7.121-4.999-11.925-5.604 c-8.28-1.056-16.354,2.01-21.264,8.921c-8.335,11.752-4.727,26.391,0.116,38.861c1.601,4.112,3.713,8.802,6.42,13.138 c-14.363-7.352-26.456-18.528-34.934-32.171C149.643,151.129,150.817,150.782,151.877,150.256z"></path> </g> </g> </g></svg>
                        </div>
                        <div>
                            <h1>1,200+</h1>
                            <p>Happy Client</p>
                        </div>
                    </div>
                    <div className="green-box">
                        <div className="green-pic">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16ZM12 6C11.7159 6 11.5259 6.34084 11.1459 7.02251L11.0476 7.19887C10.9397 7.39258 10.8857 7.48944 10.8015 7.55334C10.7173 7.61725 10.6125 7.64097 10.4028 7.68841L10.2119 7.73161C9.47396 7.89857 9.10501 7.98205 9.01723 8.26432C8.92945 8.54659 9.18097 8.84072 9.68403 9.42898L9.81418 9.58117C9.95713 9.74833 10.0286 9.83191 10.0608 9.93531C10.0929 10.0387 10.0821 10.1502 10.0605 10.3733L10.0408 10.5763C9.96476 11.3612 9.92674 11.7536 10.1565 11.9281C10.3864 12.1025 10.7318 11.9435 11.4227 11.6254L11.6014 11.5431C11.7978 11.4527 11.8959 11.4075 12 11.4075C12.1041 11.4075 12.2022 11.4527 12.3986 11.5431L12.5773 11.6254C13.2682 11.9435 13.6136 12.1025 13.8435 11.9281C14.0733 11.7536 14.0352 11.3612 13.9592 10.5763L13.9395 10.3733C13.9179 10.1502 13.9071 10.0387 13.9392 9.93531C13.9714 9.83191 14.0429 9.74833 14.1858 9.58118L14.316 9.42898C14.819 8.84072 15.0706 8.54659 14.9828 8.26432C14.895 7.98205 14.526 7.89857 13.7881 7.73161L13.5972 7.68841C13.3875 7.64097 13.2827 7.61725 13.1985 7.55334C13.1143 7.48944 13.0603 7.39258 12.9524 7.19887L12.8541 7.02251C12.4741 6.34084 12.2841 6 12 6Z" fill="#ffffff"></path> <path d="M4.49517 12.9946L2.99206 14.551C2.45194 15.1102 2.18188 15.3898 2.08843 15.6266C1.87548 16.1662 2.05772 16.7648 2.52138 17.0486C2.72486 17.1732 3.09187 17.212 3.82589 17.2897C4.2403 17.3335 4.44755 17.3554 4.6211 17.4219C5.00966 17.5709 5.31191 17.8838 5.45575 18.2861C5.52 18.4658 5.54117 18.6804 5.5835 19.1095C5.65848 19.8695 5.69597 20.2495 5.81628 20.4602C6.09042 20.9403 6.66852 21.129 7.18967 20.9085C7.41837 20.8117 7.68843 20.5321 8.22855 19.9729L10.7106 17.4029C8.01306 16.9924 5.73225 15.314 4.49517 12.9946Z" fill="#ffffff"></path> <path d="M13.2894 17.4029L15.7715 19.9729C16.3116 20.5321 16.5816 20.8117 16.8103 20.9085C17.3315 21.129 17.9096 20.9403 18.1837 20.4602C18.304 20.2495 18.3415 19.8695 18.4165 19.1095C18.4588 18.6804 18.48 18.4658 18.5442 18.2861C18.6881 17.8838 18.9903 17.5709 19.3789 17.4219C19.5525 17.3554 19.7597 17.3335 20.1741 17.2897C20.9081 17.212 21.2751 17.1732 21.4786 17.0486C21.9423 16.7648 22.1245 16.1662 21.9116 15.6266C21.8181 15.3898 21.5481 15.1102 21.0079 14.551L19.5048 12.9946C18.2677 15.314 15.9869 16.9924 13.2894 17.4029Z" fill="#ffffff"></path> </g></svg>
                        </div>
                        <div>
                            <h1>850+</h1>
                            <p>Award Winning</p>
                        </div>
                    </div>
                    <div className="green-box">
                        <div className="green-pic">
                            <svg viewBox="0 0 24 24" id="meteor-icon-kit__solid-thumbs-up" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C3.44772 9 3 9.44771 3 10C3 10.5523 3.44772 11 4 11C4.55228 11 5 10.5523 5 10C5 9.44771 4.55228 9 4 9ZM8 7H8.2457C8.69218 7 9.08457 6.70402 9.20722 6.27472L10.3783 2.17584C10.7463 0.887932 11.9235 0 13.2629 0H15.0228C16.6797 0 18.0228 1.34315 18.0228 3C18.0228 3.27875 17.984 3.55614 17.9074 3.82416L17 7H21C22.6569 7 24 8.34315 24 10V15C24 19.4183 20.4183 23 16 23H8C8 23.5523 7.55228 24 7 24H1C0.447715 24 0 23.5523 0 23V7C0 6.44772 0.447715 6 1 6H7C7.55228 6 8 6.44772 8 7ZM8 9V21H16C19.3137 21 22 18.3137 22 15V10C22 9.44771 21.5523 9 21 9H14.3485L15.9843 3.27472C16.0099 3.18538 16.0228 3.09292 16.0228 3C16.0228 2.44772 15.5751 2 15.0228 2H13.2629C12.8164 2 12.424 2.29598 12.3014 2.72528L11.1303 6.82416C10.7623 8.11207 9.58514 9 8.2457 9H8Z" fill="#ffffff"></path></g></svg>
                        </div>
                        <div>
                            <h1>1,100+</h1>
                            <p>Rating Customer</p>
                        </div>
                    </div>
                </div>

                <marquee><h1 className="marq">HEAL THE WORLD WITH OUR NON-POLLUTANT POWER SUPPLY / EFFICIENCY AND POWER / 24 * 7 POWER SUPPLY</h1></marquee>


                <div className="about-review">
                    <div className="about-r-head">
                        <p>Testimonials</p>
                        <h1>Words From Our Customers</h1>
                    </div>
                    <div className="a-b-r-container">
                        <div className="a-b-r-box">
                            <div>
                                <div className="a-b-r-pic"></div>
                                <h1>Victor Jonathan</h1>
                                <p>(Customer)</p>
                                <div className="a-b-r-stars">
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                </div>
                                <p>
                                    Solar energy and power has been the best thing that has ever happened to me cause since I started using their product, I have never had any issues with electricity
                                </p>
                            </div>
                        </div>


                         <div className="a-b-r-box">
                            <div>
                                <div className="a-b-r-pic ar2"></div>
                                <h1>Oghechi Benard</h1>
                                <p>(Customer)</p>
                                <div className="a-b-r-stars">
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                </div>
                                <p>
                                    Solar energy and power has been the best thing that has ever happened to me cause since I started using their product, I have never had any issues with electricity
                                </p>
                            </div>
                        </div>

                         <div className="a-b-r-box">
                            <div>
                                <div className="a-b-r-pic ar3"></div>
                                <h1>Ahmed Waisiu</h1>
                                <p>(Customer)</p>
                                <div className="a-b-r-stars">
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                </div>
                                <p>
                                    Solar energy and power has been the best thing that has ever happened to me cause since I started using their product, I have never had any issues with electricity
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutus;