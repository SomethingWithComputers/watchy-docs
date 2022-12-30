(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(h,i(i({ref:t},b),{},{components:a})):r.a.createElement(h,i({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},157:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/watchy_kit_instructions-eeaf3e36c9de35a55d9f7748910c2820.png"},158:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/watchy_buttons_map-71dac914a78e2fb2d6c23cb2dad06802.png"},159:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/watchy_screen_align-c60c0dc3fc382fe0af26921866ce2cad.png"},160:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/watchy_assembly_steps-efe4d4e39cc5d62cef3ad227f87a1807.png"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(102)),l={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/getting-started"},i={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Watchy Kit w/ Case Assembly",source:"@site/docs/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/sqfmi/watchy-docs/edit/main/docs/getting-started.md",version:"current",sidebar_label:"Getting Started",sidebar:"docs",next:{title:"Libraries Used",permalink:"/docs/libs"}},c=[{value:"Watchy Kit w/ Case Assembly",id:"watchy-kit-w-case-assembly",children:[]},{value:"Watchy Original Assembly",id:"watchy-original-assembly",children:[]},{value:"Arduino Setup",id:"arduino-setup",children:[{value:"Upload",id:"upload",children:[]},{value:"Wi-Fi Setup",id:"wi-fi-setup",children:[]}]},{value:"PlatformIO Setup",id:"platformio-setup",children:[{value:"Simple watchface example",id:"simple-watchface-example",children:[]}]}],b={toc:c};function s(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"watchy-kit-w-case-assembly"},"Watchy Kit w/ Case Assembly"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Watchy Kit with Case",src:a(157).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before You Begin")," make sure you review the instructions and inspect for any missing or damaged components."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Remove The Components Carefully")," as they are tightly packed for maximum protection. The display is made of glass and will crack if you bend it!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Test Your PCB")," to make sure the board is functional!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Do Not Apply The Included Tape!!")," Watchy can be assembled and secured with the included enclosure, without needing any tape. Only apply the tape if you intend to use Watchy without the enclosure, and have triple checked the screen is properly aligned."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Connect the screen to the FPC connector, the shiny gold pins on the ribbon cable should be facing up. The ribbon cable goes through the PCB slot like in the image above."),Object(o.b)("li",{parentName:"ol"},"Connect the battery"),Object(o.b)("li",{parentName:"ol"},"Connect the USB to start charging the battery"),Object(o.b)("li",{parentName:"ol"},"Press ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hardware#bill-of-materials"}),"SW1")," to bring up the ",Object(o.b)("strong",{parentName:"li"},"menu"),"/",Object(o.b)("strong",{parentName:"li"},"confirm")),Object(o.b)("li",{parentName:"ol"},"Press ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hardware#bill-of-materials"}),"SW3")," & ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hardware#bill-of-materials"}),"SW4")," to navigate ",Object(o.b)("strong",{parentName:"li"},"up"),"/",Object(o.b)("strong",{parentName:"li"},"down")),Object(o.b)("li",{parentName:"ol"},"Press ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/hardware#bill-of-materials"}),"SW2")," to ",Object(o.b)("strong",{parentName:"li"},"exit/cancel"))),Object(o.b)("p",null,Object(o.b)("img",{alt:"Watchy Buttons",src:a(158).default})),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Wait 1 minute to check and see if the clock is updating the time correctly")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tips")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Make sure the screen is perfectly aligned before taping it down!")," It should not extend above or below the strap holes on the PCB.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Watchy Screen Alignment",src:a(159).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Make sure the battery cable is tucked in")," Everything should fit snug and be aligned to the bottom case, before securing the top case."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Do NOT force the case to close. It could break the screen & buttons!")," The case should close easily with the top and bottom snaps latching."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Do NOT overtighten the screws in the aluminum case")," Overtightening will crack the screen! Make sure everything fits nicely and slowly adjust the screws to secure the case."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Still having trouble?")," Check out this step-by-step guide on assembling the case in our ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/faqs#the-case-doesnt-fitclose-how-do-i-assemble-it"}),"FAQ"))),Object(o.b)("p",null,"Assembly Video: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=ftLTrr_HTpI"}),"https://www.youtube.com/watch?v=ftLTrr_HTpI")),Object(o.b)("p",null,"Assembly Video (CNC Aluminum Case): ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=rbVr9eVb72M"}),"https://www.youtube.com/watch?v=rbVr9eVb72M")),Object(o.b)("h2",{id:"watchy-original-assembly"},"Watchy Original Assembly"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Watchy OG Assembly",src:a(160).default})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Apply tape to the ",Object(o.b)("strong",{parentName:"li"},"back")," of the E-Paper display and battery. The ",Object(o.b)("strong",{parentName:"li"},"front of the display is white")," and the ",Object(o.b)("strong",{parentName:"li"},"back of the display is metallic/silver")),Object(o.b)("li",{parentName:"ol"},"Pull lightly to unlock the FFC connector, insert the display cable through the strap hole. Make sure the cable is inserted all the way, then push the lock back in to secure the cable. "),Object(o.b)("li",{parentName:"ol"},"Fold back and align the display to the top of the PCB, peel off the tape and firmly secure the display"),Object(o.b)("li",{parentName:"ol"},"Insert the battery plug, ensure correct polarity (red is closer to the USB connector)"),Object(o.b)("li",{parentName:"ol"},"Peel off the tape and firmly secure the battery to the PCB"),Object(o.b)("li",{parentName:"ol"},"Insert the watch strap through the PCB strap holes, then tighten the strap from both ends"),Object(o.b)("li",{parentName:"ol"},"Wrap the strap around your arm and adjust for comfort")),Object(o.b)("p",null,"Assembly video: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=PCPxTS1aF3w"}),"https://www.youtube.com/watch?v=PCPxTS1aF3w")),Object(o.b)("h2",{id:"arduino-setup"},"Arduino Setup"),Object(o.b)("p",null,"Watchy comes pre-loaded with firmware that demonstrates all the basic features. You can also try different watch faces and examples in Arduino."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download and install the latest ",Object(o.b)("ins",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.arduino.cc/en/software"}),"Arduino IDE")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start Arduino and open the ",Object(o.b)("em",{parentName:"p"},"Preferences")," window.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Under ",Object(o.b)("em",{parentName:"p"},"Additional Board Manager URLs")," add:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open ",Object(o.b)("strong",{parentName:"p"},"Boards Manager")," under Tools > Board menu and install the latest version of ",Object(o.b)("em",{parentName:"p"},"esp32")," platform")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Under Sketch > Include Library > Manage Libraries, search for ",Object(o.b)("strong",{parentName:"p"},"Watchy")," and install the latest version")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure all the dependencies are updated to the latest version i.e. ",Object(o.b)("strong",{parentName:"p"},"GxEPD2")," , ",Object(o.b)("strong",{parentName:"p"},"WiFiManager"),", ",Object(o.b)("strong",{parentName:"p"},"rtc_pcf8563"),",",Object(o.b)("strong",{parentName:"p"},"etc.")))),Object(o.b)("h3",{id:"upload"},"Upload"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Plug in the USB on Watchy and select the serial port that shows up"),Object(o.b)("li",{parentName:"ol"},"If nothing shows up, or if you're having trouble uploading, make sure you have the ",Object(o.b)("ins",null,Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"}),"USB-Serial drivers"))," installed. Also make sure you're using a USB data cable, and not a charge-only cable. Try different USB ports as well."),Object(o.b)("li",{parentName:"ol"},"Select Tools > Board > ESP32 Arduino > ",Object(o.b)("strong",{parentName:"li"},"Watchy")),Object(o.b)("li",{parentName:"ol"},"Select Tools > Board Revision > ",Object(o.b)("strong",{parentName:"li"},"Watchy v2.0")),Object(o.b)("li",{parentName:"ol"},"Select Tools > Partition Scheme > ",Object(o.b)("strong",{parentName:"li"},"Huge App")),Object(o.b)("li",{parentName:"ol"},"Leave everything else as default"),Object(o.b)("li",{parentName:"ol"},"Choose an example and click upload"),Object(o.b)("li",{parentName:"ol"},"Try modifiying the examples or create your own app!")),Object(o.b)("h3",{id:"wi-fi-setup"},"Wi-Fi Setup"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click 'Setup Wifi' from the main menu on the watch"),Object(o.b)("li",{parentName:"ol"},"Connect to 'Watchy AP' Wi-Fi from another device such as a phone or computer / laptop"),Object(o.b)("li",{parentName:"ol"},"If you're on a computer, go to 192.168.4.1 in your browser. On a phone, the captive portal should automatically open when connecting to Wi-Fi"),Object(o.b)("li",{parentName:"ol"},"Click 'Configure WiFi'"),Object(o.b)("li",{parentName:"ol"},"Enter the SSID and password of your network you want to connect to. (Note: SSID can be prefilled by listed networks on the top of this screen)"),Object(o.b)("li",{parentName:"ol"},"Hit 'Save' button and wait for Watchy to connect"),Object(o.b)("li",{parentName:"ol"},"If the connection fails, Watchy will display 'Setup failed & timed out!'. Otherwise, it will display the local IP address and SSID of the connected network with confirmation")),Object(o.b)("h4",{id:"troubleshoot-wi-fi-setup"},"Troubleshoot Wi-Fi Setup:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click 'Info' from 192.168.4.1 page"),Object(o.b)("li",{parentName:"ol"},"Check your router settings to make sure the listed mac address is allowed"),Object(o.b)("li",{parentName:"ol"},"If the above doesn't fix it, then try clicking 'Erase Wifi Config' from the 'Info' page and wait for Watchy to restart itself. Once that happens, try the Wi-Fi setup again")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"platformio-setup"},"PlatformIO Setup"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://platformio.org/"}),"PlatformIO")," is a compatible alternative to arduino. It's more oriented for the command line user, but it is also more flexible and predictable in build configurations and dependency management (like libraries)."),Object(o.b)("p",null,'It has two parts: a "core" that has the command line tools that build and upload/flash, and an "ide" which is a bunch of plugins and extensions for editors you can ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://platformio.org/install/integration"}),"find here"),"."),Object(o.b)("p",null,"Use whichever extensions you wish but this documentation is related to the core, so:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.platformio.org/en/latest//core/installation.html"}),"Install with instructions here"),".")),Object(o.b)("h3",{id:"simple-watchface-example"},"Simple watchface example"),Object(o.b)("p",null,"This example is to create a new watch face project, it starts by copying one of the examples to the ",Object(o.b)("inlineCode",{parentName:"p"},"src/")," folder where you can make your own. However, it will not make it easy to edit the watchy library, or its ",Object(o.b)("inlineCode",{parentName:"p"},"config.h")," file, which many want to, for that see the section below."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new folder and setup the PlatformIO project layout")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir my_new_watchy_face_project\ncd my_new_watchy_face_project\npio project init --board esp32dev\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add the following to the ",Object(o.b)("inlineCode",{parentName:"li"},"platformio.ini")," file. Note that if you want to use another version of the Watchy library, you can put any file or git path here.")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Some users have reported problems with one of the supported RTC modules: The module ",Object(o.b)("inlineCode",{parentName:"p"},"PCF8563")," seems to be supported during first boots, but their library is overriden by PlatformIO using a broken version - so you need to add an other repository (",Object(o.b)("inlineCode",{parentName:"p"},"https://github.com/orbitalair/Rtc_Pcf8563.git"),") to prevent that."))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"lib_deps =\n    sqfmi/Watchy @ 1.4.1 ; Pinned version to ensure we don't pull broken code\n    https://github.com/tzapu/WiFiManager.git#v2.0.11-beta ; Pinned for the same reason\nlib_ldf_mode = deep+\nboard_build.partitions = min_spiffs.csv\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Also pin the version of platform ",Object(o.b)("inlineCode",{parentName:"li"},"espressif32")," to ensure compatibility.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"  [env:esp32dev]\n- platform = espressif32\n+ platform = espressif32 @ ~3.5.0\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run PlatformIO, it will download dependencies such as the Watchy library, but then fail to compile because there aren't any source files in ",Object(o.b)("inlineCode",{parentName:"li"},"src/")," yet. So when the dependencies are downloaded, copy the ",Object(o.b)("inlineCode",{parentName:"li"},"7_SEG")," example files to ",Object(o.b)("inlineCode",{parentName:"li"},"src/"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pio run # will fail compilation but will download dependencies\ncp .pio/libdeps/esp32dev/Watchy/examples/WatchFaces/7_SEG/*.{ino,cpp,h} src/\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Plug in your watchy, compile and then upload the watch face:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pio run -t upload\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Watch the serial port output")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pio device monitor\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Celebrate by watching ascii star wars")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"telnet towel.blinkenlights.nl\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Additional keys you'll probably want to add to your ",Object(o.b)("inlineCode",{parentName:"li"},"platformio.ini")," file:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"upload_speed = 3000000\nupload_port = /dev/cu.usbserial-MQK8G8\nmonitor_port = /dev/cu.usbserial-MQK8G8\nmonitor_speed = 115200\nmonitor_filters = esp32_exception_decoder\n")))}s.isMDXComponent=!0}}]);