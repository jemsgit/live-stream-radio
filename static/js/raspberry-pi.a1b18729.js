(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/raspberryPi.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),o=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js");function m(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}a.default=function(e){var a=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"raspberry-pi"}},"Raspberry Pi"),o.a.createElement(r.MDXTag,{name:"p",components:a},"This page contains tips for setting up ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"live-stream-radio")," on a raspberry pi."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"ffmpeg-installation"}},"FFmpeg Installation"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Installing live-stream-radio on a raspberry pi follows the same proedures from the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/cli/getting-started"}},"CLI Getting Started"),", however, there is a more streamlined way of getting FFmpeg installed. Since the project was formerly called ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"piStreamRadio"),", we have a FFmpeg build that can still be downloaded and used directly. First, you need to install the build dependencies:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"# Install some shared libs\nsudo apt-get install -y gifsicle        autoconf automake build-essential libass-dev        libfreetype6-dev libtheora-dev libtool libvorbis-dev        pkg-config texinfo zlib1g-dev libgnutls28-dev        librtmp-dev libssl-dev libx264-dev libasound2-dev\n\n# Install an audio decoder\nwget http://ftp.us.debian.org/debian/pool/non-free/f/fdk-aac/libfdk-aac-dev_0.1.3+20140816-2_armhf.deb\nwget http://ftp.us.debian.org/debian/pool/non-free/f/fdk-aac/libfdk-aac0_0.1.3+20140816-2_armhf.deb\n\n# Install our audio decoders\nsudo dpkg -i libfdk-aac0_0.1.3+20140816-2_armhf.deb\nsudo dpkg -i libfdk-aac-dev_0.1.3+20140816-2_armhf.deb\n\n# Clean up the .deb files for the decoders\nrm libfdk-aac0_0.1.3+20140816-2_armhf.deb\nrm libfdk-aac-dev_0.1.3+20140816-2_armhf.deb\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Next, you can download ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"piStreamRadio")," 1.2.0 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/torch2424/live-stream-radio/blob/1.2.0/ffmpeg/ffmpeg"}},"ffmpeg raspberry pi build"),". ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Remember where this file is saved, as it will be used in the config.json later"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"configuring-your-project"}},"Configuring your project"),o.a.createElement(r.MDXTag,{name:"p",components:a},"After following the easy FFmpeg installation steps above, and completing the rest of the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/cli/getting-started"}},"CLI Getting Started"),", here are some nice defaults for raspberry pi to get things performing better. You want to replace the values of the keys in your project ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"congig.json")," with the ones below:"),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Field"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Usage"))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"audio_codec"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'"libfdk_aac"')),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"video_height"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'"360"')),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"video_width"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'"640"')),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"video_fps"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'"18"')),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"crf"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'"32"')),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"preset"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},'"ultrafast"')))),o.a.createElement(r.MDXTag,{name:"p",components:a},"This should definitely help performance and reduce buffering for your viewers."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"adding-video-to-your-project"}},"Adding Video to your project"),o.a.createElement(r.MDXTag,{name:"p",components:a},"We ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Definitely")," reccomend using the fastest formats for decoding so that they can be encoded faster and put less strain on the pi. We reccomend adding ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".webm")," to store your video, as for some reason FFmpeg tends to handle this to best."))}}}]);